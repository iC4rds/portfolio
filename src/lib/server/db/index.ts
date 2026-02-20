import { drizzle } from 'drizzle-orm/libsql';
import { createClient } from '@libsql/client/http';
import * as schema from './schema';
import { env } from '$env/dynamic/private';

// Prüfung nur, wenn wir nicht im Build sind
if (process.env.NODE_ENV !== 'production' || !process.env.CF_PAGES) {
  if (!env.DATABASE_URL) throw new Error('DATABASE_URL is not set');
  if (!env.DATABASE_AUTH_TOKEN) throw new Error('DATABASE_AUTH_TOKEN is not set');
}

const client = createClient({
  url: env.DATABASE_URL!,
  authToken: env.DATABASE_AUTH_TOKEN!,
});

export const db = drizzle(client, { schema });