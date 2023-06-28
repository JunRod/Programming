package abstrac;

public abstract class FiguraGeometrica {
    
    private String figuraGeometrica = "";
    
    FiguraGeometrica(String figura){
        this.figuraGeometrica = figura;
    }
    
    public abstract void Dibujar();

    public String getFiguraGeometrica() {
        return figuraGeometrica;
    }

    public void setFiguraGeometrica(String figuraGeometrica) {
        this.figuraGeometrica = figuraGeometrica;
    }
    
    
}
