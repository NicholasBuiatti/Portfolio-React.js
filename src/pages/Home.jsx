import React from 'react'
import Prof3 from '../assets/Prof3.png';
import cv from '../assets/Nicholas Buiatti CV.pdf';
const Home = () => {
    return (
        <Jumbotron />
    )
}

const Jumbotron = () => {
    return (
        <section className='relative block md:flex items-center text-white bg-black/[.54]'>
            <div className='py-8 px-5 md:pl-24 text-center md:w-6/12'>
                <h1 className='text-2xl mb-6'>Jr. Full Stack Web Developer</h1>
                <h2 className='text-8xl md:text-start'>NICHOLAS BUIATTI</h2>
                <p className='text-center w-6/12 mt-6 mx-auto md:mx-0'>Benvenuto nel mio portfolio personale, creato per affinare le mie
                    competenze come Full Stack Web Developer.</p>
            </div>
            <a href={cv} download={cv} className='absolute top-full left-2/4 -translate-x-2/4 -translate-y-2/4'>
                <button className='text-3xl p-4 animate-pulse border-2 rounded-full'>CV</button>
            </a>
            <img src={Prof3} alt="Immagine-Profilo" className='w-5/12 min-w-96 mx-auto aspect-square object-contain rounded-full' />

        </section>
    )
}

export default Home