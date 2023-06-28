function Cliente (nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
}

Cliente.prototype.tipoCliente = function() {
    let tipo;

    if(this.saldo > 10000) {
        tipo = "Gold"
    }else if (this.saldo > 5000){
        tipo = "Platium"
    }else {
        tipo = "Normal"
    }
    return tipo;
}

Cliente.prototype.nombreClienteSaldo = function () {
    return `Nombre: ${this.nombre}, Saldo: ${this.saldo}, Tipo Cliente: ${this.tipoCliente()}`
}

Cliente.prototype.retiraSaldo = function(saldo) {
    this.saldo-= saldo
}

const Junior = new Cliente("Junior", 60000 )
console.log(Junior.tipoCliente())

Junior.retiraSaldo(51000)
console.log(Junior.tipoCliente())
console.log(Junior.nombreClienteSaldo())

function Persona (nombre, saldo, telefono) {
    Cliente.call(this, nombre, saldo) //Heredar atributos de el Objeto Cliente a Persona
    this.telefono = telefono
}

//Heredar Prototypes de Client a Persona
Persona.prototype = Object.create(Cliente.prototype)
const angel = new Persona("Angel", 4000, 23131313)

console.log(angel.nombreClienteSaldo())
