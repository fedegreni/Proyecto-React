const misProductos=[
    {
        id: 1,
        nombre: 'Remera amarilla',
        stock: 10,
        precio: 4000,
        img: '../src/assets/remera-amarilla.jpg',
        IdCat: "remeras"
    },
    {
        id: 2,
        nombre: 'Zapatilla bullpadel',
        stock: 5,
        precio: 80000,
        img: '../src/assets/zapatilla-bullpadel.jpg',
        IdCat: "zapatillas"
    },
    {
        id: 3,
        nombre: 'Pantalon azul',
        stock: 15,
        precio: 7000,
        img: '../src/assets/pantalon-azul.jpg',
        IdCat: "pantalones"
    },
    {
        id: 4,
        nombre: 'Remera negra',
        stock: 20,
        precio: 4000,
        img: '../src/assets/remera-negra.jpg',
        IdCat: "remeras"
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
        }, 100)
    })
} 


export const getProductosPorCategorias = (idCategoria) => {
    return new Promise((resolve,) => {
        setTimeout(() => {
            const producto = misProductos.filter(item => item.IdCat === idCategoria)
            resolve(producto)
        }, 100)
    })
}