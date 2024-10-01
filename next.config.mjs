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
        protocol: 'https',
        hostname: 'm.media-amazon.com',
        pathname: '/images/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn-icons-png.flaticon.com',
        pathname: '/**',
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
      {
        protocol: "https",
        hostname: "dynamic-media-cdn.tripadvisor.com",
        pathname: "/media/**",
      },
      {
        protocol: "https",
        hostname: "cdn.shopify.com",
        pathname: "/s/files/**",
      },
      {
        protocol: "https",
        hostname: "www.eatingwell.com", 
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.indega.com.py", 
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.essen.com.ar", 
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "elferroviarioparrilla.com",
        pathname: "/images/**",
      },
      {
        protocol: "https",
        hostname: "encrypted-tbn0.gstatic.com",
        pathname: "/images/**",
      },
      {
        protocol: "https",
        hostname: "okdiario.com",
        pathname: "/img/**",
      },
      {
        protocol: "https",
        hostname: "i.pinimg.com",
        pathname: "/736x/**",
      },
      {
        protocol: "https",
        hostname: "locosxlaparrilla.com",
        pathname: "/wp-content/uploads/**",
      },
      {
        protocol: "https",
        hostname: "almacenvicenteabsurdo.com.ar",
        pathname: "/wp-content/uploads/**",
      },
      {
        protocol: "https",
        hostname: "blogger.googleusercontent.com",
        pathname: "/img/**",
      },
      {
        protocol: "https",
        hostname: "storage.googleapis.com",
        pathname: "/avena-recipes/**",
      },
      {
        protocol: "https",
        hostname: "media.glanacion.com",
        pathname: "/resizer/**",
      },
      {
        protocol: "https",
        hostname: "mandolina.co",
        pathname: "/wp-content/uploads/**",
      },
      {
        protocol: "https",
        hostname: "comedera.com",
        pathname: "/wp-content/uploads/**",
      },
      {
        protocol: "https",
        hostname: "www.noticiasdemexico.mx",
        pathname: "/u/fotografias/**",
      },
      {
        protocol: "https",
        hostname: "www.feriamasticar.com.ar",
        pathname: "/wp-content/uploads/**",
      },
      {
        protocol: "https",
        hostname: "www.gastrolabweb.com",
        pathname: "/u/fotografias/**",
      },
      {
        protocol: "https",
        hostname: "storage.googleapis.com",
        pathname: "/avena-recipes/**",
      },
      {
        protocol: "https",
        hostname: "cdn7.kiwilimon.com",
        pathname: "/recetaimagen/**",
      },
      {
        protocol: "https",
        hostname: "cdn-icons-png.freepik.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "github.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.serargentino.com",
        pathname: "/**", 
      },
      {
        protocol: 'https',
        hostname: 'plannerbuddy.s3.amazonaws.com',
        pathname: '/placesoptimizado/**',
      },
      {
        protocol: 'https',
        hostname: 'plannerbuddy.s3.amazonaws.com',
        pathname: '/optimizadasmovies/**',
      },
      {
        protocol: 'https',
        hostname: 'plannerbuddy.s3.amazonaws.com',
        pathname: '/mealsoptimizadas/**',
      },
      {
        protocol: 'https',
        hostname: 'us-east-2.console.aws.amazon.com',
        pathname: '/**',
      }
      
    ],
  },
};

export default nextConfig;