import React from 'react';
// Importe apenas os componentes que são exclusivos desta página
import PetCard from '@/componentes/PetCard'; 

// 1. Definição da Interface (Boa prática em TS)
interface PetData {
  name: string;
  species: string;
  age: string;
  location: string;
  photoUrl: string;
}

// 2. O Componente de Página Principal
// O Next.js espera uma função que seja exportada como default
const HomePageContent: React.FC = () => {
  // Dados de exemplo (No futuro, estes virão de uma API)
  const pets: PetData[] = [
    { name: "Rex", species: "Cachorro", age: "2 anos", location: "São Paulo, SP", photoUrl: "/assets/rex.jpg" },
    { name: "Mimi", species: "Gato", age: "1 ano", location: "Rio de Janeiro, RJ", photoUrl: "/assets/mimi.jpg" },
    { name: "Charlie", species: "Pássaro", age: "6 meses", location: "Curitiba, PR", photoUrl: "/assets/charlie.jpg" },
    { name: "Luna", species: "Coelho", age: "8 meses", location: "Belo Horizonte, MG", photoUrl: "/assets/luna.jpg" },
  ];

  return (
    // Coloque aqui todo o conteúdo principal da sua landing page do Figma
    <div className="homepage-container">
      
      {/* 1. Seção Principal (Hero Section) - Baseada no seu design */}
      <section className="hero-section" style={{ padding: '60px 20px', textAlign: 'center' }}>
        <h1>Adote um Amigo, Mude uma Vida.</h1>
        <p>A maior plataforma para encontrar seu pet ideal.</p>
        {/* Inclua seu campo de busca ou botão de call-to-action */}
      </section>

      {/* 2. Seção de Listagem de Pets (Os Cards) */}
      <section className="pet-listings-section">
        <h2 style={{ textAlign: 'center', marginBottom: '40px' }}>Destaques da Semana</h2>
        
        {/* Grid para os Cards - Estilo inline apenas para demonstração de layout */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '20px', 
          padding: '20px 5%' 
        }}>
          
          {/* Mapeamento dos Cards */}
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
      
      {/* Outras Seções (Testemunhos, Como Funciona, etc.) */}
      
    </div>
  );
};

// O componente deve ser o export default
export default HomePageContent;