// Como se comunican las funciones entre sí

/* Tus funciones se van a comunicar, en lugar de tener unan gran función 800 líneas es recomendable 
dividirlas en pequeñas partes, realizen una operaciónm y se van hacia otra función */
iniciarApp();

function iniciarApp(){
    console.log(`iniciando App...`);
    segundaFunction();
}

function segundaFunction(){
    console.log(`Desde la segunda función`);
    usuarioIdentificado(`Chorisidro`);
}

function usuarioIdentificado(usuario){
    console.log(`Usuario Identificado...`);
    console.log(`Usuario Identificado con éxito ${usuario}`);
}