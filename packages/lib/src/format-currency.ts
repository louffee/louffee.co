/**
 * The `formatCurrency()` function formats a number as a currency string. If the
 * `locale` parameter is not provided, the parameter defaults to `"en-US"`.
 *
 * @example
 * ```ts
 * formatCurrency(1000, 'USD') // "$1,000.00"
 * formatCurrency(1000, 'BRL', 'pt-BR') // "R$ 1.000,00"
 * ```
 */
function formatCurrency(value: number, currency: string, locale = 'en-US'): string {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
  }).format(value)
}

export default formatCurrency
