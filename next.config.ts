import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === "production" ? "/onlyup-landing" : "",
  assetPrefix: process.env.NODE_ENV === "production" ? "/onlyup-landing/" : "",
  typescript: {
    ignoreBuildErrors: false,
  },
  swcMinify: true,
};

export default nextConfig;
