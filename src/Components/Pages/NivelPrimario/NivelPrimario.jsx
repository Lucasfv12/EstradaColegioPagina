// src/Components/NivelPrimario.js
import React from "react";
import TopBar from "../../TopBar";
import NavBar from "../../Navbar";
import Footer from "../../Footer";
import "../../../styles/NivelPrimario.css"; // Asegúrate de tener un CSS separado para este componente
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDoorOpen,
  faClock,
  faCalendar,
  faArrowsAlt,
} from "@fortawesome/free-solid-svg-icons"; // Usa los mismos íconos si es necesario

import EducationalInfoSectionPrimaria from "./EducationalInfoSectionPrimaria";

function NivelPrimario() {
  return (
    <div>
      <TopBar />
      <NavBar />

      {/* Header rojo con el texto "Nivel Primario" */}
      <div className="nivel-primario-header">
        <h1>NIVEL PRIMARIO</h1>
      </div>

      {/* Sección de imagen de fondo con el mensaje */}
      <div className="nivel-primario-banner">
        <div className="banner-message">
          <h1>
            FOMENTAMOS UNA EDUCACIÓN INTEGRAL PARA EL DESARROLLO PERSONAL Y
            SOCIAL
          </h1>
        </div>
      </div>

      {/* Sección de información especial */}
      <section className="nivel-primario-info">
        <h2>Información Especial</h2>
        <div className="info-items">
          <div className="info-item">
            <FontAwesomeIcon icon={faDoorOpen} className="info-icon" />
            <h3>CURSOS</h3>
            <p>de 1er a 6to grado</p>
          </div>
          <div className="info-item">
            <FontAwesomeIcon icon={faClock} className="info-icon" />
            <h3>JORNADA COMPLETA</h3>
            <p>
              La jornada es completa con actividades académicas y recreativas.
            </p>
          </div>
          <div className="info-item">
            <FontAwesomeIcon icon={faCalendar} className="info-icon" />
            <h3>HORARIOS</h3>
            <p>de 8:00 a 16:00 hs</p>
          </div>
          <div className="info-item">
            <FontAwesomeIcon icon={faArrowsAlt} className="info-icon" />
            <h3>PROYECTOS EDUCATIVOS</h3>
            <p>
              Desarrollamos diversos proyectos que fomentan el aprendizaje
              integral.
            </p>
          </div>
        </div>
      </section>

      <EducationalInfoSectionPrimaria />

      <Footer />
    </div>
  );
}

export default NivelPrimario;
