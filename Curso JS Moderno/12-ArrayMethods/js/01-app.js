const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio"];

const carrito = [
    { nombre: "Monitor 27 Pulgadas", precio: 500 },
    { nombre: "Televisión", precio: 100 },
    { nombre: "Tablet", precio: 200 },
    { nombre: "Audifonos", precio: 300 },
    { nombre: "Teclado", precio: 300 },
    { nombre: "Celular", precio: 700 },
];

//! .Some() y .Includes(); saber si un valor existe en un array.
//?Comprobar si un valor existe en un arreglo.

meses.forEach((mes) => {
    if (mes === "Enero") {
        console.log("Enero si existe.");
    }
});

//*Este es un array methods, .includes se puede usar para array con indice y valor, es decir para ver si un valor existe en un indice.
const resultado = meses.includes("Enero");
console.log(resultado ? "Si existe enero (.includes)" : "No existe enero");

//*Sin embargo es diferente cuando tenemos un array de objetos. se usa .some
const existe = carrito.some((producto) => producto.nombre === "Celular");
console.log(existe ? "Si existe Celular (.some)" : "No existe Celular");

//? Tanto .some y .includes devuelven true o false
//? El return se da por implicito en una Arrow Function, así que se le quita.

//! .FindIndex() para encontrar la posicion en un Array

//?Esta es otra forma de hacerlo, cuando usarmos un forEach y ponemos 1 parametro, acá se pasará cada valor, pero si ponemos otro parametro, ahí se pasará su index automaticamente.
meses.forEach((valor, index) => {
    if (valor === "Febrero") {
        console.log(`${valor} encontrado en el index: ${index}`);
    }
});

//?Acá se pasa el valor al parametro pero retorna el index.
const index = meses.findIndex((mes) => mes === "Enero");
console.log(`Enero index: ${index}`);

const index2 = carrito.findIndex((product) => product.nombre === "Teclado");
console.log(`Teclado se encuentra en el index: ${index2}`);

//! .Reduce()
//? Plantilla con la que entendi.
/*
https://delacruz.dev/blog/funcion-reduce-javascript

const coche = partesDelCoche.reduce((valorAnterior, valorActual) => {
    return valorAnterior + valorActual
}, valorInicial)
*/

const partesDelCoche = [
    "Mi coche tiene: ",
    "asientos",
    "volante",
    "puertas",
    "ruedas",
];
//*>.reduce con return
/*
 const coche = partesDelCoche.reduce((total, partes) {
        return total + partes + " "
    }, "Mi coche tiene: ")
*/

//*> .reduce con arrow function de una linea (es decir no tiene return)
const coche1 = partesDelCoche.reduce(
    (total, partes) => total + partes + " ",
    "Mi coche tiene: "
);

//?>Otros modos de hacerlo, en este caso sin valor inicial y con una funcion con "estructura" o "firma" parecida.

//?Este es la funcion con firma y estructura que se puede reutilizar, en lugar de estar creando varias CallBacks dentro de varios reduce.
function funcionCallBack(valorAnterior, ValorActual) {
    return valorAnterior + ValorActual + ", ";
}

const coche = partesDelCoche.reduce(funcionCallBack);
console.log(coche);

//!Filter
//*Te crea un array con la condicion que estés revisando en ese momento. Internamente, este método recorre el array y para cada elemento comprueba si el callback retorna true. Finalmente, retorna un nuevo array con todos los items que pasaron la prueba.

let resultado1;

//?Esto trae todos los productos que cuestan mas de 500
resultado1 = carrito.filter((producto) => producto.precio >= 500);
//?Esto trae todos los productos menos el celular
resultado1 = carrito.filter((producto) => producto.nombre !== "Celular");
//?Esto trae solo el producto celular
resultado1 = carrito.filter((producto) => producto.nombre === "Celular");

console.log(resultado1);

//! .Find
//?Devuelve un array con el primer elemento que cumpla con la condicion, solo un elemento.

let resultado2 = " ";
resultado2 = carrito.find((producto) => producto.precio === 300);
console.log(resultado2);

//! .Every

//? Todos se deben de cumplir (es como el and '&')

let resultado3 = " ";
resultado3 = carrito.every((producto) => producto.precio < 500);

console.log(resultado3);

//? Almenos uno se debe de cumplir (es como el or '||')
let resultado4 = " ";
resultado4 = carrito.some((product) => product.precio < 500);
console.log(resultado4);

//! .Concat

const meses1 = ["enero", "febrero", "marzo", "abril", "mayo", "junio"];
const meses2 = ["julio", "agosto", "septiembre", "octubre", "noviembre"];
const meses3 = ["diciembre"];

const resultado5 = meses1.concat(meses2, meses3);
console.log(resultado5);

//*Con spread opertor

const resultadoSpreadOperador = [...meses1, ...meses2, ...meses3];
console.log(resultadoSpreadOperador);

//!Mas sobre Spread Operator

//*Con spread operator estariamos haciando la programaciòn funcional. que trata sobre modificar un elemento pero no en el original sinò en una copia del elemento

const monedas = ["dolar", "sol", "euro", "jen", "peso"];

//?Spread Operator con arreglo de indices.
const resultadoMonedasTotales = [...monedas, "intis"];
console.log(resultadoMonedasTotales);

//?Spread operator con array objetos.
const resultadoMonedasTotales2 = [
    { nombre: "windows10", precio: 100 },
    { nombre: "Linux", precio: 100 },
    { nombre: "MAC", precio: 100 },
];

const OprativeSystem = { nombre: "Windows 8", precio: 130 };
const resultadoFinalDeSoftware = [...resultadoMonedasTotales2, OprativeSystem];
console.log(resultadoFinalDeSoftware);
