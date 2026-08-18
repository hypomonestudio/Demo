import type { NextConfig } from "next";

/*
 * GitHub Pages serves static files only. There is no Node process, so
 * the site is exported to plain HTML rather than run by `next start`.
 *
 * The custom domain has been removed, so the site is served from
 * hypomonestudio.github.io/Demo/ and every asset URL needs that prefix.
 * The deploy workflow sets PAGES_BASE_PATH=/Demo.
 *
 * It stays an environment variable rather than a hardcoded string so
 * that pointing a domain at the site later is a one-line change:
 * drop the env block from the workflow and the prefix disappears.
 */
const basePath = process.env.PAGES_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,

  // basePath rewrites the _next asset URLs on its own, but it does not
  // touch a plain string passed to next/image, so photography would keep
  // pointing at the domain root and 404. Exposing the value lets
  // lib/content.ts prefix the image paths itself.
  env: { NEXT_PUBLIC_BASE_PATH: basePath },

  // Pages has no image optimizer, so next/image has to emit the source
  // file as-is. The avif/webp conversion that was configured before
  // required a server and would fail the export.
  images: { unoptimized: true },

  // Emits directories with index.html rather than bare .html files,
  // which static hosts resolve more predictably.
  trailingSlash: true,
};

export default nextConfig;
