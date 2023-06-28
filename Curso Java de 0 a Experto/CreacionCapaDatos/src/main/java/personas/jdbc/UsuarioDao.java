package personas.jdbc;

import java.util.List;
import personas.dto.UsuarioDTO;

public interface UsuarioDao {
    
    int insert (UsuarioDTO usuario);
    
    int update (UsuarioDTO usuario);
    
    int delete (UsuarioDTO usuario);
    
    List<UsuarioDTO> select();
        
    
}
