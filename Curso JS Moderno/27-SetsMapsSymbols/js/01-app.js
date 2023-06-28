//Set: Los sets son iterables, y solo usan el valor, no llave valor y soporta cualquier tipo de dato
/*
Ver longitud de Set: .size
Eliminar valor de set: .delete("valor")
Ver si existe un dato: .has("valor")
Agregar elemento a set: .add(elemento)
*/

const set = new Set()
set.add(1)
set.add("Hola")
set.add(2)

set.delete(1)

console.log(set)
console.log(set.has("Hola"))

//Eliminar los valores repetidos de un array
const arrey = [1,2,3,4,2,3]
const ArreyNuevo = new Set(arrey)

//iterar un set

ArreyNuevo.forEach ( valor => {
    console.log(valor)
})

console.log(ArreyNuevo)

/*______________________________WeakSet_____________________________________________
La diferencia con el set es que éste, no se puede iterar, solo acepta objetos, y no tiene .size
*/

const weakset = new WeakSet()

const newObj = {
    nombre: "Junior"
}
weakset.add(newObj)

console.log(weakset.has(newObj))
console.log(weakset)

/*______________________________MAP_____________________________________________
En Map usamos llave, valor, y acepta cualquier tipo de dato

// .get(llave): recogemos el valor
   .set(llave, valor): si la llave existe, entonce reemplazará el valor
   .size
   .has
   .delete
   se puede iterar
   -> Parece que tiene menos performace que Object
*/

//Meter muchos valores a la vez.
const a = new Map([["nombre", "junior"],["apellido", "rodriguez"]])
console.log(a)

a.set("edad", 12)
console.log(a)

console.log(a.get("edad"))
console.log(a.has("edad"))

a.forEach( (valor,llave, a) => console.log(`${llave}: ${valor}\n`))

/*______________________________WeakMAP_____________________________________________
 la llave solo soporta OBJETOS,
 y las otras restricciones que tambien tiene WeakSet
*/

const obj2 = {
    id: 132
}

const b = new WeakMap()
//la llave debe ser un Objeto
b.set(obj2, "idMouse")

//La llave es: obj2 y el valor: idMouse. Esto solo me mostrar el valor; Pero no lo que contiene la llave.
console.log(b.get(obj2))

//______________________________Simbols_____________________________________________

/*
cada Symbol es unico
Los symbols no se pueden iterar
-> Se puede usar para crear keys unicas.
* */

const passUser = Symbol("Clave User")
const simbolo2 = Symbol()
const obj = {}

obj[passUser] = "junior.masna"
obj.presupuesto = 200
obj[simbolo2] = "Symbol sin Descripcion"
obj[Symbol()] = "s"

//______________________________Iterador_____________________________________________
//Esto ocurre detras de un forEach, for...

function crearIterador(
carrito) {
    i = 0;

    return {
        siguiente: () => {
            const fin = (i>=carrito.length)
            const valor = !fin ? carrito[i++] : undefined;

            return {
                fin, valor
            }
        }
    }

}
const carrito = ["juan", "angel", "pedro"]
const recorrerCarro = crearIterador(carrito)
console.log(recorrerCarro.siguiente())
console.log(recorrerCarro.siguiente())
console.log(recorrerCarro.siguiente())

//______________________________Generadores_____________________________________________
//Lo podemos ver como "Una funcion pausable", puedo controlar cuando pausar su ejecucion,
// el yield nos da el estado de la funcion.

function *generador() {
    yield 1;
    yield "Junior";
    yield 3+3;
    yield true;
}

//cada vez que llamamos a next, si o si pasa al siguiente yield.
console.log(generador().next())
console.log(generador().next())

//iterar los elementos de un carrito con generador
function *generador2(carrito) {
    for (let i = 0; i < carrito.length ; i++) {
        yield carrito[i]
    }
}

const carrito2 = ["Tv", "mouse", "ipad"]
const iterador = generador2(carrito2)
console.log(iterador.next())
console.log(iterador.next())
console.log(iterador.next())
console.log(iterador.next())

//______________________________Iteradores_____________________________________________


const ciudades = ['Tokio', 'Helsinki', 'Rio']
const set1 = new Set([1,2,3,4,5])
const map1 = new Map([["nombre", "junior"],["apellido", "rodriguez"]])


//Default: retorna valor.
for(let ciudad of ciudades) { //Esto es igual a usar .value
    console.log(ciudad)
}
for(let e of set1) { //Esto es igua a usar .value
    console.log(e)
}
for(let persona of map1) { //Esto es igual a usar .entries()
    console.log(persona)
}

//keys
//TODO Esto retornarà las keys.
for(let persona of ciudades.keys()) { //Esto es igual a usar .entries()
    console.log(persona)
}

//value
//TODO Esto retornarà las value.
for(let persona of ciudades.values()) { //Esto es igual a usar .entries()
    console.log(persona)
}

//entries: retorna llave y valor
for(let persona of ciudades.entries()) { //Esto es igual a usar .entries()
    console.log(persona)
}

