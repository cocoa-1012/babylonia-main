/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ['en-US'],
    defaultLocale: 'en-US'
  },
  webpack(config, options) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
}

module.exports = nextConfig
