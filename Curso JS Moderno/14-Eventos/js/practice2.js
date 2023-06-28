window.addEventListener("scroll", () => {
    const one = document.querySelector(".one");
    const two = document.querySelector(".two");
    const three = document.querySelector(".three");
    const four = document.querySelector(".four");
    const ubicacion = one.getBoundingClientRect();

    if (ubicacion.top < 664 && ubicacion.top > -480) {
        let number = -0.1 * ubicacion.y + "rem";
        one.style.left = number;
    }
    if (ubicacion.y < 191 && ubicacion.y > -967) {
        let number1 = -0.1 * ubicacion.y - 50;
        two.style.right = number1 + "rem";
    }
    if (ubicacion.y < -287 && ubicacion.y > -1600) {
        let number1 = 0.1 * ubicacion.y + 100;
        three.style.right = number1 + "rem";
    }
});

const referencia = document.querySelector(".ola");
const referencia2 = document.querySelector(".padre");
const newELement = document.createElement("DIV");
newELement.classList.add("nuevoObjeto");

referencia.addEventListener("click", () => {
    referencia2.insertBefore(newELement, referencia);
});

newELement.onclick = () => {
    console.log("Hola");
};
