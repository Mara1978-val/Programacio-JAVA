# Solucions UF10 - Fitxers

## Exercicis - Nivell bàsic

## 🧠 Exercici 1

Crear programa que es connecte a la base de dades.

Seleccionar tots els productes de la base de dades i mostrar per consola el nom de cadascun.

Tractar la possible excepció *SQLException.

#### 📦 Codi Java
:::: tabs
=== Java

::: tabs
== Conexió

```java

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

/**
 *
 * @author ggarrido
 */
public class Main {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        String url = "jdbc:mysql://localhost:3306/uf12";
        String username = "root";
        String password = "";

        try {

            //Objecte Connection
            Connection conn = DriverManager.getConnection(url, username, password);

            //Creació de la query
            Statement stmt = conn.createStatement();

            //Creació del resultSet per a guardar el resultat de la query
            ResultSet resultado = stmt.executeQuery("SELECT * FROM productos1");

            //Recorrem el cursor
            while (resultado.next()) {
                System.out.println(resultado.getString("NOMBRE"));
            }

            /*
            Si tinguérem una excepció, les sentències close() no s'executarien. 
            Per a evitar això es deurien possar dins d'un finally.
            */
            resultado.close();
            stmt.close();
            conn.close();
        } catch (SQLException e) {
            System.err.println("Error al realitzar la consulta SQL: " + e.getMessage());
        }
    }
}

```
:::

::: tabs
== App.java

```java

```
:::
::::

## 🧠 Exercici 2

Modificar l'exercici 1 per a utilitzar el autoClose i per a mostrar per consola tots els atributs de cadascun.
#### 📦 Codi Java
:::: tabs
=== Java

::: tabs
== Conexió

```java
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

/**
 *
 * @author ggarrido
 */
public class Main {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        String url = "jdbc:mysql://localhost:3306/uf12";
        String username = "root";
        String password = "";

        //AutoClose
        try (   Connection conn = DriverManager.getConnection(url, username, password);
                Statement stmt = conn.createStatement();
                ResultSet resultado = stmt.executeQuery("SELECT * FROM productos1");
        ){
            while (resultado.next()){
                System.out.print(resultado.getString("CODIGO_ARTICULO") + " | ");
                System.out.print(resultado.getString("SECCION") + " | ");
                System.out.print(resultado.getString("NOMBRE") + " | ");
                System.out.print(resultado.getDouble("PRECIO") + " | ");
                System.out.print(resultado.getString("PAIS") + " | ");
                System.out.println(resultado.getDate("FECHA"));
            }
        } catch (SQLException e) {
            System.err.println("Error al realitzar la consulta SQL: " + e.getMessage());
        }
    }
    
}

```
:::

::: tabs
== App.java

```java

```
:::
::::

## 🧠 Exercici 3
Modifica l'exercici 2 per a extraure la connexió a una classe externa anomenada "ConexionBBDD" i en aquesta crea el mètode **getConexion()** que s'encarregue de retornar una connexió.

Aquesta classe estarà situada en un paquet anomenat "utils" dins del projecte.
#### 📦 Codi Java
:::: tabs
=== Java

::: tabs
== Conexió

```java
package uf13exercici3.utils;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

/**
 *
 * @author ggarrido
 */
public class ConexionBBDD {
    //Creem les variables. Privades i estàtiques.
    private static String url = "jdbc:mysql://localhost:3306/uf12";
    private static String username = "root";
    private static String password = "";
    private static Connection conection;

    /*
    Mètode getConnexion() és el mètode que retorna la instància de la classe.
    Singleton és un patró de disseny que normalment s'usa quan no desitja crear diverses instàncies d'una classe.
     */
    public static Connection getConexion() throws SQLException {
        if (conection == null) {
            conection = DriverManager.getConnection(url, username, password);
        }
        return conection;
    }
}
```
:::

::: tabs
== App.java

```java
package uf13exercici3;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import uf13exercici3.utils.ConexionBBDD;

/**
 *
 * @author ggarrido
 */
public class Main {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        //AutoClose
        try (   Connection conn = ConexionBBDD.getConexion();
                Statement stmt = conn.createStatement();
                ResultSet resultado = stmt.executeQuery("SELECT * FROM productos1")
        ){
            while (resultado.next()){
                System.out.print(resultado.getString("CODIGO_ARTICULO") + " | ");
                System.out.print(resultado.getString("SECCION") + " | ");
                System.out.print(resultado.getString("NOMBRE") + " | ");
                System.out.print(resultado.getDouble("PRECIO") + " | ");
                System.out.print(resultado.getString("PAIS") + " | ");
                System.out.println(resultado.getDate("FECHA"));
            }
        } catch (SQLException e) {
            System.err.println("Error al realitzar la consulta SQL: " + e.getMessage());
        }
    }
    
}

```
:::
::::

## 🧠 Exercici 4

#### 📦 Codi Java

=== "Java"

    === "Conexió"

        ```java

        ```

    === "App.java"

        ```java
        /*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Main.java to edit this template
 */
package uf13exercici4;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import uf13exercici4.utils.ConexionBBDD;

/**
 *
 * @author ggarrido
 */
public class Main {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        //AutoClose
        try (   Connection conn = ConexionBBDD.getConexion();){
            if (!ConexionBBDD.existeTabla("productos2")) {
                ConexionBBDD.crearTablaProductos();
            }
            Statement stmt = conn.createStatement();
            ResultSet resultado = stmt.executeQuery("SELECT * FROM productos2");
            while (resultado.next()){
                System.out.print(resultado.getString("CODIGO_ARTICULO") + " | ");
                System.out.print(resultado.getString("SECCION") + " | ");
                System.out.print(resultado.getString("NOMBRE") + " | ");
                System.out.print(resultado.getDouble("PRECIO") + " | ");
                System.out.print(resultado.getString("PAIS") + " | ");
                System.out.println(resultado.getDate("FECHA"));
            }
            resultado.close();
            stmt.close();
        } catch (SQLException | Excepcio e) {
            System.err.println("Error al realitzar la consulta SQL: " + e.getMessage());
        }
    }
    
}

```
## 🧠 Exercici 5

#### 📦 Codi Java
:::: tabs
=== Java

::: tabs
== Conexió

```java

```
:::

::: tabs
== App.java

```java
/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Main.java to edit this template
 */
package uf13exercici5;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import uf13exercici5.utils.ConexionBBDD;

/**
 *
 * @author ggarrido
 */
public class Main {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        //AutoClose
        try (   Connection conn = ConexionBBDD.getConexion();){
            if (!ConexionBBDD.existeTabla("productos2")) {
                ConexionBBDD.crearTablaProductos();
            }
            String query = "SELECT * FROM productos2 WHERE SECCION = ? AND PAIS = ?";
            PreparedStatement ps = conn.prepareStatement(query);
            ps.setString(1, "Deportes"); // valor per a SECCION
            ps.setString(2, "Alemania"); // valor per a PAIS
            ResultSet resultado = ps.executeQuery();
            while (resultado.next()){
                System.out.print(resultado.getString("CODIGO_ARTICULO") + " | ");
                System.out.print(resultado.getString("SECCION") + " | ");
                System.out.print(resultado.getString("NOMBRE") + " | ");
                System.out.print(resultado.getDouble("PRECIO") + " | ");
                System.out.print(resultado.getString("PAIS") + " | ");
                System.out.println(resultado.getDate("FECHA"));
            }
            resultado.close();
            ps.close();
        } catch (SQLException | Excepcio e) {
            System.err.println("Error al realitzar la consulta SQL: " + e.getMessage());
        }
    }

}
```
:::
::::

## 🧠 Exercici 6

#### 📦 Codi Java
:::: tabs
=== Java

::: tabs
== Conexió

```java

```
:::

::: tabs
== App.java

```java
/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Main.java to edit this template
 */
package uf13exercici6;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import uf13exercici6.utils.ConexionBBDD;

/**
 *
 * @author ggarrido
 */
public class Main {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        //AutoClose
        try (   Connection conn = ConexionBBDD.getConexion();){
            if (!ConexionBBDD.existeTabla("productos2")) {
                ConexionBBDD.crearTablaProductos();
            }
            String query = "SELECT * FROM productos2 WHERE SECCION = ? AND PAIS = ?";
            PreparedStatement ps = conn.prepareStatement(query);
            ps.setString(1, "Deportes"); // valor per a SECCION
            ps.setString(2, "Alemania"); // valor per a PAIS
            ResultSet resultado = ps.executeQuery();
            while (resultado.next()){
                System.out.print(resultado.getString("CODIGO_ARTICULO") + " | ");
                System.out.print(resultado.getString("SECCION") + " | ");
                System.out.print(resultado.getString("NOMBRE") + " | ");
                System.out.print(resultado.getDouble("PRECIO") + " | ");
                System.out.print(resultado.getString("PAIS") + " | ");
                System.out.println(resultado.getDate("FECHA"));
            }
            resultado.close();
            ps.close();

            String query2 = "UPDATE productos2 SET PRECIO = ? WHERE SECCION = ? AND PAIS = ?";
            PreparedStatement ps2 = conn.prepareStatement(query2);
            ps2.setDouble(1, 9999.0); // nou preu
            ps2.setString(2, "Deportes"); // valor per a SECCION
            ps2.setString(3, "Alemania"); // valor per a PAIS
            int rowsAffected = ps2.executeUpdate();
            if(rowsAffected>0)
                System.out.println(rowsAffected + " filas afectadas.");
            else{
                System.out.println("No s'ha actialitzat ninguna fila");  
            }            
            ps2.close();
        } catch (SQLException | Excepcio e) {
            System.err.println("Error al realitzar la consulta SQL: " + e.getMessage());
        }
    }

}
```
:::
::::

## 🧠 Exercici 7

#### 📦 Codi Java
:::: tabs
=== Java

::: tabs
== Conexió

```java

```
:::

::: tabs
== App.java

```java
/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Main.java to edit this template
 */
package uf13exercici7;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.sql.Date;
import uf13exercici7.utils.ConexionBBDD;
import uf13exercici7.utils.Producto;

/**
 *
 * @author ggarrido
 */
public class Main {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        //AutoClose
        try (   Connection conn = ConexionBBDD.getConexion();){
            if (!ConexionBBDD.existeTabla("productos2")) {
                ConexionBBDD.crearTablaProductos();
            }
            String query = "SELECT * FROM productos2 WHERE SECCION = ? AND PAIS = ?";
            PreparedStatement ps = conn.prepareStatement(query);
            ps.setString(1, "Deportes"); // valor per a SECCION
            ps.setString(2, "Alemania"); // valor per a PAIS
            ResultSet resultado = ps.executeQuery();
            while (resultado.next()){
                System.out.print(resultado.getString("CODIGO_ARTICULO") + " | ");
                System.out.print(resultado.getString("SECCION") + " | ");
                System.out.print(resultado.getString("NOMBRE") + " | ");
                System.out.print(resultado.getDouble("PRECIO") + " | ");
                System.out.print(resultado.getString("PAIS") + " | ");
                System.out.println(resultado.getDate("FECHA"));
            }
            resultado.close();
            ps.close();

            String query2 = "UPDATE productos2 SET PRECIO = ? WHERE SECCION = ? AND PAIS = ?";
            PreparedStatement ps2 = conn.prepareStatement(query2);
            ps2.setDouble(1, 9999.0); // nou preu
            ps2.setString(2, "Deportes"); // valor per a SECCION
            ps2.setString(3, "Alemania"); // valor per a PAIS
            int rowsAffected = ps2.executeUpdate();
            System.out.println(rowsAffected + " filas afectadas.");
            p2.close();

            String query3 = "SELECT * FROM productos";
            PreparedStatement ps3 = conn.prepareStatement(query);
            ArrayList<Producto> productos = new ArrayList<>();
            ResultSet rs = ps.executeQuery();
            while (rs.next()) {
                String codigo = rs.getString("CODIGO_ARTICULO");
                String seccion = rs.getString("SECCION");
                String nombre = rs.getString("NOMBRE");
                double precio = rs.getDouble("PRECIO");
                String pais = rs.getString("PAIS");
                Date fecha = rs.getDate("FECHA");
                Producto producto = new Producto(codigo, seccion, nombre, precio, pais, fecha);
                productos.add(producto);
            }
            rs.close();
            p3.close();

            for (Producto p : productos) {
                System.out.println(p.getCODIGO_ARTICULO() + " - " + p.getSECCION() + " - " + p.getNOMBRE() +
                        " - " + p.getPRECIO() + " - " + p.getPAIS() + " - " + p.getFECHA());
            }
        } catch (SQLException | Excepcio e) {
            System.err.println("Error al realitzar la consulta SQL: " + e.getMessage());
        }
    }

}
```
:::
::::

