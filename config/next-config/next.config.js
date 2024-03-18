/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  transpilePackages: ['@louffee/ui', '@louffee/lib'],
  // Issue solved by ecumene on this discussion on vercel/next.js's GitHub page:
  // https://github.com/vercel/next.js/discussions/50177#discussioncomment-5972779
  webpack: (config, { webpack }) => {
    config.plugins.push(
      new webpack.IgnorePlugin({
        resourceRegExp: /^pg-native$|^cloudflare:sockets$/,
      }),
    )

    return config
  },
}
