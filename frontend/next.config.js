/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['upload.wikimedia.org', "www.logo.wine","platform-lookaside.fbsbx.com","images.unsplash.com","images.pexels.com"]
  }
}

module.exports = nextConfig
