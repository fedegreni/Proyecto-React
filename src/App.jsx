import { BrowserRouter, Route, Routes } from 'react-router-dom'; 
import { NavBar } from './Componentes/NavBar/NavBar';
import './App.css';
import ItemListContainer from './Componentes/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Componentes/ItemDetailContainer/ItemDetailContainer';
import { CarritoProvider } from './context/CarritoContext';
import Cart from './Componentes/Cart/Cart';
import { Loader } from './Componentes/Loader/Loader';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <BrowserRouter> 
      <CarritoProvider>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} /> 
        <Route path="/categoria/:idCategoria" element={<ItemListContainer />} /> 
        <Route path="/item/:id" element={<ItemDetailContainer />} /> 
        <Route path="/cart" element={<Cart/>}></Route>
        <Route path="*" element={<h2>Sitio en construccion</h2>} />
      </Routes>
      </CarritoProvider>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;