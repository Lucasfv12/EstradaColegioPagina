// src/Components/Pages/Institucional/Institucional.jsx
import React from "react";
import TopBar from "../../TopBar";
import NavBar from "../../Navbar";
import Footer from "../../Footer";
import "../../../styles/Institucional.css";

const Institucional = () => {
  return (
    <div>
      <TopBar />
      <NavBar />

      {/* Header gris con el título */}
      <header className="institucional-header">INSTITUCIONAL</header>

      {/* Sección de Autoridades Institucionales */}
      <section className="autoridades-section">
        <h2 className="section-title">AUTORIDADES INSTITUCIONALES</h2>
        <div className="autoridades-boxes">
          <div className="autoridad-box">
            <p>Patricio Alvelo</p>
            <p className="cargo">Representante Legal</p>
          </div>
          <div className="autoridad-box">
            <p>Fátima Galván</p>
            <p className="cargo">Administradora</p>
          </div>
        </div>
      </section>

      {/* Sección de Nivel Secundario */}
      <section className="nivel-secundario-section">
        <h2 className="autoridades">AUTORIDADES ACADÉMICAS</h2>
        <h2 className="section-title">NIVEL SECUNDARIO</h2>
        <div className="nivel-secundario-boxes">
          <div className="nivel-box">
            <p>Edith Fernández</p>
            <p className="cargo">Directora</p>
          </div>
          <div className="nivel-box">
            <p>Pablo Sosa</p>
            <p className="cargo">Vicedirector</p>
          </div>
          <div className="nivel-box">
            <p>Marcela Tellería</p>
            <p className="cargo">Secretaría</p>
          </div>
        </div>
      </section>

      {/* Sección de Nivel Primario */}
      <section className="nivel-primario-section">
        <h2 className="section-title">NIVEL PRIMARIO</h2>
        <div className="nivel-primario-boxes">
          <div className="nivel-box">
            <p>Silvia Kaczorowski</p>
            <p className="cargo">Directora</p>
          </div>
          <div className="nivel-box">
            <p>María Claudia Andechaga</p>
            <p className="cargo">Vicedirectora</p>
          </div>
          <div className="nivel-box">
            <p>Guillermo Rossi</p>
            <p className="cargo">Secretario</p>
          </div>
        </div>
      </section>

      {/* Sección de Nivel Inicial */}
      <section className="nivel-inicial-section">
        <h2 className="section-title">NIVEL INICIAL</h2>
        <div className="nivel-inicial-boxes">
          <div className="nivel-box">
            <p>Patricia Riera</p>
            <p className="cargo">Directora</p>
          </div>
          <div className="nivel-box">
            <p>Cinthia González</p>
            <p className="cargo">Vicedirectora</p>
          </div>
          <div className="nivel-box">
            <p>Jimena Serfaty</p>
            <p className="cargo">Secretaria</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Institucional;
