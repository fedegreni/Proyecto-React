import React from 'react';
import './CartItem.css'; 


export const CartItem = ({ item, cantidad, img }) => {
  return (
    <div className="cart-item">
      {/* <img src={item.img} alt={item.nombre} className="cart-item-image" /> */}
      <div className="cart-item-details">
        <h3>{item.nombre}</h3>
        <p>Precio: ${item.precio}</p>
        <p>Cantidad: {cantidad}</p>
      </div>
    </div>
  );
};

export default CartItem;