// src/Components/NivelInicial.js
import React from "react";
import TopBar from "../../TopBar"; // Ajusta la ruta según tu estructura de carpetas
import NavBar from "../../Navbar"; // Ajusta la ruta según tu estructura de carpetas
import Footer from "../../Footer"; // Ajusta la ruta según tu estructura de carpetas
import "../../../styles/NivelInicial.css"; // Vamos a crear un archivo de estilos para este componente

function NivelInicial() {
  return (
    <div>
      <TopBar /> {/* Aquí se renderiza el TopBar */}
      <NavBar /> {/* Aquí se renderiza el NavBar */}
      {/* Header de color rojo */}
      <header className="nivel-inicial-header">
        <h1>Nivel Inicial</h1>
      </header>
      <div>
        <h2>Página de Nivel Inicial</h2>
        <p>Contenido de la página Nivel Inicial...</p>
      </div>
      <Footer /> {/* Aquí se renderiza el Footer */}
    </div>
  );
}

export default NivelInicial;
