import { render } from '@testing-library/react'
import { expect, test } from 'vitest'

import Icon from './icon'

test('renders the correct icon', () => {
  const __ICON_NAME__ = 'ExclamationTriangle'
  const __TEST_ID__ = 'icon'

  const { getByTestId } = render(<Icon name={__ICON_NAME__} data-testid={__TEST_ID__} />)

  const iconElement = getByTestId(__TEST_ID__)
  expect(iconElement).toBeDefined()
})

test('passes the size down to the SVG', () => {
  const __ICON_NAME__ = 'ExclamationTriangle'
  const __WIDTH__ = 24
  const __HEIGHT__ = 24
  const __CLASS_NAME__ = 'custom-icon'

  const { container } = render(<Icon name={__ICON_NAME__} width={__WIDTH__} height={__HEIGHT__} className={__CLASS_NAME__} />)

  const iconElement = container.querySelector('svg[width="24"][height="24"].custom-icon')
  expect(iconElement).toBeDefined()
})
