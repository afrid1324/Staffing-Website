import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/event-staffing/index.html",
        permanent: false, // set to true later if you want a permanent redirect
      },
    ];
  },
};

export default nextConfig;
