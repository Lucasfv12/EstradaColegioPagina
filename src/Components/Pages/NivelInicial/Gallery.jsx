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
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(null);

  const handleClick = (index) => {
    setSelectedPhotoIndex(index);
  };

  const handleCloseModal = () => {
    setSelectedPhotoIndex(null);
  };

  const handleNext = () => {
    if (selectedPhotoIndex < photos.length - 1) {
      setSelectedPhotoIndex(selectedPhotoIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (selectedPhotoIndex > 0) {
      setSelectedPhotoIndex(selectedPhotoIndex - 1);
    }
  };

  return (
    <div>
      <h2 className="gallery-title">Galería de fotos</h2>
      <div className="gallery">
        {photos.map((photo, index) => (
          <div
            key={index}
            className="photo-card"
            onClick={() => handleClick(index)}
          >
            <img src={photo} alt={`actividad ${index + 1}`} className="photo" />
          </div>
        ))}
      </div>
      {selectedPhotoIndex !== null && (
        <div className="modal" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={handleCloseModal}>
              ×
            </button>
            <img src={photos[selectedPhotoIndex]} alt="Selected" />
            {selectedPhotoIndex > 0 && (
              <button
                className="prev-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrevious();
                }}
              >
                ‹
              </button>
            )}
            {selectedPhotoIndex < photos.length - 1 && (
              <button
                className="next-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  handleNext();
                }}
              >
                ›
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Gallery;
