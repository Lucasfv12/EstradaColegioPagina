// src/Components/NivelSecundario.jsx
import React from "react";
import TopBar from "../../TopBar";
import NavBar from "../../Navbar";
import Footer from "../../Footer";
import "../../../styles/NivelSecundario.css"; // Asegúrate de tener un CSS separado para este componente
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChalkboardTeacher,
  faUsers,
  faGraduationCap,
  faBook,
} from "@fortawesome/free-solid-svg-icons"; // Puedes usar íconos relacionados con nivel secundario

import EducationalInfoSectionSecundaria from "./EducationalInfoSectionSecundaria";
import InformacionSecundaria from "./InformacionSecundaria";

function NivelSecundario() {
  return (
    <div>
      <TopBar />
      <NavBar />

      {/* Header azul con el texto "Nivel Secundario" */}
      <div className="nivel-secundario-header">
        <h1>NIVEL SECUNDARIO</h1>
      </div>

      {/* Sección de imagen de fondo con el mensaje */}
      <div className="nivel-secundario-banner">
        <div className="banner-message">
          <h1>
            FORJAMOS EL PENSAMIENTO CRÍTICO Y LA AUTONOMÍA EN NUESTROS
            ESTUDIANTES
          </h1>
        </div>
      </div>

      {/* Sección de información especial */}
      <section className="nivel-secundario-info">
        <h2>Información Especial</h2>
        <div className="info-items">
          <div className="info-item">
            <FontAwesomeIcon icon={faChalkboardTeacher} className="info-icon" />
            <h3>GRADOS</h3>
            <p>de 1er a 6to año</p>
          </div>
          <div className="info-item">
            <FontAwesomeIcon icon={faUsers} className="info-icon" />
            <h3>CLASES DINÁMICAS</h3>
            <p>
              Fomentamos el aprendizaje activo con debates y talleres prácticos.
            </p>
          </div>
          <div className="info-item">
            <FontAwesomeIcon icon={faGraduationCap} className="info-icon" />
            <h3>ORIENTACIONES</h3>
            <p>
              Ofrecemos orientación en Ciencias Económicas y Ciencias Naturales.
            </p>
          </div>
          <div className="info-item">
            <FontAwesomeIcon icon={faBook} className="info-icon" />
            <h3>PROYECTOS DESTACADOS</h3>
            <p>
              Participación en ferias de ciencias, actividades extracurriculares
              y más.
            </p>
          </div>
        </div>
      </section>

      <EducationalInfoSectionSecundaria />
      <InformacionSecundaria />

      <Footer />
    </div>
  );
}

export default NivelSecundario;
