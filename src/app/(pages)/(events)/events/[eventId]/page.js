"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Member from "@/components/member.js";
import withAuth from '@/components/withAuth.js'
const API_URL = process.env.NEXT_PUBLIC_API_URL;

const EventPage = ({ params }) => {
  const router = useRouter();
  const { eventId } = params;

  const goToCategories = () => {
    router.push(`/events/${eventId}/categories`);
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

  const handleReady = async () => {
    try {
      // const token = localStorage.getItem('token');
      const currentItem = items[currentIndex];
      const response = await fetch(`${API_URL}/${eventId}/desicion`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          // "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify({
          itemId: currentItem.id,
          itemTitle: currentItem.title,
          itemImage: currentItem.imageUrl,
          category: category,
        }),
      });      
      
      const data = await response.json();
      console.log(`${category} liked:`, data);
      handleNext();
    } catch (error) {
      console.error(`Error saving ${category} like:`, error);
      console.error("Error details:", error.message);
    }
  };


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

          <button onClick={goToCategories}className="bg-white text-violet-600 px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-100">
              Categorias
          </button>
          <button onClick={handleReady} className="bg-white text-violet-600 px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-100">
              Listo!
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

export default withAuth(EventPage);
