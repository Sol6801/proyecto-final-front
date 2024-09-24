/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
<<<<<<< HEAD
        protocol: "https",
        hostname: "randomuser.me",
        pathname: "/api/portraits/**",
=======
        protocol: 'https',
        hostname: 'randomuser.me',
        pathname: '/**',
>>>>>>> 7d73851b74e06de3760bf75b62bc95a639601402
      },
      {
        protocol: "https",
        hostname: "www.argentina.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.cocinadomestica.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.recetas-argentinas.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "media-cdn.tripadvisor.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.loveandlemons.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.foodandwine.com",
        pathname: "/**",
      },
      {
<<<<<<< HEAD
        protocol: "https",
        hostname: "static.vecteezy.com",
        pathname: "/**",
=======
        protocol: 'https',
        hostname: 'm.media-amazon.com',
        pathname: '/images/**',
>>>>>>> 7d73851b74e06de3760bf75b62bc95a639601402
      },
      {
<<<<<<< HEAD
        protocol: 'https',
        hostname: 'cdn-icons-png.flaticon.com',
        pathname: '/**',
      },
=======
        protocol: "https",
        hostname: "cdn-icons-png.flaticon.com",
        pathname: "/**",
      },
<<<<<<< HEAD
      {
        protocol: "https",
        hostname: "image.tmdb.org",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "commons.wikimedia.org",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "dynamic-media-cdn.tripadvisor.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "laguiadebuenosaires.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "turismo.buenosaires.gob.ar",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.lanacion.com.ar",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "buenosaires.gob.ar",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "media.tacdn.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.buenosairesfreewalks.com",
        pathname: "/**",
      },
=======
>>>>>>> 7d73851b74e06de3760bf75b62bc95a639601402
>>>>>>> ec9b86bb48c1ca68f095c721ed646caffb661fe4
    ],
  },
};

export default nextConfig;
