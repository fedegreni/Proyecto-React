import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import Loader from "../Loader/Loader";
import { useParams } from "react-router-dom";
import { db } from "../../services/config";
import { getDocs, collection, query, where } from "firebase/firestore";
import './ItemListContainer.css'; 

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const { idCategoria } = useParams();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const misProductos = idCategoria
      ? query(collection(db, "productos"), where("IdCat", "==", idCategoria))
      : collection(db, "productos");
    setLoading(true);
    getDocs(misProductos)
      .then((res) => {
        const productos = res.docs.map((doc) => {
          const data = doc.data();
          return { id: doc.id, ...data };
        });
        setProductos(productos);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [idCategoria]);

  return (
    <div className="itemListContainer">
      <h2>Nuestros Productos</h2> 
      {loading ? (
        <Loader />
      ) : (
        <div className="item-list">
          <ItemList productos={productos} />
        </div>
      )}
    </div>
  );
};

export default ItemListContainer;
