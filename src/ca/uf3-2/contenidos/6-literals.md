# 6. Literals

A l'hora de tractar amb valors dels tipus de dades simples (i de tipus cadenes de caràcters) s'utilitza el que es denomina "literals". Els literals són elements que serveixen per a representar un valor en el codi font del programa. En la majoria de llenguatges de programació existeixen literals per als següents tipus de dades:

- Lògics (boolean)
- Caràcter (char)
- Enters (sencers de diferents mides)
- Reals (decimals de precisió simple i doble)
- Cadenes de caràcters (strings)

## 6.1. Literals lògics

Són únicament dos, les paraules reservades true i false.

::: tabs
== Java

```java
boolean activat = false;
```

:::

## 6.2. Literals enters

Els literals de tipus enters (nombres enters) poden expressar-se en decimal (base 10), octal (base 8) o hexadecimal (base 16). A més, en molts llenguatges pot afegir-se al final del mateix una lletra per a indicar que l'enter és considerat com a enter llarg (de major mida).

Els compiladors identifiquen un enter decimal (base 10) en trobar un número el primer dígit del qual és qualsevol símbol decimal excepte el zero (de l'1 al 9). A continuació poden aparéixer dígits del 0 al 9.

La lletra per a indicar enters llargs pot aplicar-se a qualsevol sistema de numeració i indica que el nombre decimal siga tractat com un enter llarg (de major mida). Aquesta lletra pot ser majúscula o minúscula, encara que és aconsellable utilitzar la majúscula ja que en cas contrari pot confondre's amb el dígit un (1) en els llistats.

::: tabs
== Java

```java
long max1 = 9223372036854775807L; //aquest és el valor màxim per a un enter llarg
```

:::

## 6.3. Literals reals

Els literals de tipus real serveixen per a indicar valors decimals de precisió simple o doble. A diferència dels literals de tipus sencer, **no poden expressar-se en octal o hexadecimal**.

Existeixen dos formats de representació: mitjançant la seua part sencera, el punt decimal ( . ) i la part fraccionària; o mitjançant notació exponencial o científica:

```
3.1415
0.31415e1
.31415e1 0.031415E+2
.031415e2 314.15e-2
31415E-4
```

Igual que els literals que representen sencers, es pot posar una lletra com a sufix per indicar el tipus específic de decimal:

::: tabs
== Java

```java
3.1415F  // float
.031415d // double
```

:::

## 6.4. Literals caràcter

Els literals de tipus caràcter es representen sempre entre cometes simples. Entre les cometes simples pot aparéixer:

- Un **símbol** (lletra) sempre que el caràcter estiga associat a un codi de caràcter vàlid. Exemples: 'a' , 'B' , '{' , 'ñ' , 'á' .
- Una "**seqüència de fuita**". Les seqüències de fuita són combinacions del símbol contrabarra \ seguit d'una lletra, i serveixen per a representar caràcters que no tenen una equivalència en forma de símbol. Les possibles seqüències de fuita més comunes són:

```
\n // Nova Línia
\t // Tabulador
\r // Reculada de Carro
\f // Començament de Pàgina
\b // Esborrat a l'Esquerra
\\ // El caràcter barra inversa ( \ )
\' // El caràcter preval simple ( ' )
\" // El caràcter preval doble o bi-prima ( " )
```

Per exemple:

- Per a imprimir una diagonal inversa s'utilitza: \\
- Per a imprimir cometes dobles en una cadena s'utilitza: \"

## 6.5. Literals cadenes de caràcters

Les cadenes de caràcters són seqüències de caràcters que es representen mitjançant literals específics per a aquest propòsit.

Un literal de tipus cadena va tancat entre cometes dobles ( " ) i ha d'estar inclòs completament en una sola línia del programa font (no pot dividir-se en diverses línies).

Entre les cometes dobles pot incloure's qualsevol caràcter vàlid del sistema de codificació utilitzat, a més de les seqüències de fuita vistes anteriorment en els literals de tipus caràcter.

Així, per exemple, per a incloure un canvi de línia dins d'un literal de tipus cadena haurà de fer-se mitjançant la seqüència de fuita \n:

::: tabs
== Java

```java
System.out.println("Primera línia\nSegona línia del string\n"); 
System.out.println("Hola");
```

:::

La visualització de la cadena anterior produiria la següent eixida per pantalla:

::: tabs
== Java

```text
Primera línia
Segona línia del string

Hola
```

:::

La manera d'incloure els caràcters 'cometes dobles' `"` i 'contrabarra' `\` és mitjançant el seu codi precedit de `\`.

Si la cadena és massa llarga i ha de dividir-se en diverses línies en el fitxer font, pot utilitzar-se l'operador de concatenació de cadenes `+` de la següent forma:

```text
"Aquesta cadena és massa llarga per a estar en una línia del"
+ "fitxer font i s'ha dividit en dues."
```