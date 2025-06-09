//Como hacer destructuring de un objeto dentro de otro objeto
const producto = {
    nombre: 'Monitor 20 pulgadas',
    precio: 30,
    disponible: true,
    informacion: {
        peso: '1kg',
        medida: '1m',
    },
}


const { nombre, informacion, informacion: { peso, medida } } = producto;
console.log(nombre); // Monitor 20 pulgadas
console.log(informacion); // { peso: '1kg', medida: '1m' }
console.log(peso); // 1kg
console.log(medida); // 1m