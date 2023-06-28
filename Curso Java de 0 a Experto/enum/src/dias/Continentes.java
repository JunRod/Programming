package dias;

public enum Continentes {
    
    EUROPA(10),
    AFRICA (123),
    AMERICA(32),
    ASIA(43),
    OCEANIA(34);
    
    private final int paises;
    
    Continentes( int paises) {
        this.paises = paises;
    }
    
    public int getPaises() {
        return this.paises;
    }
    
}
