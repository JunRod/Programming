package mx.com.gm.ventas.test;

import mx.com.gm.ventas.Orden;
import mx.com.gm.ventas.Producto;

public class VentasTest {

    public static void main(String[] args) {
        Producto producto1 = new Producto("Shampoo", 14.99);
        Producto producto2 = new Producto("Lápiz", 1.50);
        
        Orden orden1 = new Orden();
        orden1.agregarProducto(producto1);
        orden1.agregarProducto(producto2);
        orden1.mostrarOrden();
        System.out.println("\n");
        
        
        Producto producto3 = new Producto("Pantalla", 14.99);
        Producto producto4 = new Producto("Lápiz", 1.50);
        Orden orden2 = new Orden();
        orden2.agregarProducto(producto1);
        orden2.agregarProducto(producto2);
        orden2.mostrarOrden();
        
        
    }
}
