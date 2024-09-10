'use client';
import SwipeableCard from "@/app/components/swipeablecard";
import { useRouter } from 'next/navigation';

const Meals = () => {
  const router = useRouter();

  const goBack = () => {
    router.back(); 
  };
    return (
    <section className='w-screen flex flex-col bg-violet-400 rounded-lg'>
     <h1 className="text-3xl font-bold text-center mb-12">Comidas</h1>
   <SwipeableCard/>
   <button onClick={goBack}>
      <a className="bg-white text-violet-600 px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-100">
            Ir Atrás
          </a>
      </button>
   </section>
    );
  }
  
  export default Meals;