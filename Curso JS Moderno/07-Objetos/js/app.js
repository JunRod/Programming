//!Object Literal

const producto = {
    televisor: "Sony",
    mouse: 300,
    teclado: "Ryzen"
}

//* Lo que tenga un objeto dentro se le conoce como Propiedades o llaves.
//* Para acceder a una de las propiedades del objeto usamos lo que se le conoce: Sintaxis de punto. (producto.televisor)

//!Agregar nuevas propiedades al objeto
producto.imagen = "imagen.png"

//!Eliminar propiedades del objeto.
delete producto.teclado

//!Destructuring
const { televisor, mouse } = producto;
console.log(televisor)

//* La forma antigua era => const elemento = producto.televisor

//!Objetos Anidados

const producto2 = {
    televisor2: "Sony",
    mouse2: 300,
    teclado2: "Ryzen",
    producto3: {
        marioneta: "De Dios",
        aprobacion: "de los hombres o de Dios",
        producto4: {
            animacion: "pixar",
            Empresario: 3,
            leGustas: false
        }
    }
}

let result = producto2.producto3.producto4.leGustas ? "Si le gustas" : "No le gustas ";
console.log(`Le gustas? : ${result}`)

//!Destructuring de Objetos Anidados
const { televisor2, teclado2, producto3: { marioneta, producto4, producto4: { animacion } } } = producto2

console.log(televisor2, teclado2)
console.log(marioneta)
console.log(producto4)
console.log(animacion)

//* Una vez extraido el objeto del objeto del nivel superior. ya podemos extraer sus propiedades.


//!Congelar un Objeto.
const producting = {
    nombre: "Mouse Logitech",
    precio: 50,
    disponible: true
}

//*Cuando activamos el "use strict" (al principio), tenemos acceso a los Object Methods.

//*Congelamos el objeto por completo y comprobamos que no se puede modificar nada.
//Object.freeze(producting);

//delete producting.nombre

//*Tambien podemos verificar si un objeto esta congelado.
console.log(Object.isFrozen(producting));

//!Sellar un Objeto
const producting2 = {
    nombre: "papa",
    valor: 1,
    disponible: true
}

//*Sellar el objeto
//Object.seal(producting2)

//*Modificando la llave del objeto
producting2.nombre = "uva"
    //delete producting2.valor
    //producting2.jaja = "sales"

//*Comprobar si un objeto esta sellado.
console.log("El objeto esta sellado?: " + Object.isSealed(producting2))

//*Con seal unicamente podemos modificar las llaves del objeto, pero no borrar o añadir una llave.
//*Seal vs Freeze: con seal podemos modificar llaves y con Freeze no se puede hacer nada.

//!Copiar 2 Objetos (Spread Operator)
const resultado = Object.assign(producting2, producting);
const resultado2 = {...producting, ...producting2 };

console.log(resultado, resultado2)

//*tanto con assing y ...; conseguimos el mismo objetivo..

//!This en objetos.


const paquete = {
    nombre: "ESP32 Cam",
    precio: 65,
    disponible: true,
    mostrarInfo: function() {
        console.log(`${this.nombre} esta en camino y su precio es: ${this.precio} soles`)
            //*Con this accedemos a las variables de "este" objeto
    }
}
paquete.mostrarInfo()

const nombre = "Televisor";
const paquete2 = {
    nombre: "Web",
    precio: 1500,
    disponible: true,
    mostrarInfo: function() {
        console.log(`${nombre} esta en camino y su precio es: ${this.precio} soles`)
            //*Sin this tomaremos las variables globales y no las de "este" objeto.
    }
}

paquete2.mostrarInfo()


//!Object Constructor

//*Este es un Object Literal (El que se utiliza mas)
const paqu3te = {
    nombre: "Lapto HP",
    precio: 800,
    disponible: false
}

//*Este es un Object Constructor, sin embargo esto era la forma de POO antigua de JS. ahora se usa clases.

function paquet3(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = true;
}

//*Ahora POO en la actualidad de JS es asi
class POO {
    constructor(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido
    }
}

//!Object, Keys, Values y Entries

const paqueteJunior = {
    nombre: "Teclado",
    valor: 1300,
    disponible: false
}

console.log(Object.keys(paqueteJunior))
console.log(Object.values(paqueteJunior))
console.log(Object.entries(paqueteJunior))


//tambien podemos acceder a las propiedades de un objeto con los [], Objeto[e.target.name] = e.target.value
//de esta forma podemos llenar objetos dinamicamente.
