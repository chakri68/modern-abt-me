/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === "production" ? "/modern-abt-me" : "",
  assetPrefix: process.env.NODE_ENV === "production" ? "/modern-abt-me" : "",
};

export default nextConfig;
