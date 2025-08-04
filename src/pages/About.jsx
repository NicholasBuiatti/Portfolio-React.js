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
      <section className="text-white my-6 " id="sfondoAbout">
        <div className="bg-black/[.54]">
          <div className=" md:w-8/12 py-10 px-10">
            <h1 className="text-3xl md:text-6xl mb-4">
              Ecco qualche informazione in più.
            </h1>
            <p className="text-sm md:text-base">
              Sono Nicholas Buiatti, un Junior Full Stack Web Developer
              all'inizio del mio percorso professionale, ma con una grande
              voglia di imparare e crescere. Specializzato nello sviluppo sia
              lato front-end che back-end, mi dedico con passione a realizzare
              progetti solidi e funzionali, curando ogni dettaglio per offrire
              esperienze utente intuitive. Oltre alla programmazione, nutro una
              forte passione per la pallavolo e per l'attività all'aria aperta,
              che mi aiutano a mantenere un equilibrio tra lavoro e vita
              personale. Apprezzo profondamente il tempo trascorso con gli
              amici, poiché credo che le relazioni significative arricchiscano
              la vita e stimolino la creatività. Sono sempre pronto a esplorare
              nuove tecnologie e sfide, motivato dalla voglia di innovare e
              imparare.
            </p>
          </div>
        </div>
      </section>
      <Languages />
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

  const allLogos = [...logos, ...logos, ...logos];

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
