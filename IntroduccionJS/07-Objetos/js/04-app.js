//Un Objeto puede contener cualquier tipo de dato, incluso otros objetos


const producto = {
    nombre: 'Monitor 20 pulgadas',
    precio: 30,
    disponible: true,
    informacion: {
        peso: '1kg',
        medida: '1m',
    },
}


console.log(producto); // podemos ver que tene un objeto dentro de otro objeto


console.log(producto.informacion); // podemos acceder al objeto informacion
console.log(producto.informacion.peso);
console.log(producto.informacion.medida);