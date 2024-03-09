import { expect, test } from 'vitest'

import styled from './styled'

test('returns a function that generates the correct class names', () => {
  const base = 'h-10 w-10'
  const variants = {
    color: {
      red: 'bg-red-500',
      blue: 'bg-blue-500',
      green: 'bg-green-500',
    },
  }

  const squareStyle = styled({ base, variants })
  const classNames = squareStyle({ color: 'red' })

  expect(classNames).toBe('h-10 w-10 bg-red-500')
})

test('returns a function that generates the correct class names with no props', () => {
  const base = 'h-10 w-10'

  const squareStyle = styled({ base, variants: {} })
  const classNames = squareStyle()

  expect(classNames).toBe('h-10 w-10')
})
