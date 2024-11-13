import React, { useState } from "react";
import "../../../styles/Gallery.css";

const photos = [
  "/images/jardin1.jpg",
  "/images/jardin2.jpg",
  "/images/jardin3.jpg",
  "/images/jardin4.jpg",
  "/images/jardin5.jpg",
  "/images/jardin6.jpg",
  "/images/jardin7.jpg",
  "/images/jardin8.jpg",
  "/images/jardin9.jpg",
  "/images/jardin10.jpg",
  "/images/jardin11.jpg",
  "/images/jardin12.jpg",
  "/images/jardin13.jpg",
  "/images/jardin14.jpg",
  "/images/jardin15.jpg",
];

function Gallery() {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const handleClick = (photo) => {
    setSelectedPhoto(photo);
  };

  const handleCloseModal = () => {
    setSelectedPhoto(null);
  };

  return (
    <div>
      <h2 className="gallery-title">Galería de fotos</h2>{" "}
      {/* Título de la galería */}
      <div className="gallery">
        {photos.map((photo, index) => (
          <div
            key={index}
            className="photo-card"
            onClick={() => handleClick(photo)}
          >
            <img src={photo} alt={`actividad ${index + 1}`} className="photo" />
          </div>
        ))}
      </div>
      {selectedPhoto && (
        <div className="modal" onClick={handleCloseModal}>
          <div className="modal-content">
            <button className="close-btn" onClick={handleCloseModal}>
              ×
            </button>
            <img src={selectedPhoto} alt="Selected" />
          </div>
        </div>
      )}
    </div>
  );
}

export default Gallery;
