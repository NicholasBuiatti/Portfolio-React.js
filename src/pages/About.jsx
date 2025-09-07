import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import StartingPage from "../components/ui/StartingPage";
import Section from "../components/ui/Section";
import Card from "../components/common/Card";
import { useInView } from "react-intersection-observer";

import Yoda from "../assets/yoda.jpg";
import Prova from "../assets/prova.webp";
import Prova1 from "../assets/prova1.jpg";
import Prova2 from "../assets/prova2.jpg";
import Prova3 from "../assets/prova3.jpg";
import Prova4 from "../assets/prova4.jpg";
import Prova5 from "../assets/prova5.jpg";
import Torta60 from "../assets/torta60.png";

const About = () => {
  return (
    <>
      <Section>
        <div className="max-w-6xl mx-auto">
          <StartingPage
            title="about me."
            semiTitle="Sono un Full Stack Developer residente in un bellissimo paesino friulano."
            description="Dal 2024 ho intrapreso un percorso nel mondo dell’informatica,
          dedicandomi con entusiasmo alla programmazione full stack. Se non
          sono al computer puoi trovarmi in palestra, a giocare a beach
          volley o a passare del tempo con gli amici."
            image={<img src={Prova} alt="Prova" />}
          />
          <hr />
          <ExpoImage />
        </div>
      </Section>
      <div className="p-10">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center">
          <SkillList />
        </div>
      </div>
      <Section>
        <div className="max-w-6xl mx-auto">
          <StartingPage
            semiTitle="Fatti random"
            description="Sono sempre alla ricerca di nuove tecnologie e strumenti per migliorare il mio flusso di lavoro e le mie competenze."
            image={<img src={Yoda} alt="Yoda" />}
            className="pb-0"
            reverse={true}
          />
          <hr />
        </div>
      </Section>
      <div className="p-10">
        <div className="max-w-6xl mx-auto">
          <StartingPage
            semiTitle="Non lo so"
            description="Questa è una sezione di esempio."
          />
        </div>
      </div>
    </>
  );
};

export default About;

const ExpoImage = () => {
  const Image = [
    { src: Prova1, alt: "HTML" },
    { src: Prova2, alt: "CSS" },
    { src: Prova3, alt: "JavaScript" },
    { src: Prova4, alt: "Vue" },
    { src: Prova5, alt: "Vue" },
    { src: Prova, alt: "React" },
  ];

  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: "-100px",
  });

  return (
    <div className="flex flex-wrap px-10" ref={ref}>
      {Image?.map((img, idx) => (
        <motion.div
          key={img.alt}
          className="w-full md:w-4/12 xl:w-2/12 p-4"
          initial={{ opacity: 0, x: 100 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
          transition={{ duration: 0.6, delay: idx * 0.15, type: "spring" }}
        >
          <Card
            image={img.src}
            alt={img.alt}
            inView={inView}
            delay={idx * 0.15}
          />
        </motion.div>
      ))}
    </div>
  );
};

const SkillList = () => {
  return (
    <>
      <div className="w-full md:w-1/4 text-center md:text-start order-2 md:order-1">
        <h3 className="text-3xl text-gray-800 font-bold">Parte Backender</h3>
        <ul className="text-xl text-gray-500">
          <li>PHP</li>
          <li>Laravel</li>
          <li>MySQL</li>
        </ul>
      </div>
      <div className="mx-auto w-1/2 order-3 md:order-2">
        <img src={Torta60} alt="Torta 40-60" className="w-full h-auto" />
      </div>
      <div className="w-full md:w-1/4 text-center md:text-end order-1 md:order-3 mb-3 md:mb-0">
        <h3 className="text-3xl text-gray-800 font-bold">Parte Frontender</h3>
        <ul className="text-xl text-gray-500">
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>Vue</li>
          <li>Bootstrap</li>
          <li>Tailwind CSS</li>
        </ul>
      </div>
    </>
  );
};
