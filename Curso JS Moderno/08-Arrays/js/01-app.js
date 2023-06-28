//!Crear Arreglos
//*Array con un elemento (la forma mas facil de hacerlo.)
const numeros = [10]
    //*Array con 3 elementos.
const meses = new Array("Enero", "Febrero", "Marzo");
//*Array con ancho 3
const años = new Array(3)
    //*Array con elementos de todo Tipo.
const AllTypes = ["HolaSoyGerman", true, false, null, { nombre: "paqueteJunior", edad: 18 },
    [1, 2, "SubPosicion Indicada", ["Juan", "Marta"]]
]

console.log(numeros)
console.log(meses[1][0])
console.log(años)
    //*Con cada '[]' que usemos, estaremos adentrandonos a una sub posicion. hasta podemos sacar las letras segun su indice.
console.log(AllTypes[4].nombre, AllTypes[5][3][1][0])

//!Agregar valores a un Array

const Arrey = [1, 2, 3, 4, 4]
Arrey[10] = 20 //?=> Agregamos un valor en la posicion 10
console.table(Arrey)

//!Añadir elementos al inicio y al final de un arreglo.

const Arrey2 = [{
    nombre: "paginaWeb",
    precio: 2000,
    disponibl: true
}]

const obj = {
    nombre: "Television",
    precio: 233,
    color: "negro"
}

const obj2 = {
    nombre: "Laptop",
    precio: 344,
    color: "blanco"
}

//*Agregar al final
Arrey2.push(obj)
    //*Agregar al inicio.
Arrey2.unshift(obj2)
console.log(Arrey2)

//! Arreglo y Spread Operator (No Entendi muy bien)
const producto = []

const productoOne = {
    nombre: "TV",
    color: "Black"
}

const productoTwo = {
    nombre: "Mouse",
    disponible: true
}

const productoThree = {
    nombre: "Laptop",
    disponible: false
}

let resultado = [...producto, productoOne]
resultado = [...resultado, productoTwo]
resultado = [...resultado, productoThree]
console.table(resultado)

// Ignorar
resultado = [...resultado, productoFour = {
    nombre: "mesa",
    precio: 299
}]

//!Eliminar elementos de un arreglo del inciio y del final.
//*Eliminar el ultimo elemento del arreglo
//resultado.pop()
//*Eliminar el primer elemento del arreglo
//resultado.shift();
//*Eliminar un elemento de forma imperativa
resultado.splice(1, 1) //?Borra desde la posicion 1, un elemento. (Posicion, cantidad de elementos)
console.table(resultado)

//!Destructuring de Arrays
//?Para hacer destructuring de arreglo y recuperar elementos usamos "," para ir moviendonos en el indice del array.
const Cumpleaños = [13, 14, 27, 9]
console.log(Cumpleaños)

//? Ya que el spread operator extrae y copia elementos de objetos y array, tambien podemos usarlo para hacer destructuring, en este caso primero extraemos el "13", y luego lo restante del arreglo original se guarda en una variable aparte gracias al Spread Operator
const [primero, ...segundo] = Cumpleaños
console.log(segundo)

//!ForEach
const objecto10 = [
    { nombre: "celular", precio: 300 },
    { nombre: "app", precio: 400 },
    { nombre: "comida", precio: 500 },
    { nombre: "mesa", precio: 700 },
    { nombre: "pc", precio: 800 },
    { nombre: "mouse", precio: 200 }
]

objecto10.forEach(producto => {
    console.log(`${producto.nombre} | precio: ${producto.precio}`)
});
//?Cada elemento se pasa como parametro a la arrow function (producto).


//!.Map
//?.Map es lo mismo que foreach. pero tiene una diferencia: .map crea un nuevo arreglo con los elementos en una variable y foreach no.

let nuevoArreglo = objecto10.map(producto => {
    return `${producto.nombre} | precio: ${producto.precio}`
});
console.log(nuevoArreglo)

//?Esto sale error.
let nuevoArreglo2 = objecto10.forEach(producto => {
    return `${producto.nombre} | precio: ${producto.precio}`
});
console.log(nuevoArreglo2)

//TODO Aveces requeriremos crear un arreglo con solo productos de 300 de un arreglo. y con .map es una forma de hacerlo