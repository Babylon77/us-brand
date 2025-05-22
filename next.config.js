/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    loader: 'custom',
    loaderFile: './image-loader.js',
  },
  basePath: '/us-brand',
  assetPrefix: '/us-brand/',
  trailingSlash: true,
}

module.exports = nextConfig 