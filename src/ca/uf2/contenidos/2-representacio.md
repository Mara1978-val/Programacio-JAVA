# 2. Representació d'Algoritmes

És necessari poder representar les instruccions o els passos d'un algoritme d'una manera ordenada que es puguen entendre.

A primera vista es pot pensar que es podrien descriure els passos
usant el llenguatge natural. Però el problema és que el llenguatge natural
pot resultar imprecís i ambigu.

Per aquest motiu existeixen altres mètodes de representar algoritmes, començant pel pseudocodi, que ens permet expressar la lògica d'un programa en un llenguatge proper al natural.

També és possible tindre una representació més visual, utilitzant metodologies com els diagrames de flux, que facilita la comprensió i comunicació dels algoritmes ja que es pot veure com les accions es comuniquen entre elles i el flux de l'Algoritme.

## 2.1 Pseudocodi

El Pseudocodi és una tècnica que permet substituir les instruccions d'un programa per frases que descriguen què ha de fer-se en llenguatge natural.

**Característiques del pseudocodi**

- Utilitza paraules i frases en lloc d'instruccions de codi.
- Permet descriure de manera clara i concisa els passos a seguir.
- No està subjecte a les regles sintàctiques d'un llenguatge de programació específic.
- Facilita la comprensió i comunicació dels algoritmes.

> ***Exemple:***
>
> En el següent exemple es poden veure dos algoritmes que indiquen si un nombre és parell o imparell. Ambdós realitzen la mateixa tasca, però l'algoritme B és més eficient que l'algoritme A. Això es deu al fet que l'algoritme B tarda un temps constant, mentre que l'algoritme A tardarà més com més gran siga el valor de "n".
>
>:::tabs
>
>==Algoritme A
> ```
> INICI
>   1. Escriure "Introdueix valor per a n".
>   2. Llegir n.  
>   3. Si n = 2 escriure "És parell"
>   4. Si no, si n = 1 escriure "És imparell"
>   5. Si no, n = n - 2 i tornem al pas 3.
> FI
> ```
>
>==Algoritme B
>
> ```
> INICI
>   1. Escriure "Introdueix valor per a n".
>   2. Llegir n.  
>   3. M ← n % 2
>   4. Si M = 0, escriure "És parell"
>   5. Si no, escriure "És imparell"
> FI
> ```
>
>:::
>
> En crear un algoritme, no sols és important que realitze la seua tasca, sinó que també siga eficient i consuma la menor quantitat de recursos possible.

## 2.2 Diagrama de flux

El diagrama de flux és una tècnica que representa els elements dels algoritmes utilitzant símbols connectats entre ells.

Els símbols bàsics que equivalen als elements d'un algoritme són els següents:

- **Les línies** connecten els símbols per a indicar la seqüència de les accions en l'algoritme.
- **Els rectangles** representen les accions.
- **Els paral·lelograms** representen les operacions d'entrada/eixida.
- **Els rombes** representen les decisions i repeticions.

### 2.2.1 Importància dels diagrames de flux

- **Visualització clara**: Permeten entendre ràpidament la lògica d'un Algoritme.
- **Comunicació efectiva**: Faciliten l'explicació de processos a altres programadors o stakeholders.
- **Planificació**: Ajuden a identificar possibles problemes o ineficiències abans de començar a codificar.
- **Documentació**: Serveixen com a referència visual per al manteniment i millora del codi.


> ***Exemple: Diagrama de flux de l'algoritme A***
>
> En el següent exemple es pot veure l'algoritme A representat amb un diagrama de flux.
> ![Imatge de diagrama de flux de l'algoritme A](/img/uf2/2.2.png)

::: tip Conceptes clau per recordar
- **Pseudocodi**: Representació d'algoritmes en llenguatge natural.
- **Diagrama de flux**: Representació gràfica d'algoritmes amb símbols.
- **Símbols bàsics**: Línies, rectangles, paral·lelograms i rombes.
:::
