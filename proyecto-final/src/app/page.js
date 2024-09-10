import React from 'react';
import Navbar from '../app/components/Navbar';
import Footer from '../app/components/Footer';
import styles from '../app/styles/Card.module.css';
import Head from 'next/head'

const LandingPage = () => {
  return (
      <div className="min-h-screen bg-gray-50">
        {/* Main Content */}
        <main className="flex flex-col items-center justify-center py-20 bg-gradient-to-b from-blue-500 to-blue-700 text-white">
          <h1 className="text-5xl font-extrabold mb-4">Planner Buddy</h1>
          <p className="text-xl mb-8">Planeá tu salida mientras te divertis!</p>
          <a href="#" className="bg-white text-blue-600 px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-100">
           Iniciar Sesión
          </a>
          <br/>
          <a href="#" className="bg-white text-blue-600 px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-100">
            Registrarse
          </a>
        </main>
  
      </div>
 
  );
};

export default LandingPage;

