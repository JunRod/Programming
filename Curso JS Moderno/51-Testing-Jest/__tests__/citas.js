import Citas from "../js/classes/Citas";

describe("Probar la clase de Citas", () => {
    const citas = new Citas()

    test("Agregar una nueva cita", () => {
        const citaObj = {
            mascota: 'Perrillo',
            propietario: 'Juniior',
            telefono: '02323233',
            fecha: '10-30-2022',
            hora:'18:04',
            sintomas: 'solo duerme'
        }

        citaObj.id = Date.now();

        citas.agregarCita(citaObj)

        //Prueba
        expect(citas).toMatchSnapshot()
    })
})