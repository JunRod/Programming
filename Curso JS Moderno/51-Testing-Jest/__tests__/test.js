//Probando String
const password = "12345"

describe("Valida que hayan 5 caracteres", () => { //Describe es un funcion que contienen todos los test
    test("Que el password tenga 5 caracteres", () => {
        expect( password ).toHaveLength(5)
    })

    test("Probar que no contenga 0 caracteres", () => {
        expect( password ).not.toHaveLength(0)
    })
    
})

//Probando Arrays
const array = ["Junior", "Ale", "Claudia"]

describe("Validar un array", () => {
    test("Valida que el array contenga 3 elementos", () => {
        expect(array).toHaveLength(3)
    })

    test("Valida que el array no este vacio", () => {
        expect(array).not.toHaveLength(0)
    })
})

// Probar un Objeto

const obj = {
    nombre: "Junior",
    balance: 300
}

describe("Testing al obj", () => {
    test("El obj es premium", () => {
        expect(obj.balance).toBeGreaterThan(200) //Es mayor que
    })

    test("No tiene 400", () => {
        expect(obj.balance).not.toBe(400)
    })

    test("Es Junior", () => {
        expect(obj.nombre).toBe("Junior")
    })

    test("No es Pedro", () => {
        expect(obj.nombre).not.toBe("Pedro")
    })

})

//Probar Funciones

function multiplicar (a, b) {
    return a * b
}

describe("Testing a funciones", () => {
    test("Probar funciones 10 * 20", () => {
        expect(multiplicar(10, 20)).toBe(200)
    })

    test("Probar que el resultado no es 200", () => {
        expect(multiplicar(2,4)).not.toBe(200)
    })
})

//Snapchots - Es como una base de datos donde podemos guardar cualquier cosa(funciones, objetos, etc) para que
//si en un futuro estas cosas guardadas en formato String son modificados en el proyecto real, podamos reescribir estas actualizaciones en "la base de datos"  y asi podamos ver si coinciden instantaneamente

const cliente = {
    nombre: "JuNRod",
    precio: 300
}

describe("testing a objeto cliete", () => {
    test("es Jun",() => {
        expect(cliente).toMatchSnapshot()
    })
})

//Si vemos que hubo un cambio en el original y queremos actualizar el snapShot usamos .toMatchSnapshot()
//Lo que estaria pasando es que estaria haciendo pruebas con un usuario nuevo, osea el antiguo es obsoleto.


