import React from "react";
import {
  FaGraduationCap,
  FaChurch,
  FaBook,
  FaPaintBrush,
} from "react-icons/fa";
import "../styles/LevelBoxes.css";
import { Link } from "react-router-dom";

const LevelBoxes = () => {
  return (
    <div className="level-boxes">
      <div className="box box-color1">
        <FaPaintBrush className="logo" />
        <Link className="titulo-box" to="/nivel-inicial">
          NIVEL INICIAL
        </Link>
      </div>
      <div className="box box-color2">
        <FaBook className="logo" />
        <Link className="titulo-box" to="/nivel-primario">
          NIVEL PRIMARIO
        </Link>
      </div>
      <div className="box box-color3">
        <FaGraduationCap className="logo" />
        <a className="titulo-box">NIVEL SECUNDARIO</a>
      </div>
      <div className="box box-color4">
        <FaChurch className="logo" />
        <a className="titulo-box">PASTORAL</a>
      </div>
    </div>
  );
};

export default LevelBoxes;
