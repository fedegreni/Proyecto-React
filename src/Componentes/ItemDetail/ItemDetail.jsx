import React, { useState, useContext } from "react";
import "./ItemDetail.css";
import Contador from "../Contador/Contador";
import { Link } from "react-router-dom";
import { CarritoContext } from "/src/context/CarritoContext";
import { toast } from "react-toastify";

const ItemDetail = ({ id, nombre, precio, img, stock }) => {
  const [agregarCantidad, setAgregarCantidad] = useState(0);
  const { agregarAlCarrito } = useContext(CarritoContext);

  const manejadorCantidad = (cantidad) => {
    setAgregarCantidad(cantidad);
    const item = { id, nombre, precio };
    agregarAlCarrito(item, cantidad);
    toast.success("Agregado al carrito", {
      autoClose: 3000,
      theme: "dark",
      position: "top-right",
    });
  };

  return (
    <div className="contenedorItem">
      <h2>{nombre}</h2>
      <h3>Precio: ${precio.toFixed(2)}</h3>

      <img src={img} alt={nombre} />
      <p className="oferta">OFERTA</p>

      {agregarCantidad > 0 ? (
        <Link to="/cart" className="btn-comprar">
          Terminar Compra
        </Link>
      ) : (
        <Contador
          inicial={1}
          stock={stock}
          funcionAgregar={manejadorCantidad}
        />
      )}
    </div>
  );
};

export default ItemDetail;
