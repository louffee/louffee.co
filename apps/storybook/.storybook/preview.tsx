import React from 'react'

import type { Preview } from '@storybook/react'

import ThemeProvider from '../../../packages/ui/src/theme-provider/theme-provider'
import DocsContainer from '../_/components/docs-container'

import '../_/styles/globals.css'
import '../_/styles/prismjs.css'
import '../_/styles/storybook.css'

declare global {
  interface Window {
    getEmbedNamespace: () => string | null
  }
}

window.getEmbedNamespace = () => {
  const url = new URL(document.URL)
  const namespace = url.searchParams.get('embed')
  return namespace
}

const preview: Preview = {
  parameters: {
    actions: {
      argTypesRegex: '^on[A-Z].*',
    },
    layout: 'centered',
    previewTabs: {
      previewTabs: {
        'storybook/docs/panel': {
          index: -1,
        },
      },
    },
    docs: {
      container: DocsContainer,
      disabled: true,

      // 👇 NOTE: Enable the Table of Contents. See further detail on the
      //    Storybook documentation at:
      //    https://storybook.js.org/docs/writing-docs/autodocs#configure-the-table-of-contents
      toc: {
        contentsSelector: '.sbdocs-content',
        headingSelector: 'h1, h2, h3',
        ignoreSelector: '#primary',
        title: 'Table of Contents',
        disable: false,
        unsafeTocbotOptions: {
          orderedList: false,
        },
      },
    },

    controls: {
      expanded: true,
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
      exclude: ['style'],
    },

    nextjs: {
      appDirectory: true,
    },
  },
  decorators: [
    (Story) => (
      <ThemeProvider>
        <div className="max-w-[min(480px,_100vw)] mx-auto mt-[12vh] pb-[20vh]">{Story()}</div>
      </ThemeProvider>
    ),
  ],
}

export default preview
