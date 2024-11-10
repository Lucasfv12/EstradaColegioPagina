import React from "react";
import "../styles/Navbar.css";
import logo from "../assets/Escudosinfondo.png"; // Asegúrate de que la ruta sea correcta

const NavBar = ({ className }) => {
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
        <li>
          <a href="#niveles-educativos">Niveles Educativos</a>
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
