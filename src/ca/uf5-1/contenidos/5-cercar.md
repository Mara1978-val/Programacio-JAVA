# 5. Cercar amb vectors

Existeixen dues maneres de buscar un element dins d'un vector: la cerca seqüencial i la cerca dicotòmica o binària.

## 5.1. Cerca seqüencial

La cerca seqüencial és la més fàcil de les dues, ja que consisteix a comparar els elements del vector amb l'element a buscar.

Un exemple és el següent, on es retorna la posició de l'element en el vector i, si no el troba, retorna el valor -1:

::: tabs
== Java

```java
public static int busquedaSequencial(int[] v, int element){
  int i, posicio = -1;
  for(i = 0; i < v.length && posicio == -1; i++)
    if(v[i] == element)
      posicion = i;
  
  return posicio;
}
```

:::

## 5.2. Cerca dicotòmica o binària

En aquest cas el vector ha d'estar ordenat. Es dividirà en dos per a buscar l'element en una part del vector o en una altra i així successivament fins a trobar, o no, l'element.

Un exemple és el següent:

::: tabs
== Java

```java
public static int cercaDicotomica(int[] vector, int element)
{
    int esquerra = 0; // L'índex 'esquerra' s'estableix en la posició 0
    int dreta = vector.length - 1; // L'índex 'dreta' s'estableix en l'última posició
    int centre = (esquerra + dreta) / 2; // L'índex 'centre' s'estableix en la posició central
    int posicio;

    while (esquerra <= dreta && vector[centre] != element)
    {
        if (element < vector[centre])
            dreta = centre - 1; // Si l'element és menor que el centre, canviem l'índex 'dreta'
        else
            esquerra = centre + 1; // Si no, canviem l'índex 'esquerra'

        centre = (esquerra + dreta) / 2; // Actualitzem el centre
    }

    if (esquerra > dreta)
        posicio = -1; // Element no trobat
    else
        posicio = centre; // Element trobat en la posició 'centre'

    return posicio;
}
```

:::

<!-- ![Exemples de búsqueda dicotòmica](/img/uf5-1/busquedaDicotomica.jpg) -->

En aquest cas, igual que en l'anterior, la funció retorna la posició de l'element o -1 si no el troba. És important veure que el vector ha d'estar ordenat per a quedar-nos amb la part des de l'esquerra al centre del vector o des del centre del vector a la dreta, depenent si l'element a buscar és major o menor a l'element del centre del vector.

Aquesta cerca és més òptima que la seqüencial ja que no ha de recórrer el vector sencer.
