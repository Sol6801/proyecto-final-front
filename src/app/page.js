import React from "react";
import Link from "next/link";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Main Content */}
      <main className="h-screen flex flex-col items-center justify-center py-20 bg-gradient-to-b from-violet-500 to-violet-200 text-white p-3">
        <h1 className="text-5xl font-extrabold mb-4 text-center">
          Planner Buddy
        </h1>
        <p className="text-lg text-center mb-5 md:mb-0">Da like o dislike en categorías como películas, lugares y comidas, y deja que Planner Buddy proponga la mejor opción según los gustos del grupo.</p>
        <p className="text-lg mb-8 text-center md:px-28">¡Planner Buddy te ayuda a tomar decisiones grupales de forma divertida!</p>

        <Link href="/login" passHref>
          <button className="bg-white text-violet-600 px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-200 min-w-40">
            Iniciar sesión
          </button>
        </Link>

        <br />

        <Link href="/register" passHref>
          <button className="bg-violet-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-violet-700 min-w-40">
            Registrarse
          </button>
        </Link>
      </main>
    </div>
  );
};

export default LandingPage;
