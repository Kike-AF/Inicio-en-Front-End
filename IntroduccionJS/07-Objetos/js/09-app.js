//Vamos a ver como unir dos objetos


const producto = {
    nombre: 'Monitor 20 pulgadas',
    precio: 30,
    disponible: true,
}
const medidas = {
    peso: '1kg',
    medida: '1m',
}


//Una forma de unir dos objetos es con Object.assign() que recibe como primer argumento un objeto destino y luego los objetos que queremos unir
const resultado = Object.assign(producto, medidas);
console.log(resultado);