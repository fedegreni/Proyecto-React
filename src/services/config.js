
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDUwz-6UUJoAEfCUqnJVUy_sbQOC6d2ftI",
  authDomain: "proyecto-react-2d8ad.firebaseapp.com",
  projectId: "proyecto-react-2d8ad",
  storageBucket: "proyecto-react-2d8ad.appspot.com",
  messagingSenderId: "964467243172",
  appId: "1:964467243172:web:8de4380f8bdab81aaa4e31"
};




const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

// const misProductos = [
//   {
      
//       nombre: 'Remera amarilla',
//       stock: 150,
//       precio: 4000,
//       img: '/assets/remera-amarilla.jpg', 
//       IdCat: "remeras"
//   },
//   {
      
//       nombre: 'Zapatilla bullpadel',
//       stock: 50,
//       precio: 80000,
//       img: '/assets/zapatilla-bullpadel.jpg', 
//       IdCat: "zapatillas"
//   },
//   {
      
//       nombre: 'Pantalon azul',
//       stock: 100,
//       precio: 7000,
//       img: '/assets/pantalon-azul.jpg', 
//       IdCat: "pantalones"
//   },
//   {
      
//       nombre: 'Remera negra',
//       stock: 80,
//       precio: 4000,
//       img: '/assets/remera-negra.jpg', 
//       IdCat: "remeras"
//   },
// ];

// import { doc, collection, writeBatch } from "firebase/firestore";

// const subirProductos = async () => {
//   const batch = writeBatch(db);
//   const productosRef = collection(db, 'productos');
//   misProductos.forEach((producto) => {
//     const nuevoDoc = doc(productosRef)
//     batch.set(nuevoDoc, producto);
// })
//   try {
//     await batch.commit();
//     console.log('Se cargaron los productos correctamente');
//   } catch (error) {
//     console.log(error);
//   }


// }

// subirProductos()