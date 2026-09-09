# La classe Arrays (Java)

En el paquet `java.utils` es troba una classe estàtica anomenada **Arrays**. Aquesta classe estàtica permet ser utilitzada com si fora un objecte (com ocorre amb Math). Aquesta classe posseeix **mètodes** molt interessants per a utilitzar sobre arrays.

El seu ús és:

`Arrays.mètode(arguments);`

Alguns mètodes són:

- **fill**: permet emplenar tot un array unidimensional amb un determinat valor. Els seus arguments són el array a emplenar i el valor desitjat:

Per exemple , omplir un array de 23 elements sencers amb el valor -1.

::: tabs
== Java

```java
int valors[] = new int[23];
Arrays.fill(valors,-1); // Emmagatzema -1 en tot el array ‘valors'
```

:::

També permet decidir des que índex fins a quin índex emplenem:

::: tabs
== Java

```java
Arrays.fill(valors,5,8,-1); // Emmagatzema -1 des del 5é a la 7é element
```

:::

- **equals** : Compara dos arrays i retorna true si són iguals(false en cas contrari). Es consideren iguals si són del mateix tipus, grandària i contenen els mateixos valors.

::: tabs
== Java

```java
Arrays.equals(valorsA, valorsB); // retorna true si els arrays són iguals
```

:::

- **sort** : Permet ordenar un array en ordre ascendent. Es poden ordenar només una sèrie d'elements des d'un determinat punt fins a un determinat punt.

::: tabs
== Java

```java
int x[]={4,5,2,3,7,8,2,3,9,5};
Arrays.sort(x); // Ordena x de menor a major
Arrays.sort(x,2,5); // Ordena x només des de 2n al 4t element
```

:::

- **binarySearch** : Permet buscar un element de manera ultraràpida en un array ordenat. Retorna l'índex en el qual està col·locat l'element buscat.

Exemple:

::: tabs
== Java

```java
int x[]={1,2,3,4,5,6,7,8,9,10,11,12};
Arrays.sort(x);
System.out.println(Arrays.binarySearch(x,8)); //Ens tornaria 7
```

:::
