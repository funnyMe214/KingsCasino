/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
      DATABASE_URL: process.env.DATABASE_URL,
    },
     images: {
    domains: ['play-lh.googleusercontent.com', 's.cafebazaar.ir', 'i.pinimg.com', 'encrypted-tbn0.gstatic.com', 'img1.wsimg.com'],
  },
  };
  
  module.exports = nextConfig;
  
