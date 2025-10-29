"use client"; 

// 1. Imports necessários
import Link from 'next/link'; // Essencial para os cards clicáveis
import styles from './page.module.css'; 
import PetCard from '../Componentes/Features/PetCard'; 
import { FaMapMarkedAlt, FaStar, FaUser } from 'react-icons/fa'; // Ícones para o banner

// Definição da Interface (mantida)
interface PetData {
  name: string;
  species: string;
  age: string;
  location: string;
  photoUrl: string;
}

// O Componente da Homepage
export default function HomePage() {
  // Dados de exemplo (mantidos)
  const pets: PetData[] = [
    { name: "Rex", species: "Cachorro", age: "2 anos", location: "São Paulo, SP", photoUrl: "/rex.png" },
    { name: "Mimi", species: "Calango", age: "1 ano", location: "Rio de Janeiro, RJ", photoUrl: "/mimi.png" },
    { name: "Charlie", species: "Cachorro", age: "6 meses", location: "Curitiba, PR", photoUrl: "/charlie.png" },
    { name: "Pablito", species: "Pombo", age: "8 meses", location: "Belo Horizonte, MG", photoUrl: "/pablito.png" },
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

      {/* --- 2. Banner de 3 Cards CLICÁVEIS --- */}
      <section className={styles.featureBanner}>
        <div className={styles.bannerGrid}>
          
          {/* Card 1: PetMap (AGORA É UM LINK) */}
          <Link href="/pet-map" className={styles.bannerCardLink}>
            <div className={styles.bannerIcon}><FaMapMarkedAlt /></div>
            <div className={styles.bannerCardContent}> {/* Div extra para alinhar texto */}
              <h3>Pet map</h3>
              <p>Encontre o melhor lugar para seu pet</p>
            </div>
          </Link>
          
          {/* Card 2: Pet Star (AGORA É UM LINK - Ajuste o href se necessário) */}
          <Link href="/planos" className={styles.bannerCardLink}> {/* Ex: Levando para /planos */}
            <div className={styles.bannerIcon}><FaStar /></div>
            <div className={styles.bannerCardContent}>
              <h3>Pet Star</h3>
              <p>Se torne um pet star e obtenha benefícios</p>
            </div>
          </Link>
          
          {/* Card 3: Pet Zone (AGORA É UM LINK - Ajuste o href se necessário) */}
          <Link href="/login/pagina-usuario" className={styles.bannerCardLink}> {/* Ex: Levando para /login */}
            <div className={styles.bannerIcon}><FaUser /></div>
            <div className={styles.bannerCardContent}>
              <h3>Pet zone</h3>
              <p>Consulte as informações da sua conta</p>
            </div>
          </Link>

        </div>
      </section>

      {/* --- 3. Seção "Sobre" --- */}
      <section className={styles.aboutSection}>
        <div className={styles.aboutCard}>
          <h2>Sobre</h2>
          <p>
            Cansado de usar vários aplicativos para gerenciar a vida do seu pet? O MyPetZone nasceu para resolver exatamente essa dificuldade, atuando como uma plataforma digital que centraliza, organiza e simplifica o acesso a serviços e informações para tutores de animais de estimação. Com nossa solução, você pode explorar um mapa interativo para descobrir novos estabelecimentos pet friendly.
          </p>
          {/* Adicione mais texto se desejar */}
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