/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/us-brand',
  assetPrefix: '/us-brand/',
  trailingSlash: true,
}

module.exports = nextConfig 