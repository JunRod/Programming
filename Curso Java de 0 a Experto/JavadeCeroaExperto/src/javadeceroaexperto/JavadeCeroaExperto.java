package javadeceroaexperto;

import java.util.Scanner;

public class JavadeCeroaExperto {
    public static void main(String[] args) {
        var msj="del libro";
        //Ingresa y lee la consola, lo almacena en una variable: tituloy autor, y mandamos a llamar lo que tiene guardado: consola.nextLine(), consola.nextLine()
        Scanner consola = new Scanner(System.in);
        //Solucion
        
        System.out.println("Ingresa el titulo "+ msj);
        var titulo = consola.nextLine();//Lee una linea de la consola
        System.out.println("Ingresa el autor "+ msj);
        var autor = consola.nextLine();//Lee una linea de la consola
        System.out.println(titulo + " fue escrito por " + autor);
    }
    
}
