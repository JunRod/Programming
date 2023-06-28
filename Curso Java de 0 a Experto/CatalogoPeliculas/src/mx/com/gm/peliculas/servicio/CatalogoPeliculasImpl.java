package mx.com.gm.peliculas.servicio;

import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;
import mx.com.gm.peliculas.datos.*;
import mx.com.gm.peliculas.domain.Pelicula;
import mx.com.gm.peliculas.excepciones.AccesoDatosEx;
import mx.com.gm.peliculas.excepciones.LecturaDatosEx;

public class CatalogoPeliculasImpl implements ICatalogoPeliculas {
    
    private final IAccesoDatos datos;
    
    public CatalogoPeliculasImpl (){
        this.datos = new AccesoDatosImpl();
    }
    
    @Override
    public void iniciarCatalogoPeliculas() {
        
        try {
            if (this.datos.existe(NOMBRE_RECURSO)){
                this.datos.borrar(NOMBRE_RECURSO);
                this.datos.crear(NOMBRE_RECURSO);
            } else {
                this.datos.crear(NOMBRE_RECURSO);
            }
        } catch (AccesoDatosEx ex) {
            System.out.println("Error al iniciar catálogo.");
        }
        
        
    }
    
    @Override
    public void agregarPeliculas(String nombrePelicula) {
        Pelicula pelicula = new Pelicula(nombrePelicula);
        boolean anexar = false;
        try {
            anexar = datos.existe(NOMBRE_RECURSO);
            this.datos.escribirAgregar(pelicula, NOMBRE_RECURSO, anexar);
        } catch (AccesoDatosEx ex) {
            System.out.println("Error de acceso a datos");
            ex.printStackTrace(System.out);
        }
    }

    @Override
    public void listarPeliculas() {
        try {
            List<Pelicula> peliculas = datos.listar(NOMBRE_RECURSO);
            for (Pelicula pelicula: peliculas) {
                System.out.println("pelicula = " + pelicula);
            }
        } catch (LecturaDatosEx ex) {
            System.out.println("Error al listar pelicula");
           ex.printStackTrace(System.out);
        }
    }

    @Override
    public void buscarPelicula(String buscar) {
        
        String resultado = null;
        try {
            resultado = datos.buscar(NOMBRE_RECURSO, buscar);
            
        } catch (LecturaDatosEx ex) {
            System.out.println("Error al buscar Pelicula");
            ex.printStackTrace(System.out);
        }
        System.out.println("resultado = " + resultado);
    }
    
}
