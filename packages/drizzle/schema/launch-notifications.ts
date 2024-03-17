import { integer, pgTable, text } from 'drizzle-orm/pg-core'

/**
 * @internal The name of the `launch_notifications` table.
 */
const TABLE_NAME = 'launch_notifications' as const

/**
 * The Drizzle expression which defines the `launch_notifications` table in the
 * database.
 *
 * This table is responsible for storing the data of the contact of the users
 * interested in the launch of the application.
 *
 * @see https://authjs.dev/reference/adapter/drizzle#postgres
 */
const launchNotifications = pgTable(TABLE_NAME, {
  emailAddress: text('emailAddress').notNull(),
  createdAt: integer('createdAt').notNull().default(new Date().getTime()),
  updatedAt: integer('updatedAt').notNull().default(new Date().getTime()),
})

export default launchNotifications
