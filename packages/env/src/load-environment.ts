import { config } from 'dotenv'

/**
 * The root of the workspace.
 */
const WORKSPACE_ROOT = '../../..' as const

/**
 * Synchronously loads the environment variables from the `.env` file in the
 * root of the workspace.
 */
function loadEnvironment(): void {
  try {
    config({
      path: `${WORKSPACE_ROOT}/.env`,
    })
  } catch {
    // NOTE: For some reason, despite running on the server, the `dotenv`
    //       package is getting caught in the `try` block with the error on the
    //       local environment: Module not found: Can't resolve 'path' - from
    //       dotenv/config function.
  }
}

export default loadEnvironment
