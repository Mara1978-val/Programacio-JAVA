# 5. Mètodes

## 5.1. Estructura dels mètodes

Es diu mètode a una funció d'una classe. La seua sintaxi general és la següent:

::: tabs
== Java

```java
tipus nom_del_mètode(llista de paràmetres) {
    // cos del mètode
}
```

:::

On:

- El **tipus** especifica el tipus de dades que retorna el mètode. Pot tractar-se de qualsevol tipus vàlid, incloent els tipus de classes que crea el programador. Un mètode també pot no retornar ningun valor.
- El **nom** del mètode l'especifica nom_del_mètode, que pot ser qualsevol identificador vàlid diferent a aquells ja usats per altres elements del programa.
- La **llista de paràmetres** és una seqüència de parells de tipus i identificador separats per comes. Els paràmetres són variables que reben el valor dels arguments que es passa al mètode quan es diu. Si el mètode no té paràmetres, la llista de paràmetres estarà buida.

Alguns exemples:

::: tabs
== Java

```java
// Mètode que retorna un enter (tipus: int)
public int obtenirNombre() {
    return 42;
}

// Mètode que no retorna res (tipus: void)
public void mostrarMissatge() {
    System.out.println("Hola, món!");
}

// Mètode amb un sol paràmetre
public void saludar(String nom) {
    System.out.println("Hola, " + nom + "!");
}

// Mètode amb més d'un paràmetre
public int sumar(int a, int b) {
    return a + b;
}

// Mètode sense paràmetres ni retorn
public void avís() {
    System.out.println("Açò és un avís.");
}

// Mètode que rep un objecte com a paràmetre
public void mostrarLongitud(String text) {
    System.out.println("Longitud del text: " + text.length());
}
```

:::

## 5.2. *Getters* i *setters*

Encara que seria possible crear una classe que únicament continga dades, això rarament ocorre. La majoria de les vegades és convenient crear mètodes per a accedir als atributs de la classe.

Els ***getters*** i ***setters*** són mètodes especials que permeten llegir i modificar els valors dels atributs privats d'una classe respectivament. Això ajuda a protegir les dades i controlar com s'accedeix o es modifica cada atribut.

- Un getter (també anomenat mètode d'accés) és un mètode que retorna el valor d'un atribut privat.
    ::: tabs
    == java

    ```java
    public class Persona {
        private String nom;

        public String getNom() {
            return nom;
        }
    }
    ```

    :::

- Un setter (també anomenat mètode modificador) és un mètode que permet canviar el valor d'un atribut privat.
    ::: tabs
    == Java

    ```java
    public class Persona {
        private String nom;

        public void setNom(String nouNom) {
            nom = nouNom;
        }
    }
    ```

    :::

Avantatges:

- Permet encapsular les dades de manera segura.
- És possible afegir validacions dins dels setters per evitar valors incorrectes.
- Millora la mantenibilitat del codi, ja que qualsevol canvi en la manera com s'accedeix a les dades es pot centralitzar en estos mètodes.

Exemple complet:

::: tabs
== Java

```java
public class Persona {
    private String nom;
    private int edat;

    public String getNom() {
        return nom;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }

    public int getEdat() {
        return edat;
    }

    public void setEdat(int edat) {
        if (edat >= 0) {
            this.edat = edat;
        }
    }
}
```

:::
