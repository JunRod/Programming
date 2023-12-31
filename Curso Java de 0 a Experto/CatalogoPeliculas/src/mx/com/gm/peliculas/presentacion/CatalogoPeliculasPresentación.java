package mx.com.gm.peliculas.presentacion;

import java.util.Scanner;
import mx.com.gm.peliculas.servicio.CatalogoPeliculasImpl;
import mx.com.gm.peliculas.servicio.ICatalogoPeliculas;

public class CatalogoPeliculasPresentación {

    public static void main(String[] args) {

        int opcion = 1;
        Scanner scanner = new Scanner(System.in);
        ICatalogoPeliculas catalogo = new CatalogoPeliculasImpl();

        while (opcion != 0) {
            System.out.println("Elija una opción \n"
                    + "1. Iniciar catalogo peliculas \n"
                    + "2. Agregar peliculas \n"
                    + "3. Listar peliculas \n"
                    + "4. Buscar peliculas \n"
                    + "0. Salir");
            opcion = Integer.parseInt(scanner.nextLine());
            
            switch (opcion) {
                case 1:
                    catalogo.iniciarCatalogoPeliculas();
                    break;
                case 2:
                    System.out.println("Introduce la pelicula a agregar");
                    String peliculaAregar = scanner.nextLine();
                    catalogo.agregarPeliculas(peliculaAregar);
                    break;
                case 3:
                    catalogo.listarPeliculas();
                    break;
                case 4:
                    System.out.println("Intoduce la pelicula a buscar");
                    String peliculaBsucar = scanner.nextLine();
                    catalogo.buscarPelicula(peliculaBsucar);
                    break;
                default:
                    System.out.println("Adios! vuelva pronto.");
            }
            
        }

    }

}
