"use client"; // Asegúrate de que esto es un componente del cliente

import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Planner Buddy </p>
      </div>
    </footer>
  );
};

export default Footer;
