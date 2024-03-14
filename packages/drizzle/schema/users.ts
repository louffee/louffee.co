import { pgTable, text, timestamp } from 'drizzle-orm/pg-core'
import { createInsertSchema, createSelectSchema } from 'drizzle-zod'
import type { ZodString, z } from 'zod'

/**
 * The Drizzle expression which defines the `users` table in the database.
 *
 * This table is responsible for storing the user's information.
 *
 * @see https://authjs.dev/reference/adapter/drizzle#postgres
 */
const users = pgTable('users', {
  id: text('id').notNull().primaryKey(),
  name: text('name'),
  email: text('email').notNull(),
  emailVerified: timestamp('emailVerified', {
    mode: 'date',
  }),
  image: text('image'),
})

/**
 * @internal The `shapeUserIdZodValidation` function unifies the user identifier
 *           validation of the `id` field.
 */
const shapeUserIdZodValidation = (id: ZodString) => id.cuid()
/**
 * @internal The `shapeEmailZodValidation` function unifies the email validation
 *           of the `email` field.
 */
const shapeEmailZodValidation = (email: ZodString) => email.email()

/**
 * The `InsertUserDataTransferObjectSchema` is the Zod schema which defines the
 * shape of the data that can be inserted into the `users` table.
 *
 * @see https://orm.drizzle.team/docs/zod
 */
export const InsertUserDataTransferObjectSchema = createInsertSchema(users, {
  id: (schema) => shapeUserIdZodValidation(schema.id),
  email: (schema) => shapeEmailZodValidation(schema.email),
})

/**
 * The `InsertUserDataTransferObject` is the TypeScript type which represents
 * the shape of the data that can be inserted into the `users` table.
 */
export type InsertUserDataTransferObject = z.infer<typeof InsertUserDataTransferObjectSchema>

/**
 * The `SelectUserDataTransferObjectSchema` is the Zod schema which defines the
 * shape of the data that can be selected from the `users` table.
 *
 * @see https://orm.drizzle.team/docs/zod
 */
export const SelectUserDataTransferObjectSchema = createSelectSchema(users, {
  id: (schema) => shapeUserIdZodValidation(schema.id),
  email: (schema) => shapeEmailZodValidation(schema.email),
})

/**
 * The `SelectUserDataTransferObject` is the TypeScript type which represents
 * the shape of the data that can be selected from the `users` table.
 */
export type SelectUserDataTransferObject = z.infer<typeof SelectUserDataTransferObjectSchema>

export default users
