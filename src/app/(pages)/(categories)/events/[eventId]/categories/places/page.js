"use client";
import SwipeableCard from "@/components/swipeable-card";
import { useRouter } from "next/navigation";

const Places = () => {
  const router = useRouter();

  const goToCategories = () => {
    router.push(`../categories`);
  };

  const places = [
    {
      id: 1,
      title: "Playa",
      imageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    },
    {
      id: 2,
      title: "Plaza",
      imageUrl:
        "https://www.merlo.gob.ar/portal/wp-content/uploads/2019/04/Plaza-Dr.-Manuel-Belgrano-Padua-3.jpg",
    },
    {
      id: 3,
      title: "Museo",
      imageUrl:
        "https://www.inah.gob.mx/images/fotodeldia/20230809_fotodia_EsculturasMNCM.jpg",
    },
    {
      id: 4,
      title: "Restaurante",
      imageUrl: "https://images.unsplash.com/photo-1528605248644-14dd04022da1",
    },
    {
      id: 5,
      title: "Montaña",
      imageUrl:
        "https://travesiapirenaica.b-cdn.net/wp-content/uploads/2022/07/Equipamiento-y-consejos-para-un-paseo-en-las-montanas.jpg",
    },
  ];

  return (
    <section className="w-screen flex flex-col bg-violet-400 rounded-lg">
      <h1 className="text-3xl font-bold text-center mb-12">Lugares</h1>
      <SwipeableCard items={places} />

      <button onClick={goToCategories}>
        <a className="bg-white text-violet-600 px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-100">
          Ir Atrás
        </a>
      </button>
    </section>
  );
};

export default Places;
