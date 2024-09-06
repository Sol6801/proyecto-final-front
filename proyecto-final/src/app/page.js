import React from 'react';
import Card from '../app/components/Card.js';
  
import styles from '../app/styles/Card.module.css';

const HomePage = () => {
  return (
    <div className={styles.container}>
      <h1>Welcome to My Site</h1>
      <div className={styles.cards}>
        <Card
          title="Card Title 1"
          description="This is a description of the first card."
          imageUrl="/images/card-image1.jpg"
        />
        <Card
          title="Card Title 2"
          description="This is a description of the second card."
          imageUrl="/images/card-image2.jpg"
        />
        {/* Add more cards as needed */}
      </div>
    </div>
  );
};

export default HomePage;
