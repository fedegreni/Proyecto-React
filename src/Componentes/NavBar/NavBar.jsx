import { useContext } from "react";
import { Link } from "react-router-dom";
import { CarWidget } from "../CarWidget/CarWidget";
import { CarritoContext } from "../../context/CarritoContext"; 
import { getAuth } from "firebase/auth"; 
import "./NavBar.css";
import logo from "../../assets/Drip-Logo.png";

export const NavBar = () => {
    const { usuario } = useContext(CarritoContext); 

    // Función para cerrar sesión
    const handleLogout = async () => {
        const auth = getAuth();
        await auth.signOut(); 
    };

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
            <div className="user-info">
                {usuario ? (
                    <>
                        <span>Bienvenido, {usuario.email}</span> 
                        <button className="logout-button" onClick={handleLogout}>
                            Cerrar sesión
                        </button>
                    </>
                ) : (
                    <Link to="/login" className="login-button">Iniciar sesión</Link>
                )}
            </div>
        </header>
    );
};
