import { Link } from 'react-router-dom';
import { routes } from '../routes';
import { useState } from 'react';
const Navbar = () => {
    const [dropdown, setDropdown] = useState(false);

    const handleDropdown = () => {
        if (!dropdown) {
            setDropdown(true);
        } else {
            setDropdown(false);
        }
        console.log(dropdown);
    }

    return (
        <>
            <nav className="flex items-center justify-between sticky top-0 py-2 px-4 mb-4 sm:rounded-full text-white bg-sky-900 z-10">
                {/* Bottone menu per mobile */}
                <button className="sm:hidden" onClick={handleDropdown}>
                    {dropdown ? <i className="fa-solid fa-x text-2xl"></i> : <i className="fa-solid fa-bars text-2xl"></i>}
                </button>

                {/* Dropdown menu visibile su mobile */}
                {dropdown && (
                    <div className="absolute left-0 top-full w-full bg-sky-900 text-white sm:hidden p-4 rounded-b-lg shadow-lg border-t border-t-black">
                        <ul className="space-y-2">
                            {routes.map(route => (
                                route.id && (
                                    <li key={route.id}>
                                        <Link to={route.path} onClick={() => setDropdown(false)} className="block py-2 px-4 hover:bg-sky-700 rounded-md">
                                            {route.label}
                                        </Link>
                                    </li>
                                )
                            ))}
                        </ul>
                    </div>

                )}

                <h1 className="text-2xl md:text-4xl w-3/12 hidden lg:block">NB Portfolio</h1>
                <ul className="hidden sm:flex w-9/12 md:w-6/12 justify-around">
                    {routes.map(route => (
                        route.id && (
                            <li key={route.id} className="px-2">
                                <Link to={route.path} className="hover:underline">
                                    {route.label}
                                </Link>
                            </li>
                        )
                    ))}
                </ul>
                <div className="flex w-3/12 justify-end space-x-4">
                    <a href="https://instagram.com" aria-label="Instagram">
                        <i className="fa-brands fa-instagram text-2xl hover:text-sky-400"></i>
                    </a>
                    <a href="https://github.com" aria-label="GitHub">
                        <i className="fa-brands fa-github text-2xl hover:text-sky-400"></i>
                    </a>
                    <a href="https://linkedin.com" aria-label="LinkedIn">
                        <i className="fa-brands fa-linkedin text-2xl hover:text-sky-400"></i>
                    </a>
                </div>
            </nav>


        </>

    )
}

export default Navbar