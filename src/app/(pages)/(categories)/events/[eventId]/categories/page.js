"use client";

import React from "react";
import { useRouter } from "next/navigation";
import ItemCard from "@/components/item-card";

const Categories = ({ params }) => {
  const router = useRouter();
  const { eventId } = params;

  const goToEvent = () => {
    router.push(`/events/${eventId}`);
  };

  return (
    <section className="h-screen bg-violet-400 grid place-items-center flex-1">
      <h1 className="text-3xl font-bold text-center mb-12">
        Categorías del Evento {eventId}
      </h1>
      <section className="py-20 bg-gray-100 rounded-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Empezá a elegir dentro de cada categoría.
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
            <a href="categories/meals">
              <ItemCard
                category="Comidas"
                description="Mmmmm... ¿Que quiero comer hoy?"
                imageUrl="https://randomuser.me/api/portraits/women/44.jpg"
              />
            </a>
            <a href="categories/places">
              <ItemCard
                category="Lugares"
                description="¿Donde vamos?"
                imageUrl="https://randomuser.me/api/portraits/women/44.jpg"
              />
            </a>
            <a href="categories/movies">
              <ItemCard
                category="Peliculas"
                description="¿Que quisieras ver?"
                imageUrl="https://randomuser.me/api/portraits/women/44.jpg"
              />
            </a>
          </div>
        </div>
      </section>
      <button onClick={goToEvent}>
        <a className="bg-white text-violet-600 px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-100">
          Ir Atrás
        </a>
      </button>
    </section>
  );
};

export default Categories;
