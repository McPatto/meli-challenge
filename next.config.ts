import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  images: {
    domains: ['http2.mlstatic.com'],
  },
};

export default nextConfig;
