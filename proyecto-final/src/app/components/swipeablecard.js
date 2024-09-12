"use client"; // Asegúrate de que esto es un componente del cliente

import React, { useState } from 'react';
import { useSwipeable } from 'react-swipeable';
// import { useRouter } from 'next/navigation';

const SwipeableCard = ({ items }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    // Función para pasar a la siguiente tarjeta
    const handleNext = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length); // Cicla a través de las películas
    };

    // Configura los manejadores de swipe
    const handlers = useSwipeable({
        onSwipedLeft: handleNext,
        onSwipedRight: handleNext,
        preventDefaultTouchmoveEvent: true,
        trackMouse: true,
    });

    return (

        <section>
        <div
            {...handlers}
            className="w-full max-w-sm mx-auto h-96 bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden cursor-pointer"

        >

                <img
                    className="w-full h-80 object-cover"
                    src={items[currentIndex].imageUrl}
                    alt={items[currentIndex].title}
                />

            <div className="p-4">
                <h3 className="text-xl font-bold mb-2">{items[currentIndex].title}</h3>
            </div>

            
        </div>
      <button onClick={handleNext}>Siguiente</button>
        </section>
    );
};

export default SwipeableCard;
