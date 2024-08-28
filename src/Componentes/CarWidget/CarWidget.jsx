import React from 'react';
import carrito from '../../imagenes/107831.png'; // Ajusta la ruta para acceder a la imagen
import './CarWidget.css'; // Ruta correcta para el archivo CSS

export const CarWidget = () => {
  return (
    <div>
      <img className="imgCarrito" src={carrito} alt="Carrito" />
      <strong>4</strong>
    </div>
  );
};
