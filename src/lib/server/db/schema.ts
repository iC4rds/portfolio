import { sqliteTable, integer, text } from 'drizzle-orm/sqlite-core';

export const messages = sqliteTable('messages', {
	id: integer('id').primaryKey({ autoIncrement: true }),
	name: text('name').notNull(),
	email: text('email').notNull(),
	subject: text('subject').notNull(),
	message: text('message').notNull(),
	createdAt: integer('created_at', { mode: 'timestamp' }).notNull().$defaultFn(() => new Date()),
});
