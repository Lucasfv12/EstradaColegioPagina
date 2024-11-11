import React, { useState } from "react";
import "../styles/Navbar.css";
import logo from "../assets/Escudosinfondo.png";
import { Link } from "react-router-dom";

const NavBar = ({ className, onMenuToggle }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    onMenuToggle(); // Llamamos a la función para desplazar el carrusel
  };

  return (
    <nav className={`navbar ${className}`}>
      <div className="navbar-left">
        {className === "scrolled" && (
          <>
            <img src={logo} alt="Instituto Logo" className="navbar-logo" />
            <span className="navbar-text">Instituto José Manuel Estrada</span>
          </>
        )}
      </div>
      <div className="navbar-toggle" onClick={toggleMobileMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
      <ul className={`navbar-links ${isMobileMenuOpen ? "active" : ""}`}>
        <li>
          <a href="#institucional">Institucional</a>
        </li>
        <li>
          <a href="#administracion">Administración</a>
        </li>
        <li
          className="dropdown-container"
          onMouseEnter={() => setShowDropdown(true)}
          onMouseLeave={() => setShowDropdown(false)}
        >
          <a href="#niveles-educativos">Niveles Educativos</a>
          {showDropdown && (
            <ul className="dropdown-menu">
              <li>
                <Link to="/nivel-inicial">Nivel Inicial</Link>
              </li>
              <li>
                <a href="#nivel-primario">Nivel Primario</a>
              </li>
              <li>
                <a href="#nivel-secundario">Nivel Secundario</a>
              </li>
            </ul>
          )}
        </li>
        <li>
          <a href="#pastoral">Pastoral</a>
        </li>
        <li>
          <a href="#contactos">Contactos</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
