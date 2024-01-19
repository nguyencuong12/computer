/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  env: {
    // API_URL: "https://api.sashimeomeo.com",
    API_URL: "http://localhost:5000",
  },
}

module.exports = nextConfig
