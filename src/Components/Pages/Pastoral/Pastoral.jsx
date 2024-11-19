import React from "react";
import TopBar from "../../TopBar";
import NavBar from "../../Navbar";
import Footer from "../../Footer";
import "../../../styles/Pastoral.css"; // Archivo CSS para los estilos

function Pastoral() {
  return (
    <div>
      <TopBar />
      <NavBar />

      {/* Header con el texto "Pastoral" */}
      <div className="pastoral-header">
        <h1>PASTORAL</h1>
      </div>

      {/* Sección de imagen de fondo con el mensaje */}
      <div className="pastoral-banner">
        <div className="banner-message">
          <h1>
            UNA EDUCACIÓN PROFUNDAMENTE VINCULADA CON LA IDENTIDAD DE LOS
            MISIONEROS DEL VERBO DIVINO
          </h1>
        </div>
      </div>

      {/* Contenedor principal con las dos columnas de texto */}
      <div className="pastoral-content">
        <div className="pastoral-column">
          <h2>Misioneros del Verbo Divino</h2>
          <p>
            Somos una Congregación religiosa misionera de la Iglesia Católica,
            fundada por San Arnoldo Janssen el 08 de Septiembre de 1875 en Steyl
            –Holanda. La obra misionera tuvo un rápido crecimiento y en 1879
            fueron enviados a China los dos primeros misioneros San José
            Freinademetz y Juan Bautista Anzer. Atento a las demandas de los
            inmigrantes Alemanes del Volga en Argentina, el fundador envió a los
            primeros misioneros Enrique Becher y German Loecken a nuestro país
            el 23 de octubre de 1889. San Arnoldo Janssen fue un visionario de
            la iniciativa misionera de la Iglesia y con este impulso fundó el 08
            de Diciembre de 1889 –junto a la Beata María Elena Stolemwerk la
            Congregación de las Misioneras Siervas del Espíritu Santo. Mientras
            que en el 08 de Diciembre de 1898 fundó –junto a la Beata Hendrina
            Stenmanns la Congregación de las Misioneras del Espíritu Santo de la
            Adoración Perpetua. Actualmente los Misioneros del Verbo Divino
            somos 6.000 sacerdotes y Hermanos presentes en 75 países en los
            cinco continentes, presentes en una amplia diversidad de apostolados
            Parroquias, Colegios, Universidades, Centros misionales, Editoriales
            y librerías, Centros de formación y seminarios, Centros de Salud y
            Hospitales, Centros Sociales para niños, discapacitados y
            refugiados, animados desde las cuatro dimensiones características de
            nuestra identidad misionera: Apostolado Bíblico, Comunicación,
            Animación Misionera y Justicia y Paz e integridad de la Creación.
          </p>
        </div>
        <div className="pastoral-column">
          <h2>Dimensiones</h2>
          <p>
            La Congregación del Verbo Divino asume la misión de Jesús desde
            cuatro dimensiones características propias de la identidad y misión
            como misioneros del Verbo Divino: la pastoral Bíblica, la Animación
            Misionera, Justicia y Paz e integridad de la Creación y la dimensión
            de Comunicación. En todas nuestras presencias y apostolados a través
            de diversas expresiones deben manifestarse estas dimensiones
            características. Presentar la Biblia, su lectura y meditación como
            camino para descubrir el mensaje salvador de Dios, el compromiso por
            la Justicia y la Paz como el modo más apropiado de asumir nuestro
            compromiso con la humanidad, la Comunicación como diálogo y puente
            de entendimiento y construcción de una sociedad fraterna, la
            Animación Misionera como apertura a las realidades sociales,
            culturales y religiosas de todos los pueblos, contribuye a una
            educación profundamente vinculada con la identidad de los Misioneros
            del Verbo Divino.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Pastoral;
