import React, { useState } from 'react';
import './Menuburger.css'; // Certifique-se de criar e importar o arquivo CSS

const MenuHamburger = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="hamburger-menu">
      <div className={`menu-icon ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      {isOpen && (
        <div className="menu-links">
          <a href="#pagina-inicial">Página Inicial</a>
          <a href="#ranking-universitario">Ranking Universitário</a>
          <a href="#cursos">Cursos</a>
          <a href="#foto-de-perfil">Foto de Perfil</a>
        </div>
      )}
    </div>
  );
};

export default MenuHamburger;