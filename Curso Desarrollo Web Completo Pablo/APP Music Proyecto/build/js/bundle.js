function navegacionFija(){const e=document.querySelector(".header");new IntersectionObserver((function(n){n[0].isIntersecting?e.classList.remove("fijo"):e.classList.add("fijo")})).observe(document.querySelector(".sobre-festival"))}function scrollNav(){document.querySelectorAll(".navegacion-principal a").forEach((function(e){e.addEventListener("click",(function(e){e.preventDefault();document.querySelector(e.target.attributes.href.value).scrollIntoView({behavior:"smooth"})}))}))}function crearGaleria(){const e=document.querySelector(".galeria-imagenes");for(let n=1;n<=12;n++){const t=document.createElement("IMG");t.src=`build/img/thumb/${n}.webp`;const o=document.createElement("LI");o.appendChild(t),e.appendChild(o)}}document.addEventListener("DOMContentLoaded",(function(){scrollNav(),navegacionFija()})),document.addEventListener("DOMContentLoaded",(function(){crearGaleria()}));
//# sourceMappingURL=bundle.js.map