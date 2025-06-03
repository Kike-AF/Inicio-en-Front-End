// Vamos a ver 3 metodos para los strings
const producto = '           Monitor 32 Pulgadas          ';
console.log(producto);
console.log(producto.length); // Longitud del string

// Eliminar el inicio
console.log(producto.trimStart()); // Elimina los espacios al inicio

// Eliminar el final
console.log(producto.trimEnd()); // Elimina los espacios al final

// Los metodos en JavaScript se pueden encadenar, es decir, se colocan uno tras otro

console.log(producto.trimStart().trimEnd()); // Elimina los espacios al inicio y al final

// Un metodo que ya es de las versiones antiguas de JavaScript

console.log(producto.trim().length); // Elimina los espacios al inicio y al final y muestra la longitud del string