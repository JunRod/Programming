package manejoarchivos;

import java.io.*;
import java.util.logging.Level;
import java.util.logging.Logger;

public class ManejoArchivos {

    public static void crearArchivo(String nombreaArchivo) {
        File archivo = new File(nombreaArchivo);
        try {
            PrintWriter salida = new PrintWriter(archivo); //con PrintWriter se crea verdaderamente el archivo
            // en el disco duro.
            salida.close();                                //cerramos el flujo abierto al disco duro.
            System.out.println("Se ha creado el archivo");
        } catch (FileNotFoundException ex) {
            ex.printStackTrace(System.out);
        }

    }

    public static void escribirArchivo(String nombreArchivo, String contenido) {
        File archivo = new File(nombreArchivo);
        try {
            PrintWriter salida = new PrintWriter(archivo);
            salida.println(contenido);
            salida.close();
            System.out.println("Se ha escrito en el archivo");
        } catch (FileNotFoundException ex) {
            ex.printStackTrace();
        }
    }

    public static void anexarInfo(String nombreArchivo, String contenido) {
        File archivo = new File(nombreArchivo);
        try {
            PrintWriter salida = new PrintWriter(new FileWriter(archivo, true));
            salida.println(contenido);
            salida.close();
            System.out.println("Se ha anexado la información.");
        } catch (FileNotFoundException ex) {
            ex.printStackTrace();
        } catch (IOException ex) {
            ex.printStackTrace();
        }

    }

    public static void leerArchivo(String nombreArchivo) {
        File archivo = new File(nombreArchivo);
        try {
            BufferedReader entrada = new BufferedReader(new FileReader(archivo));
            String lectura = entrada.readLine();
            while (lectura != null) {
                System.out.println(lectura);
                lectura = entrada.readLine();
            }
            entrada.close();
            System.out.println("Se ha leído el archivo.");
        } catch (FileNotFoundException ex) {
            ex.printStackTrace();
        } catch (IOException ex) {
            ex.printStackTrace();
        }

    }

}
