import { Link } from "react-router-dom";
import { CarWidget } from "../CarWidget/CarWidget";
import "./NavBar.css";
import logo from "../../assets/Drip-Logo.png";

export const NavBar = () => {
  return (
    <header className="navbar">
      <div className="navbar-logo">
        <Link to="/">
          <img src={logo} alt="Ropa Online" className="logo-img" />
        </Link>
      </div>
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
