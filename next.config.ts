import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    loader: 'custom',
    loaderFile: './imageLoader.ts',
  },
  basePath: '/Diamoreno',
  assetPrefix: '/Diamoreno/',
}

export default nextConfig
