/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'qtrypzzcjebvfcihiynt.supabase.co',
      },
    ],
  },
  allowedDevOrigins: ['http://localhost:3000'],
}

module.exports = nextConfig
