import React from "react";
import {
  FaGraduationCap,
  FaChurch,
  FaBook,
  FaPaintBrush,
} from "react-icons/fa";
import "../styles/LevelBoxes.css";

const LevelBoxes = () => {
  return (
    <div className="level-boxes">
      <div className="box box-color1">
        <FaPaintBrush className="logo" />
        <a className="titulo-box">NIVEL INICIAL</a>
      </div>
      <div className="box box-color2">
        <FaBook className="logo" />
        <a className="titulo-box">NIVEL PRIMARIO</a>
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
