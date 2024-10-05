/** @type {import('next').NextConfig} */
const nextConfig = {
  images: { unoptimized: true }, // Disables Next.js built-in image optimization
  output: "export", // Enables static export
  // trailingSlash: true, // Ensures URLs have trailing slashes for static hosting compatibility
};

module.exports = nextConfig;
