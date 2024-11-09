import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h3>NIVEL INICIAL</h3>
        <p>Dirección: Lavalle 1390</p>
        <p>42911269/42190130 Interno 41</p>
        <p>Celular (Únicamente WhatsApp): 1161355740</p>
        <p>inicial@colegioestrada.esc.edu.ar</p>
      </div>

      <div className="footer-section">
        <h3>NIVEL PRIMARIO</h3>
        <p>Dirección: Av. San Martín 3701</p>
        <p>42911269/42190130 Interno 31</p>
        <p>secretariaprimario@colegioestrada.esc.edu.ar</p>
      </div>

      <div className="footer-section">
        <h3>NIVEL SECUNDARIO</h3>
        <p>Dirección: Av. San Martín 3701</p>
        <p>42911269/42190130 Interno 38</p>
        <p>Preceptoría Secundaria Superior Interno 37</p>
        <p>Preceptoría Secundaria Básica Interno 44</p>
        <p>estradacolegio@gmail.com</p>
      </div>
    </footer>
  );
};

export default Footer;
