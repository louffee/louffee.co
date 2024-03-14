import { drizzle } from 'drizzle-orm/postgres-js'

import * as schema from '../schema'
import postgresClient from './postgres-client'

/**
 * The `db` object is instantiated with the [Drizzle](https://orm.drizzle.team)
 * builder, connecting to the Postgres database via the pool established by the
 * `DATABASE_URL` environment variable.
 *
 * Please notice that the `postgresMigrationClient` is used to run migrations on
 * the database. If you'd like to interact with the database in the application,
 * please use client created and made available the from `src/db.ts`.
 *
 * @see https://orm.drizzle.team/docs/overview
 */
const db = drizzle(postgresClient, {
  schema,
})

export default db
