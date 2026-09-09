# Exercicis

## Exercicis - Vectors

### Exercici V1

**a)** Declara i inicialitza un vector de 8 enters. Mostra el contingut del vector per pantalla.  
**b)** Mostra quants valors són positius i quants negatius.  
**c)** Mostra la suma i la mitjana dels valors del vector.  
**d)** Indica quin és el valor màxim i en quina posició es troba.  

### Exercici V2

**a)** Declara i ompli un vector amb N paraules, on N és un número introduït per teclat i les paraules són cadenes també introduïdes per teclat.  
**b)** Mostra aquelles paraules que comencen per vocal.  
**c)** Mostra quina és la paraula més llarga, i indica el tamany.  

### Exercici V3

**a)** Introdueix en un vector 10 paraules donades per l'usuari. Mostra-les.  
**b)** Indica si hi ha paraules repetides. Mostra-les.  

### Exercici V4

S'està analitzant un qüestionari amb 10 preguntes, cadascuna amb 4 possibles solucions (1, 2, 3 o 4), realitzat per diversos estudiants.

**a)** Declara un vector on s'emmagatzemen les respostes correctes del test. Usa números enters aleatoris entre 1 i 4.  
**b)** Emmagatzema les respostes d'un estudiant en un altre vector. Resposta 0 es considerarà com no contestada.  
**c)** Mostra quantes preguntes ha contestat correctament, quantes ha contestat incorrectament, i quantes no ha contestat.  
**d)** Calcula i mostra la nota obtinguda. Si la nota ix negativa, serà 0. Usa la següent equació:

- `nota = (n_correctes - 0.33 * n_incorrectes) / n_total`.  

### Exercici V5

Un sistema ha de controlar un conjunt d'usuaris que s'autentiquen amb nom i contrasenya. Només cal emmagatzemar i comprovar aquestes dades, sense xifrar.

**a)** Declara i inicialitza dos vectors paral·lels amb 5 noms d'usuari i les seues contrasenyes. Genera les contrasenyes com a un conjunt aleatori d'enters.  
**b)** Permet iniciar sessió: demana nom i contrasenya, i valida si coincideixen. Mostra un missatge informant del resultat.  
**c)** Mentre la sessió no s'inicie correctament, el programa demanarà usuari i contrasenya constantment, fins que s'introduïsca "fi" com a nom.  
**d)** Si has iniciat correctament la sessió, mostra un menú amb dos opcions: una per a tancar sessió i una altra que permet canviar la contrasenya actual.  

## Exercicis - String

### Exercici S1

Una aplicació web vol validar contrasenyes segons certes normes abans de registrar-les. Un valor numèric indicarà la fiabilitat de la contrasenya:

- Valor de 0 indica contrasenya molt segura.
- Per cada comprovació que no supere, augmentarà en 1.

**a)** Demana a l'usuari una contrasenya. Indica si la longitud és superior o inferior a 8 caràcters.  
**c)** indica si conté, almenys, una majúscula.  
**d)** Indica si conté, almenys, un dígit.  
**e)** Indica el nivell de seguretat, mostrant el missatge "Molt segura!", "Segura" o "Molt insegura. Canvia-la!" segons les comprovacions superades.

::: tip NOTA
Una forma de comprovar si un caràcter és una lletra majúscula és amb la següent instrucció:  
`Character.isUpperCase(cadena.charAt(i))`  
Aquesta instrucció retorna `true` si el caràcter en la posició `i` de `cadena` és una lletra majúscula, i retorna `false` en cas contrari.

De forma equivalent, es pot comprovar que un caràcter és un número amb:  
`Character.isDigit(cadena.charAt(i))`
:::

### Exercici S2

En una carpeta hi ha diversos noms de fitxer. Cal analitzar-los per identificar els seus tipus i validar noms vàlids.  

**a)** Desa 8 noms de fitxer (amb extensió) en un vector de String. Mostra'ls.  
**b)** Mostra aquells que no tenen extensió.  
**c)** Mostra aquells noms que acaben en ".txt".
**d)** Mostra quins noms contenen espais.
**e)** Canvia tots els noms perquè estiguen en minúscules.
**f)** Mostra només els noms dels fitxers sense l'extensió.

### Exercici S3

Es volen fer una sèrie de comprovacions en una frase. Realitza-les i mostra el resultat.

**a)** Introdueix una frase i desa-la.  
**b)** Indica si comença per majúscula i acaba per punt. Si no és el cas, modifica la cadena.  
**c)** Mostra la longitud de la frase i quantes paraules conté.  
**d)** Substitueix totes les aparicions de la paraula "Java" per "Python".  
**e)** Mostra la frase final.  

### Exercici S4

Una aplicació ha rebut una llista de correus electrònics que cal validar i analitzar.

**a)** Desa 5 correus en un vector de String. Mostra'ls.  
**b)** Mostra quins contenen el símbol "@" i acaben en ".com" o ".es".  
**c)** Mostra el domini de cada correu (substring, indexOf).  

### Exercici S5

Una aplicació d'accés necessita validar noms d'usuari segons normes específiques. A més, vol ajudar els usuaris a corregir errors comuns.

**a)** Desa 5 noms d'usuari. Mostra'ls.  
**b)** Mostra quins són vàlids: comencen amb lletra, tenen entre 5 i 12 caràcters, no contenen espais.  
**c)** Per a aquells que no siguen vàlids, suggereix una versió corregida (canvia el caràcter inicial si és un dígit, retalla o completa longituds, elimina espais).  
**d)** Afig una nova condició: tots els caràcters han de ser alfanumèrics. Modifica també el codi per a afegir suggeriment en cas de no superar aquesta nova comprovació.  

## Exercicis - Matrius

### Exercici M1

**a)** Declara i mostra una matriu de 3x4 amb valors enters inicialitzats directament al codi.  
**b)** Mostra la suma de tots els elements de la matriu.  
**c)** Mostra el major i el menor element de la matriu.  
**d)** Mostra la suma i la mitjana de cada fila.  
**e)** Mostra la suma i la mitjana de cada columna.  
**f)** Multiplica tots els valors per 2 i mostra la nova matriu.  

### Exercici M2

**a)** Declara i mostra una matriu de 3x3 de String amb paraules curtes inicialitzades directament al codi.  
**b)** Mostra quines paraules contenen més de 5 lletres, i substitueix-les per un asterisc ("*").  
**c)** De la matriu modificada, mostra quines paraules comencen per vocal i substitueix-les per un guió ("-").  
**d)** Considera que cada fila forma una frase. Mostra les tres frases, tenint en compte que:  

- Cada paraula ha d'estar separada per un espai
- Ha d'haver un punt final.

### Exercici M3

Una matriu conté els temps d'execució (en mil·lisegons) de diferents funcions d'un programa, mesurats durant diverses execucions.

**a)** Declara i mostra una matriu d'enters de 5 funcions per 4 execucions. Inicialitza-la per codi amb valors de fins a 3 xifres (entre 0 i 999).  
**b)** Mostra el temps mitjà de cada funció (fila).  
**c)** Mostra quina execució (columna) ha sigut globalment més ràpida (indica la columna i el temps mitjà d'execució).  
**d)** Mostra quines funcions han millorat rendiment respecte l'execució anterior.  

### Exercici M4

Tens una matriu de 5 alumnes i 4 assignatures. Cada valor és la nota (enter de 0 a 10) d'un alumne en una assignatura.

**a)** Introdueix les notes amb números aleatoris i mostra la matriu.  
**b)** Mostra la mitjana de cada alumne.  

- Per simplificar, pots usar un identificador per a cada alumne: "L'alumne [1] ha tret una mitjana de 7.3"

**c)** Mostra la mitjana de cada assignatura.  

- Per simplificar, pots usar un identificador per a cada assignatura: "L'assignatura [3] té una mitjana de 6.1"

**d)** Mostra els alumnes que han aprovat totes les assignatures.  

### Exercici M5

Tens una matriu String de 6x4 on cada fila representa una variable i cada columna representa una versió del programa. El contingut indica l'estat de la variable ("OK", "NULL" o "ERROR").

**a)** Declara inicialitza i mostra la matriu. Cada posició contindrà, de forma aleatòria, alguna de les tres cadenes possibles.  
**b)** Mostra quines variables han tingut, almenys, un "ERROR".  
**c)** Mostra en quina versió es produeixen més "NULL".  
**d)** Mostra un resum amb quantes vegades apareix cada estat globalment.  

## Exercicis - Llistats

### Exercici L1

**a)** Demana valors enters a l'usuari fins que escriga un valor negatiu. Guarda'ls en una llista.  
**b)** Mostra la llista completa.  
**c)** Mostra quants valors hi ha i la suma total.  
**d)** Mostra només els valors parells.  
**e)** Mostra només els valors imparells.  
**f)** Permet a l'usuari demanar una posició (es demanarà fins que trie una correcta) i elimina el valor del llistat en eixa posició.  

### Exercici L2

**a)** Crea una llista amb noms d'alumnes. L'usuari va afegint noms fins que escriu "fi".  
**b)** Mostra el nombre d'alumnes i els seus noms en l'ordre original.  
**c)** Mostra els noms ordenats alfabèticament.  
**d)** Permet buscar un nom i indicar si està en la llista.  
**e)** Modifica el programa per a mostrar un menú amb les següents opcions:  

- Mostrar els alumnes ordenats alfabèticament.
- Buscar un alumne i, si existeix, indicar la posició.
- Afegir un alumne (si no es troba ja al llistat).
- Eliminar un alumne (si existeix).

### Exercici L3

S'han recollit les temperatures màximes de cada dia durant un mes. Es volen analitzar.

**a)** Emmagatzema 30 valors en una llista (números aleatoris entre 15 i 20, per exemple). Mostra el llistat dels dies junt amb la seua temperatura.  
**b)** Mostra la mitjana mensual, i també els dies amb temperatura superior a la mitjana.  
**c)** Mostra la longitud de la seqüència més llarga de dies seguits amb temperatures superiors a 30 °C.  

### Exercici L4

S'ha recollit el temps (en segons) que cada usuari ha tardat en respondre una enquesta. Es volen detectar patrons i casos sospitosos.

**a)** Genera un llistat de temps per a cada usuari amb números aleatoris entre 1 i 100. Mostra els temps i la mitjana.  
**b)** Mostra quins usuaris (indicant les posicions) han respost en menys de 10 segons (possibles bots). Per exemple:  

```plaintext
Els usuaris que han respost en menys de 10 segons són: 3, 6, 15, 27,
```

**c)** Mostra el percentatge d'usuaris que han tardat entre 20 i 60 segons.  

### Exercici L5

S'està celebrant un torneig d'escacs i es registren els resultats de les partides entre participants. Cada resultat indica el nom del guanyador i del perdedor.

**a)** Introdueix en un llistat els resultats de les partides. Cada posició del llistat indica una partida, i ha d'haver dos valors (guanyador, perdedor). Usa un vector per a emmagatzemar els dos valors en cada posició del llistat.  
**b)** Mostra la llista de jugadors únics que han participat (sense repetir).  
**c)** Mostra el nombre total de victòries per a cada jugador.  