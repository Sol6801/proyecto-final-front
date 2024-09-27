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
    userId,
  });

  useEffect(() => {
    setEventData((prevData) => ({
      ...prevData,
      userId,
    }));
  }, [userId]);

  const handleChange = (e) => {
    setEventData({
      ...eventData,
      [e.target.name]: e.target.value,
    });
  };

  const handleClose = () => {
    router.push(`/events`);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const API_URL = process.env.NEXT_PUBLIC_API_URL;

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
      alert(`Evento creado con éxito. El ID del evento es: ${result.data.id}`);
    } else {
      alert("Error al crear el evento");
    }
    const joinResponse = await fetch(`${API_URL}/joinEvent`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: result.data.id,
        password: eventData.password,
        userId,
      }),
    });
    if (joinResponse.ok) {
      router.push(`/events/${result.data.id}`);
    } else {
      alert("Error al unirse al evento");
    }
  };

  return (
    <section className="bg-gray-100 px-10 py-3 my-3 rounded-lg shadow-md  w-70">
      <h1 className="text-xl font-bold mb-4">Crear un nuevo evento</h1>
      <button
        onClick={handleClose}
        className="bg-white text-violet-600 px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 cursor-pointer"
      >
        Cerrar ventana
      </button>
      <form onSubmit={handleSubmit}>
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
          className="bg-white text-violet-600 px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-100"
        >
          Crear Evento
        </button>
      </form>
    </section>
  );
};

export default CreateEvent;
