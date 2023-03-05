/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "ldb-phinf.pstatic.net",
      "search.pstatic.net",
      "myplace-phinf.pstatic.net",
      "pup-review-phinf.pstatic.net",
      "postfiles.pstatic.net",
    ],
  },
};

module.exports = nextConfig;
