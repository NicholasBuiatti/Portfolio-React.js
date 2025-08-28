import { Link } from "react-router-dom";
import { routes } from "../router/routes";
import useScrollToTop from '../hooks/useScrollToTop';

const AppFooter = () => {
  const { isVisible, scrollToTop } = useScrollToTop();
  return (
    <div
      className="py-12 px-3"
      style={{ boxShadow: "0 -4px 6px -1px rgba(0, 0, 0, 0.1)" }}
    >
      {isVisible &&
        <button
          onClick={scrollToTop}
          className="fixed bottom-5 right-5 transform w-12 h-12 bg-gray-100 text-white rounded-full shadow-lg hover:bg-gray-200 transition-colors"
        >
          <svg className="fill-gray-300 hover:fill-gray-400 transition-colors" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g data-name="90-Arrow Up"><path d="M16 0a16 16 0 1 0 16 16A16 16 0 0 0 16 0zm0 30a14 14 0 1 1 14-14 14 14 0 0 1-14 14z" /><path d="m15.29 10.29-8 8L8.7 19.7l7.3-7.29 7.29 7.29 1.41-1.41-8-8a1 1 0 0 0-1.41 0z" /></g></svg>
        </button>
      }
      <div className="max-w-6xl mx-auto">
        <div className="flex text-gray-400">
          <div className="w-full md:w-4/12 text-center md:text-start">
            <p>2025 Nicholas Buiatti</p>
          </div>
          <div className="hidden md:block w-8/12">
            <ul className="md:flex w-9/12 md:w-6/12 justify-end ms-auto">
              {routes
                .filter((route) => route.id)
                .map((route) => (
                  <li key={route.id} className="px-2">
                    <Link to={route.path} className={`hover:text-gray-500`}>
                      {route.label}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppFooter;
