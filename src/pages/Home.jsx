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
    const [isLoading, setIsLoading] = useState(true)

    const [start, setStart] = useState(0)
    const [end, setEnd] = useState(3)

    const getFavorites = async () => {
        setIsLoading(true);
        try {
            const response = await axios.get('http://127.0.0.1:8000/api/projects/favorite');
            setIsLoading(false);
            setFavorite(response.data.projects);
            console.log(favorite);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getFavorites();
    }, [])

    const next = () => {
        setFavorite((prevFavorites) => {
            const newFavorites = [...prevFavorites]; // Crea una copia dell'array
            newFavorites.push(newFavorites[0]); // Aggiungi il primo elemento alla fine
            newFavorites.shift(); // Rimuovi il primo elemento
            return newFavorites; // Restituisci il nuovo array
        });
    }

    const previous = () => {
        setFavorite((prevFavorites) => {
            const newFavorites = [...prevFavorites];
            newFavorites.unshift(newFavorites[newFavorites.length - 1]);
            newFavorites.pop();
            return newFavorites;
        })
    }


    return (
        <section className='relative container mx-auto mt-16'>
            <h1 className='text-4xl text-white mb-4'>PROGETTI IN RILIEVO</h1>
            <div className="flex justify-between px-10">
                <button onClick={previous} className='border-2'>Indietro</button>
                {isLoading ?
                    <div className="text-center">
                        <div role="status">
                            <svg aria-hidden="true" className="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                            </svg>
                            <span className="sr-only">Loading...</span>
                        </div>
                    </div>
                    :
                    favorite.slice(start, end).map((project) => {
                        return (
                            <Card key={project.id} project={project} />

                        )
                    })
                }
                <button onClick={() => next()} className='border-2'>Avanti</button>
            </div>
            <pre>{JSON.stringify(favorite.projects, null, 2)}</pre>
        </section >
    )
}

const Card = ({ project }) => {
    const { img, name_project, git_URL, type } = project;  // Destrutturazione di project

    return (
        <div className='bg-white rounded-xl mx-5'>
            <img src={img} alt={name_project} className='object-contain' />
            <h2>{name_project}</h2>
            <p><i className={type.icon}></i> {type.name}</p>
            <a href={git_URL} target="_blank" rel="noopener noreferrer">Git URL</a>
        </div>
    );
};

export default Home