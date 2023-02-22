/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["search.pstatic.net"],
  },
};

module.exports = {
  staticPageGenerationTimeout: 1000,
};
