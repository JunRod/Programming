package test;

import java.sql.*;
import java.util.List;
import personas.dto.PersonaDTO;
import personas.jdbc.*;

public class ManejoPersona {

    public static void main(String[] args) {
        
        Connection c = null;
        try {
            c = Conexion.getConnection();
            if(c.getAutoCommit()){
                c.setAutoCommit(false);
            }
            PersonaDao personaDao = new PersonaDaoJDBC(c);
            /*
            List<PersonaDTO> personas = personaDao.select();
            for (PersonaDTO persona : personas){
                System.out.println("persona = " + persona);
            }
            */
            PersonaDTO p1 = new PersonaDTO();
            p1.setNombre("Angel");
            p1.setApellido("Marrón");
            p1.setIdPersona(14);
            personaDao.update(p1);
            
            c.setAutoCommit(true);
            System.out.println("Se ha hecho commit de la transacción");
        } catch (SQLException ex) {
            ex.printStackTrace(System.out);
            System.out.println("Entrando al rollback...");
            try {
                c.rollback();
            } catch (SQLException ex1) {
                ex1.printStackTrace(System.out);
            }
            
        }
        
    }


}
