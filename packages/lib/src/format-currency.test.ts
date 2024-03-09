import { expect, test } from 'vitest'

import formatCurrency from './format-currency'

test('should format a number as a currency string in USD', () => {
  const amount = 1000
  const currency = 'USD'
  const locale = 'en-US'

  const result = formatCurrency(amount, currency, locale)

  expect(result).toBe('$1,000.00')
})

test('should format a number as a currency string in BRL', () => {
  const amount = 1000
  const currency = 'BRL'
  const locale = 'pt-BR'

  const result = formatCurrency(amount, currency, locale)

  expect(result).toBe('R$ 1.000,00')
})
