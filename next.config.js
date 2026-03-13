/** @type {import('next').NextConfig} */

// Next.js configuration with custom headers for cache control
const nextConfig = {
  /* config options here */
  reactStrictMode: true,

  // Custom headers to disable caching
  async headers() {
    return [
      {
        // Apply to all routes
        source: '/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'no-cache, no-store, must-revalidate',
          },
          {
            key: 'Pragma',
            value: 'no-cache',
          },
          {
            key: 'Expires',
            value: '0',
          },
        ],
      },
    ];
  },

};

export default nextConfig;