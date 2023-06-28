package test;

import datos.PersonaDAO;
import domain.Persona;
import java.util.List;

public class TestManejoPersonas {
    
    public static void main(String[] args) {
        PersonaDAO personaDao = new PersonaDAO();
        
        //Crear objeto persona y mandandolo cargado a insertar.
        /*Persona persona1 = new Persona("Angel", "Rodriguez", "arodriguez@gmail.com", "1213213123");
        personaDao.insertar(persona1);
        */
        
        //Modificar/actuzalizar un registro de la DB
        Persona persona2 = new Persona(5, "JPoeta", "Informatico", "JPInformatico@gmail.com", "1213213123");
        personaDao.actualizar(persona2);
        
        /*
        //borrar un registro de la DB
        Persona registroBorrar = new Persona(6);
        personaDao.borrar(registroBorrar);
        */
        
        
        
        
        
        //Seleccionar y imprimir todo.
        List<Persona> personas = personaDao.seleccionar();
        for (Persona persona: personas) {
            System.out.println("persona = " + persona);
        }
        
        
        
        
        
    }
    
}
