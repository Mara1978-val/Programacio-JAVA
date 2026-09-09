# 4. Matrius (vectors multidimensionals)

Els vectors poden tindre més d'una dimensió. Els més utilitzats són els vectors de 2 dimensions, coneguts com a matrius.

Les matrius es defineixen de la següent forma:

::: tabs
== Java
`tipus identificador[][];`  
`tipus[][] identificador;`

Ambdues declaracions són equivalents.
:::

Per exemple, declarem i instanciem un vector de 3 x 3 (3 files x 3 columnes).

![Matriu](/img/uf5-1/Matriu.jpg)

::: tabs
== Java
`double preus[][] = new int[3][3];`
:::

Accedim als seus valors utilitzant dobles claudàtors.

::: tabs
== Java

```java
preus[0][0] = 7.5;
preus[0][1] = 12;
preus[0][2] = 0.99;
preus[1][0] = 4.75;
// etc.
```

:::

Vegem un altre exemple en el qual declarem i instanciem un vector de 3 files x 6 columnes per emmagatzemar les notes de 3 alumnes (la fila correspon a un alumne, i cada columna a les notes d'aquest alumne):

::: tabs
== Java

```java
int notes[][] = new int[3][6]; // És equivalent a 3 vectors de grandària 6
```

:::

Suposant que les notes ja estan emmagatzemades, recorrerem la matriu (vector bidimensional) per a mostrar les notes per pantalla. Cal tindre en compte que com té dues dimensions necessitarem bucle niat (un per a les files i un altre per a les columnes de cada fila):

::: tabs
== Java

```java
// Per a cada fila (alumne)
for (int i = 0; i < notes.length; i++) {
  System.out.print("Notes de l'alumne" + i + ": ");
  // Per a cada columna (nota)
  for (int j = 0; j < notes[i].length; j++) 
    System.out.print(notes[i][j] + " ");
}
```

:::
