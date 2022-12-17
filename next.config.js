/** @type {import('next').NextConfig} */

const withPWA = require('next-pwa')({
  dest: 'public'
})
const runtimeCaching = require('next-pwa/cache')

const nextConfig = withPWA({
  reactStrictMode: true,
  pwa: {
    dest: 'public',
    runtimeCaching,
  }
})

module.exports = nextConfig
