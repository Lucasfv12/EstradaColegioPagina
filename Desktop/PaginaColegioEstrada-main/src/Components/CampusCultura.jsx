import React from "react";
import "../styles/CampusCultura.css"; // Archivo de estilos para el componente

const CampusCultura = () => {
  return (
    <div className="campus-cultura-container">
      <h2 className="campus-title">CAMPUS CULTURAL</h2>
      <div className="campus-cultura">
        <div className="campus-item">
          <img src="/images/patin.jpg" alt="Patín" className="campus-image" />
          <div className="overlay">
            <span className="campus-text">PATÍN</span>
          </div>
        </div>
        <div className="campus-item">
          <img src="/images/ingles.jpg" alt="Inglés" className="campus-image" />
          <div className="overlay">
            <span className="campus-text">INGLÉS</span>
          </div>
        </div>
        <div className="campus-item">
          <img
            src="/images/campo.jpg"
            alt="Campo de Deportes"
            className="campus-image"
          />
          <div className="overlay">
            <span className="campus-text">CAMPO DE DEPORTES</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampusCultura;
