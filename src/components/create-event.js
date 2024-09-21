"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const CreateEvent = (/*{ token }*/) => {
  const router = useRouter();
  const [eventData, setEventData] = useState({
    name: "",
    plannedDate: "",
    password: "",
    userId: 1,
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
    const response = await fetch(`${API_URL}/createEvent`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // Authorization: `Bearer ${token}`, // Envía el token para obtener el userId en el backend
      },
      body: JSON.stringify(eventData),
    });

    const result = await response.json();

    if (response.ok) {
      router.push("/login");
      alert(`Evento creado con éxito. El ID del evento es: ${result.id}`);
    } else {
      alert("Error al crear el evento");
    }
  };
  return (
    <section className="bg-gray-100 p-6 rounded-lg shadow-md w-70">
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
