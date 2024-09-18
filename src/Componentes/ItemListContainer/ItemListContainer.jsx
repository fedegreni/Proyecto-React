import { useState, useEffect } from 'react';
import { getProductos, getProductosPorCategorias } from '../../asynmock'; 
import ItemList from '../ItemList/ItemList';  
import { useParams } from 'react-router-dom'; 

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const { idCategoria } = useParams(); // O


      useEffect(() => {
      const funcionProductos = idCategoria ? getProductosPorCategorias : getProductos;
      funcionProductos(idCategoria)
        .then(respuesta => setProductos(respuesta))
      }, [])

  return (
    <>
      <h2 style={{ textAlign: 'center' }}>Mis productos</h2>
      <ItemList productos={productos} />
    </>
  );
}

// Exportación por defecto del componente
export default ItemListContainer;

