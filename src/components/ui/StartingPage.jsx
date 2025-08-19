import PropTypes from "prop-types";
import { motion } from "framer-motion";

export default function StartingPage({ title, semiTitle, description, image, reverse = false }) {
  return (
    <div
      className={`flex container mx-auto justify-between items-center py-10 ${reverse ? "flex-row-reverse" : ""
        }`}
    >
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className=" md:w-5/12 py-10 px-10"
      >
        <h1 className="text-7xl text-gray-800 font-bold mb-4">{title}</h1>
        <h3 className="text-xl text-gray-500 mb-2">{semiTitle}</h3>
        <p className="text-sm md:text-base">{description}</p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className=" md:w-7/12 py-10 px-10"
      >
        {image}
      </motion.div>
    </div>
  );
}

StartingPage.propTypes = {
  title: PropTypes.string.isRequired,
  semiTitle: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.element.isRequired,
  reverse: PropTypes.bool,
};
