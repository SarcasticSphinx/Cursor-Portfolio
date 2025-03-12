import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Contact = () => {
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

  const contactInfo = [
    {
      icon: <FaEnvelope className="text-2xl" />,
      label: "Email",
      value: "suhailahmedtoha@gmail.com",
      link: "mailto:suhailahmedtoha@gmail.com",
    },
    {
      icon: <FaGithub className="text-2xl" />,
      label: "GitHub",
      value: "github.com/SarcasticSphinx",
      link: "https://github.com/SarcasticSphinx",
    },
    {
      icon: <FaLinkedin className="text-2xl" />,
      label: "LinkedIn",
      value: "linkedin.com/in/suhailahmed-toha-92b1a0314",
      link: "https://www.linkedin.com/in/suhailahmed-toha-92b1a0314/",
    },
    {
      icon: <FaMapMarkerAlt className="text-2xl" />,
      label: "Location",
      value: "Dhaka, Bangladesh",
      link: "https://maps.google.com/?q=Dhaka,Bangladesh",
    },
  ];

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
          Get in Touch
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-6"
          >
            <motion.div variants={itemVariants}>
              <h2 className="text-3xl font-semibold mb-6 text-yellow-500">
                Send a Message
              </h2>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-gray-300 mb-2" htmlFor="name">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 bg-gray-900 border-2 border-yellow-500/30 rounded-lg focus:border-yellow-500 focus:outline-none text-gray-300 transition-all duration-300"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2" htmlFor="email">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 bg-gray-900 border-2 border-yellow-500/30 rounded-lg focus:border-yellow-500 focus:outline-none text-gray-300 transition-all duration-300"
                    placeholder="Your email"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows="5"
                    className="w-full px-4 py-2 bg-gray-900 border-2 border-yellow-500/30 rounded-lg focus:border-yellow-500 focus:outline-none text-gray-300 transition-all duration-300"
                    placeholder="Your message"
                  ></textarea>
                </div>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02, backgroundColor: "#eab308" }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-8 py-3 bg-gradient-to-r from-yellow-500 to-amber-500 rounded-lg text-white font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/20"
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-6"
          >
            <motion.div variants={itemVariants}>
              <h2 className="text-3xl font-semibold mb-6 text-yellow-500">
                Contact Information
              </h2>
              <div className="grid gap-6">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    href={info.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-4 bg-gray-900 rounded-lg border-2 border-yellow-500/30 hover:border-yellow-500 transition-all duration-300"
                    whileHover={{ scale: 1.02, borderColor: "#eab308" }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="p-3 bg-yellow-500/10 rounded-full text-yellow-500">
                      {info.icon}
                    </div>
                    <div className="ml-4">
                      <p className="text-yellow-500 font-medium">
                        {info.label}
                      </p>
                      <p className="text-gray-300">{info.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
