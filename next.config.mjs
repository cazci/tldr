/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: {
      allowedOrigins: [
        "f9f1cb89-55ac-4414-bda0-fb17e15f9352.e1-eu-north-azure.choreoapps.dev",
      ],
    },
  },
};

export default nextConfig;
