import { Link } from 'react-router-dom';
import './Item.css';

const Item = ({ id, nombre, precio, img }) => {
  return (
    <div className='cardProductos'>
      <img src={img} alt={nombre} />
      <h3>Nombre: {nombre}</h3>
      <p>Precio: {precio}</p>
      <p>Id: {id}</p>
      <Link to={`/item/${id}`}>
        <button>Ver Detalles</button> {/* Enlace al detalle del producto */}
      </Link>
    </div>
  );
}

export default Item;
