import type { NextConfig } from "next";

/*
 * GitHub Pages serves static files only. There is no Node process, so
 * the site is exported to plain HTML rather than run by `next start`.
 *
 * basePath is empty by default because the CNAME file in this repo
 * points Pages at hypomone-studio.site, where the site lives at the
 * root. To preview at hypomonestudio.github.io/Demo/ while that
 * domain's DNS is still broken, build with:
 *
 *     PAGES_BASE_PATH=/Demo npm run build
 */
const basePath = process.env.PAGES_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,

  // Pages has no image optimizer, so next/image has to emit the source
  // file as-is. The avif/webp conversion that was configured before
  // required a server and would fail the export.
  images: { unoptimized: true },

  // Emits directories with index.html rather than bare .html files,
  // which static hosts resolve more predictably.
  trailingSlash: true,
};

export default nextConfig;
