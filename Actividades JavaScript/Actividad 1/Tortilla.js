// La torilla lleva 200gr de papas por persona, por cada kilo de estas hace falta 5 huevos y 300gr de cebolla

// Calcula las cantidades de ingredientes para el nº de personas

/* Para 5 comensales => 1 kg de papas, 5 huevos y 300gr de cebolla */

function calcularIngredientes(personas) {
    const papasPorPersona = 200; // gramos
    const papasPorKg = 1000;
    const huevosPorKgPapas = 5;
    const cebollaPorKgPapas = 300; // gramos

    const totalPapas = personas * papasPorPersona;
    const kgPapas = totalPapas / papasPorKg;
    const huevos = kgPapas * huevosPorKgPapas;
    const cebolla = kgPapas * cebollaPorKgPapas;

    console.log(`Para ${personas} comensales necesitas:`);
    console.log(`- ${totalPapas}g de papas`);
    console.log(`- ${huevos} huevos`);
    console.log(`- ${cebolla}g de cebolla`);
}

calcularIngredientes(7); 
