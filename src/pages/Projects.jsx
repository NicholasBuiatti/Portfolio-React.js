import { useProjects } from "../features/projects/hooks";
import { Error, Loading, NoResults } from "../components/ui/Error&Loading";
import { useEffect, useState } from "react";
import Card from "../components/common/Card";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import StartingPage from "../components/ui/StartingPage";
import Pagination from "../components/ui/Pagination";
import Filter from "../features/projects/components/ProjectsFilters";

const Projects = () => {
  return (
    <>
      <div className="border-b border-gray-200">
        <StartingPage
          title="portfolio."
          semiTitle="Sono un Full Stack Developer residente in un bellissimo paesino friulano."
          description="Dal 2024 ho intrapreso un percorso nel mondo dell’informatica,
        dedicandomi con entusiasmo alla programmazione full stack. Se non
        sono al computer puoi trovarmi in palestra, a giocare a beach
        volley o a passare del tempo con gli amici."
        />
      </div>
      <div className="bg-gray-100">
        <ProjectsList />
      </div>
    </>
  );
};

export default Projects;

const ProjectsList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { data: projects, error, isLoading } = useProjects(currentPage);
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: "-100px",
  });

  if (isLoading)
    return <Loading message="Caricamento in corso. Attendi un istante..." />;

  if (error)
    return (
      <Error
        message={
          error.message ||
          "Ops... si è verificato un errore. Contatta l'assistenza."
        }
      />
    );

  return (
    <div className="container min-h-screen mx-auto pt-4">
      <div>
        <Filter page={currentPage} />
      </div>
      <Pagination
        currentPage={projects.projects.current_page}
        totalPages={projects.projects.last_page}
        onPageChange={setCurrentPage}
      />

      <div className="flex justify-between flex-wrap p-6" ref={ref}>
        {projects.projects.data &&
          projects.projects.data.map((project, idx) => {
            return (
              <motion.div
                key={project.id}
                className="w-full md:w-6/12 xl:w-4/12 p-4"
                initial={{ opacity: 0, x: 100 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
                transition={{
                  duration: 0.6,
                  delay: idx * 0.15,
                  type: "spring",
                }}
              >
                <Card project={project} />
              </motion.div>
            );
          })}
      </div>
      {/* <pre>{JSON.stringify(projects, null, 2)}</pre> */}
    </div>
  );
};
