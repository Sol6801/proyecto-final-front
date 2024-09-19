"use client";
import SwipeableCard from "@/components/swipeable-card";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

const Movies = () => {
  const router = useRouter();
  const [movies, setMovies] = useState([]);

  const goToCategories = () => {
    router.push(`../categories`);
  };

  useEffect(() => {
    const url = 'https://imdb-top-100-movies.p.rapidapi.com/';
    const options = {
      method: "GET",
      headers: {
        'x-rapidapi-key': '0bf3f5c62emsh6e57527787a48dfp16ded0jsnfd8264a51e32',
        'x-rapidapi-host': 'imdb-top-100-movies.p.rapidapi.com'
      }
    };


    const fetchMovies = async () => {
      try {
        const response = await fetch(url, options);
        const result = await response.json();

        // Mapea los resultados de la API a las claves que SwipeableCard necesita
        const formattedMovies = result.map((movie) => ({
          id: movie.rank, // Asegúrate de usar un identificador único, ya sea el que venga de la API o el índice
          title: movie.title, // Asegúrate de que la API tenga este campo
          imageUrl: movie.image, // Asegúrate de que la API tenga este campo
        }));

        console.log(formattedMovies); // Puedes verificar los datos transformados en la consola
        setMovies(formattedMovies); // Guarda las películas formateadas en el estado
      } catch (error) {
        console.error("Error al obtener las películas:", error);
      }
    };

    fetchMovies();
  }, []);

  //   const fetchMovies = async () => {
  //     try {
  //       const response = await fetch(url, options);
  //       const result = await response.json(); // Cambié .text() a .json() para obtener el objeto directamente
  //       console.log(result); // Aquí puedes ver los datos de la API en la consola
  //       setMovies(result); // Guarda las películas en el estado
  //     } catch (error) {
  //       console.error("Error al obtener las películas:", error);
  //     }
  //   };

  //   fetchMovies();
  // }, []);

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
