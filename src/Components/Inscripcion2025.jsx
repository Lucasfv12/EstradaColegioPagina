import React, { forwardRef } from "react";
import "../styles/Inscripcion2025.css";

const Inscripcion2025 = forwardRef((props, ref) => {
  return (
    <div className="inscripcion-container" ref={ref}>
      <h2 className="titulo-inscripcion">ABIERTA LA INSCRIPCIÓN 2025</h2>
      <hr className="barra-inscripcion" />
      <div className="caja-inscripcion">
        <p className="texto-inscripcion">
          ¡Bienvenidos a nuestra gran Comunidad Educativa! Nos complace
          enormemente que estén considerando nuestra institución para la
          educación de sus hijos. En el Instituto José Manuel Estrada nos
          comprometemos a proporcionar una educación de calidad que inspire el
          crecimiento intelectual, emocional, espiritual y social de cada uno de
          nuestros estudiantes.
        </p>
        <p className="texto-inscripcion">
          <strong>Reuniones de Admisión</strong>
          <br />
          Nivel Secundario (Primer Año) – 31 de Octubre 16hs.
          <br />
          Estas reuniones son una excelente oportunidad para conocer más sobre
          nuestra filosofía educativa, el equipo docente y las instalaciones del
          instituto.
        </p>
        <p className="texto-inscripcion">
          Para cualquier consulta o duda que tengan durante el proceso de
          admisión, no duden en escribirnos a{" "}
          <a href="mailto:admision@colegioestrada.esc.edu.ar">
            admision@colegioestrada.esc.edu.ar
          </a>{" "}
          o enviarnos un <a href="https://wa.me/1234567890">whatsapp</a>{" "}
          haciendo clic aquí. Para facilitar el proceso de admisión, hemos
          preparado formularios separados por cada nivel educativo.
        </p>
        <p className="texto-inscripcion">
          Hagan clic en los siguientes enlaces para acceder a los formularios
          correspondientes:
        </p>
      </div>
    </div>
  );
});

export default Inscripcion2025;
