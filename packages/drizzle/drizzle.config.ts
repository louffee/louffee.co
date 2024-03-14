import env from '@louffee/env'
import type { Config } from 'drizzle-kit'

/**
 * The pathname where the database schema is located. This is used to connect to
 * the database and generate the migrations for the database.
 */
const SCHEMA_PATHNAME = './schema/index.ts' as const

/**
 * The pathname where the migrations will be outputted to. This is used to
 * generate the migrations for the database.
 */
const OUTPUT_PATHNAME = './db/migrations/drizzle' as const

/**
 * The configuration for the Drizzle ORM to connect to the database and identify
 * where the database schemas are. This configuration sets the driver to 'pg'
 * for Postgres.
 *
 * Also, it is good to note that the schema path is set to be inside its own
 * TypeScript module in the workspace setup for this project. The `@louffee/db`
 * package is the package that contains the database schema files.
 */
export default {
  schema: SCHEMA_PATHNAME,
  out: OUTPUT_PATHNAME,
  driver: 'pg',
  dbCredentials: {
    connectionString: env('DATABASE_URL'),
  },
  verbose: true,
} satisfies Config
