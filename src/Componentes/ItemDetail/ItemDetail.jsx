import React from 'react'
import './ItemDetail.css'
export const ItemDetail = ({id, nombre, precio, img}) => {
  return (
    <div className='contenedorItem'>
        <h2>Nombre: {nombre}</h2>
        <h3>Precio: {precio}</h3>
        <h3>ID: {id}</h3>
        <img src={img} alt={nombre} />
        <p>sssssssssssssssssssssssssss</p>
    </div>
  )
}
export default ItemDetail