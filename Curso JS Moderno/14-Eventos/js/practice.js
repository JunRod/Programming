const abrirForm = document.querySelector("#abrirForm");
const contenedor = document.querySelector("body");

abrirForm.addEventListener("click", function formOn() {
    //Creando el elemento que contendra todo
    let template = document.createElement("FORM");
    template.classList.add("contenedorForm");
    //haciendo que el form no envie nada y por lo tanto no se refrescara la pagina
    template.onsubmit = () => {
        return false;
    };
    //introduciendole todo al form
    template.innerHTML = /*html*/ `
        <p>Introduce Algo</p>
        <input class="one" type="text" value = "" >
        <div class="buttons">
            <input class="ok" type="submit" value="Ok">
            <input class="cancelar" type="button" value="Cancelar" onclick="alert('No enviaste nada')">
        </div>
    `;
    contenedor.insertBefore(template, contenedor.children[2]);

    //_______________________________________________________
    const one = document.querySelector(".one");
    const ok = document.querySelector(".ok");

    //Cancelando cuando se pega
    one.addEventListener("paste", (evt) => {
        evt.preventDefault();
        evt.target.value = "";
    });
    ok.addEventListener("click", () => {
        alert(`Escribiste: ${one.value}`);
    });
});

/*//*Aprendi algo de esto. para agregar elementos dinamicos al HTML.
Cuando use innerHTML, podia agregarle un "String." a un elemento de HTML traido a JS y igual me funcionaba
Pero cuando use appendChild o insertBefore, solo me pedia nodos, es decir un elemento HTML ya creado, no un string.
por lo que tenia que crear aca el elemento HTML y luego darle innerHTML y recien agregarle el String. Luego este mismo nodo con el String dentro ya podia ser utilizado en appendChild o insertBefore

*/
