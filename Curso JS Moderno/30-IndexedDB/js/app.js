let DB

document.addEventListener("DOMContentLoaded", () => {
    crmDB()
    for (let i = 0; i < 2; i++) {
        setTimeout( () => {
            const nombre = prompt("ingresa nombre")
            const apellido = prompt("ingresa apellido")
            const email = prompt("ingresa email")
            crearCliente(nombre, apellido, email)
        },5000)
    }
})

function crmDB() {

    //Crear la db version 1.0
    let crmDB = window.indexedDB.open("crm", 1)

    crmDB.onerror = function () {
        console.log("Error al crear IndexedDB")
    }

    crmDB.onsuccess = function() {
        console.log("Se creo indexedDB")
        DB = crmDB.result
    }

    crmDB.onupgradeneeded = function(e) {
        const db = e.target.result

        const objecStore = db.createObjectStore ("crm", {
            keyPath: "crm",
            autoIncrement: true
        })

        objecStore.createIndex("nombre", "nombre", {unique: false})
        objecStore.createIndex("apellido", "apellido", {unique: false})
        objecStore.createIndex("email", "email", {unique: true})

        console.log("todo creado")
    }

}

function crearCliente (nombre, apellido, email) {
    let transaction = DB.transaction(["crm"], "readwrite") //Abrir/conectar transacción en la base de datos ["crm"], y
    //luego indicamos el tipo: lectura y escritura o tambièn puede ser lectura: readonly

    transaction.oncomplete= function (){
        console.log("conexion completada")
    }

    transaction.onerror = function (){
        console.log("error en la transaccion")
    }

    const objectStore = transaction.objectStore("crm")//Abrir almacén de objetos en transacción

    const nuevoCliente = {
        nombre,
        apellido,
        email
    }
    objectStore.add(nuevoCliente) //Realizar operación en el almacén de objetos
}