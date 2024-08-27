import { motion } from "framer-motion";


const exp = [
    {
      year: "2024 - Present",
      role: "Co-Lead",
      company: "TinkerHub",
      description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
      technologies: ["Event Management", "Event Planning"],
    },
    {
      year: "2023 - 2024",
      role: "Media Lead",
      company: "TinkerHub",
      description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
      technologies: ["Photoshop", "Premiere Pro","illustrator", "Figma"],
    },
  ];








const Experience = () => {
  return (
    <div className="border-b border-neutral-700 pt-8 pb-4">
        <motion.h1 whileInView={{opacity:1,y:0}} initial={{opacity:0,y:-50}} transition={{duration:1.2}} className="my-20 text-4xl text-center">Experience</motion.h1 >
        <div>
            {exp.map((experience, index) => (
            <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                <motion.div whileInView={{opacity:1,x:0}} initial={{opacity:0,x:-100}} transition={{duration:0.5}} className="w-full lg:w-1/4">
                    <p className="mb-2 text-sm text-neutral-400">{experience.year}</p>
                </motion.div>
                <motion.div whileInView={{opacity:1,x:0}} initial={{opacity:0,x:100}} transition={{duration:0.5}} className="w-full max-w-xl lg:w-3/4">
                    <h6 className="mb-2 font-semibold">{experience.role} - <span className="text-purple-300">{experience.company}</span></h6>
                    <p className="mb-4 text-neutral-400 text-justify ">{experience.description}</p>
                    {experience.technologies.map((tech, index) => (
                        <span key={index} className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-500 " >{tech}</span>
                    ))}
                </motion.div>
            </div>
        ))}
        </div>
    </div>
  )
}

export default Experience