import React, { useEffect, useState, useRef } from "react";
import TopBar from "./Components/TopBar";
import CarouselComponent from "./Components/CarouselComponent";
import LevelBoxes from "./Components/LevelBoxes";
import NavBar from "./Components/Navbar";
import "./styles/App.css";
import Inscripcion2025 from "./Components/Inscripcion2025";
import Footer from "./Components/Footer";
import FormularioCarteles from "./Components/FormularioCarteles";
import DatosInstituto from "./Components/DatosInstituto";
import CampusCultura from "./Components/CampusCultura";

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Estado para abrir/cerrar el menú
  const inscripcionRef = useRef(null);

  const handleScroll = () => {
    const inscripcionPosition = inscripcionRef.current.getBoundingClientRect();
    if (inscripcionPosition.top <= 0 && !scrolled) {
      setScrolled(true);
    } else if (inscripcionPosition.top > 0 && scrolled) {
      setScrolled(false);
    }
  };

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen); // Alternar el estado del menú
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <div>
      <TopBar />
      <NavBar
        className={scrolled ? "scrolled" : ""}
        onMenuToggle={handleMenuToggle}
      />
      <div className={`carousel-container ${isMenuOpen ? "menu-open" : ""}`}>
        <CarouselComponent />
      </div>
      <LevelBoxes />
      <Inscripcion2025 ref={inscripcionRef} />
      <FormularioCarteles />
      <CampusCultura />
      <DatosInstituto />
      <Footer />
    </div>
  );
}

export default App;
