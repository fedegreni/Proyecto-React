
import carrito from '../../imagenes/107831.png'; 
import './CarWidget.css'; 

export const CarWidget = () => {
  return ( 
    <div>
      <img className="imgCarrito" src={carrito} alt="Carrito" />
      <strong>4</strong>
    </div>
  );
};
