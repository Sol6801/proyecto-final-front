import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import React from "react";
import ItemCard from "@/components/item-card";

const items = [
  {
    id: 1,
    category: "Comidas",
    description: "Mmmmm... ¿Que quiero comer hoy?",
    imageUrl: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 2,
    category: "Lugares",
    description: "¿Donde vamos?",
    imageUrl: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 3,
    category: "Peliculas",
    description: "¿Que quisieras ver?",
    imageUrl: "https://randomuser.me/api/portraits/men/19.jpg",
  },
];

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
          <h2 className="text-3xl font-bold text-center mb-12">
            ¡Invitá a tus amigos y empezá a planear!
          </h2>
          <div className=" flex flex-row justify-center items-center gap-8 text-center">
            <a href="/events">
            <ItemCard
                category='Mis Eventos'
                description='¡Invitá a tus amigos y empezá a planear!'
                imageUrl='https://randomuser.me/api/portraits/women/44.jpg'
              />
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Elegí con tus amigos entre las diferentes categorías...
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
            {items.map((item) => (
              <ItemCard
                key={item.id}
                category={item.category}
                description={item.description}
                imageUrl={item.imageUrl}
              />
            ))}
          </div>
          <div></div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HomePage;
