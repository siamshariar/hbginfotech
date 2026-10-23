/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // The site is a single landing page. The former standalone pages are kept in
  // the codebase but redirected to the matching section until they are revived.
  async redirects() {
    return [
      ["/services", "/#services"],
      ["/products", "/#products"],
      ["/about", "/#about"],
      ["/works/:path*", "/"],
      ["/portfolio/:path*", "/"],
      ["/blog/:path*", "/"],
      ["/startup-solutions", "/"],
      ["/new-startup-solutions", "/"],
      ["/ai-solutions", "/"],
      ["/new-ai-solutions", "/"],
    ].map(([source, destination]) => ({ source, destination, permanent: false }))
  },
}

export default nextConfig
