"use client";
import SwipeableCard from "@/components/swipeable-card";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import withAuth from '@/components/withAuth.js'
const API_URL = process.env.NEXT_PUBLIC_API_URL;

const Meals = () => {
  const router = useRouter();
  const [meals, setMeals] = useState([]);

  const goToCategories = () => {
    router.push(`../categories`);
  };

  useEffect(() => {
    const url = `${API_URL}/meals`;
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      }
    };

    const fetchMeals = async () => {
      try {
        const response = await fetch(url, options);
        const result = await response.json();

        // Mapea los resultados de la API a las claves que SwipeableCard necesita
        const formattedMeals = result.map((meal) => ({
          id: meal.id, // Asegúrate de usar un identificador único, ya sea el que venga de la API o el índice
          title: meal.title, // Asegúrate de que la API tenga este campo
          imageUrl: meal.image, // Asegúrate de que la API tenga este campo
        }));

        console.log(formattedMeals); // Puedes verificar los datos transformados en la consola
        setMeals(formattedMeals); // Guarda las películas formateadas en el estado
      } catch (error) {
        console.error("Error al obtener las comidas:", error);
      }
    };

    fetchMeals();
  }, []);


  return (
    <section className="w-screen flex flex-col bg-violet-400 rounded-lg">
      <h1 className="text-3xl font-bold text-center mb-12">Comidas</h1>

      <div>
        <SwipeableCard items={meals} category="meals" />
      </div>

      <button onClick={goToCategories}>
        <a className="bg-white text-violet-600 px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-100">
          Ir Atrás
        </a>
      </button>
    </section>
  );
};



export default withAuth(Meals);
