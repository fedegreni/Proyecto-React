import { Link } from 'react-router-dom';
import { CarWidget } from '../CarWidget/CarWidget';
import './NavBar.css';

export const NavBar = () => {
  return (
    <header>
      <h1>
        <Link to="/">Ropa Online</Link> {/* Navega a la página principal */}
      </h1>
      <nav>
        <li>
          <Link to="/category/remeras">Remeras</Link> {/* Enlace a la categoría "remeras" */}
        </li>
        <li>
          <Link to="/category/pantalones">Pantalones</Link> {/* Enlace a la categoría "pantalones" */}
        </li>
        <li>
          <Link to="/category/zapatillas">Zapatillas</Link> {/* Enlace a la categoría "zapatillas" */}
        </li>
      </nav>
      <CarWidget />
    </header>
  );
};
