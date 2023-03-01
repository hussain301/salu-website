/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  optimizeFonts: true,
  swcMinify: true,

  //create a new object of images and add remotePatterns for images from unsplash

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '443',
        pathname: '/photo-**',
      },
    ],
  },
}
module.exports = nextConfig
