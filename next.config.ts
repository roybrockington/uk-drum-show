import type { NextConfig } from "next";

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*.audixusa.com',
      },
      {
        protocol: 'https',
        hostname: '*.sound-service.eu',
      },
    ],
  },

}

export default nextConfig;
