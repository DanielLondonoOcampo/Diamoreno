import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: '/Diamoreno',
  assetPrefix: '/Diamoreno/',
  env: {
    NEXT_PUBLIC_BASE_PATH: '/Diamoreno',
  },
}

export default nextConfig
