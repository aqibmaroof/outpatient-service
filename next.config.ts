import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Allow the doctor/clinic photos served from Unsplash, plus the logo
    // served from the CoreSynaptics S3 bucket.
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "work-wear-assets.s3.amazonaws.com",
      },
    ],
  },
};

export default nextConfig;
