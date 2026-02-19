import { json } from '@sveltejs/kit';
import { createClient } from '@libsql/client';
import { env } from '$env/dynamic/private';

export const GET = async () => {
  // 1. Erstmal nur die URLs checken
  console.log('URL:', env.DATABASE_URL?.substring(0, 30));
  console.log('Token exists:', !!env.DATABASE_AUTH_TOKEN);
  
  try {
    const client = createClient({
      url: env.DATABASE_URL!.trim(),
      authToken: env.DATABASE_AUTH_TOKEN?.trim()
    });
    
    // Absoluter Minimal-Test
    const result = await client.execute('SELECT 1');
    
    return json({ 
      success: true, 
      result: result.rows[0],
      message: 'Turso connection works!'
    });
    
  } catch (error: any) {
    // Detaillierten Error loggen
    console.error('Full error:', {
      message: error.message,
      name: error.name,
      stack: error.stack,
      cause: error.cause
    });
    
    return json({ 
      success: false, 
      error: error.message,
      name: error.name,
      // Token nicht loggen, aber Länge checken
      token_length: env.DATABASE_AUTH_TOKEN?.length
    }, { status: 500 });
  }
};