"use client";
import SwipeableCard from "@/components/swipeable-card";
import { useRouter } from "next/navigation";
import { fetchMovies } from '../../../lib/api'; 

const Movies = ({ movies }) => {
  const router = useRouter();

  const goToCategories = () => {
    router.push(`../categories`);
  };

  // const movies = [
  //   {
  //     id: 1,
  //     title: "Inception",
  //     imageUrl:
  //       "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/tXQvtRWfkUUnWJAn2tN3jERIUG.jpg",
  //   },
  //   {
  //     id: 2,
  //     title: "The Dark Knight",
  //     imageUrl:
  //       "https://image.tmdb.org/t/p/w500/1hRoyzDtpgMU7Dz4JF22RANzQO7.jpg",
  //   },
  //   {
  //     id: 3,
  //     title: "Interstellar",
  //     imageUrl:
  //       "https://image.tmdb.org/t/p/w500/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg",
  //   },
  //   {
  //     id: 4,
  //     title: "Parasite",
  //     imageUrl:
  //       "https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
  //   },
  //   {
  //     id: 5,
  //     title: "Joker",
  //     imageUrl:
  //       "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
  //   },
  // ];

  return (
    <section className="w-screen flex flex-col bg-violet-400 rounded-lg">
      <h1 className="text-3xl font-bold text-center mb-12">Peliculas</h1>

      <div>
        <SwipeableCard items={movies} category="movies" />
      </div>

      <button onClick={goToCategories}>
        <a className="bg-white text-violet-600 px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-100">
          Ir Atrás
        </a>
      </button>
    </section>
  );
};


export async function getStaticProps() {
  const movies = await fetchMovies(); // Obtén los datos de las películas
  return {
    props: { movies },
  };
}

export default Movies;
