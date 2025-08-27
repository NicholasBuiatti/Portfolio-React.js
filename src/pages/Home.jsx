import { useStarProjects } from "../features/projects/hooks";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useRef, useState } from "react";
import Section from "../components/ui/Section";

import Card from "../components/common/Card";
import { Error, Loading, NoResults } from "../components/ui/Error&Loading";

import Prova from "../assets/prova.webp";
import cv from "../assets/Nicholas Buiatti CV.pdf";

const Home = () => {
  return (
    <>
      <Section>
        <div className="container mx-auto">
          <Jumbotron />
        </div>
      </Section>
      <div className="p-10">
        <div className="container mx-auto">
          <StarProjects />
        </div>
      </div>
    </>
  );
};

const Jumbotron = () => {
  {/* <a href={cv} download={cv} className='hover:scale-105'>
                <button className='text-3xl p-4 animate-pulse border-2 rounded-full'>CV</button>
            </a> */}
  return (
    <ImageCompare
      leftImg={Prova}
      rightImg={Prova}
      altLeft="Left Image"
      altRight="Right Image"
    />
  );
};

///////////////////////////////////////////////////////////////////////////////////////////DA SISTEMARE

const ImageCompare = ({ leftImg, rightImg, altLeft = "", altRight = "" }) => {
  const containerRef = useRef(null);
  const [divider, setDivider] = useState(50);

  const handleMove = (e) => {
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.touches ? e.touches[0].clientX : e.clientX) - rect.left;
    const percent = Math.max(0, Math.min(100, 100 - (x / rect.width) * 100));
    setDivider(percent);
  };

  const getTranslate = (divider) => {
    const maxShift = 20;
    return ((divider - 50) / 50) * maxShift;
  };

  return (
    <motion.div
      ref={containerRef}
      className="relative w-fit h-fit select-none mx-auto"
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
        className="w-auto h-auto block invert"
        draggable={false}
      />
      <img
        src={rightImg}
        alt={altRight}
        className="w-auto h-auto block absolute insert-0 top-0 left-0"
        draggable={false}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          clipPath: `inset(0 0 0 ${divider}%)`,
          transition: "clip-path 1s cubic-bezier(0.4,0,0.2,1)",
        }}
      />
      <div className="absolute top-0 left-0 right-0 w-full h-full z-100">
        <div className="flex justify-between items-center h-full">
          <motion.h2
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: divider / 100 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{
              transition: "opacity 0.2s",
            }}
          >
            Back-End
          </motion.h2>
          <motion.h2
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 - divider / 100 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{
              transition: "opacity 0.2s",
            }}
          >
            Front-End
          </motion.h2>
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
            <Card project={project} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Home;
