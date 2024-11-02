import { useEffect, useState } from 'react'
import axios from 'axios';

import Prof3 from '../assets/Prof3.png';
import cv from '../assets/Nicholas Buiatti CV.pdf';
const Home = () => {
    return (
        <>
            <Jumbotron />
            <Slides />
        </>
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

const Slides = () => {

    const [favorite, setFavorite] = useState([])

    const getFavorites = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:8000/api/projects/favorite');
            setFavorite(response.data);
            console.log(favorite);


        } catch (error) {
            console.log(error);

        }
    }

    useEffect(() => {
        getFavorites();
    }, [])

    return (
        <section className='relative container mx-auto mt-16'>
            <h1 className='text-4xl text-white mb-4'>PROGETTI IN RILIEVO</h1>
            <div className="flex justify-between px-10">
                {favorite.projects.map(project => {
                    return (
                        < div key={project.id} className='bg-white' >
                            <img src={project.img} alt="" />
                            <h2>{project.name_project}</h2>
                            <p><i className={project.type.icon}></i> {project.type.name}</p>
                            <a href={project.git_URL}>Git URL</a>
                        </div>
                    )
                })}
            </div>
        </section >
    )
}

export default Home