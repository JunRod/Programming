package test;

import datos.*;
import domain.Usuario;
import java.sql.*;

public class UsuarioTest {

    public static void main(String[] args) {
        
        Connection conexion = null;
        try {
            conexion = Conexion.getConnection();
            if (conexion.getAutoCommit()) {
                conexion.setAutoCommit(false);
                System.out.println("Ejecutando Manejo de transacciones...");
            }

            UsuarioDAO usuario = new UsuarioDAO(conexion);
            Usuario usuario1 = new Usuario();
            usuario1.setUsuario("Juan");
            usuario1.setPassword("jaun.123");
            usuario.insertar(usuario1);

            Usuario usuarioBorrar = new Usuario();
            usuarioBorrar.setIdUsuario(6);
            usuario.borrar(usuarioBorrar);

            if (conexion.getAutoCommit() == false){
                conexion.setAutoCommit(true);
                System.out.println("Cambios guardados en la base de datos: Usuario ");
                System.out.println(usuario.seleccionar());
            }
            

        } catch (SQLException ex) {
            ex.printStackTrace(System.out);
            System.out.println("Ingresando al RollBack");
            try {
                conexion.rollback();
            } catch (SQLException ex1) {
                ex1.printStackTrace(System.out);
            }
        }

        /*
        Insertar
        for (int i = 0; i < 10; i++) {
            String usuario, password;
            usuario = JOptionPane.showInputDialog("Ingrese usuario");
            password = JOptionPane.showInputDialog("Ingrese password");
            
            Usuario usuario1 = new Usuario(usuario, password);
            usuarioDao.insertar(usuario1);
        }
        
        Actualizar modificar
        Usuario usuario2 = new Usuario(1, "juan", "junior.masna");
        
        Borrar
        for (int i = 2; i < 6; i++) {
            Usuario registroBorrar = new Usuario(i);
            System.out.println(usuarioDao.borrar(registroBorrar));
        }
        
         */
        //Seleccionar, imprimir todo.
    }

}
