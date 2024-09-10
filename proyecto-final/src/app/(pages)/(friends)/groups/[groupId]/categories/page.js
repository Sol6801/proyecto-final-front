import React from 'react';
import CategoryLayout from './layout';

const categories = () => {

  return (
    <section className='bg-violet-400 grid place-items-center flex-1 rounded-lg'>
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

    </section>
  );
};

export default categories;

categories.getLayout = function getLayout(page) {
  return <CategoryLayout>{page}</CategoryLayout>;
};
