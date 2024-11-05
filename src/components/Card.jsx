import React from 'react'
import { Link } from 'react-router-dom';

const Card = ({ project }) => {
    console.log("Project data:", project);
    const { img, name_project, git_URL, slug, favorite, type } = project;  // Destrutturazione di project


    return (

        <div className="relative h-full overflow-hidden hover:border-2 hover:border-sky-700 bg-white border border-gray-200 rounded-lg shadow-2xl dark:bg-gray-800 dark:border-gray-700">
            <Link to={`/projects/${slug}`}>
                <img src={img} className="rounded-t-lg" alt="" />
            </Link>
            {
                favorite == 1 ?
                    <div className='absolute bg-black/[.80] top-5 right-5 p-3 text-red-700 rounded-full'>
                        <i className="fa-solid fa-heart text-2xl animate-pulse"></i>
                    </div> : ''
            }

            <div className="p-5 flex flex-col justify-between text-center">
                <div className='md:h-32'>
                    <Link to={`/projects/${slug}`}>
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name_project}</h5>
                    </Link>

                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{type.name}</p>
                </div>


                <div>
                    <button className="inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800" >
                        <Link to={`/projects/${slug}`}>
                            <h5 className="px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">Info
                                <i className="fa-solid fa-arrow-right w-3.5 h-3.5 ms-2"></i></h5>
                        </Link>
                    </button>
                    <button className="inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800" >
                        <a href={git_URL} className='px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0' target="_blank" rel="noopener noreferrer">
                            <i className="fa-solid fa-arrow-up-right-from-square me-2"></i>
                            GitHub
                        </a>
                    </button>
                </div>

            </div>
        </div>

    );

}

export default Card