import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import myPic from "../images/myPic.jpg";
import { Link } from "react-router-dom";

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.5 },
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
      className="min-h-screen relative overflow-hidden bg-black"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {/* Fixed stars background */}
      <div className="absolute top-0 left-0 w-full h-full">
        <Canvas>
          <Stars
            radius={100}
            depth={50}
            count={5000}
            factor={4}
            saturation={0}
            fade
            speed={1}
          />
        </Canvas>
      </div>

      {/* Content with animations */}
      <motion.div
        className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4"
        variants={containerVariants}
      >
        <motion.div
          variants={itemVariants}
          className="mb-8 w-48 h-48 rounded-full overflow-hidden border-4 border-yellow-500/30"
        >
          <motion.img
            src={myPic}
            alt="Suhail Ahmed Toha"
            className="w-full h-full object-cover"
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          />
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-6xl md:text-8xl font-bold text-center mb-6 gradient-text-yellow"
        >
          Suhail Ahmed Toha
        </motion.h1>

        <motion.div
          variants={itemVariants}
          className="text-xl md:text-2xl text-gray-300 text-center mb-12"
        >
          Full Stack Developer & Creative Coder
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-6"
        >
          <Link to="/contact" className="inline-block">
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: "#eab308" }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-8 py-3 bg-gradient-to-r from-yellow-500 to-amber-500 rounded-full text-white font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/20"
            >
              Get in Touch
            </motion.button>
          </Link>
          <Link to="/projects" className="inline-block">
            <motion.button
              whileHover={{ scale: 1.05, borderColor: "#eab308" }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-8 py-3 border-2 border-yellow-500 rounded-full text-white font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/20"
            >
              View Projects
            </motion.button>
          </Link>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Home;
