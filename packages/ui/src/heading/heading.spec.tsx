import { render } from '@testing-library/react'
import { describe, expect, test } from 'vitest'

import Heading from './heading'

describe('given that the Heading component is rendered on the page', () => {
  describe('when the variant is set to "h1"', () => {
    test('renders the <h1> HTML element', () => {
      const childText = 'Lorem ipsum'

      const { getByText } = render(<Heading variant="h1">{childText}</Heading>)

      const headingTag = getByText(childText).tagName
      expect(headingTag).toBe('H1')
    })
  })
  describe('when the variant is set to "h2"', () => {
    test('renders the <h2> HTML element', () => {
      const childText = 'Lorem ipsum'

      const { getByText } = render(<Heading variant="h2">{childText}</Heading>)

      const headingTag = getByText(childText).tagName
      expect(headingTag).toBe('H2')
    })
  })
  describe('when the variant is set to "h3"', () => {
    test('renders the <h3> HTML element', () => {
      const childText = 'Lorem ipsum'

      const { getByText } = render(<Heading variant="h3">{childText}</Heading>)

      const headingTag = getByText(childText).tagName
      expect(headingTag).toBe('H3')
    })
  })
  describe('when the variant is set to "h4"', () => {
    test('renders the <h4> HTML element', () => {
      const childText = 'Lorem ipsum'

      const { getByText } = render(<Heading variant="h4">{childText}</Heading>)

      const headingTag = getByText(childText).tagName
      expect(headingTag).toBe('H4')
    })
  })
  describe('when the variant is set to "h5"', () => {
    test('renders the <h5> HTML element', () => {
      const childText = 'Lorem ipsum'

      const { getByText } = render(<Heading variant="h5">{childText}</Heading>)

      const headingTag = getByText(childText).tagName
      expect(headingTag).toBe('H5')
    })
  })
  describe('when the variant is set to "h6"', () => {
    test('renders the <h6> HTML element', () => {
      const childText = 'Lorem ipsum'

      const { getByText } = render(<Heading variant="h6">{childText}</Heading>)

      const headingTag = getByText(childText).tagName
      expect(headingTag).toBe('H6')
    })
  })
})
