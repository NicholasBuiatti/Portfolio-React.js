import React from 'react'

const Card = ({ project }) => {

    const { img, name_project, git_URL, type } = project;  // Destrutturazione di project

    return (
        <div className=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
                <img src={img} className="rounded-t-lg" alt="" />
            </a>
            <div className="p-5">
                <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name_project}</h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{type.name}</p>


                <button className="inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800" >
                    <a href={git_URL} className='px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0' target="_blank" rel="noopener noreferrer">
                        Info
                        <i className="fa-solid fa-arrow-right w-3.5 h-3.5 ms-2"></i>
                    </a>
                </button>
                <button className="inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800" >
                    <a href={git_URL} className='px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0' target="_blank" rel="noopener noreferrer">
                        <i className="fa-solid fa-arrow-up-right-from-square me-2"></i>
                        Progetto
                    </a>
                </button>
            </div>
        </div>

    );

}

export default Card