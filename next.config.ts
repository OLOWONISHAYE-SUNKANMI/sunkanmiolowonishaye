import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  async redirects() {
    return [
      {
        source: "/management-systems",
        destination: "/workflow/construction-systems",
        permanent: true,
      },
      {
        source: "/construction-branding",
        destination: "/workflow/construction-branding",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
