/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "randomuser.me",
        pathname: "/api/portraits/**",
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
        protocol: "https",
        hostname: "static.vecteezy.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "cdn-icons-png.flaticon.com",
        pathname: "/**",
      },
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
    ],
  },
};

export default nextConfig;
