import path from 'node:path'

import dotenv from 'dotenv'
import { z } from 'zod'

dotenv.config({
  encoding: 'UTF-8',
  debug: true,
  path: path.resolve(process.cwd(), '..', '..', '.env'),
})

/**
 * The object which defines the environment key names.
 */
const environmentKeyMap = {
  nodeJS: {
    env: 'NODE_ENV',
  },
  vercelCloud: {
    env: 'VERCEL_ENV',
    URL: 'VERCEL_URL',
  },
  nextJS: {
    public: {
      vercelURL: 'NEXT_PUBLIC_VERCEL_URL',
    },
  },
  database: {
    URL: 'DATABASE_URL',
  },
  cloudflare: {
    account: {
      id: 'CLOUDFLARE_ACCOUNT_ID',
    },
    access: {
      key: 'CLOUDFLARE_ACCESS_KEY',
    },
    secret: {
      key: 'CLOUDFLARE_SECRET_KEY',
    },
    uploadBucket: {
      id: 'CLOUDFLARE_UPLOAD_BUCKET_ID',
      name: 'CLOUDFLARE_UPLOAD_BUCKET_NAME',
    },
    storage: {
      name: 'CLOUDFLARE_STORAGE_BUCKET_NAME',
    },
  },
  nextAuth: {
    secret: 'NEXTAUTH_SECRET',
    URL: 'NEXTAUTH_URL',
    public: {
      nextAuthURL: 'NEXT_PUBLIC_NEXTAUTH_URL',
    },
  },
  googleClient: {
    id: 'GOOGLE_CLIENT_ID',
    secret: 'GOOGLE_CLIENT_SECRET',
    public: {
      id: 'NEXT_PUBLIC_GOOGLE_CLIENT_ID',
    },
  },
} as const

/**
 * The object which contains the string literal types of the environment names.
 */
const environmentNamesMap = {
  development: 'development',
  preview: 'preview',
  production: 'production',
} as const

/**
 * The list of environment names.
 */
const environmentNames = [environmentNamesMap.development, environmentNamesMap.preview, environmentNamesMap.production] as const

/**
 * The list of the environment names which are found during the runtime.
 */
const runtimeEnvironmentNames = [...environmentNames, 'test'] as const

/**
 * The Zod schema which represents the environment variables.
 */
const EnvironmentVariablesSchema = z.object({
  [environmentKeyMap.nodeJS.env]: z.enum(runtimeEnvironmentNames),

  [environmentKeyMap.vercelCloud.env]: z.enum(environmentNames),
  [environmentKeyMap.vercelCloud.URL]: z.string().default('http://localhost:3000'),

  [environmentKeyMap.nextJS.public.vercelURL]: z.string().default('http://localhost:3000'),

  [environmentKeyMap.database.URL]: z.string(),

  [environmentKeyMap.cloudflare.account.id]: z.string().default('<account_id>'),
  [environmentKeyMap.cloudflare.access.key]: z.string().default('<access_key>'),
  [environmentKeyMap.cloudflare.secret.key]: z.string().default('<secret_key>'),
  [environmentKeyMap.cloudflare.uploadBucket.id]: z.string().default('<upload_bucket_id>'),
  [environmentKeyMap.cloudflare.uploadBucket.name]: z.string().default('<upload_bucket_name>'),
  [environmentKeyMap.cloudflare.storage.name]: z.string().default('<storage_bucket_name>'),

  [environmentKeyMap.nextAuth.secret]: z.string().default('<nextauth_secret>'),
  [environmentKeyMap.nextAuth.URL]: z.string().default('http://localhost:3000'),
  [environmentKeyMap.nextAuth.public.nextAuthURL]: z.string().default('http://localhost:3000'),

  [environmentKeyMap.googleClient.id]: z.string().default('<google_client_id>'),
  [environmentKeyMap.googleClient.secret]: z.string().default('<google_client_secret>'),
  [environmentKeyMap.googleClient.public.id]: z.string().default('<google_client_id>'),
})

/**
 * The object which contains the environment variables.
 */
const envObject = EnvironmentVariablesSchema.parse(process.env)

declare namespace NodeJS {
  type ProcessEnv = z.infer<typeof EnvironmentVariablesSchema>
}

/**
 * The type which represents the environment variable key.
 */
export type EnvironmentVariableName = keyof typeof envObject

/**
 * The `env()` function returns the value of the environment variable with the
 * given name. If you'd like to use the environment variable in a type-safe
 * manner, you can use the `envObject` object directly.
 *
 * @see {@link envObject}
 * @see {@link EnvironmentVariableName}
 */
function env(name: EnvironmentVariableName): string {
  return envObject[name]
}

export default env
