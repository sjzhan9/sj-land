/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "s2.googleusercontent.com",
      "s3.us-west-2.amazonaws.com",
      "amazonaws.com",
      "prod-files-secure.s3.us-west-2.amazonaws.com",
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
