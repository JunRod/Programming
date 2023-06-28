package test;

import datos.*;
import domain.Persona;
import java.sql.*;

public class TestManejoPersonas {

    public static void main(String[] args) {

        Connection conexion = null;
        try {
            conexion = Conexion.getConnection();
            if (conexion.getAutoCommit()) {
                conexion.setAutoCommit(false);
            }
            PersonaDAO personaDao = new PersonaDAO(conexion); //Si no le pasamos el objeto de conexion de la BD de forma externa, entonces hará commit automaticmaente,
            //entonces ya no aplicaria el concepto de Manejo de Transacciones, puesto que ya no podriamos ejecutar varias sentencias MySQL
            Persona personaBorrar = new Persona();
            personaBorrar.setIdPersona(2);
            personaDao.borrar(personaBorrar);
            
            conexion.setAutoCommit(true); //use autoCommit() solo para asegurarme de que se guardaron o no los cambios, ya que commit solo los hace true en ese momento.
            
            if(conexion.getAutoCommit()){
                System.out.println("Cambios Guardados");
            } else {
                System.out.println("Commit no establecido: no se guardaron los cambios.");
            }
            
        } catch (SQLException ex) {
            ex.printStackTrace(System.out);
            System.out.println("Entramos al rollback");
            try {
                conexion.rollback();
            } catch (SQLException ex1) {
                ex1.printStackTrace(System.out);
            }
        }

        /*
                    
                    Crear objeto persona y mandandolo cargado a insertar.
                    /*Persona persona1 = new Persona("Angel", "Rodriguez", "arodriguez@gmail.com", "1213213123");
                    personaDao.insertar(persona1);
                    
                    //Modificar/actuzalizar un registro de la DB
                    Persona persona2 = new Persona(5, "JPoeta", "Informatico", "JPInformatico@gmail.com", "1213213123");
                    personaDao.actualizar(persona2);
                    
                    //borrar un registro de la DB
                    Persona registroBorrar = new Persona(6);
                    personaDao.borrar(registroBorrar);
                    
                    
                    //Seleccionar y imprimir todo.
                    List<Persona> personas = personaDao.seleccionar();
                    for (Persona persona: personas) {
                    System.out.println("persona = " + persona);
                    }
         */
    }

}
