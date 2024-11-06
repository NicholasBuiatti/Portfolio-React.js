import ReactPng from '../assets/React.png'
import HtmlPng from '../assets/Html.png'
import CssPng from '../assets/Css.png'
import JsPng from '../assets/JS.png'
import PhpPng from '../assets/Php.png'
import LaravelPng from '../assets/Laravel.png'
import VuePng from '../assets/Vue.png'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import './About.css';
const About = () => {
    return (
        <>
            <section className='text-white my-6 ' id='sfondoAbout'>
                <div className='bg-black/[.54]'>
                    <div className=' md:w-8/12 py-10 px-10'>
                        <h1 className='text-3xl md:text-6xl mb-4'>Ecco qualche informazione in più.</h1>
                        <p className="text-sm md:text-base">Sono Nicholas Buiatti, un Junior Full Stack Web Developer all'inizio del mio percorso
                            professionale, ma con una grande voglia di imparare e crescere. Specializzato nello sviluppo sia lato
                            front-end che back-end, mi dedico con passione a realizzare progetti solidi e funzionali, curando ogni
                            dettaglio per offrire esperienze utente intuitive. Oltre alla programmazione, nutro una forte passione
                            per la pallavolo e per l'attività all'aria aperta, che mi aiutano a mantenere un equilibrio tra lavoro e
                            vita personale. Apprezzo profondamente il tempo trascorso con gli amici, poiché credo che le relazioni
                            significative arricchiscano la vita e stimolino la creatività. Sono sempre pronto a esplorare nuove
                            tecnologie e sfide, motivato dalla voglia di innovare e imparare.
                        </p>
                    </div>
                </div>
            </section>
            <Languages />
        </>
    )
}

const Languages = () => {
    return (
        <Swiper
            spaceBetween={0}
            slidesPerView={6}
            loop={true}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            className="h-24"
        >
            <SwiperSlide className="h-full flex justify-center items-center"><img className='h-full w-auto object-contain' src={HtmlPng} alt="HTML" /></SwiperSlide>
            <SwiperSlide className="h-full flex justify-center items-center"><img className='h-full w-auto object-contain' src={CssPng} alt="CSS" /></SwiperSlide>
            <SwiperSlide className="h-full flex justify-center items-center"><img className='h-full w-auto object-contain' src={JsPng} alt="JavaScript" /></SwiperSlide>
            <SwiperSlide className="h-full flex justify-center items-center"><img className='h-full w-auto object-contain' src={VuePng} alt="Vue" /></SwiperSlide>
            <SwiperSlide className="h-full flex justify-center items-center"><img className='h-full w-auto object-contain' src={ReactPng} alt="React" /></SwiperSlide>
            <SwiperSlide className="h-full flex justify-center items-center"><img className='h-full w-auto object-contain' src={PhpPng} alt="PHP" /></SwiperSlide>
            <SwiperSlide className="h-full flex justify-center items-center"><img className='h-full w-auto object-contain' src={LaravelPng} alt="Laravel" /></SwiperSlide>
        </Swiper>
    )
}

export default About