// varUno = 10, varDos = 30 y al final varUno = 30, varDos = 10

let varUno = 10;
let varDos = 30;

let cambio = varUno;
varUno = varDos;
varDos = cambio;

console.log(varUno)
console.log(varDos)