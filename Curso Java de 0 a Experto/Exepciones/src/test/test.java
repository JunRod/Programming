package test;

import static exepcion.Aritmetica.division;
import exepcion.*;

public class test {

    public static void main(String[] args) {

        int resultado = 0;

        try {
            resultado = division(10, 0);
        } catch (OperacionExcepcion ex) {
            System.out.println(ex.getMessage());
        } catch (Exception ex) {
            ex.printStackTrace(System.out);
            System.out.println(ex.getMessage());
        }
        System.out.println("resultado = " + resultado);
    }

}
