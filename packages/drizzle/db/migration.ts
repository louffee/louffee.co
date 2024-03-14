// Please notice that we are running this script with bun. This has not been
// tested on NodeJS or Deno. To execute this script, you'd need to run:
// "bun x ./src/_/migrate.ts"

import path from 'node:path'

import db from '@louffee/drizzle/migration/db'
import postgresClient from '@louffee/drizzle/migration/postgres-client'
import { migrate } from 'drizzle-orm/postgres-js/migrator'

/**
 * The folder where the migrations are located. /db/migrations/drizzle
 */
const migrationsFolder = path.join(process.cwd(), 'db', 'migrations', 'drizzle')

await migrate(db, { migrationsFolder })
await postgresClient.end()
