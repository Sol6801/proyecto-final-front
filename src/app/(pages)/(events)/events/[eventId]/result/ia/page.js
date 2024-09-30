// "use client";
// import React, { useState, useEffect } from "react";
// import { useRouter } from "next/navigation";
// import LikedItemsChart from "@/components/result.js";
// import withAuth from "@/components/withAuth.js";

// const API_URL = process.env.NEXT_PUBLIC_API_URL;

// function AIRecommendationsPage({ params }) {
//   const { eventId } = params;
//   const router = useRouter();
//   const [recommendations, setRecommendations] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   // useEffect(() => {
//   //     if (!eventId) return;

//   //     const fetchMostLikedItems = async () => {
//   //         try {
//   //             const categories = ['movies', 'meals', 'places'];
//   //             const mostLikedItems = {};

//   //             for (const category of categories) {
//   //                 const response = await fetch(`${API_URL}/events/${eventId}/${category}/mostLiked`);
//   //                 if (!response.ok) throw new Error(`Failed to fetch ${category}`);
//   //                 const data = await response.json();
//   //                 mostLikedItems[category] = data.map(item => item.title);
//   //             }

//   //             return mostLikedItems;
//   //         } catch (error) {
//   //             console.error('Error fetching most liked items:', error);
//   //             throw error;
//   //         }
//   //     };
//   // }, [eventId]);
//   // useEffect(() => {
//   //         const getRecommendations = async (mostLikedItems) => {
//   //             try {
//   //                 const categories = ['movies', 'meals', 'places'];
//   //                 const response = await fetch('/api/ai', {
//   //                     method: 'POST',
//   //                     headers: { 'Content-Type': 'application/json' },
//   //                     body: JSON.stringify({
//   //                         movies: mostLikedItems.movies,
//   //                         places: mostLikedItems.places,
//   //                         foods: mostLikedItems.meals,
//   //                         dislikes: [] // You might want to implement a way to track dislikes as well
//   //                     })
//   //                 });

//   //                 if (!response.ok) throw new Error('Failed to get recommendations');
//   //                 const data = await response.json();
//   //                 setRecommendations(data);
//   //             } catch (error) {
//   //                 console.error('Error getting recommendations:', error);
//   //                 setError(error.message);
//   //             } finally {
//   //                 setLoading(false);
//   //             }
//   //         };
//   //         getRecommendations();
//   //     }, []);

//   // fetchMostLikedItems()
//   //     .then(getRecommendations)
//   //     .catch(error => {
//   //         setError(error.message);
//   //         setLoading(false);
//   //     });

//   useEffect(() => {
//     const getRecommendations = async (eventId) => {
//       try {
//         // Primero, obtén los elementos más likeados y los dislikes
//         // const mostLikedItems = {
//         //   movies: await fetch(`/api/events/${eventId}/movies/mostLiked`).then(
//         //     (res) => res.json()
//         //   ),
//         //   places: await fetch(`/api/events/${eventId}/places/mostLiked`).then(
//         //     (res) => res.json()
//         //   ),
//         //   meals: await fetch(`/api/events/${eventId}/meals/mostLiked`).then(
//         //     (res) => res.json()
//         //   ),
//         // };

//         // const dislikedItems = await fetch(
//         //   `/api/events/${eventId}/meals/disliked`
//         // ).then((res) => res.json());

//         // Ahora realiza la llamada a la API de AI con los datos obtenidos
//         const response = await fetch("/api/ai", {
//           method: "GET",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({
//             movies: mostLikedItems.movies.map((item) => item.title),
//             places: mostLikedItems.places.map((item) => item.title),
//             foods: mostLikedItems.meals.map((item) => item.title),
//             dislikes: dislikedItems.map((item) => item.title), // Asegúrate de que esto esté correcto
//           }),
//         });

//         if (!response.ok) throw new Error("Failed to get recommendations");
//         const data = await response.json();
//         setRecommendations(data);
//       } catch (error) {
//         console.error("Error getting recommendations:", error);
//         setError(error.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     // Llama a la función con el eventId correspondiente
//     // Asegúrate de reemplazar esto con el eventId correcto
//     getRecommendations(eventId);
//   }, []); // Asegúrate de que eventId no cambie en cada render, de lo contrario, debes agregarlo a las dependencias

//   if (loading) return <div>Cargando recomendaciones...</div>;
//   if (error) return <div>Error: {error}</div>;

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-3xl font-bold mb-6">Recomendaciones basadas en IA</h1>
//       {recommendations && (
//         <div className="mt-8">
//           <h2 className="text-2xl font-bold mb-4">Recomendaciones de IA</h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             {Object.entries(recommendations).map(([category, items]) => (
//               <div key={category} className="bg-white rounded-lg shadow p-4">
//                 <h3 className="text-xl font-semibold mb-2 capitalize">
//                   {category}
//                 </h3>
//                 <ul className="list-disc pl-5">
//                   {items.map((item, index) => (
//                     <li key={index}>{item}</li>
//                   ))}
//                 </ul>
//               </div>
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }
// export default withAuth(AIRecommendationsPage);



"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import LikedItemsChart from "@/components/result.js";
import withAuth from "@/components/withAuth.js";

function AIRecommendationsPage({ params }) {
  const { eventId } = params;
  const router = useRouter();
  const [recommendations, setRecommendations] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getRecommendations = async () => {
      try {
        const response = await fetch(`/api/ai?eventId=${eventId}`, {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        });

        if (!response.ok) throw new Error("Failed to get recommendations");
        const data = await response.json();
        setRecommendations(data);
      } catch (error) {
        console.error("Error getting recommendations:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    if (eventId) {
      getRecommendations();
    }
  }, [eventId]);

  if (loading) return <div>Cargando recomendaciones...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Recomendaciones basadas en IA</h1>
      {recommendations && (
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Recomendaciones de IA</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {Object.entries(recommendations).map(([category, items]) => (
              <div key={category} className="bg-white rounded-lg shadow p-4">
                <h3 className="text-xl font-semibold mb-2 capitalize">
                  {category}
                </h3>
                <ul className="list-disc pl-5">
                  {items.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default withAuth(AIRecommendationsPage);