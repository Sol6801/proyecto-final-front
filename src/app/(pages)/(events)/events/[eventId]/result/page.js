// 'use client';

// import React, { useState, useEffect } from "react";
// import { useRouter } from "next/navigation";
// import withAuth from "@/components/withAuth.js";

// const API_URL = process.env.NEXT_PUBLIC_API_URL;

// const ResultPage = ({ params }) => {
//   const { eventId } = params;

//   const [likedMovies, setLikedMovies] = useState([]);

//   useEffect(() => {
//     fetch(`${API_URL}/events/${eventId}/movies/mostLiked`)
//       .then((res) => res.json())
//       .then((data) => setLikedMovies(data))
//       .catch((error) => console.error("Error fetching liked movies:", error));
//   }, [eventId]);

//   return (
//     <section className="h-screen bg-violet-400 grid place-items-center flex-1 rounded-lg relative p-8">
//       <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
//         <h2 className="text-2xl font-bold mb-4 text-center">Most Liked Movies</h2>
//         {likedMovies.length > 0 ? (
//           <ul className="space-y-2">
//             {likedMovies.map((movie) => (
//               <li key={movie.movieId} className="bg-gray-100 p-3 rounded flex justify-between items-center">
//                 <span className="font-semibold">{movie.title}</span>
//                 <span className="text-sm text-gray-500">ID: {movie.movieId}</span>
//               </li>
//             ))}
//           </ul>
//         ) : (
//           <p className="text-center text-gray-600">No liked movies available yet.</p>
//         )}
//       </div>
//     </section>
//   );
// };

// export default withAuth(ResultPage);




'use client';

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import withAuth from "@/components/withAuth.js";
import Image from "next/image";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
// import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

const ResultPage = ({ params }) => {
  const { eventId } = params;
  const [likedMovies, setLikedMovies] = useState([]);
  const [likedMeals, setLikedMeals] = useState([]);
  const [likedPlaces, setLikedPlaces] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch(`${API_URL}/events/${eventId}/movies/mostLiked`)
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch data');
        return res.json();
      })
      .then((data) => {
        setLikedMovies(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching liked movies:", error);
        setError(error.message);
        setLoading(false);
      });
  }, [eventId]);

  useEffect(() => {
    setLoading(true);
    fetch(`${API_URL}/events/${eventId}/meals/mostLiked`)
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch data');
        return res.json();
      })
      .then((data) => {
        setLikedMeals(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching liked meals:", error);
        setError(error.message);
        setLoading(false);
      });
  }, [eventId]);

  useEffect(() => {
    setLoading(true);
    fetch(`${API_URL}/events/${eventId}/places/mostLiked`)
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch data');
        return res.json();
      })
      .then((data) => {
        setLikedPlaces(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching liked places:", error);
        setError(error.message);
        setLoading(false);
      });
  }, [eventId]);

  if (loading) return <div className="h-screen bg-violet-400 grid place-items-center">Cargando resultados...</div>;
  if (error) return <div className="h-screen bg-violet-400 grid place-items-center">Error: {error}</div>;

  return (
    <section className="h-full min-h-screen bg-violet-400 flex flex-row rounded-lg relative justify-evenly">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full min-w-80 m-5">
        <h2 className="text-2xl font-bold mb-4 text-center">Most Liked Movies</h2>

          {likedMovies.length > 0 ? (
            <>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={likedMovies}>
                  <XAxis dataKey="title" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="likes" fill="#8884d8" />
                </BarChart>
              </ResponsiveContainer>
              <ul className="mt-6 space-y-2">
                {likedMovies.map((movie) => (
                  <li key={movie.movieId} className="bg-gray-100 p-3 rounded flex justify-between items-center">
                    <Image src= {movie.urlImage}
                      alt= {movie.title}
                      width= {150}
                      height= {300}
                    />
                    <span className="font-semibold">{movie.title}</span>
                    <span className="text-sm text-gray-500">Likes: {movie.likes}</span>
                  </li>
                ))}
              </ul>
            </>
          ) : (
            <p className="text-center text-gray-600">No hay películas gustadas disponibles aún.</p>
          )}
      </div>
      <div className="bg-white rounded-lg shadow-lg p-6 w-full min-w-80 m-5">
        <h2 className="text-2xl font-bold mb-4 text-center">Most Liked Meals</h2>

          {likedMeals.length > 0 ? (
            <>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={likedMeals}>
                  <XAxis dataKey="title" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="likes" fill="#8884d8" />
                </BarChart>
              </ResponsiveContainer>
              <ul className="mt-6 space-y-2">
                {likedMeals.map((meal) => (
                  <li key={meal.mealId} className="bg-gray-100 p-3 rounded flex justify-between items-center">
                    <Image src= {meal.urlImage}
                      alt= {meal.title}
                      width= {150}
                      height= {300}
                    />
                    <span className="font-semibold">{meal.title}</span>
                    <span className="text-sm text-gray-500">Likes: {meal.likes}</span>
                  </li>
                ))}
              </ul>
            </>
          ) : (
            <p className="text-center text-gray-600">No hay comidas gustadas disponibles aún.</p>
          )}
      </div>
      <div className="bg-white rounded-lg shadow-lg p-6 w-full min-w-80 m-5">
        <h2 className="text-2xl font-bold mb-4 text-center">Most Liked Places</h2>

          {likedPlaces.length > 0 ? (
            <>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={likedPlaces}>
                  <XAxis dataKey="title" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="likes" fill="#8884d8" />
                </BarChart>
              </ResponsiveContainer>
              <ul className="mt-6 space-y-2">
                {likedPlaces.map((place) => (
                  <li key={place.placeId} className="bg-gray-100 p-3 rounded flex justify-between items-center">
                    <Image src= {place.urlImage}
                      alt= {place.title}
                      width= {150}
                      height= {300}
                    />
                    <span className="font-semibold">{place.title}</span>
                    <span className="text-sm text-gray-500">Likes: {place.likes}</span>
                  </li>
                ))}
              </ul>
            </>
          ) : (
            <p className="text-center text-gray-600">No hay películas gustadas disponibles aún.</p>
          )}
      </div>
      
      
    </section>
  );
};

export default withAuth(ResultPage);