import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Photography is downloaded into public/img, so no remote patterns are needed.
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
