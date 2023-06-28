//!LocalStorage
//Soporta solo 5MB, a diferencia de IndexedDB, que soporta ilimadamente
//Es buena solucion para almacenar poca informacion (Carrito de compras abandonado, etc)
//?Local Sotrage solo soporta Strings. pero si queremos pasarle un objeto podemos usar JSON.stringify; esto convertira lo que sea en String, listo para ser soportado por LocalStorage.

const producto = [
    {
        producto: "Televisor 90'",
        precio: 200,
    },
];

localStorage.setItem("producto", JSON.stringify(producto));
localStorage.setItem("producto2", "3000");
localStorage.setItem("producto3", "4300");
localStorage.setItem("producto4", "5500");

//*Iterando sobre el localStorage
//?Forma 1
for (let index = 0; index < localStorage.length; index++) {
    let key = localStorage.key(index);
    console.log(localStorage.getItem(key));
}
//?Forma 2
let keys = Object.keys(localStorage);
for (let key of keys) {
    console.log("key: " + localStorage.getItem(key));
}

//*Eliminar y actualizar un registro del LS
localStorage.removeItem("producto2");

//*Actualizar un registro
const objetNew = {
    producto: "Televisor 20'",
    precio: 4300,
};
const arrayItem = recuperarItem("producto"); //[{}]
arrayItem.push(objetNew); //[{},{}]
setItem("producto", arrayItem);

function recuperarItem(llave) {
    let item = JSON.parse(localStorage.getItem(llave));
    return item;
}

function setItem(llave, valor) {
    localStorage.setItem(llave, JSON.stringify(valor));
}

localStorage.clear();
//*Obtener Datos: localStorage.getItem(key)
//*Poner Dato: localStorage.setItem("llave", "valor")
//*Limpiar todo: localStorage.clear()
//*Convertir de Object a String: JSON.stringify()
//*Convertir de String a Object: JSON.parse()
