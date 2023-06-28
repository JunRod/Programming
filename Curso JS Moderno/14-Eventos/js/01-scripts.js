//!Detectar cuando el HTML està listo

document.addEventListener("DOMContentLoaded", () => {
    console.log("Documento Listo");
});

//!Eventos con el mouse
//* mousedown - similar al click
//* click
//*dblclick - doble click
//*mouseup - cuando sueltas el click

const logo = document.querySelector(".logo");
logo.addEventListener("click", (e) => {
    console.log(e);
    console.log(e.target);
    e.target.style.backgroundColor = "black";
});

//!Eventos en input
//*> para seleccionar varias veces una misma palabra es con Ctrl+D

//*keydown - cuando presionas una tecla
//*keyup - cuando sueltas una tecla
//*blur - cuando se quita el foco de un input
//*focus - cuando se pone el foco en un input
//*copy - cuando copias un texto
//*paste - cuando peges un texto
//*cut - cuando cortas un texto
//*input - es todo en uno, menos el blur

//*Como saber lo que el usuario está escribiendo?
const busquedad = document.querySelector(".busqueda");
busquedad.addEventListener("input", () => {
    if (busquedad.value === "") {
        console.log("No escribio nada");
    } else {
        console.log(busquedad.value);
    }
});

//?Ejercicio creado con este concepto "practice"

//!preventDefault()

//*Con esto logramnos que se cancele el evento (evento )y ejecute lo que nosotros queremnos (lo que sigue despues del preventDefault())

//!getBoundingClientRect
//*Podemos obtener la ubicacion de un elemento en tiempo real

//!Otras maneras de llamar funciones
//*Al igual que addEventListener que servia para escuchar el elemento y ejecutar ele evento seleccionado. La siguiente manera es recomendable hacerlo para ELEMENTOS HTML CREADOS DESDE JS. Es agregarle un metodo "onclick = ()=> { nuevaFuncion(1) }. Usamos una funcion dentro de la funcion flecha porque:

//*Si lo dejas de esta forma manda a llamar directamente la función sin aun darle click.

//*parrafo3.onclick = nuevaFuncion(1);

//*Pero de esta otra forma necesitas darle click para mandar llamar la función

//*parrafo3.onclick = () => { nuevaFuncion(1) }
