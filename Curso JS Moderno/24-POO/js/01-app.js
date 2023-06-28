//Los prototypes es lo mismo que POO, solamente que POO de JS le cambia de sintaxis y lo hace mas comodo.

class HolaMundo {
    constructor(lenguaje) {
        this.lenguaje = lenguaje

    }

    mostrarInfo() {
        return `Hola mundo desde ${this.lenguaje}`
    }

    static nacionalidad (nacionalidad) {
        return `Hola mundo desde ${nacionalidad}`
    }
}

class Usuario extends  HolaMundo{
    constructor(lenguaje, nombre, apellido) {
        super(lenguaje)
        this.nombre = nombre
        this.apellido = apellido
    }

    //Cuando usamos un funcion con el mismo nombre que una funcion de la clase padre, la funcion del hijo la
    // sobreescribe; como el @override.
    mostrarInfo () {
        return `Hola soy ${this.nombre} ${this.apellido} : Hola mundo desde ${this.lenguaje}`
    }
}
const obj = new HolaMundo("JavaScript")
console.log(obj.mostrarInfo())
console.log(HolaMundo.nacionalidad("Italia"))

const usuario = new Usuario("JavaScript", "Junior", "Rodriguez")
console.log(usuario.mostrarInfo())


//Propiedades privadas

class Properities {
    #nombre //Propiedad privada.
    constructor(apellido){
        this.apellido = apellido
    }

    setNombre(nombre) {
        this.#nombre = nombre
    }

    getNombre() {
        return this.#nombre
    }

    info() {
        return `${this.#nombre} ${this.apellido}`
    }
}

const obj1 = new Properities("Rodriguez")
obj1.setNombre("Junior")
console.log(obj1.info())
console.log(obj1.getNombre())
