const producto1 = {
    nombre: "mouse",
    precio: 344,
};

const producto2 = {
    nombre: "Mesa",
    precio: 4555,
};

const producto3 = {
    nombre: "taza",
    precio: 344,
};

let resultado2 = [producto1];
resultado2 = [...resultado2, producto2];
resultado2 = [...resultado2, producto3];

console.log(resultado2.splice(5, 1));
console.log(resultado2);
// -----------------------------------------
let nombresEscogidos = "";
const refri = ["Junior", "Julio", "Juana", "Uo", "Ander"];

refri.forEach(element => {
    const letra = element.charAt(0);
    if (letra === "J") {
        nombresEscogidos += " " + element;
    }
})
console.log(nombresEscogidos);
// const [one, two] = refri
// console.log(one, two)
//____________________________________
let con = {
    a: {
        nomre: "xd",
        edad: 23
    }
}

con.e = { nombre: "xd" }

console.log(con)

//____________________________________