import { Link } from 'react-router-dom';
import { CarWidget } from '../CarWidget/CarWidget';
import './NavBar.css';

export const NavBar = () => {
  return (
    <header className="navbar">
      <h1 className="navbar-title">
        <Link to="/">Ropa Online</Link>
      </h1>
      <nav className="navbar-nav">
        <ul className="nav-list">
          <li>
            <Link to="/categoria/remeras">Remeras</Link>
          </li>
          <li>
            <Link to="/categoria/pantalones">Pantalones</Link>
          </li>
          <li>
            <Link to="/categoria/zapatillas">Zapatillas</Link>
          </li>
        </ul>
      </nav>
      <CarWidget />
    </header>
  );
};
