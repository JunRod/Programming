package personas.dto;

public class UsuarioDTO {
    
    private int idUsuario;
    private String usuario;
    private String password;

    public UsuarioDTO() {
    }

    public UsuarioDTO(int idUsuario) { //Delete
        this.idUsuario = idUsuario;
    }

    public UsuarioDTO(String usuario, String password) { //Insert
        this.usuario = usuario;
        this.password = password;
    }

    public UsuarioDTO(int idUsuario, String usuario, String password) { //Update
        this.idUsuario = idUsuario;
        this.usuario = usuario;
        this.password = password;
    }

    public int getIdUsuario() {
        return idUsuario;
    }

    public void setIdUsuario(int idUsuario) {
        this.idUsuario = idUsuario;
    }

    public String getUsuario() {
        return usuario;
    }

    public void setUsuario(String usuario) {
        this.usuario = usuario;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    @Override
    public String toString() {
        return "UsuarioDTO{" + "idUsuario=" + idUsuario + ", usuario=" + usuario + ", password=" + password + '}';
    }
    
}
