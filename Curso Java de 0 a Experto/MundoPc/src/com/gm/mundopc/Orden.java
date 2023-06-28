package com.gm.mundopc;

public class Orden {
    
    private final int idOrden;
    private final Computadora computadora [];
    private static int contadorOrdenes;
    private static final int MAX_COMPUTADORAS = 10;
    private int contadorComputadoras;
    
    public Orden() {
        this.idOrden = ++Orden.contadorOrdenes;
        this.computadora = new Computadora[Orden.MAX_COMPUTADORAS];
    }

    public void agregarComputadora(Computadora computadora) {
        
        if(this.contadorComputadoras<Orden.MAX_COMPUTADORAS) {
            this.computadora[this.contadorComputadoras++] = computadora;
        } else {
            System.out.println("Usted exedió su max de computadoras: " + Orden.MAX_COMPUTADORAS);
        }
    }
    
    public void mostrarOrden(){
        System.out.println("ID Orden: " + this.idOrden);
        
        for (int i = 0; i < this.contadorComputadoras; i++) {
            System.out.println(this.computadora[i]);
            System.out.println("\n");
            
        }
        
    }
    
}
