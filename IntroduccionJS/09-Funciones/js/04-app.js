// Veamos la diferencia entre un método y una función...
const numero1 = 20;
const numero2 = "20";

/* Aunque sean lo mismo, la forma es como se utilizan */

console.log(parseInt(numero2)); // Esto es una función
console.log(numero1.toString()); // Esto es un método

/* Puedes ver que mientras la función toma el valor en el paréntesis, 
el método añade un punto seguido del nombre, esa es la diferencia */