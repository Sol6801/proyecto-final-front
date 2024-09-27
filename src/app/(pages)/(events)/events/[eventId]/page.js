"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import withAuth from "@/components/withAuth.js";
import useAuthStore from "@/store/useUserAuthStore.js";
// import Chatbot from "@/components/chatbot";

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
  const handleGoToEvent = () => {
    router.push(`/events`);
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


  //*intento de delete event, falta find many users_in_event y eliminar todos los regitros de dicha tabla para evitar conflictos de key */
  const deleteEvent = async () => {
    try {
      const response = await fetch(`${API_URL}/events/${eventId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user,
          eventId
        }),
      });

      const data = await response.json();
      console.log(`Event ${eventId} deleted successfully:`, data);
      handleGoToEvent();
    } catch (error) {
      console.error(`Error deleting event: ${eventId}`, error);
      console.error("Error details:", error.message);
    }
  };

//*intento de leave event */

  const leaveEvent = async () => {
    try {
      const response = await fetch(`${API_URL}/events/${eventId}`, { //*la url es distinta */
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user,
          eventId,
        }),
      });

      const data = await response.json();
      console.log(`Event ${eventId} left successfully:`, data);
      handleGoToEvent();
    } catch (error) {
      console.error(`Error leaving event: ${eventId}`, error);
      console.error("Error details:", error.message);
    }
  };

  return (
    <section className="p-5 bg-violet-400 h-full min-h-screen grid flex-1 rounded-lg">
      <article>
        <h1 className="pt-3 text-4xl font-bold text-center m-12">
          Event Id: {params.eventId}
        </h1>
        <section>
          <h2 className="text-3xl font-bold text-center mb-12">Miembros:</h2>

          <div className="my-10">
            <nav>
              <ul className="flex flex-col items-center justify-center gap-8 md:flex-row">
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
          <div className="flex flex-col items-center justify-center gap-8 md:flex-row">
            <button
              onClick={goToCategories}
              className="min-w-60 bg-white text-violet-600 px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-100"
            >
              Categorias
            </button>
            <button
              onClick={ready}
              className="min-w-60 bg-white text-violet-600 px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-100"
            >
              Listo!
            </button>
          </div>

          <div className="flex flex-col items-center justify-center gap-8 my-10 md:flex-row">
            <button
              onClick={deleteEvent} //*el unico usuario que ve este boton es el creador del evento, y el creador del evento no puede salir del evento, solo eliminarlo*/
              className="min-w-60 bg-white text-violet-600 px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-100"
            >
              Eliminar Evento
            </button>
            <button
              onClick={leaveEvent}  //*los usuarios pueden salir de un grupo pero no eliminarlo */
              className="min-w-60 bg-white text-violet-600 px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-100"
            >
              Salir del Evento
            </button>
          </div>
        </section>
      </article>
    </section>
  );
};


export default withAuth(EventPage);
