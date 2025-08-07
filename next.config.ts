import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: '/music-gear-reviews',
  assetPrefix: '/music-gear-reviews',
  images: {
    unoptimized: true
  }
};

export default nextConfig;
