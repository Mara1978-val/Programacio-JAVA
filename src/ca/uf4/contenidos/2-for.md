# 2. Bucle for

El bucle for es codifica de la següent forma:

<div style="display: flex; gap: 50px">

<div style="flex: 1; padding: 10px; text-align: justify;">

  ::: tabs
  == Java

```java
for(inicialització;condició;increment){
    //bloc d'instruccions
}
```

  :::

</div>

  ![Bucle for](/img/uf4/bucle_for.jpg)

</div>

La clàusula **inicialització** és una instrucció que s'executa una sola vegada a l'inici del bucle, normalment per a inicialitzar un comptador. Per exemple **int i = 1;**

La clàusula **condició** és una expressió lògica que s'avalua a l'inici de cada iteració del bucle. En el moment en què aquesta expressió s'avalue a false es deixarà d'executar el bucle i el control del programa passarà a la següent instrucció (a continuació del bucle for). S'utilitza per a indicar la condició en la qual vols que el bucle continue. Per exemple **i <= 10;**

La clàusula **increment** és una instrucció que s'executa al final de cada iteració del bucle (després del bloc d'instruccions). Generalment s'utilitza per a incrementar o decrementar el comptador. Per exemple i++; (incrementar i en 1).

>***Exemple 1***:  
>Bucle que mostra per pantalla els nombres naturals de l'1 al 10:
>::: tabs
>
>== Java
>
>```java
>for (int i = 1; i <= 10 ; i++) {  
>   System.out.println(i);
>}
>```
>
>:::
>
>- En la inicialització utilitzem **int i=1** per a crear la variable i amb un valor inicial de 1.
>- La condició **i<=10** indica que el bucle ha de repetir-se mentre i siga menor o igual a 10.
>- L'actualització **i++** indica que, al final de cada iteració, i ha d'incrementar-se en 1.

>***Exemple 2***:  
>Programa que mostra els nombres naturals (1,2,3,4,5,6,...) fins a un número introduït per teclat:
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
>   int max;
>   System.out.print("Introdueix el número màxim: ");
>   max = sc.nextInt();
>   for (int i=1; i<=max; i++)
>       System.out.println("Número: " + i);
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
