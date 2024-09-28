// 'use client';

// import React, { useState, useEffect } from "react";
// import { useRouter } from "next/navigation";
// import withAuth from "@/components/withAuth.js";
// import Image from "next/image";
// import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
// // import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

// const API_URL = process.env.NEXT_PUBLIC_API_URL;

// const DecisionPage = ({ params }) => {
//   const router = useRouter();
//   const { eventId } = params;
//   const [likedMovies, setLikedMovies] = useState([]);
//   const [likedMeals, setLikedMeals] = useState([]);
//   const [likedPlaces, setLikedPlaces] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const goToEvent = () => {
//     router.push(`/events/${eventId}`);
//   };

//   const handleIA = () => {
//     router.push(`/events/${eventId}/result/ia`);
//   };

//   const handleDecision = async () => {

//     try {
//       const currentItem = items[currentIndex];
//       const response = await fetch(
//         `${API_URL}/events/${eventId}/${category}/liked`,
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({
//             userId,
//             eventId,
//             itemId: currentItem.id,
//             itemName: currentItem.name,
//             itemImage: currentItem.urlImage,
//             category: category,
//           }),
//         }
//       );

//       const data = await response.json();
//       console.log(`${category} liked:`, data);
//       handleNext();
//     } catch (error) {
//       console.error(`Error saving ${category} like:`, error);
//     }
    

//   };

//   useEffect(() => {
//     setLoading(true);
//     fetch(`${API_URL}/events/${eventId}/movies/mostLiked`)
//       .then((res) => {
//         if (!res.ok) throw new Error('Failed to fetch data');
//         return res.json();
//       })
//       .then((data) => {
//         setLikedMovies(data);
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.error("Error fetching liked movies:", error);
//         setError(error.message);
//         setLoading(false);
//       });
//   }, [eventId]);

//   useEffect(() => {
//     setLoading(true);
//     fetch(`${API_URL}/events/${eventId}/meals/mostLiked`)
//       .then((res) => {
//         if (!res.ok) throw new Error('Failed to fetch data');
//         return res.json();
//       })
//       .then((data) => {
//         setLikedMeals(data);
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.error("Error fetching liked meals:", error);
//         setError(error.message);
//         setLoading(false);
//       });
//   }, [eventId]);

//   useEffect(() => {
//     setLoading(true);
//     fetch(`${API_URL}/events/${eventId}/places/mostLiked`)
//       .then((res) => {
//         if (!res.ok) throw new Error('Failed to fetch data');
//         return res.json();
//       })
//       .then((data) => {
//         setLikedPlaces(data);
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.error("Error fetching liked places:", error);
//         setError(error.message);
//         setLoading(false);
//       });
//   }, [eventId]);

  

//   if (loading) return <div className="h-screen bg-violet-400 grid place-items-center">Cargando resultados...</div>;
//   if (error) return <div className="h-screen bg-violet-400 grid place-items-center">Error: {error}</div>;

//   return (
//     <section>
//     <section className="h-full min-h-screen bg-violet-400 flex flex-row rounded-lg relative justify-evenly">
//       <div className="bg-white rounded-lg shadow-lg p-6 w-full min-w-80 m-5">
//         <h2 className="text-2xl font-bold mb-4 text-center">Peliculas Mas Likeadas</h2>

//           {likedMovies.length > 0 ? (
//             <>
//               <ResponsiveContainer width="100%" height={300}>
//                 <BarChart data={likedMovies}>
//                   <XAxis dataKey="title" />
//                   <YAxis />
//                   <Tooltip />
//                   <Bar dataKey="likes" fill="#8884d8" />
//                 </BarChart>
//               </ResponsiveContainer>
//               <ul className="mt-6 space-y-2">
//                 {likedMovies.map((movie) => (
//                   <li key={movie.movieId} className="bg-gray-100 p-3 rounded flex justify-between items-center">
//                     <Image src= {movie.urlImage}
//                       alt= {movie.title}
//                       width= {150}
//                       height= {300}
//                     />
//                     <span className="font-semibold">{movie.title}</span>
//                     <span className="text-sm text-gray-500">Likes: {movie.likes}</span>
//                   </li>
//                 ))}
//               </ul>
//             </>
//           ) : (
//             <p className="text-center text-gray-600">No hay películas gustadas disponibles aún.</p>
//           )}
//       </div>
//       <div className="bg-white rounded-lg shadow-lg p-6 w-full min-w-80 m-5">
//         <h2 className="text-2xl font-bold mb-4 text-center">Comidas Mas Likeadas</h2>

//           {likedMeals.length > 0 ? (
//             <>
//               <ResponsiveContainer width="100%" height={300}>
//                 <BarChart data={likedMeals}>
//                   <XAxis dataKey="title" />
//                   <YAxis />
//                   <Tooltip />
//                   <Bar dataKey="likes" fill="#8884d8" />
//                 </BarChart>
//               </ResponsiveContainer>
//               <ul className="mt-6 space-y-2">
//                 {likedMeals.map((meal) => (
//                   <li key={meal.mealId} className="bg-gray-100 p-3 rounded flex justify-between items-center">
//                     <Image src= {meal.urlImage}
//                       alt= {meal.title}
//                       width= {150}
//                       height= {300}
//                     />
//                     <span className="font-semibold">{meal.title}</span>
//                     <span className="text-sm text-gray-500">Likes: {meal.likes}</span>
//                   </li>
//                 ))}
//               </ul>
//             </>
//           ) : (
//             <p className="text-center text-gray-600">No hay comidas gustadas disponibles aún.</p>
//           )}
//       </div>
//       <div className="bg-white rounded-lg shadow-lg p-6 w-full min-w-80 m-5">
//         <h2 className="text-2xl font-bold mb-4 text-center">Lugares Mas Likeados</h2>

//           {likedPlaces.length > 0 ? (
//             <>
//               <ResponsiveContainer width="100%" height={300}>
//                 <BarChart data={likedPlaces}>
//                   <XAxis dataKey="title" />
//                   <YAxis />
//                   <Tooltip />
//                   <Bar dataKey="likes" fill="#8884d8" />
//                 </BarChart>
//               </ResponsiveContainer>
//               <ul className="mt-6 space-y-2">
//                 {likedPlaces.map((place) => (
//                   <li key={place.placeId} className="bg-gray-100 p-3 rounded flex justify-between items-center">
//                     <Image src= {place.urlImage}
//                       alt= {place.title}
//                       width= {150}
//                       height= {300}
//                     />
//                     <span className="font-semibold">{place.title}</span>
//                     <span className="text-sm text-gray-500">Likes: {place.likes}</span>
//                   </li>
//                 ))}
//               </ul>
//             </>
//           ) : (
//             <p className="text-center text-gray-600">No hay películas gustadas disponibles aún.</p>
//           )}
//       </div>
//         </section>
//       <div className="flex flex-row items-center justify-center gap-8 py-8">
//             <button
//               onClick={goToEvent}
//               className="bg-white text-violet-600 px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-100"
//             >
//               Volver al Evento
//             </button>
//             <button
//               onClick={handleDecision}
//               className="bg-white text-violet-600 px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-100"
//             >
//               Listo!
//             </button>
//             <button
//               onClick={handleIA}
//               className="bg-white text-violet-600 px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-100"
//             >
//              Generá tu recomendación con IA 🌟
//             </button>

//           </div>
//       </section>
//   );
// };

// export default withAuth(DecisionPage);

'use client';

import { useRouter } from "next/navigation";
import withAuth from "@/components/withAuth.js";
import LikedItemsChart from "@/components/result.js";
import DecisionManager from "@/components/decision.js";

const DecisionPage = ({ params }) => {
  const router = useRouter();
  const { eventId } = params;

  const goToEvent = () => {
    router.push(`/events/${eventId}`);
  };

  const handleIA = () => {
    router.push(`/events/${eventId}/result/ia`);
  };

  return (
    <section>
      <DecisionManager eventId={eventId} />
      <section className="h-full min-h-screen bg-violet-400 flex flex-row rounded-lg relative justify-evenly">
        <LikedItemsChart eventId={eventId} category={'movies'} />
        <LikedItemsChart eventId={eventId} category={'meals'} />
        <LikedItemsChart eventId={eventId} category={'places'} />
      </section>
      <div className="flex flex-row items-center justify-center gap-8 py-8">
        <button
          onClick={goToEvent}
          className="bg-white text-violet-600 px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-100"
        >
          Volver al Evento
        </button>
        <button
          onClick={() => document.getElementById("decision-btn").click()}
          className="bg-white text-violet-600 px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-100"
        >
          Listo!
        </button>
        <button
          onClick={handleIA}
          className="bg-white text-violet-600 px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-100"
        >
          Generá tu recomendación con IA 🌟
        </button>
      </div>
    </section>
  );
};

export default withAuth(DecisionPage);
