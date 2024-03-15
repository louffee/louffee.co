const defaultConfiguration = require('@louffee/next-config/next.config')

/**
 * @type {import('next').NextConfig}
 */
const configuration = {
  ...defaultConfiguration,
  async redirects() {
    return [
      {
        source: '/:lang/terms',
        destination: '/:lang/terms-and-conditions',
        permanent: true,
      },
    ]
  },
}

module.exports = configuration
