import { useState, useEffect } from 'react';
import { getUnProducto } from '../../asynmock'; 
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom'; 

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState(null);
  const { id } = useParams(); 

  useEffect(() => {
    getUnProducto(Number(id))  
      .then(respuesta => setProducto(respuesta))
      .catch(error => console.error("Error al cargar el producto:", error));  // Manejo de errores
  }, [id]);

  return (
    <div>
      {producto && <ItemDetail {...producto} />}
    </div>
  );
};

export default ItemDetailContainer;
