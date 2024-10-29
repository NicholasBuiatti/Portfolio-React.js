import { Link } from 'react-router-dom';
import { routes } from '../routes';
const Navbar = () => {
    console.log(routes);

    return (
        <nav>
            <h1>NB</h1>
            <ul>
                {routes.map(route => {
                    if (route.id) {
                        return (
                            <li key={route.id}>
                                <Link to={route.path}>{route.label}</Link>
                            </li>
                        );
                    }
                    return null;
                })}
            </ul>
        </nav>
    )
}

export default Navbar