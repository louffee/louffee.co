import { render } from '@testing-library/react'
import { expect, test } from 'vitest'

import Icon from './icon'

test('renders the correct icon', () => {
  const name = 'ExclamationTriangle'
  const testId = 'icon'

  const { getByTestId } = render(<Icon name={name} data-testid={testId} />)

  const iconElement = getByTestId(testId)
  expect(iconElement).toBeDefined()
})

test('passes the size down to the SVG', () => {
  const name = 'ExclamationTriangle'
  const width = 24
  const height = 24
  const className = 'custom-icon'

  const { container } = render(<Icon name={name} width={width} height={height} className={className} />)

  const iconElement = container.querySelector('svg[width="24"][height="24"].custom-icon')
  expect(iconElement).toBeDefined()
})
