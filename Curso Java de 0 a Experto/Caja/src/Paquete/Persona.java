package Paquete;

public class Persona {
    
    private String Nombre;
    private boolean eliminado;

    public Persona(String Nombre, boolean eliminado) {
        this.Nombre = Nombre;
        this.eliminado = eliminado;
    }

    public String getNombre() {
        return Nombre;
    }

    public void setNombre(String Nombre) {
        this.Nombre = Nombre;
    }

    public boolean isEliminado() {
        return eliminado;
    }

    public void setEliminado(boolean eliminado) {
        this.eliminado = eliminado;
    }
    
    

    
}