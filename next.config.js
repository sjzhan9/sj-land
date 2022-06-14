/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "s2.googleusercontent.com",
      "s3.us-west-2.amazonaws.com",
      "amazonaws.com",
    ],
  },
  async redirects() {
    return [
      {
        source: "/book",
        destination: "https://calendly.com/sjcompound/30min",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
