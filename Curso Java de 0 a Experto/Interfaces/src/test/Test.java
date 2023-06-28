package test;

import accesodatos.*;

public class Test {
    
    public static void main(String[] args) {
        
        IAccesoDatos acd1 = new ImplementacionMySQL();
        acd1.actualizar();
        
        ImplementacionMySQL acd1Down = (ImplementacionMySQL) acd1;
        acd1Down.xd();
        
    }
    
}
