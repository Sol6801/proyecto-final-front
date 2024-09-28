import React from "react";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Main Content */}
      <main className="h-screen flex flex-col items-center justify-center py-20 bg-gradient-to-b from-violet-500 to-violet-200 text-white">
        <h1 className="text-5xl font-extrabold mb-4 text-center">Planner Buddy</h1>
        <p className="text-xl mb-8">Planeá tu salida mientras te divertis!</p>
        
        <button className="bg-white text-violet-600 px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 min-w-40">
        <a
          href="/login"
        >
          Iniciar Sesión
        </a>
        </button>
        <br />
        <button className="bg-violet-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 min-w-40">
        <a
          href="/register"
        >
          Registrarse
        </a>
        </button>
      </main>
    </div>
  );
};

export default LandingPage;
