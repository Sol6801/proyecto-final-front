"use client"; // Asegúrate de que esto es un componente del cliente

import Navbar from '../app/components/navbar';
import Footer from '../app/components/footer';
import SwipeableCard from '../app/components/swipeablecard';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col min-h-screen">
        <div className="flex flex-wrap justify-center gap-4 p-4 flex-grow">
          <SwipeableCard
            title="Comidas"
            description="Desliza para la derecha o izquierda."
            imageUrl="https://images.falabella.com/v3/assets/blt34d59f5b52e53f95/bltbafcfd1b285f9983/6284fe44af7b396927edc62a/power-card-400x300px-a000787-paso4.jpg"
          />
          <SwipeableCard
            title="Lugares"
            description="Desliza para la derecha o izquierda."
            imageUrl="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/08/26/b5/a7/parque-de-la-costa.jpg?w=500&h=400&s=1"
          />
          <SwipeableCard
            title="Peliculas"
            description="Desliza para la derecha o izquierda."
            imageUrl="https://figurasfrikis.net/wp-content/uploads/2023/04/logopelisinicio.jpg"
          />
          {/* Agrega más tarjetas según sea necesario */}
        </div>
        <Footer />
      </main>
    </>
  );
}
