/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ["en_EN", "ar_AR"],
    defaultLocale: "en_EN",
  },
  env: {
    AUTH_TOKEN: process.env.AUTH_TOKEN,
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.externals.push({
      "utf-8-validate": "commonjs utf-8-validate",
      bufferutil: "commonjs bufferutil",
    });
    return config;
  },
};

module.exports = nextConfig;
