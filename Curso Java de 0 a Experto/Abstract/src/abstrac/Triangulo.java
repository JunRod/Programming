package abstrac;

public class Triangulo extends FiguraGeometrica {
    
    public Triangulo (String tipoFigura){
        super(tipoFigura);
    }

    @Override
    public void Dibujar(){
        System.out.println("Se imprime un: " + this.getClass().getSimpleName());
    }
    
    public void Pintar() {
        System.out.println("Se pinto el: " + this.getClass().getSimpleName());
    }
}
