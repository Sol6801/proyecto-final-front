// import React, { useState } from "react";
// import { useRouter } from "next/navigation";
// import withAuth from "@/components/withAuth.js";
// import OpenAI from "openai";

// const openai = new OpenAI({
//     organization: "YOUR_ORG_ID",
//     project: "$PROJECT_ID",
// });

// const API_URL = process.env.NEXT_PUBLIC_API_URL;

// const ResultPage = ({ params }) => {
//   const router = useRouter();
//   const { eventId } = params;

//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const goToEvent = () => {
//     router.push(`/events/${eventId}`);
//   };
//   const handleIA = () => {
//     router.push(`/events/${eventId}/result/ia`);
//   };


//   if (loading) return <div className="h-screen bg-violet-400 grid place-items-center">Cargando resultados...</div>;
//   if (error) return <div className="h-screen bg-violet-400 grid place-items-center">Error: {error}</div>;

//   return (
//     <section className="h-full min-h-screen bg-violet-400 flex flex-row rounded-lg relative justify-evenly">
//       <div className="bg-white rounded-lg shadow-lg p-6 w-full min-w-80 m-5">
//         <h2 className="text-2xl font-bold mb-4 text-center">Most Liked Movies</h2>

//       </div>
 
//       <div className="flex flex-row items-center justify-center gap-8 py-8">
//             <button
//               onClick={goToEvent}
//               className="bg-white text-violet-600 px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-100"
//             >
//               Volver al Evento
//             </button>
//             <button
//               onClick={handleIA}
//               className="bg-white text-violet-600 px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-100"
//             >
//              Generá tu recomendación 🌟
//             </button>
//           </div>
//       </section>
//   );
// };

// export default withAuth(ResultPage);