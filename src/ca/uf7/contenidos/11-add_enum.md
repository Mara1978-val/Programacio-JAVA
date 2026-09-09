# Tipus enumerat

Un tipus enumerat és una construcció que permet definir un conjunt tancat de valors constants i relacionats. S'utilitza per representar dades fixes que no canvien, com ara elements predefinits que es repeteixen en contextos concrets (per exemple, dies de la setmana, estats d'un procés, punts cardinals, etc.).

Aquest tipus especial ofereix diversos avantatges:

- **Claredat**: El programador sap exactament quins valors són vàlids, evitant l'ús arbitrari de literals dispersos (cadenes o números) que puguen ocasionar errors.
- **Seguretat** de tipus: Els valors possibles queden limitats al conjunt definit, de manera que no es poden assignar o comparar valors no previstos.
- **Llegibilitat**: El codi resulta més fàcil de llegir, ja que els valors enumerats es tracten com a identificadors descriptius en lloc d'utilitzar literals inespecífics.

Exemple d'aplicació:

::: tabs
== Java

```java
public enum Dia {
    DILLUNS, DIMARTS, DIMECRES, DIJOUS, DIVENDRES, DISSABTE, DIUMENGE
}
```

:::

En aquest exemple, **Dia** és un tipus enumerat que conté set constants que representen els dies de la setmana.

Els tipus enumerats limiten els valors possibles, evitant errors com passar una cadena o un número invàlid en lloc d'un valor esperat.
