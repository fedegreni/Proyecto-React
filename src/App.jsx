import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NavBar } from "./Componentes/NavBar/NavBar";
import "./App.css";
import ItemListContainer from "./Componentes/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./Componentes/ItemDetailContainer/ItemDetailContainer";
import { CarritoProvider } from "./context/CarritoContext";
import Cart from "./Componentes/Cart/Cart";
import Checkout from "./Componentes/Checkout/Checkout";
import Login from "./Componentes/Login/Login"; 
import Footer from "./Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <CarritoProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route
            path="/categoria/:idCategoria"
            element={<ItemListContainer />}
          />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/login" element={<Login />} /> 
        </Routes>
        <Footer />
      </CarritoProvider>
    </BrowserRouter>
  );
}

export default App;
