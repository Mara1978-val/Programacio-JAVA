# 7. Consultes en Java amb `ResultSet`

## 7.1. Què és un `ResultSet`

Quan executem una consulta SQL de tipus `SELECT` en **Java**, el resultat es guarda en un objecte de tipus `ResultSet`.

Un `ResultSet` representa una taula de resultats, és a dir, les files que retorna la consulta.

Per exemple, si fem esta consulta:

```sql
SELECT * FROM productos
```

el resultat es guardarà en un `ResultSet`.

---

## 7.2. Crear un `ResultSet` en Java

Per a executar una consulta i guardar el resultat, utilitzem el mètode:

```java
executeQuery()
```

Este mètode retorna un objecte `ResultSet`.

### Exemple

```java
ResultSet resultado = stmt.executeQuery("SELECT * FROM productos");
```

### Explicació

- `stmt` és l’objecte `Statement`
- `executeQuery()` executa una consulta `SELECT`
- el resultat es guarda en la variable `resultado`
- `resultado` és un objecte de tipus `ResultSet`

> **Important:** `executeQuery()` s’utilitza per a consultes que retornen dades, com `SELECT`.

---

## 7.3. Exemple complet en Java

```java
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.Statement;
import java.sql.ResultSet;

public class App {
    private static final String URL = "jdbc:mysql://localhost:3306/test";
    private static final String USUARI = "root";
    private static final String PASSWORD = "";

    public static void main(String[] args) {
        try (Connection conn = DriverManager.getConnection(URL, USUARI, PASSWORD);
             Statement stmt = conn.createStatement()) {

            // Creació del ResultSet per a guardar el resultat de la query
            ResultSet resultado = stmt.executeQuery("SELECT * FROM productos");

            // Recorrem el cursor
            while (resultado.next()) {
                System.out.println(resultado.getString("NOMBRE"));
            }

        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
```

---

## 7.4. Recórrer un `ResultSet`

Per a llegir les files del resultat, s’utilitza habitualment un bucle amb:

```java
resultado.next()
```

### Exemple

```java
while (resultado.next()) {
    System.out.println(resultado.getString("NOMBRE"));
}
```

### Què fa `next()`?

El mètode `next()` mou el cursor a la fila següent del `ResultSet`.

- si existix una fila següent, retorna `true`
- si ja no queden més files, retorna `false`

Per això s’utilitza dins d’un `while`.

### Funcionament

Cada vegada que es repetix el bucle:

1. el cursor avança a la fila següent
2. es lligen les dades d’eixa fila
3. es mostra la informació per pantalla

---

## 7.5. Obtindre dades d’una columna

Quan el cursor està situat en una fila vàlida, podem obtindre el valor de les seues columnes amb mètodes com:

- `getString()`
- `getInt()`
- `getDouble()`
- `getDate()`

### Exemple

```java
resultado.getString("NOMBRE")
```

En este cas:

- `resultado` és el `ResultSet`
- `getString("NOMBRE")` obté el valor de la columna `NOMBRE` de la fila actual

---

## 7.6. Accedir a una columna pel nom o per la posició

Podem accedir a les columnes de dos formes.

### Per nom de columna

```java
resultado.getString("NOMBRE")
```

### Per número de columna

```java
resultado.getString(2)
```

> **Important:** les columnes comencen a comptar des de **1**, no des de 0.

Normalment, és més fàcil i més clar usar el **nom de la columna**.

---

## 7.7. Exemple mostrant més d’una columna

```java
while (resultado.next()) {
    System.out.println(
        resultado.getInt("ID") + " - " +
        resultado.getString("NOMBRE") + " - " +
        resultado.getDouble("PRECIO")
    );
}
```

En este exemple, per cada fila del `ResultSet` mostrem:

- el camp `ID`
- el camp `NOMBRE`
- el camp `PRECIO`

---

## 7.8. Import necessari

Per a utilitzar `ResultSet`, has d’afegir també este import:

```java
import java.sql.ResultSet;
```

Si no l’importes, el programa no reconeixerà esta classe.

---

## 7.9. Diferència entre `Statement` i `ResultSet`

### `Statement`

S’utilitza per a enviar la consulta SQL a la base de dades.

Exemple:

```java
Statement stmt = conn.createStatement();
```

### `ResultSet`

S’utilitza per a guardar i recórrer el resultat de la consulta.

Exemple:

```java
ResultSet resultado = stmt.executeQuery("SELECT * FROM productos");
```

---

## 7.10. Exemple comentat

```java
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.Statement;
import java.sql.ResultSet;

public class App {
    private static final String URL = "jdbc:mysql://localhost:3306/test";
    private static final String USUARI = "root";
    private static final String PASSWORD = "";

    public static void main(String[] args) {
        try (Connection conn = DriverManager.getConnection(URL, USUARI, PASSWORD);
             Statement stmt = conn.createStatement()) {

            // Executem la consulta SELECT i guardem el resultat
            ResultSet resultado = stmt.executeQuery("SELECT * FROM productos");

            // Recorrem totes les files del ResultSet
            while (resultado.next()) {

                // Mostrem el valor de la columna NOMBRE
                System.out.println(resultado.getString("NOMBRE"));
            }

        } catch (Exception e) {
            System.out.println("Error en la consulta");
            e.printStackTrace();
        }
    }
}
```

---

## 7.11. Idees importants

Has de recordar:

- `executeQuery()` s’utilitza amb consultes `SELECT`
- el resultat es guarda en un objecte `ResultSet`
- `next()` servix per a avançar fila a fila
- `getString()`, `getInt()`, etc. servixen per a llegir els camps de la fila actual
- les dades es lligen mentre el cursor estiga situat en una fila vàlida


---
