import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  images: {
    domains: ['http2.mlstatic.com', 'www.stickylife.com', 'static.vecteezy.com'],
  },
};

export default nextConfig;
