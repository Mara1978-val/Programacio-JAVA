# 4. Bucle do-while

El bucle do-while es codifica le la següent forma:

<div style="display: flex; gap: 50px">

<div style="flex: 1; padding: 10px; text-align: justify;">

  ::: tabs
  == Java

```java
do {
    //bloc d'instruccions
} while (condició);
```

  :::

</div>
<div style="flex: 0.5; padding: 10px; text-align: justify;">

  ![Bucle do-while](/img/uf4/bucle_do_while.jpg)

</div>
</div>

En aquesta mena de bucle, el bloc d'instruccions s'executa sempre almenys una vegada, i aqueix bloc d'instruccions s'executarà mentre **condició** s'avalue a true.

**IMPORTANT**: En el bloc d'instruccions haurà d'existir alguna iteració que, en algun
moment, faça que 'condició' s'avalue a 'false'. Si no el bucle no acabaria mai!

>**Exemple 4**: El mateix exemple 2 d'abans, fet amb un bucle do-while seria:
>
>:::: tabs
>=== Java
>
>::: tabs
>== Codi
>
>```java
>public static void main(String[] args){
>   Scanner sc = new Scanner(System.in);
>   int max, cont;
>   System.out.print("Introdueix el número màxim: ");
>   max = sc.nextInt();
>   cont = 1;
>   
>   do {
>       System.out.println("Número: " + cont);
>       cont++;
>   } while (cont <= max)
>}
>```
>
>== Eixida
>
>```plaintext
>Introdueix el número màxim: 5
>Número 1
>Número 2
>Número 3
>Número 4
>Número 5
>```
>
>:::
>::::
