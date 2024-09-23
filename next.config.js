/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')

/** @type {import('next').NextConfig} */

const nextConfig = {
  // Configure `pageExtensions` to include MDX files
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  // trailingSlash: true,
  reactStrictMode: false,

  compiler: {
    // styledComponents: true,
    removeConsole: false
  },
  images: {
    domains: [
      'cafefcdn.com',
      'cdn.pixabay.com',
      'mdmznowzykcprealnozx.supabase.co',
      'nld.mediacdn.vn',
      'techcompreviews.in',
      'cdn.iconscout.com',
      'd159e3ysga2l0q.cloudfront.net',
      'd1csarkz8obe9u.cloudfront.net'
      // 'image.vietstock.vn',
      // 'cdn.vietnambiz.vn',
      // 'vcdn1-kinhdoanh.vnecdn.net'
    ]
  },
  experimental: {
    forceSwcTransforms: true
  },
  webpack: config => ({
    ...config,
    resolve: {
      ...config.resolve,
      alias: {
        ...config.resolve.alias,
        apexcharts: path.resolve(__dirname, './node_modules/apexcharts-clevision')
      }
    }
  })
}

module.exports = nextConfig
