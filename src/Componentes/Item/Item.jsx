import React from "react";
import { Link } from "react-router-dom";
import "./Item.css";

const Item = ({ id, nombre, precio, img, stock }) => {
  return (
    <div className="cardProductos">
      <img src={img} alt={nombre} />
      <h3>{nombre}</h3>
      <p className="precio">Precio: ${precio.toFixed(2)}</p>
      <p>Stock: {stock} </p>

      <Link to={`/item/${id}`}>
        <button className="detallesBtn">Comprar</button>
      </Link>
          </div>
  );
};

export default Item;
