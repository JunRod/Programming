//! Notification API
//Una API es el puente que conecta una app con otra.
const notificarBtn = document.querySelector('#notificar');
const verNotificacionBtn = document.querySelector('#verNotificacion');

notificarBtn.addEventListener('click', () => {
    Notification.requestPermission()
        .then((resultado) => {
            console.log('El resultado es ', resultado);
        })
        .catch((resultado) => {
            console.log('El resultado es ', resultado);
        });
});

verNotificacionBtn.addEventListener('click', () => {
    if (Notification.permission === 'granted') {
        const noti = new Notification('Esta es una notificacion', {
            icon: 'img/ccj.png',
            body: 'Click para abrir Google',
        });

        noti.onclick = () => {
            window.open('htttp://www.google.com');
        };
    }
});

//!Saber si tenemos conexion o no a internet

//*Una cosa clave es que si le ponemos () a las funciones dentro de addEventListener: Se mandan a llamar automaticamente, sin haber "Escuchado" el evento. si no tienen (: se ejecutará solo cuando escuche el eveneto en window

window.addEventListener('online', verConexcion);
window.addEventListener('offline', verConexcion);

function verConexcion() {
    if (navigator.onLine) {
        console.log('conectado');
    } else {
        console.log('sin conexcio');
    }
}

//!Full Screen
const FullSreen = document.querySelector('#abrir-pantalla-completa');
const Exit = document.querySelector('#salir-pantalla-completa');

FullSreen.addEventListener('click', fullscreen);
Exit.addEventListener('click', exitfullscreen);

function fullscreen() {
    document.documentElement.requestFullscreen();
}

function exitfullscreen() {
    document.exitFullscreen();
}

//!Saber si estamos en la web o no

document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible') {
        console.log('reproducirVideo()');
    } else {
        console.log('detenerVideo()');
    }
});

//Spech Recognition API
const microfono = document.querySelector("#microfono")
const salida = document.querySelector("#salida")

microfono.addEventListener("click", speech)

function speech() {
    const speechRecognition = webkitSpeechRecognition
    const speechRecognitionAPI = new speechRecognition

    speechRecognitionAPI.start()

    speechRecognitionAPI.onstart = function () {
        salida.classList.add("mostrar")
        salida.textContent  = "Escuchando..."
    }

    speechRecognitionAPI.onspeechend = function () {
        salida.textContent = "Se terminó de grabar"
        speechRecognitionAPI.stop()
    }

    speechRecognitionAPI.onresult = function(e) {
        const {transcript, confidence} = e.results[0][0]
        setTimeout(() => {
            salida.textContent = `Resultado: ${transcript} | Confianza: ${parseInt(100*confidence)}%`
        },1000)
    }

}
