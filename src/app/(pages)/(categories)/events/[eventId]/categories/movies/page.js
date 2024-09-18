"use client";
import SwipeableCard from "@/components/swipeable-card";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
const RAPIDAPI = process.env.NEXT_PUBLIC_RAPIDAPI_KEY;

const Movies = () => {
  const router = useRouter();
  const [movies, setMovies] = useState([]);

  const goToCategories = () => {
    router.push(`../categories`);
  };

  useEffect(() => {
    const url = "'https://parse-torrent-name-and-get-tmdb-data.p.rapidapi.com/getTMDBFromRapidAPI';";
    const options = {
      method: "GET",
      headers: {
        'x-rapidapi-key': '41dd1de8f5msh8bc52d4be988edcp188425jsn6d54ca3b24c5',
        'x-rapidapi-host': 'parse-torrent-name-and-get-tmdb-data.p.rapidapi.com',
        'Content-Type': 'application/json'
      },
    };

    const fetchMovies = async () => {
      try {
        const response = await fetch(url, options);
        const result = await response.json(); // Cambié .text() a .json() para obtener el objeto directamente
        console.log(result); // Aquí puedes ver los datos de la API en la consola
        setMovies(result); // Guarda las películas en el estado
      } catch (error) {
        console.error("Error al obtener las películas:", error);
      }
    };

    fetchMovies();
  }, []);
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



export default Movies;
