import React, { useState } from "react";
import "../styles/CarouselComponent.css";

const CarouselComponent = () => {
  const images = [
    {
      src: "./images/imagen1conescudo.png",
      alt: ["BIENVENIDOS", "AL INSTITUTO JOSÉ MANUEL ESTRADA"],
    },
    { src: "./images/Jardin.png", alt: "Segunda imagen" },
    { src: "./images/imagen1conescudo.png", alt: "Tercera imagen" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="carousel-container">
      <div className="carousel">
        <div
          className="carousel-images"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <img
              key={index}
              className="carousel-image"
              src={image.src}
              alt={Array.isArray(image.alt) ? image.alt.join(" ") : image.alt}
            />
          ))}
        </div>
        <div className="carousel-caption">
          {currentIndex === 0 && Array.isArray(images[currentIndex].alt) ? (
            <>
              <h3 className="typewriter line1">
                {images[currentIndex].alt[0]}
              </h3>
              <h3 className="typewriter line2">
                {images[currentIndex].alt[1]}
              </h3>
            </>
          ) : (
            <h3>{images[currentIndex].alt}</h3>
          )}
        </div>
        <button className="prev" onClick={prevSlide}>
          &#10094;
        </button>
        <button className="next" onClick={nextSlide}>
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default CarouselComponent;
