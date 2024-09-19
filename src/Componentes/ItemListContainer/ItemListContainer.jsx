import { useState, useEffect } from 'react';
import { getProductos, getProductosPorCategorias } from '../../asynmock'; 
import ItemList from '../ItemList/ItemList';  
import { useParams } from 'react-router-dom'; 

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const { idCategoria } = useParams(); 

  useEffect(() => {
    const funcionProductos = idCategoria ? getProductosPorCategorias : getProductos;
    funcionProductos(idCategoria)
      .then(respuesta => setProductos(respuesta))
      .catch(error => console.error("Error al cargar productos:", error));  
  }, [idCategoria]);

  return (
    <>
      <h2 style={{ textAlign: 'center' }}>Mis productos</h2>
      <ItemList productos={productos} />
    </>
  );
};

export default ItemListContainer;
