/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig

// // this is for NEXTRA (experiment)
// const withNextra = require('nextra')({
//   theme: 'nextra-theme-docs',
//   themeConfig: './theme.config.js',
//   // optional: add `unstable_staticImage: true` to enable Nextra's auto image import
// })
// module.exports = withNextra()