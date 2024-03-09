import { expect, test } from 'vitest'

import getGitHubRepositoryPath from './get-github-repository-path'

test('should return the GitHub repository path for a given file path', () => {
  const filePath = 'package.json'
  const expectedRepositoryPath = 'https://github.com/louffee/louffee.co/blob/main/package.json'

  const repositoryPath = getGitHubRepositoryPath(filePath)

  expect(repositoryPath).toEqual(expectedRepositoryPath)
})
