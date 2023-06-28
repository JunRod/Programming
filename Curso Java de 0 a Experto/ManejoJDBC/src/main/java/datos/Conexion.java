package datos;

import java.sql.*;

public class Conexion {

    private static final String JDBC_URL = "jdbc:Mysql://localhost:3306/test?useSSL=false&useTimezone=true&serverTimezone=UTC&allowPublicKeyRetrieval=true";
    private static final String JDBC_USER = "root";
    private static final String JDBC_PASSWORD = "admin";

    public static Connection getConnection() throws SQLException {
        return DriverManager.getConnection(JDBC_URL, JDBC_USER, JDBC_PASSWORD);
    }

    public static void close(ResultSet rs) throws SQLException {
        rs.close();
    }

    public static void close(Statement stm) throws SQLException {
        stm.close();
    }

    public static void close(PreparedStatement stm) throws SQLException {
        stm.close();
    }

    public static void close(Connection conn) throws SQLException {
        conn.close();
    }
    
    //Lo que quiere decir propagar la excepcion es que la proxima vez que llamemos a este metodo (que tiene la exepcion) es que 
    // nos mandará a poner la excepcion en la firma de la llamada (seria seguir propagandola) o que la envolvamos en try-catch

}
