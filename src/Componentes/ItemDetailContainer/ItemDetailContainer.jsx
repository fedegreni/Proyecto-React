import { useState, useEffect } from 'react';
// import { getUnProducto } from '../../asynmock'; 
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom'; 
import './ItemDetailContainer.css'; 
import { db } from '../../services/config';
import { getDoc, doc} from 'firebase/firestore';


const ItemDetailContainer = () => {
  const [producto, setProducto] = useState(null);
  const { id } = useParams(); 

useEffect(() => {
  const nuevoDoc = doc(db, 'productos', id);
  getDoc(nuevoDoc)
    .then((res) => {
      const data = res.data()
      const nuevoProducto = { id: res.id, ...data }
      setProducto(nuevoProducto)
    })
    .catch((error) => console.log(error))

}, [id]);


  return (
    <div className="item-detail-container"> 
      {producto ? <ItemDetail {...producto} /> : <p>Cargando...</p>} 
    </div>
  );
};

export default ItemDetailContainer;
