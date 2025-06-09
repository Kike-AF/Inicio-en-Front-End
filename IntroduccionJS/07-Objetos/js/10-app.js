const producto = {
    nombre: 'Monitor 20 pulgadas',
    precio: 30,
    disponible: true,
}
const medidas = {
    peso: '1kg',
    medida: '1m',
}
// Otra forma de unir dos objetos es con el operador de propagación (spread operator)
const resultado = { ...producto, ...medidas };
console.log(resultado);
