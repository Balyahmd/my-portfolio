import { motion } from "framer-motion";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

const iconVariants = {
  initial: { scale: 1 },
  hover: { scale: 1.2, rotate: 10 },
};

const SocialIcons = () => {
  return (
    <div className="flex justify-center space-x-6 mt-6">
      <motion.a
        href="https://instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        variants={iconVariants}
        initial="initial"
        whileHover="hover"
        className="text-gray-600 text-4xl hover:text-white">
        <FaInstagram />
      </motion.a>

      <motion.a
        href="https://linkedin.com"
        target="_blank"
        rel="noopener noreferrer"
        variants={iconVariants}
        initial="initial"
        whileHover="hover"
        className="text-gray-600  hover:text-white text-4xl">
        <FaLinkedin />
      </motion.a>

      <motion.a
        href="https://github.com"
        target="_blank"
        rel="noopener noreferrer"
        variants={iconVariants}
        initial="initial"
        whileHover="hover"
        className="text-gray-600 text-4xl hover:text-white">
        <FaGithub />
      </motion.a>
    </div>
  );
};

export default SocialIcons;
