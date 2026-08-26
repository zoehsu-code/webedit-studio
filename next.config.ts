import type { NextConfig } from "next";

const isGithubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  output: isGithubPages ? "export" : undefined,
  basePath: isGithubPages ? "/webedit-studio" : undefined,
  assetPrefix: isGithubPages ? "/webedit-studio/" : undefined,
  images: {
    unoptimized: isGithubPages,
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
