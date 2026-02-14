import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  reactCompiler: true,
  images: {
    unoptimized: true, // This is required for Truehost/cPanel
  },
};

export default nextConfig;