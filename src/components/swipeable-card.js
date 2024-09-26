"use client";

import React, { useState, useEffect } from "react";
import { useSwipeable } from "react-swipeable";
import useUserStore from "@/store/useUserStore.js";
import useCategoryIndexStore from "@/store/useCategoryIndexStore.js";
import Image from "next/image";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

const SwipeableCard = ({ items, category, eventId }) => {
  const { userId } = useUserStore();
  const { setIndex, getIndex } = useCategoryIndexStore();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const savedIndex = getIndex(eventId, category);
    setCurrentIndex(savedIndex);
  }, [eventId, category, getIndex]);

  const handleNext = () => {
    const newIndex = (currentIndex + 1) % items.length;
    setCurrentIndex(newIndex);
    setIndex(eventId, category, newIndex);
  };

  const handleLike = async () => {
    try {
      const currentItem = items[currentIndex];
      const response = await fetch(`${API_URL}/events/${eventId}/${category}/liked`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId,
          eventId,
          itemId: currentItem.id,
          itemName: currentItem.name,
          itemImage: currentItem.urlImage,
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

  const handleDislike = async () => {
    try {
      const currentItem = items[currentIndex];
      const response = await fetch(`${API_URL}/events/${eventId}/${category}/disliked`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId,
          eventId,
          itemId: currentItem.id,
          itemName: currentItem.name,
          itemImage: currentItem.urlImage,
          category: category,
        }),
      });

      const data = await response.json();
      console.log(`${category} disliked:`, data);
      handleNext();
    } catch (error) {
      console.error(`Error saving ${category} dislike:`, error);
      console.error("Error details:", error.message);
    }
  };

  const handlers = useSwipeable({
    onSwipedLeft: handleDislike,
    onSwipedRight: handleLike,
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  if (items.length === 0 || !items[currentIndex]) {
    return (
      <div className='h-screen'>
        <h2>No hay elementos disponibles para mostrar.</h2>
      </div>
    )
  }

  return (
    <section className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-10">
      <button
      onClick={handleDislike}
      className="hidden md:inline-block min-w-32 bg-white text-violet-600 px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-100"
    >
      Dislike
    </button>
  {/* Imagen centrada en todas las pantallas */}
  <div
    {...handlers}
    className="flex flex-col justify-evenly min-w-80 md:min-w-96 h-full min-h-80 items-center bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden cursor-pointer mx-20"
  >
    <Image
      className="object-cover"
      src={items[currentIndex].urlImage || "/fallback-image.jpg"}
      alt={items[currentIndex].name || "Imagen no disponible"}
      width={400}
      height={800}
    />
    <div className="p-4">
      <h3 className="text-xl font-bold mb-2">
        {items[currentIndex].name || "Título no disponible"}
      </h3>
    </div>
  </div>

  <button
      onClick={handleLike}
      className="hidden md:inline-block min-w-32 bg-white text-violet-600 px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-100"
    >
      Like
    </button>

  {/* Contenedor de botones */}
  <div className="flex justify-around w-screen md:w-auto md:hidden">
    <button
      onClick={handleDislike}
      className="min-w-32 bg-white text-violet-600 px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-100"
    >
      Dislike
    </button>

    <button
      onClick={handleLike}
      className="min-w-32 bg-white text-violet-600 px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-100"
    >
      Like
    </button>
  </div>
</section>


  );
};

export default SwipeableCard;