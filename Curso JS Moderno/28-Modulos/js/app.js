//Funcion IIFE: para encapsular un bloque de código dentro de un ámbito local.
// Expresión de función invocada inmediatamente
const funcion = (function () {
    console.log("Salomon: ")
    const apellido = "L0rd"
    return {
        apellido
    }

})()

//acceder a las variables de un IIFE
console.log(funcion.apellido)

//acceder a lo que retorna
console.log(funcion)

//_____________________________Exports y Import_____________________________
//Para los archivos que usan import, debemos colocar type="module" en el HTML.

const a = function divisionDeFutbol() {
    return "A"
}
const deporte = "Futbol"

class genero {
   constructor(gen){
       this.gen = gen
   }
   retornar() {
       return this.gen
   }
}

//exportando function declaration, function, class
export {deporte, a, genero }

//_____________________________Exports y Import, y heredar _____________________________

export class persona {
    constructor(numero, direccion){
        this.numero = numero;
        this.direccion = direccion
    }

    mostrarInfo(){
        console.log(`mi numero es: ${this.numero} y direccion: ${this.direccion}`)
    }
}

//______________________________Export Default y Alias de Imports_________________________________
//se puede poner un alias desde el import con "as"

const x = 1
const z = 2

export default x
