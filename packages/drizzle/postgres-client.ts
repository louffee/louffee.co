import env from '@louffee/env'

import postgres from 'postgres'

const DATABASE_URL = env('DATABASE_URL')

/**
 * The Postgres client is created using the `DATABASE_URL` environment variable
 * to connect to the database. If you're looking to perform a migration, you can
 * use the client instance created in the file at
 * `src/migration/postgres-client.ts` instead.
 *
 * See the official documentation for more information:
 * https://orm.drizzle.team/kit-docs/overview
 */
const postgresClient = postgres(DATABASE_URL)

export default postgresClient
