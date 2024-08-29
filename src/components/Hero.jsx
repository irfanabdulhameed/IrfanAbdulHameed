import profilPic from '../assets/me2.png'
import { motion } from "framer-motion"

const container = (delay)  => ({
  hidden:{x:-100, opacity:0},
  visible:{
    x:0,
    opacity:1,
    transition:{duration:0.5,delay:delay},
  },
});


const Hero = () => {
    return (
      <div className="border-b border-neutral-700 pb-4 lg:mb-36">
        <div className="flex flex-wrap lg:flex-nowrap">
          {/* Text Content */}
          <div className="w-full lg:w-1/2">
            <div className="flex flex-col items-center lg:items-start px-10">
              <motion.h1 variants={container(0.3)} initial="hidden" animate="visible" className="text-7xl font-bold tracking-normal lg:mt-16 lg:text-9xl">Irfan</motion.h1>
              <motion.h1 variants={container(0.3)} initial="hidden" animate="visible" className="text-2xl font-thin tracking-normal lg:text-5xl pb-20">Abdul Hameed</motion.h1>
              <motion.span variants={container(0.5)} initial="hidden" animate="visible" className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-md tracking-tight text-transparent lg:text-2xl">
                Your Friendly Neighborhood Developer
              </motion.span>
              <motion.p variants={container(0.6)} initial="hidden" animate="visible" className="my-2 max-w-xl py-3 font-extralight text-sm  tracking-tighter text-justify lg:text-base">
                I'm just starting my journey into the world of web development, learning the basics of creating simple, responsive websites. While I'm new to coding, I'm eager to learn and grow my skills every day. I'm exploring HTML, CSS, and JavaScript, and I'm excited to see where this path will take me. I'm passionate about learning and ready to take on new challenges as I continue to develop my abilities.
              </motion.p>
            </div>
          </div>
  
          {/* Image Content */}
          <div className="w-full lg:w-1/2 lg:p-8">
            <div className="flex justify-center lg:justify-end">
              <motion.img initial={{x:100, opacity:0}} animate={{ x:0, opacity:1 }} transition={{duration:1, delay:0.8}}  src={profilPic} alt="Irfan" className="w-auto h-auto max-w-full max-h-full " />
            </div>
          </div>
        </div>
      </div>
    );
  }
  
export default Hero