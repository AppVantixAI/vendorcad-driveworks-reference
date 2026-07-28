/** @type {import('next').NextConfig} */
const repo = "vendorcad-driveworks-reference";
const isPages = process.env.GITHUB_PAGES === "1";

const nextConfig = {
  output: "export",
  images: { unoptimized: true },
  reactStrictMode: false,
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
  devIndicators: false,
  trailingSlash: true,
  ...(isPages
    ? {
        basePath: `/${repo}`,
        assetPrefix: `/${repo}/`,
      }
    : {}),
};
export default nextConfig;
