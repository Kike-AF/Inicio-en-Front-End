/* Vamos a ver los métodos */
//Metodos de propiedad
const reproductor = {
    reproducir: function(id) {
        console.log(`Reproduciendo canción con el id: ${id}`);
    },
    pausar: function() {
        console.log('Pausando la canción');
    },
    borrar: function(id) {
        console.log(`Borrando canción con el id: ${id}`);
    },
    reproducirPlaylist: function(nombre) {
        console.log(`Reproduciendo la playlist: ${nombre}`);
    },


}

reproductor.reproducir(30);
reproductor.pausar();
reproductor.borrar(20);
reproductor.crearPlaylist('Mi Playlist Favorita');
reproductor.reproducirPlaylist('Mi Playlist Favorita');