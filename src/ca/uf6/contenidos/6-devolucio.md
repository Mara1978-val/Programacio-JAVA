# 6. Devolució d'un valor

Les funcions poden retornar valors de diferents tipus, tant valors simples (com nombres enters, decimals, booleans, caràcters, etc.) com estructures o entitats més complexes (com llistes, vectors, cadenes de text, objectes, etc.).

En tots els casos, s'utilitza una instrucció específica (anomenada habitualment `return`) per a indicar quin valor ha de tornar la funció. En el cas dels valors complexos, la funció sol retornar una referència a la dada original, no una còpia, per la qual cosa qualsevol modificació posterior podria afectar l'element retornat depenent del llenguatge i del context.

Exemples de funcions que retornen valors i referències:

::: tabs
== Java

```java
public class ExempleDevolucio {

    // Funció que retorna un enter (tipus primitiu)
    public static int obtindreNombre() {
        int resultat = 42;
        return resultat;
    }

    // Funció que retorna una cadena (objecte)
    public static String obtindreSalutacio() {
        return "Hola món!";
    }

    // Funció que retorna un vector d'enters (també un objecte)
    public static int[] crearVector() {
        int[] vector = {1, 2, 3, 4, 5};
        return vector;
    }

    public static void main(String[] args) {
        int valor = obtindreNombre();
        System.out.println("Valor retornat: " + valor);

        String salutacio = obtindreSalutacio();
        System.out.println("Salutació: " + salutacio);

        int[] vector = crearVector();
        System.out.print("Vector: ");
        for (int x : vector) {
            System.out.print(x + " ");
        }
    }
}
```

:::
