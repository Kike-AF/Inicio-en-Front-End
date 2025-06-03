/* Los Strings o Cadenas de Texto represenatn un texto que se puede asignar a una variable,
existen tres formas de crear un Strings */
const producto = 'Monitor 32 Pulgadas';
const producto2 = String('Monitor 32 Pulgadas');

/* En la siguiente forma es menos comun */
const producto3 = new String('Monitor 32 Pulgadas'); // Esto crea un objeto cadena
// console.log(producto);
// console.log(producto2);
// console.log(producto3);

// Vamos a ver algunas reglas para crear Strings
const producto4 = 'Monitor 50 Pulgadas'; // Utilizando comillas simples
const producto5 = "Monitor 50 Pulgadas"; // Utilizando comillas dobles

const producto6 = "Monitor 32\""; 
console.log(producto6); // Escapando comillas dobles dentro de comillas dobles