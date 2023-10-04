/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'qiita.com',
      },
    ],
  },
}

module.exports = nextConfig
