//!6. Lo que se puede hacer con JavaScript en 2 lineas

const nombre = prompt("Cual es tu nombre?"); //Prompt muestra un cuadro de dialogo (el string) con un imput.
document.querySelector(".contenido").innerHTML = `${nombre} está aprendiendo JavaScript`;

//!8. La Consola de JavaScript
console.log("Hola desde la consola");
console.error("Ocurrió un terrible error. Terrible!"); //Mandar error
console.warn("Advertencia, esta por ocurrir un error."); //Mandar Advertencia
console.clear(); //Limpia la consola.

//*Arreglo en dos formatos
console.log([1, 2, 3, 4, 5]);
console.table([1, 2, 3, 4, 5]);

//*Ver cuanto se demoro en ejecutar un codigo.
//?Podemos usar esto para comparar varios scrips y ver cual es la solucion mas rápida.
console.time("Hola");

console.warn("Eso no esta permitido");
console.warn("Eso no esta permitido");
console.warn("Eso no esta permitido");
console.warn("Eso no esta permitido");
console.warn("Eso no esta permitido");
console.warn("Eso no esta permitido");
console.warn("Eso no esta permitido");

console.timeEnd("Hola");