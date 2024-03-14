import type { AdapterAccount } from '@auth/core/adapters'
import { integer, pgTable, primaryKey, text } from 'drizzle-orm/pg-core'

import users from './users'

/**
 * The Drizzle expression which defines the `accounts` table in the database.
 *
 * This table is responsible for storing the user's account information from
 * the various authentication providers.
 *
 * @see https://authjs.dev/reference/adapter/drizzle#postgres
 */
const accounts = pgTable(
  'accounts',
  {
    userId: text('userId')
      .notNull()
      .references(() => users.id, {
        onDelete: 'cascade',
      }),
    type: text('type').$type<AdapterAccount['type']>().notNull(),
    provider: text('provider').notNull(),
    providerAccountId: text('providerAccountId').notNull(),
    refresh_token: text('refresh_token'),
    access_token: text('access_token'),
    expires_at: integer('expires_at'),
    token_type: text('token_type'),
    scope: text('scope'),
    id_token: text('id_token'),
    session_state: text('session_state'),
  },
  ({ provider, providerAccountId }) => ({
    compoundKey: primaryKey({ columns: [provider, providerAccountId] }),
  }),
)

export default accounts
