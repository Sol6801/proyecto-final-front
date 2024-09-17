import React from "react";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Main Content */}
      <main className="h-screen flex flex-col items-center justify-center py-20 bg-gradient-to-b from-violet-500 to-violet-200 text-white">
        <h1 className="text-5xl font-extrabold mb-4">Planner Buddy</h1>
        <p className="text-xl mb-8">Planeá tu salida mientras te divertis!</p>
        <a
          href="/login"
          className="bg-white text-violet-600 px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-100"
        >
          Iniciar Sesión
        </a>
        <br />
        <a
          href="/register"
          className="bg-white text-violet-600 px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-100"
        >
          Registrarse
        </a>
      </main>
    </div>
  );
};

export default LandingPage;
