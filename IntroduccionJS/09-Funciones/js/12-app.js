//ForEach y Map con arrow functions
const carrito = [
    { nombre: 'Monitor 20 pulgadas', precio: 500 },
    { nombre: 'Televisión 50 pulgadas', precio: 700 },
    { nombre: 'Tablet', precio: 300 },
    { nombre: 'Audífonos', precio: 200 },
    { nombre: 'Teclado', precio: 100 },
    { nombre: 'Celular', precio: 400 }
];
const nuevoArray = carrito.map(producto => `Articulo: ${producto.nombre} Precio: $${producto.precio}`);
const nuevoArray2 = carrito.forEach(producto => `Articulo: ${producto.nombre} Precio: $${producto.precio}`);
console.log(nuevoArray);
console.log(nuevoArray2); //undefined porque forEach no retorna nada, solo itera
