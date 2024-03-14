import { pgTable, primaryKey, text, timestamp } from 'drizzle-orm/pg-core'

/**
 * The Drizzle expression which defines the `verificationTokens` table in the
 * database.
 *
 * This table is responsible for storing the verification tokens and their
 * expiration dates.
 *
 * @see https://authjs.dev/reference/adapter/drizzle#postgres
 */
const verificationTokens = pgTable(
  'verificationTokens',
  {
    identifier: text('identifier').notNull(),
    token: text('token').notNull(),
    expires: timestamp('expires', {
      mode: 'date',
    }).notNull(),
  },
  ({ identifier, token }) => ({
    compoundKey: primaryKey({
      columns: [identifier, token],
    }),
  }),
)

export default verificationTokens
