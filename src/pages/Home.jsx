import Card from '../components/Card'
import { useStarProjects } from "../features/projects/hooks";
import { useRef, useState } from "react";
import Prof3 from '../assets/ImgProfilo.png';
import cv from '../assets/Nicholas Buiatti CV.pdf';

const Home = () => {
    return (
        <>
            <div className='border-b border-gray-200 pt-4 shadow-sm'>
                <div className='bg-white container mx-auto'>
                    <Jumbotron />
                </div>
            </div>
            <div className='container mx-auto'>
                <StarProjects />
            </div>
        </>
    )
}

const Jumbotron = () => {
    return (
        <section className='bg-white'>
            animazione che devo capire come fare
            {/* <a href={cv} download={cv} className='hover:scale-105'>
                    <button className='text-3xl p-4 animate-pulse border-2 rounded-full'>CV</button>
                </a> */}
            <ImageCompare leftImg={Prof3} rightImg={Prof3} altLeft="Left Image" altRight="Right Image" />
        </section>
    )
}

const ImageCompare = ({ leftImg, rightImg, altLeft = "", altRight = "" }) => {
  const containerRef = useRef(null);
  const [divider, setDivider] = useState(50); // percentuale (0-100)

  const handleMove = (e) => {
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percent = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setDivider(percent);
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-xl h-64 cursor-ew-resize select-none"
      onMouseMove={handleMove}
      onTouchMove={e => handleMove(e.touches[0])}
      style={{ userSelect: "none" }}
    >
      {/* Immagine di sinistra: sempre visibile */}
      <img
        src={leftImg}
        alt={altLeft}
        className="absolute inset-0 w-full h-full object-cover"
        draggable={false}
      />
      {/* Immagine di destra: tagliata, NON rimpicciolita */}
      <div
        className="absolute inset-0 h-full left-0"
        style={{
          width: `${divider}%`,
          overflow: "hidden",
          pointerEvents: "none"
        }}
      >
        <img
          src={rightImg}
          alt={altRight}
          className="w-full h-full object-cover"
          draggable={false}
          style={{ position: "absolute", inset: 0 }}
        />
      </div>
      {/* Linea divisoria */}
      <div
        className="absolute top-0 h-full border-l-2 border-sky-500"
        style={{ left: `${divider}%` }}
      />
    </div>
  );
};

const StarProjects = () => {
    const { data: starProjects, isLoading, error } = useStarProjects();

    if (isLoading) return <div>Caricamento...</div>;
    if (error) return <div>Errore nel caricamento</div>;

    return (
        <section className='relative mx-auto mt-16'>
            <div className='flex justify-between items-center text-dark'>
                <hr className="flex-1 border-gray-200" />
                <h1 className="mx-5 text-2xl whitespace-nowrap">Progetti in rilievo</h1>
                <hr className="flex-1 border-gray-200" />
            </div>
            <div className="flex justify-between flex-wrap px-10">
                <div className="relative w-full">
                    <div className="flex flex-wrap justify-center">
                        {starProjects?.length == 0 ?
                            <div className='text-white'>nessuna repo</div>
                            :
                            starProjects?.map((project) => (
                                <div key={project.id} className="w-full md:w-4/12 p-4">
                                    <Card project={project} />
                                </div>
                            ))}
                    </div>
                </div>
            </div>
            {/* <pre>{JSON.stringify(favorite, null, 2)}</pre> */}
        </section >
    )
}

export default Home;