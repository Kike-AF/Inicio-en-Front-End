//Array methods
const carrito = [
    { nombre: 'Monitor 20 pulgadas', precio: 500 },
    { nombre: 'Televisión 50 pulgadas', precio: 700 },
    { nombre: 'Tablet', precio: 300 },
    { nombre: 'Audífonos', precio: 200 },
    { nombre: 'Teclado', precio: 50 },
    { nombre: 'Celular', precio: 500 }
];


//Recorrer un array de la forma tradicional y mostrar su contenido
for (let i = 0; i < carrito.length; i++) {
    console.log(`Articulo: ${carrito[i].nombre} Precio: ${carrito[i].precio}`);
};


//Recorrer un array con forEach
carrito.forEach(function(producto) {
    console.log(`Articulo: ${producto.nombre} Precio: ${producto.precio}`);
});
