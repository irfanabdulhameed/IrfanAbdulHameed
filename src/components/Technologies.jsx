import { FaReact } from "react-icons/fa";
import { SiAdobephotoshop } from "react-icons/si";
import { SiAdobeaftereffects } from "react-icons/si";
import { SiAdobeillustrator } from "react-icons/si";
import { IoLogoFigma } from "react-icons/io5";
import { SiFlutter } from "react-icons/si";
import { motion } from "framer-motion";

const iconAnimation = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <div className="border-b border-neutral-700 pb-28">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 1 }}
        className=" my-20 text-4xl text-center"
      >
        Technologies
      </motion.h1>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        <motion.div
          variants={iconAnimation(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <FaReact className="text-6xl text-cyan-400" />
        </motion.div>
        <motion.div
          variants={iconAnimation(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiAdobephotoshop className="text-6xl text-blue-600" />
        </motion.div>
        <motion.div
          variants={iconAnimation(5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiAdobeaftereffects className="text-6xl text-purple-700" />
        </motion.div>
        <motion.div
          variants={iconAnimation(2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiAdobeillustrator className="text-6xl text-orange-500" />
        </motion.div>
        <motion.div
          variants={iconAnimation(6)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <IoLogoFigma className="text-6xl text-white-100" />
        </motion.div>
        <motion.div
          variants={iconAnimation(4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiFlutter className="text-6xl text-blue-300" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
