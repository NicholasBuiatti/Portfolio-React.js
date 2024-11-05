//QUI IMPORTO LE PAGINE DA CARICARE
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import ContactMe from './pages/ContactMe';
import Error from './pages/Error';
import ProjectDetails from './pages/ProjectDetails';

export const routes = [
    {
        id: 1,
        path: '/',
        element: <Home />,
        label: 'Home'
    },
    {
        id: 2,
        path: '/projects',
        element: <Projects />,
        label: 'Projects',


    },
    {
        path: '/projects/:slug',
        element: <ProjectDetails />
    },
    {
        id: 3,
        path: '/about',
        element: <About />,
        label: 'About'
    },
    {
        id: 4,
        path: '/contactMe',
        element: <ContactMe />,
        label: 'Contact Me'
    },
    {
        path: '*',
        element: <Error />,
    }
]