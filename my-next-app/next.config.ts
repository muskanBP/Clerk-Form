/** @type {import('next').NextConfig} */
const nextConfig: import('next').NextConfig = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_CLERK_FRONTEND_API: "<your-frontend-api>", // Replace with your API key
  },
};

export default nextConfig;
