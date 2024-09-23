import { useState, useEffect } from 'react';
import { getProductos, getProductosPorCategorias } from '../../asynmock'; 
import ItemList from '../ItemList/ItemList';  
import { useParams } from 'react-router-dom'; 
import Loader from '../Loader/Loader'; // Asegúrate de importar Loader con mayúscula

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const { idCategoria } = useParams(); 
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const funcionProductos = idCategoria ? getProductosPorCategorias : getProductos;

    funcionProductos(idCategoria)
      .then(respuesta => setProductos(respuesta))
      .catch(error => console.error("Error al cargar productos:", error))
      .finally(() => {
        console.log("Proceso finalizado");
        setLoading(false);
      });
  }, [idCategoria]); 

  return (
    <>
      <h2 style={{ textAlign: 'center' }}>Mis productos</h2>
      {loading ? <Loader /> : <ItemList productos={productos} />}
    </>
  );
};

export default ItemListContainer;
