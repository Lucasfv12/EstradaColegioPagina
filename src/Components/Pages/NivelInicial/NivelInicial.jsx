// src/Components/NivelInicial.js
import React from "react";
import TopBar from "../../TopBar";
import NavBar from "../../Navbar";
import Footer from "../../Footer";
import "../../../styles/NivelInicial.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDoorOpen,
  faClock,
  faCalendar,
  faArrowsAlt,
} from "@fortawesome/free-solid-svg-icons"; // Importa los íconos necesarios de FontAwesome
import EducationalInfoSection from "./EducationalInfoSection";
import PropuestaPedagogica from "./PropuestaPedagogica";
import Gallery from "./Gallery";

function NivelInicial() {
  return (
    <div>
      <TopBar />
      <NavBar />

      {/* Header rojo con el texto "Nivel Inicial" */}
      <div className="nivel-inicial-header">
        <h1>NIVEL INICIAL</h1>
      </div>

      {/* Sección de imagen de fondo con el mensaje */}
      <div className="nivel-inicial-banner">
        <div className="banner-message">
          <h1>
            CONSIDERAMOS A LA PRIMERA INFANCIA COMO EL PERIODO CLAVE EN LA
            HISTORIA DE CADA NIÑO
          </h1>
        </div>
      </div>

      {/* Sección de información especial */}
      <section className="nivel-inicial-info">
        <h2>Información Especial</h2>
        <div className="info-items">
          <div className="info-item">
            <FontAwesomeIcon icon={faDoorOpen} className="info-icon" />
            <h3>SALAS</h3>
            <p>de 2, 3, 4 y 5 años</p>
          </div>
          <div className="info-item">
            <FontAwesomeIcon icon={faClock} className="info-icon" />
            <h3>JORNADA SIMPLE</h3>
            <p>
              En todos los casos, las salas son de Jornada Simple. Turno Mañana
              o Tarde.
            </p>
          </div>
          <div className="info-item">
            <FontAwesomeIcon icon={faCalendar} className="info-icon" />
            <h3>HORARIOS</h3>
            <p>de 8:15 a 12:15 hs o de 13:15 a 17:15 hs</p>
          </div>
          <div className="info-item">
            <FontAwesomeIcon icon={faArrowsAlt} className="info-icon" />
            <h3>JORNADA EXTENDIDA</h3>
            <p>Jornada full optativa para salas de 4 y 5 años.</p>
          </div>
        </div>
      </section>

      <EducationalInfoSection />
      <PropuestaPedagogica />
      <Gallery />

      <Footer />
    </div>
  );
}

export default NivelInicial;
