import { json } from '@sveltejs/kit';
import { createClient } from '@libsql/client';
import { env } from '$env/dynamic/private';

export const GET = async () => {
  const results: any = {
    env_check: {
      database_url_exists: !!env.DATABASE_URL,
      auth_token_exists: !!env.DATABASE_AUTH_TOKEN
    }
  };

  // 1. Direkte Turso Verbindung testen
  try {
    const client = createClient({
      url: env.DATABASE_URL!,
      authToken: env.DATABASE_AUTH_TOKEN
    });

    // Einfacher Test-Query
    const testResult = await client.execute('SELECT 1 as connection_test');
    results.turso_connection = {
      success: true,
      result: testResult.rows[0]
    };
  } catch (error) {
    results.turso_connection = {
      success: false,
      error: error instanceof Error ? error.message : String(error),
      type: error instanceof Error ? error.name : 'unknown'
    };
  }

  // 2. Prüfen ob messages Tabelle existiert
  try {
    const client = createClient({
      url: env.DATABASE_URL!,
      authToken: env.DATABASE_AUTH_TOKEN
    });
    
    const tables = await client.execute(`
      SELECT name FROM sqlite_master WHERE type='table';
    `);
    
    results.tables = tables.rows;
    
    // Prüfe speziell messages Tabelle
    const messagesTable = tables.rows.find((t: any) => t.name === 'messages');
    results.messages_table_exists = !!messagesTable;
    
    if (messagesTable) {
      // Tabellenstruktur prüfen
      const tableInfo = await client.execute(`PRAGMA table_info(messages);`);
      results.messages_schema = tableInfo.rows;
      
      // Anzahl Einträge
      const count = await client.execute(`SELECT COUNT(*) as count FROM messages;`);
      results.messages_count = count.rows[0];
    }
  } catch (error) {
    results.table_check_error = error instanceof Error ? error.message : String(error);
  }

  // 3. Deine Drizzle-Initialisierung testen
  try {
    const { db } = await import('$lib/server/db');
    const { messages } = await import('$lib/server/db/schema');
    const { desc } = await import('drizzle-orm');
    
    const allMessages = await db.select().from(messages).orderBy(desc(messages.createdAt));
    results.drizzle_query = {
      success: true,
      count: allMessages.length,
      sample: allMessages.slice(0, 2)
    };
  } catch (error) {
    results.drizzle_query = {
      success: false,
      error: error instanceof Error ? error.message : String(error),
      stack: error instanceof Error ? error.stack?.split('\n').slice(0, 3) : undefined
    };
  }

  return json(results);
};