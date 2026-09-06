import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Preview/tunnel deploys must never serve stale HTML that points at
  // deleted CSS chunks (that is what made the last Cloudflare URL look unstyled).
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "private, no-cache, no-store, must-revalidate",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
