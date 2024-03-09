import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { afterAll, beforeEach, describe, expect, test, vi } from 'vitest'

import IconButton from './icon-button'

describe('given that the user is on any interactive page', () => {
  describe('when the user clicks on the call-to-action icon button', () => {
    test('then the onClick event should be fired', async () => {
      const onClick = vi.fn()
      const { getByRole } = render(<IconButton aria-label="Lorem Ipsum" onClick={onClick} icon="GitHubLogo" />)

      const button = getByRole('button')
      await userEvent.click(button)

      expect(onClick).toHaveBeenCalled()
    })
    describe('and the button is disabled', () => {
      test('then the onClick event should not be fired', async () => {
        const onClick = vi.fn()
        const { getByRole } = render(<IconButton aria-label="Lorem Ipsum" disabled={true} onClick={onClick} icon="GitHubLogo" />)

        const button = getByRole('button')
        await userEvent.click(button)

        expect(onClick).not.toHaveBeenCalled()
      })
    })
  })
  describe('when the user hovers the cursor over the call-to-action icon button', () => {
    test('then the onMouseOver event should be fired', async () => {
      const onMouseOver = vi.fn()
      const { getByRole } = render(<IconButton aria-label="Lorem Ipsum" onMouseOver={onMouseOver} icon="GitHubLogo" />)

      const button = getByRole('button')
      await userEvent.hover(button)

      expect(onMouseOver).toHaveBeenCalled()
    })
  })
  describe('when the icon button renders', () => {
    describe('and the icon prop is passed', () => {
      let consoleError: typeof console.error
      beforeEach(() => {
        consoleError = window.console.error
        window.console.error = vi.fn()
      })
      afterAll(() => {
        window.console.error = consoleError
      })
      describe('and the children prop is also passed', () => {
        test('then the icon prop should be used', () => {
          const { getByRole } = render(
            <IconButton aria-label="Lorem Ipsum" icon="GitHubLogo">
              <i>Icon</i>
            </IconButton>,
          )

          const button = getByRole('button')
          const icon = button.querySelector('svg')

          expect(icon).toBeTruthy()
        })
        test('then the console should log an error because the icon prop will be used', () => {
          const error = vi.spyOn(console, 'error')

          render(
            <IconButton aria-label="Lorem Ipsum" icon="GitHubLogo">
              <i>Icon</i>
            </IconButton>,
          )

          expect(error).toHaveBeenCalled()
        })
      })
    })
  })
})
