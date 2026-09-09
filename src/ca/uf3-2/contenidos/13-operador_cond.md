# Operador condicional

Aquest operador ternari permet retornar valors en funció d'una expressió lògica. Té la següent sintaxi:

`expresioLogica ? expresio_1 : expresio_2`

Si el resultat d'avaluar l'expressió lògica és vertader, retorna el valor de la primera expressió, i en cas contrari, retorna el valor de la segona expressió. Com veurem més endavant és equivalent a una estructura alternativa doble:

::: tabs
== Java

```java
if (expresioLogica) { 
    valor = expresio_1; 
} else { 
    valor = expresio_2; 
}
```

:::

|Operador|Descripció|Exemple d'expressió|Resultat de l'exemple|
|--------|----------|-------------------|---------------------|
|?|operador condicional|a = 4; <br> b = a == 4 ? a+5 : 6-a; <br> b = a > 4 ? a*7 : a + 8; | <br> b val 9 <br> b val 12 |

>***Exemple amb operador condicional:***
>
>::: tabs
>== Java
>
>```java
>public class UF04OperadorCondicional {
>    public static void main(String[] args) {
>
>        // Declaració de variables
>        int i = 1, j = 2, k;
>
>        // Procés principal
>        k = i > j ? 2 * i : 3 * j + 1;
>        System.out.println("i = " + i);
>        System.out.println("j = " + j);
>        System.out.println("k = " + k);
>
>        i = 2;
>        j = 1;
>        k = i > j ? 2 * i : 3 * j + 1;
>        System.out.println("i = " + i);
>        System.out.println("j = " + j);
>        System.out.println("k = " + k);
>    }
>}
>```
>
>:::