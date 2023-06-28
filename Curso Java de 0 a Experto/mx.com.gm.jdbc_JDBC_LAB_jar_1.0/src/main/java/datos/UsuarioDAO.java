package datos;

import static datos.Conexion.*;
import domain.Usuario;
import java.sql.*;
import java.util.*;

public class UsuarioDAO {

    private static final String JDBC_SELECT = "SELECT id_usuario, usuario, password FROM usuario ";
    private static final String JDBC_INSERT = "INSERT INTO usuario(usuario, password) VALUES(?, ?)";
    private static final String JDBC_UPDATE = "UPDATE usuario SET usuario = ?, password = ? WHERE id_usuario = ? ";
    private static final String JDBC_DELETE = "DELETE FROM usuario WHERE id_usuario = ?";

    public List<Usuario> seleccionar() {

        List<Usuario> usuarios = new ArrayList<>();
        try {
            Connection conn = getConnection();
            PreparedStatement stm = conn.prepareStatement(JDBC_SELECT);
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
            conn.close();
        } catch (SQLException ex) {
            ex.printStackTrace(System.out);
        }

        return usuarios;
    }

    public String insertar(Usuario usuario) {

        int registro = 0;

        try {
            Connection conn = getConnection();
            PreparedStatement stm = conn.prepareStatement(JDBC_INSERT);
            stm.setString(1, usuario.getUsuario());
            stm.setString(2, usuario.getPassword());
            registro = stm.executeUpdate();

            stm.close();
            conn.close();
        } catch (SQLException ex) {
            ex.printStackTrace(System.out);
        }
        return "Se modificó el registro nro. " + registro;
    }

    public String actualizar(Usuario usuario) {

        int registro = 0;
        try {
            Connection conn = getConnection();
            PreparedStatement stm = conn.prepareStatement(JDBC_UPDATE);
            stm.setString(1, usuario.getUsuario());
            stm.setString(2, usuario.getPassword());
            stm.setInt(3, usuario.getIdUsuario());
            registro = stm.executeUpdate();

            stm.close();
            conn.close();

        } catch (SQLException ex) {
            ex.printStackTrace(System.out);
        }
        return "Se modificó el registro nro. " + registro;
    }

    public String borrar(Usuario usuario) {
        int registro = 0;
        try {
            Connection conn = getConnection();
            PreparedStatement stm = conn.prepareStatement(JDBC_DELETE);
            stm.setInt(1, usuario.getIdUsuario());
            registro = stm.executeUpdate();
            stm.close();
            conn.close();
        } catch (SQLException ex) {
            ex.printStackTrace(System.out);
        }
        return "Se modificó el registro nro. " + registro;
    }

}
