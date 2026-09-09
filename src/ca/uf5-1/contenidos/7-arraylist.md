# 7. La classe ArrayList (Java)

Els ArrayList són una classe de la llibreria de col·leccions de Java que implementen la interfície List. Permeten emmagatzemar elements dins d'una llista dinàmica on la mida pot augmentar i disminuir segons es vagin afegint o eliminant elements.

La principal diferència entre arrays i ArrayList en Java és:

- Arrays:
  - Tenen mida fixa que s'ha d'especificar en crear-los.
  - Emmagatzemen dades de tipus primitiu o objectes.
  - No es poden modificar dinàmicament, la mida no canvia.

- ArrayList:
  - Mida dinàmica, creix i decreix automàticament.
  - Només poden emmagatzemar objectes (no tipus primitius).
  - Es poden modificar, afegint o eliminant elements.

Taula amb la correspondencia entre tipus primitius i tipus objecte:

<div align="center">

| Tipus primitiu  |            Tipus Objecte         |
|:-----------------:|:----------------------------------:|
| `byte`          | `Byte`                           |
| `short`         | `Short`                          |
| `int`           | `Integer`                        |
| `long`          | `Long`                           |
| `float`         | `Float`                          |
| `double`        | `Double`                         |
| `char`          | `Character`                      |
| `boolean`       | `Boolean`                        |

</div>
Alguns detalls importants dels ArrayList:

- Es declaren especificant el tipus de dades dels elements que emmagatzemaran entre < >.  
  Per exemple: `ArrayList<String> llista = new ArrayList<>();`
- Permeten accedir a elements específics mitjançant un índex que comença en 0.
- Poden inserir, eliminar, buscar elements de manera eficient.
- L'accés i recorregut és molt ràpid, ja que estan basats en arrays redimensionables.
  
## Operacions bàsiques (aplicables a qualsevol llenguatge)

| Operació | Descripció | Equivalent en altres llenguatges |
|-----------|-------------|-----------------------------------|
| **add / append / insert** | Afig un element al final o en una posició concreta | `append()` / `add()` / `insert()` |
| **get / access / index** | Accedeix a un element pel seu índex | `lista[i]` / `get(i)` |
| **set / update** | Canvia el valor d’un element existent | `lista[i] = valor` / `set(i, valor)` |
| **remove / delete** | Lleva un element de la llista | `remove(i)` / `pop(i)` / `del lista[i]` |
| **size / length** | Retorna el nombre d’elements | `len()` / `size()` / `length` |


1. Declarar i inicialitzar un ArrayList:

::: tabs
== Java

```java
ArrayList<String> noms = new ArrayList<>();
```

:::

2. Afegir elements amb `add()`:

::: tabs
== Java

```java
noms.add("Pau");
noms.add("Marta");
```

:::

3. Accedir a un element per la posició:

::: tabs
== Java

```java
String primerNom = noms.get(0); // retorna "Pau"
```

:::

4. Recórrer la llista i imprimir els elements:

::: tabs
== Java

```java
for(String nom : noms) 
  System.out.println(nom); 
```

:::

5. Eliminar un element per la posició:

::: tabs
== Java

```java
noms.remove(0); // elimina "Pau"
```
<div style="
  border-left: 4px solid #ffcccb;
  background-color: #fff0f5;
  padding: 12px 16px;
  border-radius: 6px;
  margin: 1em 0;
  color: #b03060;">

⚠️ Per a <strong>eliminar</strong>  un element d'un array i que canvie el seu tamany cal:

- Crea un nou array amb una longitud 1 menor que l'original. 
- Copia tots els elements de l'array original excepte el que vols eliminar al nou array. 
- Assigna el nou array a l'array original.



⚠️  La <strong>diferència</strong> principal amb un ArrayList és:

- En un ArrayList si eliminem un element, la mida es redueix automàticament.
- En canvi en un Array, encara que eliminem un element, la mida total continua sent la mateixa.
- Hem de desplaçar manualment els elements per "emplenar" la posició eliminada.
- L'Array sempre ocupa el mateix espai en memòria, encara que estigui parcialment buit.

</div>

:::

6. Ordenar la llista:

::: tabs
== Java

```java
Collections.sort(noms); //ordena alfabèticament
```

:::

7. Traure posició de element en la llista:

::: tabs
== Java

```java
noms.indexOf("Marta"); //retorna la posició
```

:::

8. Saber si està el element:

::: tabs
== Java

```java
noms.contains("Marta"); //retorna true si troba el String
```

:::

9. Grandària de la llista:

::: tabs
== Java

```java
noms.size(); // retorna el número d'elements de la llista
```

:::



