"use client"; // Indica que este es un componente del cliente
import { useState } from "react";
import { useRouter } from "next/navigation"; // Actualiza la importación de router
import useAuthStore from "@/store/useAuthStore.js";
import useUserStore from "@/store/useUserStore.js";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const login = useAuthStore((state) => state.login);
  const setUserId = useUserStore((state) => state.setUserId);
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
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
      console.log("Sesión iniciada:", data);

      setUserId(data.data.id); // Guardar el ID en el store y en localStorage
      login(data.token); // Guarda el token en el estado global
      router.push("/home"); // Redirige a la página principal
    } catch (error) {
      console.error("An error occurred:", error);
      alert("Error al iniciar sesión. Verifica tus credenciales.");
    }
  };

  return (
    <>
      {isLoading && (
        <div className="bg-gradient-to-b from-violet-500 to-violet-200 place-items-center flex-1 flex flex-col h-full min-h-screen items-center">
          <section className="py-10 text-center">
            <div className="w-full h-screen flex justify-center items-center min-h-full">
              <div className="relative w-16 h-16">
                <div className="w-full h-full border-4 border-purple-900 border-t-transparent rounded-full animate-spin"></div>
                <div className="absolute inset-0 m-auto w-12 h-12 border-4 border-purple-500 border-t-transparent rounded-full animate-spin-slow"></div>
                <div className="absolute inset-0 m-auto w-8 h-8 border-4 border-purple-300 border-t-transparent rounded-full animate-spin-reverse"></div>
              </div>
            </div>
          </section>
        </div>
      )}
      {!isLoading && ( 
        <div className="flex items-center justify-center bg-gray-100 rounded-lg">
          <div className="w-full max-w-md p-8 bg-white rounded-lg">
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
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-xl"
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
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-xl"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={isLoading} // Deshabilitar el botón si está en modo de carga
              >
                Iniciar Sesion
              </button>
            </form>
            <p className="mt-4 text-sm text-gray-600">
              Si no tienes una cuenta{" "}
              <a href="/register" className="text-indigo-600 hover:underline">
                Registrate
              </a>
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default LoginPage;
