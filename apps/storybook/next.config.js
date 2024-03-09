const withBundleAnalyzer = require('@next/bundle-analyzer')

const defaultConfiguration = require('../../config/next-config/next.config.js')

const packageJSON = require('./package.json')

const dependencies = Object.keys(packageJSON.dependencies)
const devDependencies = Object.keys(packageJSON.devDependencies)

const plugins = [withBundleAnalyzer({ enabled: process.env.ANALYZE === 'true' })]

const withLouffeePackages = [...dependencies, ...devDependencies].filter((packageName) => packageName.startsWith('@louffee/'))

/** @type {import("next").NextConfig} */
const nextConfiguration = {
  ...defaultConfiguration,
  transpilePackages: [withLouffeePackages],
  eslint: {
    ignoreDuringBuilds: true,
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // NOTE: don't resolve 'fs' module on the client to prevent this error on
      //       build --> Error: Can't resolve 'fs'. See original Next.js config
      //       from Cal.com's repository:
      //       https://github.com/calcom/cal.com/blob/a1d1883b343141f210eed1cd4fbf77f028041306/apps/storybook/next.config.js#L31C2-L39C5
      config.resolve.fallback = {
        fs: false,
      }
    }
    return config
  },
}

module.exports = () => plugins.reduce((acc, next) => next(acc), nextConfiguration)
