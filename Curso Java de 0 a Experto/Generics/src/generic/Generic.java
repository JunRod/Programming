package generic;

public class Generic<T>{

    private T objeto;
    
    public Generic(T objeto){
        this.objeto = objeto;
    }

    public T getObjeto() {
        return objeto;
    }

    public void setObjeto(T objeto) {
        this.objeto = objeto;
    }
    
    public void obtenerTipo(){
        System.out.println(objeto.getClass().getSimpleName());
    }
    
}
