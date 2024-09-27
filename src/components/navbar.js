"use client";

import React from "react";
import { useRouter } from "next/navigation";
import useAuthStore from '../store/useAuthStore.js';

const Navbar = () => {
  const router = useRouter();
  const logout = useAuthStore((state) => state.logout);

  const handleLogout = () => {
    logout();
    router.push('/login');
  };

  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex flex-row justify-between items-center">
        <h1
          className="text-2xl font-bold cursor-pointer"
          onClick={() => router.push("/home")}
        >
          Planner Buddy
        </h1>
        <ul className="flex flex-row space-x-4">
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
          {/* <li>
            <a href="/user" className="hover:underline">
              Usuario
            </a>
          </li> */}
          <li>
            <button onClick={handleLogout} className="hover:underline">
              Logout
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
