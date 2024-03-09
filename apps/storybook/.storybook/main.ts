import * as path from 'node:path'

import type { StorybookConfig } from '@storybook/nextjs'

/**
 * The `getAbsolutePath()` function is used to resolve the absolute path of a
 * given package name. It points to the `package.json` file of the package.
 *
 * This function is particularly useful when we're running the Storybook in
 * monorepo mode, and we want to resolve the absolute path of a package while
 * starting up the Storybook with [Yarn](https://yarnpkg.com/).
 *
 * As we're using Bun Workspaces and it is still in the experimental phase, we
 * need to resolve the absolute path of the package to make sure that the
 * Storybook can find the package and its `package.json` file. Let's avoid some
 * headaches for now.
 */
function getAbsolutePath(value: string) {
  return path.dirname(require.resolve(path.join(value, 'package.json')))
}

/**
 * The constant `WORKSPACE_ROOT` is used to define the root of the workspace
 * based on the relative location of this file.
 */
const WORKSPACE_ROOT = '../../..' as const

/**
 * The constant `STORYBOOK_FILENAME_ANNOTATION` is used to define the annotation
 * for the storybook files. It uses the glob pattern to find the files.
 */
const STORYBOOK_FILENAME_ANNOTATION = '@(stories|docs)' as const

/**
 * The constant `STORYBOOK_FILE_EXTENSIONS` is used to define the file
 * extensions for the storybook files. It uses the glob pattern to find the
 * files.
 */
const STORYBOOK_FILE_EXTENSIONS = '@(ts|tsx|mdx)' as const

/**
 * The `getStoriesGlob()` function is used to define the location of the stories
 * and documentation files. It uses the glob pattern to find the files.
 *
 * It uses the given `pathname` parameter from the `WORKSPACE_ROOT` to find the
 * stories and documentation files.
 */
function getStoriesGlob(pathname: string) {
  return `${WORKSPACE_ROOT}/${pathname}/*.${STORYBOOK_FILENAME_ANNOTATION}.${STORYBOOK_FILE_EXTENSIONS}`
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
]

const config: StorybookConfig = {
  stories,
  addons: [
    getAbsolutePath('@storybook/addon-links'),
    getAbsolutePath('@storybook/addon-essentials'),
    getAbsolutePath('@storybook/addon-interactions'),
    {
      name: getAbsolutePath('@storybook/addon-postcss'),
      options: {
        postcssLoaderOptions: {
          implementation: require('postcss'),
        },
      },
    },
  ],
  framework: {
    name: getAbsolutePath('@storybook/nextjs') as '@storybook/nextjs',
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
    autodocs: false,
  },
}
export default config
