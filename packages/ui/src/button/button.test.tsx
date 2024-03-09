import { render } from '@testing-library/react'
import { expect, test } from 'vitest'

import Button from './button'

test('renders the button with the provided label', () => {
  const { getByRole } = render(<Button>Lorem Ipsum</Button>)

  const button = getByRole('button')

  expect(button).toBeTruthy()
})

test('applies secondary variant styles', () => {
  const { container } = render(<Button variant="secondary">Lorem Ipsum</Button>)

  const buttonElement = container.querySelector('button.bg-secondary')

  expect(buttonElement).toBeTruthy()
})

test('applies primary variant styles', () => {
  const { container } = render(<Button variant="primary">Lorem Ipsum</Button>)

  const buttonElement = container.querySelector('button.bg-primary')

  expect(buttonElement).toBeTruthy()
})

test('applies destructive variant styles', () => {
  const { container } = render(<Button variant="destructive">Lorem Ipsum</Button>)

  const buttonElement = container.querySelector('button.bg-destructive')

  expect(buttonElement).toBeTruthy()
})

test('applies outlined variant styles', () => {
  const { container } = render(<Button variant="outlined">Lorem Ipsum</Button>)

  const buttonElement = container.querySelector('button.border')

  expect(buttonElement).toBeTruthy()
})

test('applies ghost variant styles', () => {
  const { container } = render(<Button variant="ghost">Lorem Ipsum</Button>)

  const buttonElement = container.querySelector('button.hover\\:bg-accent')

  expect(buttonElement).toBeTruthy()
})

test('applies link variant styles', () => {
  const { container } = render(<Button variant="link">Lorem Ipsum</Button>)

  const buttonElement = container.querySelector('button.underline-offset-4')

  expect(buttonElement).toBeTruthy()
})

test('applies sm size styles', () => {
  const { container } = render(<Button size="sm">Lorem Ipsum</Button>)

  const buttonElement = container.querySelector('button.h-8')

  expect(buttonElement).toBeTruthy()
})

test('applies md size styles', () => {
  const { container } = render(<Button size="md">Lorem Ipsum</Button>)

  const buttonElement = container.querySelector('button.h-9')

  expect(buttonElement).toBeTruthy()
})

test('applies lg size styles', () => {
  const { container } = render(<Button size="lg">Lorem Ipsum</Button>)

  const buttonElement = container.querySelector('button.h-10')

  expect(buttonElement).toBeTruthy()
})

test('applies icon size styles', () => {
  const { container } = render(
    <Button size="icon" aria-label="Lorem Ipsum">
      Lorem Ipsum
    </Button>,
  )

  const buttonElement = container.querySelector('button.h-9.w-9')

  expect(buttonElement).toBeTruthy()
})
