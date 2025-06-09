// Arrow functions en métodos de propiedad

const reproductor = {
    cancion: '',
    reproducir: id => console.log(`Reproduciendo canción con el id: ${id}`),
    pausar: () => console.log('Pausando...'),
    borrar: id => console.log(`Borrando canción con el id: ${id} `),
    creaPlaylist: nombre => console.log(`Creando la playlist: ${nombre}`),
    reproducirPlaylist: nombre => console.log(`Reproduciendo la playlist: ${nombre}`),

    // Get y Set es para asignar un valor y get es para obtener un valor
    set nuevaCancion(cancion) {
    this.cancion = cancion;
    console.log(`Añadiendo ${cancion}`);
},
get obtenerCancion() {
    console.log(`Reproduciendo: ${this.cancion}`);
}
}

reproductor.nuevaCancion = 'La bilirrubina';
reproductor.obtenerCancion;
reproductor.reproducir(25);
reproductor.pausar();


