package test;

import abstrac.*;

public class Test {
    public static void main(String[] args) {
        FiguraGeometrica fg1 = new Triangulo("Triangulo");
        Triangulo tgle = (Triangulo)fg1;
        fg1.Dibujar();
        tgle.Pintar();
    }
    
}
