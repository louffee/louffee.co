import env from '@louffee/env'

import postgres from 'postgres'

const DATABASE_URL = env('DATABASE_URL')

/**
 * The Postgres client is created using the `DATABASE_URL` environment variable
 * to connect to the database. Note that this is the _migration client_, which
 * is used to run migrations on the database. If you'd like to interact with the
 * database in the application, please use client created and made available the
 * from  `src/postgres-client.ts` file instead.
 *
 * See the official documentation for more information:
 * https://orm.drizzle.team/kit-docs/overview
 */
const postgresClient = postgres(DATABASE_URL, { max: 1 })

export default postgresClient
