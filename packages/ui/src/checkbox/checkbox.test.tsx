import { useState, type JSX } from 'react'

import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { expect, test } from 'vitest'

import Checkbox, { type CheckboxStateUpdateEvent } from './checkbox'

// NOTE: The following tests are not exhaustive and kind of test the behaviour
//       of the Radix UI's Checkbox component implemented under the hood, so it
//       seems like these tests are a bit faraway from "unit testing."

test('renders an element with the "checkbox" role', () => {
  const role = 'checkbox' as const

  const { getByRole } = render(<Checkbox />)

  const checkboxElement = getByRole(role)
  expect(checkboxElement).toBeInTheDocument()
})

test('changes the aria-checked to true if the user clicks on the checkbox', () => {
  function ControlledComponentUnderTest(): JSX.Element {
    const [checked, setChecked] = useState(false)
    function handleCheckedUpdate({ checked }: CheckboxStateUpdateEvent): void {
      setChecked(checked)
    }
    return <Checkbox checked={checked} onCheckedUpdate={handleCheckedUpdate} />
  }
  const role = 'checkbox' as const
  const { container, getByRole } = render(<ControlledComponentUnderTest />)

  userEvent.click(getByRole(role))

  const checkboxElement = container.querySelector('button[aria-checked="true"]')
  expect(checkboxElement).toBeDefined()
})
