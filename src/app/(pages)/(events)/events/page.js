"use client";
import React from "react";
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

  return (
    <section className=" bg-violet-400 place-items-center flex-1 rounded-lg h-full min-h-screen grid">
      <div className="flex flex-col justify-center gap-8 lg:flex-row sticky top-10">
        <div className="flex flex-col items-center justify-center gap-8">
          <Image
            src="https://cdn-icons-png.freepik.com/512/5948/5948841.png?uid=R133653469&ga=GA1.1.413291434.1727374790"
            alt="Imagen Crear Evento"
            width={150}
            height={150}
            className="rounded-lg"
          />

          <button onClick={createEvent} className="bg-white text-violet-600 px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-100">
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
          <button onClick={joinEvent}  className="bg-white text-violet-600 px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-100">
              Unirse a Evento
          </button>
        </div>
      </div>
    </section>
  );s
};

export default withAuth(Events);
