/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'utfs.io',
          port: '',
          pathname: '/**',
        },
        {
          protocol: 'https',
          hostname: 'uploadthing.com',
          port: '',
          pathname: '/**',
        }
      ],
    },
  }
