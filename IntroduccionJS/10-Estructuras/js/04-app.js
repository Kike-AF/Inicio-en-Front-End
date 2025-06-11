// Algunas veces vas a desear revisar si se cumple más de una condición

let rol = 'ADMIN';

if(rol === 'ADMIN'){
    console.log(`El usuario puede añadir, editar y ver toda la información`);
}else if(rol === 'EDITOR'){
    console.log(`El usuario solo puede editar y ver todos los registros`);
}else{
    console.log(`El usuario invitado solo puede ver la información`);
}
/* El problema de los else if es que si agregas multiples puede llegar a ser muy confuso de leer */

/* let rol = 'ADMIN';*/

if(rol === 'ADMIN'){
    console.log(`El usuario puede añadir, editar y ver toda la información`);
}else if(rol === 'EDITOR'){
    console.log(`El usuario solo puede editar y ver todos los registros`);
}else if(rol === 'AUTOR'){  
    console.log(`El usuario solo puede registrar usuarios`);
}else{
    console.log(`El usuario invitado solo puede ver la información`)
}