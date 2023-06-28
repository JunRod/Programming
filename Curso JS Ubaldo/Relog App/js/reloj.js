const mostrarReloj = () => {
    let fecha = new Date();
    let hr = darFormato(fecha.getHours());
    let min = darFormato(fecha.getMinutes());
    let sec = darFormato(fecha.getSeconds());
    document.getElementById("hora").innerHTML = `${hr}:${min}:${sec}`;

    const meses = ["ene", "feb", "mar" , "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"];
    const dias = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];
    let diaSemana = dias[fecha.getDay()]
    let dia = fecha.getDate()
    let mes = meses[fecha.getMonth()]
    let año = fecha.getFullYear()
    textoFecha = `${diaSemana}, ${dia} de ${mes} de ${año}`
    document.getElementById("fecha").innerHTML = textoFecha

    document.getElementById("contenedor").classList.toggle("animar");
};

const darFormato = (hora) => {
    if (hora < 10)
        hora = "0" + hora
    return hora;
};

setInterval(mostrarReloj, 1000);
