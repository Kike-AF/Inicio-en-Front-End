// Vamos a aprender a acceder a la propiedades de un objeto y a añadir nuevas propiedades

const producto = {
    nombre : 'Monitor 20 pulgadas',
    precio : 30,
    disponible: true,
};

console.log(producto);
// SUpongamos que queremos acceder al nombre, en los objetos de JavaScript
// Existe algo llamado la sintaxis de punto, que nos permite acceder a las propiedades de un objeto

console.log(producto.nombre);
console.log(producto.precio);
console.log(producto.disponible);

// Otra forma menos común
console.log(producto['nombre'])

// Añadir nuevas propiedades a un objeto
// Para añadirlas se utiliza el punto

producto.imagen = "imagen.jpg"

// Finalmente, podemos eliminar propiedades de un objeto utilizando la palabra clave delete
delete producto.disponible;
console.log(producto);