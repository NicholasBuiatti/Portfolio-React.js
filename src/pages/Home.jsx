import { useEffect, useState } from 'react'
import axios from 'axios';
import Card from '../components/Card'

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
        <section className='relative block md:flex items-center justify-center text-white bg-black/[.54]'>
            <div className='py-8 px-5 md:pl-24 text-center md:w-6/12'>
                <h1 className='text-xl lg:text-2xl mb-6'>Jr. Full Stack Web Developer</h1>
                <h2 className='text-6xl lg:text-8xl md:text-start'>NICHOLAS BUIATTI</h2>
                <p className='text-center w-6/12 mt-6 mx-auto md:mx-0'>Benvenuto nel mio portfolio personale, creato per affinare le mie
                    competenze come Full Stack Web Developer.</p>
            </div>
            <div className='flex flex-col items-center md:absolute md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2'>
                <a href={cv} download={cv} className='hover:scale-105'>
                    <button className='text-3xl p-4 animate-pulse border-2 rounded-full'>CV</button>
                </a>
            </div>
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
        <section className='relative mx-auto mt-16'>
            <h1 className='text-4xl text-white mb-4 ms-5'>PROGETTI IN RILIEVO</h1>
            <div className="flex justify-between flex-wrap px-10">



                {isLoading ?
                    (<div className="mx-auto">
                        <div role="status">
                            <svg aria-hidden="true" className="inline w-8 h-8 animate-spin text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                            </svg>
                            <span className="sr-only">Loading...</span>
                        </div>
                    </div>
                    ) : (
                        <div className="relative w-full">
                            <button
                                onClick={previous}
                                type="button"
                                className="absolute right-1/2 md:top-1/2 md:left-0 transform translate-x-1/2  md:-translate-x-1/2 md:-translate-y-1/2 z-30 flex items-center justify-center w-10 h-10 rounded-full bg-sky-700 hover:bg-sky-900"
                                data-carousel-prev
                            >
                                <svg
                                    className="w-4 h-4 text-gray-800 rotate-90 md:rotate-0"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 6 10"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M5 1 1 5l4 4"
                                    />
                                </svg>
                                <span className="sr-only">Previous</span>
                            </button>

                            <button
                                onClick={next}
                                type="button"
                                className="absolute bottom-0 right-1/2 md:top-1/2 md:right-1 transform translate-x-1/2 md:-translate-y-1/2 z-30 flex items-center justify-center w-10 h-10 rounded-full bg-sky-700 hover:bg-sky-900"
                                data-carousel-next
                            >
                                <svg
                                    className="w-4 h-4 text-gray-800 rotate-90 md:rotate-0"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 6 10"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="m1 9 4-4-4-4"
                                    />
                                </svg>
                                <span className="sr-only">Next</span>
                            </button>

                            <div className="flex flex-wrap justify-center">
                                {favorite.length == 0 ?
                                    <div className='text-white'>nessuna repo</div>
                                    :
                                    favorite.slice(start, end).map((project) => (
                                        <div key={project.id} className="w-full md:w-4/12 p-4">
                                            <Card project={project} />
                                        </div>
                                    ))}
                            </div>
                        </div>


                    )

                }

            </div>
            {/* <pre>{JSON.stringify(favorite, null, 2)}</pre> */}
        </section >
    )
}



export default Home