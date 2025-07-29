import { Link, useLocation } from "react-router-dom";
import { routes } from "../router/routes";
import { useState } from "react";
const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);
  const location = useLocation();
  console.log(location);

  const handleDropdown = () => {
    if (!dropdown) {
      setDropdown(true);
    } else {
      setDropdown(false);
    }
  };

  return (
    <div className="container mx-auto">
      <nav className="flex items-center py-4 mb-4 sm:rounded-full z-10 justify-between">
        <h1 className="w-16">
          <img className="invert" src="/NbPortfolioLogo.png" alt="Logo" />
        </h1>
        <ul className="hidden md:flex w-9/12 md:w-6/12 justify-end ms-auto">
          {routes
            .filter((route) => route.id)
            .map((route) => (
              <li key={route.id} className="px-2">
                <Link
                  to={route.path}
                  className={`hover:text-gray-500 ${
                    location.pathname === route.path ? "text-gray-500" : ""
                  }`}
                >
                  {route.label}
                </Link>
              </li>
            ))}
        </ul>
        <div className="hidden md:flex w-2/12 justify-end space-x-5 ms-4">
          <a href="https://instagram.com" aria-label="Instagram">
            <i className="fa-brands fa-instagram text-4xl hover:text-gray-500"></i>
          </a>
          <a href="https://github.com" aria-label="GitHub">
            <i className="fa-brands fa-github text-4xl hover:text-gray-500"></i>
          </a>
          <a href="https://linkedin.com" aria-label="LinkedIn">
            <i className="fa-brands fa-linkedin text-4xl hover:text-gray-500"></i>
          </a>
        </div>

        {/* Bottone menu per mobile */}
        <button className="md:hidden" onClick={handleDropdown}>
          {dropdown ? (
            <i className="fa-solid fa-x text-2xl"></i>
          ) : (
            <i className="fa-solid fa-bars text-2xl"></i>
          )}
        </button>

        {/* Dropdown menu visibile su mobile */}
        {dropdown && (
          <div className="absolute left-0 top-full w-full bg-sky-900 text-white md:hidden p-4 rounded-b-lg shadow-lg border-t border-t-black">
            <ul className="space-y-2">
              {routes.map(
                (route) =>
                  route.id && (
                    <li key={route.id}>
                      <Link
                        to={route.path}
                        onClick={() => setDropdown(false)}
                        className={`text-center block py-2 px-4 hover:bg-sky-700 ${
                          location.pathname === route.path
                            ? "text-grey-700"
                            : ""
                        }`}
                      >
                        {route.label}
                      </Link>
                    </li>
                  )
              )}
            </ul>
            <div className="flex w-2/12 justify-end space-x-4">
              <a href="https://instagram.com" aria-label="Instagram">
                <i className="fa-brands fa-instagram text-5xl hover:text-sky-400"></i>
              </a>
              <a href="https://github.com" aria-label="GitHub">
                <i className="fa-brands fa-github text-5xl hover:text-sky-400"></i>
              </a>
              <a href="https://linkedin.com" aria-label="LinkedIn">
                <i className="fa-brands fa-linkedin text-5xl hover:text-sky-400"></i>
              </a>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
