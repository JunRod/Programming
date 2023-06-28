document.addEventListener("DOMContentLoaded", function(){
    crearGaleria();
})

function crearGaleria(){
    const galeria = document.querySelector(".galeria-imagenes");

    for(let i = 1; i <=12 ; i++){
        const imagen = document.createElement("IMG");
        imagen.src = `build/img/thumb/${i}.webp`;
        imagen.dataset.imagenId = i;
        /*dataset.imagenId genera un atributo html personalizado */

        imagen.onclick = mostrarImagen

        const lista = document.createElement("LI");
        lista.appendChild(imagen);

        galeria.appendChild(lista)
    }
}

//Esta es una funciona con nombre (1)
function mostrarImagen(e) {
    const id = Number(e.target.dataset.imagenId)

    //Generar la imagen
    const imagen = document.createElement("IMG")
    imagen.src = `build/img/grande/${id}.webp`

    const overlay = document.createElement("DIV");
    overlay.appendChild(imagen);
    overlay.classList.add("overlay")

    //cuando se da click, cerrar imagen
    overlay.onclick = function() {
        overlay.remove();
        body.classList.remove("fijar-body")
    }

    //boton para cerrar la imagenId
    const cerrarImagen = document.createElement("P")
    cerrarImagen.textContent = "X";
    cerrarImagen.classList.add("btn-cerrar")

    overlay.appendChild(cerrarImagen);

    //Funcioanlidad: Cuando se presiona, se cierra la imagen
    cerrarImagen.onclick = function() {
        //Esta es una funciona anonima(2), como no hay nesecidad de una funcion grande, pues ponemos el codigo aqui.
        overlay.remove();
        body.classList.remove("fijar-body")
    }


    //mostrar en el HTML element
    const body = document.querySelector("body")
    body.appendChild(overlay)
    body.classList.add("fijar-body")

    /*Cuando queremos usar overflow: hidden, es decir eliminar lo de alrededor de un elemento dependiendo del contenedor, en este caso el contenedor el viewport (lo que podemos ver) del body, entonces el efecto hará en el body, ya que es lo que queremos dejar fuera del contenedor*/

    /*con append child vamos a agregar las variables de JS ya dentro de HTML*/
}
