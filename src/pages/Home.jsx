import { useStarProjects } from "../features/projects/hooks";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useRef, useState } from "react";
import Section from "../components/ui/Section";

import ProjectCard from "../features/projects/components/ProjectCard";
import { Error, Loading, NoResults } from "../components/ui/Error&Loading";

import Prova from "../assets/prova.webp";
import cv from "../assets/Nicholas Buiatti CV.pdf";
import Prof3 from "../assets/prof3.png";
const Home = () => {
  return (
    <>
      <Section>
        <div className="max-w-6xl mx-auto">
          <Jumbotron />
        </div>
      </Section>
      <div className="p-10">
        <div className="max-w-6xl mx-auto h-64">
          <StarProjects />
        </div>
      </div>
    </>
  );
};

const Jumbotron = () => {
  {
    /* <a href={cv} download={cv} className='hover:scale-105'>
                <button className='text-3xl p-4 animate-pulse border-2 rounded-full'>CV</button>
            </a> */
  }
  return (
    <ImageCompare
      leftImg={Prof3}
      rightImg={Prof3}
      altLeft="Left Image"
      altRight="Right Image"
    />
  );
};

///////////////////////////////////////////////////////////////////////////////////////////DA SISTEMARE

const ImageCompare = ({ leftImg, rightImg, altLeft = "", altRight = "" }) => {
  const containerRef = useRef(null);
  const [divider, setDivider] = useState(50);

  const backendTechs = [
    "PHP", "Laravel", "Node.js", "Express", "Python", "Django", "Flask",
    "Java", "Spring Boot", "C#", ".NET", "Ruby", "Rails", "Go", "Fiber",
    "Rust", "Actix", "MySQL", "PostgreSQL", "MongoDB", "Redis", "Docker"
  ];
  const frontendTechs = [
    "HTML", "CSS", "JavaScript", "TypeScript", "React", "Vue.js", "Angular",
    "Svelte", "Next.js", "Nuxt.js", "Gatsby", "Bootstrap", "Tailwind CSS",
    "Sass", "Less", "jQuery", "Alpine.js", "Webpack", "Vite", "Parcel",
    "Figma", "Adobe XD"
  ];

  const generateRandomTechs = (array) => {
    const grandezza = ["text-base", "text-xl", "text-3xl"];
    const rimescolo = [...array].sort(() => 0.5 - Math.random());
    return rimescolo.slice(0, 15).map((tech) => ({
      name: tech,
      size: grandezza[Math.floor(Math.random() * grandezza.length)]
    }));
  };

  const [randomBackendTechs] = useState(generateRandomTechs(backendTechs));
  const [randomFrontendTechs] = useState(generateRandomTechs(frontendTechs));

  const handleMove = (e) => {
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.touches ? e.touches[0].clientX : e.clientX) - rect.left;
    const percent = Math.max(0, Math.min(100, 100 - (x / rect.width) * 100));
    setDivider(percent);
  };

  //VALUTARE L'ALTEZZA FISSA IN BASE ALL'IMMAGINE CHE INSERISCO 
  return (
    <motion.div
      ref={containerRef}
      className="relative h-96 select-none mx-auto"
      onMouseMove={handleMove}
      onTouchMove={handleMove}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ type: "spring", stiffness: 120, damping: 20 }}
      style={{
        userSelect: "none",
        touchAction: "none",
      }}
    >
      <img
        src={leftImg}
        alt={altLeft}
        className="w-auto h-full block invert mx-auto relative z-50"
        draggable={false}
      />
      <img
        src={rightImg}
        alt={altRight}
        className="w-auto h-full block z-50"
        draggable={false}
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          clipPath: `inset(0 0 0 ${divider}%)`,
        }}
      />
      <div className="absolute top-0 left-0 right-0 w-full h-full">
        <div className="flex justify-between items-center h-full">
          <motion.div
            className="w-full h-full flex flex-col justify-between"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: divider / 100 }}
            transition={{ duration: 0.1, ease: "easeOut" }}
          >
            <div></div>
            <h2 className="text-6xl">Back-End</h2>
            <div className="flex flex-wrap-reverse">
              {randomBackendTechs.map((tech, index) => (
                <span key={index} className={`${tech.size} text-gray-600 opacity-75`}>
                  {tech.name}{index < randomBackendTechs.length - 1 ? " • " : ""}
                </span>
              ))}
            </div>
          </motion.div>
          <motion.div
            className="w-full h-full text-end flex flex-col justify-between"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 - divider / 100 }}
            transition={{ duration: 0.1, ease: "easeOut" }}
          >
            <div></div>
            <h2 className="text-6xl">Front-End</h2>
            <div className="flex flex-wrap-reverse justify-end">
              {randomFrontendTechs.map((tech, index) => (
                <span key={index} className={`${tech.size} text-gray-600 opacity-75`}>
                  {tech.name}{index < randomFrontendTechs.length - 1 ? " • " : ""}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
      <div
        className="absolute top-0 h-full pointer-events-none"
        style={{ left: `${divider}%` }}
      />
    </motion.div>
  );
};

const StarProjects = () => {
  const { data: starProjects, isLoading, error } = useStarProjects();
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

  if (starProjects?.projects?.length === 0)
    return <NoResults message="Nessun progetto in evidenza al momento." />;

  return (
    <section className="relative container mx-auto py-12">
      <div className="flex justify-between items-center text-dark">
        <hr className="flex-1 border-gray-200" />
        <h1 className="mx-5 text-2xl text-gray-700 whitespace-nowrap">
          Progetti in rilievo
        </h1>
        <hr className="flex-1 border-gray-200" />
      </div>
      <div className="flex flex-wrap px-10" ref={ref}>
        {starProjects?.projects.map((project, idx) => (
          <motion.div
            key={project.id}
            className="w-full md:w-6/12 xl:w-4/12 p-4"
            initial={{ opacity: 0, x: 100 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
            transition={{ duration: 0.6, delay: idx * 0.15, type: "spring" }}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Home;
