import { NavBar } from './Componentes/NavBar/NavBar';
import './App.css';
import  ItemListContainer  from './Componentes/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Componentes/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom'; // Importamos Routes y Route

function App() {
  return (
    <BrowserRouter> {/* Envolvemos todo en BrowserRouter */}
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} /> {/* Ruta principal */}
        <Route path="/category/:id" element={<ItemListContainer />} /> {/* Ruta por categoría */}
        <Route path="/item/:id" element={<ItemDetailContainer />} /> {/* Detalle de producto */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
