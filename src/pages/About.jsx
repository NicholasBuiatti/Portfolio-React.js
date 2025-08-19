import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import StartingPage from "../components/ui/StartingPage";
import Section from "../components/ui/Section";

import ReactPng from "../assets/React.png";
import HtmlPng from "../assets/Html.png";
import CssPng from "../assets/Css.png";
import JsPng from "../assets/JS.png";
import PhpPng from "../assets/Php.png";
import LaravelPng from "../assets/Laravel.png";
import VuePng from "../assets/Vue.png";
import Yoda from "../assets/yoda.jpg";

const About = () => {
  return (
    <>
      <Section>
        <StartingPage
          title="About Me"
          semiTitle="Sono un Full Stack Developer residente in un bellissimo paesino friulano."
          description="Dal 2024 ho intrapreso un percorso nel mondo dell’informatica,
              dedicandomi con entusiasmo alla programmazione full stack. Se non
              sono al computer puoi trovarmi in palestra, a giocare a beach
              volley o a passare del tempo con gli amici."
        />
      </Section>
      <div>
        sezione a tre colonne
      </div>
      <Section>
        <StartingPage
          semiTitle="Fatti random"
          description="Sono sempre alla ricerca di nuove tecnologie e strumenti per migliorare il mio flusso di lavoro e le mie competenze."
          reverse={true}
        image={<img src={Yoda} alt="Yoda" />}
        className="pb-0"
        />
      </Section>
      <StartingPage
        semiTitle="Non lo so"
        description="Questa è una sezione di esempio."
      />
    </>
  );
};

export default About;


//////////////////////////////////////////////////////// DA TOGLIERE
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

