"use client";
import React, {useEffect} from "react";
import { useRouter } from "next/navigation";
import withAuth from "@/components/withAuth.js";
import Image from "next/image";
const API_URL = process.env.NEXT_PUBLIC_API_URL;


const Events = () => {
  const router = useRouter();

  const createEvent = () => {
    router.push(`/events/createEvent`);
  };

  const joinEvent = () => {
    router.push(`/events/joinEvent`);
  };

  // useEffect(() => {
  //   const fetchUserEvents = async () => {
  //     const userId = localStorage.getItem("userId");

  //     if (!userId) {
  //       console.error("User ID not found in local storage");
  //       router.push("/login"); // Redirigir al login si no hay userId
  //       return;
  //     }

  //     try {
  //       const response = await fetch(`${API_URL}/events/users/${userId}`);
  //       const result = await response.json();
  //       console.log('Estoy en events/page.js', result.data)
  //       if (Array.isArray(result.data)) {
  //         const events = result.data.map((item) => ({
  //           id: item.event.id,
  //           name: item.event.name,
  //         }));

  //         // Extraer los ids de los eventos y guardarlos como array en las cookies
  //         const eventIds = events.map((event) => event.id);
  //         Cookies.set("eventIds", JSON.stringify(eventIds)); // Guardar en cookies como string JSON
  //       }
  //     } catch (error) {
  //       console.error("Error fetching user events:", error);
  //     }
  //   };

  //   fetchUserEvents();
  // }, [router]);

  return (
    <section className=" bg-violet-400 place-items-center rounded-lg h-full min-h-screen">
      <div className="mt-20 lg:mt-0 flex flex-col items-center justify-center gap-8 md:flex-row h-full">
        <div className="flex flex-col items-center justify-center gap-8">
          <Image
            src="https://cdn-icons-png.freepik.com/512/5948/5948841.png?uid=R133653469&ga=GA1.1.413291434.1727374790"
            alt="Imagen Crear Evento"
            width={150}
            height={150}
            className="rounded-lg"
          />

          <button
            onClick={createEvent}
            className="bg-white text-violet-600 px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-100"
          >
            Crear Evento
          </button>
        </div>
        <div className="flex flex-col items-center justify-center gap-8">
          <Image
            src="https://cdn-icons-png.freepik.com/512/5948/5948841.png?uid=R133653469&ga=GA1.1.413291434.1727374790"
            alt="Imagen Crear Evento"
            width={150}
            height={150}
            className="rounded-lg"
          />
          <button
            onClick={joinEvent}
            className="bg-white text-violet-600 px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-100"
          >
            Unirse a Evento
          </button>
        </div>
      </div>
    </section>
  );
  s;
};

export default withAuth(Events);
