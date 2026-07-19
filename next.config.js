/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "s2.googleusercontent.com" },
      { protocol: "https", hostname: "s3.us-west-2.amazonaws.com" },
      { protocol: "https", hostname: "amazonaws.com" },
      {
        protocol: "https",
        hostname: "prod-files-secure.s3.us-west-2.amazonaws.com",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/billshare",
        destination: "/projects/billshare",
        permanent: true,
      },
      {
        source: "/oriant",
        destination: "/projects/oriant",
        permanent: true,
      },
      {
        source: "/book",
        destination: "https://cal.com/sjzhang",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
