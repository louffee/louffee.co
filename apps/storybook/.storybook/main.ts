import * as path from 'node:path'

import remarkGfm from 'remark-gfm'

/**
 * The constant `WORKSPACE_ROOT` is used to define the root of the workspace
 * based on the relative location of this file.
 */
const WORKSPACE_ROOT = '../../..' as const

/**
 * The constant `STORYBOOK_FILENAME_ANNOTATION` is used to define the annotation
 * for the storybook files. It uses the glob pattern to find the files.
 */
const STORYBOOK_FILENAME_ANNOTATION = 'stories' as const

/**
 * The constant `STORYBOOK_FILE_EXTENSIONS` is used to define the file
 * extensions for the storybook files. It uses the glob pattern to find the
 * files.
 */
const STORYBOOK_FILE_EXTENSIONS = '@(ts|tsx)' as const

/**
 * The `getStoriesGlob()` function is used to define the location of the stories
 * files. It uses the glob pattern to find the files.
 *
 * It uses the given `pathname` parameter from the `WORKSPACE_ROOT` to find the
 * stories files.
 */
function getStoriesGlob(pathname) {
  return `${WORKSPACE_ROOT}/${pathname}/*.${STORYBOOK_FILENAME_ANNOTATION}.${STORYBOOK_FILE_EXTENSIONS}`
}

/**
 * The `getDocumentationGlob()` function is used to define the location of the
 * documentation files. It uses the glob pattern to find the files.
 *
 * It uses the given `pathname` parameter from the `WORKSPACE_ROOT` to find the
 * documentation files.
 */
function getDocumentationGlob(pathname: string) {
  return `${WORKSPACE_ROOT}/${pathname}/*.docs.mdx`
}

/**
 * The constant `stories` is used to define the location of the stories and
 * documentation files. It uses the glob pattern to find the files.
 */
const stories = [
  getStoriesGlob('packages/**/**'),
  getStoriesGlob('apps/storybook/stories'),
  getStoriesGlob('apps/www/src/components'),
  getStoriesGlob('apps/www/src/domains/**'),
  getDocumentationGlob('packages/**/**'),
  getDocumentationGlob('apps/storybook/stories'),
  getDocumentationGlob('apps/www/src/components'),
  getDocumentationGlob('apps/www/src/domains/**'),
]

/**
 * @type {require('@storybook/nextjs').StorybookConfig}
 */
const config = {
  stories,
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    {
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: require('postcss'),
        },
      },
    },
    {
      name: '@storybook/addon-docs',
      options: {
        mdxPluginOptions: {
          mdxCompileOptions: {
            remarkPlugins: [remarkGfm],
          },
        },
      },
    },
    '@storybook/addon-mdx-gfm',
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {
      // builder: {
      //   fsCache: true,
      //   lazyCompilation: true,
      // },
    },
  },
  staticDirs: ['../public'],
  webpackFinal: async (config) => {
    config.resolve = config.resolve || {}
    config.resolve.fallback = {
      fs: false,
      assert: false,
      buffer: false,
      console: false,
      constants: false,
      crypto: false,
      domain: false,
      events: false,
      http: false,
      https: false,
      os: false,
      path: false,
      punycode: false,
      process: false,
      querystring: false,
      stream: false,
      string_decoder: false,
      sys: false,
      timers: false,
      tty: false,
      url: false,
      util: false,
      vm: false,
      zlib: false,
    }

    config.module = config.module || {}
    config.module.rules = config.module.rules || []
    config.module.rules.push({
      test: /\.css$/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            modules: true, // Enable modules to help you using className
          },
        },
      ],
      include: path.resolve(__dirname, '../src'),
    })

    return config
  },

  typescript: {
    reactDocgen: 'react-docgen-typescript',
  },

  docs: {
    autodocs: 'tag',
    defaultName: 'Documentation',
  },
}

module.exports = config
