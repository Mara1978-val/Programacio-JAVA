# 9. Exemples

## 9.1. Exemple 1

En aquest exemple implementarem la classe Articles. Aquesta classe representa cada objecte amb els següents atributs: codi_article, titol, format i preu_alquiler. També defineix tres mètodes que permeten calcular, respectivament, el preu de lloguer d'un dia, de dos dies i una setmana. El primer que necessitarem, i això ho farem per cada classe que necessitem en tots els exemples, serà crear-nos una nova classe. 

::: tabs
== Java

Per a això punxarem amb el botó dret sobre el paquet on anem a tindre les classes i després en `NEW` > `Java Class`. Crearem una classe anomenada Article.


```java
public class Article{
  //Atributs de la classe
  String  cod;
  String titol;
  String format;
  float preu_alquiler;

  //Mètodes de la classe
  float preu1(){
    return preu_alquiler;
  }

  float preu2(){
    float preu_total;

    preu_total = preu_alquiler * 1.80f;

    return preu_total;
  }

  float preu_setmana(){
    float preu_total;

    preu_total = preu_alquiler * 5;

    return preu_total;
  }
}
```

:::

El mètode preu1 retorna el valor del preu de lloguer de l'article. El mètode preu2 calcula el preu de lloguer de dos dies fent un descompte del 20% (per això es multiplica per 1,8). Per últim el mètode preu_setmana calcula el preu d'una setmana multiplicant per 5 el preu de lloguer.



Seguidament crearem una classe nova anomenada Exemples, que serà la classe principal, on anem a instanciar (crear) objectes de Article i utilitzar-los. Crearem una instància de la classe Article i, com de moment la classe no té constructors, s'invocarà al constructor per defecte de la classe.

**<u>RECORDA</u>**: Quan instanciem una classe estem creant un objecte d'aquesta classe.

:::: tabs
=== Java

::: tabs
== Codi

```java
public class Exemples{
  public static void main(String[] args){
    //Creem dos articles
    Article article1 = new Article();
    Article article2 = new Article();

    //Li donem valors als seus atributs
    article1.cod = "001";
    article1.titol = "Títol1";
    article1.format = "DVD";
    article1.preu_alquiler = 2.50f;

    article2.cos = "002";
    article2.titol = "Títol2";
    article2.format = "DVD";
    article2.preu_alquiler = 3;

    System.out.println("Alquiler Art. " + article1.cod + ", 1 dia: " + article1.preu1());
    System.out.println("Alquiler Art. " + article1.cod + ", 2 dies: " + article1.preu2());
    System.out.println("Alquiler Art. " + article1.cod + ", 1 setmana: " + article1.preu_setmana());
    System.out.println("Alquiler Art. " + article2.cod + ", 1 dia: " + article2.preu1());
    System.out.println("Alquiler Art. " + article2.cod + ", 2 dies: " + article2.preu2());
    System.out.println("Alquiler Art. " + article2.cod + ", 1 setmana: " + article2.preu_setmana());
  }
}
```

== Eixida:

```plaintext
Alquiler Art. 001, 1 dia: 2.5
Alquiler Art. 001, 2 dies: 4.5
Alquiler Art. 001, 1 setmana: 12.5
Alquiler Art. 002, 1 dia: 3.0
Alquiler Art. 002, 2 dies: 5.3999996
Alquiler Art. 002, 1 setmana: 15.0
```

:::
::::

## 9.2. Exemple 2

Implementem la classe `CompteBancari`, que encapsula operacions matemàtiques bàsiques com ingressar i retirar diners, així com el càlcul del saldo.

:::: tabs
=== Java

::: tabs
== CompteBancari

```java
public class CompteBancari {
  private double saldo;


  public CompteBancari(double saldoInicial) {
    this.saldo = (saldoInicial >= 0) ? saldoInicial : 0;
  }

  //set saldo
  public boolean ingressar(double quantitat) {
    if (quantitat > 0) {
    saldo += quantitat;
    return true;
    }
    return false;
  }

  //get saldo
  public boolean retirar(double quantitat) {
    if (quantitat > 0 && quantitat <= saldo) {
      saldo -= quantitat;
      return true;
    }
      return false;
  }

  public double getSaldo() {
    return saldo;
  }

}

```

:::
::::

## 9.3. Exemple 3

En aquest exemple aplicarem el principi de encapsulament fent privats els atributs de la classe i públics els mètodes. Per a això modificarem la classe Article de l'Exemple 1.

Però ara no podrem llegir ni modificar els atributs de la classe des de fora d'ella (perquè són privats). Així que definirem mètodes que ens permeten fer-ho:

- Crearem mètodes públics (un per atribut) que ens retorne el valor de cada atribut. A això se'n diu mètodes **get** o **getters** (de l'anglés agafar).
- De la mateixa manera, mètodes que ens permeten modificar el valor dels atributs. A això se'n diu mètodes **set** o **setters** (de l'anglés establir). En l'exemple es diu modificaValors i permet canviar tots els valors en una sola crida.

:::: tabs
=== Java

::: tabs
== Article.java

```java
public class Article{
  //Atributs de la classe
  private String  cod;
  private String titol;
  private String format;
  private float preu_alquiler;

  //Mètodes de la classe
  public float preu1(){
    return preu_alquiler;
  }

  public float preu2(){
    float preu_total;

    preu_total = preu_alquiler * 1.80f;

    return preu_total;
  }

  public float preu_setmana(){
    float preu_total;

    preu_total = preu_alquiler * 5;

    return preu_total;
  }

  public void modificaValors(String cod_p, String titol_p, String format_p, float preu_p){
    cod = cod_p;
    titol = titol_p;
    format = format_p;
    preu_alquiler = preu_p;
  }

  public String getCod(){
    return cod;
  }

  public String getTitol(){
    return titol;
  }

  public String getFormat(){
    return format;
  }

  public float getPreu_alquiler(){
    return preu_alquiler;
  }
}
```

== Exemples.java

```java
public class Exemples{
  public static void main(String[] args){
    //Creem dos articles
    Article article1 = new Article();
    Article article2 = new Article();

    //Li donem valors als seus atributs
    article1.modificaValors("001","Titol1","DVD",2.5f);
    article2.modificaValors("002","Titol2","DVD",3f);

    System.out.println("Alquiler Art. " + article1.getCod() + ", 1 dia: " + article1.preu1());
    System.out.println("Alquiler Art. " + article1.getCod() + ", 2 dies: " + article1.preu2());
    System.out.println("Alquiler Art. " + article1.getCod() + ", 1 setmana: " + article1.preu_setmana());
    System.out.println("Alquiler Art. " + article2.getCod() + ", 1 dia: " + article2.preu1());
    System.out.println("Alquiler Art. " + article2.getCod() + ", 2 dies: " + article2.preu2());
    System.out.println("Alquiler Art. " + article2.getCod() + ", 1 setmana: " + article2.preu_setmana());
  }
}
```

== Eixida

```plaintext
Alquiler Art. 001, 1 dia: 2.5
Alquiler Art. 001, 2 dies: 4.5
Alquiler Art. 001, 1 setmana: 12.5
Alquiler Art. 002, 1 dia: 3.0
Alquiler Art. 002, 2 dies: 5.3999996
Alquiler Art. 002, 1 setmana: 15.0
```

:::
::::

## 9.4. Exemple 4

En aquest exemple veurem com crear un constructor de classe. Per a això ens basarem en la classe Article creada anteriorment i li afegirem el constructor.

:::: tabs
=== Java

::: tabs
== Article.java

```java
public class Article{
  //Atributs de la classe
  private String  cod;
  private String titol;
  private String format;
  private float preu_alquiler;

  //Constructor de la classe
  public Article(String cod, String titol, String format, float preu_alquiler){
    //amb this estem accedint a l'objecte de la classe
    this.cod = cod;
    this.titol = titol;
    this.format = format;
    this.preu_alquiler = preu_alquiler;
  }

  //Mètodes de la classe
  public float preu1(){
    return preu_alquiler;
  }

  public float preu2(){
    float preu_total;

    preu_total = preu_alquiler * 1.80f;

    return preu_total;
  }

  public float preu_setmana(){
    float preu_total;

    preu_total = preu_alquiler * 5;

    return preu_total;
  }

  public void modificaValors(String cod_p, String titol_p, String format_p, float preu_p){
    cod = cod_p;
    titol = titol_p;
    format = format_p;
    preu_alquiler = preu_p;
  }

  public String getCod(){
    return cod;
  }

  public String getTitol(){
    return titol;
  }

  public String getFormat(){
    return format;
  }

  public float getPreu_alquiler(){
    return preu_alquiler;
  }
}
```

::: tabs
== Exemples.java

```java
public class Exemples{
  public static void main(String[] args){
    //Creem dos articles
    Article article1 = new Article("001","Titol1","DVD",2.5f);
    Article article2 = new Article("002","Titol2","DVD",3f);

    System.out.println("Alquiler Art. " + article1.getCod() + ", 1 dia: " + article1.preu1());
    System.out.println("Alquiler Art. " + article1.getCod() + ", 2 dies: " + article1.preu2());
    System.out.println("Alquiler Art. " + article1.getCod() + ", 1 setmana: " + article1.preu_setmana());
    System.out.println("Alquiler Art. " + article2.getCod() + ", 1 dia: " + article2.preu1());
    System.out.println("Alquiler Art. " + article2.getCod() + ", 2 dies: " + article2.preu2());
    System.out.println("Alquiler Art. " + article2.getCod() + ", 1 setmana: " + article2.preu_setmana());
  }
}
```

Ara en Exemples.java utilitzem el constructor (al instanciar l'objecte amb new). Això permet instanciar l'objecte i definir atributs en una sola instrucció.

== Eixida

```plaintext
Alquiler Art. 001, 1 dia: 2.5
Alquiler Art. 001, 2 dies: 4.5
Alquiler Art. 001, 1 setmana: 12.5
Alquiler Art. 002, 1 dia: 3.0
Alquiler Art. 002, 2 dies: 5.3999996
Alquiler Art. 002, 1 setmana: 15.0
```

:::
::::

## 9.5. Exemple 5

Per a il·lustrar l'ús d'atributs constants i estàtics dins de la nostra classe Article, definirem tres atributs principals:

- La constant IVA.
- Un atribut compartit que comptabilitzarà el nombre d'instàncies que s'hagen definit fins llavors.
- Un atribut constant String, diferent per a cada objecte, que permeta identificar-los.

Definirem IVA com a estàtic i constant, i podrem accedir al seu valor sense necessitat d'haver creat cap objecte de la classe Article:

::: tabs
== Java

```java
public static final double IVA = 0.16;
```

:::

L'atribut privat amb el número d'instància és, en realitat, una variable global accessible per a tots els objectes de tipus Article:

::: tabs
== Java

```java
private static int numero = 0;
```

:::

I finalment, l'identificador constant de cada objecte s'indica amb un especificador de constant en la seua descripció.

::: tabs
== Java

```java
final String identificador;
```

:::

Es deixa com a exercici proposat fer aquests canvis i provar-ho.

## 9.6. Exemple 6

ArrayList d'Objectes

En lloc d'utilitzar arrays de mida fixa, fem servir `ArrayList`, que permet afegir i eliminar objectes dinàmicament durant l'execució del programa.

:::: tabs
=== Java

::: tabs
== Exemple

```java
import java.util.ArrayList;
ArrayList < Article > elsMeusArticles = new ArrayList < > ();
for(int i = 0; i < 10; i++) {
    elsMeusArticles.add(new Article("00" + i, "Art " + i, "DVD",
        (float)(Math.random() * 10)));
}
// Recorregut de la col·lecció
for(Article art: elsMeusArticles) {
    System.out.println(art.getCod() + " - " + art.getPreu_alquiler());
}
```

:::
::::

## 9.7. Exemple 7

Aquest exemple mostra com fer que un *setter* retorne un booleà per a indicar si l'operació ha tingut èxit. La classe gestora utilitza un bucle per a tornar a demanar les dades si la validació falla.

:::: tabs
=== Java

::: tabs
== Contenidor

```java
public class Contenidor {
    private int capacitat;
    private int contingut;

    public Contenidor(int capacitat) {
        this.capacitat = (capacitat > 0) ? capacitat : 1;
        this.contingut = 0;
    }

    // Setter amb retorn booleà per a validació
    public boolean actualitzaContingut(int litres) {
        if (litres > 0 && (this.contingut + litres <= this.capacitat)) {
            this.contingut += litres;
            return true; // Operació correcta
        }
        return false; // No hi ha espai o quantitat no vàlida
    }

    public int getContingut() {
        return contingut;
    }

    public int getCapacitat() {
        return capacitat;
    }

    public int getEspaiLliure() {
        return capacitat - contingut;
    }
}
```

::: tabs
== App

```java
import java.util.Scanner;

public class ProgramaPrincipal {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        Contenidor diposit = new Contenidor(10);
        boolean correcte = false;

        System.out.println("Capacitat del dipòsit: " + diposit.getCapacitat() + "L");

        // Bucle que repeteix la petició si el setter retorna 'false'
        while (!correcte) {
            System.out.print("Introdueix litres a afegir: ");
            int litres = sc.nextInt();

            if (diposit.actualitzaContingut(litres)) {
                System.out.println("OK: Litres afegits correctament.");
                correcte = true;
            } else {
                System.out.println("ERROR: No caben eixos litres.");
                System.out.println("Espai lliure actual: " + diposit.getEspaiLliure() + "L");
                System.out.println("Torna a intentar-ho...");
            }
        }

        System.out.println("Estat final: " + diposit.getContingut() + "L");
    }
}
```

:::
::::

:::: tabs
=== Java

::: tabs
== Article

**Nota sobre encapsulament**
Si declares els atributs com `private`, el programa principal no pot fer:

```java
diposit.contingut = 500;
```
:::
::::

> Això obliga a passar pel mètode `actualitzaContingut`, on hem programat la lògica que impedeix que el dipòsit sobreeixca.

## 9.8. Exemple 8

L'objectiu d'aquest exemple és estandarditzar la representació textual dels objectes sobrecarregant del mètode `toString()`.

:::: tabs
=== Java

::: tabs
== Article
```java
@Override
public String toString() {
    return "Article [Codi=" + cod + ", Títol=" + titol + ", Format=" + format + 
           ", Preu Base=" + preu_alquiler + "€]";
}
```
:::

::::