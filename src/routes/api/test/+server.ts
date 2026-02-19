import { json } from '@sveltejs/kit';
import { env } from '$env/dynamic/private';

export const GET = async () => {
  return json({
    database_url_exists: !!env.DATABASE_URL,
    database_url: env.DATABASE_URL?.substring(0, 30) + '...',
    auth_token_exists: !!env.DATABASE_AUTH_TOKEN,
    node_env: process.env.NODE_ENV,
    vercel_env: process.env.VERCEL_ENV
  });
};