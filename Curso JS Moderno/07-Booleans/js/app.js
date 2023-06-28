//!Forma de crear Booleans
const a = new Boolean(true)
console.log(typeof a)
    //?tomará como un objeto el booleans

//!Operador Ternario
const autenticado = true
console.log(autenticado ? "Si se autentico" : "No esta autenticado")

//!Comparar Booleans
const n1 = true
const n2 = "true"

console.log(n1 == n2)
    //? Este operador "flojo" no funciona igual que en numeros y strings, donde si te lo puede pasar. acá en booleans el operador flojo no funciona.