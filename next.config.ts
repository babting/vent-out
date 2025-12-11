import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: { unoptimized: true },
};

const config = {
  ...nextConfig,
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default config;
