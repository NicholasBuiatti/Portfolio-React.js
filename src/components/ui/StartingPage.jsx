import PropTypes from "prop-types";
import { motion } from "framer-motion";

export default function StartingPage({
  title,
  semiTitle,
  description,
  image,
  reverse = false,
}) {
  return (
    <div
      className={`flex flex-wrap md:flex-nowrap items-center pt-10 ${
        reverse ? "flex-row-reverse" : ""
      }`}
    >
      <motion.div
        initial={{ opacity: 0, x: reverse ? 100 : -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="md:w-1/2"
      >
        <div className="text-center md:w-3/4 md:text-start mb-5">
          <h1 className="text-7xl text-gray-800 font-bold mb-4">{title}</h1>
          <h3 className="text-xl text-gray-500 mb-2">{semiTitle}</h3>
          <p className="text-sm md:text-base">{description}</p>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: reverse ? -100 : 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="md:w-1/2"
      >
        <div className="max-w-lg mx-auto">{image}</div>
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
