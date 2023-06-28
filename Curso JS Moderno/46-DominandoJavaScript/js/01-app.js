//!2 Contextos de Ejecucion: Hoisting
//*El codigo de JS se ejecuta en dos partes: en la primera se crean las variables (registran) y en la segunda se ejecutan

function fn() {}

//!Coercion
//*Es la conversion implicita o explicita de un tipo de dato a otro tipo de dato
//Se puede usar en todo tipo de Dato.

const numero1 = 1;
const numero2 = '2';

console.log(numero1 + numero2); //Implicita, el numero 1 se transforma a String por lo que el resultado es 12
console.log(Number(numero2)); //Estamos conviertiendo explicitamente un String a Number

//!Implicit Binding
//con .this hace referencia al entorno lexico en el que está, este entorno de ejecucion (Blog) No requiere de otros entornos de ejecucion, por lo que con this nos referimos en el entorno en el que estamos

let blog = {
    name: 'Proogramming',
    adddres: 'YouTube',
    message: function () {
        console.log(`Vlog: ${this.name} of ${this.adddres}`); //this esta vinculado al objeto del blog
    },
};

blog.message();

function greeting(obj) {
    obj.logName = function () {
        console.log(`My name is : ${this.name}`);
    };
    obj.logMessage = function () {
        console.log(`${this.name} is ${this.age} years old!`);
    };
}

const tom = {
    name: 'Tom',
    age: 7,
};

const jerry = {
    name: 'jerry',
    age: 3,
};

greeting(tom);
greeting(jerry);

tom.logName();
jerry.logName();

//!Explicit Binding
/*Sabemos que JS tiene dos entornos de Ejecucion: Fase de Creacion y Fase de EJecucion, cada contexto de ejecucion opera independientemente de los demás, por lo que aveces queremos usar un contexto de ejecucion en otro, es ahi
donde entra en juego la vinculacion explicita (Explicit Binding)*/

//*Call Binding
//Debemos pasarle el arreglo y su posicion

let getName = function (hbby1, hbyy2) {
    console.log(`${this.name} likes ${hbby1} and ${hbyy2}`);
};

let user = {
    name: 'Junior',
    address: 'Ayllu',
};

let hbbys = ['Futbol', 'Basket'];
getName.call(user, hbbys[0], hbbys[1]);

//*Apply Binding
//Podemos pasar arreglos

let getName1 = function (hbby1, hbyy2) {
    console.log(`${this.name} likes ${hbby1} and ${hbyy2}`);
};

let user1 = {
    name: 'Junior',
    address: 'Ayllu',
};

let hbbys1 = ['Futbol', 'Basket'];
getName.apply(user, hbbys);

//*Bind Binding
//Crea una nueva funcion

let getName2 = function (hbby1, hbyy2) {
    console.log(`${this.name} likes ${hbby1} and ${hbyy2}`);
};

let user2 = {
    name: 'Junior',
    address: 'Ayllu',
};

let hbbys2 = ['Futbol', 'Basket'];
const resul2 = getName.bind(user, hbbys[0], hbbys[1]);
resul2();
