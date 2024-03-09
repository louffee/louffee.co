/**
 * This function returns the GitHub repository path for a given file path.
 */
function getGitHubRepositoryPath(path: string): string {
  return `https://github.com/louffee/louffee.co/blob/main/${path}`
}

export default getGitHubRepositoryPath
