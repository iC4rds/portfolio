import { dev } from '$app/environment';
import { drizzle } from 'drizzle-orm/libsql';
import { createClient } from '@libsql/client';
import * as schema from './schema';
import { env } from '$env/dynamic/private';

console.log('🔧 DB Init Start');
console.log('DATABASE_URL exists:', !!env.DATABASE_URL);
console.log('DATABASE_URL prefix:', env.DATABASE_URL?.substring(0, 20));
console.log('AUTH_TOKEN exists:', !!env.DATABASE_AUTH_TOKEN);

if (!env.DATABASE_URL) throw new Error('DATABASE_URL is not set');
if (!dev && !env.DATABASE_AUTH_TOKEN) throw new Error('DATABASE_AUTH_TOKEN is not set');

let db: any;

try {
  const client = createClient({
    url: env.DATABASE_URL,
    authToken: env.DATABASE_AUTH_TOKEN
  });
  console.log('✅ Client created');
  
  db = drizzle(client, { schema });
  console.log('✅ Drizzle initialized');
} catch (error) {
  console.log('❌ Error in DB init:', error);
  throw error;
}

export { db };
