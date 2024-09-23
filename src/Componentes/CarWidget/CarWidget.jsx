import carrito from '../../imagenes/107831.png'; 
import './CarWidget.css'; 
import { useContext } from 'react';
import { CarritoContext } from '../../context/CarritoContext';
import { Link } from 'react-router-dom';

export const CarWidget = () => {
  const { cantidadTotal } = useContext(CarritoContext); // Asegúrate de destructurar correctamente.

  return ( 
    <div>
      <Link to="/cart"> {/* Cambiado de <link> a <Link> */}
        <img className="imgCarrito" src={carrito} alt="Carrito" />
      </Link>
      {
        cantidadTotal > 0 && (
          <Link to="/cart">
            <strong>{cantidadTotal}</strong>
          </Link>
        )
      }
    </div>
  );
};
