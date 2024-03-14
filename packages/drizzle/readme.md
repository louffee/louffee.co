# Louffee / Drizzle

This module is used to generate and control the migrations and general
configuration such as table definition via the Drizzle schemas and seeding and
migration with the Drizzle Studio.

To power this small engine which centralises our database management and shape,
we use [Drizzle ORM](https://orm.drizzle.team).

Note that differently from most of the modules defined in the workspaces under
the `packages` directory, we don't use the `src` folder because we'd consider
the Drizzle configuration and management to be facilitated when running it from
the root of the NPM module.

## Migrations

To perform a migration, follow the steps below:

1. Apply the modification to the schema or schemas that have to be altered.
2. Run the `bun run db:generate` to trigger the Drizzle CLI and generate the
migration SQL raw files. These SQL files will be found in the
`db/migrations/drizzle` folder. There's also a
[`meta/_journal.json`](./db/migrations/drizzle/meta/_journal.json) which is
automatically generated/modified by Drizzle. Also, snapshots of the migrations
may be found in the same directory as `_journey.json`.
3. Run the `bun run db:migration`. Note that to run this command, the
`DATABASE_URL` environment variable must be defined in the `.env` file at the
root of this repository.

## Usage

The `@louffee/drizzle` is a **package**, therefore, it can be imported and
used to manipulate the data from the database. See an example below:

```ts
import db from '@louffee/drizzle/db'
import users from '@louffee/drizzle/users'

await db.select().from(users)
```
