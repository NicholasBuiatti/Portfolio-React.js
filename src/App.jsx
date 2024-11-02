import Navbar from './components/Navbar';
import AppFooter from './components/AppFooter';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRouter from './AppRouter';
import './App.css';
function App() {


    return (
        <div className='relative min-h-screen sm:pt-3' id='sfondoGlobale'>
            <Router>
                <Navbar />
                <AppRouter />
                <AppFooter />
            </Router>
        </div>

    )
}

export default App
