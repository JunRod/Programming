
package java_de_0_a_experto;
public class OperadoresCondicionales_6 {

    public static void main(String args[]) {
        var a = 8;
        var valorMinimo = 0;
        var valorMaximo = 10;
        
        var resultado = a >= 0 && a <= 10;
        if(resultado){
            System.out.println("Dentro de rango");
        }
        else{
            System.out.println("Fuera de rango");
        }
        
        var vacaciones = false;
        var diaDescanso = true;
        
        if( vacaciones || diaDescanso){
            System.out.println("Padre puede asisitir al juego del hijo");
        }
        else{
            System.out.println("El padre esta ocupado");
        }
        
    }
}
