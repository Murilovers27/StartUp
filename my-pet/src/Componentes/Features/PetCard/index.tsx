// Exemplo básico da estrutura do card
import React from 'react';
import './index.css'; 
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [elemName: string]: any;
    }
  }
}

interface PetCardProps {
  name: string;
  species?: string;
  age?: string | number;
  location?: string;
  photoUrl?: string;
}


function PetCard({ name, species, age, location, photoUrl }: PetCardProps) {
  // Use a imagem que você exportou do Figma ou um placeholder
  const imageSource = photoUrl || 'caminho/para/pet-placeholder.jpg'; 

  return (
    <div className="pet-card">
      <div className="pet-card-image-container">
        <img 
          src={imageSource} 
          alt={`Foto de ${name}`} 
          className="pet-card-image" 
        />
        {/*
          No Figma, se houver um Badge ou Ícone de "Adotado" ou "Novo",
          ele iria aqui como um elemento sobreposto.
        */}
      </div>
      
      <div className="pet-card-info">
        <h3 className="pet-card-name">{name}</h3>
        <p className="pet-card-details">
          {species} - {age}
        </p>
        <p className="pet-card-location">
          <span role="img" aria-label="Location pin">📍</span> {location}
        </p>
      </div>

      {/*
        No Figma, se houver um botão de "Ver Mais" ou um ícone de "Favorito",
        ele seria incluído nesta seção.
      */}
      <button className="pet-card-button">Ver Perfil</button>
    </div>
  );
}

export default PetCard;