"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Member from "@/components/member.js";
import withAuth from "@/components/withAuth.js";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

const EventPage = ({ params }) => {
  const { eventId } = params;
  const router = useRouter();
  const [eventUsers, setEventUsers] = useState([]);

  const goToCategories = () => {
    router.push(`/events/${eventId}/categories`);
  };

  useEffect(() => {
    const fetchEventUsers = async () => {
      // const eventId = localStorage.getItem('eventId');
      // if (!eventId) {
      //   console.error("Event ID not found in local storage");
      //   return;
      // }

      try {
        const response = await fetch(`${API_URL}/events/${eventId}/users`);
        const result = await response.json();
        console.log("Event users:", result);

        if (Array.isArray(result.data)) {
          const users = result.data.map((item) => ({
            id: item.user.id,
            username: item.user.username
          }));
          setEventUsers(users);
        }
      } catch (error) {
        console.error("Error fetching event users:", error);
      }
    };

    fetchEventUsers();
  }, []);

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
    <section className="h-screen bg-violet-400 grid flex-1 rounded-lg">
      <article>
        <h1 className="pt-3 text-3xl font-bold text-center mb-12">
          Event Id:{params.eventId} Page{" "}
        </h1>
        <section>
          <h2 className="text-3xl font-bold text-center mb-12">Miembros:</h2>

          <div style={gridStyle}>

          <nav>
            <ul className="flex flex-col gap-10">
              {eventUsers.length === 0 ? (
                <p>No tienes miembros disponibles.</p>
              ) : (
                eventUsers.map((user) => (
                  <li key={user.id}
                      className="text-3xl bg-violet-300 hover:bg-violet-400 text-black font-bold py-2 px-4 rounded"
                    >
                      {user.username}
                  </li>
                ))
              )}
            </ul>
          </nav>
          </div>

          <h2 className="text-3xl font-bold text-center mb-12">
            Empezá a planear!
          </h2>

          <button
            onClick={goToCategories}
            className="bg-white text-violet-600 px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-100"
          >
            Categorias
          </button>
          <button
            onClick={handleReady}
            className="bg-white text-violet-600 px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-100"
          >
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
