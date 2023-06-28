//!Declaracion de Funcion (Function Declaration)
function sumar() {
    console.log(2 + 2);
}
sumar();

//! Expresion de Funcion (Function Expression)
const sumar2 = function() {
    console.log(3 + 3);
};
sumar2();

//?La diferencia entre estos dos tipos de funciones es que la primera comienza con function y la otra con una variable.

//!Cual se ejecuta y cual no? Diferencia entre Function Declaration y Expreesion

// declaration()

// function declaration() {
//     console.log(4 + 4)
// }

// expression()
// const expression = function() {
//     console.log(7 + 7)
// }

//TODO Pregunta de entrevista: la primera se ejecuta y la segunda no. ya que ocurre el hoisting, esta se divide en 2 etapas, declaracion y ejecución. Por lo que la primera function se declara y luego se ejecuta.
//TODO Sin embargo la segunda; solo se declara la variable mas nó la function. por lo que ocurre error al llamar a la funcion que todavia no se declaró ==>

//!Funciones Nativas de JS
/*
alert("Hola Bienvenido")
prompt("Ingresa tu nombre")
parseInt("23")
*/

//?Todas estas y las otras cientos de funciones ya estan definidas en el lenguaje JS nativo, porque vemos que tienen una estructura de una función, sin embargo otras veces vamos a tener que crear funciones nosotros mismos.}

//!Diferencia entre un metodo y una function.

let numero1 = 12;
let numero2 = "23";
console.log(parseInt(numero2)); //*Funciones
console.log(numero1.toString()); //*Metodos

//!Parametros por default

function despedirse(nombre = "Desconocido", apellido = "Hijo de Dios") {
    console.log(`Hola ${nombre} ${apellido}`);
}

despedirse("Junior");

//!Como se comunican las funciones
inicarApp();

function inicarApp() {
    console.log("Iniciando app...");
    autenticandoUsuario();
}

function autenticandoUsuario() {
    console.log("Autenticando usuario... espere...");
    procesoTerminado("Junior");
}

function procesoTerminado(usuario) {
    console.log(`usuario ${usuario} : autenticado`);
}

//!Ejemplo avanzado de return

let total = 0;

function agregarCarrito(precio) {
    return (total += precio);
}

function calcularImpuesto(total) {
    return total * 1.25;
}

total = agregarCarrito(200);
total = agregarCarrito(200);
total = agregarCarrito(200);

const totalPagar = calcularImpuesto(total);
console.log(totalPagar);

//?Cada vez que se retorna algo de una funcion, quiere decir que vamos a usar lo que se retorna.

//!Metodos de propiedad
const objetin = {
    a: function(usuario) {
        console.log(`dentro de la funcion a con ${usuario}`);
    },
    b: function Nombre(edad) {
        console.log(`Hola Tengo ${edad}`);
    },
};

//*Imprimiendo los metodos de propiedad
console.log(objetin.a("Junior"));
console.log(objetin.b(18));

//*Añadiendo metodos de propiedad.
objetin.crear = function(id) {
    console.log(`Creando la cancion ${id}`);
};
objetin.elegirPlaylist = function(numero) {
    console.log(`Creando la cancion ${numero}`);
};

console.log(objetin.crear(2));

//!ArrowFunction en catalogo de peliculas.

let arrey = [];
let peliculas = ""

const catalogoPeliculas = {
    SemanaDePelicula: '',
    listar: () => {
        arrey.forEach((element) => {
            peliculas += element + ", ";
        });
        console.log(`${peliculas}`);
    },
    añadirPelicula: (nombre) => {
        console.log(`añadiendo pelicula ${nombre}`);
        arrey.push(nombre);
    },
    borrar: (id) => console.log(`borrando pelicula ${id}`),
    reproducir: (id) => console.log(`reproduciendo pelicula ${id}`),
    borrarComa: stringe => {
        let index = stringe.length
        console.log(stringe.slice(0, index - 2))
    },
    set Semana(week) {
        this.SemanaDePelicula = week
    },
    get ObtenerWeek() {
        console.log(this.SemanaDePelicula);
    },
};

catalogoPeliculas.reproducir(12);
catalogoPeliculas.borrar(23);
catalogoPeliculas.añadirPelicula("Tor");
catalogoPeliculas.añadirPelicula("Tortugas ninja");
catalogoPeliculas.listar()
catalogoPeliculas.borrarComa(peliculas);

//*GET Y SET
catalogoPeliculas.Semana = "Semana 4" //*>SET
catalogoPeliculas.ObtenerWeek //*>GET