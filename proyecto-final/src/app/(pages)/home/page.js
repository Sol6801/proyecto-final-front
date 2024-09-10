import Card from '@/app/components/Card';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';
import React from 'react';  
import styles from '@/app/styles/Card.module.css';

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <br/>
      <div className={styles.container}>

        <section className="flex flex-col items-center justify-center py-20 bg-gradient-to-b from-blue-500 to-blue-700 text-white">
          <h1 className="text-5xl font-extrabold mb-4">Planner Buddy</h1>
          <p className="text-xl mb-8">Planeá tu salida mientras te divertis!</p>
          <a href="#" className="bg-white text-blue-600 px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-100">
           Grupos
          </a>
          <br/>
          <a href="#" className="bg-white text-blue-600 px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-100">
            Amigos
          </a>
        </section>

                {/* Features Section */}
                <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Elegí con tus amigos entre las diferentes categorías...</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-4">Feature 1</h3>
              <p>We offer a great feature that will make your life easier.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-4">Feature 2</h3>
              <p>Our product is built with top-notch technology.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-4">Feature 3</h3>
              <p>We provide excellent support and services.</p>
            </div>
          </div>
        </div>
      </section>

      </div>
      <Footer />
    </div>
  );
};

export default HomePage;


// const HomePage = () => {
//   return (
//     <div className={styles.container}>
//       <h1>ESTAMOS EN EL HOME</h1>
//       <div className={styles.cards}>
//         <Card
//           title="SOY OTRA CARD"
//           description="This is a description of the first card."
//           imageUrl="/images/card-image1.jpg"
//         />
//         <Card
//           title="YO TAMBIEN"
//           description="This is a description of the second card."
//           imageUrl="/images/card-image2.jpg"
//         />
//         {/* Add more cards as needed */}
//       </div>
//     </div>
//   );
// };

// export default HomePage;
