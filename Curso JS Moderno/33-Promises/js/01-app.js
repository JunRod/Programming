//!Callbacks_________________________
const paises = ['Alemania', 'Peru', 'Brasil'];

function nuevoPais(paises, callback) {
    paises.push('NUEVO');
    callback();
}

function mostrarPaises() {
    paises.forEach((pais) => console.log(pais));
}
mostrarPaises();
nuevoPais(paises, mostrarPaises);

//!Promises_________________________
//Una promesa es un envoltorio para procesos asíncronos :) Un proceso asíncrono es un proceso cuyo resultado no esta disponible de manera inmediata. Imagina que quieres saber cuando tu youtuber sube un video. No sabes cuando lo hará, pero sabes que lo hará. Entonces tomas su canal y lo envuelves en una promesa(simplificando) y cuando este listo(then) el video, puedes verlo.

//*Resultados de Promises
//Resolve: se cumple
//Reject: rechazado
//Pending: Todavia no se cumple pero tambien todavia ah sido rechazado

const ciudades = ['tokio', 'rio', 'lima'];

const nuevaCiudad = (ciudad) =>
    new Promise((resolve, reject) => {
        setTimeout(() => {
            ciudades.push(ciudad);
            resolve(ciudades);
        }, 2000);
    });

nuevaCiudad('Bogota')
    .then((resultado) => {
        console.log(resultado);
        return nuevaCiudad('Helsinki');
    })
    .then((resultado) => {
        console.log(resultado);
        return nuevaCiudad('Trujillo');
    })
    .then((resultado) => {
        console.log(resultado);
        return nuevaCiudad('Puno');
    });
