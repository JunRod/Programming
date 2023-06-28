// //querySelector
// const heading = document.querySelector(".header__texto h2") // 0 o 1
// heading.textContent = "Nuevo Texto xd"
// console.log(heading.textContent)

// const enlaces = document.querySelectorAll(".navegacion a")
// enlaces[0].textContent = "xdxd"

// //crear Elementos con HTML.
// const nuevoEnlace = document.createElement("A")
// nuevoEnlace.href = "https://google.com"
// nuevoEnlace.textContent = "Contenido"
// nuevoEnlace.classList.add = "nuevo-clase"
// nuevoEnlace.style = "color: #fff"

// //agregarlo al documento
// const navegacion = document.querySelector(".navegacion")
// navegacion.appendChild(nuevoEnlace)

// console.log(nuevoEnlace)

// Eventos
// console.log(1)

// window.addEventListener('load', function() { //Espera a que el HTML, CSS, imagenes se carguen para ejecutarse
//     console.log(3)
// })

// document.addEventListener("DOMContentLoaded", function(){ //Solo espera a que el HTML se cargue
//     console.log(2)
// })

// window.onscroll = function(evento){
//     console.log(evento)
// }

// //Seleccionar elementos y asociarles un evento

// const btnEnviar = document.querySelector(".boton--primario")
// btnEnviar.addEventListener("click", function(evento){ // al elemento que tiene como clase .boton--primario le asociamos el evento click
//     console.log(evento.target)
//     evento.preventDefault();//cancela el vento si es cancelable, en este caso cancelará el sumbit que tiene el elemento. es decir no se enviará el formulario.
//     console.log("enviando formulario")
// })


//Validandar el formulario
const datos = {
    nombre: "",
    email: "",
    mensaje: "",
};

const nombre = document.querySelector("#nombre");
const email = document.querySelector("#email");
const mensaje = document.querySelector("#mensaje");
const formulario = document.querySelector(".formulario");

nombre.addEventListener("input", leerTexto);
email.addEventListener("input", leerTexto);
mensaje.addEventListener("input", leerTexto);


function leerTexto(e) {
    datos[e.target.id] = e.target.value;
    console.log(datos);
}

//evento submit
formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();
    const { nombre, email, mensaje } = datos;
    if (nombre === "" || email === "" || mensaje === "") {
        mostrarAlerta("Todos los campos son obligatorios", true);

        return; //corta la ejecucion del codigo
    }
    mostrarAlerta("Mensaje enviado exitosamente");

});


//Refactoring
mostrarAlerta = (mensaje, error = null) => {
    const alerta = document.createElement("P")
    alerta.textContent = mensaje;
    if(error){
        alerta.classList.add("error")
    } else {
        alerta.classList.add("correcto")
    }
    formulario.appendChild(alerta);

    setTimeout(() => {
        alerta.remove();
    }, 3000);
}
