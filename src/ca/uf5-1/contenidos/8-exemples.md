# Exemples

## Exemple 1

Crear i carregar un array.

::: tabs
== Java

```java
package curs.UF05exemples;
/**
* UF05 Exemple 1: Crear un array
*/
public class UF05Exemple01 {
    public static void main(String[] args) {
        // Declaració de l'array
        int n[] = new int[4];
        int suma;
        // Carregar valors
        n[0] = 26;
        n[1] = -30;
        n[2] = 0;
        n[3] = 100;
        // Mostrar contingut i fer operacions
        System.out.print("Els valors del vector són els seguents: ");
        System.out.println(n[0] + ", " + n[1] + ", " + n[2] + ", " + n[3]);
        suma = n[0] + n[3];
        System.out.println("El primer element del vector més l'último sumen " + suma);
    }
}
```

:::

## Exemple 2

Mostrar el contingut de la posició del vector que demane l'usuari.

::: tabs
== Java

```java
package curs.UF05exemples;
import java.util.Scanner;
/**
* Mostrar el contingut de la posició del vector que demane l'usuari.
*/
public class UF05Exemple02 {
    public static void main(String[] args) {

        // Declaració de variables i carrega de dades en l'array
        Scanner entrada = new Scanner (System.in);
        int i;
        int x[] = new int[5];
        x[0] = 8;
        x[1] = 33;
        x[2] = 200;
        x[3] = 150;
        x[4] = 11;

        // Demanar quina posició es vol visualitzar i mostrar-la
        System.out.println("El vector té 5 elements. Quin vols veure? ");
        i = entrada.nextInt();
        System.out.printf("L\'element que es troba en la posició %d és el %d", i, x[i-1]);
    }
}
```

:::

## Exemple 3

Carregar un array amb valors demanats per pantalla.

::: tabs
== Java

```java
package curs.UF05exemples;
import java.util.Scanner;
/**
* UF05 Exemple 3: Carregar un array amb valors demanats per pantalla.
*/
public class UF05Exemple03 {
    public static void main (String[] args) {

        // Declaració de variables
        final int ELEMENTS = 10;
        int i;
        int vector[]=new int[ELEMENTS];
        Scanner entrada = new Scanner(System.in);

        // Petició de dades i carrega de l'array
        System.out.println("Escriu " + ELEMENTS + " enters.");
        for (i=0; i<vector.length; i++){
            System.out.print("Escriu l\'ement " + (i+1) + ": ");
            if (entrada.hasNextInt()) 
                vector[i] = entrada.nextInt();
            entrada.nextLine();
        }
        System.out.print("\n");

        //Mostrar el contingut de l'array
        for (i=0; i<vector.length; i++){
            System.out.println("L\'element " + (i+1) + " del vector és: " + vector[i]);
        }
    }
}
```

:::

## Exemple 4

Recórrer un array i mostrar la mitjana.

::: tabs
== Java

```java
package curs.UF05exemples;
/**
* UF05 Exemeple 4: Recórrer un array i mostrar la mitjana.
*/
public class UF05Exemple04 {
    public static void main(String[] args) {
        // Declarem variables i carreguem vector
        int i;
        float[] vectorNotes = {2f, 5.5f, 9f, 10f, 4.9f, 8f, 8.5f, 7f, 6.6f, 5f, 9f, 7f};
        float suma, mitjana;

        // Recorrem l'array per a fer la suma i calculem la mitjana
        suma=0;
        for(i = 0; i < vectorNotes.length; i++) 
            suma = suma + vectorNotes[i];
        mitjana = suma / vectorNotes.length;

        System.out.println("La mitjana és " + mitjana);
    }
}
```

:::

## Exemple 5

A partir de les notes dels estudiants d'una aula, genereu un gràfic de barres (o histograma) on s'indique el nombre d'estudiants que han tret suspès, aprovat, notable o excel·lent.

::: tabs
== Java

```java
package curs.UF05exemples;
/**
* UF05 Exemple 5: A partir de les notes dels estudiants d'una aula, genereu un gràfic de 
barres (o histograma)
* on s'indique el nombre d'estudiants que han tret suspès, aprovat, notable o excel·lent.
*/
public class UF05Exemple05 {
    public static void main (String[] args) {
        // Declaració de variables
        int i, j;
        // Inicialització del vector
        float[] vectorNotes = {2f, 5f, 9f, 6.5f, 10f, 4.5f, 8.5f, 7f, 6f, 7.5f, 9f, 7f};
        // Inicialització dels comptadors de les barres
        int barres[] = new int[4];
        // Calcul del tamany de cada barra
        for (i = 0; i < vectorNotes.length; i++) {
            // Acumulem segons el rang de notes a que correspon
            if ((vectorNotes[i] >=0 )&&(vectorNotes[i] < 5)) {
                barres[0]++;
            } else if (vectorNotes[i] < 6.5) {
                barres[1]++;
            } else if (vectorNotes[i] < 9) {
                barres[2]++;
            } else if (vectorNotes[i] <= 10) {
                barres[3]++;
            }
        }
        // Mostre la gràfica de barres
        System.out.println("Gràfica de barres de las notes");
        System.out.println("______________________________");
        for (i = 0; i < barres.length; i++) {
            switch(i) {
                case 0:
                    System.out.print("Suspés : ");
                    break;
                case 1:
                    System.out.print("Aprobat : ");
                    break;
                case 2:
                    System.out.print("Notable : ");
                    break;
                case 3:
                    System.out.print("Excel·lent : ");
                    break;
            }
            // Imprimim els "*".
            for (j = 0; j < barres[i]; j++) {
                System.out.print("*");
            }
            System.out.println();
        }
    }
}
```

:::

## Exemple 6

Mostrar una taula bidimensional (matriu 5x4) de notes.

::: tabs
== Java

```java
package curs.UF05exemples;
/**
* UF05 Exemple 6. Mostrar una taula bidimensional de notes
*/
public class UF05Exemple06 {
    public static void main (String[] args) {
        // Inicialització de la matriu de notes
        float[][] vectorNotes = {
            { 4.5f, 6f, 5f, 8f},
            { 10f , 8f, 7.5f, 9.5f},
            { 3f , 2.5f, 0f, 6f},
            { 6f , 8.5f, 6f, 4f},
            { 9f , 7.5f, 7f, 8f}
        };
        // Mostrem el contingut de la matriu
        for (int i = 0; i < vectorNotes.length; i++) {
            System.out.print("Els valors de la fila " + i + " són: ");
            for (int j = 0; j < vectorNotes[i].length; j++) {
                System.out.print(vectorNotes[i][j] + " ");
            }
            System.out.println("");
        }
    }
}
```

:::

## Exemple 7

Cerca en una frase introduïda per teclat de la primera i última aparició d'un caràcter indicat per l'usuari.

::: tabs
== Java

```java
package curs.UF05exemples;
import java.util.Scanner;
/**
* UF05 Exemeple 07: Cerca en una frase introduïda per teclat de la primera i última 
aparició d'un caràcter indicat per l'usuari.
*/
public class UF05Exemple07 {
    public static void main(String[] args) { 
        // Declaració de variables
        String text, charText;
        char caracter;
        int posIn, posFi;
        Scanner entrada = new Scanner(System.in);

        // Petició de dades
        System.out.println("Escriu una línia de text i polsa INTRO:"); 
        text = entrada.nextLine(); 
        System.out.println("Quin caràcter vols cercar? "); 
        charText = entrada.next(); 
        entrada.nextLine(); 
        caracter = charText.charAt(0); // Ens quedem amb el primer per si l'usuari ha introduït més

        // Processar dades
        posIn = text.indexOf(caracter); 
        posFi = text.lastIndexOf(caracter);
        if (posIn > -1){
            System.out.println("Les aparicions del caràcter '" + caracter + "' son:" ); 
            System.out.println("Primera aparició: " + posIn+1); 
            System.out.println("Última aparició: " + posFi+1); 
        } else { 
            System.out.println("Aquest caràcter no es troba en el text."); 
        } 
    } 
}
```

:::

## Exemple 8

Cerca seqüencial

::: tabs
== Java

```java
package curs.UF05exemples;
import java.util.Scanner;
/**
* UF05 Exemple 8: Cerca seqüencial
*/
public class UF05Exemple08 {
    public static void main (String[] args){
        int vector[] = {5, 7, 9, 3, 2, 8, 10, 1, 0, 5, 7};
        int numero, i;
        boolean trobat;
        Scanner entrada = new Scanner (System.in);
        System.out.print("Introdueix un número enter a cercar (0 a 10): ");
        numero = entrada.nextInt();
        trobat=false;
        for (i=0; i<vector.length && !trobat; i++){
            trobat = (vector[i]==numero);
        }
        if (trobat) {
            System.out.println("El número es troba en la posició: " + i);
        } else {
            System.out.println("El número no es troba en el vector."); 
        }
    }
}
```

:::

## Exemple 9

Cerca dicotòmica o binaria per programa.

::: tabs
== Java

```java
package curs.UF05exemples;
import java.util.Scanner;
import java.util.Arrays;
/**
* UF05 Exemple 09: Cerca dicotòmica o binària per programa
*/
public class UF05Exemple09 {
    public static void main (String[] args){

        int vector[] = {5, 7, 9, 3, 2, 8, 10, 1, 0, 5, 7};
        int numero, posicio=-1;
        int esquerra=0; // Index esquerra inicial primera posició
        int dreta=vector.length-1; // Index dreta inicial última posició
        int centre = (dreta + esquerra) / 2; // Index central inicial en el centre del vector
        boolean trobat;
        Scanner entrada = new Scanner (System.in);

        System.out.print("Introdueix un número enter a cercar (0 a 10): ");
        numero = entrada.nextInt();
        // Primer ordenem el vector i el mostrem per a fer la verificació visual
        Arrays.sort(vector);
        for (int i=0; i<vector.length; i++){
            System.out.print(vector[i] + " ");
        }

        trobat=false;
        while (esquerra<=dreta && !trobat) {
            if (numero==vector[centre]){
                trobat=true;
                posicio=centre;
            } else {
                if (numero<vector[centre]){
                    dreta=centre-1;
                } else {
                    esquerra=centre+1;
                }
            }
            centre=(esquerra+dreta)/2;
        }
        if (trobat) {
            System.out.println("\nEl número es troba en la posició: " + posicio);
        } else {
            System.out.println("\nEl número no es troba en el vector."); 
        }
    } 
}
```

:::

## Exemple 10

Cerca dicotòmica o binaria utilitzant la funció binarySearch. Inclou exemple de l'ús de la funció arraycopy.

::: tabs
== Java

```java
package curs.UF05exemples;
import java.util.Scanner;
import java.util.Arrays;
/**
* Cerca dicotòmica o binaria utilitzant la funció binarySearch.
* Inclou exemple de l'ús de la funció arraycopy.
*/
public class UF05Exemple10 {
    public static void main (String[] args){
        int vector1[] = {5, 7, 9, 3, 2, 8, 10, 1, 0, 5, 7};
        int vector2[] = new int[vector1.length];
        int numero, posicio;
        Scanner entrada = new Scanner (System.in); 
        System.out.print("Introdueix un número enter a cercar (0 a 10): ");
        numero = entrada.nextInt();

        // Realitzem una còpia del vector com ejemple de l'ús de la funció arraycopy
        System.arraycopy(vector1, 0, vector2, 0, vector1.length);
        Arrays.sort(vector2);
        for (int i=0; i<vector1.length; i++){
            System.out.print(vector1[i] + " ");
        }
        System.out.println("");
        for (int i=0; i<vector2.length; i++){
            System.out.print(vector2[i] + " ");
        }

        // Realitzem la cerca dicotòmica utilitzant la funció
        posicio=Arrays.binarySearch(vector2, numero);
        if (posicio>0) {
            System.out.println("\nEl número es troba en la posició: " + posicio);
        } else {
            System.out.println("\nEl número no es troba en el vector."); 
        }
    }
}
```

:::

## Exemple 11

Ompliment i recorregut d'un vector

Veurem un exemple de com omplir i mostrar un vector d'enters:

::: tabs
== Java

```java
public static void main(String[] args) {
    Scanner in = new Scanner(System.in);

    int[] vector = new int[5]; // Creació d'un vector d'enters de mida 5
    int i;

    System.out.print("Introdueix els valors del vector: ");

    // Omplir el vector amb valors des del teclat
    for(i = 0; i < vector.length; i++)
        vector[i] = in.nextInt();

    System.out.print("El vector introduït és: ");

    // Mostrar el vector
    for(i = 0; i < vector.length; i++)
        System.out.print(vector[i] + " ");

    System.out.println();
}
```

:::

Fem ús de la propietat `length`. També podríem haver posat un 5 (grandària del vector). L'eixida és:

::: tabs
== Java

```java
Introdueix els valors del vector: 1 2 3 4 5
El vector introduït és: 1 2 3 4 5
```

:::

Podem introduir els valors amb espais i una vegada introduït el cinqué número donar-li al 'intro'. O introduir un valor per línia.


## Exemple 12

Eliminar element d'un Array


>::: tabs
>== Java
>
>```java
>// Declarar array de 3 elements 
>int[] edats = new int[3];
>
>// Omplir
>edats[0] = 20; 
>edats[1] = 25;
>edats[2] = 30;
>
>// Accedir a un element
>int primeraEdat = edats[0]; 
>
>// Per eliminar el element, edats[1] hem de assignar-li un valor null
>edats[1] = null;
>
>// Ara conté [20, null, 30] però la mida segueix sent 3, encara que hi haga un element menys
>```
>

 ## Exemple 13
 
 Eliminar element d'un ArrayList
>
>::: tabs
>== Java
>
>```java
>// Declarar ArrayList
>ArrayList<Integer> edats = new ArrayList<>();
>
>// Afegir elements 
>edats.add(20);
>edats.add(25);
>
>// Accedir a un element
>int primeraEdat = edats.get(0);
>
>// Eliminar un element
>edats.remove(0);
>
>// La mida canvia dinàmicament
>```
>
>:::