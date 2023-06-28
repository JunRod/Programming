//!2. String Methods - includes y length

const producto = "Monitor 10 Pulgadas";

//*Saber cuantos letras tiene el String
console.log(producto.length);
//*Saber en que posicion esta el String en la variable
console.log(producto.indexOf("Pul"));
//*Saber si el string se encuentra en la variable
console.log(producto.includes("Pulgadas"));

//!4 Cortar Espacios en Blanco de un String

const product = "                  juniormen.12321@gmail.com                                 ";

//*Borrar espacio de adelante
console.log(product.trimStart())
    //*Borrar espacio de atras
console.log(product.trimEnd())
    //*Borrar ambos espacios
console.log(product.trim())

//?Estas funciones se pueden usar para extraer solo datos reales de un formulario.

//!5 Replace, Slice, Substring

const producto1 = 'Macbook Pro M1';

//*Replace para reemplazar.
console.log(producto1)
console.log(producto1.replace('M1', 'M2'))
    //*Slice para corta
console.log(producto1.slice(0, 11));
console.log(producto1.slice(2, 1)); //=> No hace nada.
//*Alternativa a slice
console.log(producto1.substring(0, 11))
console.log(producto1.substring(2, 1)) //=> Modifica el inicio y final de recorte cuando hay un mayor primero, y intenta hacer algo

//?Cual es la diferencia entre slice y substring: slice => No hace nada al ver un numero mayor primero. substring => Invierte los numeros de recorte en caso de haber un numero mayor primero.

//TODO ¿Como le hacen para extraer una letra del nick y mostrarlo en la interfaz?
const usuario = "Junior";
console.log(usuario.substring(0, 1))
console.log(usuario.charAt(0))
    //?Se puede hacer lo mismo tanto con Substring y CharAt.

//!Repeat y Split
//*Repeat, repite una cadena de texto
const producto4 = "Mouse Logitech"
const texto = "En promocion".repeat(2.5) //? ¿Que pasa si ponemos decimales? Lo dedondea.
console.log(`${producto4} ${texto}!!!`)

//*Split, corta una cadena de texto
const actividad = "Estoy aprendiendo JavaScript Moderno"
console.log(actividad.split(" ")) //=>Divide la cadena de texto cuando encuentra un espacio.
const precios = "100, 300, 400, 500, 500, 200"
console.log("SPLIT " + precios.split("300")) //=>Divide la cadena de texto cuando encuentra una coma
const tweet = "Bueno gente aqui aprendiendo #100DaysOfCode"
const hashtag = tweet.split("#") //=>Separamos el hastag para mostralo en la interfaz.
document.querySelector(".hashtag").innerHTML = `#${hashtag[1]}`

//!Convertir a Mayusculas o Minusculas.
//*Convertir a mayusculas
const cadena = "hola soy german"
console.log(cadena.toUpperCase())

//*Convertir a minusculas.
const cadenaMayus = "HOLA SOY GERMAN"
console.log(cadena.toLowerCase())

//* Convertir un numero a cadena
const numb3r = 400;
console.log(numb3r.toString())