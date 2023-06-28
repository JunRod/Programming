package accesodatos;

public class ImplementacionMySQL implements IAccesoDatos{

    @Override
    public void insertar() {
        System.out.println("Insertar desde MySQL");
    }

    @Override
    public void listar() {
        System.out.println("listar desde MySQL");
    }

    @Override
    public void actualizar() {
        System.out.println("actualizar desde MySQL");
    }

    @Override
    public void eliminar() {
        System.out.println("eliminar desde MySQL");
    }
    
    public void xd(){
        System.out.println("esto es downcasting");
    }
    
    
}
