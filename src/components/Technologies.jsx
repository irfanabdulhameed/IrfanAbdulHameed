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
    <div className="border-b border-neutral-700 pb-28 ">
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
          className="rounded-2xl border-4 border-neutral-800 p-4 shadow-[0_0_100px_rgba(97,219,251,0.2)]"
        >
          <FaReact className="text-6xl text-cyan-400" />
        </motion.div>
        <motion.div
          variants={iconAnimation(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4 shadow-[0_0_100px_rgba(58,39,245,0.3)]"
        >
          <SiAdobephotoshop className="text-6xl text-blue-500" />
        </motion.div>
        <motion.div
          variants={iconAnimation(5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4 shadow-[0_0_100px_rgba(212,39,245,0.2)]"
        >
          <SiAdobeaftereffects className="text-6xl text-purple-700" />
        </motion.div>
        <motion.div
          variants={iconAnimation(2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4 shadow-[0_0_100px_rgba(245,152,39,0.3)]"
        >
          <SiAdobeillustrator className="text-6xl text-orange-500" />
        </motion.div>
        <motion.div
          variants={iconAnimation(6)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4 shadow-[0_0_100px_rgba(255,255,255,0.2)]"
        >
          <IoLogoFigma className="text-6xl text-white-100" />
        </motion.div>
        <motion.div
          variants={iconAnimation(4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4 shadow-[0_0_100px_rgba(118,195,251,0.25)]"
        >
          <SiFlutter className="text-6xl text-blue-300" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
