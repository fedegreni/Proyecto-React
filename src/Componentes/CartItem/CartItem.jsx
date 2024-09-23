import React from 'react';

export const CartItem = ({ item, cantidad }) => {
  return (
    <div>
      <p>Producto: {item.nombre}</p>
      <p>Precio: ${item.precio}</p>
      <p>Cantidad: {cantidad}</p>
      <button className="eliminar-boton" onClick={() => eliminarProducto(item.id)}>
        Eliminar
      </button>
    </div>
  );
};

export default CartItem;
