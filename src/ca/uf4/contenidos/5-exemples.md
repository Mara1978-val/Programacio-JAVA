# 5. Exemples

## 5.1. Exemple 1

Programa que mostre per pantalla els 20 primers nombres naturals (1, 2, 3… 20).

:::: tabs
=== Java

::: tabs
== Diagrama de flux

![Exemple 1](/img/uf4/exemple1.jpg)

== Codi

```java
public class Exercici1{
    public static  void main(String[] args){
        int cont;

        for(cont=1;cont<=20;cont++)
            System.out.print(cont + " ");

        System.out.print("\n");
    }
}
```

== Eixida

```plaintext
1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20
```

:::
::::

## 5.2. Exemple 2

Programa que suma independentment els parells i els imparells dels números compresos entre 100 i 200.

:::: tabs
=== Java

::: tabs
== Diagrama de flux

![Bucle do-while](/img/uf4/Exemple2.jpg)

== Codi

```java
public class Exercici2{
    public static void main(String[] args){
        int pars, impars, cont;

        pars = 0;
        impars = 0;

        for(cont=100;cont<=200;cont++){
            if(cont % 2 == 0)
                pars = pars + cont;
            else
                impars = impars + cont;
        }

        System.out.println("La suma total dels parells és: " + pars);
        System.out.println("La suma total dels imparells és: " + impars);
    }
}
```

== Eixida

```plaintext
La suma total dels parells és: 7650
La suma total dels imparells és: 7500
```

:::
::::

## 5.3. Exemple 3

Mostra els números múltiples de 5 de 0 a 100 utilitzant el bucle for.

### 5.3.1. Codi

:::: tabs
=== Java

::: tabs
== Codi

```java
public class UF04Exemple01 {
    public static void main(String[] args) {
        for(int i = 0; i <= 100; i += 5) {
            System.out.print(i + " ");
        }
    } 
}
```

== Eixida

```plaintext
0 5 10 15 20 25 30 35 40 45 50 55 60 65 70 75 80 85 90 95 100
```

:::
::::

## 5.4. Exemple 4

Mostra els números del 320 al 160, contant de 20 en 20 cap a baix utilitzant el bucle while.

:::: tabs
=== Java

::: tabs
== Codi

```java
public class UF05Exemple02 {
    public static void main(String[] args) {

        int i = 320;

        while(i >= 160) {
            System.out.println(i);
            i-=20;
        }
    }
}
```

== Eixida

```plaintext
320
300
280
260
240
220
200
180
160
```

:::
::::

## 5.5. Exemple 5

Realitza un programa que demane un número per teclat i després ens mostre el número al revés.

:::: tabs
=== Java

::: tabs
== Codi

```java
import java.util.Scanner;

public class UF05Exemple03 {
    public static void main(String[] args) {

    // Declaració de variables
    int numero, auxiliar, reves;
    Scanner entrada = new Scanner (System.in);

    // Petició de dades
    System.out.print("Introdueix un número enter: ");
    numero = entrada.nextInt();

    // Inversió del número
    reves = 0;
    auxiliar = numero;

    while (auxiliar>0){
        // Extrau dígit més baix i el posa com el més alt en reves
        reves = (reves*10) + (auxiliar%10);
        // Llevem el dígit més baix i processem la resta del número
        auxiliar = auxiliar/10; }
        System.out.println("El número " + numero + " girat del revés és " + reves);
        entrada.close();
    }
}
```

== Eixida

```plaintext
Introdueix un número enter: 12345
El número 12345 girat del revés és 54321
```

:::
::::

## 5.6. Exemple 6

Crea un programa que pensa un número a l'atzar entre 0 i 100. L'usuari ha de endevinar-ho i té per a això 5 oportunitats. Després de cada intent fallit, el programa dirà quantes oportunitats queden i si el nombre introduït és menor o major que el que ha pensat.

:::: tabs
=== Java

::: tabs
== Codi

```java
import java.util.Scanner;

public class UF04Exemple04{
    public static void main(String[] args) {

        // Declaració de variables
        final int OPORTUNITATS = 5;
        int nUsuari, nMisterios, intent;
        boolean encertat = false;
        Scanner entrada = new Scanner (System.in);

        // Número a l'atzar
        nMisterios = (int)(Math.random() * 101);

        // Petició del número i cálcul
        System.out.println("Estic pensant un número entre el 0 i el 100. Tens 5 oportunitats per a endivinar-lo.");
        intent=OPORTUNITATS;

        do {
        System.out.print("Introdueix un número: ");
        nUsuari = entrada.nextInt();
        intent--;

        if (nUsuari == nMisterios) {
            encertat = true;
            System.out.println("Enhorabona! Has encertat!");
        } else {
            if (nUsuari < nMisterios){
                System.out.println("El número que estic pensant és major que " + nUsuari);
            } else {
                System.out.println("El número que estic pensant és menor que " + nUsuari);
            }
            System.out.println("Et queden " + intent + " oportunitats"); 
        }
        } while (!encertat && (intent > 0));

        if (!encertat) {
            System.out.println("Ho sent molt, no has encertat. El número era el " + nMisterios);
        }
    }
}
```

== Eixida

```plaintext
Estic pensant un número entre el 0 i el 100. Tens 5 oportunitats per a endivinar-lo.
Introdueix un número: 50
El número que estic pensant és major que 50
Et queden 4 oportunitats
Introdueix un número: 70
El número que estic pensant és major que 70
Et queden 3 oportunitats
Introdueix un número: 85
Enhorabona! Has encertat!
```

:::
::::

## Exemple do-while

::: tabs
== Java

```java
package ejemplomenuopciones;
import java.util.Scanner;
/**
* Programa que muestra un menú de opciones para realizar operaciones. El menú
* se repetirá hasta que se introduzca la opción 5.
*/
public class EjemploMenuOpciones {
    public static void main(String[] args) {

        int opcion, n1, n2, suma, resta, multi, division;
        Scanner sc = new Scanner(System.in);

        do {
            System.out.println("¿Qué quieres hacer? ");
            System.out.println("1. Sumar");
            System.out.println("2. Restar");
            System.out.println("3. Multiplicar");
            System.out.println("4. Dividir");
            System.out.println("5. Salir");
            System.out.print("Introduce opcion: ");
            opcion = sc.nextInt();

            switch (opcion) {
            case 1: // Sumar
                System.out.println("--Suma de dos enteros--");
                System.out.print("Introduce un numero: ");
                n1 = sc.nextInt();
                System.out.print("Introduce otro numero: ");
                n2 = sc.nextInt();
                suma = n1 + n2;
                System.out.println("La suma es: " + suma);
                break;

            case 2: // Restar
                System.out.println("--Resta de dos enteros--");
                System.out.print("Introduce un numero: ");
                n1 = sc.nextInt();
                System.out.print("Introduce otro numero: ");
                n2 = sc.nextInt();
                resta = n1 - n2;
                System.out.println("La resta es: " + resta);
                break;

            case 3: // Multiplicar
                System.out.println("--Multiplicación de dos enteros--");
                System.out.print("Introduce un numero: ");
                n1 = sc.nextInt();
                System.out.print("Introduce otro numero: ");
                n2 = sc.nextInt();
                multi = n1 * n2;
                System.out.println("La multiplicación es: " + multi);
                break;

            case 4: // Dividir
                System.out.println("--División de dos enteros--");
                System.out.print("Introduce un numero: ");
                n1 = sc.nextInt();
                System.out.print("Introduce otro numero: ");
                n2 = sc.nextInt();
                if (n2 != 0) {
                    division = n1 / n2;
                    System.out.println("La división es: " + division);
                } else {
                    System.out.println("Error: División entre 0.");
                }
                break;

            case 5: // Salir
                System.out.println("Adios!");
                break;

            default: // En otro caso
                System.out.println("Error: opción incorrecta.");
            }

        } while (opcion !=5);
    }
}
```

:::
