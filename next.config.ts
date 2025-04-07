import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    // Remove this deprecated configuration if it exists
    // domains: ['example.com', 'another-domain.com'],

    // Replace with remotePatterns
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // Replace with your specific domains
        port: '',
        pathname: '**',
      },
      // Add more patterns as needed for different domains
      // {
      //   protocol: 'https',
      //   hostname: 'another-domain.com',
      //   port: '',
      //   pathname: '**',
      // },
    ],
  },
};

export default nextConfig;