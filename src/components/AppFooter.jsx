import React from 'react'
import { Link } from 'react-router-dom';
const AppFooter = () => {
    return (
        <div className='block text-xs text-center sm:flex items-center px-6 py-8 mt-5 text-white bg-black'>
            <div className='sm:w-4/12 mb-3 md:mb-0 md:text-start'>
                <p className='mb-2'><i className="fa-solid fa-envelope"></i> buiattinicholas@gmail.com</p>
                <p><i className="fa-solid fa-phone"></i> 123-456789</p>
            </div>
            <div className='sm:w-4/12 text-center mb-3 md:mb-0'>
                <button className='border-2 border-l-stone-400 rounded-md p-2 shadow-white hover:bg-neutral-300 hover:text-black'>
                    <Link to='/contactMe'>
                        CONTATTAMI
                    </Link>
                </button>
            </div>
            <div className="flex flex-col justify-between sm:w-4/12 md:text-end space-y-2 sm:space-y-0 sm:space-x-4 mb-3 md:mb-0">
                <a href="" className="text-blue-600 hover:underline">Politica sulla Privacy</a>
                <a href="" className="text-blue-600 hover:underline">Termini di utilizzo</a>
                <p className="text-gray-500">2024 Nicholas Buiatti. Tutti i diritti riservati.</p>
            </div>
        </div>
    )
}

export default AppFooter