/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      { source: '/transport-logistics-brokers', destination: '/transport', permanent: true },
      { source: '/transport-logistics-brokers/:path*', destination: '/transport', permanent: true },
      { source: '/home', destination: '/supplies', permanent: true },
      { source: '/contact-us', destination: '/contact', permanent: true },
      { source: '/contact-us/:path*', destination: '/contact', permanent: true },
    ];
  },
};

export default nextConfig;
