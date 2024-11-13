// src/Components/PropuestaPedagogica.js
import React from "react";
import "../../../styles/PropuestaPedagogica.css";

function PropuestaPedagogica() {
  return (
    <div>
      {/* Propuesta Pedagógica */}
      <section className="propuesta-pedagogica">
        <div className="content-container">
          <img
            src="/images/Propuestapedagogica.jpg" // Reemplaza con la URL de la imagen que desees
            alt="Propuesta pedagógica"
            className="image"
          />
          <div className="text">
            <h3>Propuesta Pedagógica</h3>
            <p>
              El nivel inicial desde una finalidad pedagógica, promueve el
              aprendizaje constante de saberes que permiten acrecentar el campo
              cultural de los niños a fin de que puedan desenvolverse dentro de
              la vida social, recuperando aprendizajes previos y promoviendo la
              construcción de nuevos conocimientos que se profundizan a lo largo
              de la trayectoria educativa.
              <br />
              <br />
              Desde la institución reconocemos que los niños inauguran dentro
              del Jardín sus procesos de aprendizaje mediante el desarrollo de
              sus capacidades, siendo esta, la oportunidad de transitar por una
              variedad de experiencias en las que pueda problematizar la
              realidad, explorar soluciones, ensayar respuestas, compartir,
              cooperar, pensar y hacer con otros, habilitando modos de conocer y
              de vincularse con el conocimiento y con los otros que se seguirán
              desarrollando a lo largo de su trayectoria.
              <br />
              <br />
              Nuestra propuesta de enseñanza se fundamenta en considerar a la
              primera infancia como el periodo clave en la historia de cada niño
              que generará huellas relevantes para su trayectoria personal y
              educativa futura.
            </p>
          </div>
        </div>
      </section>

      {/* Pautas Institucionales de Convivencia */}
      <section className="propuesta-pedagogica reverse">
        <div className="content-container reverse">
          <div className="text">
            <h3>Pautas Institucionales de Convivencia</h3>
            <p>
              Inscribir a sus hijos en nuestra Institución implica para los
              padres, comprometerse con los objetivos y con la educación que
              aquí se imparte. Los Padres deben recordar que son los primeros y
              principales educadores y que la escuela colabora con ellos en la
              formación de sus hijos pero no los suple y es por eso que deberán:
              <ul>
                <li>
                  Ser coherentes con la decisión que han tomado al elegirnos
                  como Centro Educativo, respetando las reglas institucionales.
                </li>
                <li>
                  Cumplimentar con toda la documentación requerida devolviéndola
                  en tiempo y forma.
                </li>
                <li>
                  Concurriendo cada vez que sean citados y de ser necesario
                  conversar con la docente o con dirección solicitar entrevista
                  a través del cuaderno de comunicaciones.
                </li>
              </ul>
              Las normas son esenciales para organizar y armonizar la
              convivencia en una Institución, ya que posibilita que cada uno de
              sus integrantes conozca sus derechos pero también sus
              obligaciones.
            </p>
          </div>
          <img
            src="/images/Convivencia.jpg" // Reemplaza con la URL de la imagen que desees
            alt="Pautas institucionales"
            className="image"
          />
        </div>
      </section>
    </div>
  );
}

export default PropuestaPedagogica;
