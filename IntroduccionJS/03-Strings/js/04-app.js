// Vamos a ver 3 métodos más replace, slice y repeat
// Replace
const producto = 'Monitor 32 pulgadas';
console.log(producto.replace('32','45')); // Reemplaza el 32 por el 45
console.log(producto.replace("pulgadas",'"'));

// Slice nos va a permitir extraer una porción de la cadena
console.log(producto.slice(0,10)); // Extrae del 0 al 10
console.log(producto.slice(8)); // Extrae desde el 8 hasta el final
console.log(producto.slice(2, 10)); // Extrae del 2 al 10

console.log(producto.slice(2,1)); // No hace nada porque el 2 es mayor que el 1

// Existe un método similar que es substring
console.log(producto.substring(0,10)); // Extrae del 0 al 10
console.log(producto.substring(2, 1)); // Va a cortar desde el 2 al 1

const nombre = 'Kike';
console.log(nombre.substring(0,1));
console.log(nombre.charAt(0));

// Repeat te va a permitir repetir una cadena de texto
const producto1 = 'Monitor 32 pulgadas';
const texto = 'En promoción';
console.log(producto1.repeat(3));
console.log(producto1.repeat(2,2)); // Va a redondear a entero
console.log(`${producto1}${texto} !!!`);

//split
const actividad = 'El hermano Isidro dice que está aprendiendo JavaScript'
console.log(actividad.split(" "));
const actividad1 = 'furbol, natación, leer, baloncesto, fórmula1, ciclismo';
console.log(actividad1.split(", "));