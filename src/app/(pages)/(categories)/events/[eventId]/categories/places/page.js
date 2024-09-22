"use client";
import SwipeableCard from "@/components/swipeable-card";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import withAuth from '@/components/withAuth.js'


const Places = () => {
  const router = useRouter();
  const [places, setPlaces] = useState([]);

  const goToCategories = () => {
    router.push(`../categories`);
  };

  useEffect(() => {
    const url = 'https://tasty.p.rapidapi.com/recipes/list?from=0&size=20&tags=under_30_minutes';
    const options = {
      method: "GET",
      headers: {
        'x-rapidapi-key': '41dd1de8f5msh8bc52d4be988edcp188425jsn6d54ca3b24c5',
        'x-rapidapi-host': 'tasty.p.rapidapi.com'
      }
    };


    const fetchPlaces = async () => {
      try {
        const response = await fetch(url, options);
        const result = await response.json();

        // Mapea los resultados de la API a las claves que SwipeableCard necesita
        const formattedPlaces = result.map((place) => ({
          id: place.id, // Asegúrate de usar un identificador único, ya sea el que venga de la API o el índice
          title: place.name, // Asegúrate de que la API tenga este campo
          imageUrl: place.thumbnail_url, // Asegúrate de que la API tenga este campo
        }));

        console.log(formattedPlaces); // Puedes verificar los datos transformados en la consola
        setPlaces(formattedPlaces); // Guarda las películas formateadas en el estado
      } catch (error) {
        console.error("Error al obtener las películas:", error);
      }
    };

    fetchPlaces();
  }, []);


  return (
    <section className="w-screen flex flex-col bg-violet-400 rounded-lg">
      <h1 className="text-3xl font-bold text-center mb-12">Peliculas</h1>

      <div>
        <SwipeableCard items={places} category="places" />
      </div>

      <button onClick={goToCategories}>
        <a className="bg-white text-violet-600 px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-100">
          Ir Atrás
        </a>
      </button>
    </section>
  );
};



export default withAuth(Places);
