# For en format foreach

En treballar amb arrays és molt freqüent cometre errors fent servir els índexs. L'error més típic consisteix a intentar accedir a un element mitjançant un índex que surt dels límits.

Per recórrer un array d'una manera més pràctica i senzilla, sense que ens hàgem de preocupar dels límits, podem utilitzar el bucle for amb el format foreach.

::: tabs
== Java

```java
double nota[] = new double[4]; // Declarem un vector
for (double n : nota) // Utilitzem una variable del tipus del vector
    System.out.print(n + " "); // La variable que va prenent el valor
                               // de cadascun dels elements del vector
```

:::

>***Exemple: for en format foreach***
>
>::: tabs
>== Java
>
>```java
>import java.util.Scanner;
>/**
>* Recorrer un array amb un for amb format foreach.
>*/
>public class UF06ExempleForeach {
>    public static void main(String[] args) {
>
>        double nota[] = new double[4];
>        int i;
>        Scanner entrada = new Scanner (System.in);
>
>        System.out.println("Per a calcular la nota mitjana necessite saber la ");
>        System.out.println("nota de cadascun dels teus exàmens.");
>
>        for (i = 0; i < 4; i++) {
>            System.out.print("Nota del examen número " + (i + 1) + ": ");
>            nota[i] = entrada.nextDouble();
>        }
>        System.out.println("Les teues notes són: ");
>        double suma = 0;
>        for (double n : nota) { // for amb format foreach
>            System.out.print(n + " "); // utilitzem directament la variable n
>            suma += n;
>        }
>        System.out.println("\nLa mitjana és " + suma / 4);
>   }
>}
>```
>
>:::
