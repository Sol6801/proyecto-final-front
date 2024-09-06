import Image from 'next/image';
import styles from '../styles/Card.module.css';  

const Card = ({ title, description, imageUrl }) => {
  return (
    <div className={styles.card}>
      <Image src={imageUrl} alt={title} width={300} height={200} className={styles.cardImg} />
      <h2 className={styles.cardTitle}>{title}</h2>
      <p className={styles.cardDescription}>{description}</p>
    </div>
  );
};

export default Card;
