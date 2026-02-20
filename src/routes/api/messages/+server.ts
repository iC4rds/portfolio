import { json } from '@sveltejs/kit';
import { db } from '$lib/server/db';
import { messages } from '$lib/server/db/schema';
import type { RequestHandler } from './$types';
import { desc } from 'drizzle-orm';

export const GET: RequestHandler = async () => {
  try {
    const allMessages = await db
      .select()
      .from(messages)
      .orderBy(desc(messages.createdAt));
    
    return json(allMessages);
  } catch (error) {
    console.error('Database error:', error);
    return json({ error: 'Failed to fetch messages' }, { status: 500 });
  }
};

export const POST: RequestHandler = async ({ request }) => {
  try {
    const data = await request.json();
    
    if (!data.name || !data.email || !data.subject || !data.message) {
      return json(
        { error: 'Name, Email, Betreff und Message sind Pflichtfelder' }, 
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return json(
        { error: 'Ungültige Email-Adresse' }, 
        { status: 400 }
      );
    }

    const newMessage = await db.insert(messages).values({
      name: data.name.trim(),
      email: data.email.trim(),
      subject: data.subject?.trim(),
      message: data.message.trim(),
      createdAt: new Date()
    }).returning();
    
    return json(newMessage[0], { status: 201 });
  } catch (error) {
    console.error('Database error:', error);
    return json({ error: 'Failed to create message' }, { status: 500 });
  }
};