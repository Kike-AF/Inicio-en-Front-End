const producto = {
    nombre: 'Monitor 20 pulgadas',
    precio: 30,
    disponible: true,
}


console.log(producto);
//Para hacer esto utilizaremos un object method llamado Object.freeze() que nos permite congelar un objeto, es decir, no podremos modificar sus propiedades ni agregar nuevas propiedades.


Object.freeze(producto);
producto.disponible = false; // No se modificará
producto.imagen = "imagen.jpg"; // No se agregará
delete producto.nombre; // No se eliminará


console.log(Object.isFrozen(producto)); // true
console.log(producto);
