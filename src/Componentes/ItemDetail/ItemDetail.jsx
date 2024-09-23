import React, { useState, useContext } from 'react';
import './ItemDetail.css';
import Contador from '../Contador/Contador';
import { Link } from 'react-router-dom';
import { CarritoContext } from '/src/context/CarritoContext'; 
import { toast } from 'react-toastify';

const ItemDetail = ({ id, nombre, precio, img, stock }) => {
  const [agregarCantidad, setAgregarCantidad] = useState(0);

  // Aquí usa CarritoContext con useContext
  const { agregarAlCarrito } = useContext(CarritoContext);

  const manejadorCantidad = (cantidad) => {
    setAgregarCantidad(cantidad);

    const item = { id, nombre, precio };

    agregarAlCarrito(item, cantidad);
    toast.success('Agregado al carrito', {autoClase:300, theme: "dark", position: "top-right"});
  };

  return (
    <div className='contenedorItem'>
      <h2>Nombre: {nombre}</h2>
      <h3>Precio: {precio}</h3>
      <h3>ID: {id}</h3>
      <img src={img} alt={nombre} />
      <p>OFERTA</p>

      {agregarCantidad > 0 ? (
        <Link to="/cart">Terminar Compra</Link>
      ) : (
        <Contador inicial={1} stock={stock} funcionAgregar={manejadorCantidad} />
      )}
    </div>
  );
};

export default ItemDetail;
