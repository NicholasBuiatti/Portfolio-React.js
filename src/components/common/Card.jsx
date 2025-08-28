import { motion } from "framer-motion";

const Card = ({children, image, className="", inView = true, delay = 0}) => {
  return (
    <motion.div
      className={`overflow-hidden bg-white rounded-lg shadow-sm inline-block p-2 ${className}`}
      initial={{ opacity: 0, x: 100, boxShadow: "0 1px 8px 0 rgba(0,0,0,0.08)" }}
      animate={inView ? 
        { opacity: 1, x: 0, boxShadow: "0 1px 8px 0 rgba(0,0,0,0.08)" } : 
        { opacity: 0, x: 100, boxShadow: "0 1px 8px 0 rgba(0,0,0,0.08)" }
      }
      whileHover={{ boxShadow: "0 4px 32px 0 rgba(0,0,0,0.10)" }}
      transition={{
        duration: 1,
        delay: delay,
        type: "spring",
      }}
    >
      {image && <img src={image} className="rounded-md h-32 object-contain" alt="" />}
      {children}
    </motion.div>
  );
};

export default Card;
