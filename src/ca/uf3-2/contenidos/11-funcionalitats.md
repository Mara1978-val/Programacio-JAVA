# Funcionalitats dels llenguatges de programació

En tots els llenguatges de programació existeixen funcionalitats que ens permeten realitzar operacions comunes, com ara càlculs matemàtics, manipulació de text o entrada de dades. Aquestes funcionalitats es troben agrupades en **classes** i **biblioteques**.

Les classes en programació poden ser de dos tipus: classes pròpies (que vorem més endavant en les unitats de Programació orientada a objectes) i classes predefinides (que contenen funcionalitats comunes i estan disponibles en el llenguatge de programació). Aquestes classes predefinides són essencials per a la majoria dels programes, ja que ens proporcionen funcionalitats que podem utilitzar sense haver de crear-los des de zero.

Hi ha centenars de funcionalitats disponibles en les classes predefinides, i és impossible recordar-les totes, així com la seva sintaxi. Per això, la majoria de llenguatges tenen una **Biblioteca de Classes** o **API** (Application Programming Interface), que és una col·lecció documentada de totes les classes disponibles i les seues funcionalitats.

Amb freqüència accedirem a aquesta documentació per fer consultes sobre les funcions disponibles.

::: info Important
Per comprendre millor com estan organitzades aquestes classes i biblioteques, és fonamental conèixer el concepte de **paquets** o **espais de noms**. Els paquets proporcionen una estructura jeràrquica que facilita la localització de funcionalitats específiques i evita conflictes entre classes amb noms similars. 

👉 **Consulta l'apartat "[Organització en Paquets o Espais de Noms](/ca/uf3-2/contenidos/12-paquets)"** per obtenir una comprensió completa de com els llenguatges organitzen les seues funcionalitats.
:::

::: tabs
== Java

Tot programa Java ha d'estar compost per almenys una classe.

Amb freqüència accedirem a la Biblioteca de Classes de Java o API de Java per fer consultes. Per això realitzarem una cerca des de qualsevol navegador amb el text "Java API". Que ens portarà al següent enllaç.

https://docs.oracle.com/javase/8/docs/api/

![Java API](/img/uf3-2/Java_api.jpg)

Al panell inferior esquerre podrem veure totes les classes existents a Java que analitzarem com consultar-ho més endavant.

:::

## Operacions matemàtiques

La majoria de llenguatges disposen de funcionalitats específiques per a operacions matemàtiques de gran utilitat:

- Arrodoniment de números
- Arrel quadrada
- Càlcul de potències
- Funcions trigonomètriques (sinus, cosinus, etc.)
- Constants matemàtiques (PI, E, etc.)

::: tabs
== Java

Centrant-nos en la classe Math veurem algunes funcionalitats de gran utilitat:

- **Math.round**(decimal): arrodoniment d'un número
- **Math.sqrt**(n): arrel quadrada
- **Math.pow**(base, exponent): calcula la potència d'un nombre base elevat a un exponent
- **Math.sin**(angle): sinus d'un angle (igual que la resta de funcions trigonomètriques)

També hi ha les constants de classe:

**Math.PI**: número PI

El paquet **java.lang** és el paquet per defecte de Java, de manera que totes les funcions matemàtiques es poden utilitzar sense haver de fer cap importació explícita.

Una vegada al cos del mètode principal podem començar a teclejar la següent instrucció:

`int arrel=Math.`

En el moment en què teclegem el **punt** `.` veiem que apareix una finestra d'ajuda que ens indica les funcionalitats i constants que podem utilitzar dins de la classe **Math**.

![Math + punt](/img/uf3-2/Math_punt.jpg)

Si continuem teclejant la paraula "sq" veurem que a mesura que escrivim cada lletra l'ajuda es va concretant fins arribar finalment al mètode que ens interessa que és "sqrt" o arrel quadrada.

![Math + sq](/img/uf3-2/Math_sq.jpg)

Un altre aspecte molt important d'aquesta ajuda és que ja ens indica tant el tipus de dada en què els paràmetres han d'estar definits (en l'exemple indica que un hipotètic nom de paràmetre "a" ha d'estar definit com a **double**), així com el tipus de dada en què ha d'estar definida la variable destinació (en el nostre cas la variable "arrel" hauria d'haver estat definida com a **double** i no com a **int**).

Si cometem aquest error, l'editor mostrarà que hem comès un error:

![Math error](/img/uf3-2/Math_error.jpg)

L'editor ens marca a l'inici de la línia un avís. Si posem el punter a sobre sense fer clic ens indicarà que els tipus de dades són incompatibles. Si fem clic sobre l'avís veurem les propostes de solució que ens ofereix.

![Math canviar a double](/img/uf3-2/Math_canvi_double.jpg)

Una solució ens proposa que definim correctament el tipus de dades per a la variable arrel. L'altra solució ens proposa que, si volem mantenir la variable `arrel` com a sencera, apliquem una conversió de tipus (refosa o cast) sobre la classe:

`int arrel=(int) Math.sqrt(25);`

Ara passem a treballar amb el mètode **round** de la classe **Math**. Primer declararem la variable:

`float numero1=7.5793F;`

Ara començarem a escriure la instrucció per a l'arrodoniment:

`int resultat1=Math.ro`

![Math + ro](/img/uf3-2/Math_ro.jpg)

Com veiem la classe **Math** té dos funcionalitats round: un que arrodoneix una variable **float** i la deixa en una sencera, i un altre que arrodoneix una variable **double** i la deixa en una de tipus **long**.

Finalment passarem a treballar amb el mètode d'elevar a un exponent:

`double base=10;`
`double exponent=5;`

Realitzarem el càlcul d'exponent sobre una variable `resultat3`:

`double resultat3=Math.pow(base,exponent);`

El nostre programa complet serà:

```java
public class UF04ExempleClasseMath {
    public static void main(String[] args) {

        // Càlculs amb el mètode d'arrel quadrada
        int arrel=(int) Math.sqrt(25);
        double arrelD= Math.sqrt(25);
        System.out.println(arrel);
        System.out.println(arrelD);

        // Càlculs amb el mètode d'arrodoniment
        float numero1=7.579F;
        int resultat1=Math.round(numero1);
        double numero2=7.4793;
        long resultat2=Math.round(numero2);
        System.out.println(resultat1);
        System.out.println(resultat2);

        // Càlculs amb el mètode d'elevar a un exponent
        double base=10;
        double exponent=5;
        double resultat3=Math.pow(base,exponent);
        System.out.println(resultat3);
    }
}
```

:::

## Operacions de manipulació de text

La majoria de llenguatges disposen d'una classe o tipus de dada específic per a la gestió de cadenes de caràcters amb diverses funcionalitats útils:

- Obtenir la longitud d'una cadena
- Accedir a caràcters específics d'una cadena
- Extreure subcadenes
- Comparar cadenes
- Transformar majúscules/minúscules

::: info Nota
Cal tenir en compte que generalment la primera posició d'una cadena no és la 1 sinó la 0.
:::

::: tabs
== Java

Per a la gestió de les dades de tipus caràcter a Java no hi ha un tipus de dades primitiu, sinó que això es realitza a través de la classe **String**.

Per a la definició de variables ho farem com ho fèiem amb els tipus de dades primitives:

`String text="Primer text"`

En aquest cas, text és una variable objecte o instància de la classe **String**.

String, com a classe que és, té les seues funcionalitats. Així, el mètode **length()** ens permet saber la longitud d'una cadena de caràcters, **charAt()** ens permet saber la posició d'un caràcter en una cadena, **substring()** permet extreure una subcadena d'una cadena a partir d'una posició i un nombre de caràcters a extreure, i **equals()** ens diu si dues cadenes són iguals o no.

Les funcionalitats d'aquesta classe no estan declarats com a **estàtics**. És per això que per a utilitzar-los necessitarem **instanciar una variable de tipus String** mitjançant un **constructor**.

Un constructor ens permetrà instanciar els objectes que utilitzarem d'aquesta classe i té el mateix nom que la classe. Ens podem trobar amb classes que tenen diversos constructors amb el mateix nom, però diferents paràmetres.

![Instància String](/img/uf3-2/Instancia_String.jpg)

***Exemple de la classe String:***

```java
public class UF04ExempleClasseString {
    public static void main(String[] args) {
        
        String descartes="Pense, aleshores existisc";
        System.out.println("Descartes diu: " + descartes);
        System.out.println("El que diu Descartes té una longitud de " + descartes.length() + " lletres");
        System.out.println("El que diu Descartes comença per la lletra " + descartes.charAt(0));
        int ultimaLletra=descartes.length();
        System.out.println("L'última lletra és " + descartes.charAt(ultimaLletra-1));
        System.out.println(descartes.substring(0, 16));
    }
}
```

:::

## Operacions d'entrada de dades

Els llenguatges de programació solen disposar de classes o funcions específiques per a la lectura de dades des del teclat o altres fonts d'entrada. Aquestes classes permeten llegir diferents tipus de dades (text, números enters, decimals, etc.) i sovint inclouen funcionalitats per validar el tipus de dada introduïda.

::: tabs
== Java

Per utilitzar la classe Scanner cal importar el paquet corresponent, ja que no pertany al paquet per defecte:

`import java.util.*;`

La classe Scanner té una sèrie de funcionalitats com **nextLine()** per introduir text, **nextInt()** per introduir nombres enters o **nextDouble()** per a nombres decimals. Igualment, el mètode **hasNextInt()** i similars els podrem fer servir per verificar el tipus de dada introduïda per teclat.

Per veure quin paquet hem d'importar podem consultar-ho a la web Java API i buscarem la classe **Scanner**:

![Classe Scanner](/img/uf3-2/Classe_Scanner.jpg)

Si avancem a la pàgina més endavant ens indica quins són els constructors de la classe:

![Constructor Scanner](/img/uf3-2/Cosntructor%20Scanner.jpg)

També apareix la llista de funcionalitats d'aquesta classe:

![Llista de funcionalitats](/img/uf3-2/Llista_metodes.jpg)

Entre aquestes funcionalitats trobarem les tres funcionalitats esmentades i com veiem cap és **static**, la qual cosa implicarà que abans d'utilitzar-les haurem d'haver creat una "variable" del tipus Scanner.

![Funcionalitats Scanner](/img/uf3-2/Metodes_Scanner.jpg)

Com veiem en la imatge següent, les funcionalitats no són estàtiques:

![Mètode no estàtic](/img/uf3-2/No_estàtic.jpg)

Primer instanciem la classe Scanner creant la variable "entrada" que utilitzarem a continuació per utilitzar les funcionalitats de la classe. El resultat de la lectura s'emmagatzemarà en variables que cal definir amb el tipus de dades que corresponga.

***Exemple:*** llegir text del teclat.

```java
public class UF04ExempleClasseScanner1 {
    public static void main(String[] args) {

        // Creem una variable de tipus Scanner per a realitzar les entrades
        Scanner entrada = new Scanner(System.in);

        // Sol·licitem la primera dada de tipus text a través de la variable Scanner creada
        System.out.println("Introdueix el teu nom");
        String nom=entrada.nextLine();

        // Sol·licitem la segona dada de tipus enter a través de la variable Scanner creada
        System.out.println("Introdueix la teua edat");
        int edat=entrada.nextInt();

        // Mostrem els missatges d'eixida finals
        System.out.println("Hola " + nom + ", tens " + edat + " anys.");
        System.out.println("L'any que ve tindràs " + (edat+1) + " anys.");
        entrada.close();
    } 
}

// Qüestio: Què passa si en compte d'escriure (edat+1) escrivim el mateix sense els parèntesis? Realitza la prova.
```

***Exemple 2:*** llegir un sencer del teclat i comprovar que és correcte.

```java
public class UF04ExempleClasseScanner2 {
 
    public static void main(String[] args) {
        Scanner entrada = new Scanner(System.in);
        int valor = 0;

        System.out.print("Escriu un valor enter: ");
        if (entrada.hasNextInt()) {
            valor = entrada.nextInt();
            System.out.println("El valor era " + valor + ".");
        } else {
            entrada.next();
            System.out.print("El valor no era enter.");
        }

        entrada.nextLine();
        entrada.close();
    } 
}
```

El mètode de la classe Scanner vinculat a la lectura d'una cadena de text composta **d'una única paraula** és **next()**.

Recordeu que, si en una mateixa línia escrius més d'una paraula, successives invocacions a aquest mètode no bloquejaran el programa, sinó que aniran avaluant les successives dades pendents de llegir.

El mètode de la classe Scanner vinculat a la lectura d'una cadena de text en forma de frase on hi ha **diverses paraules separades per espais** és **nextLine()**.

:::