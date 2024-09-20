"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Member from "@/components/member.js";

const EventPage = ({ params }) => {
  const router = useRouter();
  const { eventId } = params;

  const goToCategories = () => {
    router.push(`/events/${eventId}/categories`);
  };

  const ready = () => {
    //*fetch post ready = true */
  };

  // Simulación de lista de amigos
  const members = [
    {
      id: 1,
      name: "Alice",
      imageUrl: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      id: 2,
      name: "Bob",
      imageUrl: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      id: 3,
      name: "Charlie",
      imageUrl: "https://randomuser.me/api/portraits/men/19.jpg",
    },
  ];

  return (
    <section className="bg-violet-400 grid flex-1 rounded-lg">
      <article>
        <h2 className="text-3xl font-bold text-center mb-12">
          Event Id:{params.eventId} Page{" "}
        </h2>
        <section>
          <h1 className="text-3xl font-bold text-center mb-12">Miembros:</h1>

          <div style={gridStyle}>
            {members.map((member) => (
              <Member
                key={member.id}
                name={member.name}
                imageUrl={member.imageUrl}
              />
            ))}
          </div>

          <h2 className="text-3xl font-bold text-center mb-12">
            Empezá a planear!
          </h2>

          <button onClick={goToCategories}>
            <a className="bg-white text-violet-600 px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-100">
              Categorias
            </a>
          </button>
          <button onClick={ready}>
            <a className="bg-white text-violet-600 px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-100">
              Listo!
            </a>
          </button>
        </section>
      </article>
    </section>
  );
};

// Estilo inline para una cuadrícula de tarjetas
const gridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "20px",
  justifyItems: "center",
  padding: "20px",
};

export default EventPage;
