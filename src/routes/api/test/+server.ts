import { json } from '@sveltejs/kit';
import { createClient } from '@libsql/client';
import { env } from '$env/dynamic/private';

export const GET = async () => {
  // 1. ALLES in try-catch
  try {
    // 2. JEDEN Schritt einzeln try-catch
    let client;
    try {
      client = createClient({
        url: env.DATABASE_URL!,
        authToken: env.DATABASE_AUTH_TOKEN
      });
    } catch (clientError: any) {
      return json({ 
        error: 'Client creation failed',
        message: clientError.message,
        stack: clientError.stack 
      }, { status: 500 });
    }

    // 3. Query mit eigenem try-catch
    try {
      const result = await client.execute('SELECT 1');
      return json({ success: true, result: result.rows[0] });
    } catch (queryError: any) {
      return json({ 
        error: 'Query failed',
        message: queryError.message,
        name: queryError.name,
        code: queryError.code,
        stack: queryError.stack 
      }, { status: 500 });
    }

  } catch (outerError: any) {
    // 4. Äußerster Catch für alles andere
    return json({ 
      error: 'Outer catch',
      message: outerError.message,
      stack: outerError.stack 
    }, { status: 500 });
  }
};