//!DOM
//*Me gustò la forma en que explico el DOM, lo explicò como arboles, donde podemos entrar a cualquier elemento.
//*Tambien pude ver como es que se podia acceder con JS a CUALQUIER elemento del DOM, con tam solo poner 'document' seguido de un punto y el elemento que se buscam

//!QuerySelector y QuerySelectorAll

//*Me impresionò ver que en JS se puede usar selectores de css. Un ejemplo es que podemos acceder a un contenedor con hijos con el mismo nombres de clase y para acceder al segundo podemos hacerlo con nth-child(2).
//*Tambien que podemos ser muy especìficiso. un ejemplo es que podemos acceder al elemeneto y luego a la clase:
//* 'section.contenedor'

//!Diferencia entre InnerText, TextContent, InnerHTML.

const tittle = document.querySelector(".contenido-hero h1");
console.log(tittle);

//*InnerText: Si en el CSS - Visivility: hidder; no lo va a encontrar
console.log(tittle.innerText);

//*TextContent: Si lo va a encontrar
console.log(tittle.textContent);

//*InnerHTML: Se trae el HTML, lo bueno de esto es que podemos desplegar todos los atributos en chrome.
console.log(tittle.innerHTML);

//*Cambiando una imagen
const imagen = document.querySelector(".card img");
imagen.src = "img/hacer2.jpg";

//!Cambiando CSS con JS.
//*Esto es una duda que siempre tuve pero nunca me atrevi a preguntar, mal. ¿Porque le agregan clases a una etiqueta HTML desde JS?, ¿Cual es la lógica?
//TODO Según pablo, es que cuando le queremos dar a estilos a una etiqueta HTML desde JS; el código se hará largo. 'Por lo que mejor es agregar clases a la etiqueta HTML desde JS.', y esta clase tendrá estilos en CSS.

const card = document.querySelector(".contenedor-cards .card:nth-child(4)");
console.log(card);
card.classList.add("clase-nueva1");
card.classList.remove("card");

//! Traversing the DOM
//*Con traversing se refiere a recorrer el DOM arbol de cualquier forma.

//*
const nav = document.querySelector(".navegacion");
console.log(nav);
console.log(nav.childNodes); //Los espacio en blanco del codigo se convierten en elementos.
console.log(nav.children[3].children); //muestra unicamente elementos HTML, y podemos acceder a ellos como un arreglo.
console.log(nav.children[3].nodeName); //Muestra el tipo de etiqueta HTML
console.log(nav.children[3].nodeType); //Podemos saber que tipo de elemento estamos tocando. en este caso estamos tocando un elemento por lo que su valor es 1. con tan solo saber que su tipo es 1, entonces sabemos que estamos tocando un elemento. https://developer.mozilla.org/es/docs/Web/API/Node/nodeType

//*Traveling en una card.
const card4Destinos = document.querySelector(
    ".contenedor-cards .card:nth-child(4)"
);
card4Destinos.children[1].children[0].innerHTML = "Perú"; //>accediendo al titulo de la card y lo cambiamos
card4Destinos.children[1].children[0].classList.add("classNew");
card4Destinos.children[1].children[0].classList.remove("titulo");
console.log(card4Destinos.children[1].children[0]);

//*Traversing del Hijo al Padre.
//?devuelve el padre del nodo especificado en el árbol.
console.log(card4Destinos.parentNode); //>Estos toman en cuenta los elementos en blanco mejor se <usa-></usa->
console.log(card4Destinos.parentElement); //> No toma en cuenta los espacios en blanco, unicamente las etiquetas HTML
card4Destinos.parentElement.style.backgroundColor = "red"; //>Dandole estilos al padre(contenedor) del nodo
console.log(
    card4Destinos.parentElement.parentElement.parentElement.parentElement
        .parentElement
); //> podemos usar parentElement las veces que queramos siempre y cuando haya un padre al cual recorrer.

//*Traversing entre hermanos

const card1Destinos = document.querySelector(
    "section.hacer .contenedor-cards .card:nth-child(1)"
);
console.log(card1Destinos); //>Nodo
console.log(card1Destinos.nextElementSibling); //>Nodo Hermano

//*Traversing elemento previo
const cardLast = document.querySelector(".hacer .card:last-of-type");
console.log(cardLast);
console.log(cardLast.previousElementSibling);

//*Traversing: primer y ultimo elemento.
const nave = document.querySelector(".navegacion");
console.log(nave.firstElementChild);
console.log(nave.lastElementChild);

//! Eliminar elementos del DOM
//*Eliminbar un nodo cualquier,
const navegation = document.querySelector(".navegacion");
//navegation.remove()

//*Eliminar con una referencia padre
console.log(navegation.children);
navegation.removeChild(navegation.children[0]);

//!Generar HTML con JS

//creando los parrafos
const parrafo1 = document.createElement("P");
const parrafo2 = document.createElement("P");
const parrafo3 = document.createElement("P");

//agregando las respectivas propiedades a los elementos
parrafo1.textContent = "evento";
parrafo1.classList.add("categoria", "concierto");

parrafo2.textContent = "Paseo por el Ayllu";
parrafo2.classList.add("titulo");

parrafo3.textContent = "500$";
parrafo3.classList.add("precio");

//creando el info
const info = document.createElement("DIV");
info.classList.add("info");

//agregando los parrafos como hijos al info
info.appendChild(parrafo1);
info.appendChild(parrafo2);
info.appendChild(parrafo3);

//creando la imagen
const photo = document.createElement("img");
photo.src = "img/hacer2.jpg";

//creando la tarjeta
const tarjeta = document.createElement("div");
tarjeta.classList.add("card");
tarjeta.style.backgroundColor = "#3433";

//agregando la img y info al card.
tarjeta.appendChild(imagen);
tarjeta.appendChild(info);

//trayendo en contenedor
const contenedorCard = document.querySelector(".contenedor-cards");

/* poner la tarjeta dentro del contenedor de card
contenedorCard.appendChild(tarjeta)
*/

//agregando la tarjeta creada antes de la card [1]
//*con .insertBefore(elemento, referencia)
console.log(contenedorCard.children);
contenedorCard.insertBefore(tarjeta, contenedorCard.children[1]);

//!Example more avanced of JS
const btnFlotante = document.querySelector(".btn-flotante");
const footer = document.querySelector(".footer");

btnFlotante.addEventListener("click", mostrarOcultarFooter);

function mostrarOcultarFooter() {
    if (footer.classList.contains("activo")) {
        footer.classList.remove("activo");
        this.classList.remove("activo");
        this.textContent = "Dolar y Moneda";
    } else {
        footer.classList.add("activo");
        this.classList.add("activo");
        this.textContent = "X Cerrar";
    }
}
