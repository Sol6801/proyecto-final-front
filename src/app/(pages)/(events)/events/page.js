'use client';
import React from "react";
import { useRouter } from "next/navigation";
import withAuth from '@/components/withAuth.js'

const Events = () => {
  const router = useRouter();

  const createEvent = () => {
    router.push(`/events/createEvent`);
  };

  const joinEvent = () => {
    router.push(`/events/joinEvent`);
  };

  return (
    <section className=" bg-violet-400 place-items-center flex-1 rounded-lg h-screen grid">
      <div className="flex flex-col items-center justify-center gap-8 md:flex-row">
        <button onClick={createEvent}>
          <a className="bg-white text-violet-600 px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-100">
            Crear Evento
          </a>
        </button>
        <button onClick={joinEvent}>
          <a className="bg-white text-violet-600 px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-100">
            Unirse a Evento
          </a>
        </button>
      </div>
    </section>
  );
};

export default withAuth(Events);
