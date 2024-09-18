"use client"; // Asegúrate de que esto es un componente del cliente

import React, { useState } from "react";
import { useSwipeable } from "react-swipeable";
const API_URL = process.env.NEXT_PUBLIC_API_URL;
// import { useRouter } from 'next/navigation';

const SwipeableCard = ({ items, category }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const handleNext = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length); // Resetea el estado de like cuando cambia de tarjeta
//   };

//   const handleLike = async () => {
//     try {
//       const response = await fetch(`${API_URL}/${category}/liked`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           itemId: items[currentIndex].id, // ID del ítem actual
//           itemType: category, // Tipo de ítem (movie, meal, place)
//         }),
//       });

//       const data = await response.json();
//       console.log("Like guardado:", data);
//       handleNext();
//     } catch (error) {
//       console.error("Error guardando el like:", error);
//     }
//   };

//   const handleDislike = async () => {
//     try {
//       const response = await fetch(`${API_URL}/${category}/disliked`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           itemId: items[currentIndex].id,
//           itemType: category,
//         }),
//       });

//       const data = await response.json();
//       console.log("Dislike guardado:", data);
//       handleNext();
//     } catch (error) {
//       console.error("Error guardando el dislike:", error);
//     }
//   };

//   // Configura los manejadores de swipe
//   const handlers = useSwipeable({
//     onSwipedLeft: handleDislike,
//     onSwipedRight: handleLike,
//     preventDefaultTouchmoveEvent: true,
//     trackMouse: true,
//   });


//   return (
//     <section className="flex flex-row">
//       <button onClick={handleDislike}>
//         <a className="bg-white text-violet-600 px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-100">
//           Dislike
//         </a>
//       </button>
//       <div
//         {...handlers}
//         className="w-full max-w-sm mx-auto h-96 bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden cursor-pointer"
//       >
//         <img
//           className="w-full h-80 object-cover"
//           src={items[currentIndex].imageUrl}
//           alt={items[currentIndex].title}
//         />

//         <div className="p-4">
//           <h3 className="text-xl font-bold mb-2">
//             {items[currentIndex].title}
//           </h3>
//         </div>
//       </div>

//       <button onClick={handleLike}>
//         <a className="bg-white text-violet-600 px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-100">
//           Like
//         </a>
//       </button>
//     </section>
//   );
};

export default SwipeableCard;
