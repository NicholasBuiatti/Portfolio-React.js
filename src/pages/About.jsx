import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

import ReactPng from "../assets/React.png";
import HtmlPng from "../assets/Html.png";
import CssPng from "../assets/Css.png";
import JsPng from "../assets/JS.png";
import PhpPng from "../assets/Php.png";
import LaravelPng from "../assets/Laravel.png";
import VuePng from "../assets/Vue.png";

const About = () => {
  return (
    <>
      <section className="container mx-auto">
        <div className="flex justify-between items-center py-10 border-b">
          <div className=" md:w-5/12 py-10 px-10">
            <h1 className="text-7xl text-gray-800 font-bold mb-4">about.</h1>
            <h3 className="text-xl text-gray-500 mb-2">
              Sono un Full Stack Developer che risiede nel nord Italia
            </h3>
            <p className="text-sm md:text-base">
              Dal 2024 ho intrapreso un percorso nel mondo dell’informatica,
              dedicandomi con entusiasmo alla programmazione full stack. Se non
              sono al computer puoi trovarmi in palestra, a giocare a beach
              volley o a passare del tempo con gli amici.
            </p>
          </div>
          <div className=" md:w-7/12 py-10 px-10">qua ci va l'immagine</div>
        </div>
        {/* <Languages /> mi sa che non la metto più perchè fa schifo */}
      </section>
    </>
  );
};

const logos = [
  { src: HtmlPng, alt: "HTML" },
  { src: CssPng, alt: "CSS" },
  { src: JsPng, alt: "JavaScript" },
  { src: VuePng, alt: "Vue" },
  { src: ReactPng, alt: "React" },
  { src: PhpPng, alt: "PHP" },
  { src: LaravelPng, alt: "Laravel" },
];

const Languages = () => {
  const containerRef = useRef(null);
  const [width, setWidth] = useState(0);

  const allLogos = [...logos, ...logos, ...logos, ...logos];

  useEffect(() => {
    if (containerRef.current) {
      setWidth(containerRef.current.scrollWidth / 3); // larghezza di una sequenza
    }
  }, []);

  return (
    <div className="overflow-hidden h-24 w-full flex items-center relative">
      <motion.div
        ref={containerRef}
        className="flex gap-8"
        animate={{ x: -width }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
          duration: 12,
        }}
        style={{ minWidth: "100%" }}
      >
        {allLogos.map((logo, idx) => (
          <img
            key={logo.alt + idx}
            src={logo.src}
            alt={logo.alt}
            className="h-16 w-auto object-contain"
            style={{ minWidth: "64px" }}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default About;
