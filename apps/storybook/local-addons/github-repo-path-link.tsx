import type { JSX } from 'react'

import Link from 'next/link'

import getGitHubRepositoryPath from '@louffee/lib/get-github-repository-path'

interface GitHubRepoPathLinkProps {
  /**
   * The path to the file in Louffee's GitHub repository.
   */
  path: string
}

function GitHubRepoPathLink({ path }: GitHubRepoPathLinkProps): JSX.Element {
  const href = getGitHubRepositoryPath(path)

  return (
    <div
      style={{
        cursor: 'pointer',
        zIndex: 1,
      }}>
      <Link href={href} target="_blank" title="See it on GitHub">
        Source code
      </Link>
    </div>
  )
}

export default GitHubRepoPathLink
