package personas.jdbc;

import java.util.List;
import personas.dto.PersonaDTO;

public interface PersonaDao {
    
   int insert (PersonaDTO persona);
   
   int update (PersonaDTO persona);
   
   int delete (PersonaDTO persona);
   
   List<PersonaDTO> select(); 
    
}
