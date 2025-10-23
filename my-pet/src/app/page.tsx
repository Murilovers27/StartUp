"use client"; // Precisa de 'use client' se o PetCard usar hooks

import styles from './page.module.css'; 
import PetCard from '../Componentes/Features/PetCard'; // Importa o PetCard

// Importe os ícones que instalamos (Cadastro)
import { FaMapMarkedAlt, FaStar, FaUser } from 'react-icons/fa';

// Definição da Interface
interface PetData {
  name: string;
  species: string;
  age: string;
  location: string;
  photoUrl: string;
}

// O Componente de Página Principal
export default function HomePage() {
  // Dados de exemplo (No futuro, estes virão de uma API)
  const pets: PetData[] = [
    { name: "Rex", species: "Cachorro", age: "2 anos", location: "São Paulo, SP", photoUrl: "/logo.png" }, // Usei a logo como placeholder
    { name: "Mimi", species: "Gato", age: "1 ano", location: "Rio de Janeiro, RJ", photoUrl: "/logo.png" },
    { name: "Charlie", species: "Cachorro", age: "6 meses", location: "Curitiba, PR", photoUrl: "/logo.png" },
    { name: "Luna", species: "Gato", age: "8 meses", location: "Belo Horizonte, MG", photoUrl: "/logo.png" },
  ];

  return (
    <div className={styles.pageContainer}>
      
      {/* --- 1. Nova Seção Hero --- */}
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>MyPetZone</h1>
          <p className={styles.heroSubtitle}>
            Tudo o que seu melhor amigo precisa em um só lugar.
          </p>
        </div>
      </section>

      {/* --- 2. Novo Banner de 3 Cards --- */}
      <section className={styles.featureBanner}>
        <div className={styles.bannerGrid}>
          {/* Card 1: PetMap */}
          <div className={styles.bannerCard}>
            <div className={styles.bannerIcon}><FaMapMarkedAlt /></div>
            <div>
              <h3>Pet map</h3>
              <p>Encontre o melhor lugar para seu pet</p>
            </div>
          </div>
          {/* Card 2: Pet Star */}
          <div className={styles.bannerCard}>
            <div className={styles.bannerIcon}><FaStar /></div>
            <div>
              <h3>Pet Star</h3>
              <p>Se torne um pet star e obtenha benefícios</p>
            </div>
          </div>
          {/* Card 3: Pet Zone */}
          <div className={styles.bannerCard}>
            <div className={styles.bannerIcon}><FaUser /></div>
            <div>
              <h3>Pet zone</h3>
              <p>Consulte as informações da sua conta</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- 3. Seção "Sobre" --- */}
      <section className={styles.aboutSection}>
        <div className={styles.aboutCard}>
          <h2>Sobre</h2>
          <p>
            Cansado de usar vários aplicativos para gerenciar a vida do seu pet? O MyPetZone nasceu para resolver exatamente essa dificuldade, atuando como uma plataforma digital que centraliza, organiza e simplifica o acesso a serviços e informações para tutores de animais de estimação. Com nossa solução, você pode explorar um mapa interativo para descobrir novos estabelecimentos pet friendly.
          </p>
        </div>
      </section>

      {/* --- 4. Seção "Destaques da Semana" (Mantida) --- */}
      <section className={styles.petListingsSection}>
        <h2 className={styles.sectionTitle}>Destaques da Semana</h2>
        
        <div className={styles.petGrid}>
          {pets.map((pet, index) => (
            <PetCard 
              key={index}
              name={pet.name}
              species={pet.species}
              age={pet.age}
              location={pet.location}
              photoUrl={pet.photoUrl} 
            />
          ))}
        </div>
      </section>
      
    </div>
  );
};