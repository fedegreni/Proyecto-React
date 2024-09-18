const misProductos=[
    {
        id: 1,
        nombre: 'Remera amarilla',
        precio: 4000,
        img: 'src/assets/remera-amarilla.jpg',
    },
    {
        id: 2,
        nombre: 'Zapatilla bullpadel',
        precio: 80000,
        img: 'src/assets/zapatilla-bullpadel.jpg',
    },
    {
        id: 3,
        nombre: 'Pantalon azul',
        precio: 7000,
        img: 'src/assets/pantalon-azul.jpg',
    },
    {
        id: 4,
        nombre: 'Remera negra',
        precio: 4000,
        img: 'src/assets/remera-negra.jpg',
    },
]

export const getProductos = () => {
    return new Promise((resolve,) => {
        setTimeout(() => {
            resolve(misProductos)
        }, 2000)
    })
}

export const getUnProducto = (id) =>{
    return new Promise((resolve,) => {
        setTimeout(()=>{
            const producto = misProductos.find(item => item.id === id)
            resolve(producto)
        }, 2000)
    })
} 