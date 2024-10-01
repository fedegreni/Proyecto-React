import  { useState, useContext } from 'react';
import { CarritoContext } from '../../context/CarritoContext';
import { db } from '../../services/config';
import { addDoc, collection, updateDoc, doc, getDoc } from 'firebase/firestore';
import Swal from 'sweetalert2';
import './Checkout.css'; 

const Checkout = () => {
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [telefono, setTelefono] = useState("");
    const [email, setEmail] = useState("");
    const [emailConfirmacion, setEmailConfirmacion] = useState("");
    const [error, setError] = useState("");
    const [orderId, setOrderId] = useState("");

    const { carrito, total, vaciarCarrito } = useContext(CarritoContext);

    const manejadorFormulario = async (e) => {
        e.preventDefault();
        setError(""); 

        
        if (!nombre || !apellido || !telefono || !email || !emailConfirmacion) {
            setError("Por favor completa todos los campos");
            return;
        }
        if (email !== emailConfirmacion) {
            setError("Los emails no coinciden");
            return;
        }

        
        const order = {
            items: carrito.map(producto => ({
                id: producto.item.id,
                nombre: producto.item.nombre,
                cantidad: producto.cantidad
            })),
            total,
            fecha: new Date(),
            nombre,
            apellido,
            telefono,
            email
        };

        try {
            
            await Promise.all(
                order.items.map(async (productoOrden) => {
                    const productoRef = doc(db, "productos", productoOrden.id);
                    const productoDoc = await getDoc(productoRef);
                    const stockActual = productoDoc.data().stock;
        
                    await updateDoc(productoRef, {
                        stock: stockActual - productoOrden.cantidad
                    });
                })
            );

            
            const docRef = await addDoc(collection(db, "ordenes"), order);
            setOrderId(docRef.id);

            
            vaciarCarrito(); 

            Swal.fire({
                title: 'Éxito!',
                text: 'Su pedido ha sido realizado con éxito!',
                icon: 'success'
            });
        } catch (error) {
            setError("Hubo un error al generar el pedido", error);
        }
    };

    return (
        <div className="checkout-container">
            <h2 className="checkout-title">Checkout</h2>
            <form onSubmit={manejadorFormulario}>
                {carrito.map(producto => (
                    <div className="checkout-product" key={producto.item.id}>
                        <div className="product-details">
                            <p className="product-name">{producto.item.nombre}</p>
                            <p className="product-price">${producto.item.precio}</p>
                            <p className="product-quantity">Cantidad: {producto.cantidad}</p>
                        </div>
                        <div className="product-total">
                            <p>Total: ${producto.item.precio * producto.cantidad}</p>
                        </div>
                    </div>
                ))}
                <div>
                    <label htmlFor="">Nombre</label>
                    <input type="text" onChange={(e) => setNombre(e.target.value)} value={nombre} />
                </div>
                <div>
                    <label htmlFor="">Apellido</label>
                    <input type="text" onChange={(e) => setApellido(e.target.value)} value={apellido} />
                </div>
                <div>
                    <label htmlFor="">Teléfono</label>
                    <input type="text" onChange={(e) => setTelefono(e.target.value)} value={telefono} />
                </div>
                <div>
                    <label htmlFor="">Email</label>
                    <input type="email" onChange={(e) => setEmail(e.target.value)} value={email} />
                </div>
                <div>
                    <label htmlFor="">Confirmar Email</label>
                    <input type="email" onChange={(e) => setEmailConfirmacion(e.target.value)} value={emailConfirmacion} />
                </div>
                {error && <p className="error-message">{error}</p>}
                <button type='submit'>Confirmar Compra</button>
                {orderId && (
                    <strong className="success-message">Gracias por su compra! Su número de orden es: {orderId}</strong>
                )}
            </form>
        </div>
    );
};

export default Checkout;
