# Exercicis

## Exercicis - Nivell bàsic

## Exercici 1

Generador de Figures Geomètriques 2D

L'objectiu d'aquest exercici és crear una jerarquia de classes per gestionar figures geomètriques a partir de punts en un pla cartesià, aplicant conceptes de Programació Orientada a Objectes (POO).

---

#### Fase 1: Creació de la classe Punt
* **a)** Crea la classe **Punt** amb els atributs `x` i `y`. De moment, declara'ls com a **públics**.
* **b)** En la classe principal (`Main`), **instància tres objectes** de tipus Punt amb els valors: `(5,0)`, `(10,10)` i `(-3,7)`. Mostra per pantalla les seues coordenades.

#### Fase 2: Creació de la classe Rectangle
* **c)** Crea la classe **Rectangle** amb dos atributs de tipus Punt públics. Aquests representen dos vèrtexs oposats de la figura.
* **d)** En la classe principal, **instància un objecte** de tipus Rectangle utilitzant els punts creats anteriorment.

#### Fase 3: Constructors i Càlculs Bàsics
* **e)** Implementa el **constructor** en `Punt` i `Rectangle`. Modifica el programa principal per a inicialitzar els objectes a través d'aquests constructors.
* **f)** Mostra per pantalla els **quatre punts** del rectangle (els dos atributs i els dos vèrtexs restants calculats).
* **g)** Calcula el **perímetre** i l'**àrea** directament en el `Main`.
    > **Nota:** > * `Ample = |x2 - x1|`
    > * `Alt = |y2 - y1|`
    > * Utilitza `Math.abs()` per a garantir que les mides siguen positives.

#### Fase 4: Encapsulament (Getters i Setters)
* **h)** Modifica les classes `Punt` i `Rectangle`:
    * Passa tots els atributs a **privats**.
    * Afig els mètodes **getters i setters** corresponents.
    * Actualitza la classe principal perquè interactue amb els objectes mitjançant aquests mètodes.

#### Fase 5: Funcionalitats de la classe Punt
* **i)** Implementa en la classe **Punt** els mètodes següents:
    * `imprimir()`: Mostra les coordenades en format `(x, y)`.
    * `setCoordenades(x, y)`: Modifica X i Y al mateix temps.
    * `desplaçar(dX, dY)`: Suma les quantitats dX i dY a les coordenades actuals.
    * `distancia(altrePunt)`: Retorna la distància entre el punt actual i un altre objecte Punt.
      > **Fórmula:** $distancia = \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$

#### Fase 6: Funcionalitats de la classe Rectangle
* **j)** Implementa en la classe **Rectangle** els mètodes següents:
    * `imprimir()`: Mostra la informació dels quatre vèrtexs.
    * `getArea()`: Retorna l'àrea (Ample * Alt).
    * `getPerimetre()`: Retorna el perímetre (2 * (Ample + Alt)).
* **k)** Prova tots aquests mètodes des de la classe principal.

#### Fase 7: Estàtics i Constants (Classe Punt)
* **l)** Declara en la classe **Punt** dues constants de classe (`static final`) anomenades `MIN` i `MAX` amb els valors **-100** i **100**.
* **m)** Implementa el mètode **estàtic** `generarPuntAleatori()` que retorne un objecte `Punt` amb coordenades a l'atzar dins dels límits `MIN` i `MAX`.

#### Fase 8: Ampliació (Classe Triangle)
* **n)** Crea la classe **Triangle** amb tres atributs de tipus Punt i implementa:
    * `imprimir()`: Mostra els tres vèrtexs.
    * `getPerimetre()`: Suma de les distàncies entre els punts (fent servir el mètode `distancia()` de la classe Punt).
    * `getArea()`: Utilitza la **Fórmula d'Heró**:
      1. Calcula el semiperímetre: $s = \frac{a + b + c}{2}$
      2. Calcula l'àrea: $Area = \sqrt{s(s - a)(s - b)(s - c)}$
      *(On a, b i c són les longituds dels costats)*.
    * Prova la classe instanciant un triangle en el `Main`.

## Exercici 2
Este exercici consisteix a crear un sistema per a gestionar les reserves dels ordinadors d'un laboratori d'informàtica aplicant estructures de dades i restriccions.

#### Fase 1: Creació de la classe Ordinador
* **a)** Crea la classe **Ordinador** amb els atributs públics: `id` (enter), `model` (cadena) i `ram` (enter en GB).
* **b)** En la classe principal, **instància tres ordinadors** amb dades fictícies i mostra la seua informació per pantalla.

#### Fase 2: Creació de la classe Reserva
* **c)** Crea la classe **Reserva** amb tres atributs públics:
    * `nomAlumne` (cadena).
    * `franjaHoraria` (cadena, p. ex. "10:00-11:00").
    * `ordinador` (de tipus **Ordinador**).
* **d)** Instància un objecte **Reserva** en la classe principal utilitzant un dels ordinadors creats abans. Mostra la informació per pantalla.

#### Fase 3: Constructors i Mètodes d'Impressió
* **e)** Implementa els **constructors** per a les classes `Ordinador` i `Reserva`. Actualitza la classe principal per a utilitzar-los.
* **f)** Afig un mètode a la classe **Reserva** que mostre per pantalla tota la informació de la reserva (incloent-hi les dades de l'ordinador). Usa'l en el programa principal.

#### Fase 4: Encapsulament (Getters i Setters)
* **g)** Aplica l'encapsulament:
    * Fes **privats** tots els atributs de les dues classes.
    * Crea els mètodes **getters i setters** corresponents.
    * Modifica el programa principal perquè use estos mètodes per a accedir a les dades.

#### Fase 5: Estructures de Dades (Llistes i Mapes)
* **h)** A la classe principal, prepara el sistema per a gestionar múltiples dades:
    * Un **llistat d'ordinadors** disponibles (ex: `ArrayList<Ordinador>`).
    * Un **mapa de reserves** (ex: `HashMap<String, List<Reserva>>`), on la **clau** siga la franja horària i el **valor** siga una llista de reserves fetes per a eixa hora.

#### Fase 6: Lògica de Reserves
* **i)** Implementa la funcionalitat per a **realitzar una reserva**:
    * L'usuari introdueix l'hora inicial com un enter (p. ex. `10`). Genera la cadena automàticament: `hora + ":00-" + (hora+1) + ":00"`.
    * **Pista per al Mapa:** Abans d'afegir, comprova si la clau ja existeix. Si no existeix, crea una `new ArrayList<>()` primer.
    * **Validació 1:** Si l'ordinador (mateix ID) ja està en la llista d'eixa franja, mostra error.
    * **Validació 2:** Si l'ID de l'ordinador no existeix en el llistat d'ordinadors del laboratori, mostra error.
    * Si tot és correcte, crea la reserva i afig-la al mapa.



#### Fase 7: Cerques i Consultes
* **j)** Afig un mètode per a **mostrar totes les reserves** d'una franja horària concreta recorrent la llista del mapa.
* **k)** Afig una funcionalitat per a **buscar totes les hores reservades** per un alumne determinat (recorre tot el mapa) i que retorne el recompte total.

#### Fase 8: Control de Restriccions (Constants)
* **l)** Defineix una constant `static final` per al **nombre màxim de reserves per hora** (p. ex. 5). Comprova la grandària (`size()`) de la llista en el mapa abans d'afegir-ne una nova.
* **m)** Defineix una constant per al **màxim de reserves per alumne** (p. ex. 3). Has de comptar quantes vegades apareix l'alumne en tot el sistema abans d'acceptar la seua reserva.

#### Fase 9: Prova Final
* En el programa principal, **prova tots els mètodes i les validacions** (especialment els límits de les constants) per a comprovar que el sistema és robust.

## Exercicis - Nivell mitjà


## Exercici 3

Gestor de Cançons i Àlbums Musicals

L'objectiu d'aquest exercici és crear una aplicació que permeta organitzar peces musicals i agrupar-les en àlbums, aplicant validacions de dades i mètodes de consulta.

#### Fase 1: La classe Cançó

**a) Atributs**  
Crea la classe **Cançó** amb:
- títol  
- artista  
- duració (en segons)

**b) Validació de Duració**  
Implementa la lògica per a assegurar que la duració estiga entre **10 i 600 segons**.  
Si s'introdueix un valor fora d'aquest marge, el sistema ha d'indicar l'error i tornar a demanar-lo fins que siga correcte.

**c) Validació de Títol**  
Assegura't que el títol no supere els **50 caràcters**.

---

#### Fase 2: La classe Àlbum

**d) Estructura**  
Crea la classe **Àlbum** amb un nom.  
Al principi, l'àlbum estarà buit.

**e) Afegir cançons**  
Implementa una funcionalitat perquè l'usuari puga introduir cançons una a una mitjançant el teclat i afegir-les a l'àlbum **sense limitació de quantitat**.

---

#### Fase 3: Visualització i Consultes

**f) Mostrar informació**  
Crea mètodes per a visualitzar de manera detallada i ben presentada la informació de:
- Una cançó concreta.
- Un àlbum sencer (totes les seues cançons).

**g) Filtre de llarga durada**  
Implementa un sistema per localitzar i mostrar totes les cançons d'un àlbum que duren **més de 5 minuts (300 segons)**.

---

#### Fase 4: Funcionalitats de Comparació i Estadístiques

**h) Comparador**  
Crea una funció per a comparar dues cançons i determinar quina d'elles és més llarga.

**i) Durada total**  
Implementa un mètode que calcule i retorne la suma de la duració de totes les cançons d'un àlbum.

**j) Extrems**  
Crea mètodes per a identificar:
- La cançó més curta de l'àlbum.
- La cançó més extensa de l'àlbum.

---

#### Fase 5: Recomanació Sorpresa

**k) Selecció aleatòria**  
Afig una funcionalitat que seleccione a l'atzar una cançó de l'àlbum i en mostre la informació com una recomanació per a l'usuari.

---

#### Fase 6: Escenari de Proves (Main)

**l) Verificació**  
Crea una classe principal on s'executen totes les funcionalitats anteriors.  
Prova a introduir dades incorrectes per verificar les validacions i comprova que els càlculs i les cerques funcionen segons els objectius plantejats.


## Exercicis - Nivell avançat

## Exercici 4

Sistema de Gestió Nutricional i Receptari


L'objectiu és dissenyar un sistema per a un servei de càtering que permeta gestionar ingredients, calcular costos i calories de receptes, i oferir suggeriments basats en pressupost i nutrició.

#### Fase 1: La classe Ingredient

**a) Atributs**  
Crea la classe **Ingredient** amb:
- nom  
- calories per unitat (kcal)  
- preu per unitat (€)

**b) Validació de dades**  
Implementa un control per a assegurar valors raonables:
- Calories: entre **1 kcal i 1000 kcal**.  
- Preu: entre **0,01 € i 100 €**.  

Si el valor és incorrecte, s'ha de demanar la correcció fins que siga vàlid.

---

#### Fase 2: La classe Recepta

**c) Estructura**  
Crea la classe **Recepta** amb un nom i una estructura per a guardar els ingredients i les seues quantitats.

**d) Creació del receptari**  
El sistema ha de permetre afegir tantes receptes com es vulguen al receptari (que inicialment estarà buit), associant-les sempre a ingredients existents.

---

#### Fase 3: Consultes d'Ingredients i Llistat

**e) Cercador d'ingredients**  
Implementa una funció per a mostrar tota la informació d'un ingredient cercant pel seu nom.

**f) Llistat alfabètic**  
Mostra totes les receptes disponibles ordenades alfabèticament pel seu nom.

---

#### Fase 4: Càlculs Nutricionals i Econòmics

**g) Totals per recepta**  
Crea mètodes per a calcular, en una recepta concreta:
- El total de calories (suma de calories de cada ingredient per la seua quantitat).
- El cost total (suma del preu de cada ingredient per la seua quantitat).

**h) Filtre econòmic**  
Localitza i mostra totes les receptes que tinguen un cost total inferior a **3 €**.

---

#### Fase 5: Estadístiques Globals del Receptari

**i) Mitjanes**  
Calcula la mitjana de calories i la mitjana de cost de totes les receptes que s'hagen creat al sistema.

**j) Els "més" del receptari**  
Identifica:
- La recepta més lleugera (menys calories).
- La recepta més barata de tot el conjunt.

---

#### Fase 6: Suggeriments i Proves

**k) Recomanació aleatòria**  
Tria una recepta a l'atzar i mostra'n tots els detalls (ingredients, quantitats, total de kcal i preu) com a suggeriment de menú.

**l) Verificació**  
Crea un escenari de proves en el programa principal per a assegurar que totes les funcionalitats responen correctament i que les validacions funcionen.

---

## Exercici 5

Gestió Hospitalària d’Ingressos

Un hospital vol digitalitzar el control dels **ingressos de pacients**, organitzant-los per **unitats mèdiques** (UCI, Pediatria, Traumatologia, etc.) i assegurant que **no se supera el nombre total de llits disponibles**.

El sistema ha de gestionar la jerarquia:

Hospital  
 ├── Unitats  
 │    └── Pacients (codi + dies d’ingrés)  
 └── Llits disponibles (límit) 


#### Fase 1: Classe Pacient

#### a) Definició
Crea la classe `Pacient` amb els atributs següents:

- `codi` (String): generat automàticament  
- `nom`  
- `diesIngres` (int): nombre de dies que porta ingressat  

#### b) Validació
Els dies d’ingrés han de complir:
- Valor mínim: **1 dia**
- Valor màxim: **365 dies**

Si el valor no és correcte, s’ha de tornar a demanar fins que siga vàlid.



#### Fase 2: Classe Unitat

#### c) Definició
Cada `Unitat` té:

- `nom` (exemple: “UCI”, “Pediatria”)
- Un registre dels pacients ingressats, emmagatzemat mitjançant:
  - Un `ArrayList` de pacients

#### d) Gestió d’unitats
El sistema ha de permetre:

- Afegir noves unitats a l’hospital  
- Eliminar una unitat **només si no té pacients ingressats**



#### Fase 3: Classe Hospital

#### e) Configuració inicial
L’hospital es crea **una sola vegada** a l’inici del programa amb:

- Nom de l’hospital  
- Localització  
- Nombre màxim de llits disponibles  
- Llista d’unitats  

#### f) Control de capacitat
Abans d’ingressar un pacient:

- Es comprova si encara hi ha llits disponibles  
- Si el límit està superat:
  - L’operació s’ha de cancel·lar  
  - Mostrar un missatge d’error per pantalla  



#### Fase 4: Operacions d’Ingressos

#### g) Entrada i alta
Implementa mètodes per a:

- **Ingressar un pacient** en una unitat concreta, passant directament l’objecte `Pacient` com a paràmetre.
- **Donar d’alta un pacient** d’una unitat, passant el **codi del pacient** i buscant-lo dins de l’`ArrayList` de la unitat.

> Per a donar d’alta, s’haurà de recórrer l’`ArrayList` de pacients fins trobar aquell que tinga el codi indicat i eliminar-lo de la llista.

#### h) Transferència
Permetre transferir un pacient **directament d’una unitat a una altra**.

> La transferència implica: localitzar el pacient a la unitat d’origen, eliminar-lo de la seua llista i afegir-lo a la unitat de destí.

#### Fase 5: Consultes i Informes

#### i) Cerca per codi
A partir del codi d’un pacient, mostrar:

- Nom  
- Dies d’ingrés  
- Unitat on es troba  

> S’ha de recórrer l’hospital (totes les unitats) i, dins de cada unitat, recórrer l’`ArrayList` fins trobar el pacient.

#### j) Estat d’una unitat
Mostrar tot el contingut d’una unitat:

- Llista de pacients  
- Dies d’ingrés de cadascun  
- Nombre total de llits ocupats en la unitat  

#### k) Ingressos llargs
Localitzar pacients amb **més de 30 dies d’ingrés**, que requereixen seguiment especial.


#### Fase 6: Estadístiques i càlculs

#### l) Comparació
Comparar dos pacients i indicar quin porta **més dies ingressat**.

#### m) Càlculs globals
- Calcular el nombre total de pacients ingressats a una unitat  
- Calcular el nombre total de pacients ingressats a tot l’hospital  

#### n) Extrems
Identificar dins d’una unitat:

- El pacient amb **més dies d’ingrés**  
- El pacient amb **menys dies d’ingrés**  



#### Fase 7: Control i proves

#### o) Control aleatori
Seleccionar aleatòriament un pacient d’una unitat per a una **revisió mèdica sorpresa**.

> Recorda: la unitat ha de tindre pacients (llista no buida) i s’ha de generar un índex aleatori vàlid.

#### p) Escenari de proves
Al `main`:

- Crear l’hospital  
- Crear diverses unitats  
- Ingressar diversos pacients  
- Realitzar altes, transferències i consultes  
- Verificar que **mai se supera el límit de llits**


## Exercicis adicionals

## Exercici 6

Mòdul de Seguretat per al Sistema de Trànsit Urbà


L'Ajuntament de la ciutat està digitalitzant la xarxa de semàfors municipals. S'han detectat errors greus en utilitzar codis numèrics (1, 2, 3) o cadenes de text lliures, ja que s'estaven introduint valors incorrectes que posaven en risc la seguretat viària.

Com a desenvolupador/a, la teua missió és utilitzar una **enumeració** (`enum`) per garantir que un semàfor només puga estar en un dels tres estats legals i que els missatges als conductors siguen clars i directes.

---

#### Fase A: Definició del Domini
Crea una enumeració anomenada `ColorSemafor` que només permeta els estats:
* `VERD`
* `GROC`
* `ROIG`

#### Fase B: Desenvolupament de la Controladora (`Semafor.java`)
Dissenya la lògica del dispositiu amb els següents components:
* **Estat Intern:** Una variable privada de tipus `ColorSemafor`.
* **Protocol d'Inici:** El semàfor ha de començar per defecte en l'estat **ROIG**.
* **Mòdul de Canvi:** Un mètode que reba un nou `ColorSemafor` i l'assigne al semàfor.
* **Interfície d'Usuari:** Un mètode anomenat `instruccioConductor` que, mitjançant un `switch`, mostre per consola:
    * Si el color és **VERD**: "Pots passar."
    * Si el color és **GROC**: "Atenció! Frena si pots."
    * Si el color és **ROIG**: "**Parar**."

#### Fase C: Prova de Camp (`Simulacio.java`)
Crea una classe amb el mètode `main` per a realitzar el següent flux:
1.  Instanciar el semàfor.
2.  Cridar al mètode d'instrucció per a verificar que comença en "**Parar**".
3.  Canviar l'estat a **VERD** i mostrar la instrucció.
4.  Canviar l'estat a **GROC** i mostrar la instrucció.

---

### 3. Nota sobre Seguretat
L'ús de l'**Enum** és obligatori per a evitar que el sistema accepte estats invàlids (com "Blau" o números arbitraris). Això garanteix la robustesa del programari davant errors humans de programació.

## Exercici 7 

Refactorització amb el mètode `toString()`

En els exercicis anteriors, hem estat utilitzant mètodes personalitzats com `mostrarDades()`, `imprimir()` o `dibuixar()` per a veure l'estat dels nostres objectes per consola. Encara que funciona, no és la manera estàndard de Java per a representar objectes com a text.

Java ofereix un mètode especial anomenat `toString()`, heretat de la classe `Object`, que permet que les nostres classes es "presenten" a si mateixes de forma estandarditzada.

L'objectiu d'aquest exercici és **refactoritzar** (reescriure per a millorar) el teu codi previ per a eliminar mètodes de visualització personalitzats i implementar la sobrecàrrega del mètode `toString()`.

#### Fase A: Sobrescritura del mètode
En la teua classe principal de dades (per exemple, `Persona`, `Vehicle` o `Semafor`), elimina qualsevol mètode que servisca per a imprimir dades per pantalla. En el seu lloc, implementa el mètode `toString()`

> **Nota Important**: El mètode toString() NO ha d'imprimir res amb System.out.println(). La seua única funció és retornar (return) una cadena de text (String).


