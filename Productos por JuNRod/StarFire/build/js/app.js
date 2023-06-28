document.addEventListener("DOMContentLoaded", function() {
    document.addEventListener("mousemove", parallax);
    parpadeo()
    starFires();
});

// Efecto Parallax
function parallax(e) {
    document.querySelectorAll(".object").forEach(function(move) {
        var moving_value = move.getAttribute("data-value");
        var x = (e.clientX * moving_value) / 250;
        var y = (e.clientY * moving_value) / 250;

        move.style.transform = "translateX(" + x + "px) translateY(" + y + "px)";
    });
}

// Parpadeo de star y borrar
function parpadeo() {
    for (let i = 1; i <= 20; i++) {
        setInterval(() => {
            let contenedor = document.querySelector(".stars");
            let star = document.createElement("DIV");
            star.style.zIndex = "-9";
            star.style.height = Math.floor(Math.random() * 8) + "px";
            star.style.width = star.style.height;
            star.style.left = Math.floor(Math.random() * 1600) + "px";
            star.style.bottom = Math.floor(Math.random() * 400) + "px";
            contenedor.appendChild(star);
            setTimeout(function borrarStar() {
                star.remove();
            }, 4900);
        }, 5000);
    }
}

//starsfire

function starFires() {
    for (let i = 1; i <= 3; i++) {
        setInterval(() => {
            let contenedor = document.querySelector(".starsfires");
            let starFire = document.createElement("DIV");
            let bola = document.createElement("DIV");
            let cuerpo = document.createElement("DIV");
            //tamaño de bola y cuerpo
            bola.style.height = Math.floor(Math.random() * (5 - 5) + 5) + "px";
            bola.style.width = bola.style.height;
            cuerpo.style.width = Math.floor(Math.random() * (5 - 5) + 5) + "px";
            starFire.style.top = Math.floor(Math.random() * ((-100) - (-100)) + (-100)) + "px";
            //agregando class name cd parte
            starFire.className = `starfire`;
            bola.className = "bola";
            cuerpo.className = "cuerpo";
            //

            starFire.appendChild(bola);
            starFire.appendChild(cuerpo);
            contenedor.appendChild(starFire);
            setTimeout(function borrarStarfire() {
                starFire.remove();
            }, 10000);
        }, 10000);
    }
}

//music
const audio = document.getElementById("audio-stars");
const playPaused = document.getElementById("play");

playPause.addEventListener("click", () => {
    if (audio.paused || audio.ended) {
        playPause.querySelector(".pause-btn").classList.toggle("hide");
        playPause.querySelector(".play-btn").classList.toggle("hide");
        audio.play();
    } else {
        audio.pause();
        playPause.querySelector(".pause-btn").classList.toggle("hide");
        playPause.querySelector(".play-btn").classList.toggle("hide");
    }
});