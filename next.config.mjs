/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        pathname: '**',
      },
    ],
  },
  reactStrictMode: true,
  experimental: {
    suppressHydrationWarning: true,
  },
}

export default nextConfig;
