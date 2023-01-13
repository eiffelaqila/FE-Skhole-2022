/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  env: {
    BACKEND_SERVER: process.env.BACKEND_SERVER
  }
}

module.exports = nextConfig
