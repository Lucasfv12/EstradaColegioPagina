import React, { useState } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer"; // Importamos el hook de Intersection Observer
import "../styles/DatosInstituto.css";

const DatosInstituto = () => {
  const [startCounting, setStartCounting] = useState(false); // Controlamos si debe comenzar a contar
  const { ref, inView } = useInView({ triggerOnce: true }); // 'triggerOnce' asegura que solo se dispare una vez

  // Cuando el componente entra en la vista, activamos el contador
  React.useEffect(() => {
    if (inView) {
      setStartCounting(true);
    }
  }, [inView]);

  return (
    <div className="datos-instituto-container">
      <div className="background-image"></div> {/* Imagen de fondo */}
      <div className="info-box" ref={ref}>
        <div className="dato">
          <i className="fas fa-graduation-cap" />{" "}
          {/* Ícono de alumno con gorra de egresado */}
          {startCounting && (
            <span className="countup">
              <CountUp start={0} end={3000} duration={3} />
            </span>
          )}
          <p>ALUMNOS</p>
        </div>
        <div className="dato">
          <i className="fas fa-school" /> {/* Ícono de colegio */}
          {startCounting && (
            <span className="countup">
              <CountUp start={0} end={60} duration={3} />
            </span>
          )}
          <p>AÑOS DE HISTORIA</p>
        </div>
        <div className="dato">
          <i className="fas fa-chalkboard-teacher" /> {/* Ícono de profesor */}
          {startCounting && (
            <span className="countup">
              <CountUp start={0} end={300} duration={3} />
            </span>
          )}
          <p>EDUCADORES</p>
        </div>
      </div>
    </div>
  );
};

export default DatosInstituto;
