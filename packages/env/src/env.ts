import { z } from 'zod'

/**
 * The object which defines the environment key names.
 */
const environmentKeyMap = {
  nodeJS: {
    env: 'NODE_ENV',
  },
  vercelCloud: {
    env: 'VERCEL_ENV',
  },
  nextJS: {
    public: {
      vercelURL: 'NEXT_PUBLIC_VERCEL_URL',
    },
  },
  database: {
    URL: 'DATABASE_URL',
    directURL: 'DIRECT_DATABASE_URL',
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
 * The Zod schema which represents the environment variables.
 */
const EnvironmentVariablesSchema = z.object({
  [environmentKeyMap.nodeJS.env]: z.enum([...environmentNames, 'test']),

  [environmentKeyMap.vercelCloud.env]: z.enum(environmentNames),

  [environmentKeyMap.nextJS.public.vercelURL]: z.string().default('http://localhost:3000'),

  [environmentKeyMap.database.URL]: z.string(),
  [environmentKeyMap.database.directURL]: z.string(),

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
const env = EnvironmentVariablesSchema.parse(process.env)

declare namespace NodeJS {
  type ProcessEnv = z.infer<typeof EnvironmentVariablesSchema>
}

export default env
