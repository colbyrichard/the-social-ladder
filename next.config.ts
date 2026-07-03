import type { NextConfig } from "next";

const repoName = "the-social-ladder";
const isGithubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isGithubPages ? `/${repoName}` : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
