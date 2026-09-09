# 3. Vectors (vectors unidimensionals)

## 3.1. Declaració

En programació, **declarar** significa anunciar l'existència d'una variable, estructura o objecte, indicant el seu nom (**identificador**) i el **tipus de dades** que contindrà (si el llenguatge ho requereix). Aquesta acció informa l'intèrpret o compilador que es reserven recursos per a treballar amb l'entitat.

Hi ha llenguatges de programació on la declaració es pot fer de manera separada a la instanciació (la creació efectiva de l'estructura o objecte i de la reserva d'espai en memòria).

En el cas dels vectors, aquests es declaren de la següent manera:

::: tabs
== Java
`tipus identificador[];`  
`tipus[] identificador;`

(ambdues declaracions són equivalents)
:::

On `tipus` és el tipus de dada dels elements del vector i `identificador` és el nom de la variable.

Exemples:

::: tabs
== Java

```java
int notes[];  
double comptes[];
```

:::

En aquest exemple es declara un vector de tipus int i un altre de tipus double. Aquesta declaració indica per a què servirà el vector, però **no reserva espai en la memòria RAM al no saber-se encara la grandària d'aquest**. Encara no pot utilitzar-se el vector, falta instanciar-lo.

## 3.2. Instància

En programació, **instanciar** significa crear una còpia concreta d'una estructura de dades, i reservar espai en memòria per a poder utilitzar-la. Aquesta acció pot incloure la inicialització dels seus valors i habilita l'entitat per a ser utilitzada efectivament dins del programa. Per a instanciar s'utilitza l'operador `new`, que és aquell que realment crea l'estructura o l'objecte.

En el cas dels vectors, aquests es declaren de la següent manera:

::: tabs
== Java

```java
int notes[]; // Declarem ‘notes' com vector de tipus int
notes = new int[5]; // Instanciem ‘notes' a grandària 5

// És habitual declarar i instanciar en una sola línia
int notes[] = new int[5];
```

:::

## 3.3. Emmagatzematge

Els valors d'un vector (o array unidimensional) s'assignen i s'accedeixen mitjançant l'índex, que s'especifica amb la sintaxi pròpia de cada llenguatge.

>[!IMPORTANT] <strong>IMPORTANT!:</strong>
>En la majoria de llenguatges de programació, el primer element del vector es troba a la posició 0, és a dir, l'índex inicial és 0 i l'últim correspon a la longitud del vector menys u (C, Java, JavaScript, Python...).
>
>![Índex vectors](/img/uf5-1/IndexVectors.jpg)
>
><br>No obstant això, hi ha llenguatges on els vectors poden començar en una altra posició, com ara 1 (Fortran, Lua o MATLAB). En altres llenguatges (com Pascal), és possible configurar manualment l'índex inicial del vector.</br>

Per exemple, per a emmagatzemar el valor 2 en la tercera posició del vector escriuríem:

::: tabs
== Java

```java
notes[2] = 2;
```

:::

També es poden assignar valors al vector en la pròpia declaració i instanciació:

::: tabs
== Java

```java
int notes[] = {8, 10, 2, 3, 5};
int notes[]= new int[] {8, 10, 2, 3, 5}; //Equivalent a l'anterior
```

:::

Això declara i inicialitza un vector de cinc elements. L'exemple seria equivalent a:

::: tabs
== Java

```java
notes[0] = 8;
notes[1] = 10;
notes[2] = 2;
notes[3] = 3;
notes[4] = 5;
```

:::

**Es poden declarar vectors** de qualsevol tipus de dades (**enters, booleans, doubles**... i, fins i tot, **objectes**).

## 3.4. Longitud d'un vector

Els vectors posseeixen una propietat que indica la seua grandària, és a dir, el nombre d'elements que contenen. Aquesta propietat pot variar en nom i forma segons el llenguatge de programació utilitzat, per exemple: length, size, count o mitjançant una funció específica.

Exemple:

::: tabs
== Java

En Java, s'utilitza la propietat **length**:

```java
int notes[] = new int[5]; // Vector tipus int de grandària 5
System.out.println( notes.length ); // Mostrarà un 5
```

Si el vector té 5 elements, la propietat `length` ens retornarà el valor sencer 5, però el primer element es troba en la posició 0 (`notes[0]`) i l'últim en la posició 4 (`notes[4]`).

:::

## 3.5. Recorregut d'un vector

Per a recórrer un vector (accedir a tots els seus elements) sempre serà necessari un bucle.

En el següent exemple declarem i instanciem un vector d'enters amb les notes d'un alumne i després utilitzem un bucle `for` per a recórrer el vector i mostrar tots els elements.

::: tabs
== Java

```java
// Declarem i instanciem vector tipus int
int notes[] = new int[] {7, 3, 9, 6, 5};
// Com el vector és de grandària 5 els seus elements estaran en les posicions de 0 a 4

// Recorrem el vector des d'i=0 fins a i<5 (és a dir, des de 0 fins a 4)
for (int i = 0; i < notes.length; i++) {
  System.out.println(notes[i]);
}
```

:::

Ara calcularem la nota mitjana (sumar totes i després dividir entre el nombre de notes):

::: tabs
== Java

```java
// Declarem suma i mitja int suma = 0;
int mitjana;
// Recorrem el vector des de 0 fins a 4, acumulant les notes en suma 
for (int i = 0; i < notes.length; i++) {
  summa += notes[i]; // Equival a: suma = summa + notes[i]
}
// Calculem la mitjana i la vam mostrar per pantalla 
mitjana = summa / notes.length; 
System.out.println("La nota mitjana és: " + mitjana);
```

:::

## 3.6. Còpia de vectors

Per a copiar vectors no n'hi ha prou amb igualar un vector a un altre com si fora una variable simple.

Si partim de dos vectors v1, v2 i férem v2=v1, el que ocorreria seria que v2 apuntaria a la posició de memòria de v1. Això és el que es denomina un copia de referència:

![Apuntar memòria vector](/img/uf5-1/ApuntarMemoriaVector.jpg)

Si per exemple volem copiar tots els elements del vector v2 en el vector v1, existeixen diverses formes per a fer-ho.

### 3.6.1. Copiar els elements un a un

Mitjançant un bucle:

::: tabs
== Java

```java
for (i = 0; i < v1.length; i++)
  v2[i] = v1[i];
```

:::

### 3.6.2. Altres formes de copiar un vector

::: tabs
== Java

Utilitzar la funció **vectorcopy**:

```java
System.vectorcopy(v_origen, i_origen, v_destí, i_destí, length);
// v_origen: Vector origen
// i_origen: Posició inicial de la còpia 
// v_destí: Vector destí
// i_destí: Posició final de la còpia length: Quantitat d'elements a copiar

// Copiem tots els elements de v1 en v2
System.vectorcopy(v1, 0, v2, 0, v1.length);
```

:::
