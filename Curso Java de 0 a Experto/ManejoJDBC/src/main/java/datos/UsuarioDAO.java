package datos;

import static datos.Conexion.*;
import domain.Usuario;
import java.sql.*;
import java.util.*;

public class UsuarioDAO {

    private Connection conexionTransaccional;
    private static final String SQL_SELECT = "SELECT id_usuario, usuario, password FROM usuario ";
    private static final String SQL_INSERT = "INSERT INTO usuario(usuario, password) VALUES(?, ?)";
    private static final String SQL_UPDATE = "UPDATE usuario SET usuario = ?, password = ? WHERE id_usuario = ? ";
    private static final String SQL_DELETE = "DELETE FROM usuario WHERE id_usuario = ?";

    public UsuarioDAO() {
    }

    public UsuarioDAO(Connection conexionTransaccional) {
        this.conexionTransaccional = conexionTransaccional;
    }
    
    public String seleccionar() throws SQLException {

        System.out.println("Ejecutando Query SELECT: " + SQL_SELECT);
        List<Usuario> usuarios = new ArrayList<>();
        Connection conn = this.conexionTransaccional != null ? this.conexionTransaccional : getConnection();
        PreparedStatement stm = conn.prepareStatement(SQL_SELECT);
        ResultSet rs = stm.executeQuery();

        while (rs.next()) {
            int idUsuario = rs.getInt("id_usuario");
            String usuario = rs.getString("usuario");
            String password = rs.getString("password");
            Usuario usuario1 = new Usuario(idUsuario, usuario, password);
            usuarios.add(usuario1);
        }

        rs.close();
        stm.close();
        if (this.conexionTransaccional == null) {
            conn.close();
        }
        
        String usuarioCadena = "";
        for (Usuario usuario : usuarios){
            usuarioCadena += usuario + "\n" ;
        }
        return usuarioCadena;
    }

    public String insertar(Usuario usuario) throws SQLException {
        System.out.println("Ejecutando Query INSERT: " + SQL_INSERT);
        int registro = 0;

        Connection conn = this.conexionTransaccional != null ? this.conexionTransaccional : getConnection();
        PreparedStatement stm = conn.prepareStatement(SQL_INSERT);
        stm.setString(1, usuario.getUsuario());
        stm.setString(2, usuario.getPassword());
        registro = stm.executeUpdate();

        stm.close();
        if (this.conexionTransaccional == null) {
            conn.close();
        }
        return "Se modificó el registro nro. " + registro;
    }

    public String actualizar(Usuario usuario) throws SQLException {

        System.out.println("Ejecutando Query UPDATE: " + SQL_UPDATE);
        int registro = 0;
        Connection conn = this.conexionTransaccional != null ? this.conexionTransaccional : getConnection();
        PreparedStatement stm = conn.prepareStatement(SQL_UPDATE);
        stm.setString(1, usuario.getUsuario());
        stm.setString(2, usuario.getPassword());
        stm.setInt(3, usuario.getIdUsuario());
        registro = stm.executeUpdate();

        stm.close();
        if (this.conexionTransaccional == null) {
            conn.close();
        }

        return "Se modificó el registro nro. " + registro;
    }

    public String borrar(Usuario usuario) throws SQLException {

        System.out.println("Ejecutando Query DELETE: " + SQL_DELETE);
        int registro = 0;
        Connection conn = this.conexionTransaccional != null ? this.conexionTransaccional : getConnection();
        PreparedStatement stm = conn.prepareStatement(SQL_DELETE);
        stm.setInt(1, usuario.getIdUsuario());
        registro = stm.executeUpdate();

        stm.close();
        if (this.conexionTransaccional == null) {
            conn.close();
        }

        return "Se modificó el registro nro. " + registro;
    }

}
