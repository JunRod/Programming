//Try Catch: Cuando ocurre un error en una linea de codigo (conexion a DB, llamada a API, Descargar Archivos) el programa no se detendrá de forma abrúpta, sinó que tendrá otro final gracias a catch

//Asyn Await en F Expression y Decalaration

function descargarClientes() {
    return new Promise((resolve) => {
        resolve('Los clientes fueron descargados');
    });
}

const hola = async () => {
    const hello = await descargarClientes();
    console.log(hello);
};

//!Async Await hacia una API con Fetch

document.addEventListener('DOMContentLoaded', obtenerDatos);

const url = `https://picsdum.photos/list`;

/*
function obtenerDatos() {
    fetch(url)
        .then(respuesta => respuesta.json())
        .then(resultado => console.log(resultado))
        .catch(error => console.log(error))
}
*/

async function obtenerDatos() {
    try {
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
        console.log(resultado);
    } catch (error) {
        console.log(error);
    }
}
