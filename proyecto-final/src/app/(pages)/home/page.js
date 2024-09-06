import Card from '@/app/components/Card';
import React from 'react';  
import styles from '@/app/styles/Card.module.css';

const HomePage = () => {
  return (
    <div className={styles.container}>
      <h1>ESTAMOS EN EL HOME</h1>
      <div className={styles.cards}>
        <Card
          title="SOY OTRA CARD"
          description="This is a description of the first card."
          imageUrl="/images/card-image1.jpg"
        />
        <Card
          title="YO TAMBIEN"
          description="This is a description of the second card."
          imageUrl="/images/card-image2.jpg"
        />
        {/* Add more cards as needed */}
      </div>
    </div>
  );
};

export default HomePage;
