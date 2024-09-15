import React from "react";
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
import { motion } from "framer-motion";
import Contact from "./Contact";

const container = (delay) => ({
  hidden: { y: -100, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

let data = [
  {
    id: 1,
    imgSrc: Img1,
  },
  {
    id: 2,
    imgSrc: Img2,
  },
  {
    id: 3,
    imgSrc: Img3,
  },
  {
    id: 4,
    imgSrc: Img4,
  },
  {
    id: 5,
    imgSrc: Img5,
  },
  {
    id: 6,
    imgSrc: Img6,
  },
  {
    id: 7,
    imgSrc: Img7,
  },
  {
    id: 8,
    imgSrc: Img8,
  },
  {
    id: 9,
    imgSrc: Img9,
  },
  {
    id: 10,
    imgSrc: Img10,
  },
  {
    id: 11,
    imgSrc: Img11,
  },
  {
    id: 12,
    imgSrc: Img12,
  },
  {
    id: 13,
    imgSrc: Img13,
  },
  {
    id: 14,
    imgSrc: Img14,
  },
  {
    id: 15,
    imgSrc: Img15,
  },
  {
    id: 15,
    imgSrc: Img16,
  },
];

const Gallery = () => {
  return (
    <div className="pt-14 border-t border-neutral-600">
      <div className="container mx-auto px-4">
        <motion.h1
          initial={{ y: 50 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
          className="pb-14 lg:text-3xl md:text-2xl text-xl font-normal text-center"
        >
          My <span className="text-neutral-500 font-normal">Works</span>
        </motion.h1>
        <div className="flex flex-wrap justify-center pb-16 mb-6">
          {data.map((item) => {
            return (
              <div
                key={item.id}
                className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6 p-2"
              >
                <div className="relative overflow-hidden hover:scale-110 transition-transform duration-300 ease-in-out rounded-md ">
                  <motion.img
                    initial={{ y: 300 }}
                    animate={{ y: 0 }}
                    transition={{ duration: 1.5 }}
                    src={item.imgSrc}
                    alt={`Gallery image ${item.id}`}
                    className="w-full h-full object-cover "
                  />
                </div>
              </div>
            );
          })}
        </div>
        <div className="border-b border-neutral-600 pb-14 text-center">
          <p className="text-xs lg:text-md">
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
    </div>
  );
};

export default Gallery;
