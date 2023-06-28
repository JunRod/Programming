const resultado = document.querySelector('#resultado');
const criptomonedas = document.querySelector('#criptomonedas');
const formulario = document.querySelector('#formulario');

document.addEventListener('DOMContentLoaded', consultarAPI);
formulario.addEventListener('submit', validarForm);

function consultarAPI() {
    const url = `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD`;

    // fetch(url)
    //     .then((respuesta) => respuesta.json())
    //     .then((resultado) => selectCriptomonedas(resultado.Data));

    try {
        const respuesta = await fetch(url)
        const resultado = await respuesta.json()
        selectCriptomonedas(resultado.Data)
    } catch (error) {
        console.log(error)
    }

}

function validarForm(e) {
    e.preventDefault();

    const moneda = document.querySelector('#moneda').value;
    const criptomonedas = document.querySelector('#criptomonedas').value;

    if (moneda === '' || criptomonedas === '') {
        Mensaje('Debe llenar ambos campos', 'error');
        return;
    }

    CryptoConsultarAPI(moneda, criptomonedas);
}

async function CryptoConsultarAPI(moneda, criptomonedas) {
    mostrarSpinner();
    const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomonedas}&tsyms=${moneda}`;

    // fetch(url)
    //     .then((respuesta) => respuesta.json())
    //     .then((resultado) => {
    //         setTimeout(() => {
    //             mostrarCortizacionHTML(resultado.DISPLAY[criptomonedas][moneda]);
    //         }, 1000);
    //     });


    try {
        const respuesta = await fetch(url)
        const resultado = await respuesta.json()
        mostrarCortizacionHTML(resultado.DISPLAY[criptomonedas][moneda]);

    } catch (error) {
        console.log(error)
    }


}

function mostrarSpinner() {
    while (resultado.firstChild) {
        resultado.removeChild(resultado.firstChild);
    }

    const spinner = document.createElement('div');
    spinner.classList.add('spinner');
    spinner.innerHTML = `<div class="dot1"></div>
                         <div class="dot2"></div>`;
    resultado.appendChild(spinner);
}

function mostrarCortizacionHTML(cotizacion) {
    while (resultado.firstChild) {
        resultado.removeChild(resultado.firstChild);
    }

    const { LOWDAY, HIGHDAY, PRICE, CHANGEPCTDAY, LASTUPDATE } = cotizacion;

    const precio = document.createElement('p');
    precio.classList.add('precio');
    precio.innerHTML = `El Precio es <span>${PRICE}</span>`;

    const precioAlto = document.createElement('p');
    precioAlto.innerHTML = `El <span class="boldtext">Precio</span> mas <span class="boldtext">Alto</span> del día: <span class="boldtext">${HIGHDAY}</span>`;

    const precioBajo = document.createElement('p');
    precioBajo.innerHTML = `El <span class="boldtext">Precio</span> mas <span class="boldtext">Bajo</span> del día: <span class="boldtext">${LOWDAY}</span>`;

    const cambioDelDia = document.createElement('p');
    cambioDelDia.innerHTML = `El <span class="boldtext">Cambio</span> del día es: <span class="boldtext">${CHANGEPCTDAY}</span>%`;

    const ultimaAct = document.createElement('p');
    ultimaAct.innerHTML = `La <span class="boldtext">Ultima Actualización</span> ocurrió: <span class="boldtext">${LASTUPDATE}</span>`;

    resultado.appendChild(precio);
    resultado.appendChild(precioAlto);
    resultado.appendChild(precioBajo);
    resultado.appendChild(cambioDelDia);
    resultado.appendChild(ultimaAct);
}

function selectCriptomonedas(criptos) {
    criptos.forEach((cripto) => {
        const {
            CoinInfo: { FullName, Name },
        } = cripto;
        const option = document.createElement('option');
        option.value = Name;
        option.textContent = FullName;
        criptomonedas.appendChild(option);
    });
}

function Mensaje(texto, tipo) {
    Swal.fire({
        position: 'center',
        icon: tipo,
        title: texto,
        showConfirmButton: false,
        timer: 1500,
    });
}
