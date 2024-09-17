import React from "react";

const events = () => {
  return (
    <section className="bg-violet-400 grid place-items-center flex-1 rounded-lg">
      <h1>Selecciona un evento para verlo</h1>
      <p>o crea uno nuevo....</p>
      <button>
        <a className="bg-white text-violet-600 px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-100">
          Crear Nuevo Evento
        </a>
      </button>
    </section>
  );
};

export default events;
