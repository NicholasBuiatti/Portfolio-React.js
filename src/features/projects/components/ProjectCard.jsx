import Card from "../../../components/common/Card";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

const ProjectCard = ({ project }) => {
    const { img, name_project, git_URL, slug, favorite, type } = project;

    return (
        <Card image={img}>
            <Link to={`/projects/${slug}`}>
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
            </Link>
        </Card>
    );
};

export default ProjectCard;
