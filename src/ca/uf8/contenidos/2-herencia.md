# 1. Herència

## 1.1 Introducció

L'herència és una de les capacitats més importants i distintives de la POO. Consisteix en derivar o **estendre una classe nova a partir d'una altra ja existent de manera que la classe nova hereta tots els atributs i mètodes de la classe ja existent**.

A la classe ja existent se la denomina **superclasse**, classe base o classe pare. A la nova classe se la denomina **subclasse**, classe derivada o classe filla.

::: warning ATENCIÓ
Quan derivem (o estenem) una nova classe, aquesta hereta totes les dades i mètodes membre de la classe existent.
:::

Per exemple, si tenim un programa que treballarà amb alumnes i professors, aquests tindran atributs comuns com el nom, DNI, adreça o telèfon. Però cadascun d'ells tindran atributs específics que no tinguen els altres. Per exemple els i les alumnes tindran el número d'expedient, el cicle i curs que cursen i les seues notes; per la seua part els i les docents tindran el codi de professor, el departament al qual pertanyen, els mòduls que imparteixen i el seu horari. Per tant, en aquest cas el millor és declarar una classe *Persona* amb els atributs comuns (Nom, DNI, Adreça, Telèfon) i dos subclasses *Alumne* i *Professor* que hereten de Persona (a més de tindre els seus propis atributs). És important remarcar que Alumne i Professor també heretaran tots els mètodes de Persona.

![Esquema d'una superclasse i subclasses](/img/uf8/esquema_superclasse.png)

::: tabs
== Java

A Java s'utilitza la paraula reservada **`extends`** per a indicar herència:

```java
public class Alumne extends Persona {
...
}
public class Professor extends Persona {
...
}
```

:::

## 1.2 Constructors de classes derivades

En la programació orientada a objectes, quan una classe deriva d'una altra, el constructor de la subclasse ha de garantir que també s'inicialitzen correctament els atributs heretats de la superclasse, a més dels seus propis. Per aconseguir-ho, normalment es proporciona un mecanisme per **cridar al constructor de la classe base des del constructor de la classe derivada**. Aquesta crida s'ha de fer generalment com a **primera instrucció dins del constructor de la subclasse** i és necessària si la classe base requereix paràmetres per a ser inicialitzada.

:::: tabs
=== Java

En el cas concret de Java, aquesta crida es realitza mitjançant la paraula reservada `super()`, a la qual es passen com a arguments els valors necessaris pel constructor de la superclasse. Si no es crida explícitament a `super()`, el compilador intentarà cridar automàticament al constructor per defecte de la classe base (és a dir, un constructor sense paràmetres). Si aquest constructor per defecte no existeix, es produirà un error de compilació.

::: tabs
== Superclasse Persona

```java
public class Persona {
    protected String nom;

    public Persona(String nom) {
        this.nom = nom;
    }
}
```

== Subclasse Alumne

```java
public class Alumne extends Persona {
    private String grup;

    public Alumne(String nom, String grup) {
        super(nom);         // Crida al constructor de Persona
        this.grup = grup;   // Inicialització pròpia
    }
}
```

== Subclasse Professor

```java
public class Professor extends Persona {
    private String departament;

    public Professor(String nom, String departament) {
        super(nom);               // Crida al constructor de Persona
        this.departament = departament;
    }
}
```

:::
::::

## 1.3 Mètodes heretats i sobreescrits

Hem vist que una subclasse hereta els atributs i mètodes de la superclasse; a més, es poden incloure nous atributs i nous mètodes. D'altra banda, pot ocórrer que algun dels mètodes que existeixen en la superclasse no ens valguen en la subclasse (tal com estan programats) i necessitem adequar-los a les característiques de la subclasse. Això pot fer-se mitjançant la sobreescriptura de mètodes.

**Un mètode està sobreescrit quan es programa de nou en la classe derivada**. Per exemple, el mètode *mostrarPersona()* de la classe *Persona* el necessitaríem sobreescriure en les classes *Alumne* i *Professor* per a mostrar també els nous atributs.

El mètode sobreescrit en la classe derivada podria reutilitzar el mètode de la classe base, si és necessari, i a continuació imprimir els nous atributs.

::: tabs
== Java

En Java podem accedir a mètodes definits en la classe base mitjançant `super.mètode()`.  
El mètode mostrarPersona sobreescrit en les classes derivades podria ser:

```java
super.mostrarPersona(); // Anomenada al mètode de la classe base
System.out.println(…); // Imprimim els atributs exclusius de la classe derivada
```

:::

## 1.4 Classes i mètodes finals

En el paradigma orientat a objectes, de vegades és necessari impedir que algunes classes s'hereten o que certs mètodes es sobreescriguen. Per a això, es fa servir el concepte de "finalització", que permet marcar elements com a no extensibles o no modificables.

**Classes finals**  

- Una **classe final és aquella que no es pot estendre ni heretar**. Quan una classe es declara com a final, s'assegura que cap altra classe no puga crear-ne una subclasse.
- Aquest recurs s'utilitza quan es vol garantir que la lògica interna o la interfície d'una classe no siga alterada per cap derivació, per motius de seguretat, rendiment o coherència del disseny.

**Mètodes finals**  

- Un **mètode final és aquell que no pot ser redefinit en cap subclasse**. La seua implementació roman inalterable, fins i tot si la classe on resideix es pot heretar.
- Declarar un mètode com a final ajuda a mantindre la coherència d'una funcionalitat crítica i a evitar canvis involuntaris per part de les subclasses.

::: tabs
== Java

En Java, el concepte de "final" està integrat com a paraula reservada i s'aplica tant a classes com a mètodes i atributs:

1. **Classes finals**
    - Sintaxi:

    ```java
    public final class NomDeClasse { … }
    ```

   - Efecte: Ninguna altra classe podrà heretar de NomDeClasse. Si s'intenta fer-ho, el compilador donarà error.

2. **Mètodes finals**

    - Sintaxi (dins d'una classe que no siga final):

    ```java
    public final void metodeExemple() { … }
    ```

    - Efecte: Cap subclasse no podrà redefinir metodeExemple(). Si una subclasse intenta fer-ho, el compilador detectarà la incompatibilitat de signatura per a un mètode final.

3. **Atributs finals**

    - Sintaxi:

    ```java
    public final int CONSTANT;
    // o bé
    public static final int CONSTANT = 100;
    ```

   - Efecte: Les variables declarades com a final s'inicialitzen una sola vegada (normalment al declarar-les o dins del constructor) i no poden ser modificades durant la vida de l'objecte o, si són estàtiques, de la classe.

>[!IMPORTANT]<strong>IMPORTANT!</strong>
>En Java, per tant, la paraula `final` fa efectiu el concepte de "no extensible" per a classes, "no sobreescrivible" per a mètodes i "no reassignable" per a variables, garantint així la fermesa del disseny i la integritat de les dades.

:::

## 1.5 Accés a membres derivats

Encara que una subclasse inclou tots els membres de la seua superclasse, no podrà accedir als que estiguen declarats com a privats. Si en algun exemple intentàrem accedir des de la classe derivada a un atribut privat (definit a la classe base), obtindríem un error de compilació.

Per permetre que els atributs siguen visibles només per a les subclasses (i no per a cap altra classe), els podem declarar com a protegits. D'aquesta manera, aquests membres quedaran accessibles únicament des de la classe original i les classes que en deriven, però mai des d'altres parts del programa.

>[!IMPORTANT]<strong>IMPORTANT!</strong>
>Un **atribut protegit** és un membre d'una classe al qual només poden accedir:
>
>- La mateixa classe on està definit.
>- Les classes que en deriven (subclasses).
>
>En canvi, no és accessible des de classes independents que no formen part de la jerarquia d'herència. Això permet compartir dades amb subclasses, però alhora mantindre-les ocultes per a la resta del codi.

## 1.6 Exemple 3

En aquest exemple crearem les classe **Persona** i les seues classes heretades: **Alumne** i **Professor**. En la classe Persona crearem el constructor, un mètode per a mostrar els atributs i els *getters* i *setters*. **Les classes Alumne i Professor heretaran de la classe Persona** i cadascuna tindrà els seus propis atributs, un constructor que anomenarà també al constructor de la classe Persona, un mètode per a mostrar els seus atributs, que també cridarà al mètode de Persona i els getters i setters. És interessant veure com **s'ha sobreescrit el mètode mostrarPersona() en les classes heretades**. El mètode es diu igual i crida al mètode de mostrarPersona() de Persona. En la crida del mètode principal, tant l'objecte **a** (Alumne) com l'objecte **profe** (Professor) poden fer ús del mètode mostrarPersona().

:::: tabs
=== Java

::: tabs
== Persona

```java

public class Persona {

    private String nom;
    private String dni;
    private String adreca;
    private int telefon;

    public Persona(String nom, String dni, String adreca, int telefon) {
        this.nom = nom;
        this.dni = dni;
        this.adreca = adreca;
        this.telefon = telefon;
    }

    public void mostrarPersona() {
        System.out.println("Nom: " + this.nom);
        System.out.println("DNI: " + this.dni);
        System.out.println("Adreça: " + this.adreca);
        System.out.println("Telèfon: " + this.telefon);
    }

    public String getNom() {
        return nom;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }

    public String getDni() {
        return dni;
    }

    public void setDni(String dni) {
        this.dni = dni;
    }

    public String getAdreca() {
        return adreca;
    }

    public void setAdreca(String adreca) {
        this.adreca = adreca;
    }

    public int getTelefon() {
        return telefon;
    }

    public void setTelefon(int telefon) {
        this.telefon = telefon;
    }
}

```

== Alumne

```java
import java.util.ArrayList;

public class Alumne extends Persona {

    private int expedient;
    private String cicle;
    private int curs;
    private ArrayList<Integer> notes;

    public Alumne(String nom, String dni, String adreca, int telefon,
            int expedient, String cicle, int curs, ArrayList<Integer> notes) {

        super(nom, dni, adreca, telefon);

        this.expedient = expedient;
        this.cicle = cicle;
        this.curs = curs;
        this.notes = notes;
    }

    public void mostrarPersona() {
        super.mostrarPersona();

        System.out.println("Núm. expedient: " + this.expedient);
        System.out.println("Cicle: " + this.cicle);
        System.out.println("Curs: " + this.curs);
        System.out.println("Notes:");

        for (int nota : this.notes) {
            System.out.println("Nota: " + nota);
        }
    }

    public int getExpedient() {
        return expedient;
    }

    public void setExpedient(int expedient) {
        this.expedient = expedient;
    }

    public String getCicle() {
        return cicle;
    }

    public void setCicle(String cicle) {
        this.cicle = cicle;
    }

    public int getCurs() {
        return curs;
    }

    public void setCurs(int curs) {
        this.curs = curs;
    }

    public ArrayList<Integer> getNotes() {
        return notes;
    }

    public void setNotes(ArrayList<Integer> notes) {
        this.notes = notes;
    }
}

```

== Professor

```java

import java.util.ArrayList;

public class Professor extends Persona {

    private int codi;
    private String departament;
    private ArrayList<String> moduls;
    private String horari;

    public Professor(String nom, String dni, String adreca, int telefon,
            int codi, String departament, ArrayList<String> moduls, String horari) {

        super(nom, dni, adreca, telefon);

        this.codi = codi;
        this.departament = departament;
        this.moduls = moduls;
        this.horari = horari;
    }

    public void mostrarPersona() {
        super.mostrarPersona();

        System.out.println("Codi: " + this.codi);
        System.out.println("Departament: " + this.departament);
        System.out.println("Horari: " + this.horari);
        System.out.println("Mòduls:");

        for (String modul : this.moduls) {
            System.out.println("Modul: " + modul);
        }
    }

    public int getCodi() {
        return codi;
    }

    public void setCodi(int codi) {
        this.codi = codi;
    }

    public String getDepartament() {
        return departament;
    }

    public void setDepartament(String departament) {
        this.departament = departament;
    }

    public ArrayList<String> getModuls() {
        return moduls;
    }

    public void setModuls(ArrayList<String> moduls) {
        this.moduls = moduls;
    }

    public String getHorari() {
        return horari;
    }

    public void setHorari(String horari) {
        this.horari = horari;
    }
}

```

== Programa Principal

```java
import java.util.ArrayList;

public class App {

    public static void main(String[] args) {

        Persona p = new Persona("Pepe", "00000000T", "C/ Colón", 666666666);
        System.out.println("Mostrem una persona");
        p.mostrarPersona();

        ArrayList<Integer> notes = new ArrayList<>();
        notes.add(7);
        notes.add(9);
        notes.add(6);

        Alumne a = new Alumne("Maria", "12345678Z", "P/ Llibertat", 111111111, 1, "DAM", 1, notes);

        System.out.println("\nMostrem un alumne");
        a.mostrarPersona();

        ArrayList<String> moduls = new ArrayList<>();
        moduls.add("Programació");
        moduls.add("Llenguatges de marques");
        moduls.add("Entorns de desenvolupament");

        Professor profe = new Professor("Joan", "00000001R", "C/ Major", 222222222, 3, "Informàtica", moduls, "Matins");

        System.out.println("\nMostrem un professor");
        profe.mostrarPersona();
    }
}
```

== Eixida

![Eixida exemple 3](/img/uf8/eixida.jpg)
