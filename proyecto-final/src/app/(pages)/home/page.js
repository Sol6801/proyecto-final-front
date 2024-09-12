import Navbar from '@/app/components/navbar';
import Footer from '@/app/components/footer';
import React from 'react';  

const HomePage = () => {
  return (
    <div>
      <Navbar />

        <section className="flex flex-col items-center justify-center py-20 bg-gradient-to-b from-violet-500 to-violet-200 text-white">
          <h1 className="text-5xl font-extrabold mb-4">Planner Buddy</h1>
          <p className="text-xl mb-8">Planeá tu salida mientras te divertis!</p>
        </section>

        <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">¡Invitá a tus amigos y empezá a planear!</h2>
          <div className=" flex flex-row justify-center items-center gap-8 text-center">
            <a href="/events">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-4">Mis Eventos</h3>
              <p>Lista de Eventos</p>
            </div>
            </a>

          </div>
        </div>
      </section>

                {/* Features Section */}
                <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Elegí con tus amigos entre las diferentes categorías...</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-4">Comidas</h3>
              <p>Mmmmm... ¿Que quiero comer hoy?</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-4">Lugares</h3>
              <p>¿Donde vamos?</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-4">Peliculas</h3>
              <p>¿Que quisieras ver?</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HomePage;


