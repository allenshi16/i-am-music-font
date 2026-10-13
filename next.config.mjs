/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/i-am-music-font",
        destination: "/",
        permanent: true,
      },
    ];
  },
};
export default nextConfig;
