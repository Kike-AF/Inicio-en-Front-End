/* Existe otra forma de comparar si un valor es verdadero
 y es por medio del operador ternario */
 const boolean1 = true;
 const boolean2 = false;

 if(boolean1){
    console.log('si es true')
 }else{
    console.log('no es true')
 }
 // El código anterior es fácil de leer pero se puede simplificar más
 console.log(boolean1 ? "El booleano es verdadero": "El booleano es falso")