//Operaciones utiles con arrays
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];


//Si quieres cuantos elementos tiene un array
console.log(meses.length); // 12


//Como acceder a los elementos de un array utilizando un iterador
for (let i = 0; i < meses.length; i++) {
    console.log(meses[i]);
}
