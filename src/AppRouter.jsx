import { useRoutes } from 'react-router-dom';
import { routes } from './routes';

const AppRouter = () => {
    let element = useRoutes(routes);
    // console.log('Elementi delle rotte:', element);
    return element;
}

export default AppRouter