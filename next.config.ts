import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: { unoptimized: true },
  basePath: '/vent-out-final',
};

const config = {
  ...nextConfig,
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default config;
