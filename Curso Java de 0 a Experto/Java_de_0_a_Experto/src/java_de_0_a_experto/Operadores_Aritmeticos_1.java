package java_de_0_a_experto;

public class Operadores_Aritmeticos_1 {
    public static void main(String[] args) {
        //OPERADORES ARITMETICOS
        int a=3, b=2;
        var resultado = a + b;
        System.out.println("Resultado suma = "+resultado);
        
        resultado = a - b;
        System.out.println("resultado resta = "+ resultado);
        
        resultado = a*b;
        System.out.println("resultado multiplicación = " + resultado);
        
        var resultado2 = 3.0 / b;
        System.out.println("resultado division = " + resultado2);
        
        if( a % 2 == 0)
            System.out.println("Es numero par");
        else 
            System.out.println("Es numero impar");
    }
    
}