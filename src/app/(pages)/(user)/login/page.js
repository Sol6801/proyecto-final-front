"use client"; // Indica que este es un componente del cliente
import { useState } from "react";
import { useRouter } from "next/navigation"; // Actualiza la importación de router

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = {
      email,
      password,
    };

    try {
      const res = await fetch(`${API_URL}/login`, {
        // Cambia a POST y usa el endpoint de login
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (!res.ok) {
        const errorText = await res.text();
        throw new Error(`Error en la solicitud: ${errorText}`);
      }

      const data = await res.json();
      console.log("User logged in:", data);
      // Guarda el token en localStorage o en un estado global si es necesario
      // localStorage.setItem('token', data.token);
      router.push("/home"); // Redirige al usuario a la página de inicio
    } catch (error) {
      console.error("An error occurred:", error);
      alert("Error al iniciar sesión. Verifica tus credenciales.");
    }
  };

  return (
    <div className="flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Iniciar Sesion</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Contraseña
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-indigo-700"
          >
            Iniciar Sesion
          </button>
        </form>
        <p className="mt-4 text-sm text-gray-600">
          Si no tenes una cuenta{" "}
          <a href="/register" className="text-indigo-600 hover:underline">
            Registrate
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
