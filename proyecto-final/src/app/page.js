import React from 'react';
import Navbar from '../app/components/Navbar';
import Footer from '../app/components/Footer';
import Card from '../app/components/Card';
import styles from '../app/styles/Card.module.css';

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <div className={styles.container}>
        <h1>Welcome to My Site</h1>
        <div className={styles.cards}>
          <Card
            title="PELICULAS"
            description="This is a description of the first card."
            imageUrl=""  
          />
          <Card
            title="LUGARES"
            description="This is a description of the second card."
            imageUrl="" 
          />
          <Card
            title="COMIDAS"
            description="This is a description of the third card."
            imageUrl=""  
          />
          {/* Add more cards as needed */}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;

