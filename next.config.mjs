/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/resume",
  output: "export",  // <=== enables static exports
  reactStrictMode: true,
  distDir: 'out',
};

export default nextConfig;