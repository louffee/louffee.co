import { type ReactNode } from 'react'

import { DocsContainer as Storybook$DocsContainer, type DocsContainerProps as Storybook$DocsContainerProps } from '@storybook/blocks'

interface DocsContainerProps extends Storybook$DocsContainerProps {
  children: ReactNode
}

function DocsContainer({ children, ...props }: DocsContainerProps) {
  return <Storybook$DocsContainer {...props}>{children}</Storybook$DocsContainer>
}

export default DocsContainer
