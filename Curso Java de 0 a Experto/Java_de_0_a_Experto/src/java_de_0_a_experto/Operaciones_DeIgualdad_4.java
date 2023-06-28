package java_de_0_a_experto;

public class Operaciones_DeIgualdad_4 {

    public static void main(String[] args) {
//        var a = 3;
//        var b = 2;
//
//        var c = (a == b);
//        System.out.println("c = " + c);
//
//        var d = a != b;
//        System.out.println("d = " + d);
//
//        var cadena = "Hola";
//        var cadena2 = "Hola";
//        var e = cadena == cadena2;//compara referencias de objetos
//        System.out.println("e = " + e);
//
//        var f = cadena.equals(cadena2);//comparamos contenido de cadenas
//        System.out.println("f = " + f);
//
//        //PRACTICE
//        var junior = "junior";
//        var claudia = "claudia" ;
//        
//        var q = junior == claudia;
//        System.out.println("q = " + q);
//        

        var o = 10;
        var l = 1;
        var epapa = "2";
        var e = (o < l) ? "2" : "3";
        System.out.println("e = " + e);

        var u = 1;
        if (e.equals(epapa)) {
            u = -u;
            var j = u;
            u++;
            System.out.println("u = " + u);
            System.out.println("j = " + j);
        } else {
            var r = 3;
            var resultado = r + u;
            r--;
            System.out.println("r =" + r);
            System.out.println("resultado = " + resultado);
        }

    }
}
