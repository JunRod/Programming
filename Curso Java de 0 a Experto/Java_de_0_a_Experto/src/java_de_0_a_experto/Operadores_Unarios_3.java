package java_de_0_a_experto;

public class Operadores_Unarios_3{

    public static void main(String[] args) {
        var a = 3;
        var b = -a;
        System.out.println("a = "+a);
        System.out.println("b = " + b);
        
        var c = true;
        var d = !c;
        System.out.println("c = "+ c);
        System.out.println("d = "+ d); /* el valor de de "d" contiene el valor 
        de "c" pero por el signo de diferencia ( ! ), se cambia a false.*/ 
        
        //incremento
        //1. Pre incremento (Simbolo antes de la variable)
        var e = 3;
        var f = ++e; //primero se incremneta la variable y despues se usa su valor.
        System.out.println("e = " + e);
        System.out.println("f = " + f);
        
        //2. Post Incremneto (simbolo despues de la variable)
        var g = 5;
        var h = g++; //primero se utiliza el valor y despues se incrementa.
        System.out.println("g = " + g);
        System.out.println("h = " + h);
        
        //decremento
        //1. Pre decremento
        var i = 2;
        int j = --i;
        System.out.println(" i = " + 1);// ya esta decrementada
        System.out.println(" j = " + j);
        
        //2. Post decremento
        var k = 4;
        var l = k--;//primero se usa el valor de la variable k y luego se decremento.
        System.out.println(" k = "+ k);
        System.out.println(" l = "+ l);
        
        //PRACTICE
        
        // de positivo a negativo
        var p = 1;
        var m = --p;
        System.out.println("p = " + p);
        System.out.println("m = " + m);
        
        //de true a false
        var q = true;
        var w = !q;
        System.out.println("q = " + q);
        System.out.println("w = " + w);
        
        //incremento
        //pre incremento
        var t = 3;
        var x = ++t;
        System.out.println("t = " + t);
        System.out.println("x = " + x);
        
        //post incremento
        var E = 4;
        var ñ = E++;
        System.out.println("e = " + E);
        System.out.println("ñ = " + ñ);
        
        //decremento
        //pre decremento
        var u = 9;
        var r = --u;
        System.out.println("e = " + u );
        System.out.println("r = " + r);
        
        //post decremento
        var y = 4;
        var s = y--;
        System.out.println("f = " + y);
        System.out.println("s = " + s);
    }
    
}

