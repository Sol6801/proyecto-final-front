import React from 'react';

const FeatureCard = ({ title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p>{description}</p>
  </div>
);

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <header className="bg-blue-500 text-white py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Organizá tus planes Planner Buddy</h1>
          <p className="text-xl mb-8">Nosotros te ayudamos a pensar y organizar.</p>
          <input
            type="text"
            placeholder="Busqueda de lugares , peliculas , comidas..."
            className="w-full max-w-md px-4 py-2 rounded-full text-gray-900"
          />
        </div>
      </header>

      {/* Main Features */}
      <section className="container mx-auto py-12">
        <h2 className="text-3xl font-bold text-center mb-8">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard
            title="Task Management"
            description="Organize and prioritize your tasks efficiently"
          />
          <FeatureCard
            title="Calendar Integration"
            description="Sync with your favorite calendar apps"
          />
          <FeatureCard
            title="Goal Tracking"
            description="Set and monitor your personal and professional goals"
          />
        </div>
      </section>
    </>
  );
}
