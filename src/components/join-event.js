"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import useUserStore from "@/store/useUserStore.js";
// import useEventStore from "@/store/useEventStore.js";


const JoinEvent = () => {
    const router = useRouter();
    const { userId } = useUserStore();
  const [eventData, setEventData] = useState({
    password: "",
    id: "",
    userId,
  });




  const handleChange = (e) => {
    setEventData({
      ...eventData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Utiliza la variable de entorno para la URL de la API
    const API_URL = process.env.NEXT_PUBLIC_API_URL;

    // Envía una solicitud POST al backend para crear el evento
    const response = await fetch(`${API_URL}/joinEvent`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // Authorization: `Bearer ${token}`, // Envía el token para obtener el userId en el backend
      },
      body: JSON.stringify(eventData),
    });

    const result = await response.json();


    if (response.ok) {
      alert(`Te has unido al evento con éxito. El ID del evento es: ${eventData.id}`);      
      router.push(`/events/${eventData.id}`);
    } else {
      alert("Error al unirse al evento");
    }
  };
  return (
    <section className="bg-gray-100 p-6 rounded-lg shadow-md w-70 items-center">
      <h1 className="text-xl font-bold m-4">Unirse a Evento</h1>
      <button onClick={() => router.back()} className="bg-white text-violet-600 p-2 mb-2 rounded-full text-lg font-semibold hover:bg-gray-100 cursor-pointer">Cerrar ventana</button>
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">
          Id del Evento
        </label>
        <input
          type="number"
          name="id"
          value={eventData.id}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">
          Contraseña del Evento
        </label>
        <input
          type="password"
          name="password"
          value={eventData.password}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
      </div>
      <button
        type="submit"
        className="bg-white text-violet-600 px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-100">
        Unirse al Evento
      </button>
    </form>
    </section>
  );
};

export default JoinEvent;
