import React, { useState, useEffect } from "react";

const ImageModal = ({ image, onClose, initialPosition }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(true);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    setTimeout(onClose, 300); // Wait for the animation to finish before unmounting
  };

  return (
    <div
      className={`fixed inset-0 bg-black transition-opacity duration-300 ease-in-out ${
        isOpen ? "bg-opacity-75" : "bg-opacity-0"
      }`}
      onClick={handleClose}
    >
      <div
        className={`absolute transition-all duration-300 ease-in-out ${
          isOpen
            ? "inset-0 flex items-center justify-center"
            : `top-[${initialPosition.top}px] left-[${initialPosition.left}px] w-[${initialPosition.width}px] h-[${initialPosition.height}px]`
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className={`relative max-w-3xl w-full ${
            isOpen ? "scale-100" : "scale-0"
          } transition-transform duration-300 ease-in-out`}
        >
          <button
            className="absolute top-4 right-4 text-white text-2xl font-bold z-10"
            onClick={handleClose}
          >
            &times;
          </button>
          <img
            src={image.src || "/placeholder.svg"}
            alt={image.alt}
            className="w-full h-auto max-h-[90vh] object-contain rounded-lg shadow-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default ImageModal;
