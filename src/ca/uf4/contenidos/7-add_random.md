# El mètode random() (Java)

Per generar valors aleatoris farem servir Math.random(). Aquesta funció genera un nombre amb decimal (de tipus double) a l'interval [0 - 1], és a dir, genera un nombre més gran o igual que 0 i menor que 1.

`System.out.println(Math.random());`

Si volem generar valors aleatoris entre 0 i 10 (incloent-hi el 0 i sense arribar a 10) simplement haurem de córrer la coma un lloc o, el que és el mateix, multiplicar per 10.

`System.out.println( Math.random()*10);`

També podem generar per exemple nombres enters entre 50 i 60 ambdós inclosos. Primer multipliquem Math.random() per 11, de manera que obtenim números decimals entre 0 i 10.9999… (sense arribar mai fins a 11). Després desplacem aquest interval sumant 50 pel que obtenim números decimals entre 50 i 60.9999… Finalment, traiem els decimals fent càsting.

`System.out.print(((int)(Math.random()*11) + 50 ));`

Hem vist com generar números aleatoris amb i sense decimals i en diferents intervals. També podem fer-ho amb paraules, per exemple amb el joc de pedra, paper o tisora. Per a fer-ho generarem primer un nombre enter entre 0 i 2 i posteriorment farem correspondre una paraula a cada número. També, podem utilitzar un array de String en cas de tractar-se de moltes paraules.

Veiem un exemple:

::: tabs
== Java

```java
package curs.uf05exemples;
/**
* UF05 Exemple Math.Random
*/
public class UF05ExempleMathRandom {
    public static void main(String[] args) {

        System.out.println("Genera a l'atzar pedra, paper o tisora: ");

        // genera un número a l'azar entre 0 y 2 ambdós inclosos
        int mano = (int)(Math.random()*3);

        switch(mano) {
            case 0:
                System.out.println("piedra");
                break;
            case 1:
                System.out.println("papel");
                break;
            case 2:
                System.out.println("tijera");
                break;
            default:
        }
    }
}
```

:::
