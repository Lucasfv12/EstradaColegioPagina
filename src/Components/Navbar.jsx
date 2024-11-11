import React, { useState } from "react";
import "../styles/Navbar.css";
import logo from "../assets/Escudosinfondo.png";

const NavBar = ({ className }) => {
  const [showDropdown, setShowDropdown] = useState(false);

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
      <ul className="navbar-links">
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
              <li><a href="#nivel-inicial">Nivel Inicial</a></li>
              <li><a href="#nivel-primario">Nivel Primario</a></li>
              <li><a href="#nivel-secundario">Nivel Secundario</a></li>
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



