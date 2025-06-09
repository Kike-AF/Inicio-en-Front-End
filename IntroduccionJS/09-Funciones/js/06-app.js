// Parametros default
/* Algunasveces mandaras a llamar a una función que no tenga argumentos que se requieren 
(Ej: mi perfil se llama facebook pero no están llenos todos los campos por eso vienen bien los parametros porm default) */

function saludos(nombre = 'Desconocido', apellido = ''){ // Nombre y apellido son parámetros, valores que se le pasan a la función
    console.log(`Hola ${nombre} ${apellido}`);
}
saludos('Óscar', 'Alviárez'); // Óscar y Alviárez son argumentos, valores reales
saludos('Óscar');
saludos();