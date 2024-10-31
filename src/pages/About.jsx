import React from 'react';
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
        <>
            qua ci va un carosello con i linguaggi
        </>
    )
}

export default About