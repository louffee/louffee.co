import { type JSX, type ReactNode } from 'react'

import { render, type RenderOptions } from '@testing-library/react'

/**
 * This function is a wrapper around `render` that allows you to render a
 * component that returns a promise. This is useful for testing asynchronous
 * RSC - React Server Components.
 *
 * @param Component - The component to render
 * @param props - The props to pass to the component
 * @param options - The options to pass to the render function from the
 *                  `@testing-library/react` package.
 *
 * @template P - The type of the props for the component
 *
 * @see https://www.marcusoft.net/2022/11/nextjs-testing-async-react-components.html
 */
async function renderAsync<P extends object>(
  Component: (props: P) => Promise<JSX.Element | ReactNode | null>,
  props: P = {} as P,
  options?: RenderOptions,
) {
  const jsx = await Component(props)
  return render(jsx, options)
}

export default renderAsync
