import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { env } from '$env/dynamic/private';

export const POST: RequestHandler = async ({ request }) => {
  const data = await request.json();
  
  if (!data.username || !data.password) {
    return json(
      { error: 'Username und password sind nicht angegeben' }, 
      { status: 400 }
    );
  }

  if (!(login(data.username, data.password))) {
    return json(
      { error: 'Username oder password ist falsch' }, 
      { status: 401 }
    );
  }
  
  console.log(`User ${data.username} logged in successfully`);
  return json("Login erfolgreich", { status: 201 });
};

const login = (username: string, password: string): boolean => {
  if (username === env.USERNAME && password === env.PASSWORD) {
    return true;
  }
  return false;
};