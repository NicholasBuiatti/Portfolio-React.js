import { motion } from "framer-motion";

const Card = ({children, image}) => {
  return (
    <motion.div
      className="overflow-hidden bg-white rounded-lg shadow-sm p-2"
      initial="rest"
      whileHover="hover"
      animate="rest"
      variants={{
        rest: { boxShadow: "0 1px 8px 0 rgba(0,0,0,0.08)" },
        hover: { boxShadow: "0 4px 32px 0 rgba(0,0,0,0.10)" },
      }}
      transition={{ duration: 0.4, type: "tween" }}
    >
      {image && <img src={image} className="rounded-md w-full" alt="" />}
      {children}
    </motion.div>
  );
};

export default Card;
