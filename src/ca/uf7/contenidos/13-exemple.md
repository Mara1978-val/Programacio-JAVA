<!--# Exemple d'enumerador i toString (Java)

A continuació es mostra un exemple que aplica tan el tipus **enum** com una versió sobreescrita del mètode **toString**.

:::: tabs
=== Java

::: tabs
== Tamany.java

```java
public enum Tamany {
    MITJANA, FAMILIAR
}
```

== Tipus.java

```java
public enum Tipus {
    MARGARIDA, NAPOLITANA, MARINARA, CALZONE
}
```

== Estat.java

```java
public enum Estat {
    ENCOMANADA, SERVIDA
}
```

== Pizza.java

```java
public class Pizza {
    private Tipus tipus;
    private Tamany tamany;
    private Estat estat;

    // Constructor per inicialitzar una pizza
    public Pizza(Tipus tipus, Tamany tamany) {
        this.tipus = tipus;
        this.tamany = tamany;
        this.estat = Estat.ENCOMANADA; // Estat per defecte
    }

    // Sobreescriptura del mètode toString
    @Override
    public String toString() {
        return "Encomanda de pizza del tipus " + this.tipus + 
               ", de tamany " + this.tamany + ", i està " + this.estat + ".";
    }
}
```

== Main.java

```java
public class Main {
    public static void main(String[] args) {
        // Ens fan una primera encomanda
        Pizza pizza1 = new Pizza(Tipus.MARGARIDA, Tamany.MITJANA);

        // Mostrem la informació de la pizza encomanada
        System.out.println(pizza1);
    }
}
```

:::
::::
-->

# 13. Exemple pràctic: Constants i toString

En aquest exemple veurem com gestionar les propietats d'un objecte mitjançant **constants de classe** per a evitar errors d'escriptura i com utilitzar el mètode `toString()` per a facilitar la visualització de les dades.

## 13.1. Definició de la classe amb Constants

En lloc d'usar enumeradors, utilitzem atributs `static final`. Això ens permet centralitzar els valors permesos (com els tamanys o tipus de pizza) en un sol lloc.

::: tabs
== Pizza.java
```java
public class Pizza {
    // Constants de classe per a evitar errors al teclejar
    public static final String M_MITJANA = "MITJANA";
    public static final String M_FAMILIAR = "FAMILIAR";
    
    public static final String T_MARGARIDA = "MARGARIDA";
    public static final String T_NAPOLITANA = "NAPOLITANA";

    private String tipus;
    private String tamany;
    private String estat;

    // Constructor
    public Pizza(String tipus, String tamany) {
        this.tipus = tipus;
        this.tamany = tamany;
        this.estat = "ENCOMANADA"; // Estat inicial per defecte
    }

    // Mètode per a canviar l'estat
    public void servir() {
        this.estat = "SERVIDA";
    }

    /**
     * Sobreescriptura del mètode toString.
     * Es crida automàticament quan fem un System.out.println de l'objecte.
     */
    @Override
    public String toString() {
        return "Pizza " + this.tipus + " (" + this.tamany + ") - Estat: " + this.estat;
    }
}