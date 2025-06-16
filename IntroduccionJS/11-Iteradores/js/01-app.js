/* Algunas veces vas a desear ejecutar tu código hasta que una condición se cumpla o se deje de cumplir */
/* Los For loops tienen esa característica, se ejecutan hasta que el código deja de cumplir esa condición */

// Inicializar el for
// Condición
// Incremento
/* for(let x=0; x<=10; x++){
    console.log(`Nº: ${x}`);
} */

    for(let a=0; a<=10; a++){
        if(a % 2 === 0){
            console.log(`Nº: ${a} es par`);
        }else{
            console.log(`Nº: ${a} es impar`);
        }
}

// Los bucle for son útiles  cuando tienen un arreglo, digamos un carrito de compras.

const carrito = [
    { nombre: 'Monitor 32 pulgadas', precio: 500 },
    { nombre: 'Televisión 55 pulgadas', precio: 700 },
    { nombre: 'Tablet', precio: 300 },
    { nombre: 'Audífonos', precio: 200 },
    { nombre: 'Teclado', precio: 100 },
    { nombre: 'Movil', precio: 800 }
];

for(let x=0; x<carrito.length; x++){
    console.log(`carrito[x].nombre}`);
}

/* En este caso, njestro for loop corre hasat que la condición se cumpla */