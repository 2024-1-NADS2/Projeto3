import React, { useState } from 'react';
import './Menuburger.css'; // Certifique-se de criar e importar o arquivo CSS
import { Link } from "react-router-dom"

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
          <Link to="/feed"></Link><p>Página Inicial</p>
          <Link to="/rankfacul"></Link><p>Ranking Universitário</p>
          <Link to="/rankcurso"></Link><p>Cursos</p>
          <Link to="/perfil"></Link><p>Perfil</p>
        </div>
      )}
    </div>
  );
};

export default MenuHamburger;