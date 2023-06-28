//Mini Testing

function suma(a, b) {
    return a + b
}

async function sumaAsync(a , b) {
    return Promise.resolve( suma ( a, b))
}

test("Suma 10 + 20 y el resultado debe ser 30", async () => {
    const resultado = await sumaAsync(10, 20)
    const esperado = 30
    expected(esperado).toBe(resultado)
})

async function test(mensaje, callback) {
    try {
        await callback()
        console.log(`El test: ${mensaje} se ejecutó correctamente`)
    } catch (error) {
        console.log(error)
    }
}

function expected( esperado ) {
    return {
        toBe(resultado) {
            if( resultado !== esperado) {
                console.log(`El resultado es diferente de los esperado`)
            } else {
                console.log("El test paso correctamente")
            }
        }
    }
}