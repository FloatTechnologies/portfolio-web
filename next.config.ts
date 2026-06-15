import type { NextConfig } from "next";

const forGithubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  ...(forGithubPages ? { output: "export" } : {}),
  images: {
    unoptimized: forGithubPages,
  },
};

export default nextConfig;
