/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'st3.depositphotos.com',
        port: '',
        pathname: '/6672868/**',
      },
    ],
  },
}

module.exports = nextConfig
