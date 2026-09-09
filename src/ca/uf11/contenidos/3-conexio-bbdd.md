# Guia de connexió a MySQL des de Java

## Objectiu

En esta guia aprendràs a connectar un programa **Java** amb una base de dades **MySQL** utilitzant **JDBC**.

> **Important:** esta guia és per a **Java**.

Treballarem amb:
- **Java**
- **MySQL**
- **XAMPP**
- el connector `mysql-connector-j-9.6.0.jar`

---

## Dades de connexió

En els exemples utilitzarem:

- **Base de dades:** `test`
- **Usuari:** `root`
- **Contrasenya:** buida

La URL serà:

```java
jdbc:mysql://localhost:3306/test
```

---

## Imports necessaris

```java
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.Statement;
```

---

## Exemple 1: connexió amb `try` normal

En este cas, els recursos s’han de tancar manualment.

```java
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.Statement;

public class App {
    private static final String URL = "jdbc:mysql://localhost:3306/test";
    private static final String USUARI = "root";
    private static final String PASSWORD = "";

    public static void main(String[] args) {
        Connection conn = null;
        Statement stmt = null;

        try {
            conn = DriverManager.getConnection(URL, USUARI, PASSWORD);
            stmt = conn.createStatement();

            System.out.println("Connexió correcta a MySQL des de Java");

        } catch (Exception e) {
            System.out.println("Error en la connexió");
            e.printStackTrace();

        } finally {
            try {
                if (stmt != null) {
                    stmt.close();
                }
                if (conn != null) {
                    conn.close();
                }
            } catch (Exception e) {
                e.printStackTrace();
            }
        }
    }
}
```

### Explicació

En este exemple:

- la connexió es crea dins del `try`
- el `Statement` també es crea dins del `try`
- en el bloc `finally` es tanquen els recursos manualment

> Este sistema és correcte, però el codi queda més llarg i és més fàcil oblidar-se de tancar algun recurs.

---

## Exemple 2: connexió amb `try-with-resources`

Esta és la forma que **anem a gastar en classe**.

```java
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.Statement;

public class App {
    private static final String URL = "jdbc:mysql://localhost:3306/test";
    private static final String USUARI = "root";
    private static final String PASSWORD = "";

    public static void main(String[] args) {
        try (Connection conn = DriverManager.getConnection(URL, USUARI, PASSWORD);
             Statement stmt = conn.createStatement()) {

            System.out.println("Connexió correcta a MySQL des de Java");

        } catch (Exception e) {
            System.out.println("Error en la connexió");
            e.printStackTrace();
        }
    }
}
```

### Explicació

En este exemple:

- `Connection` i `Statement` es declaren dins del `try`
- Java els tanca automàticament en acabar
- no fa falta escriure `close()`
- el codi queda més net i més segur

> **Esta és la forma recomanada i la que anem a utilitzar.**

---

## Diferència entre els dos

### `try` normal
- s’ha de tancar tot manualment
- necessita `finally`
- el codi és més llarg

### `try-with-resources`
- els recursos es tanquen automàticament
- no cal `finally` per a tancar
- el codi és més net
- és la millor opció en Java modern

---

## Quina opció utilitzarem?

En esta unitat treballarem amb:

```java
try-with-resources
```

Per tant, encara que és important conéixer el `try` normal, **el model que has d’usar és el de `try-with-resources`**.

---

## Codi base que gastarem

```java
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.Statement;

public class App {
    private static final String URL = "jdbc:mysql://localhost:3306/test";
    private static final String USUARI = "root";
    private static final String PASSWORD = "";

    public static void main(String[] args) {
        try (Connection conn = DriverManager.getConnection(URL, USUARI, PASSWORD);
             Statement stmt = conn.createStatement()) {

            System.out.println("Connexió correcta a MySQL des de Java");

        } catch (Exception e) {
            System.out.println("Error en la connexió");
            e.printStackTrace();
        }
    }
}
```

---

## Recordatori final

Perquè este codi funcione, has de tindre:

- XAMPP en marxa
- el servici **MySQL** iniciat
- la base de dades `test`
- el connector `mysql-connector-j-9.6.0.jar` dins de `lib`
- el projecte Java creat **sense build tools**

---
