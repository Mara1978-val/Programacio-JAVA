# La classe String (Java)

Les cadenes de text són objectes especials. Els textos han de manejar-se creant objectes de tipus String.

Exemple:

::: tabs
== Java

```java
String text1 = "Prova de text!";
```

:::

Les cadenes poden ocupar diverses línies utilitzant l'operador de concatenació "+".

::: tabs
== Java

```java
String text2 = "Aquest és un text que ocupa " + "diverses línies, no obstant això es pot " + "perfectament encadenar";
```

:::

També es poden crear objectes String sense utilitzar constants entre cometes, usant altres constructors:

::: tabs
== Java

```java
char[] paraula = {'P', 'a', 'r', 'a ','u', 'l', 'a'}; // Array de char
String cadena = new String(paraula);
```

:::

## Comparació

**IMPORTANT**: Els objectes String NO poden comparar-se directament amb els operadors de comparació `==` com les variables simples.

En el seu lloc s'han d'utilitzar aquests mètodes:

- **cadena1.equals(cadena2)**. El resultat és true si la cadena1 és igual a la cadena2. Totes dues cadenes són variables de tipus String.
- **cadena1.equalsIgnoreCase(cadena2)**. Com l'anterior, però en aquest cas no es tenen en compte majúscules i minúscules.
- **s1.compareTo(s2)**. Compara totes dues cadenes, considerant l'ordre alfabètic. Si la primera cadena és major en ordre alfabètic que la segona, retorna la diferència positiva entre una cadena i una altra, si són iguals retorna 0 i si és la segona la major, retorna la diferència negativa entre una cadena i una altra. Cal tindre en compte que l'ordre no és el de l'alfabet espanyol, sinó que usa la taula ASCII, en aqueixa taula la lletra ñ és molt major que l'o.
- **s1.compareToIgnoreCase(s2)**. Igual que l'anterior, només que a més ignora les majúscules.

Són funcions que posseeixen los propis objectes de tipus String. Per a utilitzar-los n'hi ha prou amb posar el nom del mètode i els seus paràmetres després del nom de l'objecte String.

`objecteString.mètode(arguments);`

## Mètodes de la classe String

Alguns dels mètodes més utilitzats són:

- **valueOf**: Convertix valors que no són de cadena a forma de cadena.

::: tabs
== Java

```java
String numero = String.valueOf(1234); // Converteix el número int 1234 en l'String "1234"
```

:::

- **length**: Retorna la longitud d'una cadena (el nombre de caràcters de la cadena):

::: tabs
== Java

```java
String text1 = "Prova"; System.out.println(text1.length()); // Escriu un 5
```

:::

- **Concatenar cadenes**: Es pot fer de dues formes, utilitzant el mètode `concat` o amb l'operador
`+`.

::: tabs
== Java

```java
String s1= "Bon ", s2= " dia", s3, s4; s3 = s1 + s2;
s4 = s1.concat(s2);
```

:::

En tots dos casos el contingut de s3 i s4 seria el mateix: "Bon dia".

- **charAt**: Retorna un caràcter concret de la cadena. El caràcter a retornar s'indica per la seua posició (el primer caràcter és la posició 0). Si la posició és negativa o sobrepassa la grandària de la cadena, ocorre un error d'execució, una excepció tipus **IndexOutOfBounds-Exception** (recorda aquest tipus d'error, esrepetirà moltes vegades).

::: tabs
== Java

```java
String s1="Prova";
char c1 = s1.charAt(2); // c1 valdrà 'o'
```

:::

- **substring**: Dona com a resultat una porció del text de la cadena. La porció es pren des d'una posició inicial fins a una posició final (sense incloure aqueixa posició final) o des d'una posició fins al final de la cadena. . Si les posicions indicades no són vàlides ocorre una excepció de tipus **IndexOutOfBounds-Exception**. Es comença a comptar des de la posició 0.

::: tabs
== Java

```java
String s1 = "Bon dia";
String s2 = s1.substring(0,3); // s2 = "Bon"
String s3 = s1.substring(3); // s3=" dia"
```

:::

- **indexOf**: Retorna la primera posició en la qual apareix un determinat text en la cadena. En el cas que la cadena buscada no es trobe, retorna -1.

El text a buscar pot ser char o String.

::: tabs
== Java

```java
String s1 = "Volia dir-te que vull que et vages"; System.out.println(s1.indexOf("que")); // Retorna 13
```

:::

També es pot buscar des d'una determinada posició:

::: tabs
== Java

```java
String s1 = "Volia dir-te que vull que et vages";
System.out.println(s1.indexOf("que",14)); // Ara retornaria 22
```

:::

- **lastIndexOf** : Retorna l'última posició en la qual apareix un determinat text en la cadena. És quasi idèntica a l'anterior, només que cerca des del final.

::: tabs
== Java

```java
String s1="Volia dir-te que vull que et vages";
System.out.println(s1.lastIndexOf("que")); // Retornaria 22
```

:::

També permet començar a buscar des d'una determinada posició.

- **endsWith**: Retorna `true` si la cadena acaba amb un determinat text.

::: tabs
== Java

```java
String s1 = "Volia dir-te que vull que et vages";
System.out.println(s1.endsWith("vages")); // Retornaria true
```

:::

- **startsWith**: Retorna `true` si la cadena comença amb un determinat text.

::: tabs
== Java

```java
String s1 = "Volia dir-te que vull que et vages";
System.out.println(s1.startsWith("vages")); // Retornaria false
```

:::

- **replace**: Canvia totes les aparicions d'un caràcter (o caràcters) per un altre/s en el text que s'indique i l'emmagatzema com a resultat. **El text original no es canvia**, pel que cal assignar el resultat de `replace` a un String per a emmagatzemar el text canviat.

::: tabs
== Java

```java
//Exemple 1
String s1="Papallona";
System.out.println(s1.replace('a', 'e')); // Retorna "Pepellone"
System.out.println(s1); //Continua valent "Papallona"
```

:::

Per a guardar el valor hauríem de fer:

::: tabs
== Java

```java
String s2 = s1.replace('a','e');
```

:::

::: tabs
== Java

```java
//Exemple 2
String s1 = "Buscar armadillos";
System.out.println(s1.replace("ar","er")); // Retorna "Buscer ermadillos"
System.out.println(s1); //Continua valent "Buscar armadillos"
```

:::

- **toUpperCase**: Obté la versió en majúscules de la cadena. És capaç de transformar tots els caràcters nacionals:

::: tabs
== Java

```java
String s1 = "Batalló de cigonyes";
System.out.println(s1.toUpperCase()); //Escriu: BATALLÓ DE CIGONYES
```

:::

- **toLowerCase**: Obté la versió en minúscules de la cadena.
- **toCharArray**: Aconsegueix un array de caràcters a partir d'una cadena. D'aqueixa forma podem utilitzar les característiques dels arrays per a manipular el text, la qual cosa pot ser interessant per a manipulacions complicades.

::: tabs
== Java

```java
String s = "text de prova"; char c[]=s.toCharArray();
System.out.println(c[3]); //retorna la lletra t
System.out.println(s); //retorna el text sencer text de prova
```

:::

- **format**: Modifica el format de la cadena a mostrar. Molt útil per a mostrar només els decimals que necessitem d'un nombre decimal. Indicarem "%" per a indicar la part sencera més el nombre de decimals a mostrar seguit d'una "f":

::: tabs
== Java

```java
System.out.println(String.format("%.2f", number)); // Mostra el número amb dos decimals.
```

:::

- **matches**: Examina l'expressió regular que rep com a paràmetre (en forma de String ) i retorna `true` si el text que examina compleix l'expressió regular Una expressió regular és una expressió textual que utilitza símbols especials per a fer cerques avançades.
  
  Les expressions regulars poden contindre:
  - Caràcters. Com a, s, ñ,… i els interpreta tal qual. Si una expressió regular continguera només un caràcter, matches retornaria `true` si el text conté només aqueix caràcter. Si conté més d'un, obliga a que el text tinga exactament aqueixos caràcters.
  - Caràcters de control (\n,\\,….)
  - Opcions de caràcters. Es posen entre claudàtors. Per exemple [abc] significa a, b o c.
  - Negació de caràcters. Funciona a l'inrevés, impedeix que apareguen els caràcters indicats. Es posa amb claudàtors dins dels quals es posa el caràcter circumflex (^). [^abc] significa ni a ni b ni c.
  - Rangs. Es posen amb guions. Per exemple [a-z]significa: qualsevol caràcter de la a a la z.
  - Intersecció. Usa &&. Per exemple [a-x&&r-z] significa de la r a la x (intersecció de totes dues expressions).
  - Sostracció. Exemple [a-x&&[^cde]] significa de la a a la x excepte la c, d o e.
  - Qualsevol caràcter. Es fa amb el símbol punt (.)
  - Opcional. El símbol ? serveix per a indicar que l'expressió que li antecedeix pot aparéixer una o cap vegades. Per exemple a? indica que pot aparéixer la lletra a o no.
  - Repetició. S'usa amb l'asterisc (*). Indica que l'expressió pot repetir-se diverses vegades o fins i tot no aparéixer.
  - Repetició obligada. Ho fa el signe +. L'expressió es repeteix una o més vegades (però almenys una).
  - Repetició un nombre exacte de vegades. Un número entre claus indica les vegades que es repeteix l'expressió. Per exemple \d{7} significa que el text ha de portar set números (set xifres del 0 al 9). Amb una coma significa almenys, és a dir \d{7,} significa almenys set vegades (podria repetir-se més vegades). Si apareix un segon número indica un màxim nombre de vegades \d{7,10} significa de set a deu vegades.

![Exemples Matches](/img/uf5-1/Matches.jpg)

Com ja sabem, la lectura d'un String utilitzant la classe Scanner es realitza amb el mètode `nextLine()`:

::: tabs
== Java

```java
Scanner in = new Scanner(System.in);
String s = in.nextLine();
```

:::

**Si llegim un tipus de dada numèrica**, sencer per exemple, **abans de llegir un String haurem de netejar el buffer d'entrada**, en cas contrari llegirà el valor `\n` (salt de línia) introduït després del número i li ho assignarà a la variable String, amb el que no es llegirà bé l'entrada.

Haurem de fer el següent:

::: tabs
== Java

```java
Scanner in = new Scanner(System.in);
System.out.print("Introdueix un número: ");
int n = in.nextInt();
in.nextLine(); // Netegem el buffer d'entrada
System.out.print("Introdueix un String: ");
String s = in.nextLine();
```

:::
