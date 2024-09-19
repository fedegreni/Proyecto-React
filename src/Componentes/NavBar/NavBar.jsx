import { Link } from 'react-router-dom';
import { CarWidget } from '../CarWidget/CarWidget';
import './NavBar.css';


export const NavBar = () => {
  return (
    <header>
      <h1>
        <Link to="/">Ropa Online</Link> 
      </h1>
      <nav>
        <li>
          <Link to="/categoria/remeras">Remeras</Link> 
        </li>
        <li>
          <Link to="/categoria/pantalones">Pantalones</Link>
        </li>
        <li>
          <Link to="/categoria/zapatillas">Zapatillas</Link> 
        </li>
      </nav>
      <CarWidget />
    </header>
  );
};
