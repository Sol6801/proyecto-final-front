// import React, { useState, useEffect } from 'react';
// import Image from 'next/image';

// const API_URL = process.env.NEXT_PUBLIC_API_URL;

// const DecisionManager = ({ eventId }) => {
//   const [decision, setDecision] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const getDecision = async () => {
//     setLoading(true);
//     setError(null);
//     try {
//       const response = await fetch(`${API_URL}/events/${eventId}/decision`);
//       if (!response.ok) {
//         throw new Error('Failed to fetch decision');
//       }
//       const data = await response.json();
//       setDecision(data.data);
//     } catch (err) {
//       console.error('Error fetching decision:', err);
//       setError('Failed to fetch decision. Please try again.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const createDecision = async () => {
//     setLoading(true);
//     setError(null);
//     try {
//       const response = await fetch(`${API_URL}/events/${eventId}/decision`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       });

//       if (!response.ok) {
//         throw new Error('Failed to create decision');
//       }

//       await getDecision(); // Fetch the updated decision after creating it
//     } catch (err) {
//       console.error('Error creating decision:', err);
//       setError('Failed to create decision. Please try again.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     getDecision();
//   }, [eventId]);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   return (
//     <div className="bg-white rounded-lg shadow-lg p-6 w-full">
//       <h2 className="text-2xl font-bold mb-4">Event Decision</h2>
//       {decision ? (
//         <div className="grid grid-cols-3 gap-4">
//           {['movie', 'meal', 'place'].map((category) => (
//             <div key={category} className="border rounded p-4">
//               <h3 className="text-xl font-semibold mb-2 capitalize">{category}</h3>
//               <Image
//                 src={decision[category].urlImage}
//                 alt={decision[category].title}
//                 width={200}
//                 height={200}
//                 className="mb-2 rounded"
//               />
//               <p>{decision[category].title}</p>
//             </div>
//           ))}
//         </div>
//       ) : (
//         <p>No decision has been made yet.</p>
//       )}
//       <button
//         id="decision-btn"
//         onClick={createDecision}
//         className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
//         disabled={loading}
//         style={{ display: 'none' }}
//       >
//         {decision ? 'Update Decision' : 'Create Decision'}
//       </button>
//     </div>
//   );
// };

// export default DecisionManager;

import React, { useState, useEffect } from "react";
import Image from "next/image";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

const DecisionManager = ({ eventId, creator }) => {
  const [decision, setDecision] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [noDecision, setNoDecision] = useState(false); // Nuevo estado para manejar cuando no hay decisiones

  const getDecision = async () => {
    setLoading(true);
    setError(null);
    setNoDecision(false); // Resetear el estado de noDecision
    try {
      const response = await fetch(`${API_URL}/events/${eventId}/decision`);
      if (!response.ok) {
        // Si el servidor responde con un 404, significa que no se encontró la decisión
        if (response.status === 404) {
          setNoDecision(true); // Establecer el estado de noDecision a true
        } else {
          throw new Error("Failed to fetch decision");
        }
      } else {
        const data = await response.json();
        setDecision(data.data);
      }
    } catch (err) {
      console.error("Error fetching decision:", err);
      setError("Failed to fetch decision. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const createDecision = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`${API_URL}/events/${eventId}/decision`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to create decision");
      }

      await getDecision(); // Fetch the updated decision after creating it
    } catch (err) {
      console.error("Error creating decision:", err);
      setError("Failed to create decision. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getDecision();
  }, [eventId]);

  if (loading) {
    return (
      <div className="w-full h-96 flex items-center align-middle justify-center">
      <div className="relative block w-16 h-16">
        <div className="w-full h-full border-4 border-purple-900 border-t-transparent rounded-full animate-spin"></div>
        <div className="absolute inset-0 m-auto w-12 h-12 border-4 border-purple-500 border-t-transparent rounded-full animate-spin-slow"></div>
        <div className="absolute inset-0 m-auto w-8 h-8 border-4 border-purple-300 border-t-transparent rounded-full animate-spin-reverse"></div>
      </div>
      </div>
    );
  }

  //   if (noDecision) {
  //     return <div>No hay decisiones tomadas aún. Por favor, crea una decisión.</div>;
  //   }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const categoryTitles = {
    movie: "Película",
    meal: "Comida",
    place: "Lugar",
  };
  console.log("isCreator", creator);

  return (
    <div className="bg-white rounded-lg py-5 px-2">
      <div className="text-center">
        <h2 className="text-3xl bg-violet-200 rounded-lg shadow-md font-extrabold mb-4 text-indigo-600 inline-block p-4">
          Decisión final:
        </h2>
      </div>
      {decision ? (
        <div className="flex flex-col md:flex-row justify-evenly gap-8">
          {["movie", "meal", "place"].map((category) => (
            <div
              key={category}
              className="border rounded-lg p-6 shadow-lg flex flex-col items-center justify-between transition-transform transform min-h-60"
            >
              <h3 className="text-2xl font-semibold mb-6 capitalize text-gray-800">
                {categoryTitles[category]}
              </h3>
              <div className="flex-grow flex items-center justify-center mb-6">
                <Image
                  src={decision[category].urlImage}
                  alt={decision[category].title}
                  width={200}
                  height={200}
                  className="rounded-lg shadow-lg"
                />
              </div>
              <p className="text-lg text-gray-700 text-center">
                {decision[category].title}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center">
          <p className="text-gray-500 mb-4">No decision has been made yet.</p>
          {creator ? (
            
            <button
              id="decision-btn"
              onClick={createDecision}
              className="bg-violet-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-violet-700 transition-all duration-300"
              disabled={loading}
            >
              Fijar Decisión
            </button>
          ) : (
            <button
              id="decision-btn"
              onClick={createDecision}
              className="bg-gray-300 text-gray-500 px-6 py-3 rounded-full text-lg font-semibold cursor-not-allowed"
              disabled={true}
            >
              Fijar Decisión
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default DecisionManager;
