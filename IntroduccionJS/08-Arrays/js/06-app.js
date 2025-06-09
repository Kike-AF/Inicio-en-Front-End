//Agregar un elemento a un array utilizando spread operator
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
const producto3 = {
    nombre: "Teclado",
    precio: 500
};


//Para añadir un producto al carrito, utilizamos el spread operator
let resultado = [...carrito, producto];
resultado = [...resultado, producto2];
//Para añadir al inicio
resultado = [producto3, ...resultado];
console.log(resultado);