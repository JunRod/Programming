//TODO Pregunta entrevista: ¿en un for loop, como identificamos los numeros pares e impares?

for (let index = 0; index < 20; index++) {
    if (index % 2 === 0) {
        //*> El modulo es (%), que es el resto de una division, y sabemos que cuando el resto es cero: es una division exacta; el dividendo es par.
        console.log(`${index}: Es un numero par.`);
    } else {
        console.log(`${index}: Es un numero IMPAR.`);
    }
}

//! Break y Continue

for (let a = 0; a < 10; a++) {
    if (a == 5) {
        console.log(`CINCO`);
        continue;
    }
    console.log(`${a}`);
}

//?La diferencia entre break y continue:
//?Break: Rompe por completo el for, se sale por completo.
//?Continue: Pasa defrente a la siguiente iteracion del for.

const peliculas = [
    { nombre: "spiderman", precio: 300 },
    { nombre: "Batman", precio: 200, descuento: true },
    { nombre: "Aquaman", precio: 400 },
    { nombre: "Strange", precio: 500 },
];

for (let i = 0; i < peliculas.length; i++) {
    if (peliculas[i].descuento) {
        console.log(`${peliculas[i].nombre} : tiene descuento`);
    }
}

//!Fizz Buzz
for (let l = 0; l < 50; l++) {
    if (l % 15 === 0) {
        //*Esta es la primera condicion ya que al no ser tan común debe pasar por ahi primero.
        console.log(`${l} FIZZ BUZZ!`);
    } else if (l % 3 === 0) {
        console.log(`${l} FIZZ`);
    } else if (l % 5 === 0) {
        console.log(`${l} BUZZ`);
    }
}

//!For of
const pendientes = ["Tarea", "Comer", "Proyectos", "Leer"];

const marketDrive = [
    { nombres: "pepino", precio: 60 },
    { nombres: "azucar", precio: 40 },
    { nombres: "agua", precio: 33 },
    { nombres: "sapayo", precio: 40 },
    { nombres: "apple", precio: 30 },
];

for (let pendiente of pendientes) {
    //*>Iterar un arreglo.
    console.log(pendiente);
}

for (let element of marketDrive) {
    //*> iteramos cada objeto de marketDrive y luego con sintaxis punto podemos entrar a cualqueira de sus llaves.
    console.log(element.nombres);
}

//!For in
//?For in sirve para iterar solo objetos.

const objs = {
    nombres: "Junior",
    edad: 17,
    pais: "Perú",
};

//Si imprimimos solo propiedad, me dará las llaves, por ello la va obj[propiedad]
for (let propiedad in objs) {
    console.log(`${objs[propiedad]} a`);
}

//?Sin embargo en ECMAS7 existe otra forma de hacerlo con un for of
//*Sabemos que con Object.entries, recuperamos tanto llave como valor, con. value su valor y con key su llave.

for (const [llave, valor] of Object.entries(objs)) {
    console.log(`Llave = ${llave} : Valor = ${valor}`);
}

//Object.entries(objs) y objs.entries() se diferencian en que la segunda devuelve la key en number, mientras
//que la primera devuelve la key en String
//Tambien Object.entries(map), no soporta un map, pero si map.entries

//Tambien vi que al usar [llave, valor], cada propiedad ya tiene los valores desfragmentados, ya que si
//solo usamos valor, esto imprimirà un array con la llave y valor.
