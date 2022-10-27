/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{
    domains: ['res.cloudinary.com']
  },
  swcMinify: true,
  ignoreDuringBuilds: true,
}

module.exports = nextConfig
