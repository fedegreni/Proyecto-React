import { useState, useEffect } from 'react';
import { getUnProducto } from '../../asynmock'; 
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom'; 
import './ItemDetailContainer.css'; // Asegúrate de importar el CSS

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState(null);
  const { id } = useParams(); 

  useEffect(() => {
    getUnProducto(Number(id))  
      .then(respuesta => setProducto(respuesta))
      .catch(error => console.error("Error al cargar el producto:", error));  // Manejo de errores
  }, [id]);

  return (
    <div className="item-detail-container"> {/* Clase agregada para estilos */}
      {producto ? <ItemDetail {...producto} /> : <p>Cargando...</p>} {/* Mensaje de carga */}
    </div>
  );
};

export default ItemDetailContainer;
