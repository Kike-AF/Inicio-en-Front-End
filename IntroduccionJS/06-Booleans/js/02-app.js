// Comparar booleanos es lo mismo que con los números y los strings
const boolean1 = true;
const boolean2 = false;

console.log(boolean1 === boolean2); // Comparar 2 variables

console.log(boolean1 === true); // Comparar si un booleano es verdadero
console.log(boolean2 === true); // Comparar si un booleano es falso

/* Aún no hemos llegado ahí, pero muchas personas cometen el siguiente 
error cuando escribe código en JavaScripts (if) */
if(boolean1 === true){
    console.log('si es true')
}else{
    console.log('no, no es true')
}