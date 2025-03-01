import React, { useState } from "react";
import ImageModal from "./Modal";
import Img1 from "../assets/Images/1-min.jpg";
import Img2 from "../assets/Images/2-min.jpg";
import Img3 from "../assets/Images/3-min.jpg";
import Img4 from "../assets/Images/4-min.jpg";
import Img5 from "../assets/Images/5-min.jpg";
import Img6 from "../assets/Images/6-min.jpg";
import Img7 from "../assets/Images/7-min.jpg";
import Img8 from "../assets/Images/8-min.jpg";
import Img9 from "../assets/Images/9-min.jpg";
import Img10 from "../assets/Images/10-min.jpg";
import Img11 from "../assets/Images/11-min.jpg";
import Img12 from "../assets/Images/12-min.jpg";
import Img13 from "../assets/Images/13-min.jpg";
import Img14 from "../assets/Images/14-min.jpg";
import Img15 from "../assets/Images/15-min.jpg";
import Img16 from "../assets/Images/16-min.jpg";
import Img17 from "../assets/Images/17-min.jpg";
import Img18 from "../assets/Images/18-min.jpg";
import Img19 from "../assets/Images/19-min.jpg";
import Img20 from "../assets/Images/20-min.jpg";
import Img21 from "../assets/Images/21-min.jpg";
import Img22 from "../assets/Images/22-min.jpg";
import Img23 from "../assets/Images/23-min.jpg";
import Img24 from "../assets/Images/24-min.jpg";
import Img25 from "../assets/Images/25-min.jpg";
import Img26 from "../assets/Images/26-min.jpg";
import Img27 from "../assets/Images/27-min.jpg";
import Img28 from "../assets/Images/28-min.jpg";
import Img29 from "../assets/Images/29-min.jpg";
import Img30 from "../assets/Images/30-min.jpg";
import Img31 from "../assets/Images/31-min.jpg";
import Img32 from "../assets/Images/32-min.jpg";
import Img33 from "../assets/Images/33-min.jpg";
import Img34 from "../assets/Images/34-min.jpg";
import Img35 from "../assets/Images/35-min.jpg";
import Img36 from "../assets/Images/36-min.jpg";
import Img37 from "../assets/Images/37-min.jpg";
import Img38 from "../assets/Images/38-min.jpg";
import Img39 from "../assets/Images/39-min.jpg";
import Img40 from "../assets/Images/40-min.jpg";

import { motion } from "framer-motion";
import Contact from "./Contact";

const images = [
  {
    id: 1,
    src: Img1,
  },
  {
    id: 2,
    src: Img2,
  },
  {
    id: 3,
    src: Img3,
  },
  {
    id: 4,
    src: Img4,
  },
  {
    id: 5,
    src: Img5,
  },
  {
    id: 6,
    src: Img6,
  },
  {
    id: 7,
    src: Img7,
  },
  {
    id: 8,
    src: Img8,
  },
  {
    id: 9,
    src: Img9,
  },
  {
    id: 10,
    src: Img10,
  },
  {
    id: 11,
    src: Img11,
  },
  {
    id: 12,
    src: Img12,
  },
  {
    id: 13,
    src: Img13,
  },
  {
    id: 14,
    src: Img14,
  },
  {
    id: 15,
    src: Img15,
  },
  {
    id: 16,
    src: Img16,
  },
  {
    id: 17,
    src: Img17,
  },
  {
    id: 18,
    src: Img18,
  },
  {
    id: 19,
    src: Img19,
  },
  {
    id: 20,
    src: Img20,
  },
  {
    id: 21,
    src: Img21,
  },
  {
    id: 22,
    src: Img22,
  },
  {
    id: 23,
    src: Img23,
  },
  {
    id: 24,
    src: Img24,
  },
  {
    id: 25,
    src: Img25,
  },
  {
    id: 26,
    src: Img26,
  },
  {
    id: 27,
    src: Img27,
  },
  {
    id: 28,
    src: Img28,
  },
  {
    id: 29,
    src: Img29,
  },
  {
    id: 30,
    src: Img30,
  },
  {
    id: 31,
    src: Img31,
  },
  {
    id: 32,
    src: Img32,
  },
  {
    id: 33,
    src: Img33,
  },
  {
    id: 34,
    src: Img34,
  },
  {
    id: 35,
    src: Img35,
  },
  {
    id: 36,
    src: Img36,
  },
  {
    id: 37,
    src: Img37,
  },
  {
    id: 38,
    src: Img38,
  },
  {
    id: 39,
    src: Img39,
  },
  {
    id: 40,
    src: Img40,
  },
];

const PinterestGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [modalPosition, setModalPosition] = useState({
    top: 0,
    left: 0,
    width: 0,
    height: 0,
  });

  const openModal = (image, event) => {
    const rect = event.target.getBoundingClientRect();
    setModalPosition({
      top: rect.top,
      left: rect.left,
      width: rect.width,
      height: rect.height,
    });
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.h1
        initial={{ y: 50 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.7 }}
        className="pt-10 text-4xl font-normal mb-20 text-center"
      >
        My <span className="text-neutral-500 font-normal">Works</span>
      </motion.h1>
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 justify-center">
        {images.map((image) => (
          <div
            key={image.id}
            className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer transition-transform duration-300 hover:scale-105"
            onClick={(e) => openModal(image, e)}
          >
            <motion.img
              initial={{ y: 300 }}
              animate={{ y: 0 }}
              transition={{ duration: 1.5 }}
              src={image.src || "/placeholder.svg"}
              alt={image.alt}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
      {selectedImage && (
        <ImageModal
          image={selectedImage}
          onClose={closeModal}
          initialPosition={modalPosition}
        />
      )}
      <div className="border-b border-neutral-600 pb-14 text-center">
        <p className="text-xs lg:text-md pt-20">
          - &nbsp; More Works in my{" "}
          <span className=" text-neutral-300 underline">
            <a href="https://www.upwork.com/freelancers/~01aa30810d60a4cd38">
              Upwork Profile
            </a>
          </span>{" "}
          &nbsp;-
        </p>
      </div>
      <Contact />
    </div>
  );
};

export default PinterestGallery;
