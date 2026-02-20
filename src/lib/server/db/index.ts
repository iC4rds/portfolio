import { drizzle } from 'drizzle-orm/libsql';
import { createClient } from '@libsql/client/http';
import * as schema from './schema';
import { building } from '$app/environment';

// Während des Builds keine Datenbankverbindung herstellen
let _db: any = null;

export async function getDb() {
  // Wenn wir im Build sind, gib null zurück
  if (building) {
    return null;
  }

  // Wenn wir bereits eine Verbindung haben, benutze sie
  if (_db) {
    return _db;
  }

  // Dynamischer Import der Environment-Variablen
  const { env } = await import('$env/dynamic/private');
  
  if (!env.DATABASE_URL || !env.DATABASE_AUTH_TOKEN) {
    console.error('Database credentials missing');
    return null;
  }

  try {
    const client = createClient({
      url: env.DATABASE_URL,
      authToken: env.DATABASE_AUTH_TOKEN,
    });
    
    _db = drizzle(client, { schema });
    return _db;
  } catch (error) {
    console.error('Failed to create database connection:', error);
    return null;
  }
}

// Für TypeScript
export type DbType = Awaited<ReturnType<typeof getDb>>;