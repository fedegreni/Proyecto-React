import { NavBar } from './Componentes/NavBar/NavBar';
import './App.css';
import { ItemListContainer } from './Componentes/ItemListContainer/ItemListContainer';

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting="Mis productos"/>
     
    </>
  );
}

export default App;