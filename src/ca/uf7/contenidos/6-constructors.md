# 6. Constructors

Inicialitzar totes les variables d'una classe cada vegada que es crea un objecte pot resultar una tasca repetitiva i propensa a errors. Per facilitar aquesta operació, la majoria dels llenguatges orientats a objectes permeten definir un mètode especial anomenat constructor, que s'executa automàticament en el moment de la creació de l'objecte.

El constructor s'encarrega d'inicialitzar els atributs de la classe i de garantir que cada instància comence amb un estat vàlid. Aquesta inicialització centralitzada fa que el codi siga més net, més fàcil de mantenir i menys susceptible a oblits o incoherències.

>[!IMPORTANT] <strong>IMPORTANT!</strong>
>
>Un **constructor** és un mètode especial d'una classe que s'executa automàticament quan es crea un objecte. El seu objectiu és **inicialitzar l'objecte** i preparar-lo per a ser utilitzat.

:::: tabs
=== Java

En Java, un constructor no és més que **un mètode que té el mateix nom que la classe**. En general, quan es crea una instància d'una classe, no sempre es desitja passar els paràmetres d'inicialització en construir-la, per això existeix un tipus especial de constructors, que són els anomenats **constructors per defecte**.

::: warning ATENCIÓ
Un constructor per defecte inicialitza les variables d'instància amb **valors predeterminats**: `0` per a valors numèrics, `false` per a booleans, i `null` per a referències d'objectes.
:::

Tanmateix, **si es defineix qualsevol constructor**, Java **ja no afegeix** automàticament el constructor per defecte. Si es vol continuar disposant d'un constructor sense paràmetres, **cal definir-lo explícitament**.

::: tabs
== Exemple 1

```java
// Exemple 1: Classe sense cap constructor declarat
public class Cotxe {
    // Atributs
    private String marca;
    private int any;

    // No hi ha cap constructor declarat explícitament
    // Java crearà automàticament un constructor per defecte
    // equivalent a: public Cotxe() { super(); }

    public void mostrarInfo() {
        System.out.println("Marca: " + marca + ", Any: " + any);
    }

    public static void main(String[] args) {
        // Es pot fer servir el constructor per defecte que...
        // Java genera
        Cotxe c1 = new Cotxe();
        c1.mostrarInfo();  
        // com no hem inicialitzat els atributs, marca serà...
        // null i any serà 0
    }
}
```

== Exemple 2

```java
// Exemple 2: Classe amb constructor per defecte (sense paràmetres)...
// i constructor amb paràmetres
public class Cotxe {
    // Atributs
    private String marca;
    private int any;

    // Constructor per defecte
    public Cotxe() {
        this.marca = "Desconeguda";
        this.any = 0;
    }

    // Constructor amb paràmetres
    public Cotxe(String marca, int any) {
        this.marca = marca;
        this.any = any;
    }

    public void mostrarInfo() {
        System.out.println("Marca: " + marca + ", Any: " + any);
    }

    public static void main(String[] args) {
        // Utilitza el constructor per defecte
        Cotxe c1 = new Cotxe();
        c1.mostrarInfo();  
        // Sortida: Marca: Desconeguda, Any: 0

        // Utilitza el constructor amb paràmetres
        Cotxe c2 = new Cotxe("Toyota", 2021);
        c2.mostrarInfo();  
        // Sortida: Marca: Toyota, Any: 2021
    }
}
```

== Exemple 3

```java
// Exemple 3: Classe amb diversos constructors sobrecarregats
public class Persona {
    private String nom;
    private int edat;
    private String ocupacio;

    // Constructor sense paràmetres (per defecte)
    public Persona() {
        this.nom = "Anònim";
        this.edat = 0;
        this.ocupacio = "Desconeguda";
    }

    // Constructor amb paràmetres mínims
    public Persona(String nom, int edat) {
        this.nom = nom;
        this.edat = edat;
        this.ocupacio = "Desconeguda";
    }

    // Constructor amb tots els paràmetres
    public Persona(String nom, int edat, String ocupacio) {
        this.nom = nom;
        this.edat = edat;
        this.ocupacio = ocupacio;
    }

    public void mostrarInfo() {
        System.out.println("Nom: " + nom + ", Edat: " + edat
        + ", Ocupació: " + ocupacio);
    }

    public static void main(String[] args) {
        Persona p1 = new Persona();
        p1.mostrarInfo();  
        // Sortida: Nom: Anònim, Edat: 0, Ocupació: Desconeguda

        Persona p2 = new Persona("Clara", 25);
        p2.mostrarInfo();  
        // Sortida: Nom: Clara, Edat: 25, Ocupació: Desconeguda

        Persona p3 = new Persona("David", 30, "Enginyer");
        p3.mostrarInfo();  
        // Sortida: Nom: David, Edat: 30, Ocupació: Enginyer
    }
}
```

:::

::: warning **ATENCIÓ**
Existeix la referència `this`, que apunta a la instància que anomena al mètode, i sempre està accessible, és utilitzat per les funcions membre per a accedir a les dades de l'objecte.

Més informació sobre `this` en el següent [enllaç](https://ggpro-java.github.io/UF7/14-add_this.html)
:::

::::
