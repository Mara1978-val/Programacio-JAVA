# Organització en Paquets o Espais de Noms

## Concepte de Paquet

En la programació moderna, les classes i funcionalitats no es troben totes juntes de manera desordenada, sinó que estan organitzades en **paquets** (també anomenats **espais de noms** o **mòduls** segons el llenguatge). Els paquets són una manera d'agrupar i organitzar les classes relacionades entre si.

Els paquets ofereixen diversos avantatges:

- **Organització**: Faciliten la localització de classes específiques
- **Evitar conflictes**: Permeten tenir classes amb el mateix nom en paquets diferents
- **Control d'accés**: Poden definir quines classes són accessibles des de l'exterior
- **Modularitat**: Faciliten la reutilització de codi en diferents projectes

## Jerarquia de Paquets

Els paquets segueixen una estructura jeràrquica similar a les carpetes d'un sistema d'arxius. Uns paquets poden contenir altres paquets, creant una organització en arbre que facilita la navegació i comprensió del codi.

Per exemple, en una jerarquia típica podríem trobar:
- Un paquet principal per a operacions matemàtiques
- Subpaquets específics per a geometria, estadística, càlcul, etc.
- Dins de cada subpaquet, les classes corresponents

## Paquets per Defecte

La majoria de llenguatges tenen un **paquet per defecte** que conté les funcionalitats més bàsiques i utilitzades. Aquest paquet especial està sempre disponible sense necessitat de fer cap importació explícita, ja que les seues classes es carreguen automàticament quan s'inicia el programa.

## Importació de Paquets

Per utilitzar classes que no pertanyen al paquet per defecte, cal **importar** explícitament el paquet corresponent al començament del programa. Aquesta importació indica al compilador o intèrpret on trobar les classes que necessitem utilitzar.

Sense la importació adequada, el programa no podrà localitzar les classes necessàries i es produirà un error de compilació o execució.

::: tabs
== Java

A Java, les classes sempre estan contingudes en un paquet. Cada paquet conté un conjunt de classes relacionades entre si, proporcionant una manera d'organització i estructura al codi.

Els paquets tenen una jerarquia similar a les carpetes d'un ordinador. Un exemple de jerarquia seria:

- **java.lang** (paquet principal)
- **java.lang.annotation** (subpaquet)
- **java.lang.instrument** (subpaquet)
- **java.lang.invoke** (subpaquet)
- **java.lang.management** (subpaquet)

El paquet **java.lang** és el paquet per defecte de Java. Totes les classes d'aquest paquet (com String, Math, System, etc.) es poden utilitzar directament sense necessitat d'importació explícita.

Per utilitzar classes d'altres paquets, cal importar-los al començament del programa:

```java
import java.util.Scanner;  // Importa una classe específica
import java.util.*;        // Importa totes les classes del paquet
```

Si no s'importa el paquet necessari, apareixerà un error de compilació indicant que la classe no es pot trobar.

:::

## Documentació de Paquets

La documentació oficial dels llenguatges sol organitzar la informació per paquets, mostrant:
- La jerarquia completa de paquets
- Les classes disponibles en cada paquet
- Els mètodes i funcionalitats de cada classe
- Exemples d'ús i paràmetres necessaris

Aquesta documentació és fonamental per conèixer les funcionalitats disponibles i aprendre a utilitzar-les correctament.