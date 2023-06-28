//!Detener la ejecución de un if con una función

const numero = 20;

function DetenerFunction() {
    if (numero >= 10) {
        console.log("Dentro del primer if")
        return;
        //*Una vez se ejecuta este return, el reto del codigo se ignora. Los returns solo funciona en varios if dentro de una function.
    }
    if (numero < 10) {
        console.log("Dentro del segundo if")
        return;
    }
}

DetenerFunction()

//!Operador Ternario Aninado (es como tener un if anidado dentro de un if)
const autenticado = true;
const puedePagar = false;

console.log(autenticado ? puedePagar ? 'si esta autenticado y puede pagar' : 'Si esta autenticado, no puede pagar' : 'No, no esta autenticado')