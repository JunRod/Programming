//!Que es la programacion Funcional

//*Crea codigo utilizando funciones

//*Las funciones deben retornar una entrada y tener una salida de datos

//*Inmutabilidad = No se permite modificar datos, lo ideal es crear un arreglo nuevo

//*Separar funciones de datos: Funciones que retornar un nuevo dato o Array Methods, de esa forma tendremos funciones que entregan un resultado nuevo pero nunca modifican los datos

//*First-class Functions: Es poder crear Function Expression y asignarla a una variable nueva (como si fuera una string o otro tipo de dato)

//!First-Class Function
const suma = function (a, b) {
    return a + b;
};

const resultado = suma;
console.log(resultado(10, 20));

//!Funciones como Argumentos

const suma1 = (a, b) => a + b;
const multiplicar = (a, b) => a * b;

const sumaOMultiplicar = (fn) => fn(10, 10);

console.log(sumaOMultiplicar(suma1));
console.log(sumaOMultiplicar(multiplicar));

//!Funciones de Orden Superior ( Highter Order Functions)
const carrito = [
    { nombre: 'Mouse', precio: 400 },
    { nombre: 'TV', precio: 500 },
    { nombre: 'Cable HDMI', precio: 100 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Cargador HP', precio: 600 },
];

const mayor400 = (p) => {
    return p.precio > 400;
};

const resultado1 = carrito.filter(mayor400);
console.log(resultado1);

//*Funtional JS usando .map
const obtenerNombres = (p) => p.nombre;

const resultadoMap = carrito.map(obtenerNombres);
console.log(resultadoMap);

//!Pure Funtions
//*Debe retornar la misma cantidad de variables de entradas
const numero1 = 20;
const duplicar = (numero) => numero * 2;

//*El resultado debe ser una nueva variable
const resultado4 = duplicar(numero1);

console.log(resultado4);

//!Funciones que Retornar funciones
const obtenerCliente = () => () => console.log('Hola soy Junior');

const fn = obtenerCliente();
/* ejecutando: const obtenerCliente = () => (Esto retorna una funciones en String: () => console.log('Hola soy Junior');)*/
fn();
/* Esa function String ya guardado en fn, se ejecuta: () => console.log('Hola soy Junior');*/

//*Algo mas implicito
const obtenerDatos = () => {
    return () => console.log('Funcion retornada de una funcion');
};

const fn1 = obtenerDatos();
fn1();

//!Closures
//* https://developer.mozilla.org/es/docs/Web/JavaScript/Closures
//*. Un closure permite asociar algunos datos (el entorno) con una función que opera sobre esos datos.

//Ambito Lexico: Se refiere a las funciones anidadas en una funcion padre. estas funciones anidadas tienen acceso a las variables y funciones del ambito padre.

function iniciar() {
    let nombre = 'Chrome';

    function mostrarNombre() {
        console.log(nombre);
    }

    return mostrarNombre; //OJO: Aca estamos retornando la referencia de la funcion mostrarNombre, antes de ejecutarla
}

const resultadoIniciar = iniciar();
console.log(resultadoIniciar());

//*Closure return sin referencia (es decir llamada automatica)
/*
function iniciar() {
    let nombre = 'Chrome';

    function mostrarNombre() {
        console.log(nombre);
    }

    return mostrarNombre()
}

iniciar(); Esto ejecuta el return, y como el mostrarNombre usa (), se manda a llamar en la primera llamada a inciar()
*/

//*Encapsulacion y Ocultacion de datos

const make = (function () {
    var privateDato = 0;

    function changue(value) {
        privateDato += value;
    }

    return {
        increment: function () {
            changue(1);
        },
        decrement: function () {
            changue(-1);
        },
        value: function () {
            return privateDato;
        },
    };
})();

make.increment();
make.increment();
make.increment();

//!Partials y Currying
//https://towardsdatascience.com/javascript-currying-vs-partial-application-4db5b2442be8

/*Currying siempre devuelve otra función con un solo argumento hasta que se hayan aplicado todos los argumentos
Entonces, seguimos llamando a la función devuelta hasta que hayamos agotado todos los argumentos y se devuelva el valor final.*/

//*Dividir una funcion que tome mas de un parametro en argumentos de forma parcial

const suma2 = (a, b, c) => a + b + c;
console.log(suma2(1, 2, 3));

const multiplicacion = (a, b, c) => a * b * c;
const parcial = (a) => (b, c) => multiplicacion(a, b, c);
const primerNumero = parcial(2);
const result = primerNumero(3, 4);
console.log(result);

const dividir = (a, b, c) => a / b / c;
const parcial2 = (a) => (b) => (c) => dividir(a, b, c);
const resultadoDivision = parcial2(20)(2)(2);
console.log(resultadoDivision);

//!Composition
//*Significa tomar dos funciones y las combinamos en una

//Funciones Separadas
const obtenerEmpresa = (info) => ({
    mostrarEmpresa() {
        console.log(`Empresa: ${info.empresa}`);
    },
});

const obtenerNombre = (info) => ({
    mostrarNombre() {
        console.log(`Nombre: ${info.nombre}`);
    },
});

//Acá tomaremos las funciones separadas para combinarlas
function Cliente(nombre, apellido, empresa) {
    let info = {
        nombre,
        apellido,
        empresa,
    };

    return Object.assign(info, obtenerEmpresa(info), obtenerNombre(info));
}

const cliente = Cliente('Junior', 'Rodriguez', 'Facebook'); //El cuerpo de Cliente tendrá como entorno: Cliente('Junior', 'Rodriguez', 'Facebook')

//Ahora cliente tiene un entorno unico, donde las variables y funciones, funcionan bajo ese entorno.
cliente.mostrarEmpresa();
cliente.mostrarNombre();
console.log(cliente); // {nombre: 'Junior', apellido: 'Rodrigez', empresa: 'Facebook', mostrarEmpresa: ƒ, mostraNombre: ƒ}
