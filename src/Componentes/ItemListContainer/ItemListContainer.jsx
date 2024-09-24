import { useState, useEffect } from 'react';
import { getProductos, getProductosPorCategorias } from '../../asynmock';
import ItemList from '../ItemList/ItemList';
import Loader from '../Loader/Loader';
import { useParams } from 'react-router-dom';
import './ItemListContainer.css';

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
      .finally(() => setLoading(false));
  }, [idCategoria]);

  return (
    <div className="itemListContainer"> {/* Cambiado a "itemListContainer" */}
      <h2>Mis productos</h2>
      {loading ? <Loader /> : (
        <div className="item-list">
          <ItemList productos={productos} />
        </div>
      )}
    </div>
  );
};

export default ItemListContainer;
