import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "gogo.mn",
      },
      {
        protocol: "https",
        hostname: "mgl.gogo.mn",
      },
    ],
  },
};

export default nextConfig;
