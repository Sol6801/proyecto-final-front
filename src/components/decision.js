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


import React, { useState, useEffect } from 'react';
import Image from 'next/image';

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
          throw new Error('Failed to fetch decision');
        }
      } else {
        const data = await response.json();
        setDecision(data.data);
      }
    } catch (err) {
      console.error('Error fetching decision:', err);
      setError('Failed to fetch decision. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const createDecision = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`${API_URL}/events/${eventId}/decision`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Failed to create decision');
      }

      await getDecision(); // Fetch the updated decision after creating it
    } catch (err) {
      console.error('Error creating decision:', err);
      setError('Failed to create decision. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getDecision();
  }, [eventId]);

  if (loading) {
    return <div>Loading...</div>;
  }

//   if (noDecision) {
//     return <div>No hay decisiones tomadas aún. Por favor, crea una decisión.</div>;
//   }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const categoryTitles = {
    movie: 'Película',
    meal: 'Comida',
    place: 'Lugar'
  };
  console.log('isCreator', creator);
  
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 w-max m-5">
      <h2 className="text-2xl font-bold mb-4">Event Decision</h2>
      {decision ? (
        <div className="flex flex-row justify-evenly gap-4 ">
          {['movie', 'meal', 'place'].map((category) => (
            <div key={category} className="border rounded p-4">
              <h3 className="text-xl font-semibold mb-2 capitalize">{categoryTitles[category]}</h3>
              <Image
                src={decision[category].urlImage}
                alt={decision[category].title}
                width={200}
                height={200}
                className="mb-2 rounded"
              />
              <p>{decision[category].title}</p>
            </div>
          ))}
        </div>
      ) : (
        <div>
        <p>No decision has been made yet.</p>
      {creator ? (
      <button
        id="decision-btn"
        onClick={createDecision}
        className="bg-white text-violet-600 px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-100"
        disabled={loading}
        style={{ display: 'block' }}
      >
        Fijar Decisión
      </button>
      ) : (
          <button
        id="decision-btn"
        onClick={createDecision}
        className="bg-white text-violet-600 px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-100"
        disabled={loading}
        style={{ display: 'none' }}
      > Fijar Decisión </button>
      )}
      </div>
    )}
    </div>
  );
};

export default DecisionManager;
