import React from 'react';
import './index.css'; // Importa os estilos

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content-container">
        
        {/* Coluna 1: Logo e Descrição (se houver no Figma) */}
        <div className="footer-section brand-info">
          <h4 className="footer-logo">MyPetZone</h4>
          <p className="footer-description">
            Encontrando lares amorosos para todos os pets.
          </p>
        </div>

        {/* Coluna 2: Links de Navegação */}
        <div className="footer-section navigation-links">
          <h4>Navegação</h4>
          <ul>
            <li><a href="/home">Início</a></li>
            <li><a href="/adotar">Adotar</a></li>
            <li><a href="/sobre">Sobre Nós</a></li>
            <li><a href="/contato">Contato</a></li>
          </ul>
        </div>

        {/* Coluna 3: Redes Sociais / Contato */}
        <div className="footer-section social-media">
          <h4>Siga-nos</h4>
          {/* Substitua os SVGs ou ícones por seus próprios ícones exportados do Figma */}
          <div className="social-icons">
            <a href="#"><span role="img" aria-label="Instagram">📸</span></a>
            <a href="#"><span role="img" aria-label="Facebook">📘</span></a>
            <a href="#"><span role="img" aria-label="Twitter">🐦</span></a>
          </div>
        </div>

      </div>

      {/* Seção de Copyright no final */}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} MyPetZone. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;