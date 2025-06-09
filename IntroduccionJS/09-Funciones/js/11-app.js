// Parametros en arrow functions

// Parametros
const aprendiendo = (tecnologia) => console.log(`aprendiendo: ${tecnologia}`);
aprendiendo('JavaScript');

// Si es un sólo parámetro no ocupamos el paréntesis
const aprendiendo1 = tecnologia => console.log(`aprendiendo: ${tecnologia}`);
aprendiendo1('JavaScript');

// Múltiples parámetros si requieren paréntesis
const aprendiendo2 = (tecno1, tecno2) => console.log(`aprendiendo: ${tecno1} y ${tecno2}`);
aprendiendo2('JS', 'CSS');