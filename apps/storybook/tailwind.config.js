const defaultConfiguration = require('@louffee/postcss-config/tailwind.config')

const customConfiguration = {
  ...defaultConfiguration,
  content: [
    ...defaultConfiguration.content,
    '../../packages/**/**/*.stories.@(js|jsx|ts|tsx|mdx)',
    '../../packages/**/**/*.docs.@(js|jsx|ts|tsx|mdx)',
    './stories/*.docs.@(js|jsx|ts|tsx|mdx)',
    './stories/*.stories.@(js|jsx|ts|tsx|mdx)',
    './.storybook/preview.tsx',
    './.storybook/preview-head.html',
  ],
}

module.exports = customConfiguration
