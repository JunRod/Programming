package java_de_0_a_experto;

import java.util.Scanner;

public class ScanerPractice {

    public static void main(String[] args) {
        /*Probando Scanner*/
        var msj="del libro";
        //Ingresa y lee la consola, lo almacena en una variable: tituloy autor, y mandamos a llamar lo que tiene guardado: consola.nextLine(), consola.nextLine()
        Scanner consola = new Scanner(System.in);
        //Solucion
        
        System.out.println("Ingresa el titulo "+ msj);
        var titulo = consola.nextLine();//Lee una linea de la consola
        System.out.println("Ingresa el autor "+ msj);
        var autor = consola.nextLine();//Lee una linea de la consola
        System.out.println(titulo + " fue escrito por " + autor);
        
        
        /*Probando valores MAX y MIN de Tipos de datos primitivos y flotantes.*/
        byte valorByte = 127;
        System.out.println("valorByte: " + valorByte);
        System.out.println("valor Minimo Byte: " + Byte.MIN_VALUE);
        System.out.println("valor Maximo Byte: " + Byte.MAX_VALUE);
        
        short valorShort = 32767;
        System.out.println("valorShort: " + valorShort);
        System.out.println("valor Minimo Short: " + Short.MIN_VALUE);
        System.out.println("valor Maximo Short: " + Short.MAX_VALUE);
        
        int valorInt = 2147483647;
        System.out.println("valorInt: " + valorInt);
        System.out.println("valor Minimo Int: " + Integer.MIN_VALUE);
        System.out.println("valor Maximo Int: " + Integer.MAX_VALUE);
        
        //Tipos de datos con decimal, es obligatorio para evitar errores de compilación
        long valorLong = 9223372036854775807L;
        System.out.println("valorLong: " + valorLong);
        System.out.println("valor Minimo Long: " + Long.MIN_VALUE);
        System.out.println("valor Maximo Long: " + Long.MAX_VALUE);
        
        float valorFloat = 2.0000666666F; //Float corta cualquier decimal que se repita, con 2.00000, pone 2.0
        System.out.println("valorFloat: " + valorFloat);
        System.out.println("valor Minimo Float: " + Float.MIN_VALUE);
        System.out.println("valor Maximo Float: " + Float.MAX_VALUE);
        
        double valorDouble = 2.666666D;
        System.out.println("valorDouble: " + valorDouble);
        System.out.println("valor Minimo Double: " + Double.MIN_VALUE);
        System.out.println("valor Maximo Double: " + Double.MAX_VALUE);
    
        /*Usando la tabla Unicode en char y jugando con int */
        
        char varChar1 = '%';
        System.out.println("varChar1 = " + varChar1);
        
        char varChar2 = '\u0025';
        System.out.println("varChar2 = " + varChar2);
                
                
        char varChar3 = 37;
        System.out.println("varChar3 = " + varChar3);     
                
        
        //char en un var (Java lo entiende como un int), convertiremos en char
        
        var intchar = 33;
        System.out.println("varChar3 = " + intchar); 
        
        var charconvertido = (char)33;
        System.out.println("varChar3 = " + charconvertido);   
        
        //probando scanner
        var mensaje = " es el mejor Numero";
        
        //numero que se le dirá si es mejor o peor
        System.out.println("Introduce un numero");
        var numero = consola.nextLine();
        
        System.out.println("define el numero elijiendo una opción"
                + "\n a) El mejor Numero"
                + "\n b) El peor Numero");
        //lee lo de arriba y lo transforma en entero
        var opc = (String)consola.nextLine();
        
        //dependiendo de la opcion escojida cambiará de mensaje.
        if (opc != "a"){
            mensaje = " es el peor Numero";
        }
        //Imprimir mensaje 
        System.out.println(numero + mensaje);
        
        
        
        
    
    
    
    
    }
    
}
