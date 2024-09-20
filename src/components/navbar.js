"use client"; // Asegúrate de que esto es un componente del cliente

import React from "react";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();

  const handleLogout = async () => {
    const response = await fetch('/api/logout', {
      method: 'POST',
      credentials: 'include', // Incluir cookies
    });
  
    if (response.ok) {
      router.push('/login'); // Redirigir al login
    }
  };

  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1
          className="text-2xl font-bold cursor-pointer"
          onClick={() => router.push("/home")}
        >
          Planner Buddy
        </h1>
        <ul className="flex space-x-4">
          <li>
            <a href="/home" className="hover:underline">
              Inicio
            </a>
          </li>
          <li>
            <a href="/events" className="hover:underline">
              Eventos
            </a>
          </li>
          <li>
            <a href="/user" className="hover:underline">
              Usuario
            </a>
          </li>
          <button onClick={handleLogout}>
            <a className="hover:underline">Logout</a>
          </button>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
