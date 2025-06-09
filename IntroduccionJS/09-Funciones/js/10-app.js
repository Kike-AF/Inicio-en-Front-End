/* Vamos a ver arrow functions, son otra forma de declarar funciones y fueron agregadas hace poco en las ultimas versiones */

const aprendiendo = function(){
    console.log('Aprendiendo JavaScript');
}

const aprendiendo1 = () => console.log('Aprendiendo JavaScript'); // No requiere llaves
const aprendiendo2 = () =>'Aprendiendo JavaScript'; // No retorna valor

console.log(aprendiendo());