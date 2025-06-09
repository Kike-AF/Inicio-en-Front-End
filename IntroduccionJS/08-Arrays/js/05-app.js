//Supongamos que creamos un carrito de compras desde la consola
const carrito = [];
//Agregamos un producto al carrito
const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 500
};
const producto2 = {
    nombre: "Celular",
    precio: 500
};
carrito.push(producto);
carrito.push(producto2);


//Añadir al inicio del array
const producto3 = {
    nombre: "Teclado",
    precio: 500
};
carrito.unshift(producto3);


console.log(carrito);