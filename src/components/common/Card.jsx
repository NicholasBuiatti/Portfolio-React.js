import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

const Card = ({ project }) => {
  const { img, name_project, git_URL, slug, favorite, type } = project;

  return (
    <Link to={`/projects/${slug}`}>
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
        <img src={img} className="rounded-md" alt="" />

        <div className="flex p-5 justify-between items-center">
          <div className="w-10/12">
            <h4 className="text-xl">{name_project}</h4>
            <p className="text-gray-400">{type.name}</p>
          </div>
          <motion.div
            variants={{
              rest: { opacity: 0, x: -10 },
              hover: { opacity: 1, x: 0 },
            }}
            transition={{
              duration: 1,
              type: "spring",
            }}
          >
            <ChevronRight size={70} className="text-gray-200" />
          </motion.div>
        </div>
      </motion.div>
    </Link>
  );
};

export default Card;
