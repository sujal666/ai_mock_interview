// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;


// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   webpack: (config) => {
//     config.resolve.fallback = {
//       child_process: false, // 🔥 Prevents Next.js from bundling child_process
//       fs: false, // Avoids issues with file system modules
//       net: false, // Prevents errors with networking modules
//       tls: false, // Avoids HTTPS-related module errors
//       os: false, // Ensures OS module isn't bundled
//     };
//     return config;
//   },
// };

// export default nextConfig;


import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack: (config) => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      child_process: false, // Prevents it from being bundled
      fs: false,
      os: false,
    };
    return config;
  },
};

export default nextConfig;
