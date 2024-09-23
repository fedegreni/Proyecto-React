import React, { useContext } from 'react';
import { CarritoContext } from '../../context/CarritoContext';
import { Link } from 'react-router-dom';
import { CartItem } from '../CartItem/CartItem';

export const Cart = () => {
  const { carrito, total, cantidadTotal, vaciarCarrito } = useContext(CarritoContext);

  if (cantidadTotal === 0) {
    return (
      <>  
        <h2>Carrito vacío</h2>
        <Link to="/">Ver Productos</Link>
      </>
    );
  }

  return (
    <div>
      {
        carrito.map((producto, index) => (
          <CartItem key={producto.item.id || index} {...producto} />
        ))
      }

      <h3>Total: ${total}</h3>
      <h3>Total de productos: {cantidadTotal}</h3>
      <button onClick={vaciarCarrito}>Vaciar Carrito</button>
      <Link to="/checkout">Finalizar compra</Link>
    </div>
  );
};

export default Cart;
