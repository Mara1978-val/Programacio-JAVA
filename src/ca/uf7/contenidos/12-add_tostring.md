# Mètode toString (Java)

El mètode `toString` és heretat de la classe Object i es fa servir per obtenir una representació en forma de cadena d'un objecte. Quan s'imprimeix un objecte, el mètode toString és el que determina la sortida de text.

Exemple del comportament per defecte (sense sobreescriure)

Si no es sobrescriu, el mètode toString retorna una representació genèrica que pot no ser útil. Per exemple:

:::: tabs
=== Java

::: tabs
== Classe Persona

```java
public class Persona {
    String nom;
    int edat;

    Persona(String nom, int edat) {
        this.nom = nom;
        this.edat = edat;
    }
}
```

== Classe principal

```java
public class Main {
    public static void main(String[] args) {
        Persona p = new Persona("Anna", 25);
        System.out.println(p); // Mostra: proves.Persona@b4c966a (representació per defecte)
    }
}
```

:::
::::

Per obtenir una representació més clara, es pot sobrescriure el mètode toString:

:::: tabs
=== Java

::: tabs
== Classe Persona

```java
public class Persona {
    String nom;
    int edat;

    Persona(String nom, int edat) {
        this.nom = nom;
        this.edat = edat;
    }

    @Override
    public String toString() {
        return "Persona [nom=" + nom + ", edat=" + edat + "]";
    }
}
```

== Classe principal

```java
public class Main {
    public static void main(String[] args) {
        Persona p = new Persona("Anna", 25);
        System.out.println(p); // Mostra: Persona [nom=Anna, edat=25]
    }
}
```

:::
::::

En java, `@Override` és una anotació que s'utilitza per indicar que un mètode en una classe està sobreescrivint un mètode definit a la classe pare o a una interfície implementada. Serveix per deixar clar que el mètode definit no és nou, sinó que modifica el comportament d'un mètode heretat.

Encara que el codi funcionaria igual sense l'anotació `@Override`, si cometéssim un error tipogràfic, el compilador no ens avisaria.
