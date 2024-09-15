'use client'

import React from 'react';
import { useRouter } from 'next/navigation';


const Categories = ({ params }) => {
  const router = useRouter();
  const { eventId } = params; 

  const goBack = () => {
    router.back(); 
  };

  return (
    <section className='h-screen bg-violet-400 grid place-items-center flex-1'>
      <h1 className="text-3xl font-bold text-center mb-12">Categorías del Evento {eventId}</h1>
      <section className="py-20 bg-gray-100 rounded-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Empezá a elegir dentro de cada categoría.</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
            <a href='categories/meals'>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-4">Comidas</h3>
              <p>Mmmmm... ¿Que quiero comer hoy?</p>
            </div>
            </a>
            <a href='categories/places'>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-4">Lugares</h3>
              <p>¿Donde vamos?</p>
            </div>
            </a><a href='categories/movies'>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-4">Peliculas</h3>
              <p>¿Que quisieras ver?</p>
            </div>
            </a>
          </div>
        </div>
      </section>
      <button onClick={goBack}>
      <a className="bg-white text-violet-600 px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-100">
            Ir Atrás
          </a>
      </button>

    </section>
  );
};

export default Categories;