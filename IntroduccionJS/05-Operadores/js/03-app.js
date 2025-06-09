/* En JavaScript existen varios tipos de datos primitivos a los que hemos visto, además
del string, number y booleanos, y existen un par de ellos llamados undefined y null */

// Null y undefined

// Ejemplo con undefined
let numero;

console.log(numero); // La varieble está definida pero su valor no
console.log(typeof numero);

// En el caso de Null es más bien asignarlo
let numero2 = null;
console.log(numero2);
console.log(typeof numero2); // Esto nos dice que es un objeto

// Comparación entre Null y Undefined
console.log(numero == numero2) // False
