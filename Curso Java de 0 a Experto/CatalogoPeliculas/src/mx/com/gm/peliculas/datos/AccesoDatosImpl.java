package mx.com.gm.peliculas.datos;

import java.io.*;
import java.util.*;
import mx.com.gm.peliculas.domain.Pelicula;
import mx.com.gm.peliculas.excepciones.*;

public class AccesoDatosImpl implements IAccesoDatos {

    @Override
    public boolean existe(String nombreArchivo) {
        File archivo = new File(nombreArchivo);
        return archivo.exists();
    }

    @Override
    public void crear(String nombreArchivo) throws AccesoDatosEx {
        File archivo = new File(nombreArchivo);
        try {
            PrintWriter salida = new PrintWriter(new FileWriter(archivo));
            salida.close();
            System.out.println("Se ha creado el archivo");
        } catch (IOException ex) {
            System.out.println("Excepció al crear archivo");
            ex.printStackTrace();
        }
    }

    @Override
    public void borrar(String nombreArchivo) {
        File archivo = new File(nombreArchivo);
        if (archivo.exists()) 
            archivo.delete();
        System.out.println("Se ha borrado el archivo");

    }

    @Override
    public void escribirAgregar(Pelicula pelicula, String nombreArchivo, boolean anexar) throws EscrituraDatosEx {
        File archivo = new File(nombreArchivo);
        try {
            PrintWriter salida = new PrintWriter(new FileWriter(archivo, anexar));
            salida.println(pelicula.toString());
            salida.close();
            System.out.println("Se ha escrito información en el archivo: " + pelicula);
            
        } catch (IOException ex) {
            System.out.println("Escepción al agregar pelicula");
            ex.printStackTrace();
        }
    }

    @Override
    public List<Pelicula> listar(String nombreArchivo) throws LecturaDatosEx {
        File archivo = new File(nombreArchivo);
        List<Pelicula> peliculas = new ArrayList<>();
        try {
            BufferedReader entrada = new BufferedReader(new FileReader(archivo));
            String linea = null;
            while ((linea = entrada.readLine()) != null) {
                Pelicula pelicula = new Pelicula(linea);
                peliculas.add(pelicula);
            }
        } catch (FileNotFoundException ex) {
            ex.printStackTrace();
            throw new LecturaDatosEx("Excepción al listar peliculas");
        } catch (IOException ex) {
            ex.printStackTrace();
            throw new LecturaDatosEx("Excepción al listar peliculas");
        }
        return peliculas;
    }

    @Override
    public String buscar(String nombreArchivo, String buscar) throws LecturaDatosEx {
        File archivo = new File(nombreArchivo);
        String resultado = null;
        try {
            BufferedReader entrada = new BufferedReader(new FileReader(archivo));
            String linea = null;
            int indice = 1;
            while ((linea = entrada.readLine()) != null){
                if (buscar != null && buscar.equalsIgnoreCase(linea));
                resultado = "Pelicula: " + linea + " Indice: " + indice;
                break;
            }
            entrada.close();
        } catch (FileNotFoundException ex) {
            System.out.println("Excepción al buscar archivo");
            ex.printStackTrace();
        } catch (IOException ex) {
            System.out.println("Excepción al buscar archivo");
            ex.printStackTrace();
        }
        return resultado;
    }

}
