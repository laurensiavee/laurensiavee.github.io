/** @type {import('next').NextConfig} */

const nextConfig = {
    eslint: {
        ignoreDuringBuilds: true,
    },
    output: "export",
    reactStrictMode: true,
  };

export default nextConfig;
