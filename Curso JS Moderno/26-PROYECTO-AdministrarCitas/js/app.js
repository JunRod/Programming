//TODO _____________________________________Variables_____________________________________________
const formulario = document.querySelector("#nueva-cita")
const citasTarjeta = document.querySelector("#citas")
let citas = []
let idSave = 0

//TODO _____________________________________Clases_____________________________________________
class Paciente {
    constructor (nombre, propietario, telefono, fecha, hora, sintomas) {
        this.nombre = nombre;
        this.propietario = propietario
        this.telefono = telefono;
        this.fecha = fecha
        this.hora = hora
        this.sintomas = sintomas
    }

    LlenarInstancia () {
        paciente.nombre = document.querySelector("#mascota").value
        paciente.propietario = document.querySelector("#propietario").value
        paciente.telefono = Number(document.querySelector("#telefono").value)
        paciente.fecha = document.querySelector("#fecha").value
        paciente.hora = document.querySelector("#hora").value
        paciente.sintomas = document.querySelector("#sintomas").value
    }

    //Cree un objeto solo para agregarle el ID.
    CargarObjeto (paciente) {
        const {nombre, propietario, telefono, fecha, hora, sintomas} = paciente
        return {nombre, propietario, telefono, fecha, hora, sintomas, id: Date.now()}
    }

    insertObjeto (DatoObjeto) {
        citas = [...citas, DatoObjeto]
    }

    //actualiza el array cita en el LS
    ActualizaLS (cita) {
        localStorage.setItem("cita", JSON.stringify(cita))
    }

    //Al abrir por primera vez la web, imprimime lo que hay en el LS
    ImprimirLS () {
        citas = JSON.parse(localStorage.getItem("cita"))
        ui.ImprimirDato(JSON.parse(localStorage.getItem("cita")))
    }

    //TODO ____________EDITAR____________
    //Cuando se le da al btn de Editar: filtra el objeto que se editarà
    EditarDato (id) {
        idSave = id
        const [ObjetoCitaEdit] = citas.filter(cita => cita.id === id)

        //una vez filtrado el objeto a editar, mostramos los datos en el form
        ui.MostrarCitaEnForm(ObjetoCitaEdit)
    }

    //cuando se guardan los cambios, actualiza el dato en el Array
    GuardarSave (ObjetoCitaEdit) {
        citas.forEach((cita, index) => {
            if (cita.id === idSave) {
                citas[index] = ObjetoCitaEdit
            }
        })
    }

    //TODO _______________ ELIMINAR_______________
    EliminarDato (id) {
        //recuperamos el LS
        citas = JSON.parse(localStorage.getItem("cita"))

        //filtramos all menos el que se elimina
        citas = citas.filter(cita => cita.id !== id)

        //actualizamos el LS
        paciente.ActualizaLS(citas)

        ui.Mensaje("Cita Eliminada", "success")
        //imprimimos
        ui.ImprimirDato(citas)
    }

}

class UI {
    //Muestra los Datos
    ImprimirDato (citas) {
        const h2 = document.querySelector("#administra")
        ui.limpiarHTML()

        if (citas.length > 0) {
            h2.innerText = "Administra tus Citas"

            //Crear LI de cada Cita
            citas.forEach(cita => {
                const {nombre, propietario, telefono, fecha, hora, sintomas, id} = cita
                const divCita = document.createElement("div")
                divCita.classList.add("card", "p-3")
                divCita.innerHTML = `
                            <h3 class="card-title font-weight-bolder">Nombre: ${nombre}</h3>
                            <p><span class="font-weight-bolder">Propietario: </span>${propietario}</p>
                              <p><span class="font-weight-bolder">Teléfono: </span>${telefono}</p>
                              <p><span class="font-weight-bolder">Hora: </span>${hora}</p>
                              <p> <span class="font-weight-bolder">Fecha: </span>${fecha}</p>
                            <p>  <span class="font-weight-bolder">Sintomas: </span>${sintomas}</p>
                `
                const btnEditar = document.createElement("button")
                const btnEliminar = document.createElement("button")
                const buttons = document.createElement("div")
                buttons.style.display = "flex"
                buttons.style.padding = "0 1rem 1rem 1rem "
                buttons.style.gap = "3rem"

                btnEliminar.innerHTML =
                    "Eliminar <svg xmlns=\"http://www.w3.org/2000/svg\" class=\"h-6 w-6\" fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\" stroke-width=\"2\">\n" +
                    "  <path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z\" />\n" +
                    "</svg>"
                btnEliminar.onclick = () => {
                    paciente.EliminarDato(id)
                }
                btnEliminar.className = "btn btn-danger"

                btnEditar.className = "btn btn-warning"
                btnEditar.innerHTML =
                    "Editar <svg xmlns=\"http://www.w3.org/2000/svg\" class=\"h-6 w-6\" fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\" stroke-width=\"2\">\n" +
                    "  <path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z\" />\n" +
                    "</svg>"
                btnEditar.onclick = () => {
                    paciente.EditarDato(id)
                }

                buttons.appendChild(btnEliminar)
                buttons.appendChild(btnEditar)
                divCita.appendChild(buttons)
                citasTarjeta.appendChild(divCita)
            })
        } else {
            h2.innerText = "No hay Citas, comienza creando una"
        }
    }

    //Muestra el objeto que se editarà en el FORM
    MostrarCitaEnForm (ObjetoCitaEdit) {
        const {nombre, propietario, telefono, fecha, hora, sintomas} = ObjetoCitaEdit

        document.querySelector("#mascota").value = nombre
        document.querySelector("#propietario").value = propietario
        document.querySelector("#telefono").value = telefono
        document.querySelector("#fecha").value = fecha
        document.querySelector("#hora").value = hora
        document.querySelector("#sintomas").value = sintomas

        //Los botones eliminar entran en Disable
        ui.DisableEliminarBtn("disable")

        //agregamos clase para que cumpla la condicion en validarFormulario()
        formulario.classList.add("guardar")

        //Cambiar texto del boton
        formulario.querySelector('button[type="submit"]').textContent = "Guardar Cambios"
    }

    //Todos los eliminar de los li dejan de funcionar
    DisableEliminarBtn (tipo) {
        const todosLi = citasTarjeta.querySelectorAll(".card")
        if (tipo) {
            todosLi.forEach(e => {
                e.lastElementChild.children[0].disabled = true
            })
            return
        }
        todosLi.forEach(e => {
            e.lastElementChild.children[0].disabled = false
        })

    }

    limpiarHTML () {
        while (citasTarjeta.firstChild) {
            citasTarjeta.removeChild(citasTarjeta.firstChild)
        }
    }

    Mensaje (texto, tipo) {
        Swal.fire({
                      position: 'center',
                      icon: tipo,
                      title: texto,
                      showConfirmButton: false,
                      timer: 1500
                  })
    }

}

//TODO ______________________________________Instanciar____________________________________________
let paciente = new Paciente();
const ui = new UI()

//TODO ______________________________________Funciones____________________________________________
EventsListeners()

function EventsListeners () {
    document.addEventListener('DOMContentLoaded', paciente.ImprimirLS)
    formulario.addEventListener('submit', validarFormulario)
}

function validarFormulario (e) {
    e.preventDefault()

    paciente.LlenarInstancia()
    const year = Number(paciente.fecha.substring(0, 4)),
        month = Number(paciente.fecha.substring(5, 7)),
        day = Number(paciente.fecha.substring(8, 10)),
        year_ = new Date().getFullYear(),
        month_ = new Date().getMonth(),
        day_ = new Date().getDate();

    //Validar Inputs
    if (paciente.nombre === "" || paciente.propietario === "" || paciente.fecha === "" || paciente.hora === "" || paciente.sintomas === "") {
        ui.Mensaje("Debe completar todos los campos", "error")
        return
    } else if (isNaN(paciente.telefono) || paciente.telefono.toString().length !== 9) {
        ui.Mensaje("Ingrese un teléfono válido", "error")
        return
    } else if (year.toString().length < 4 || year < year_) {
        ui.Mensaje("Escoja una fecha válida", "error")
        return
    } else if (month < (month_ + 1)) { //los meses de Date() empiezas de 0
        ui.Mensaje("Escoja una fecha válida", "error")
        return
    } else if (day <= day_) {
        ui.Mensaje("Escoja una fecha válida", "error")
        return
    } else if (Number(paciente.hora.substring(0, 2)) > 20) {
        ui.Mensaje("La hora debe ser menor a las 20:00", "error")
        return
    }
    //Para Guardar el Edit
    if (e.target.classList.contains("guardar")) {
        paciente.GuardarSave(paciente.CargarObjeto(paciente))

        //volvemos a hacer funcionar los button eliminar de los li
        ui.DisableEliminarBtn()

        //Removemos la clase "guardar" del form,que hacia que entráramos aquí
        formulario.classList.remove("guardar")

        //Volvemos el button submit a la normalidad
        formulario.querySelector('button[type="submit"]').textContent = "Crear Cita"

        ui.Mensaje("Cambios Actualizados", "success")
    } else {
        //Para crear nueva Cita
        paciente.insertObjeto(paciente.CargarObjeto(paciente))
        ui.Mensaje("Cita Creada", "success")
    }
    paciente.ActualizaLS(citas)
    ui.ImprimirDato(citas)
    formulario.reset()

}
