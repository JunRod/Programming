package datos;

import static datos.Conexion.*;
import domain.Persona;
import java.sql.*;
import java.util.*;

public class PersonaDAO {
    //Esta clase es un patron de diseño, que contiene las operaciones (SELECT, INSERT, UPDATE, DELETE) sobre la tabla de entiedad (Persona)
    //Data Access Object, si tenemos varias entidades entonces tendremosque tener varias clases DAO
    
    int idpersona;
    String nombre, apellido, email, telefono;
    private static final String SQL_SELECT = "SELECT idpersona, nombre, apellido, email, telefono FROM persona";
    private static final String SQL_INSERT = "INSERT INTO persona(nombre, apellido, email, telefono) VALUES(?, ?, ?, ?)";
    private static final String SQL_UPDATE = "UPDATE persona SET nombre = ?, apellido = ?, email = ?, telefono = ? WHERE idpersona = ?";
    private static final String SQL_DELETE = "DELETE FROM persona WHERE idpersona = ?";
    
    //El comodin "?" es para sustituir valores, estos comodines deben ser de equivalentes a los atributos de la base de datos, y depende tambien de que sentencia se usa.
    
    public List<Persona> seleccionar () {
        Connection conn = null;
        PreparedStatement stm = null;
        ResultSet rs = null;
        Persona persona = null;
        List<Persona> personas = new ArrayList<>();
        
        try {
            conn = getConnection();
            stm = conn.prepareStatement(SQL_SELECT);
            rs = stm.executeQuery();
            
            while (rs.next() ) {
                int idPersona = rs.getInt("idpersona");
                String nombre = rs.getString("nombre");
                String apellido = rs.getString("apellido");
                String email = rs.getString("email");
                String telefono = rs.getString("telefono");
                
                persona = new Persona(idPersona, nombre, apellido, email, telefono);
                personas.add(persona);
            }
        } catch (SQLException ex) {
            System.out.println(System.out);
        } finally {
            try {
                close(rs);
                close(stm);
                close(conn);
            } catch (SQLException ex) {
                ex.printStackTrace(System.out);
            }
        }
        return personas;
    }
    
    public int insertar(Persona persona) {
        Connection conn = null;
        PreparedStatement stm = null;
        int registros = 0;
        try {
            conn = getConnection();
            stm = conn.prepareStatement(SQL_INSERT);
            stm.setString(1, persona.getNombre()); //Recuperamos el primer atributo del objeto que recibimos como parametro. 
                                                        //finalmente lo insertamos en la base de datos con stm.setString 
            stm.setString(2, persona.getApellido());
            stm.setString(3, persona.getEmail());
            stm.setString(4, persona.getTelefono());
            registros = stm.executeUpdate(); //executeUpdate nos devuelve un entero y nos dice el numero de registros que fueron afectados
                                             //y funciona para las sentencias INSERT, UPDATE Y DELETE.
        } catch (SQLException ex) {
            ex.printStackTrace(System.out);
        } finally {
            try {
                stm.close();
                conn.close();
            } catch (SQLException ex) {
                ex.printStackTrace(System.out);
            }
        }
        return registros;
    }
    
    public int actualizar(Persona persona) {
        Connection conn = null;
        PreparedStatement stm = null;
        int registros = 0;
        try {
            conn = getConnection();
            stm = conn.prepareStatement(SQL_UPDATE);
            stm.setString(1, persona.getNombre()); //Recuperamos el primer atributo del objeto que recibimos como parametro. 
                                                        //finalmente lo insertamos en la base de datos con stm.setString 
            stm.setString(2, persona.getApellido());
            stm.setString(3, persona.getEmail());
            stm.setString(4, persona.getTelefono());
            stm.setInt(5, persona.getIdPersona());
            registros = stm.executeUpdate(); //executeUpdate nos devuelve un entero y nos dice el numero de registros que fueron afectados
                                             //y funciona para las sentencias INSERT, UPDATE Y DELETE.
        } catch (SQLException ex) {
            ex.printStackTrace(System.out);
        } finally {
            try {
                stm.close();
                conn.close();
            } catch (SQLException ex) {
                ex.printStackTrace(System.out);
            }
        }
        return registros;
    }
    
    public int borrar(Persona persona) {
        Connection conn = null;
        PreparedStatement stm = null;
        int registros = 0;
        try {
            conn = getConnection();
            stm = conn.prepareStatement(SQL_DELETE);
            stm.setInt(1, persona.getIdPersona()); 
            registros = stm.executeUpdate(); //executeUpdate nos devuelve un entero y nos dice el numero de registros que fueron afectados
                                             //y funciona para las sentencias INSERT, UPDATE Y DELETE.
        } catch (SQLException ex) {
            ex.printStackTrace(System.out);
        } finally {
            try {
                stm.close();
                conn.close();
            } catch (SQLException ex) {
                ex.printStackTrace(System.out);
            }
        }
        return registros;
    }
    
    
     
    
    
    
    
    
    
    
}
