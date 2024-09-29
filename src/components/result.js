import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

const LikedItemsChart = ({ eventId, category }) => {
  const router = useRouter();
  const [likedItems, setLikedItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch(`${API_URL}/events/${eventId}/${category}/mostLiked`)
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch data');
        return res.json();
      })
      .then((data) => {
        setLikedItems(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(`Error fetching liked ${category}:`, error);
        setError(error.message);
        setLoading(false);
      });
  }, [eventId, category]);

  if (loading) return <div className="grid place-items-center">Cargando resultados...</div>;
  if (error) return <div className="grid place-items-center">Error: {error}</div>;

  const categoryTitles = {
    movies: 'Películas',
    meals: 'Comidas',
    places: 'Lugares'
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 w-3/4 m-5">
      <h2 className="text-2xl font-bold mb-4 text-center">{categoryTitles[category]} con más Likes</h2>

      {likedItems.length > 0 ? (
        <>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={likedItems}>
              <XAxis dataKey="title" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="likes" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
          <ul className="mt-6 space-y-2">
            {likedItems.map((item) => (
              <li key={item[`${category.slice(0, -1)}Id`]} className="bg-gray-100 p-3 rounded flex flex-col justify-between items-center">
                <Image 
                  src={item.urlImage}
                  alt={item.title}
                  width={150}
                  height={300}
                />
                <span className="font-semibold p-3">{item.title}</span>
                <span className="text-sm text-gray-500">Likes: {item.likes}</span>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <p className="text-center text-gray-600">No hay {categoryTitles[category].toLowerCase()} gustados disponibles aún.</p>
      )}
    </div>
  );
};

export default LikedItemsChart;