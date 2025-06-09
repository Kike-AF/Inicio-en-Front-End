//Existe otro method llamado Object.seal() que nos permite sellar un objeto, es decir, no podremos agregar nuevas propiedades pero sí modificar las existentes.
const producto = {
    nombre: 'Monitor 20 pulgadas',
    precio: 30,
    disponible: true,
}
Object.seal(producto);
producto.nombre = 'Tablet'; // Se modificará
delete producto.precio; // No se eliminará
producto.imagen = 'imagen.jpg'; // No se agregará
console.log(producto);


//Verificamos si un objeto está sellado
console.log(Object.isSealed(producto)); // true
console.log(producto);