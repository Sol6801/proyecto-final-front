"use client";
import SwipeableCard from "@/components/swipeable-card";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import withAuth from '@/components/withAuth.js'
const API_URL = process.env.NEXT_PUBLIC_API_URL;


const Places = ({ params }) => {
  const router = useRouter();
  const [places, setPlaces] = useState([]);
  const { eventId } = params;// Asegúrate de que eventId esté en la URL

  const goToCategories = () => {
    router.push(`../categories`);
  };

  useEffect(() => {
    const url = `${API_URL}/places`;
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      }
    };


    const fetchPlaces = async () => {
      try {
        const response = await fetch(url, options);
        const result = await response.json();

        // Mapea los resultados de la API a las claves que SwipeableCard necesita
        const formattedPlaces = result.map((place) => ({
          id: place.id, // Asegúrate de usar un identificador único, ya sea el que venga de la API o el índice
          name: place.title, // Asegúrate de que la API tenga este campo
          urlImage: place.urlImage, // Asegúrate de que la API tenga este campo
        }));

        console.log(formattedPlaces); // Puedes verificar los datos transformados en la consola
        setPlaces(formattedPlaces); // Guarda las películas formateadas en el estado
      } catch (error) {
        console.error("Error al obtener los lugares:", error);
      }
    };

    fetchPlaces();
  }, []);


  return (
    <section className="w-full h-full min-h-screen flex flex-col items-center justify-center bg-violet-400">
      <h1 className="text-3xl font-bold text-center mb-12">Lugares</h1>

      <div>
        <SwipeableCard items={places} category="places" eventId={eventId} />
      </div>

      <button onClick={goToCategories} className="max-w-32 text-center bg-white text-violet-600 px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 m-5">
          Ir Atrás
      </button>
    </section>
  );
};



export default withAuth(Places);
