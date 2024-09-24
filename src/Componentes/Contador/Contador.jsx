import { useState } from "react";
import './Contador.css'; // Asegúrate de importar el CSS

const Contador = ({ inicial, stock, funcionAgregar }) => {
  const [contador, setContador] = useState(inicial);

  const sumarContador = () => {
    if (contador < stock) {
      setContador(contador + 1);
    }
  };

  const restarContador = () => {
    if (contador > inicial) {
      setContador(contador - 1);
    }
  };

  return (
    <div className="contador-container">
      <div className="contador-buttons">
        <button className="contador-button" onClick={restarContador}> - </button>
        <strong className="contador-display">{contador}</strong>
        <button className="contador-button" onClick={sumarContador}> + </button>
      </div>
      <button className="agregar-button" onClick={() => funcionAgregar(contador)}>Agregar al carrito</button>
    </div>
  );
};

export default Contador;
