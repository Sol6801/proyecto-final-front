"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import useUserStore from "@/store/useUserStore.js";
import useEventStore from "@/store/useEventStore.js";

const CreateEvent = () => {

  const { userId } = useUserStore();
  const router = useRouter();
  const setEventId = useEventStore((state) => state.setEventId); 
  const [eventData, setEventData] = useState({
    name: "",
    plannedDate: "",
    password: "",
  });
  
  useEffect(() => {
    // Actualiza el userId en eventData si cambia
    setEventData((prevData) => ({
      ...prevData,
      userId, // Asegúrate de que userId esté en el estado
    }));
  }, [userId]);


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
    const response = await fetch(`${API_URL}/createEvent`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(eventData, userId),
    });

    const result = await response.json();
    setEventId(result.id);

    if (response.ok) {
      // router.push(`/events/${result.id}`);
      alert(`Evento creado con éxito. El ID del evento es: ${result.data.id}`);
    } else {
      alert("Error al crear el evento");
    }
  };
  return (
    <section className="bg-gray-100 p-10 rounded-lg shadow-md w-70 absolute w-96 left-1/2 -translate-x-1/3 top-2/3 -translate-y-1/2">
    <h1 className="text-xl font-bold mb-4">Crear un nuevo evento</h1>
    <button onClick={() => router.back()} className="bg-white text-violet-600 px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 cursor-pointer">Cerrar ventana</button>
    <form onSubmit={handleSubmit} >
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">
          Nombre del Evento
        </label>
        <input
          type="text"
          name="name"
          value={eventData.name}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">
          Fecha del Evento
        </label>
        <input
          type="date"
          name="plannedDate"
          value={eventData.plannedDate}
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
        Crear Evento
      </button>
    </form>
    </section>
  );
};

export default CreateEvent;
