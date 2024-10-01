// src/context/CarritoContext.js
import { useState, createContext } from "react";
import Swal from "sweetalert2";

export const CarritoContext = createContext({
    carrito: [],
    total: 0,
    cantidadTotal: 0,
});

export const CarritoProvider = ({ children }) => {
    const [carrito, setCarrito] = useState([]);
    const [total, setTotal] = useState(0);
    const [cantidadTotal, setCantidadTotal] = useState(0);

    const agregarAlCarrito = (item, cantidad) => {
        const productoExistente = carrito.find((prod) => prod.item.id === item.id);

        if (!productoExistente) {
            setCarrito((prev) => [...prev, { item, cantidad }]);
            setTotal((prev) => prev + item.precio * cantidad);
            setCantidadTotal((prev) => prev + cantidad);
        } else {
            const carritoActualizado = carrito.map((prod) => {
                if (prod.item.id === item.id) {
                    return { ...prod, cantidad: prod.cantidad + cantidad };
                } else {
                    return prod;
                }
            });
            setCarrito(carritoActualizado);
            setTotal((prev) => prev + item.precio * cantidad);
            setCantidadTotal((prev) => prev + cantidad);
        }
    };

    const eliminarProducto = (id) => {
        const productoEliminado = carrito.find((prod) => prod.item.id === id);
        const carritoActualizado = carrito.filter((prod) => prod.item.id !== id);

        setCarrito(carritoActualizado);
        setCantidadTotal((prev) => prev - productoEliminado.cantidad);
        setTotal(
            (prev) =>
                prev - productoEliminado.item.precio * productoEliminado.cantidad
        );
    };

    const vaciarCarrito = () => {
        Swal.fire({
            title: "¿Estás seguro?",
            text: "Se eliminarán tus productos!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Sí, estoy seguro!"
        }).then((result) => {
            if (result.isConfirmed) {
                setCarrito([]); 
                setTotal(0); 
                setCantidadTotal(0); 

                Swal.fire({
                    title: "Eliminado!",
                    text: "Tus productos fueron eliminados...",
                    icon: "success"
                });
            }
        });
    };

    return (
        <CarritoContext.Provider
            value={{
                carrito,
                total,
                cantidadTotal,
                agregarAlCarrito,
                eliminarProducto,
                vaciarCarrito,
            }}
        >
            {children}
        </CarritoContext.Provider>
    );
};

export default CarritoContext;
