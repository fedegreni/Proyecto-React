import { BrowserRouter, Route, Routes } from 'react-router-dom'; 
import { NavBar } from './Componentes/NavBar/NavBar';
import './App.css';
import ItemListContainer from './Componentes/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Componentes/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <BrowserRouter> 
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} /> 
        <Route path="/categoria/:idCategoria" element={<ItemListContainer />} /> 
        <Route path="/item/:id" element={<ItemDetailContainer />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
