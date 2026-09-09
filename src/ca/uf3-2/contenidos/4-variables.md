# 4. Declaració de variables

A continuació, es mostren diverses formes de declarar i inicialitzar variables:

::: tabs
== Java

La forma bàsica de declarar (crear) una variable és la següent:

```java
tipus identificador;
```

Per exemple, creem una variable de tipus int anomenada edat:

```java
int edat;
```

:::

Les variables poden ser inicialitzades en el moment de la seua declaració, és a dir, se'ls pot donar un valor inicial en crear-les. Per exemple, creem una variable de tipus enter anomenada edat i li assignem 25 com a valor inicial:

::: tabs
== Java

```java
int edat = 25;
```

Això és equivalent a primer declarar-la i després assignar-li el valor:

```java
int edat; 
edat = 25;
```

:::

També és possible declarar diverses variables en una sola línia. Per exemple, creem tres variables de tipus real anomenades preu1, preu2 i preu3:

::: tabs
== Java

```java
float preu1, preu2, preu3;
```

Això és equivalent a:

```java
float preu1; 
float preu2; 
float preu3;
```

:::

Al seu torn, també poden inicialitzar-se. Per exemple:

::: tabs
== Java

```java
float preu1 = 7.0, preu2 = 7.25, preu3 = 0.5;
```

Això és equivalent a:

```java
float preu1 = 7.0; 
float preu2 = 7.25; 
float preu3 = 0.5;
```

:::

En resum la declaració de variables segueix el següent patró:

::: tabs
== Java

| **tipus identificador** [ = valor][,identificador [= valor] ...]; |
|-------------------------------------------------------------------|

:::

És a dir, és **obligatori indicar el tipus i l'identificador** (a més d'acabar en punt i coma com totes les instruccions). Opcionalment es pot inicialitzar i/o es poden declarar més variables.

::: tip **IMPORTANT!**

Si una variable no ha sigut inicialitzada, alguns llenguatges li assignen un valor per defecte automàticament.

:::

Aquest valor sol ser:

- Per a les variables de tipus numèric, el valor per defecte és zero (0).
- Les variables de tipus caràcter, un valor neutre.
- Les variables de tipus booleà, el valor false.
- Per a les variables de tipus referencial (objectes), un valor nul.

És una bona pràctica inicialitzar sempre totes les variables.

## 4.1. Paraules clau i reservades

Els llenguatges de programació tenen paraules clau que no es poden utilitzar com a identificadors ja que les utilitzen per a altres funcions del llenguatge. Aquestes paraules varien segons el llenguatge específic.

::: tabs
== Java

![Paraules clau](/img/uf3-2/paraules_clau_java.jpg)

A més, el llenguatge es reserva unes quantes paraules més, però que fins ara no tenen una finalitat especificada:

![Paraules reservades](/img/uf3-2/paraules_reserv_java.jpg)

:::

## 4.2. Àmbit d'una variable

L'àmbit d'una variable és la porció del programa on aquesta variable pot utilitzar-se, i pot pertànyer a diferents categories:

1. Variable local.
2. Atribut o variable d'instància.
3. Paràmetre d'una funció o mètode.
4. Variable global (segons el llenguatge).

**Ara com ara utilitzarem només variables locals**, les altres categories les veurem en posteriors unitats.

### 4.2.1. Variables locals

Una **variable local** es declara dins del cos d'una funció o mètode i és **visible únicament dins d'aquesta funció**.

Es pot declarar en qualsevol lloc del cos, fins i tot després d'instruccions executables, encara que és un **bon costum declarar-les just al principi**.

També poden declarar-se variables dins d'un bloc delimitat. En aqueix cas, només seran "visibles" dins d'aquest bloc.

**Per exemple** (no és necessari entendre el que fa el programa):

::: tabs
== Java

```java
public static void main(String[] args){
  int i;
  for (i=0;i<10;i++)
    System.out.println(i);
}
```

:::

En aquest exemple existeix una variable local: int i; únicament pot utilitzar-se dins del bloc on es va crear.

## 4.3. Constants

En declarar una variable pot utilitzar-se una paraula reservada específica per a indicar que el valor de la variable no podrà modificar-se (és una constant).

::: tabs
== Java

Per exemple, creem variable constant tipus int anomenada x amb valor 18:

```java
final int x = 18;
```

Per exemple, creem variable constant tipus float anomenada pi amb valor 3.14:

```java
final float pi = 3.14;
```

Si posteriorment intentem modificar els seus valors es produirà un error:

```java
x = 20; // no permés, produeix error
pi = 7; // no permés, produeix error
```

:::

Per tant una variable precedida d'aquesta paraula reservada es converteix en una **constant**.