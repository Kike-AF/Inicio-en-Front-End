// Muy similar al forEach

const carrito = [
    { nombre: 'Monitor 20 pulgadas', precio: 500 },
    { nombre: 'Televisión 50 pulgadas', precio: 700 },
    { nombre: 'Tablet', precio: 300 },
    { nombre: 'Audífonos', precio: 200 },
    { nombre: 'Teclado', precio: 50 },
    { nombre: 'Celular', precio: 500 }
];

// Existe un método llamado map, la diferencia es que map te crea un array nuevo...

const nuevoArray = carrito.map(function(producto){
    return `Articulo: ${producto.nombre} Precio: ${producto.precio}`;
})

const nuevoArray2 = carrito.forEach(function(producto){
    return `Articulo: ${producto.nombre} Precio: ${producto.precio}`;
})

console.log(nuevoArray);
console.log(nuevoArray2);
