import db from '@louffee/drizzle/db'
import users from '@louffee/drizzle/schema/users'
import cuid from 'cuid'

/**
 * The `seed()` function is used to seed the database with initial data.
 */
async function seed() {
  /**
   * The `createDefaultUser()` function inserts the default user into the
   * database.
   */
  async function createDefaultUser() {
    const [defaultUser] = await db
      .insert(users)
      .values({
        id: cuid(),
        image: 'https://placehold.co/400x400.png',
        name: 'John Doe',
        email: 'john.doe@email.com',
      })
      .onConflictDoNothing()
      .returning()

    return defaultUser
  }

  const defaultUser = await createDefaultUser()

  console.log(`[INFO] The default user has been created with the ID: "${defaultUser?.id}"`)
}

seed()
