// import projectPic1 from "../assets/todolistmockup.png";
// import projectPic2 from "../assets/weathermockup.png";
import projectPic3 from "../assets/Images/4-min.jpg";
import am1 from "../assets/Images/3-min.jpg";
import km1 from "../assets/Images/1-min.jpg";
import th1 from "../assets/Images/2-min.jpg";
import fc1 from "../assets/Images/5-min.jpg";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Works from "../Pages/Works";

const pro = [
  {
    title: "Arabian Majlis",
    image: am1,
    description:
      "This work was done for Arabian Majlis on the occasion of India's 78th Independence Day",
    technologies: ["Graphic Design", "Photoshop"],
  },
  {
    title: "Kmart, Dubai",
    image: km1,
    description:
      "This work was done for Kmart Group of Companies on the Pre-Inauguration (Coming Soon) of their supermarket",
    technologies: ["Graphic Design", "Photoshop"],
  },
  {
    title: "TinkerHub Foundation",
    image: th1,
    description:
      "This work was done for TinkerHub Foundation as a part of Tinkerspace media intern selection",
    technologies: ["Graphic Design", "Photoshop"],
  },
  // {
  //   title: "To-Do List Application",
  //   image: projectPic1,
  //   description:
  //     "An application for managing tasks and projects, with features such as basic task creation and deletion.",
  //   technologies: ["Flutter", "Hive"],
  // },
  // {
  //   title: "Weather Application",
  //   image: projectPic2,
  //   description:
  //     "An minimalistic application that shows weather of your current location using API",
  //   technologies: ["Flutter", "API"],
  // },
  {
    title: "ecletica",
    image: projectPic3,
    description:
      "An Inter College Management Fest held at Farook College (Autonomous), Kozhikode",
    technologies: ["Graphic Design", "Figma", "Photoshop"],
  },
  {
    title: "Palliative, FC",
    image: fc1,
    description:
      "1-Day to go Poster for the event named 'Sparsham' by Palliative Initiative, Farook College ",
    technologies: ["Graphic Design", "Photoshop"],
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
  const navigate = useNavigate();
  const goToWorks = () => {
    navigate("/Works");
    window.scrollTo(0, 0);
  };
  return (
    <div className="border-b border-neutral-700 pb-4">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        className="my-20 text-center text-4xl"
      >
        Projects / Works
      </motion.h1>
      <div>
        {pro.map((project, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="w-full lg:w-52"
            >
              <img
                src={project.image}
                width={150}
                height={150}
                alt={project.title}
                className="mb-6 rounded-lg shadow-[0_0_50px_rgba(226,184,255,0.3)]"
              />
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h6 className="mb-4 font-semibold">{project.title}</h6>
              <p className="mb-4 text-neutral-400">{project.description}</p>
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-500"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.3 }}
        viewport={{ once: true }}
        className="flex items-center text-center place-content-center mb-20 mt-20 "
      >
        <button
          className="flex justify-center gap-2 items-center mx-auto text-sm backdrop-blur-md lg:font-medium isolation-auto text-gray-300 border-gray-400 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-gradient-to-r from-violet-900 via-violet-600 to-violet-900 hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-500 relative z-10 px-4 py-2 overflow-hidden border-2 rounded-full group shadow-[0px_0px_50px_rgba(226,184,255,0.4)]"
          onClick={goToWorks}
        >
          More Here
          <svg
            className="w-6 h-6 justify-end group-hover:rotate-90 group-hover:bg-gray-50 text-gray-50 ease-linear duration-300 rounded-full border border-gray-50 group-hover:border-none p-1 rotate-45"
            viewBox="0 0 16 19"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
              className="fill-gray-300 group-hover:fill-gray-800"
            ></path>
          </svg>
        </button>
      </motion.div>
    </div>
  );
};

export default Project;
