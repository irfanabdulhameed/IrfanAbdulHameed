import React from "react";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import Gallery from "../components/Gallery";

const container = (delay) => ({
  hidden: { y: -100, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Works = () => {
  return (
    <div>
      <div className="overflow-hidden text-neutral-100 antialiased selection:bg-cyan-300 selection:text-cyan-900">
        <div className="fixed top-0 -z-10 h-full w-full">
          <div className="absolute top-0 z-[-2] h-screen w-full bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
        </div>
        <div className="container mx-auto px-12">
          <motion.div
            variants={container(0.3)}
            initial="hidden"
            animate="visible"
          >
            <Navbar />
          </motion.div>
          <div>
            <Gallery />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
