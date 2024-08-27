import projectPic1 from '../assets/todolistmockup.png'
import projectPic2 from '../assets/weathermockup.png'
import projectPic3 from '../assets/eclecticamockup.png'
import { motion } from 'framer-motion';

const pro = [
    {
      title: "To-Do List Application",
      image: projectPic1,
      description:
        "An application for managing tasks and projects, with features such as basic task creation and deletion.",
      technologies: ["Flutter", "Hive"],
    },
    {
      title: "Weather Application",
      image: projectPic2,
      description:
        "An minimalistic application that shows weather of your current location using API",
      technologies: ["Flutter", "API"],
    },
    {
      title: "ecletica",
      image: projectPic3,
      description:
        "An Inter College Management Fest held at Farook College (Autonomous), Kozhikode",
      technologies: ["Photoshop", "Figma"],
    },
    // {
    //   title: "Blogging Platform",
    //   image: project4,
    //   description:
    //     "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    //   technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
    // },
  ];



const Project = () => {
  return (
    <div className="border-b border-neutral-700 pb-4">
        <motion.h1 whileInView={{opacity:1,y:0}} initial={{opacity:0,y:-50}} transition={{duration:1.2}} className="my-20 text-center text-4xl">Projects</motion.h1>
        <div>{pro.map((project, index) => (
            <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
                <motion.div whileInView={{opacity:1,x:0}} initial={{opacity:0,x:-100}} transition={{duration:0.5}} className='w-full lg:w-52'>
                <img src={project.image} width={150} height={150} alt={project.title} className='mb-6 rounded-lg shadow-[0_0_50px_rgba(226,184,255,0.3)]'/>
                </motion.div >
                <motion.div whileInView={{opacity:1,x:0}} initial={{opacity:0,x:100}} transition={{duration:0.5}} className='w-full max-w-xl lg:w-3/4'>
                    <h6 className='mb-4 font-semibold'>{project.title}</h6>
                    <p className='mb-4 text-neutral-400'>{project.description}</p>
                    {project.technologies.map((tech, index) => (
                        <span key={index} className='mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-500'>{tech}</span>
                    ))}
                </motion.div>
            </div>
        ))}</div>
    </div>
  )
}

export default Project