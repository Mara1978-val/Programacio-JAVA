# Exercicis

## Exercicis - Nivell bàsic

### Exercici 1

a) Escriu una funció que retorne la suma dels valors d'un vector d'enters.  
b) Escriu una funció que retorne la mitjana dels valors d'un vector d'enters.  
c) Escriu una funció que retorne el valor màxim d'un vector d'enters.  
d) Escriu un programa que cree un vector amb N valors enters (generats de forma aleatòria) i mostre la suma, la mitjana i el màxim.  

### Exercici 2

a) Escriu una funció que retorne quantes vocals conté una cadena de text.  
b) Escriu una funció que retorne quants espais conté una cadena de text.  
c) Escriu una funció que retorne quantes consonants conté una cadena de text.  
d) Escriu un programa que llig una frase per teclat i mostre el nombre de vocals, el nombre d'espais i el nombre consonants.  

### Exercici 3

a) Escriu una funció que rebrà una cadena i retornarà la contrària (inversa).  
b) Escriu una funció que rebrà dos cadenes i retornarà `true` o `false` en funció de si són iguals o no.  
c) Escriu un programa que demana per teclat una paraula i mostre si és palíndrom usant les funcions anteriors.  

## Exercicis - Nivell mitjà

### Exercici 4

a) Escriu una funció que mostre un menú amb les opcions: sumar, restar, multiplicar, dividir i acabar el programa.  
b) Escriu una funció que retorne la suma de dos nombres rebuts per paràmetres.  
c) Escriu una funció que retorne la resta de dos nombres rebuts per paràmetres.  
d) Escriu una funció que retorne la multiplicació de dos nombres rebuts per paràmetres.  
e) Escriu una funció que retorne la divisió de dos nombres rebuts per paràmetres (tenint en compte la divisió per zero).  
f) Escriu un programa que demane dos nombres, mostre el menú i permeta triar una opció. Ho farà fins que l'usuari seleccione l'opció d'eixir del programa.  

### Exercici 5

Dissenya un sistema que permeta afegir un estudiant, marcar la seva assistència i mostrar l'estat d'assistència de tots els estudiants. Quan l'usuari vulga afegir un estudiant, el programa demanarà el nom i l'incorporarà a la llista de persones matriculades només si no hi és ja, assignant-li automàticament l'estat de no assistit; si el nom ja existeix, no fa cap canvi. Quan l'usuari tria marcar assistència, el sistema demana el nom de l'estudiant i, si el troba a la llista, canvia el seu estat al de assistit, i si no existeix, informa que no es pot marcar l'assistència d'un estudiant desconegut. Quan l'usuari demana veure els assistents, el programa mostrarà tots els noms i si han assistit o no. Finalment, l'usuari podrà finalitzar quan vulga l'execució del programa.

<!--
a) Escriu una funció que mostre un menú amb les opcions: afegir nom, marcar assistència, mostrar assistents i eixir del programa.  
b) Escriu una funció per afegir un nom, demanat per teclat, a la llista d'estudiants (si no està ja). Marcarà l'assistència com a `false`.  
c) Escriu una funció que demane un nom i marque l'assistència com a `true` si ja està a la llista. Mostrarà un missatge en cas de no estar a la llista.  
d) Escriu una funció que mostre tots els estudiants, junt amb la seua assistència.  
e) Escriu un programa que utilitze les funcions anteriors per gestionar l'assistència d'una classe.  
-->
### Exercici 6

Un sistema de gestió acadèmica permet registrar alumnes amb el seu nom i les notes de les cinc assignatures. A partir d'aquest registre, qualsevol vegada que l'usuari ho sol·licite, el programa mostrarà el llistat d'alumnes amb mitjana de notes superior a 9. També ofereix la possibilitat de determinar quin alumne presenta la variabilitat de notes més gran, és a dir, amb major diferència entre la seva nota més alta i la més baixa.

<!--
Una escola ha de gestionar les notes d'un grup d'alumnes en diverses assignatures. Vol automatitzar el càlcul de mitjanes i detecció d'alumnes destacats.

a) Implementa una funció que rep un vector i retorna la mitjana dels seus valors.
b) Implementa una funció que permeta afegir alumnes a una estructura clau-valor, on la clau serà el nom d'un alumne i el valor serà un vector de tamany 5 per a les notes. Per simplicitat, les notes poden ser generades de forma aleatòria.  
c) Implementa una funció que, donat el llistat d'alumnes, retorne un llistat dels noms dels alumnes amb nota superior a 9.  
d) Implementa una funció que, donat un vector numèric qualsevol, retorne la màxima diferència entre el seu valor màxim i mínim.  

```plaintext
Per exemple, donat [3, 1, 8] retornarà la distància màxima: 8 - 1 = 7. Retornarà 7.
```

e) Afig una funció que retorne el nom de l'alumne amb més variabilitat de notes (diferència entre màxima i mínima).  
f) Escriu una funció que mostre les distintes opcions que tindrà el programa (no tots els mètodes implementats anteriorment seran opcions).  
g) Escriu un programa que integre totes les funcions anteriors.
-->

## Exercicis - Recursivitat

### Exercici R1

Una empresa d'anàlisi de dades vol saber quàntes vegades es repeteix un codi específic dins d’un informe numèric.
Per a això, desitja implementar una funció que recórrega una llista de codis i compte quantes vegades apareix un valor concret.

Dissenya una **funció recursiva** anomenada `contarCodi` que reba:

- un array d’enters,

- un índex inicial,

- i un valor a buscar,

i **retorne quantes vegades apareix eixe valor en l’array.**


> exemple: 
> contarCodi([3, 1, 3, 4, 3], 0, 3) → 3


### Exercici R2

Una universitat està dissenyant un xicotet sistema per a detectar si un treball ha sigut generat amb Intel·ligència Artificial.

El sistema funciona així: s’introdueix el text de l’alumne en el programa i s’elegeix una paraula “trampa” inclosa intencionadament en l’enunciat.
Si el text conté més de 5 vegades eixa paraula trampa, el treball es considera sospitós d’haver sigut generat amb IA.

Per a començar, l’equip necessita implementar una funció recursiva que compte quantes vegades apareix eixa paraula en el text.

1) Agafa el text i divideix-lo en un array de paraules.

2) Dissenya una funció recursiva anomenada `contarParaula`, que reba:

- un array de String amb totes les paraules del text,

- un índex inicial,

- i una paraula a buscar,

i **retorne quantes vegades apareix eixa paraula en l’array.**

> exemple: contarParaula(["este","és","un","text","trampa","molt","trampa","perquè","trampa","conté","trampa","diverses","trampa","vegades"], 0, "trampa")
→ 6
>
>*En este cas, el sistema marcaria el text com a sospitós.*


### Exercici R3
Una empresa de ciberseguretat està desenvolupant una eina per a emmascarar missatges abans d’emmagatzemar-los en una base de dades.
Com a part del sistema, necessiten invertir el text original per a dificultar la seua lectura directa.

Implementa una funció recursiva que reba una cadena de text i retorne la mateixa cadena, però invertida.

> invertir("hola") → "aloh"
>
> invertir("seguretat") → "dadiruges"
>


### Exercici R4

En una empresa de seguretat informàtica s’està estudiant la qualitat de les contrasenyes utilitzades pels treballadors.
Per a això, es necessita desenvolupar una sèrie de funcions que analitzen diferents aspectes d’una contrasenya.

Un dels primers requisits és crear una funció capaç d’analitzar, mitjançant **recursivitat**, si la contrasenya conté caràcters especials.

Considerarem **caràcter especial** qualsevol caràcter que NO siga:

- una lletra minúscula,

- una lletra majúscula

- o un dígit numèric.

És a dir, es comptaran com a caràcters especials, per exemple:

>! , . ; : ? + - _ @ # $ % & / ( ) [ ] { } * etc.

La funció haurà de:

- rebre la contrasenya (un String),

- analitzar cada caràcter,

- i retornar si conté o no caràcters especials.
<!--
Estàs desenvolupant un gestor de salut per a mascotes. Cada animal té una fitxa on s'indica, any rere any, les revisions mèdiques anuals. Cada fitxa, per tant, es composa de dos valors: l'edat de l'animal (anirà des de 0 fins a l'actual) i un enter que indica la quantitat de revisions que es va fer amb eixa edat.

a) Implementa una funcionalitat que, a partir d'una llista de revisions de l'animal, permeta comptar quantes revisions se li han realitzat en total. Cal recórrer la llista de forma recursiva i retornar la suma dels valors.  
b) Ara es vol saber si l'animal va tindre alguna edat on va rebre més d'una revisió. Implementa una funcionalitat que, a partir d'eixa mateixa llista, recórrega recursivament les revisions i retorne un llistat amb totes les edats en què es feren més d'una revisió.  
c) Determina l'edat en què l'animal va tindre més revisions. En cas d'empat, pots tornar la menor edat. El càlcul s'ha de fer de forma recursiva, comparant les revisions entre posicions.  
d) Comprova si existeix alguna edat en què no es va fer cap revisió. Has de retornar un booleà (`true` si n'hi ha almenys una, `false` en cas contrari), fent el recorregut recursivament.  
e) Genera una cadena de text que mostre totes les edats i el nombre de revisions fetes en cadascuna, separades per comes. El format seria per exemple: `"Edat 0: 1 revisió, Edat 1: 0 revisions, Edat 2: 2 revisions"`. El format ha de mantindre l'ordre original i generar-se de forma recursiva.  

### Exercici R2

Estàs fent una aplicació per a comprovar si una contrasenya conté algun caràcter repetit. Les contrasenyes són cadenes de lletres i números (sense símbols ni espais).

a) Fes una funció que, a partir d'una cadena de caràcters, torne una nova cadena on cada lletra només aparega una vegada (eliminant duplicats), mantenint l'ordre original. Fes-ho de manera recursiva.  
b) Fes una altra funció que, a partir d'una contrasenya, retorne un llistat amb les lletres repetides.  
c) Implementa una funció que comprove, de manera recursiva, si la contrasenya conté dos caràcters consecutius iguals. Per exemple, en "aabb1c" trobaria "aa" i retornaria `true`. Si no n'hi ha cap repetició consecutiva, ha de retornar `false`.  
d) Fes una funció recursiva que compte quants dígits conté la contrasenya. Per exemple, "c0ntr4senya12" conté 4 dígits (0, 4, 1, 2) i hauria de retornar 4.  
e) Implementa una funció recursiva que torne una versió encriptada de la contrasenya invertint l'ordre dels caràcters. És a dir, donada "abc123" retornaria "321cba".  

### Exercici R3

Una empresa té una estructura organitzativa on cada empleat pot tindre subordinats, i estos subordinats poden tindre al seu torn més persones al seu càrrec.

Cal crear un sistema que permeta calcular quantes persones estan sota la supervisió directa i indirecta d'un gerent específic. Per exemple, si Joan és gerent de Maria i Pere, i Maria supervisa Anna i Carles, aleshores Joan supervisa indirectament un total de 4 persones.

::: tip NOTA
L'estructura organitzativa dels empleats s'emmagatzema en una estructura clau-valor, on loa clau és el nom d'un empleat i el valor és el llistat d'empleats al seu càrrec.
:::

### Exercici R4

Estàs desenvolupant un explorador de fitxers per a una aplicació d'escriptori. Els usuaris poden navegar per carpetes que contenen fitxers i altres carpetes, les quals al seu torn poden contindre més fitxers i carpetes.

Implementa una funcionalitat que permeta buscar un fitxer específic pel nom en tot el sistema de carpetes. El programa ha de revisar la carpeta actual, després entrar en cada subcarpeta i buscar-hi, i així successivament fins a trobar el fitxer o determinar que no existeix.


### Exercici 

a) Escriu una funció que genere i retorne un nombre enter aleatori entre 1 i 100.  
b) Escriu una funció que demane a l'usuari que introduïsca un nombre i el compare amb el secret. Retornarà una cadena o altra en funció del resultat:  

- "és major que" si el nombre triat és més gran que el secret.
- "és menor que" si el nombre triat és més menut que el secret.
- "és" si l'usuari ha encertat.

c) Escriu un programa que utilitze les funcions anteriors per a jugar fins que s'encerte el nombre secret. S'anirà informant del resultat:

```plaintext
13 és menor que el número secret.
62 és major que el número secret.
26 és el número secret!
```
-->






<!--

## 1. Funcions

## 1.1. Funcions - Nivell A

::: warning ATENCIÓ
Cap funció mostrarà res per pantalla llevat que es diga el contrari.
:::

1. Escriu un programa que demane dos nombres reals per teclat i mostre per pantalla el resultat de multiplicar-los. Implementa i utilitza la funció:  

::: tabs
== Java

```java
// Retorna la multiplicació de dos números.
double multiplica(double a, double b) 
```

:::

2. Escriu un programa que demane l'edat per teclat i mostre per pantalla si eres major d'edat o no. Implementa i utilitza la funció:

::: tabs
== Java

```java
// Retorna vertader si a>=18, fals en cas contrari
boolean esMajorEdat(int a) 
```

:::

3. Escriu un programa que demane dos nombres enters per teclat i mostre per pantalla com és el mínim. Implementa i utilitza la funció:

::: tabs
== Java

```java
// Retorna el menor entre a i b
int minim(int a, int b) 
```

:::

4. Escriu un programa que demane un nombre enter per teclat i mostre per pantalla si és positiu, negatiu o zero. Implementa i utilitza la funció:

::: tabs
== Java

```java
// Retorna -1 si es negatiu, 0 si es sigual a 0 , 1 si es positiu
int dimeSigne(int a) 
```

:::

5. Escriu un programa que demane un valor sencer en milles i mostre el seu equivalent en quilòmetres. Recorda que una milla són 1,60934 quilòmetres. Implementa i utilitza la funció:

::: tabs
== Java

```java
// Retorna la conversió de milles a quilòmetres
double milles_a_quilometres(int milles)
```

:::

6. Escriu un programa que demane cinc preus i mostre per pantalla el preu de venda de cadascun després d'aplicar-li un 21% d'IVA. Implementa i utilitza la funció:

::: tabs
== Java

```java
// Retorna el preu després de sumar-li un 21% d'IVA
double preuAmbIVA(double preu) 
```

:::

7. Escriu un programa que demane l'ample i alt d'un rectangle i mostre per pantalla la seua àrea i el seu perímetre. Implementa i utilitza les funcions:

::: tabs
== Java

```java
// Retorna el perímetre
double perimetreRectangul(double ample, double alt)

// Retorna l'àrea
double areaRectangul(double ample, double alt) 
```

:::

8. Escriu un programa que demane un valor N sencer i després mostre: el sumatori des d'1 a N, el productori d'1 a N i el valor intermedi entre 1 i N. Implementa i utilitza les funcions:

::: tabs
== Java

```java
// Retorna la suma d'enters d'1 a n
int suma1aN(int n) 

// Retorna el producte d'enters d'1 a n
int producte1aN(int n)

// Retorna el valor intermedi entre 1 i n
double intermedi1aN(int n) 
```

:::

## 1.2. Funcions - Nivell B

9. Realitza un programa que demane introduir tres valors sencers i ens diga quin d'ells és el més elevat. Implementa-ho creant únicament una funció a la qual li passem dos valors (no tres) i ens retorne el màxim dels dos valors.
10. Realitza un programa que llija una data introduint el dia, mes i any per separat i ens diga si la data és correcta o no. Suposarem que tots els mesos tenen 30 dies. S'ha de crear una funció on li passem les dades i retorne si és correcta o no.
11. Realitza un programa que escriga la taula de multiplicar d'un número introduït per teclat. Per a això implementa una funció que reba com a paràmetre un nombre enter i mostre per pantalla la taula de multiplicar d'aquest número.
12. Realitza un programa que donat un valor en quilòmetres ens el tradueix a milles. El programa ha de tindre una funció que reba com a paràmetre una quantitat en quilòmetres i ens la retorne en milles.
13. Realitza un programa que calcule el percentatge de descompte que ens han fet en comprar alguna cosa. S'ha de sol·licitar la quantitat sense descompte i la quantitat amb el descompte aplicat. S'ha de crear una funció a la qual li passem tots dos valors i ens retorne el descompte.
14. Escriu una funció que mostre per pantalla un triangle com el de l'exemple. Haurà de rebre dos paràmetres: el caràcter que es desitja imprimir i el nombre de línies del triangle.  

![Triangle a](/img/uf6/triangle_a.jpg)

15.  Escriu un programa que cree un vector de grandària 100 amb els primers 100 nombres naturals. Després mostra la suma total i la mitjana. Implementa una funció que calcule la suma d'un vector i una altra que calcule la mitjana d'un vector.
16.  Escriu un programa que cree un vector de la grandària indicada per teclat i després l'emplene amb valors aleatoris (utilitza Math.random()). Implementa la funció que emplena un vector amb valors aleatoris.

## 1.3. Funcions - Nivell C

17. Realitza un programa que ens demane número sencers fins que s'introduïsca el 0, dient-nos, per a cada número introduït si és cosí o no. Cal recordar que un número és cosí si és divisible per si mateix i per 1. L'1 no és cosí per conveni. S'ha de crear una funció que passant-li un nombre enter retorne si és cosí o no.
18. El NIF (o lletra associada a un DNI) s'obté de la següent manera: Es divideix el número de DNI entre 23 i la resta és codificada per una lletra segons la següent equivalència:  
0: "T", 1: "R", 2: "W", 3: "A", 4: "G", 5: "M", 6: "I", 7: "F", 8: "P", 9: "D", 10:"X", 11: "B", 12: "N", 13: "J", 14: "Z", 15: "S", 16: "Q", 17: "V", 18: "H", 19: "L", 20: "C", 21: "K", 22: "E .."  
Escriu un programa que demane el DNI i mostre per pantalla la lletra associada. Per a això s'haurà de crear una funció a la qual se li passe el número i retorne la lletra.

Exemple: per al DNI 56321122 el NIF és ‘X'.

19. Realitza un programa que permeta comprovar si una terna de valors sencers (3 valors) s'ajusta a l'equació de Pitàgores: x ² + i ² = z ². El programa sol·licita a l'usuari els valores x, i, z. S'haurà de crear una funció a la qual se li passe x, i, z i retorne si són iguals o no.

Per exemple: 3 ² + 4 ² = 5 ².

20. Escriu un programa que imprisca les taules de multiplicar de l'1 al 10. Implementa una funció que reba un nombre enter com a paràmetre i imprimisca la seua taula de multiplicar.
21. Escriu un programa que mostre un menú amb 2 opcions: "1.Circumferència" i "2.Àrea".  
En ambdues se li demanarà a l'usuari que introduïsca un radi i després se li mostrarà el càlcul oportú. Implementa les funcions:

::: tabs
== Java

```java
int menu() // Mostra el menú i retorna el número triat
double demanaRadi() // Demana que s'introduïsca el radi i el retorna
double circumferencia(double r) // Calcula la circumferència i la retorna
double area(double r) // Calcula l'àrea i la retorna
```

:::

Modifica el programa afegint una altra opció anomenada "Volum", permetent que l'usuari també puga sol·licitar el càlcul del volum. Afig la funció:

::: tabs
== Java

```java
double volum(double r) // Calcula el volum i el retorna
```

:::

Modifica el programa afegint una altra opció anomenada "Totes" en la qual es demane el radi una sola vegada i es mostren els tres càlculs possibles (circumferència, àrea i volum).

Modifica el programa anterior de manera que el procés es repetisca una vegada i una altra (mostrar menú &rarr; realitzar el càlcul &rarr; tornar a mostrar menú). Afig una opció més anomenada "Eixir" que acabarà el programa si és triada.

## 2. Recursivitat

## 2.1. Recursivitat - Nivell A

1. Crea un programa que determini si una frase introduïda per l'usuari és un palíndrom utilitzant la recursivitat. Per exemple, "Mulla la llum" és un palíndrom.
2. Desenvolupa un programa que utilitzi la recursivitat per calcular el MCD de dos nombres enters. Per exemple, el MCD de 15 i 25 és 5.
![Eixida exercici 2 recursivitat](/img/uf6/eixida_recur_2.jpg)

## 2.2. Recursivitat - Nivell B

3. Implementa un programa que utilitzi la recursivitat per generar totes les combinacions possibles de N elements. Per exemple, amb els elements [A, B, C], les combinacions serien [A, B], [A, C], [B, C], etc.
![Eixida exercici 2 recursivitat](/img/uf6/eixida_recur_3.jpg)

Así tens una descripció pas a pas de l'execució:  
**Primera crida (índex 0):**

1. Cas SENSE A
   - Recursió amb índex = 1, combinació = {}
2. Cas AMB A
   - Afegeix A a la combinació = {A}
   - Recursió amb índex = 1 i combinació = {A}

**Segona crida (índex 1):**

```
1. De la branca SENSE A
   - Cas SENSE B
     - Recursió amb índex = 2, combinació = {}
   - Cas AMB B
     - Afegeix B, combinació = {B}
     - Recursió amb índex = 2, combinació = {B}
   1. De la branca AMB A
   - Cas SENSE B
     - Recursió amb índex = 2, combinació = {A}
   - Cas AMB B
     - Afegeix B, combinació = {A, B}
     - Recursió amb índex = 2, combinació = {A, B}
```

**Tercera crida (índex 2):**

```
1. De la branca SENSE A → SENSE B
   - Imprimeix {}
   - Afegeix C → Imprimeix {C}
2. De la branca SENSE A → AMB B
   - Imprimeix {B}
   - Afegeix C → Imprimeix {B, C}
3. De la branca AMB A → SENSE B
   - Imprimeix {A}
   - Afegeix C → Imprimeix {A, C}
4. De la branca AMB A → AMB B
   - Imprimeix {A, B}
   - Afegeix C → Imprimeix {A, B, C}.
```

I així successivament ...

4. Implementa un programa que utilitzi la recursivitat per generar totes les permutacions d'un conjunt de N elements. Per exemple, amb els elements [A, B, C], les permutacions serien [A, B, C], [A, C, B], [B, A, C], etc.
![Eixida exercici 2 recursivitat](/img/uf6/eixida_recur_4.jpg)

Así tens una descripció pas a pas de l'execució:

**Primera crida (índex 0):**

```
1. Intercanvia A amb A (no canvia)
   - Recursió amb índex = 1 sobre {A, B, C}
2. Intercanvia A amb B
   - elements = {B, A, C}
   - Recursió amb índex = 1 sobre aquest vector
3. Intercanvia A amb C
   - elements = {C, B, A}
   - Recursió amb índex = 1 sobre aquest vector
```

**Segona crida (índex 1):**

```
1. De l'vector {A, B, C}:
   - Intercanvia B amb B (no canvia)
     - Imprimeix {A, B, C}
2. De l'vector {B, A, C}:
   - Intercanvia B amb A (no canvia)
     - Recursió amb índex = 2 sobre {B, A, C}
   - Intercanvia B amb C
     - elements = {B, C, A}
     - Recursió amb índex = 2 sobre aquest vector
3. De l'vector {C, B, A}:
   - Intercanvia B amb C (no canvia)
     - Recursió amb índex = 2 sobre {C, B, A}
```

I així successivament ...

5. Crea un programa que utilitzi la recursivitat per calcular de quantes maneres diferents pots arribar a una suma donada utilitzant combinacions de nombres donats. Per exemple, amb els nombres [2, 3, 4] i una suma de 7, les formes podrien ser [2, 2, 3], [3, 4], etc.

![Eixida exercici 2 recursivitat](/img/uf6/eixida_recur_5.jpg)

Así tens una descripció pas a pas de l'execució:

**Primera crida (index 0):**

```
1. Cas incloent l'1:
   - Recursió amb sumaDesitjada = 49, index = 0
2. Cas sense incloure l'1:
   - Recursió amb sumaDesitjada = 50, index = 1
```

**Segona crida (index 1):**

```
1. De branca SENSE 1:
   - Cas incloent el 4:
     - Recursió amb sumaDesitjada = 46, index = 1
   - Cas sense incloure el 4:
     - Recursió amb sumaDesitjada = 50, index = 2
2. De branca AMB 1:
   - Cas incloent el 4:
     - Recursió amb sumaDesitjada = 45, index = 1
   - Cas sense incloure el 4:
     - Recursió amb sumaDesitjada = 49, index = 2
```

**Tercera crida (index 2):**

```
1. De branca SENSE 1 → SENSE 4:
   - Cas incloent el 3:
     - Recursió amb sumaDesitjada = 47, index = 2
   - Cas sense incloure el 3:
     - Recursió amb sumaDesitjada = 50, index = 3
```

I així successivament ...

## 3. Exercici d'ampliació

**Creació de biblioteques de rutines mitjançant paquets**

Si un conjunt de funcions es vol utilitzar en diversos programes es poden agrupar per crear un paquet (package) que després s'importarà des del programa que necessite aquestes funcions. Podem crear paquets específics per introduir-hi les diferents funcions, o bé es poden incloure dins de diferents fitxers en un mateix paquet.

A continuació anem a descriure un exercici per a aprendre com fer-ho creant-nos un paquet amb dos arxius diferents de funcions i en un altre paquet inclourem el programa principal que farà ús d'aquestes funcions.

En aquests moments, per a l'UF06 tenim creat el projecte UF06Exercicis que conté dos paquets: **curs.uf06exemples** i **cursuf06exercicis**.

- Dins del projecte **UF06Exercicis** crearem un nou paquet que anomenarem **curs.uf06matematiques**.

![Crear paquet matemàtiques](/img/uf6/paquet_mates.jpg)

- Dins del nou paquet creareu dos arxius (o java class): **UF06Diverses.java** i **UF06Geometria.java** dels quals a continuació descrivim el contingut.

- En l'arxiu **UF06Diverses** creareu dos funcions de propòsit general com són la comprovació de si un numero és primer i el número de dígits que conté un número enter. És important que s'incloguen els comentaris amb les etiquetes que comencen per @ per a completar altres aspectes de l'exercici que vorem més endavant. Aquest és el codi que s'hi ha d'incloure:

::: tabs
== Java

```java
/**
* Funcions matemàtiques de propòsit general
*/
public class UF06Diverses {

  /**
   * FUNCIÓ: Comprova si un número enter positiu és primer o no.
   * @param x un número enter positiu
   * @return <code>true</code> si el número és primer
   * @return <code>false</code> en cas contrari
   */

  public static boolean esPrimer(int x) {
    boolean nPrimer=true;

    for (int i = 2; i < x && nPrimer; i++) {
      if ((x % i) == 0) {
        nPrimer=false;
        }
    }
    return nPrimer;
  }
  /**
  * FUNCIÓ: Retorna el número de dígits que conté un número enter
  * @param x un número enter
  * @return la quantitat de dígits que conté el número
  */
  public static int digits(int x) {
    int n=0;

    if (x == 0) n=1;
    else {
      while (x > 0) {
        x = x / 10;
        n++;
      }
    }
    return n;
  }
}
```

:::

- Per a l'arxiu **UF06Geometria** crearem també altres dos funcions. Aquest és el codi que hi haureu d'incloure:

::: tabs
== Java

```java
/**
* Funcions geomètriques
*/
public class UF06Geometria {
  /**
  * FUNCIÓ: Calcula el volum d'un cilindre.
  * @param r radi del cilindre
  * @param h altura del cilindre
  * @return volum del cilindre
  */
  public static double volumCilindre(double r, double h) {
    return Math.PI * r * r * h;
  }

  /**
  * FUNCIÓ: Calcula la longitud d'una circunferència a partir del radi.
  * @param r radi de la circunferència
  * @return longitud de la circunferència
  */
  public static double longitudCircunferencia(double r) {
    return 2 * Math.PI * r;
  }
}
```

:::

- Ara ja podeu començar a crear el codi del programa principal, però en aquesta ocasió ho fareu poc a poc per fer unes comprovacions que ens permetran respondre algunes qüestions.

Aneu a crear el programa (arxiu o classe) **UF06Exercici22.java** dins del paquet curs.uf06exercicis (o on tingueu emmagatzemats la resta d'exercicis del tema).

El primer que haureu de fer és importar aquestes classes per poder utilitzar les funcions matemàtiques creades abans dins.

::: warning COMPTE
Un dels estàndards que recomana Java és organitzar les importacions per orde alfabètic.**

:::

Aleshores, heu d'escriure vosaltres les dos importacions de les classes que acabeu de crear, però recordeu que s'ha de citar el paquet on estan, un punt i el nom de la classe. Si no ho feu correctament vos començaran a aparèixer errors quan inclogueu les cridades a les funcions.

::: tabs
== Java

```java
import ... ;
import ... ;
```

:::

Finalment, importarem el mètode Scanner:

::: tabs
== Java

```java
import java.util.Scanner;
```

:::

Ara anem a copiar una part del codi del programa principal. El que ens interessa per a aquest exercici és arribar a la línia que haureu d'escriure poc a poc en lloc de copiar.

::: tabs
== Java

```java
/**
* Prova algunes funcions
*/
public class UF06Exercici22 {
  public static void main(String[] args) {
    int n;
    Scanner entrada = new Scanner (System.in);
    // Prova esPrimer()
    System.out.print("Introdueix un número enter positiu: ");
    n = entrada.nextInt();
 ```

 :::

Seguidament aneu a escriure la següent instrucció (no copiar), i al mateix temps haureu de respondre a les qüestions que es plantegen:

a) Què passa quan escrivim `if (curs.uf06matematiques.` en arribar al punt?

b) A què creus que és degut açò?

c) Què passa quan continuem escrivint `if (curs.uf06matematiques.UF06Diverses.` en arribar al següent punt?

d) Què hem fet en les nostres funcions per a que passe açò?

Completeu la línia (1a línia del següent codi) i còpieu la resta del codi.

Podeu fer la mateixa prova amb la resta de mètodes o funcions esborrant caràcters i reescrivint-les fins a cada punt.

::: tabs
== Java

```java
    if (curs.uf06matematiques.UF06Diverses.esPrimer(n)) {
      System.out.println("El " + n + " és primer.");
    } else {
      System.out.println("El " + n + " no és primer.");
    }

    // Prova digits()
    System.out.print("Introdueix un número enter positiu: ");
    n = entrada.nextInt();
    System.out.println(n + " té " + 
    curs.uf06matematiques.UF06Diverses.digits(n) + " dígits.");

    // Prova volumCilindre()
    double r, h;
    System.out.println("Càlcul del volum d'un cilindre");
    System.out.print("Introdueix el radi en metres: ");
    r = entrada.nextDouble();
    System.out.print("Introdueix l'altura en metres: ");
    h = entrada.nextDouble();
    System.out.println("El volum del cilindre és " + 
    curs.uf06matematiques.UF06Geometria.volumCilindre(r, h) + " m3");
  }
}
```

:::

e) Aneu ara a la classe **UF06Diverses** i elimineu la paraula **public** en la declaració de la funció **esPrimer**. A continuació executeu el programa **UF06Exercici22.java**. Quin error dona? Què significa?

f) Restaureu la paraula public en la funció esPrimer i elimineu ara la paraula **static**. A continuació executeu el programa **UF06Exercici22.java**. Quin error dona? Què significa?

g) Genereu la documentació del programa **UF06Exercici22.java**. Açò es fa des del menú **Run/Generate Javadoc**.


-->
