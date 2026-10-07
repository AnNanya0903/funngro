import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The workspace root contains a sibling project at D:\ with its own
  // lockfile, which confuses Turbopack's automatic root detection. Pin the
  // root here so dependencies resolve from this project's node_modules.
  // process.cwd() is the project dir both in local dev and on Vercel.
  turbopack: {
    root: process.cwd(),
  },
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
