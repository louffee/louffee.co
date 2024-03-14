import { drizzle } from 'drizzle-orm/postgres-js'

import postgresClient from './postgres-client'
import * as schema from './schema'

/**
 * The `db` object is instantiated with the [Drizzle](https://orm.drizzle.team)
 * builder, connecting to the Postgres database via the pool established by the
 * `DATABASE_URL` environment variable.
 *
 * @see https://orm.drizzle.team/docs/overview
 */
const db = drizzle(postgresClient, {
  schema,
})

export default db
