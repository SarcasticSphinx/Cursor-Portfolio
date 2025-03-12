import { motion } from "framer-motion";

const About = () => {
  const skills = [
    { name: "React", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "Node.js", level: 80 },
    { name: "TypeScript", level: 75 },
    { name: "Python", level: 85 },
    { name: "HTML/CSS", level: 90 },
    { name: "Tailwind CSS", level: 88 },
    { name: "Machine Learning", level: 75 },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen py-20 px-4 md:px-8 bg-black relative overflow-hidden"
    >
      <div className="animated-bg" />

      <div className="max-w-6xl mx-auto">
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-5xl md:text-6xl font-bold mb-12 gradient-text-yellow text-center"
        >
          About Me
        </motion.h1>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-12"
        >
          <motion.div variants={itemVariants} className="space-y-6">
            <h2 className="text-3xl font-semibold mb-6 text-yellow-500">
              Who I Am
            </h2>
            <p className="text-gray-300 leading-relaxed">
              I'm Suhail Ahmed Toha, a passionate Full Stack Developer with a
              keen eye for creating beautiful and functional web applications. I
              love turning complex problems into simple, beautiful, and
              intuitive solutions.
            </p>
            <p className="text-gray-300 leading-relaxed">
              With a strong foundation in both front-end and back-end
              development, I strive to build applications that not only work
              flawlessly but also provide an exceptional user experience.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-6">
            <h2 className="text-3xl font-semibold mb-6 text-yellow-500">
              Skills
            </h2>
            <div className="space-y-4">
              {skills.map((skill) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-300">{skill.name}</span>
                    <span className="text-yellow-400">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      className="h-full bg-gradient-to-r from-yellow-500 to-amber-500"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="md:col-span-2 mt-12 space-y-8"
          >
            <h2 className="text-3xl font-semibold mb-6 text-yellow-500">
              My Journey
            </h2>
            <motion.div
              className="space-y-6 text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <p className="leading-relaxed">
                My journey in web development started with a curiosity about how
                websites work. This curiosity led me to dive deep into various
                programming languages and frameworks, constantly learning and
                improving my skills. Over time, I have gained experience in
                HTML, CSS, JavaScript, Tailwind CSS, and React, building
                projects like a weather app, a recipe website, and an expense
                tracker.
              </p>
              <motion.p
                className="leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                I believe in writing clean, maintainable code and staying
                up-to-date with the latest industry trends and best practices.
                My learning path has also expanded beyond web development into
                machine learning, where I recently earned a Supervised Machine
                Learning certification from DeepLearning.AI, Stanford
                University. I'm currently exploring Google Colab and Python
                libraries to deepen my ML knowledge.
              </motion.p>
              <motion.p
                className="leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Beyond coding, I enjoy solving competitive programming problems
                daily from Codeforces and LeetCode, learning CTF (Capture The
                Flag) cybersecurity challenges, and working on unique projects
                like a Morse code-based exam site and a plant identification
                system using ML.
              </motion.p>
              <motion.p
                className="leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                When I'm not coding, you can find me exploring new technologies,
                contributing to open-source projects, playing chess (with a 1700
                rating on Chess.com), tutoring, or working on my long-term
                initiatives like the Botanica Metropolis tree-planting project.
                My goal is to continue expanding my skills and eventually
                contribute to the development of AI technology.
              </motion.p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;
