/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",  // <=== enables static exports
  reactStrictMode: true,
  images: {
    path: "/"
  }
};

export default nextConfig;
