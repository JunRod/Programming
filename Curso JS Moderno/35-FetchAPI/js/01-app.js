const cargarTxtbtn = document.querySelector("#cargarTxt")
const cargarJSONbtn = document.querySelector("#cargarJSON")
const cargarAPIbtn = document.querySelector("#cargarAPI")

cargarTxtbtn.addEventListener("click", cargartxt)
cargarJSONbtn.addEventListener("click", cargarJSON)
cargarAPIbtn.addEventListener("click", cargarAPI)


//________________________Consumir un JSON_________________________________

function cargarAPI() {
    const url = "https://picsum.photos/list"
    fetch(url)
        .then( resultado => resultado.json())
        .then(texto => mostrarJSON(texto))
}

//____________________Txt_______________________
function cargarJSON() {
    const url = "data/empleado.json"
    fetch(url)
        .then( resultado => resultado.json())
        .then(texto => console.log(texto))
}

//_________________JSON_______________________
function cargartxt() {
    const url = "data/datos.txt"
    fetch(url)
        .then(resultado => {
                return resultado.text()
        })
        .then(texto => {
            console.log(texto)
        })
        .catch(error => {
            console.log(error)
        })
}

function mostrarJSON(datos) {
    const contenido = document.querySelector(".contenido")

    let html = ""

    datos.forEach(dato => {
        const {author, author_url } = dato
        html += `<p> autor: ${author} </p>
                <a href="${author_url}" target="_blank">Ver imagen</a>
                `
    })
    contenido.innerHTML = html
}
