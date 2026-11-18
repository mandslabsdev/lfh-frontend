import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Imagen mínima para contenedores (ECS Fargate).
  output: "standalone",
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
};

export default nextConfig;
