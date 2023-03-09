/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    webpack: function (config, options) {
      config.experiments = {
        asyncWebAssembly: true,
        topLevelAwait: true
      };
      return config;
    },
  };
  module.exports = nextConfig;