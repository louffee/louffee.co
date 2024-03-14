declare namespace NodeJS {
  interface ProcessEnv {
    /**
     * The key which indicates the Google verification key for the site
     * indexation.
     */
    readonly GOOGLE_VERIFICATION_KEY: string
  }
}
