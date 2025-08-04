import Card from "../components/Card";
import { useStarProjects } from "../features/projects/hooks";
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

const ImageCompare = ({ leftImg, rightImg, altLeft = "", altRight = "" }) => {
  const containerRef = useRef(null);
  const [divider, setDivider] = useState(50);

  const handleMove = (e) => {
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.touches ? e.touches[0].clientX : e.clientX) - rect.left;
    const percent = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setDivider(percent);
  };

  return (
    <div
      ref={containerRef}
      className="relative w-fit h-fit select-none mx-auto"
      onMouseMove={handleMove}
      onTouchMove={handleMove}
      style={{ userSelect: "none", touchAction: "none" }}
    >
      {/* Immagine sotto: sempre visibile */}
      <img
        src={leftImg}
        alt={altLeft}
        className="w-auto h-auto block invert"
        draggable={false}
      />
      {/* Immagine sopra: overflow a sinistra */}
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
        }}
      />
      <div
        className="absolute top-0 h-full border-l-2 border-sky-500 pointer-events-none"
        style={{ left: `${divider}%` }}
      />
    </div>
  );
};

const StarProjects = () => {
  const { data: starProjects, isLoading, error } = useStarProjects();

  if (isLoading) return <div>Caricamento...</div>;
  if (error) return <div>Errore nel caricamento</div>;
  console.log(starProjects);

  return (
    <section className="relative mx-auto mt-16">
      <div className="flex justify-between items-center text-dark">
        <hr className="flex-1 border-gray-200" />
        <h1 className="mx-5 text-2xl whitespace-nowrap">Progetti in rilievo</h1>
        <hr className="flex-1 border-gray-200" />
      </div>
      <div className="flex justify-between flex-wrap px-10">
        <div className="relative w-full">
          <div className="flex flex-wrap justify-center">
            {starProjects?.length == 0 ? (
              <div className="text-white">nessuna repo</div>
            ) : (
              starProjects?.projects.map((project) => (
                <div key={project.id} className="w-full md:w-4/12 p-4">
                  <Card project={project} />
                </div>
              ))
            )}
          </div>
        </div>
      </div>
      {/* <pre>{JSON.stringify(favorite, null, 2)}</pre> */}
    </section>
  );
};

export default Home;
