import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { afterAll, beforeEach, describe, expect, test, vi } from 'vitest'

import Button from './button'

describe('given that the user is on any interactive page', () => {
  describe('when the user clicks on the call-to-action button', () => {
    test('then the onClick event should be fired', async () => {
      const onClick = vi.fn()
      const { getByRole } = render(<Button onClick={onClick}>Lorem Ipsum</Button>)

      const button = getByRole('button')
      await userEvent.click(button)

      expect(onClick).toHaveBeenCalled()
    })
    describe('and the button is disabled', () => {
      test('then the onClick event should not be fired', async () => {
        const onClick = vi.fn()

        const { getByRole } = render(
          <Button disabled={true} onClick={onClick}>
            Lorem Ipsum
          </Button>,
        )

        const button = getByRole('button')
        await userEvent.click(button)

        expect(onClick).not.toHaveBeenCalled()
      })
    })
  })
  describe('when the user hovers the cursor over the call-to-action button', () => {
    test('then the onMouseOver event should be fired', async () => {
      const onMouseOver = vi.fn()

      const { getByRole } = render(<Button onMouseOver={onMouseOver}>Lorem Ipsum</Button>)

      const button = getByRole('button')
      await userEvent.hover(button)

      expect(onMouseOver).toHaveBeenCalled()
    })
  })
  describe('when the button renders', () => {
    describe('and the button is icon-sized', () => {
      describe('and the button has neither a aria-label nor a aria-labelledby attribute', () => {
        let consoleWarn: typeof console.warn
        beforeEach(() => {
          consoleWarn = window.console.warn
          window.console.warn = vi.fn()
        })
        afterAll(() => {
          window.console.warn = consoleWarn
        })

        test('then the console should log a warning because the button is not accessible', async () => {
          const warn = vi.spyOn(console, 'warn')

          const { getByRole } = render(
            <Button size="icon">
              <i />
            </Button>,
          )
          const button = getByRole('button')
          await userEvent.click(button)

          expect(warn).toHaveBeenCalledWith(expect.stringMatching(/aria-label|aria-labelledby/))
        })
      })
    })
  })
})
