//Vamos a ver la palabra this
//This se refiere al objeto que está ejecutando el código, es decir, al objeto que contiene la función que se está ejecutando en ese momento.
const producto = {
    nombre: 'Monitor 20 pulgadas',
    precio: 30,
    disponible: true,
    mostrarInfo: function() {
        return `El producto ${this.nombre} tiene un precio de ${this.precio} y su disponibilidad es ${this.disponible}`;
    }
}
