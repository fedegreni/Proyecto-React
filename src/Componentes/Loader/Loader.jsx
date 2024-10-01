import { Spinner } from "react-bootstrap";
import "./Loader.css";

export const Loader = () => {
  return (
    <div className="loader">
      <Spinner animation="border" variant="primary" role="status"></Spinner>
      <span className="visually-hidden">Cargando...</span>
    </div>
  );
};

export default Loader;
