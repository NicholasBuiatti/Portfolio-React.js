import { Link } from "react-router-dom";
import { routes } from "../router/routes";

const AppFooter = () => {
  return (
    <div
      className="py-12"
      style={{ boxShadow: "0 -4px 6px -1px rgba(0, 0, 0, 0.1)" }}
    >
      <div className="max-w-4xl mx-auto">
        <div className="flex text-gray-400">
          <div className="w-4/12">
            <p>2025 Nicholas Buiatti</p>
          </div>
          <div className="w-8/12">
            <ul className="hidden md:flex w-9/12 md:w-6/12 justify-end ms-auto">
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
