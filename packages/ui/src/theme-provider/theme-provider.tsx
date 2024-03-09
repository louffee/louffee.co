import { Fragment, type JSX, type ReactNode } from 'react'

import '../globals.css'

export interface ThemeProviderProps {
  /**
   * The children to render within the theme provider.
   */
  children: ReactNode
}

/**
 * The component which wraps the application and loads the theme styles.
 *
 * @example
 * ```tsx
 * <ThemeProvider>{children}</ThemeProvider>
 * ```
 *
 * @props {@link ThemeProviderProps}
 */
function ThemeProvider({ children }: ThemeProviderProps): JSX.Element {
  return <Fragment>{children}</Fragment>
}

export default ThemeProvider
