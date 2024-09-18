import { useState, useEffect } from 'react';
import { getProductos } from '../../asynmock'; 
import ItemList from '../ItemList/ItemList';  
import { useParams } from 'react-router-dom'; // Importamos useParams

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const { id } = useParams(); // Obtener el id de la categoría desde los parámetros

  useEffect(() => {
    getProductos()
      .then(respuesta => {
        if (id) {
          const productosFiltrados = respuesta.filter(producto => producto.categoria === id);
          setProductos(productosFiltrados); // Filtrar productos por categoría
        } else {
          setProductos(respuesta); // Si no hay categoría, mostrar todos los productos
        }
      })
      .catch(error => console.log(error));
  }, [id]);

  return (
    <>
      <h2 style={{ textAlign: 'center' }}>Mis productos</h2>
      <ItemList productos={productos} />
    </>
  );
}

export default ItemListContainer;
