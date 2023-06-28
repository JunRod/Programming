package test;

import datos.UsuarioDAO;
import domain.Usuario;
import java.util.List;

public class UsuarioTest {

    public static void main(String[] args) {

        UsuarioDAO usuarioDao = new UsuarioDAO();

        

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
        
        List<Usuario> datos = usuarioDao.seleccionar();
        for (Usuario dato: datos) {
            System.out.println(dato);
        }
        

    }

}
