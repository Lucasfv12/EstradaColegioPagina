import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons"; // Íconos de redes sociales
import {
  faPhone,
  faMapMarkerAlt,
  faClock,
} from "@fortawesome/free-solid-svg-icons"; // Íconos de teléfono, mapa y reloj
import "../styles/TopBar.css";

const TopBar = () => {
  return (
    <div className="top-bar">
      <div className="container text-center">
        <span className="span-topbar">
          <FontAwesomeIcon icon={faPhone} /> Tel: 4291-1269/4219-0130 |
          <FontAwesomeIcon icon={faMapMarkerAlt} /> Av. San Martín 3701 |
          <FontAwesomeIcon icon={faClock} /> Lunes a Viernes 8:00 - 17:00 |
          <a href="#" style={{ color: "white", marginLeft: "8px" }}>
            <FontAwesomeIcon icon={faFacebook} /> Facebook
          </a>
          {" | "}
          <a href="#" style={{ color: "white", marginLeft: "8px" }}>
            <FontAwesomeIcon icon={faInstagram} /> Instagram
          </a>
        </span>
      </div>
    </div>
  );
};

export default TopBar;
