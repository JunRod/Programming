package com.gm.mundopc;

public class Teclado extends DispositivoEntrada {
    
    private final int idteclado;
    private static int contadorTeclados;
    
    public Teclado(String tipoEntrada, String marca) {
        super(tipoEntrada, marca);
        this.idteclado = ++Teclado.contadorTeclados;
    }

    @Override
    public String toString() {
        return "Teclado: " + "idteclado=" + idteclado + " " + super.toString();
    }
    
    
}
