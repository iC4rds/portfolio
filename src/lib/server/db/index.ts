// $lib/server/db/index.ts
import { drizzle } from 'drizzle-orm/libsql';
import * as schema from './schema';
import { env } from '$env/dynamic/private';

if (!env.DATABASE_URL) throw new Error('DATABASE_URL is not set');
if (!env.DATABASE_AUTH_TOKEN) throw new Error('DATABASE_AUTH_TOKEN is not set');

let client;
if (env.VERCEL) {
  // Workaround für Vercel
  const libsql = require('@libsql/client/http');
  client = libsql.createClient({
    url: env.DATABASE_URL,
    authToken: env.DATABASE_AUTH_TOKEN,
  });
} else {
  const { createClient } = await import('@libsql/client/web');
  client = createClient({
    url: env.DATABASE_URL,
    authToken: env.DATABASE_AUTH_TOKEN,
  });
}

export const db = drizzle(client, { schema });