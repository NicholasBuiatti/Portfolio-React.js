import Card from "../components/common/Card";
import { useStarProjects } from "../features/projects/hooks";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useRef, useState } from "react";
import Prof3 from "../assets/ImgProfilo.png";
import cv from "../assets/Nicholas Buiatti CV.pdf";

const Home = () => {
  return (
    <>
      <div className="border-b border-gray-200 pt-4 shadow-md bg-white">
        <div className="container mx-auto">
          <Jumbotron />
        </div>
      </div>
      <div className="container mx-auto">
        <StarProjects />
      </div>
    </>
  );
};

const Jumbotron = () => {
  return (
    <section className="bg-white">
      {/* <a href={cv} download={cv} className='hover:scale-105'>
                    <button className='text-3xl p-4 animate-pulse border-2 rounded-full'>CV</button>
                </a> */}
      <ImageCompare
        leftImg={Prof3}
        rightImg={Prof3}
        altLeft="Left Image"
        altRight="Right Image"
      />
    </section>
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
          transition: "clip-path 2s cubic-bezier(0.4,0,0.2,1)",
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

  if (isLoading) return <div>Caricamento...</div>;
  if (error) return <div>Errore nel caricamento</div>;

  return (
    <section className="relative mx-auto mt-16">
      <div className="flex justify-between items-center text-dark">
        <hr className="flex-1 border-gray-200" />
        <h1 className="mx-5 text-2xl whitespace-nowrap">Progetti in rilievo</h1>
        <hr className="flex-1 border-gray-200" />
        <p>{inView ? "In vista" : "Fuori vista"}</p>
      </div>
      <div className="flex flex-wrap px-10" ref={ref}>
        {starProjects?.length == 0 ? (
          <div className="text-white">nessuna repo</div>
        ) : (
          starProjects?.projects.map((project, idx) => (
            <motion.div
              key={project.id}
              className="w-full md:w-6/12 xl:w-4/12 p-4"
              initial={{ opacity: 0, x: 100 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
              transition={{ duration: 0.6, delay: idx * 0.15, type: "spring" }}
            >
              <Card project={project} />
            </motion.div>
          ))
        )}
      </div>
    </section>
  );
};

export default Home;
