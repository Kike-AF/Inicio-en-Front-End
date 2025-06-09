//Como asignar variables a un objeto
const producto = {
    nombre: 'Monitor 20 pulgadas',
    precio: 30,
    disponible: true,
}


//const nombre = producto.nombre;
//Otra forma mas nueva de hacerlo es object destructuring
//Destructuring significa desestructurar un objeto, es decir, extraer propiedades de un objeto y asignarlas a variables
const {nombre} = producto;


console.log(nombre);
//Si deseamos asignar varias propiedades a la vez, podemos hacerlo de la siguiente manera
const {precio, disponible} = producto;
console.log(precio);
console.log(disponible);
