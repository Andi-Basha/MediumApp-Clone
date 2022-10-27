/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images:{
    domains: ['res.cloudinary.com']
  },
  swcMinify: true,
  ignoreDuringBuilds: true,
}

module.exports = nextConfig
