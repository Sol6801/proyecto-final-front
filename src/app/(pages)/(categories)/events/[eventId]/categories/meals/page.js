'use client';
import SwipeableCard from "@/components/swipeable-card";
import { useRouter } from 'next/navigation';

const Meals = () => {
  const router = useRouter();

  const goToCategories = () => {
    router.push(`../categories`);
  };

  const meals = [
    { id: 1, title: 'Pizza', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/d/d3/Supreme_pizza.jpg'},
    { id: 2, title: 'Sushi', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/6/60/Sushi_platter.jpg' },
    { id: 3, title: 'Hamburguesa', imageUrl: 'https://images.unsplash.com/photo-1550547660-d9450f859349' },
    { id: 4, title: 'Pasta a la Carbonara', imageUrl: 'https://www.pequerecetas.com/wp-content/uploads/2018/01/pasta-carbonara-receta.jpg' },
    { id: 5, title: 'Tacos', imageUrl: 'https://images.aws.nestle.recipes/resized/32bfcaf831e22d6d7ec102ceda99044d_Maggi_-_Chicken_Tacos_1080_850.jpg' },
  ];

    return (
    <section className='w-screen flex flex-col bg-violet-400 rounded-lg'>
     <h1 className="text-3xl font-bold text-center mb-12">Comidas</h1>
   <SwipeableCard 
      items = {meals}
   />
   <button onClick={goToCategories}>
      <a className="bg-white text-violet-600 px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-100">
            Ir Atrás
          </a>
      </button>
   </section>
    );
  }
  
  export default Meals;