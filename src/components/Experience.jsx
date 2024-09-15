import { motion } from "framer-motion";

const exp = [
  {
    year: "2024 - Present",
    role: "Media Co-Lead",
    company: "TedXFarookCollege",
    description: `I designed the UI/UX for the TedXFarookCollege website, ensuring a user-friendly experience, and developed a cohesive visual identity across platforms. I'm now working on Season 2 social media assets to boost engagement and promote events.`,
    technologies: ["Photoshop", "Figma", "illustrator"],
  },
  {
    year: "2024 - Present",
    role: "Co-Lead",
    company: "TinkerHubFC",
    description: `
I organized the "Kattan & Introduction" event to engage new members and gather insights into their tech interests. I developed a dynamic poller to collect student data and coordinated hands-on workshops based on the gathered interests to provide practical skill development.`,
    technologies: ["Event Management", "Event Planning"],
  },
  {
    year: "2023 - 2024",
    role: "Media Lead",
    company: "TinkerHubFC",
    description: `I created a successful reel with After Effects to boost community visibility and designed posters to effectively promote events and initiatives.`,
    technologies: ["Photoshop", "Premiere Pro", "After Effects", "Figma"],
  },
];

const Experience = () => {
  return (
    <div className="border-b border-neutral-700 pt-8 pb-4">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        className="my-20 text-4xl text-center"
      >
        Volunteer / Experience
      </motion.h1>
      <div>
        {exp.map((experience, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/4"
            >
              <p className="mb-2 text-sm text-neutral-400">{experience.year}</p>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h6 className="mb-2 font-semibold">
                {experience.role} -{" "}
                <span className="text-purple-300">{experience.company}</span>
              </h6>
              <p className="mb-4 text-neutral-400 text-justify ">
                {experience.description}
              </p>
              {experience.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-500 "
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
