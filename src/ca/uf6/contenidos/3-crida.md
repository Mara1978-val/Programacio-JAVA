# 3. Cridar una funció

Les funcions poden ser invocades des de qualsevol altra funció, inclosa ella mateixa.

Tot i això, per començar, és recomanable cridar funcions només des de la funció principal main, ja que facilita l'aprenentatge i la comprensió del flux del programa.

Quan s'invoca una funció, l'execució del programa salta al cos d'aquesta funció (passant-li els paràmetres si n'hi ha). S'executen les seues instruccions i, en acabar, l'execució torna al punt on havia sigut cridada per a continuar amb el programa.

Les funcions s'invoquen pel seu nom, seguit d'un parèntesi que conté la llista de paràmetres. Si no hi ha cap paràmetre, igualment cal incloure els parèntesis. Si la funció retorna un valor, aquest pot assignar-se a una variable o utilitzar-se directament, per exemple dins d'una expressió o com a argument d'una altra funció.

Exemple utilitzant les funcions de l'apartat anterior:

::: tabs
== Java

```java
public static void main(String[] args) {
  // No té paràmetres ni retorna valor. Simplemente imprimeix "Hola Mon"
  imprimeixHolaMon();
  // És habitual cridar a una funció i guardar el valor retornat en una variable
  int a = doble(10); // a = 20 (10*2)
  int b = multiplica(3, 5); // b = 15 (3*5)
  // Poden passar-se variables com a paràmetres
  int c = doble(a); // c = 40 (20*2)
  int d = multiplica(a, b); // d = 300 (20*15)
  // Poden combinar-se funcions i expressions
  int e = doble(4) + multiplica(2,10); // e = 8 + 20
  System.out.println("El doble de 35 és " + doble(35) ); // "El doble de 35 és 70"
  System.out.println("12 per 12 és " + multiplica(12,12) ); // "12 per 12 és 144"
}
```

:::

>***Exemple: Programa amb una funció que suma dos números.***
>
>::: tabs
>== Java
>
>```java
>import java.util.Scanner;
>
>public class Suma {
>
>    public static void main(String[] args) {
>        Scanner sc = new Scanner(System.in);
>        int num1, num2, suma;
>
>        System.out.print("Introdueix un número: ");
>        num1 = sc.nextInt();
>
>        System.out.print("Introdueix un altre número: ");
>        num2 = sc.nextInt();
>
>        suma = suma(num1, num2);
>
>        System.out.println("La suma és: " + suma);
>    }
>
>    public static int suma(int n1, int n2) {
>        int suma;
>        suma = n1 + n2;
>        return suma;
>    }
>}
>```
>
>:::

>***Exemple: Programa amb una funció que determina si un número és parell o imparell.***
>
>::: tabs
>== Java
>
>```java
>import java.util.Scanner;
>
>public class ParImpar {
>
>    public static void main(String[] args) {
>        Scanner in = new Scanner(System.in);
>        int num;
>
>        System.out.print("Introdueix un número: ");
>        num = in.nextInt();
>
>        if (par(num) == true)  // Crida a la funció des de l'expressió
>            System.out.println(num + " és parell.");
>        else
>            System.out.println(num + " és senar.");
>    }
>
>    public static boolean par(int numero) {
>        boolean par = false;
>
>        if (numero % 2 == 0)  // Si el residu és 0, és parell ('true'); si no, 'false'
>            par = true;
>
>        return par;
>    }
>}
>```
>
>:::
