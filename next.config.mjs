/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // Legacy WordPress URLs
      { source: '/transport-logistics-brokers', destination: '/automotive', permanent: true },
      { source: '/transport-logistics-brokers/:path*', destination: '/automotive', permanent: true },
      { source: '/home', destination: '/', permanent: true },
      { source: '/contact-us', destination: '/contact', permanent: true },
      { source: '/contact-us/:path*', destination: '/contact', permanent: true },
      // Divisions paused while focusing on Automotive (temporary — pages retained in codebase)
      { source: '/transport', destination: '/automotive', permanent: false },
      { source: '/transport/:path*', destination: '/automotive', permanent: false },
      { source: '/supplies', destination: '/automotive', permanent: false },
      { source: '/supplies/:path*', destination: '/automotive', permanent: false },
    ];
  },
};

export default nextConfig;
