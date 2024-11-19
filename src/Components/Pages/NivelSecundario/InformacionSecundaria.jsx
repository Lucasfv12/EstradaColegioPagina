import React from "react";
import "../../../styles/InformacionSecundaria.css";

function InformacionSecundaria() {
  const sections = [
    {
      title: "Historia",
      text: `En el mes de julio de 1963 se reconocía al Instituto José Manuel Estrada como Establecimiento Privado incorporado a la enseñanza oficial y se autorizaba el funcionamiento del primer año comercial diurno, según la Disposición 3072/73. 
             En 1964 reconocieron segundo año y así, con el correr de los años, hasta llegar a contar con trece divisiones (tres divisiones por curso de primer a tercer año y dos de cuarto y quinto año).
             En 1988 el Instituto se desdobló gradualmente en colegio mixto, ese año con todo éxito y superando las expectativas respecto a la inscripción de alumnas mujeres, aprobaron el examen de ingreso para el próximo ciclo lectivo 55 postulantes de las 96 anotadas para rendir.
             A partir de 1994 dejó de depender de la Nación para ser transferido a la Provincia de Buenos Aires.
             Por Resolución 4625 del año 1998 comienza a funcionar el primer año de nivel Polimodal, en dos modalidades: Ciencias Naturales y Economía y Gestión de las Organizaciones. Paulatinamente fue desapareciendo la secundaria hasta llegar al 2000, en que egresa la última promoción de Peritos Mercantiles.
             El Polimodal quedó formado con nueve divisiones, seis en la modalidad de Economía y Gestión de las Organizaciones y tres en la modalidad de Ciencias Naturales.`,
      image: "/images/secundaria.jpg", // Cambia por tu imagen
    },
    {
      title: "Propuesta Pedagógica",
      text: `Los principios básicos que nos rigen son el respeto a la libertad de los alumnos, a la pluralidad ideológica y política, y a la diversidad cultural y racial, alentando el protagonismo y la participación, promoviendo el interés por saber, la disciplina en el estudio y la autonomía personal.
             Actualmente la Institución posee dos Modalidades: 
             - Economía y Administración
             - Ciencias Naturales
             Contamos con 18 divisiones, las cuales suman un total de 539 alumnos.`,
      image: "/images/entrada.jpg",
    },
    {
      title: "Organización del Nivel Secundario",
      text: `La dirección del Nivel Secundario se encuentra a cargo de la Licenciada Fernández Edith Fátima y la Vice dirección a cargo del Profesor Sosa Pablo Germán, junto a la Secretaria Profesora María Marcela Tellería. 
             El horario de ingreso del alumnado es 7.15 hs, en cuanto al horario de salida se comunican a principio de año a los Sres. Padres, ya que los mismos dependen de las diferentes actividades: Educación Física, Computación, Taller de Orientación Vocacional y Laboral, Talleres de Técnicas de Producción Grupal, Coro, Pasantías, etc.`,
      image: "/images/secundariapatio.jpg",
    },
  ];

  return (
    <div className="informacion-secundaria">
      {sections.map((section, index) => (
        <div className="info-section" key={index}>
          <img src={section.image} alt={section.title} className="info-image" />
          <div className="info-text">
            <h2>{section.title}</h2>
            <p>{section.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default InformacionSecundaria;
