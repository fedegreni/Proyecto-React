import { useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";
import { Link } from "react-router-dom";
import { CartItem } from "../CartItem/CartItem";
import "./Cart.css";

export const Cart = () => {
  const { carrito, total, cantidadTotal, vaciarCarrito } =
    useContext(CarritoContext);

  if (cantidadTotal === 0) {
    return (
      <div className="cart-empty">
        <h2>Carrito vacío</h2>
        <Link to="/">Ver Productos</Link>
      </div>
    );
  }

  return (
    <div className="cart-container">
      {carrito.map((producto, index) => (
        <CartItem key={producto.item.id || index} {...producto} />
      ))}

      <div className="cart-summary">
        <h3>Total: ${total}</h3>
        <h3>Total de productos: {cantidadTotal}</h3>
        <button className="vaciar-button" onClick={vaciarCarrito}>
          Vaciar Carrito
        </button>
        <Link className="checkout-button" to="/checkout">
          Finalizar compra
        </Link>
      </div>
    </div>
  );
};

export default Cart;
