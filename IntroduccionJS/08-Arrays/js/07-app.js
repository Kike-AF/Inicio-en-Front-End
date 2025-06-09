const carrito = [];
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


const producto3 = {
    nombre: "Teclado",
    precio: 500
};
carrito.unshift(producto3);


//Como eliminar un elemento del array
// Eliminar el primer elemento
/*carrito.pop();*/


//Eliminar elemnto del centro
carrito.splice(1, 1); // Elimina el segundo elemento (índice 1)




console.log(carrito);