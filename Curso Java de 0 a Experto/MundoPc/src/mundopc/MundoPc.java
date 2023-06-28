package mundopc;

import com.gm.mundopc.*;


public class MundoPc {
    
    public static void main(String[] args) {
        
        Raton raton1 = new Raton("USB", "Logitech");
        Teclado teclado1 = new Teclado("USB", "Dragon");
        Monitor monitor1 = new Monitor("Sony", 50.0);
        Computadora computadora1 = new Computadora("Hp", monitor1, teclado1, raton1);
        
        Raton raton2 = new Raton("a", "Logitech");
        Teclado teclado2 = new Teclado("USB", "Dragon");
        Monitor monitor2 = new Monitor("Sony", 50.0);
        Computadora computadora2 = new Computadora("Hp", monitor1, teclado1, raton1);
        
        Orden orden1 = new Orden();
        orden1.agregarComputadora(computadora1);
        orden1.agregarComputadora(computadora2);
        
        
        orden1.mostrarOrden();
        
        
        
        
    }
    
}
