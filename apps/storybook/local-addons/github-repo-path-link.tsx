import { type JSX } from 'react'

import Link from 'next/link'

import getGitHubRepositoryPath from '@louffee/lib/get-github-repository-path'
import Icon from '@louffee/ui/icon'

interface GitHubRepoPathLinkProps {
  /**
   * The path to the file in Louffee's GitHub repository.
   */
  path: string
}

function GitHubRepoPathLink({ path }: GitHubRepoPathLinkProps): JSX.Element {
  return (
    <div
      style={{
        position: 'absolute',
        top: '6vh',
        right: '30vw',
        cursor: 'pointer',
        zIndex: 1,
      }}>
      <Link href={getGitHubRepositoryPath(path)} target="_blank" title="See it on GitHub">
        <Icon name="GitHubLogo" className="text-black" height={24} width={24} aria-hidden="true" />
      </Link>
    </div>
  )
}

export default GitHubRepoPathLink
