/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  async rewrites() {
    return [
      {
        source: "/",
        destination: "/flight-inquiry",
      },
      {
        source: "/ucus-sorgulama",
        destination: "/flight-inquiry",
      },
      {
        source: "/ucus-listeleme",
        destination: "/flight-listing",
      },
    ];
  },
};

export default nextConfig;
