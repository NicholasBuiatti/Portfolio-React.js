import Home from "../pages/Home";
import Projects from "../pages/Projects";
import About from "../pages/About";
import ContactMe from "../pages/ContactMe";
import Error from "../pages/Error";
import ProjectDetails from "../pages/ProjectDetails";

export const routes = [
  {
    id: 1,
    path: "/",
    element: <Home />,
    label: "home",
  },
  {
    id: 2,
    path: "/projects",
    element: <Projects />,
    label: "portfolio",
  },
  {
    path: "/projects/:slug",
    element: <ProjectDetails />,
  },
  {
    id: 3,
    path: "/about",
    element: <About />,
    label: "about",
  },
  {
    id: 4,
    path: "/contactMe",
    element: <ContactMe />,
    label: "contact",
  },
  {
    path: "*",
    element: <Error />,
  },
];
