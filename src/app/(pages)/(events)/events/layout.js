"use client";
import { useEffect, useState } from "react";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import withAuth from '@/components/withAuth.js';
import { useRouter } from "next/navigation";
const API_URL = process.env.NEXT_PUBLIC_API_URL;

function EventsLayout({ children, createEventModal, joinEventModal }) {
  const [userEvents, setUserEvents] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const fetchUserEvents = async () => {
      const userId = localStorage.getItem('userId');
      if (!userId) {
        console.error('User ID not found in local storage');
        return;
      }

      try {
        const response = await fetch(`${API_URL}/events/users/${userId}`);
        const result = await response.json();
        console.log('User events:', result);

        if (Array.isArray(result.data)) {
          const events = result.data.map(item => ({
            id: item.event.id,
            name: item.event.name
          }));
          setUserEvents(events);
        }
      } catch (error) {
        console.error('Error fetching user events:', error);
      }
    };

    fetchUserEvents();
  }, []);

  const handleEventClick = (eventId) => {
    router.push(`/events/${eventId}`);
  };

  return (
    <>
      <Navbar />
      {userEvents.length === 0 ? (
        <div className="bg-violet-400 place-items-center flex-1 flex flex-col h-svh items-center">
          <section className=" py-10 text-center">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4 drop-shadow-lg">
                Todavía no tenés eventos!
              </h2>
              <h3 className="text-xl sm:text-2xl md:text-3xl text-white font-semibold opacity-90 mb-6">
                Empezá a planear ya!
              </h3>
          </section>
        {children}
        {createEventModal}
        {joinEventModal}
      </div>
      ) : (
        <div className="flex flex-col bg-gray-100 mx-auto p-4 gap-4 md:h-screen md:flex-row">
        <aside className="bg-violet-600 px-20 grid place-items-center rounded-lg relative">
          <span className="absolute top-4 left-4">
            <h1 className="text-xl p-1 text-center">Selecciona un evento para verlo</h1>
          </span>
          <nav>
            <ul className="flex flex-col gap-10">
              {
              userEvents.map((event) => (
                  <li key={event.id}>
                    <button
                      onClick={() => handleEventClick(event.id)}
                      className="text-3xl bg-violet-500 hover:bg-violet-700 text-white font-bold py-2 px-4 rounded"
                    >
                      {event.name}
                    </button>
                  </li>
                ))
              }
            </ul>
          </nav>
        </aside>
        <div className="bg-violet-400 place-items-center flex-1 flex h-full items-center rounded-lg">
          {children}
          {createEventModal}
          {joinEventModal}
        </div>
      </div>
      )}
      
        
      <Footer />
    </>
  );
}

export default withAuth(EventsLayout);
