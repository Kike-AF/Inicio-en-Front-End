// Funciones que retornan valores
/* Actualmente hemos tenido funciones que envían datos a la consola, cuando veamos la parte del DOM
algunas funciones van a validar formularios y seguramente ejecutaran todo el código ahí, pero tamb
tendremos funciones que retornan valores para pasarlos a otras funciones o hacer algo más... */

function sumar(a, b){
    return a + b;
}
const resultado = sumar(1, 3)
console.log(resultado);

// Ejemplo más avanazado

let total = 0;
function agregarCarrito(precio){
    return total += precio;
}
function calcularImpuestos(total){
    return 1.15 * total;
}
total = agregarCarrito(200);
total = agregarCarrito(300);
total = agregarCarrito(400);
console.log(total);

const totalPagar = calcularImpuestos(total);
console.log(`El total a pagar es de : ${totalPagar}`);