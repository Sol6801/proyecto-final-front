'use client';

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import withAuth from "@/components/withAuth.js";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

const ResultPage = ({ params }) => {
  const { eventId } = params;

  const [likedMovies, setLikedMovies] = useState([]);

  useEffect(() => {
    fetch(`${API_URL}/events/${eventId}/movies/mostLiked`)
      .then((res) => res.json())
      .then((data) => setLikedMovies(data))
      .catch((error) => console.error("Error fetching liked movies:", error));
  }, [eventId]);

  return (
    <section className="h-screen bg-violet-400 grid place-items-center flex-1 rounded-lg relative p-8">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center">Most Liked Movies</h2>
        {likedMovies.length > 0 ? (
          <ul className="space-y-2">
            {likedMovies.map((movie) => (
              <li key={movie.movieId} className="bg-gray-100 p-3 rounded flex justify-between items-center">
                <span className="font-semibold">{movie.title}</span>
                <span className="text-sm text-gray-500">ID: {movie.movieId}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-center text-gray-600">No liked movies available yet.</p>
        )}
      </div>
    </section>
  );
};

export default withAuth(ResultPage);