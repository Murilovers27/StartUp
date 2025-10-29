import Image from 'next/image';
// 1. Importe o CSS Module
import styles from './pet-card.module.css'; 

// 2. Defina as Props
interface PetCardProps {
  name: string;
  species: string;
  age: string;
  location: string;
  photoUrl: string;
}

// 3. Exporte o componente (use 'export default')
export default function PetCard({ name, species, age, location, photoUrl }: PetCardProps) {
  return (
    // 4. Aplique as classes do CSS Module
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image src={photoUrl} alt={name} layout="fill" />
      </div>
      <div className={styles.content}>
        <h3>{name}</h3>
        <p className={styles.detail}>{species} • {age}</p>
        <p className={styles.detail}>{location}</p>
      </div>
    </div>
  );
}