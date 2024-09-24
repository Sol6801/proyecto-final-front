import { create } from 'zustand';

const useMovieIndexStore = create((set) => ({
  indices: {},
  getIndex: (eventId) => {
    return set.getState().indices[eventId] || 0; // Retorna 0 si no existe
  },
  setIndex: (eventId, index) => {
    set((state) => ({
      indices: {
        ...state.indices,
        [eventId]: index, // Almacena el índice por eventId
      },
    }));
  },
}));

export default useMovieIndexStore;




// Para guardar el `eventId` en los likes o dislikes cuando un usuario interactúa con una película, necesitamos hacer algunos cambios en el componente `SwipeableCard.js` y asegurarnos de que el `eventId` esté disponible en el componente. Aquí están los pasos y cambios necesarios:

// 1. Primero, modifiquemos el `useEventStore.js` para corregir un pequeño error:



//  title="useEventStore.js"
// import { create } from 'zustand';

// const useEventStore = create((set) => ({
//   eventId: typeof window !== 'undefined' ? Number(localStorage.getItem('eventId')) : null,
//   setEventId: (id) => {
//     localStorage.setItem('eventId', id); // Guardar en localStorage
//     set({ eventId: Number(id) });
//   },
// }));

// export default useEventStore;
// </antArtifact>

// 2. Ahora, modifiquemos el componente `SwipeableCard.js` para incluir el `eventId`:



//  title="SwipeableCard.js">
// "use client";

// import React, { useState } from "react";
// import { useSwipeable } from "react-swipeable";
// import useUserStore from "@/store/useUserStore.js";
// import useEventStore from "@/store/useEventStore.js";
// import Image from "next/image";

// const API_URL = process.env.NEXT_PUBLIC_API_URL;

// const SwipeableCard = ({ items, category }) => {
//   const { userId } = useUserStore();
//   const { eventId } = useEventStore();

//   const [currentIndex, setCurrentIndex] = useState(0);

//   const handleNext = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
//   };

//   const handleLike = async () => {
//     try {
//       const currentItem = items[currentIndex];
//       const response = await fetch(`${API_URL}/${category}/liked`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           userId,
//           eventId,
//           itemId: currentItem.id,
//           itemName: currentItem.name,
//           itemImage: currentItem.urlImage,
//           category: category,
//         }),
//       });

//       const data = await response.json();
//       console.log(`${category} liked:`, data);
//       handleNext();
//     } catch (error) {
//       console.error(`Error saving ${category} like:`, error);
//     }
//   };

//   const handleDislike = async () => {
//     try {
//       const currentItem = items[currentIndex];
//       const response = await fetch(`${API_URL}/${category}/disliked`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           userId,
//           eventId,
//           itemId: currentItem.id,
//           itemName: currentItem.name,
//           itemImage: currentItem.urlImage,
//           category: category,
//         }),
//       });

//       const data = await response.json();
//       console.log(`${category} disliked:`, data);
//       handleNext();
//     } catch (error) {
//       console.error(`Error saving ${category} dislike:`, error);
//     }
//   };

//   // ... (el resto del código permanece igual)
// };

// export default SwipeableCard;


// 3. Finalmente, necesitamos asegurarnos de que el `eventId` se establezca correctamente en el store. Esto generalmente se haría en el componente donde se selecciona o crea el evento. Por ejemplo, en la página donde se selecciona el evento, podrías tener algo como esto:

//  title="EventSelection.js">
// import useEventStore from '@/store/useEventStore';

// const EventSelection = () => {
//   const setEventId = useEventStore(state => state.setEventId);

//   const handleEventSelection = (selectedEventId) => {
//     setEventId(selectedEventId);
//     // Aquí podrías navegar a la página de películas o realizar otras acciones necesarias
//   };

//   // ... resto del componente
// };

// 4. En la página de películas (`page.js`), asegúrate de que el `eventId` esté disponible antes de renderizar el `SwipeableCard`. Puedes hacer esto verificando el `eventId` en el store y redirigiendo al usuario si no está establecido:

//  title="page.js (Movies)">
// "use client";
// import SwipeableCard from "@/components/swipeable-card";
// import { useRouter } from "next/navigation";
// import { useState, useEffect } from "react";
// import withAuth from '@/components/withAuth.js';
// import useEventStore from '@/store/useEventStore';

// const API_URL = process.env.NEXT_PUBLIC_API_URL;

// const Movies = () => {
//   const router = useRouter();
//   const [movies, setMovies] = useState([]);
//   const eventId = useEventStore(state => state.eventId);

//   useEffect(() => {
//     if (!eventId) {
//       // Redirigir al usuario a la selección de evento si no hay eventId
//       router.push('/select-event');
//       return;
//     }

//     // Fetch movies...
//   }, [eventId, router]);

//   // ... resto del componente
// };

// export default withAuth(Movies);

// Con estos cambios, el `eventId` se incluirá en las peticiones de like y dislike, y se guardará en la base de datos junto con la información del usuario y la película. Asegúrate de que tu backend esté preparado para recibir y procesar el `eventId` en las rutas de `/movies/liked` y `/movies/disliked`.
