// src/Components/EducationalInfoSectionPrimaria.js
import React from "react";
import "../../../styles/EducationalInfoSectionPrimaria.css";

function EducationalInfoSectionPrimaria() {
  return (
    <section className="educational-info-section-primaria">
      <div className="info-item-primaria">
        <h3>Propuesta Educativa</h3>
        <div className="info-bar-primaria"></div>
        <p>
          El nivel primario tiene como objetivo fomentar el aprendizaje y la
          adquisición de conocimientos fundamentales para el desarrollo integral
          de los niños, con el fin de prepararlos para la vida adulta,
          promoviendo su pensamiento crítico, habilidades sociales y el
          conocimiento de su entorno.
        </p>
      </div>
      <div className="info-item-primaria">
        <h3>Nuestra Misión</h3>
        <div className="info-bar-primaria"></div>
        <p>
          Brindar a los estudiantes herramientas para que desarrollen su
          autonomía, pensamiento crítico y capacidad de resolución de problemas,
          a través de un enfoque participativo y respetuoso de sus derechos.
        </p>
      </div>
      <div className="info-item-primaria">
        <h3>Nuestra Visión</h3>
        <div className="info-bar-primaria"></div>
        <p>
          Ofrecer un espacio educativo inclusivo que propicie la convivencia, el
          respeto y el aprendizaje colaborativo, con un enfoque en el desarrollo
          de habilidades cognitivas y socioemocionales.
        </p>
      </div>
    </section>
  );
}

export default EducationalInfoSectionPrimaria;
