/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'images.unsplash.com',
          pathname: '/**', // Match all paths for images
        },
        {
          protocol: 'https',
          hostname: 'res.cloudinary.com',
          pathname: '/**', // Match all paths for images
        },
      ],
    },
  };
  
  export default nextConfig;
  
// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     images: {
//         domains: ['images.unsplash.com', 'res.cloudinary.com']
//     }
// };

// export default nextConfig;
