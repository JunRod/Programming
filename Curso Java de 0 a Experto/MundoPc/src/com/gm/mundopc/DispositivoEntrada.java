package com.gm.mundopc;

public class DispositivoEntrada {
    
    private String tipoEntrada;
    private String marca;

    public DispositivoEntrada(String tipoEntrada, String marca) {
        this.tipoEntrada = tipoEntrada;
        this.marca = marca;
    }
    
    @Override
    public String toString() {
        return "DispositivoEntrada{" + "tipoEntrada=" + tipoEntrada + ", marca=" + marca + '}';
    }

    public String getTipEntrada() {
        return tipoEntrada;
    }

    public void setTipEntrada(String tipEntrada) {
        this.tipoEntrada = tipEntrada;
    }

    public String getMarca() {
        return marca;
    }

    public void setMarca(String marca) {
        this.marca = marca;
    }
    
    
}
