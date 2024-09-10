"use client"; // Asegúrate de que esto es un componente del cliente

import React from 'react';
import { useSwipeable } from 'react-swipeable';
import { useRouter } from 'next/navigation';

const SwipeableCard = ({ title, description, imageUrl }) => {
    const router = useRouter();

    // Configura los manejadores de swipe
    const handlers = useSwipeable({
        onSwipedLeft: () => console.log('Swiped Left'),
        onSwipedRight: () => console.log('Swiped Right'),
        onSwipedUp: () => console.log('Swiped Up'),
        onSwipedDown: () => console.log('Swiped Down'),
        preventDefaultTouchmoveEvent: true,
        trackMouse: true,
    });

    return (
        <div
            {...handlers}
            className="w-full max-w-sm mx-auto bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden cursor-pointer"
            onClick={() => router.push('/somepage')} // Ejemplo de navegación al hacer clic
        >
            {imageUrl && (
                <img
                    className="w-full h-48 object-cover"
                    src={imageUrl}
                    alt={title}
                />
            )}
            <div className="p-4">
                <h3 className="text-xl font-bold mb-2">{title}</h3>
                <p className="text-gray-600">{description}</p>
            </div>
        </div>
    );
};

export default SwipeableCard;
