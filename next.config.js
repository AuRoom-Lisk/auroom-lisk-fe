/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {},
  webpack: (config, { isServer }) => {
    // Add verbose error logging
    config.stats = 'verbose';
    return config;
  },
};

module.exports = nextConfig;
