package personas.dto;

public class PersonaDTO {
    
    private int idPersona;
    private String nombre;
    private String apellido;

    public PersonaDTO() {
    }
    
    public PersonaDTO(int id_persona) { //Delete
        this.idPersona = id_persona;
    }
    
    public PersonaDTO(String nombre, String apellido){ //Insert
        this.nombre = nombre;
        this.apellido = apellido;
    }
    
    public PersonaDTO(int id_persona, String nombre, String apellido){ //Update, Select
        this.idPersona = id_persona;
        this.nombre = nombre;
        this.apellido = apellido;
    }

    public int getIdPersona() {
        return idPersona;
    }

    public void setIdPersona(int idPersona) {
        this.idPersona = idPersona;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getApellido() {
        return apellido;
    }

    public void setApellido(String apellido) {
        this.apellido = apellido;
    }

    @Override
    public String toString() {
        return "PersonaDTO{" + "idPersona=" + idPersona + ", nombre=" + nombre + ", apellido=" + apellido + '}';
    }

}
