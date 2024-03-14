import { pgTable, text, timestamp } from 'drizzle-orm/pg-core'

import users from './users'

/**
 * The Drizzle expression which defines the `sessions` table in the database.
 *
 * This table is responsible for storing the session tokens and their expiration
 * dates. It also stores the user ID to which the session token belongs.
 *
 * @see https://authjs.dev/reference/adapter/drizzle#postgres
 */
const sessions = pgTable('sessions', {
  sessionToken: text('sessionToken').notNull().primaryKey(),
  userId: text('userId')
    .notNull()
    .references(() => users.id, {
      onDelete: 'cascade',
    }),
  expires: timestamp('expires', {
    mode: 'date',
  }).notNull(),
})

export default sessions
