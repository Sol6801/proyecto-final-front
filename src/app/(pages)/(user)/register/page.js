"use client"; // Indica que este es un componente del cliente

import { useState } from "react";
import { useRouter } from "next/navigation"; // Actualiza la importación de router

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const router = useRouter(); // Usa el hook del cliente para la navegación
  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();
    // const router = useRouter();
    const birthDateObject = new Date(birthDate);

    const userData = {
      username,
      firstName,
      lastName,      
      email,
      birthDate: birthDateObject,
      password,
    };

    try {
      const res = await fetch(`${API_URL}/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      const data = await res.json();
      console.log("User registered:", data);
      router.push("/login");
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  return (
    <div className="flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Registro</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="firstName"
              className="block text-sm font-medium text-gray-700"
            >
              Nombre:
            </label>
            <input
              type="text"
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-xl"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="lastName"
              className="block text-sm font-medium text-gray-700"
            >
              Apellido:
            </label>
            <input
              type="text"
              id="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-xl"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700"
            >
             Nombre de Usuario(*):
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-xl"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="birthDate"
              className="block text-sm font-medium text-gray-700"
            >
              Fecha de Nacimiento(*):
            </label>
            <input
            type="date"
          name="birthDate"
          value={birthDate}
              onChange={(e) => setBirthDate(e.target.value)}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-xl"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email(*):
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-xl"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-m font-medium text-gray-700"
            >
              Contraseña(*):
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full border-gray-400 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-xl"
              required
            />
          </div>
          <p>Los campos con (*) son obligatorios</p>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-indigo-700"
          >
            Registrarse
          </button>
        </form>
        <p className="mt-4 text-sm text-gray-600">
          Si ya tenes una cuenta podés{" "}
          <a href="/login" className="text-indigo-600 hover:underline">
            Iniciar Sesion
          </a>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
