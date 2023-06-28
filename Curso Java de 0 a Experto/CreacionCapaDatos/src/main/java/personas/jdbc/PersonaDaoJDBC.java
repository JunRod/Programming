package personas.jdbc;

import java.sql.*;
import java.util.*;
import personas.dto.PersonaDTO;
import static personas.jdbc.Conexion.*;

public class PersonaDaoJDBC implements PersonaDao {

    private Connection useConn;
    private static final String SQL_INSERT = "INSERT INTO persona(nombre, apellido) VALUES(?, ?)";
    private static final String SQL_UPDATE = "UPDATE persona SET nombre = ?, apellido = ? WHERE idpersona = ?";
    private static final String SQL_DELETE = "DELETE FROM persona WHERE idpersona = ? ";
    private static final String SQL_SELECT = "SELECT * FROM persona";

    public PersonaDaoJDBC() {
    }

    public PersonaDaoJDBC(Connection c) {
        this.useConn = c;
    }

    @Override
    public int insert(PersonaDTO persona) {
        Connection c = null;
        PreparedStatement ps = null;
        int registro = 0;
        try {
            c = this.useConn != null ? this.useConn : getConnection();
            System.out.println("Ejecutando INSERT: INSERT INTO persona(nombre, apellido) VALUES(?, ?)");
            
            ps = c.prepareStatement(SQL_INSERT);
            ps.setString(1, persona.getNombre());
            ps.setString(2, persona.getApellido());
            
            registro = ps.executeUpdate();
            System.out.println("Registro insertado con datos: " + persona.getNombre() + " " + persona.getApellido());
            
        } catch (SQLException ex) {
            ex.printStackTrace(System.out);
        } finally {
            close(ps);
            if (useConn == null) {
                close(c);
            }
        }
        return registro;
    }

    @Override
    public int update(PersonaDTO persona) {
        Connection c = null;
        PreparedStatement ps = null;
        int registro = 0;
        try {
            c = this.useConn != null ? this.useConn : getConnection();
            System.out.println("Ejecutando UPDATE: UPDATE persona SET nombre = ?, apellido = ? WHERE idpersona = ?");
            
            ps = c.prepareStatement(SQL_UPDATE);
            ps.setString(1, persona.getNombre());
            ps.setString(2, persona.getApellido());
            ps.setInt(3, persona.getIdPersona());
            
            registro = ps.executeUpdate();
            System.out.println("Registros actualizados:" + registro);
            
            System.out.println("Actualizando con los datos: " + persona.toString());
        } catch (SQLException ex) {
            ex.printStackTrace(System.out);
        } finally {
            close(ps);
            if (this.useConn == null) {
                close(c);
            }
        }
        return registro;
    }

    @Override
    public int delete(PersonaDTO persona) {
        Connection c = null;
        PreparedStatement ps = null;
        int registro = 0;
        try {
            c = this.useConn != null ? this.useConn : getConnection();
            System.out.println("Ejecutando DELETE: DELETE FROM persona WHERE idpersona = ?");
            
            ps = c.prepareStatement(SQL_DELETE);
            ps.setInt(1, persona.getIdPersona());
            
            registro = ps.executeUpdate();
            System.out.println("Registros eliminado " + persona.getIdPersona());
        } catch (SQLException ex) {
            ex.printStackTrace(System.out);
        } finally {
            close(ps);
            if(this.useConn == null ) {
                close(c);
            }
        }
        return registro;
    }

    @Override
    public List<PersonaDTO> select() {
        
        
        Connection c = null;
        PreparedStatement ps = null;
        ResultSet rs = null;
        PersonaDTO pDTO = null;
        List<PersonaDTO> personaArray = new ArrayList<>();
        
        try {
            c = this.useConn != null ? this.useConn : getConnection();
            System.out.println("Ejecutando SELECT: SELECT idpersona, nombre, apellido FROM persona");
            
            ps = c.prepareStatement(SQL_SELECT);
            rs = ps.executeQuery();
            while (rs.next()){
                int idPersona = rs.getInt("idpersona");
                String nombre = rs.getString("nombre");
                String apellido = rs.getString("apellido");
                pDTO = new PersonaDTO(idPersona, nombre, apellido);
                personaArray.add(pDTO);
            }
        } catch (SQLException ex) {
            ex.printStackTrace(System.out);
        } finally {
            close(rs);
            close(ps);
            if(this.useConn == null){
                close(c);
            }
        }
        return personaArray;
    }

}
