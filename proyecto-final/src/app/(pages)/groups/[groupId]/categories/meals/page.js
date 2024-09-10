import SwipeableCard from "@/app/components/swipeablecard";

export default function Meals() {
    return (
    <section className='w-screen flex flex-col bg-violet-400 rounded-lg'>
     <h1 className="text-3xl font-bold text-center mb-12">Comidas</h1>
   <SwipeableCard/>
   </section>
    );
  }
  