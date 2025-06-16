/* Vamos a ver el break y el continue, el break cortará la ejecución del for loop
y el continue no permitirá interceptar un elemento y continuar con su ejecución */

for(let x=0; x<=10; x++){
    if(x === 5){
        console.log(`Estamos en el nº 5... FIN`);
        break; // Termina el bucle cuando x = 5
    }
    console.log(`Nº: ${x}`);
}

for(let x=0; x<=10; x++){
    if(x === 5){
        console.log(`Estamos en el nº 5... FIN`);
        break; // Termina el bucle cuando x = 5
    }
    console.log(`Nº: ${x}`);
}

