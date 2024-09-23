'use client';

// import Result from "@/components/result";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import withAuth from "@/components/withAuth.js";
// import Chatbot from "@/components/chatbot";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

const ResultPage = ({ params }) => {
  const { eventId } = params;
  const router = useRouter();

  useEffect(() => {
    fetch(`/api/events/${eventId}/movies/mostLiked`)
      .then((res) => res.json())
      .then((data) => setLikedMovies(data));
  }, [eventId]);
  
  const [likedMovies, setLikedMovies] = useState([]);





const handleReady = async () => {
  try {
    // const token = localStorage.getItem('token');
    const currentItem = items[currentIndex];
    const response = await fetch(`${API_URL}/${eventId}/desicion`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        // "Authorization": `Bearer ${token}`
      },
      body: JSON.stringify({
        itemId: currentItem.id,
        itemTitle: currentItem.title,
        itemImage: currentItem.imageUrl,
        category: category,
      }),
    });

    const data = await response.json();
    console.log(`${category} liked:`, data);
    handleNext();
  } catch (error) {
    console.error(`Error saving ${category} like:`, error);
    console.error("Error details:", error.message);
  }
};


return (
  <section className="h-screen bg-violet-400 grid place-items-center flex-1 rounded-lg relative">
    {/* <Result items={meals} category="meals"/> */}

    
    <h2>Liked Movies</h2>
          {likedMovies.map((movie) => (
            <p key={movie.id}>{movie.title}</p>
          ))}

          {/* <Chatbot onMessageSend={handleChatMessage} eventId={eventId} /> */}
  </section>
);
};

export default ResultPage;
