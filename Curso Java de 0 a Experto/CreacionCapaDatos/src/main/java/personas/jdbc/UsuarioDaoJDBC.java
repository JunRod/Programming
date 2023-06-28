package personas.jdbc;

import java.sql.*;
import java.util.*;
import personas.dto.UsuarioDTO;
import static personas.jdbc.Conexion.*;

public class UsuarioDaoJDBC implements UsuarioDao {

    private Connection conn;
    private static String SQL_INSERT = "INSERT INTO usuario(usuario, password) VALUES(?, ?)";
    private static String SQL_DELETE = "DELETE FROM usuario WHERE id_usuario = ?";
    private static String SQL_UPDATE = "UPDATE usuario SET usuario = ?, password = ? WHERE id_usuario = ?";
    private static String SQL_SELECT = "SELECT * FROM usuario";

    public UsuarioDaoJDBC() {
    }

    public UsuarioDaoJDBC(Connection conn) {
        this.conn = conn;
    }

    @Override
    public int insert(UsuarioDTO usuario) {
        Connection conn = null;
        PreparedStatement pstm = null;
        int registro = 0;
        try {
            conn = this.conn != null ? this.conn : getConnection();
            pstm = conn.prepareStatement(SQL_INSERT);
            pstm.setString(1, usuario.getUsuario());
            pstm.setString(2, usuario.getPassword());

            registro = pstm.executeUpdate();
            System.out.println("Registro insertado con datos: " + usuario.getUsuario() + " " + usuario.getPassword());
        } catch (SQLException ex) {
            ex.printStackTrace(System.out);
        } finally {
            close(pstm);
            if (this.conn == null) {
                close(conn);
            }
        }
        return registro;
    }

    @Override
    public int update(UsuarioDTO usuario) {
        Connection conn = null;
        PreparedStatement pstm = null;
        int registro = 0;
        try {
            conn = this.conn != null ? this.conn : getConnection();
            pstm = conn.prepareStatement(SQL_UPDATE);
            pstm.setString(1, usuario.getUsuario());
            pstm.setString(2, usuario.getPassword());
            pstm.setInt(3, usuario.getIdUsuario());

            registro = pstm.executeUpdate();
            System.out.println("Registros actualizados: " + registro);
            System.out.println("Actualizando con los datos: " + usuario.toString());
        } catch (SQLException ex) {
            ex.printStackTrace(System.out);

        } finally {
            close(pstm);
            if (this.conn == null) {
                close(conn);
            }
        }
        return registro;
    }

    @Override
    public int delete(UsuarioDTO usuario) {
        Connection conn = null;
        PreparedStatement pstm = null;
        int registro = 0;
        try {
            conn = this.conn != null ? this.conn : getConnection();
            System.out.println("Ejecutando DELETE FROM usuario WHERE id_usuario = ?");
            pstm = conn.prepareStatement(SQL_DELETE);
            pstm.setInt(1, usuario.getIdUsuario());

            System.out.println("Registros eliminados: " + registro);

        } catch (SQLException ex) {
            ex.printStackTrace(System.out);
        } finally {
            close(pstm);
            if (this.conn == null) {
                close(conn);
            }
        }
        return registro;
    }

    @Override
    public List<UsuarioDTO> select() {
        Connection conn = null;
        PreparedStatement pstm = null;
        ResultSet rs = null;
        List<UsuarioDTO> usuarioList = new ArrayList<>();
        UsuarioDTO usuarioDTO = null;
        try {
            conn = this.conn != null ? this.conn : getConnection();
            System.out.println("Ejecutando SELECT * FROM usuario");
            pstm = conn.prepareStatement(SQL_SELECT);
            rs = pstm.executeQuery();
            while (rs.next()){
                int idUsuario = rs.getInt("id_usuario");
                String usuario = rs.getString("usuario");
                String password = rs.getString("password");
                usuarioDTO = new UsuarioDTO(idUsuario, usuario, password);
                usuarioList.add(usuarioDTO);
            }
        } catch (SQLException ex) {
            ex.printStackTrace(System.out);
        } finally {
            close(rs);
            close(pstm);
            if (this.conn == null) {
                close(conn);
            }
        }
        return usuarioList;
    }

}
