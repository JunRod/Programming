package test;

import java.sql.*;
import personas.dto.UsuarioDTO;
import personas.jdbc.*;

public class ManejoUsuario {

    public static void main(String[] args) {
        Connection conexion = null;
        try {
            conexion = Conexion.getConnection();
            if ( conexion.getAutoCommit() ){
                conexion.setAutoCommit(false);
            }
            UsuarioDao conectarDB = new UsuarioDaoJDBC(conexion);
            UsuarioDTO usuario1 = new UsuarioDTO("Junior", "Rodriguez");
            conectarDB.insert(usuario1);
            
            UsuarioDTO usuarioDelete = new UsuarioDTO(23);
            conectarDB.delete(usuario1);
            
            conexion.commit();
            System.out.println("Se ha hecho commit de la transacción");
        } catch (SQLException ex) {
            ex.printStackTrace(System.out);
            System.out.println("Entrando al rollback...");
            try {
                conexion.rollback();
            } catch (SQLException ex1) {
                ex.printStackTrace(System.out);
            }
        } finally {
            
            
        }
    }
}
