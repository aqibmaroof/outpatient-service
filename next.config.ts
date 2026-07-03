import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    serverActions: {
      // Default is 1MB — raise it so the contact form can carry a document
      // attachment. Keep this comfortably above the per-file limit enforced
      // in app/actions/contact.ts (10MB).
      bodySizeLimit: "12mb",
    },
  },
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
