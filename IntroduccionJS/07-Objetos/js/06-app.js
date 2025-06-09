//Recuerda que una variable con const no puede ser reasignada, pero si podemos modificar sus propiedades


/*const producto = "Monitor 20 pulgadas";
producto= 'tablet';
console.log(producto); // TypeError: Assignment to constant variable.*/


//En el caso de los objetos vamos a ver que tienen un comportamiento diferente, ya que podemos modificar sus propiedades, pero no podemos reasignar el objeto completo.
const producto = {
    nombre: 'Monitor 20 pulgadas',
    precio: 30,
    disponible: true,
}


console.log(producto);


producto.disponible = false; // Modificamos la propiedad disponible del objeto producto
console.log(producto); // { nombre: 'Monitor 20 pulgadas', precio: 30, disponible: false }