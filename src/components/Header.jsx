import { Link } from 'react-router-dom';
import '../styles/Header.scss'; // Puedes ajustar o mover estilos

const Header = () => {
    return (
        <header className="dimension-header">
            <div className="logo-box">
                <span className="icon fa-gem" />
            </div>
            <div className="content-box">
                <h1 className="title">
                    <Link to="/">Black Heroines</Link>
                </h1>
                <p className="tagline">
                    Celebrando el legado de mujeres negras extraordinarias
                </p>
            </div>
            <nav className="nav-links">
                <ul>
                    <li><Link to="/">Inicio</Link></li>
                    <li><Link to="/nueva">Añadir</Link></li>
                    <li><Link to="/acerca">Acerca de</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
