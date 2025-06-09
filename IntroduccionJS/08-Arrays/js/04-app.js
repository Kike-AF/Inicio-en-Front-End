//Al igual que los objetos un array se puede modificar a pesar de utilizar la palabra reservada const
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
meses[0] = 'Nuevo mes';


//Tambien puedo añadir
meses[12] = 'Ultimo mes';
console.log(meses);
