import SwipeableCard from "@/app/components/swipeablecard";
import Image from "next/image";

export default function Movies() {
  return (
    <section className='w-screen flex flex-col bg-violet-400 rounded-lg'>
     <h1 className="text-3xl font-bold text-center mb-12">Peliculas</h1>
   <SwipeableCard/>
   </section>
  );
}
