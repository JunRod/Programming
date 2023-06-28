/*
¿Que son?
Son Soluciones típicos a problemas comunes, son planos personalizables. esto hace que se evite escribir codigo como cada quien entiende.
*/

/*
Categorias de Patrones
De creación - Permiten crear objetos y permiten la reutilizacion del código
Estructura - Explican como debe comunicarse los objetos y clases en grandes proyectos.
Comportamiento - Se encargan de como se comportan y comunican los objetos
*/

/*Class Parent */
class Persona {
    constructor(nombre, email) {
        this.nombre = nombre;
        this.email = email
    }
}

const persona = new Persona("Junior", "junior@gmail.com")
console.log(persona)

// Constructor Pattern
class Cliente extends Persona {
    constructor(nombre, email, empresa) {
        super(nombre, email)
        this.empresa = empresa
    }
}

const cliente = new Cliente("Junior", "jun@gmail.com", "JuNRod")
console.log(cliente)

//Singleton
let instancia = null

class Client {
    constructor(nombre, email){
        if(!instancia){
            this.nombre = nombre
            this.email = email
            instancia = this
        } else {
            return instancia
        }
        
    }
}

const client = new Client("Junior", "correo@gmail.com")
console.log(client)
const client2 = new Client("Karen", "correo@correo.com")
console.log(client2) //Client2 contiene la referencia de client

//Factory - Patron de diseño creacional , crea objetos basados en ciertas condiciones

class InputHTML {
    constructor(type, nombre) {
        this.type = type
        this.nombre = nombre
    }

    crearInput() {
        return `<input type="${this.type}" name="${this.nombre}" id="${this.nombre}">`
    }
}

class HTMLFactory {
    crearElemento(tipo, nombre) {
        switch(tipo) {
            case "text":
                return new InputHTML(tipo, nombre)
            case "number":
                return new InputHTML(tipo, nombre)
            case "tel":
                return new InputHTML(tipo, nombre)
            default:
                return;
        }
    }
}

const elemento = new HTMLFactory()
const inputText = elemento.crearElemento("number", "number-cliente")
console.log(inputText.crearInput())

const elemento2 = new HTMLFactory()
const inputText2 = elemento2.crearElemento("tel", "tel-cliente")
console.log(inputText2.crearInput())

//Module

//Forma antigua

const module1 = (function () {
    const nombre = "Junior"
    
    function hola() {
        console.log("Hola")
    }

    return {
        nombre,
        hola
    }

})()

//*Desde otro archivo* 
console.log(module1.nombre)

//Lo que es ahora
const hola = nombre => {
    console.log("Hello", nombre)
}

//export default hola
//*Desde otro archivo*
console.log(hola("Junior"))


//Mixin Pattern 

class Personita {
    constructor(nombre, email) {
        this.nombre = nombre
        this.email = email
    }
}

class Clientito extends Personita{
    constructor(nombre, email) {
        super(nombre, email)
    }
}

const funciones = {
    mostrarInformacion() {
        console.log(`${this.nombre} tu email es: ${this.email}`)
    },
    mostrarNombre() {
        console.log(`Nombre: ${this.nombre}`)
    }
}

//Agregar funciones a clase
Object.assign(Personita.prototype, funciones)


const personita = new Personita("Junior", "jun@jun.com")
personita.mostrarInformacion()
const clientito = new Clientito("Angel", "ang@gmail.com")
clientito.mostrarNombre()
clientito.mostrarInformacion()

//Namespace - Evitar que variables colisionen en la ventana global

const restauranteApp = {}

restauranteApp.platillos = [
    {
        platillo: "Pizza",
        precio: 25
    },
    {
        platillo: "Hamburguesa",
        precio: 20
    },
    {
        platillo: "Lomo",
        precio: 40
    }
]

restauranteApp.funciones = {
    mostrarMenu: () => {
        console.log("Bienvenidos a nuestro menú")
        const {platillos} = restauranteApp
        platillos.forEach((platillo, index) => {
            console.log(`${index} : ${platillo.platillo} ${platillo.precio}`)
        });
    },
    ordenar: id => {
        console.log(`Tu platillo: ${restauranteApp.platillos[id].platillo} se está preparando`)
    },
    agregarPlatillo: (platillo, precio )=> {
        const nuevo = {
            platillo,
            precio
        }
        restauranteApp.platillos.push(nuevo)
        console.log(`Platillo: ${platillo} $${precio} agregado...` )
    },
    borrarPlatillo: id => {
        restauranteApp.platillos = restauranteApp.platillos.filter( (platillo, index) => id !== index)
        console.log(restauranteApp)
    }
}

restauranteApp.funciones.mostrarMenu(restauranteApp)
restauranteApp.funciones.ordenar(2)
restauranteApp.funciones.agregarPlatillo("Te", 2)
restauranteApp.funciones.agregarPlatillo("Cena", 30)
restauranteApp.funciones.borrarPlatillo(3)
restauranteApp.funciones.mostrarMenu(restauranteApp)







