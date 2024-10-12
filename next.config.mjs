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
      {
        source: "/kabin-secimi-tamamlandi",
        destination: "/cabin-selection",
      },
      {
        source: "/kabin-secimi-tamamlanamadi",
        destination: "/cabin-selection",
      },
    ];
  },
};

export default nextConfig;
