import { useState } from 'react';
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
          <Link to="/feed"><p>Página Inicial</p></Link>
          <Link to="/rankfacul"><p>Ranking Universitário</p></Link>
          <Link to="/rankcurso"><p>Cursos</p></Link>
          <Link to="/perfil"><p>Perfil</p></Link>
        </div>
      )}
    </div>
  );
};

export default MenuHamburger;