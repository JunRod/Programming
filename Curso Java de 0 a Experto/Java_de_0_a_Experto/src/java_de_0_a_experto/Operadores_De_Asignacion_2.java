package java_de_0_a_experto;

public class Operadores_De_Asignacion_2 {

    public static void main(String[] args) {
        //OPERADORES DE ASIGNACION
        int a=3, b=2;
        var c = a + 5 - b; //se opera de derecha a izquierda.
        System.out.println("c = "+ c);
        
        a += 1;//a = a + 1
        System.out.println("a = "+ a);
        
        a += 3;//a = a + b
        System.out.println("a = "+ a);
        
        a *= 3;// a = a * b
        System.out.println("a = "+ a);
        
        a /= 5;// a = a / b
        System.out.println("a = " + a);
        
        a %= 2; // a = resto de 3/2
        System.out.println("a = " + a);
    }
}