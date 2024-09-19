"use client";
import SwipeableCard from "@/components/swipeable-card";
import { useRouter } from "next/navigation";// Función para obtener lugares


const Places = ({ places}) => {
  const router = useRouter();


  const goToCategories = () => {
    router.push(`../categories`);
  };


  return (
    <section className="w-screen flex flex-col bg-violet-400 rounded-lg">
      <h1 className="text-3xl font-bold text-center mb-12">Lugares</h1>
      <SwipeableCard items={places} category="places" />
      <button onClick={goToCategories}>
        <a className="bg-white text-violet-600 px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-100">
          Ir Atrás
        </a>
      </button>
    </section>
  );
};



export default Places;
