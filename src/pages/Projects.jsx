import { motion } from "framer-motion";
import { useState } from "react";
import sailSignalImg from "../images/sail_signal_project_img.png";
import ruetEpaymentImg from "../images/ruet_epayment_project_img.png";
import plantifyImg from "../images/plantify_project_img.png";
import superTicTacToeImg from "../images/super_tic_tac_toe_img.png";
import botanicaMetropolisImg from "../images/botanicametropolis_img.png";

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      title: "Sail Signal",
      description: "A Morse code translator with interactive learning features",
      image: sailSignalImg,
      tags: ["HTML", "CSS", "JavaScript", "Web Audio API"],
      link: "https://sarcasticsphinx.github.io/MorseCode/",
      github: "https://github.com/SarcasticSphinx/MorseCode",
    },
    {
      title: "RUET ePayment",
      description: "Digital payment solution for university fees and services",
      image: ruetEpaymentImg,
      tags: ["React", "Node.js", "MongoDB", "Payment Gateway"],
      link: "https://sarcasticsphinx.github.io/RUET-ePayment/",
      github: "https://github.com/SarcasticSphinx/RUET-ePayment",
    },
    {
      title: "Plantify",
      description: "Plant care and management application with smart reminders",
      image: plantifyImg,
      tags: ["React", "Node.js", "MongoDB", "Express"],
      link: "https://sarcasticsphinx.github.io/Plantify/",
      github: "https://github.com/SarcasticSphinx/Plantify",
    },
    {
      title: "Super Tic-Tac-Toe",
      description: "An advanced version of the classic Tic-Tac-Toe game",
      image: superTicTacToeImg,
      tags: ["HTML", "CSS", "JavaScript", "Game Logic"],
      link: "https://sarcasticsphinx.github.io/Super-Tic_Tac-Toe/",
      github: "https://github.com/SarcasticSphinx/Super-Tic_Tac-Toe",
    },
    {
      title: "Botanica Metropolis",
      description: "Urban gardening and plant marketplace platform",
      image: botanicaMetropolisImg,
      tags: ["React", "Firebase", "Stripe", "Tailwind"],
      link: "https://sarcasticsphinx.github.io/BotanicaMetropolis/",
      github: "https://github.com/SarcasticSphinx/BotanicaMetropolis",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const projectVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen py-20 px-4 md:px-8"
    >
      <div className="animated-bg" />

      <div className="max-w-6xl mx-auto">
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-5xl md:text-6xl font-bold mb-12 gradient-text text-center"
        >
          My Projects
        </motion.h1>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={projectVariants}
              onHoverStart={() => setHoveredProject(index)}
              onHoverEnd={() => setHoveredProject(null)}
              className="relative group"
            >
              <div className="relative overflow-hidden rounded-lg bg-gray-900">
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <motion.div
                  initial={false}
                  animate={{
                    opacity: hoveredProject === index ? 1 : 0,
                    y: hoveredProject === index ? 0 : 20,
                  }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 bg-gradient-to-t from-gray-900/90 to-black/70 p-6 flex flex-col justify-end"
                >
                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-yellow-500/20 rounded-full text-sm text-yellow-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-4 py-2 bg-gradient-to-r from-yellow-500 to-amber-500 rounded-full text-white font-semibold text-sm"
                    >
                      View Project
                    </motion.a>
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-4 py-2 border-2 border-yellow-500 rounded-full text-white font-semibold text-sm"
                    >
                      GitHub
                    </motion.a>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Projects;
