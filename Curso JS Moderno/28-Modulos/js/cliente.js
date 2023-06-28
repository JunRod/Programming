import VariablExportado, {deporte, a, genero, persona} from './app.js'

const generoInstancia = new genero("pop")
//exportando function declaration, function, class
console.log(deporte, a() , generoInstancia.retornar())

//_____________________________________________________________
//importando persona
//herendando la clase persona a la clase cliente y exportandola ya heredada y con una funcion sobreescrita
export class cliente extends persona {
    constructor(numero, direccion, nombre) {
        super(numero,direccion)
        this.nombre= nombre;
    }

    mostrarInfo(){
        console.log(`mi nombre es: ${this.nombre}, mi numero es: ${this.numero} y direccion: ${this.direccion}`)
    }
}

//Importando Exports defaults
console.log(VariablExportado)


