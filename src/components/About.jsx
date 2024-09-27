import setupPic from "../assets/setup.svg";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="border-b border-neutral-700 pb-32">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        About <span className="text-neutral-500">Me</span>
      </motion.h1>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2 lg:p-8">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex item justify-center"
          >
            <img
              className="rounded-xl relative shadow-[0_0_100px_rgba(144,39,245,0.3)]"
              src={setupPic}
            ></img>
          </motion.div>
        </div>
        <div className="w-full lg:w-1/2">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex justify-center lg:justify-start"
          >
            <p className="my-2 max-w-xl py-16 text-justify font-thin lg:text-md">
              {/* I’m a final-year Computer Science student at Farook College, just
              beginning my journey into web development with a focus on learning
              tools like React and Tailwind CSS. While I’m new to coding, I
              bring advanced skills in graphic design, where I have significant
              experience creating compelling visuals and designs. Explore my
              portfolio to see how I’m combining my graphic design expertise
              with my growing development skills to create unique projects. */}
              I’m a final-year Computer Science student at Farook College,
              diving into web development with a focus on React and Tailwind
              CSS. While I'm new to coding, I have advanced skills in graphic
              design, including tools like Adobe Photoshop, After Effects,
              Illustrator, and Figma. With significant experience creating
              compelling visuals, I’m excited to combine my design expertise
              with my growing development skills to craft unique, visually
              appealing web projects. Explore my portfolio to see this blend of
              design and development in action.
              <br />
              <span className="text-neutral-300 lg:text-sm text-xs">
                <sup>*</sup>The image here does not represent my actual desktop.
              </span>
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
