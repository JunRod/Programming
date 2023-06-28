package datos;

import static datos.Conexion.*;
import domain.Persona;
import java.sql.*;
import java.util.*;

public class PersonaDAO {
    //Esta clase es un patron de diseño, que contiene las operaciones (SELECT, INSERT, UPDATE, DELETE) sobre la tabla de entiedad (Persona)
    //Data Access Object, si tenemos varias entidades entonces tendremosque tener varias clases DAO
    
    private Connection conexionTransaccional;
    private static final String SQL_SELECT = "SELECT idpersona, nombre, apellido, email, telefono FROM persona";
    private static final String SQL_INSERT = "INSERT INTO persona(nombre, apellido, email, telefono) VALUES(?, ?, ?, ?)";
    private static final String SQL_UPDATE = "UPDATE persona SET nombre = ?, apellido = ?, email = ?, telefono = ? WHERE idpersona = ?";
    private static final String SQL_DELETE = "DELETE FROM persona WHERE idpersona = ?";
    
    public PersonaDAO(){
        
    }
    
    public PersonaDAO(Connection conexionTransaccional){
        this.conexionTransaccional = conexionTransaccional;
        
    }
    
    //El comodin "?" es para sustituir valores, estos comodines deben ser de equivalentes a los atributos de la base de datos, y depende tambien de que sentencia se usa.
    
    
    /*
    Una transaccion es un bloque de codigo con varias sentencias SQL.
    Y si estamos abriendo y cerrando la conexion a la base de datos en cada metodo, deja de ser una transaccion
    y no podriamos hacer uncommint o rollback.
    
    rollback: hace que todas las sentencias que se ejecutan no se hagan commit, ya sea por un error o porque no queremos alterar la BD
    Cuando cerramos la conexion a la base de datos en cada metodo, por default estamos haciendo commit: conn.close().
    El commit por default es true, por eso debemos cambiarla a false para que recien al final de la transacción podamos hacerlo true, y en otro caso hacer rollback.
    
    La transaccion debe hacerse desde otra clase, es decir el bloque de codigo con las sentencias que se harán en la BD se deben hacer desde otra clase, y esta clase decide cuando se cierra la
    conexion con la BD, no los metodos de DAO.
    
    */
    public List<Persona> seleccionar () throws SQLException {
        System.out.println("Ejecutando Query SELECT: " + SQL_SELECT);
        Connection conn = null;
        PreparedStatement stm = null;
        ResultSet rs = null;
        Persona persona = null;
        List<Persona> personas = new ArrayList<>();
        
        try {
            conn = this.conexionTransaccional != null ? this.conexionTransaccional : getConnection();
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
        } finally {
            try {
                close(rs);
                close(stm);
                if (this.conexionTransaccional == null){
                    close(conn);
                }
            } catch (SQLException ex) {
                ex.printStackTrace(System.out);
            }
        }
        return personas;
    }
    
    public int insertar(Persona persona) throws SQLException {
        System.out.println("Ejecutando Query INSERT: " + SQL_INSERT);
        Connection conn = null;
        PreparedStatement stm = null;
        int registros = 0;
        try {
            conn = this.conexionTransaccional != null ? this.conexionTransaccional : getConnection();
            stm = conn.prepareStatement(SQL_INSERT);
            stm.setString(1, persona.getNombre()); //Recuperamos el primer atributo del objeto que recibimos como parametro. 
                                                        //finalmente lo insertamos en la base de datos con stm.setString 
            stm.setString(2, persona.getApellido());
            stm.setString(3, persona.getEmail());
            stm.setString(4, persona.getTelefono());
            registros = stm.executeUpdate(); //executeUpdate nos devuelve un entero y nos dice el numero de registros que fueron afectados
                                             //y funciona para las sentencias INSERT, UPDATE Y DELETE.
        } finally {
            try {
                stm.close();
                if (this.conexionTransaccional == null){
                    close(conn);
                }
            } catch (SQLException ex) {
                ex.printStackTrace(System.out);
            }
        }
        return registros;
    }
    
    public int actualizar(Persona persona) throws SQLException {
        System.out.println("Ejecutando Query UPDATE: " + SQL_UPDATE);
        Connection conn = null;
        PreparedStatement stm = null;
        int registros = 0;
        try {
            conn = this.conexionTransaccional != null ? this.conexionTransaccional : getConnection();
            stm = conn.prepareStatement(SQL_UPDATE);
            stm.setString(1, persona.getNombre()); //Recuperamos el primer atributo del objeto que recibimos como parametro. 
                                                        //finalmente lo insertamos en la base de datos con stm.setString 
            stm.setString(2, persona.getApellido());
            stm.setString(3, persona.getEmail());
            stm.setString(4, persona.getTelefono());
            stm.setInt(5, persona.getIdPersona());
            registros = stm.executeUpdate(); //executeUpdate nos devuelve un entero y nos dice el numero de registros que fueron afectados
                                             //y funciona para las sentencias INSERT, UPDATE Y DELETE.
        } finally {
            try {
                stm.close();
                if (this.conexionTransaccional == null){
                    close(conn);
                }
            } catch (SQLException ex) {
                ex.printStackTrace(System.out);
            }
        }
        return registros;
    }
    
    public int borrar(Persona persona) throws SQLException {
        System.out.println("Ejecutando Query DELETE: " + SQL_DELETE);
        Connection conn = null;
        PreparedStatement stm = null;
        int registros = 0;
        try {
            conn = this.conexionTransaccional != null ? this.conexionTransaccional : getConnection();
            stm = conn.prepareStatement(SQL_DELETE);
            stm.setInt(1, persona.getIdPersona()); 
            registros = stm.executeUpdate(); //executeUpdate nos devuelve un entero y nos dice el numero de registros que fueron afectados
                                             //y funciona para las sentencias INSERT, UPDATE Y DELETE.
        } finally {
            try {
                stm.close();
                if (this.conexionTransaccional == null){
                    close(conn);
                }
            } catch (SQLException ex) {
                ex.printStackTrace(System.out);
            }
        }
        return registros;
    }
    
    
     
    
    
    
    
    
    
    
}
