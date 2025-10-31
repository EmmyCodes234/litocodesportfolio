/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove the standalone output option which causes issues on Windows
  // Netlify will handle the deployment optimization
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Remove the experimental outputFileTracing option that was causing warnings
}

export default nextConfig