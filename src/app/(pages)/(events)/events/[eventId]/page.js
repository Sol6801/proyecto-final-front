"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import withAuth from "@/components/withAuth.js";
import useAuthStore from "@/store/useUserAuthStore.js";
import Chatbot from "@/components/chatbot";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

const EventPage = ({ params }) => {
  const { eventId } = params;
  const router = useRouter();
  const [eventUsers, setEventUsers] = useState([]);
  const user = useAuthStore((state) => state.user);

  const goToCategories = () => {
    router.push(`/events/${eventId}/categories`);
  };
  const ready = () => {
    router.push(`/events/${eventId}/result`);
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
            username: item.user.username,
          }));
          setEventUsers(users);

          if (!user.some((eventUser) => eventUser.id === user.id)) {
            setError("no tienes permisos para ver este evento");
            router.push(`/events`);
          }
        }
      } catch (error) {
        console.error("Error fetching event users:", error);
      }
    };

    fetchEventUsers();
  }, []);

  return (
    <section className="h-screen bg-violet-400 grid flex-1 rounded-lg">
      <article>
        <h1 className="pt-3 text-4xl font-bold text-center m-12">
          Event Id:{params.eventId}
        </h1>
        <section>
          <h2 className="text-3xl font-bold text-center mb-12">Miembros:</h2>

          <div className="my-10">
            <nav>
              <ul className="flex flex-row items-center justify-center gap-8">
                {eventUsers.length === 0 ? (
                  <p>No tienes miembros disponibles.</p>
                ) : (
                  eventUsers.map((user) => (
                    <li
                      key={user.id}
                      className="text-3xl bg-violet-300 text-black font-bold py-2 px-4 rounded"
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
          <div className="flex flex-row items-center justify-center gap-8">
            <button
              onClick={goToCategories}
              className="bg-white text-violet-600 px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-100"
            >
              Categorias
            </button>
            <button
              onClick={ready}
              className="bg-white text-violet-600 px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-100"
            >
              Listo!
            </button>
          </div>
        </section>
      </article>
    </section>
  );
};


export default withAuth(EventPage);
