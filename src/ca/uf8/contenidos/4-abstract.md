# 3. Classes abstractes

Una **classe abstracta** és una classe que **declara l'existència d'alguns mètodes però no la seua implementació** (és a dir, conté la capçalera del mètode però no el seu codi). Els mètodes sense implementar són mètodes abstractes.

Les classes abstractes poden contindre:

- **Mètodes abstractes**: declaracions de mètodes sense codi associat. Són com una promesa que les subclasses han de complir implementant-ne el comportament concret.
- **Mètodes no abstractes**: mètodes amb implementació completa, que poden ser compartits per totes les subclasses.

::: warning ATENCIÓ
**Una classe abstracta no es pot instanciar**, però **sí es pot heretar**. Les subclasses hauran d'implementar obligatòriament el codi dels mètodes abstractes (llevat que també es declaren com a abstractes).
:::

Les classes abstractes són útils quan necessitem definir una forma generalitzada de classe que serà compartida per les subclasses, deixant part del codi en la classe abstracta (mètodes "normals") i delegant una altra part en les subclasses (mètodes abstractes).

::: warning ATENCIÓ
**No poden declarar-se constructors o mètodes estàtics abstractes.**
:::

La finalitat principal d'una classe abstracta és crear una classe heretada a partir d'ella. Per això, en la pràctica és obligatori aplicar herència (si no, la classe abstracta no serveix per a res). El cas contrari és una classe final, que no pot heretar-se com ja hem vist. Per tant, **una classe no pot ser abstract i final al mateix temps**.

En resum: 

| Característica | Classe abstracta (Java) |
|----------------|-------------------------|
| Relació        | **És un** |
| Instanciable   | No |
| Herència       | `extends` (només una classe) |
| Mètodes abstractes | Sí |
| Mètodes amb implementació | Sí |
| Obligació de les subclasses | Implementar els mètodes abstractes |
| `abstract` i `final` | No poden coexistir |
| `abstract static` | No existeixen |



Per exemple, aquesta classe abstracta `Treballador` te dos mètodes: un concret i un altre abstracte.

::: tabs
== Java

```java
public abstract class Treballador {

    protected String nom;

    // Constructor (sí que pot existir)
    public Treballador(String nom) {
        this.nom = nom;
    }

    // Mètode concret: compartit per totes les subclasses
    public void mostrarNom() {
        System.out.println("Treballador: " + nom);
    }

    // Mètode abstracte: cada subclasse l'ha d'implementar
    public abstract double calcularSou();
}

```

:::

Aquesta subclasse hereta de `Treballador` tots dos mètodes, però està obligada a implementar el codi del mètode abstracte. [TreballadorFix es un Treballador]

::: tabs
== Java

```java
public class TreballadorFix extends Treballador {

    private double souMensual;

    public TreballadorFix(String nom, double souMensual) {
        super(nom);
        this.souMensual = souMensual;
    }

    @Override
    public double calcularSou() {
        return souMensual;
    }
}

```

:::
Podem crear altra subclasse que herete també de `Treballador`. [TreballadorPerHores es un Treballador]


::: tabs
== Java

```java
public class TreballadorPerHores extends Treballador {

    private int hores;
    private double preuHora;

    public TreballadorPerHores(String nom, int hores, double preuHora) {
        super(nom);
        this.hores = hores;
        this.preuHora = preuHora;
    }

    @Override
    public double calcularSou() {
        return hores * preuHora;
    }
}


```

:::


Cada subclasse està obligada a implementar calcularSou().

---

Gràcies al polimorfisme, podem tractar diferents tipus de treballadors mitjançant una referència del tipus abstracte Treballador, executant-se en cada cas el comportament corresponent al tipus real de l’objecte.

::: tabs
== Java

```java
public class Main {
    public static void main(String[] args) {

        Treballador t1 = new TreballadorFix("Anna", 1800);
        Treballador t2 = new TreballadorPerHores("Marc", 120, 12.5);

        t1.mostrarNom();
        System.out.println("Sou: " + t1.calcularSou());

        t2.mostrarNom();
        System.out.println("Sou: " + t2.calcularSou());
    }
}

```
== Eixida

Treballador: Anna  
Sou: 1800.0  
Treballador: Marc  
Sou: 1500.0  

:::