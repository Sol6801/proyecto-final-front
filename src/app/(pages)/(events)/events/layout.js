/* "use client";
import { useEffect, useState } from "react";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import withAuth from '@/components/withAuth.js';
import { useRouter, usePathname } from "next/navigation";
const API_URL = process.env.NEXT_PUBLIC_API_URL;

const LINKS = [
  {
    name: "Event1",
    path: "/events/eventId:1",
  },
  {
    name: "Event2",
    path: "/events/eventId:2",
  },
  {
    name: "Event3",
    path: "/events/eventId:3",
  },
];

function EventsLayout({ children, createEventModal, joinEventModal }) {
  const pathname = usePathname();
  return (
    <>
      <Navbar />
      <div className="h-screen flex bg-gray-100 mx-auto p-4 gap-4">
        <aside className="bg-violet-600 px-20 grid place-items-center rounded-lg relative">
          <span className="absolute top-4 left-4">
            <h1 className="text-xl p-1 text-center">Selecciona un evento para verlo</h1>
          </span>
          <nav>
            <ul className="flex flex-col gap-10">
              {LINKS.map(({ name, path }) => (
                <li key={path} className="text-3xl">
                  {name}
                </li>
              ))}
            </ul>
          </nav>
        </aside>
        <div className="bg-violet-400 place-items-center flex-1 flex px-20 h-full items-center rounded-lg">
          {children}
          {createEventModal}
          {joinEventModal}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default withAuth(EventsLayout);
 */

"use client";
import { useEffect, useState } from "react";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import withAuth from '@/components/withAuth.js';
import { useRouter, usePathname } from "next/navigation";
const API_URL = process.env.NEXT_PUBLIC_API_URL;

function EventsLayout({ children, createEventModal, joinEventModal }) {
  const [userEvents, setUserEvents] = useState([]);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const fetchUserEvents = async () => {
      const userId = localStorage.getItem('userId');
      if (!userId) {
        console.error('User ID not found in local storage');
        return;
      }

      try {
        const response = await fetch(`${API_URL}/users/:${userId}/events`);
        if (!response.ok) {
          throw new Error('Failed to fetch user events');
        }
        const events = await response.json();
        setUserEvents(events);
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
      <div className="h-screen flex bg-gray-100 mx-auto p-4 gap-4">
        <aside className="bg-violet-600 px-20 grid place-items-center rounded-lg relative">
          <span className="absolute top-4 left-4">
            <h1 className="text-xl p-1 text-center">Selecciona un evento para verlo</h1>
          </span>
          <nav>
            <ul className="flex flex-col gap-10">
              {userEvents.map((event) => (
                <li key={event.id}>
                  <button
                    onClick={() => handleEventClick(event.id)}
                    className="text-3xl bg-violet-500 hover:bg-violet-700 text-white font-bold py-2 px-4 rounded"
                  >
                    {event.name}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </aside>
        <div className="bg-violet-400 place-items-center flex-1 flex px-20 h-full items-center rounded-lg">
          {children}
          {createEventModal}
          {joinEventModal}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default withAuth(EventsLayout);