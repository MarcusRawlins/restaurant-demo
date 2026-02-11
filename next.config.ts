import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/restaurant-demo',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
