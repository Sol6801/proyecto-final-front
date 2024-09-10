import Image from 'next/image';
import styles from '../styles/Friend.module.css';  

const Friend = ({ name, imageUrl }) => {
  return (
    <div className={styles.friend}>
      <Image src={imageUrl} alt={name} width={300} height={200} className={styles.friendImg} />
      <h2 className={styles.friendName}>{name}</h2>
    </div>
  );
};

export default Friend;
