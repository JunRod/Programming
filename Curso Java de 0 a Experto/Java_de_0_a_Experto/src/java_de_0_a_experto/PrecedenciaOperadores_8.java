package java_de_0_a_experto;

import javax.swing.JOptionPane;


//Mi clase en Java

public class PrecedenciaOperadores_8 {
    
    public static void main(String[] args) {
//        var x = 5;
//        var y = 10;
//        var z = ++x + y--;
//        System.out.println("x = " + x);
//        System.out.println("y = " + y);
//        System.out.println("z = " + z);
//        
//        var resultado = 4 + 5 * 6 / 3;//4 + ((5*6)/3)
//        System.out.println("resultado = " + resultado);//14
//        
//        resultado = (4 + 5) * 6 / 3;
//        System.out.println("resultado = " + resultado);


        //PRACTICE
        var x = 0 ;
        var pendiente = 0;
        var b = 0;
        
        x = Integer.parseInt(JOptionPane.showInputDialog("Ingrese en funcion a que:"));
        pendiente = Integer.parseInt(JOptionPane.showInputDialog("Ingrese pendiente:"));
        b = Integer.parseInt(JOptionPane.showInputDialog("Ingrese valor de x "));
        
        
        var resultado = x * pendiente + b;
        JOptionPane.showMessageDialog(null, "el resultado en funcion a " + x + "es = " + resultado);
    }
}
