# Solucions UF8 - Programació Orientada a Objectes II

## Exercicis - Nivell bàsic

### 🧠 Exercici 1

El Repte de la Flota Intermodal

L'empresa de transport **Trans-Java S.A.** s'enfronta a un caos organitzatiu. Actualment, gestionen la seua flota de manera desordenada i necessiten un sistema que reflectisca la realitat dels seus actius.

Com a responsable del disseny, se't demana que transformes la següent descripció en un **model de codi eficient**.

---

#### La Naturalesa dels Actius

L'empresa treballa amb diverses màquines, però totes comparteixen un **ADN comú**:

- Matrícula  
- Marca  
- Model  

No obstant això, a les oficines **ningú pot comprar un "Vehicle" a seques**; el vehicle és un **concepte teòric** que només existeix quan es materialitza en un model real.

> Has de reflectir aquesta **impossibilitat de creació directa** en el teu disseny.

---

#### L'Especialització de la Maquinària

Cada actiu té una funcionalitat específica que el fa únic al mercat:

- 🚛 **Camions**  
  Es defineixen pel seu **potencial de càrrega** (*pes màxim*).

- 🏍️ **Motos**  
  Es distingeixen per la seua **capacitat legal de circular per vies ràpides** (*autopistes*).

- 🚗 **Cotxes**  
  Es valoren pel seu **volum de passatgers** (*nombre de places*).

#### Requisits importants

- En el moment de crear un nou actiu:
  - Ha de rebre la seua **identitat general**
  - I també la seua **característica particular**
- Per a simular dades reals en aquesta fase de proves:
  - Els valors específics (*pes, places, etc.*)  
    > **s'han de generar aleatòriament** en el moment de la creació

---

#### El Comportament Polimòrfic

L'aplicació ha de ser capaç de **llistar tota la flota de manera unificada**.

Quan es demane a la flota que *mostre la seua informació*:

1. Cada element ha de declarar:
   - Qui és (dades generals)
2. I immediatament després:
   - Ha de manifestar la seua **característica única**
     - pes
     - places
     - accés a autopista

> No volem un codi ple de comprovacions manuals de tipus (`instanceof` per tot arreu).  
 Volem que **cada objecte sàpiga com actuar segons la seua pròpia naturalesa**.

---

#### Marcatge de Seguretat

Alguns vehicles transporten **mercaderies perilloses**.

El sistema ha de poder:

- Identificar aquests objectes **ràpidament en temps d'execució**
- Sense afegir-los cap mètode nou

>Aquesta característica serveix únicament per a **"etiquetar-los"** davant una possible inspecció.

#### 📦 Codi Java
:::: tabs
=== Java

::: tabs
== Vehicles

```java

/* ===== CLASSE ABSTRACTA BASE ===== */
abstract class Vehicle {
    protected final String matricula;
    protected final String marca;
    protected final String model;

    protected Vehicle(String matricula, String marca, String model) {
        this.matricula = matricula;
        this.marca = marca;
        this.model = model;
    }

    // Cada subclasse ha de definir com es mostra
    public abstract void mostrarInfo();
}

```
== MPerillosa

```java
/* ===== Interfície buida  ===== */
interface MercaderiaPerillosa {}
```
== Aleatoris

```java
/* ===== UTILITAT D'ALEATORIS ===== */

import java.util.Random;
final class Aleatoris {
    private static final Random R = new Random();
    private Aleatoris() {}

    static int pesMaxKg() {          // 3500 .. 40000
        return 3500 + R.nextInt(40000 - 3500 + 1);
    }

    static int places() {            // 2 .. 7
        return 2 + R.nextInt(6);
    }

    static boolean boolea() {
        return R.nextBoolean();
    }
}
```

== Camió

```java
/* ===== SUBCLASSES ===== */
class Camio extends Vehicle {
    protected final int pesMaxKg;

    public Camio(String matricula, String marca, String model) {
        super(matricula, marca, model);
        this.pesMaxKg = Aleatoris.pesMaxKg();
    }

    @Override
    public void mostrarInfo() {
        System.out.println(matricula + " - " + marca + " " + model + " (Camió)");
        System.out.println("  Pes màxim: " + pesMaxKg + " kg");
    }
}
```
== CPerillos

```java
class CamioPerillos extends Camio implements MercaderiaPerillosa {
    public CamioPerillos(String matricula, String marca, String model) {
        super(matricula, marca, model);
    }
}
```

== Moto

```java
class Moto extends Vehicle {
    private final boolean potAutopista;

    public Moto(String matricula, String marca, String model) {
        super(matricula, marca, model);
        this.potAutopista = Aleatoris.boolea();
    }

    @Override
    public void mostrarInfo() {
        System.out.println(matricula + " - " + marca + " " + model + " (Moto)");
        System.out.println("  Accés a autopista: " + (potAutopista ? "Sí" : "No"));
    }
}
```
== Cotxe

```java
class Cotxe extends Vehicle {
    private final int places;

    public Cotxe(String matricula, String marca, String model) {
        super(matricula, marca, model);
        this.places = Aleatoris.places();
    }

    @Override
    public void mostrarInfo() {
        System.out.println(matricula + " - " + marca + " " + model + " (Cotxe)");
        System.out.println("  Places: " + places);
    }
}
```

== TransJavaApp

```java
/* ===== PROGRAMA PRINCIPAL ===== */
public class TransJavaApp {
    import java.util.ArrayList;
    public static void main(String[] args) {
        
        ArrayList<Vehicle> flota = new ArrayList<>();
        flota.add(new Camio("1234-ABC", "Volvo", "FH"));
        flota.add(new CamioPerillos("7777-HZD", "MAN", "TGX"));
        flota.add(new Moto("5555-MOT", "Yamaha", "MT-07"));
        flota.add(new Cotxe("9999-CAR", "SEAT", "Leon"));

        for (Vehicle v : flota) {
            v.mostrarInfo(); // polimorfisme
            if (v instanceof MercaderiaPerillosa) {
                System.out.println("  [ALERTA] Mercaderia perillosa");
            }
            System.out.println("----");
        }
    }
}
```


:::
::::

### 🧠 Exercici 2

Sistema de Control d'Actius **"ByteMaster"**

La tenda d'informàtica **ByteMaster** necessita un nou motor de gestió per al seu inventari.  
Com a arquitecte/a del sistema, has de dissenyar una estructura de classes que siga **escalable**, **segura** i que permeta gestionar el hardware de manera **intel·ligent**.

---

#### L'ADN del Producte (Identitat i Immutabilitat)

Tot article del magatzem comparteix una naturalesa comuna:

- **Codi identificatiu**
- **Nom**
- **Preu unitari**

No obstant això, el concepte de **Producte** és **abstracte**:  
> no es pot vendre un producte genèric, només **components reals**.

##### Requisits clau

- El **codi identificatiu** s'ha d'assignar en el moment de la creació i:
  - ha de ser **immutable** (no es podrà modificar mai)
- Cada instància ha de ser capaç de generar un **informe complet** amb les seues dades:
  - Però cada tipus de component mostrarà **informació diferent** (polimorfisme)

---

#### L'Especialització del Hardware

L'empresa treballa actualment amb tres línies de productes, cadascuna amb els seus propis paràmetres tècnics:

- 💾 **Unitats d'Emmagatzematge (`DiscDur`)**
  - Capacitat (**GB**)
  - Tipus de tecnologia (**HDD / SSD**)
  - Velocitat de transferència

- 🎮 **Unitats de Processament Gràfic (`GPU`)**
  - Memòria **VRAM**
  - Predisposició per a tasques d'**Intel·ligència Artificial**
  - Capacitat d’**overclocking**

- 🧠 **Unitats Centrals (`CPU`)**
  - Nombre de **nuclis**
  - Freqüència de rellotge (**GHz**)
  - Admet ajustos de rendiment (**overclock**)

---

#### Contractes de Capacitat (Interfícies)

Més enllà de *què són*, els dispositius es defineixen per *què saben fer*.

Has de dissenyar un sistema on certs components puguen complir amb els següents **contractes d’habilitat**, independentment de la seua posició a la jerarquia:

- 🧼 **Manteniment**
  - Alguns dispositius permeten ser **Formatejats**

- 🚀 **Alt Rendiment**
  - Certs components permeten fer **Overclock**

- 🤖 **Càlcul Avançat**
  - Capacitat per **Accelerar IA** o **Calcular velocitat de procés**

##### Nota de disseny
Un mateix component pot tindre **diverses habilitats** alhora.  
Exemple: una **GPU** pot fer **overclock** i **accelerar IA** simultàniament.

---

####  El Motor de Processament Polimòrfic

Crea un programa principal que gestione un **catàleg unificat** (una sola llista).

El motor ha de recórrer tot l'inventari i:

- Executar el **mètode d'informació** de cada producte de forma automàtica (polimorfisme)
- Detectar, en temps d'execució, quines habilitats especials té cada objecte:
  - si pot **formatejar**
  - si pot **accelerar IA**
  - si pot fer **overclock**
  - etc.
- I **activar-les** per comprovar el funcionament

---

#### L'Auditoria d'Eficiència Energètica

Com a nova normativa verda, el sistema ha d'incorporar un mecanisme per avaluar l’eficiència.

##### Consum elèctric
- Tots els components de processament (**CPU i GPU**) tindran un consum elèctric:
  - entre **200W i 700W**
  - generat **aleatòriament**

##### Regles d’eficiència
Implementa una lògica que determine si el dispositiu és **"Eficient"**:

-  **CPU eficient** si consumeix **menys de 100W per cada nucli**
-  **GPU eficient** si consumeix **menys de 50W per cada GB de VRAM**


#### 📦 Codi Java
:::: tabs
=== Java

::: tabs
== Interficies

```java
/* =========================
   INTERFÍCIES (HABILITATS)
   ========================= */
interface Formatejable {
    void formatejar();
}

interface Overclockable {
    void ferOverclock();
}

interface IAAccelerable {
    void accelerarIA();
}

interface VelocitatProcesCalculable {
    double calcularVelocitatProces(); // indicador simple (no real)
}


```
::: tabs
== Aleatoris

```java
/* =========================
   UTILITAT D'ALEATORIS
   ========================= */
import java.util.Random;

final class Aleatoris {
    private static final Random R = new Random();
    private Aleatoris() {}

    static int entre(int min, int max) { // inclòs
        return min + R.nextInt(max - min + 1);
    }

    static boolean boolea() {
        return R.nextBoolean();
    }

    static double entreDouble(double min, double max, int decimals) {
        double v = min + (max - min) * R.nextDouble();
        double factor = Math.pow(10, decimals);
        return Math.round(v * factor) / factor;
    }
}
```

== Producte

```java
/* =========================
   BASE ABSTRACTA: PRODUCTE
   ========================= */
abstract class Producte {
    private final String codi;      // immutable
    private final String nom;
    private final double preuUnitari;

    protected Producte(String codi, String nom, double preuUnitari) {
        this.codi = codi;
        this.nom = nom;
        this.preuUnitari = preuUnitari;
    }

    public final String getCodi() { return codi; }
    public final String getNom() { return nom; }
    public final double getPreuUnitari() { return preuUnitari; }

    // Polimorfisme: cada producte genera el seu informe complet
    public abstract void informe();
}
```

== CP

```java
/* ==========================================
   BASE PER A PROCESSAMENT (CPU/GPU) + ENERGIA
   ========================================== */
abstract class ComponentProcessament extends Producte {
    private final int consumW; // 200..700 aleatori

    protected ComponentProcessament(String codi, String nom, double preuUnitari) {
        super(codi, nom, preuUnitari);
        this.consumW = Aleatoris.entre(200, 700);
    }

    public final int getConsumW() { return consumW; }

    // Cada tipus (CPU/GPU) decideix la regla d'eficiència
    public abstract boolean esEficient();
}
```

== Disc dur

```java
/* =========================
   DISC DUR
   ========================= */
class DiscDur extends Producte implements Formatejable {
    enum Tecnologia { HDD, SSD }

    private final int capacitatGB;
    private final Tecnologia tecnologia;
    private final int velocitatMBs;

    public DiscDur(String codi, String nom, double preuUnitari,
                   int capacitatGB, Tecnologia tecnologia, int velocitatMBs) {
        super(codi, nom, preuUnitari);
        this.capacitatGB = capacitatGB;
        this.tecnologia = tecnologia;
        this.velocitatMBs = velocitatMBs;
    }

    @Override
    public void informe() {
        System.out.println("[" + getCodi() + "] " + getNom() + " - " + getPreuUnitari() + "€ (DiscDur)");
        System.out.println("  Capacitat: " + capacitatGB + " GB");
        System.out.println("  Tecnologia: " + tecnologia);
        System.out.println("  Velocitat transferència: " + velocitatMBs + " MB/s");
    }

    @Override
    public void formatejar() {
        System.out.println("  -> Formatejant disc... OK");
    }
}
```

== GPU

```java
/* =========================
   GPU
   ========================= */
class GPU extends ComponentProcessament implements Overclockable, IAAccelerable {
    private final int vramGB;
    private final boolean preparadaIA;
    private final boolean permetOverclock;

    public GPU(String codi, String nom, double preuUnitari,
               int vramGB, boolean preparadaIA, boolean permetOverclock) {
        super(codi, nom, preuUnitari);
        this.vramGB = vramGB;
        this.preparadaIA = preparadaIA;
        this.permetOverclock = permetOverclock;
    }

    public int getVramGB() { return vramGB; }

    // GPU eficient si consumeix menys de 50W per cada GB de VRAM
    @Override
    public boolean esEficient() {
        return getConsumW() < 50 * vramGB;
    }

    @Override
    public void informe() {
        System.out.println("[" + getCodi() + "] " + getNom() + " - " + getPreuUnitari() + "€ (GPU)");
        System.out.println("  VRAM: " + vramGB + " GB");
        System.out.println("  Preparada per IA: " + (preparadaIA ? "Sí" : "No"));
        System.out.println("  Overclock: " + (permetOverclock ? "Permés" : "No"));
        System.out.println("  Consum: " + getConsumW() + " W");
        System.out.println("  Eficiència: " + (esEficient() ? "Eficient" : "No eficient"));
    }

    @Override
    public void accelerarIA() {
        if (!preparadaIA) {
            System.out.println("  -> IA: aquesta GPU no està optimitzada per IA.");
            return;
        }
        System.out.println("  -> Accelerant tasques d'IA... OK");
    }

    @Override
    public void ferOverclock() {
        if (!permetOverclock) {
            System.out.println("  -> Overclock: bloquejat pel fabricant.");
            return;
        }
        System.out.println("  -> Aplicant overclock a la GPU... OK");
    }
}
```

== CPU

```java
/* =========================
   CPU
   ========================= */
class CPU extends ComponentProcessament implements Overclockable, VelocitatProcesCalculable {
    private final int nuclis;
    private final double freqGHz;
    private final boolean admetOverclock;

    public CPU(String codi, String nom, double preuUnitari,
               int nuclis, double freqGHz, boolean admetOverclock) {
        super(codi, nom, preuUnitari);
        this.nuclis = nuclis;
        this.freqGHz = freqGHz;
        this.admetOverclock = admetOverclock;
    }

    public int getNuclis() { return nuclis; }

    // CPU eficient si consumeix menys de 100W per cada nucli
    @Override
    public boolean esEficient() {
        return getConsumW() < 100 * nuclis;6-exemples
    }

    @Override
    public void informe() {
        System.out.println("[" + getCodi() + "] " + getNom() + " - " + getPreuUnitari() + "€ (CPU)");
        System.out.println("  Nuclis: " + nuclis);
        System.out.println("  Freqüència: " + freqGHz + " GHz");
        System.out.println("  Overclock: " + (admetOverclock ? "Permés" : "No"));
        System.out.println("  Consum: " + getConsumW() + " W");
        System.out.println("  Eficiència: " + (esEficient() ? "Eficient" : "No eficient"));
        System.out.println("  Velocitat procés (indicador): " + calcularVelocitatProces());
    }

    @Override
    public void ferOverclock() {
        if (!admetOverclock) {
            System.out.println("  -> Overclock: no suportat.");
            return;
        }
        System.out.println("  -> Aplicant overclock a la CPU... OK");
    }

    @Override
    public double calcularVelocitatProces() {
        // Indicador simple: nuclis * freq (no és una mesura real)
        return Math.round((nuclis * freqGHz) * 100.0) / 100.0;
    }
}
```

== ByteMasterApp

```java
/* =========================
   PROGRAMA PRINCIPAL
   ========================= */
import java.util.ArrayList;
public class ByteMasterApp {
    public static void main(String[] args) {

        ArrayList<Producte> inventari = new ArrayList<>();

        // DiscDur (exemple)
        inventari.add(new DiscDur(
                "DD-001", "KingByte 1TB", 79.99,
                Aleatoris.entre(256, 4000),
                Aleatoris.boolea() ? DiscDur.Tecnologia.SSD : DiscDur.Tecnologia.HDD,
                Aleatoris.entre(120, 3500)
        ));

        // GPU (exemple)
        inventari.add(new GPU(
                "GPU-010", "GraphX Pro", 499.90,
                Aleatoris.entre(6, 24),
                Aleatoris.boolea(),
                Aleatoris.boolea()
        ));

        // CPU (exemple)
        inventari.add(new CPU(
                "CPU-777", "ZenByte X", 329.00,
                Aleatoris.entre(4, 16),
                Aleatoris.entreDouble(2.8, 5.6, 2),
                Aleatoris.boolea()
        ));

        // Motor polimòrfic + detecció d'habilitats
        for (Producte p : inventari) {
            p.informe(); // polimorfisme (cada classe mostra informació diferent)

            if (p instanceof Formatejable) {
                ((Formatejable) p).formatejar();
            }

            if (p instanceof IAAccelerable) {
                ((IAAccelerable) p).accelerarIA();
            }

            if (p instanceof Overclockable) {
                ((Overclockable) p).ferOverclock();
            }

            if (p instanceof VelocitatProcesCalculable) {
                double v = ((VelocitatProcesCalculable) p).calcularVelocitatProces();
                System.out.println("  -> Velocitat procés (recalcule): " + v);
            }

            System.out.println("----");
        }
    }
}
```


:::
::::

### 🧠 Exercici 3

L'associació *Vida i Natura* és una organització sense ànim de lucre que es dedica al rescat, acollida i adopció d’animals domèstics i exòtics. Disposa de diverses instal·lacions, com ara una zona d’estada per a mamífers, una àrea especial per a aus i una petita consulta veterinària. Com que el nombre d’animals atesos ha crescut molt en els últims mesos, el personal ha decidit informatitzar el registre i el seguiment dels animals. Per a fer-ho, cal desenvolupar una **aplicació que permeta gestionar els animals allotjats en el refugi**.

Els animals que s’atenen habitualment són de **tres espècies**: **gossos**, **gats** i **ocells**. Cada animal té assignat un **identificador únic** (assignat automàticament en incorporar-se al refugi), un **nom**, una **edat** (establida segons la valoració veterinària en el moment de l’entrada), i un indicador del seu estat actual de **vacunació** (poden estar al dia en les vacunes o poden no estar-ho).

Cal tindre en compte que **els gossos i els ocells** són molt diferents uns d'altres en funció de la **raça** a la qual pertanyen i, per tant, caldrà afegir aquesta informació al seu registre. Açò no ocorre amb els gats (perquè, a més a més, la seua raça és complexa de determinar).

Pel seu compte, hi ha **gats** que presenten **problemes de conducta** (agressivitat i hiperactivitat, entre d'altres), cosa que s'haurà de tindre en compte si es volguera adoptar. En aquest sentit, pel que fa als **ocells**, **no tots podran ser adoptats**, perquè alguns són de races salvatges i la legislació en matèria animal ho prohibeix (per a simplificar, aquest serà un paràmetre independent de la raça).

Per últim, dels **ocells** cal tindre en compte la seua **capacitat de vol**, ja que alguns (ja siga per la raça o per alguna condició particular) no poden. Açò es té en compte a l'hora d'entrenar-los per a algunes exhibicions de vol que es porten a cap en el refugi.

A més, cada espècie d’animal pot fer activitats concretes:

- Totes les espècies registrades (gossos, gats i ocells) tenen opció a ser adoptats, però **en un futur podria arribar al refugi alguna nova espècie que** siga 100% salvatge i **no siga apta per a adoptar en ningun cas**. A més, de les espècies actuals, **cal tindre en compte**:
  - Un animal només es pot **adoptar** si té **menys de 10 anys** i està **vacunat**.
  - Els **gossos i els gats** poden ser adoptats únicament amb el compliment de l'**anterior requeriment**.
  - Els **ocells** podran ser adoptats només si són d'una **raça no salvatge**.
  - **Ser adoptat implicarà eixir del refugi**, i mostrar un missatge per pantalla amb un acomiadament.
- Els **gats** poden participar en **sessions de teràpia** amb humans, sempre que **no tinguen problemes de conducta**. Quan un gat du a terme una sessió de teràpia, el programa ho indicarà.
- Els **ocells** poden fer **exhibicions de vol** durant les jornades de portes obertes, sempre que tinguen **capacitat de vol** i que **no siguen salvatges**.

El programa mostrarà un menú que permetrà:

- Mostrar la informació bàsica de tots els animats del refugi (codi, espècie, nom i edat).
- Mostrar tota la informació d'un animal a partir del seu codi.
- Afegir un animal, introduint per pantalla tota la informació necessària segons l'espècie.
- Adoptar un animal: permetrà a l'usuari seleccionar quina espècie d'animal es vol adoptar, mostrarà tot el llistat d'eixa espècie amb el seu codi i permetrà seleccionar-ne un. Una vegada adoptat, l'animal quedarà forma del registre del refugi.
- Donat el codi d'un animal, actualitzar la seua edat (sumar 1).
- Donat el codi d'un animal, actualitzar una determinada informació segons l'espècie:  
  - Si és gos, no hi ha res que actualitzar.
  - Si és gat, es pot actualitzar la seua conducta a la contrària que presente actualment.
  - Si és ocell, es pot actualitzar la seua capacitat de volar a la contrària que presente actualment.
- Començar sessió de teràpia, amb la qual cosa es mostrarà tot el llistat de gats sense problemes de comportament junt amb el seu codi corresponent, i permetrà a l'usuari seleccionar un.
- Realitzar exhibició, que serà molt paregut al cas anterior. Es mostraran tots els ocells no salvatges i amb capacitat de vol, i l'usuari podrà triar-ne un.
- Eixir del programa.

::: tip ANOTACIONS
Per a poder tindre un bon control de tots els animals, resultarà molt úil fer ús d'una estructura que continga tota la informació d'aquests. Una bona opció seria una **estructura clau-valor**, on la clau és l'espècie d'animal i el valor és el llistat dels animals d'eixa espècie.

- Aquesta estructura estarà dins de la classe independent Refugi.
- Tot animal que entre al refugi s'afegirà a aquesta estructura, dins del llistat corresponent a la seua espècie.
- Tot animal que és adoptat s'eliminarà de l'estructura.

És important aplicar bones pràctiques a l'hora de programar, amb un codi coherent, unes classes ben definides i seguint el **principi d'obert/tancat**. Segons aquest principi, **un programa** realitzat amb bones pràctiques **ha d'estar obert a ampliacions però tancat a modificacions**. Per a aconseguir-ho:

- Les subclasses usaran el constructor de la classe pare.
- Cada classe contindrà els mètodes que afectaran a la pròpia classe i als seus objectes.
- S'evitarà, en la mesura en què siga possible, l'ús de mètodes estàtics.

El programa consistirà en un bucle infinit que només acabarà si l'usuari selecciona l'opció corresponent. A aquest bucle se'l coneix com bucle principal del programa, i sol estar directament al mètode principal. El bucle principal executarà, en cada iteració, el mètode encarregat de mostrar el menú i un mètode gestor de funcionalitats. Aquest segon serà l'encarregat d'obtindre la selecció de l'usuari i de cridar a la funció corresponent. Tots aquests poden ser mètodes estàtics de la classe principal.

#### 📦 Codi Java
:::: tabs
=== Java

::: tabs
== Animal

```java

// Classe base
abstract class Animal implements Adoptable {
    private static int contadorId = 1; // Per a generar ID automàtic

    protected int id;
    protected String nom;
    protected int edat;
    protected boolean vacunat;

    public Animal(String nom, int edat, boolean vacunat) {
        this.id = contadorId++;
        this.nom = nom;
        this.edat = edat;
        this.vacunat = vacunat;
    }

    public int getId() {
        return id;
    }

    public String getNom() {
        return nom;
    }

    public int getEdat() {
        return edat;
    }

    public void envellir() {
        this.edat++;
        System.out.println("L'animal " + nom + " ara té " + edat + " anys.");
    }

    // Lògica comuna d'adopció (regla general)
    @Override
    public boolean esAptaPerAdopcio() {
        return this.edat < 10 && this.vacunat;
    }

    @Override
    public void adoptar() {
        System.out.println("--------------------------------------------------");
        System.out.println("ADÉU! L'animal " + nom + " ha sigut adoptat! Feliç vida nova!");
        System.out.println("--------------------------------------------------");
    }

    // Mètode per mostrar informació bàsica (Llistats generals)
    public String informacioBasica() {
        return "ID: " + id + " | Nom: " + nom + " | Edat: " + edat + " | Espècie: " + getEspecie();
    }

    // Mètode abstracte per a informació detallada (cada fill l'implementa)
    public abstract String informacioDetallada();

    //Métode abstracte per a qu cda fill diga el que es
    public abstract String getEspecie();
}
```
== Adoptable

```java
// Interfície que defineix si una entitat es pot adoptar
interface Adoptable {
    boolean esAptaPerAdopcio();
    void adoptar();
}

```

== Gos

```java
class Gos extends Animal {
    private String raca;

    public Gos(String nom, int edat, boolean vacunat, String raca) {
        super(nom, edat, vacunat);
        this.raca = raca;
    }

    @Override
    public String informacioDetallada() {
        return informacioBasica() + " | Raça: " + raca + " | Vacunat: " + vacunat;
    }
    @Override
    public String getEspecie() {
        return "Gos";
    }
}
```

== Gat

```java
class Gat extends Animal {
    private boolean problemesConducta;

    public Gat(String nom, int edat, boolean vacunat, boolean problemesConducta) {
        super(nom, edat, vacunat);
        this.problemesConducta = problemesConducta;
    }

    public boolean teProblemesConducta() {
        return problemesConducta;
    }

    public void canviarConducta() {
        this.problemesConducta = !this.problemesConducta;
        System.out.println("Conducta actualitzada. Problemes: " + this.problemesConducta);
    }

    // Lògica específica: Teràpia
    public void ferTerapia() {
        if (!problemesConducta) {
            System.out.println("• El gat " + nom + " està realitzant una sessió de teràpia amb humans.");
        } else {
            System.out.println("• El gat " + nom + " no pot fer teràpia per problemes de conducta.");
        }
    }

    @Override
    public String informacioDetallada() {
        return informacioBasica() + " | Problemes Conducta: " + (problemesConducta ? "Sí" : "No") + " | Vacunat: "
                + vacunat;
    }
    @Override
    public String getEspecie() {
        return "Gat";
    }
}
```
== Ocell

```java
class Ocell extends Animal {
    private String raca;
    private boolean esSalvatge;
    private boolean potVolar;

    public Ocell(String nom, int edat, boolean vacunat, String raca, boolean esSalvatge, boolean potVolar) {
        super(nom, edat, vacunat);
        this.raca = raca;
        this.esSalvatge = esSalvatge;
        this.potVolar = potVolar;
    }

    public boolean isEsSalvatge() { return esSalvatge; }
    public boolean isPotVolar() { return potVolar; }

    public void canviarCapacitatVol() {
        this.potVolar = !this.potVolar;
        System.out.println("Capacitat de vol actualitzada a: " + (potVolar ? "Sí" : "No"));
    }

    public void ferExhibicio() {
        if (potVolar && !esSalvatge) {
            System.out.println("• L'ocell " + nom + " està volant en l'exhibició!");
        } else {
            System.out.println("• L'ocell " + nom + " no pot participar (o no vola o és salvatge).");
        }
    }

    // SOBRESCRIVIM la regla d'adopció: s'afegeix la restricció de "no salvatge"
    @Override
    public boolean esAptaPerAdopcio() {
        return super.esAptaPerAdopcio() && !this.esSalvatge;
    }

    @Override
    public String informacioDetallada() {
        return informacioBasica() + " | Raça: " + raca + " | Salvatge: " + esSalvatge + " | Vola: " + potVolar;
    }

    @Override
    public String getEspecie() {
        return "Ocell";
    }
}
```

== Refugi

```java
import java.util.*;

class Refugi {
    // Estructura Clau (Espècie) - Valor (LArrayLista d'animals)
    private HashMap<String, ArrayList<Animal>> inventari;

    public Refugi() {
        this.inventari = new HashMap<>();
        // Inicialitzem les lArrayListes per evitar NullPointerExceptions
        inventari.put("Gos", new ArrayList<>());
        inventari.put("Gat", new ArrayList<>());
        inventari.put("Ocell", new ArrayList<>());
    }

    public void afegirAnimal(String especie, Animal a) {
        if (inventari.containsKey(especie)) {
            inventari.get(especie).add(a);
            System.out.println("• " + especie + " afegit correctament amb ID: " + a.getId());
        } else {
            System.out.println("Error: Espècie desconeguda.");
        }
    }

    public Animal buscarAnimalPerId(int id) {
        // Recorrem totes les lArrayListes del Map
        for (ArrayList<Animal> lArrayLista : inventari.values()) {
            for (Animal a : lArrayLista) {
                if (a.getId() == id) {
                    return a;
                }
            }
        }
        return null;
    }

    public void eliminarAnimal(Animal a) {
        // Busquem en quina lArrayLista està i l'eliminem
        for (ArrayList<Animal> lArrayLista : inventari.values()) {
            if (lArrayLista.remove(a)) {
                return; // Si l'hem trobat i esborrat, eixim
            }
        }
    }

    public ArrayList<Animal> getAnimalsPerEspecie(String especie) {
        ArrayList<Animal> a = inventari.get(especie);
        return (a != null) ? a : new ArrayList<Animal>();
    }

    public ArrayList<Animal> getTotsElsAnimals() {
        ArrayList<Animal> tots = new ArrayList<>();
        for (ArrayList<Animal> lArrayLista : inventari.values()) {
            tots.addAll(lArrayLista);
        }
        return tots;
    }
}
```

== App

```java
import java.util.ArrayList;
import java.util.Scanner;

public class AppVidaNatura {

    static Scanner scanner = new Scanner(System.in);
    static Refugi refugi = new Refugi();

    public static void main(String[] args) {
        boolean eixir = false;

        // Dades de prova (per no començar buit)
        refugi.afegirAnimal("Gos", new Gos("Rex", 5, true, "Pastor Alemany"));
        refugi.afegirAnimal("Gat", new Gat("Mixa", 2, true, false));
        refugi.afegirAnimal("Ocell", new Ocell("Piu", 1, true, "Canari", false, true));

        while (!eixir) {
            mostrarMenu();
            int opcio = llegirEnter("Selecciona una opció: ");

            switch (opcio) {
                case 1:
                    mostrarTots();
                    break;
                case 2:
                    mostrarDetallAnimal();
                    break;
                case 3:
                    afegirNouAnimal();
                    break;
                case 4:
                    processarAdopcio();
                    break;
                case 5:
                    actualitzarEdat();
                    break;
                case 6:
                    actualitzarEspecifics();
                    break;
                case 7:
                    sesioTerapia();
                    break;
                case 8:
                    realitzarExhibicio();
                    break;
                case 9:
                    System.out.println("Tancant l'aplicació...");
                    eixir = true;
                    break;
                default:
                    System.out.println("Opció no vàlida.");
                    break;
            }
        }
    }

    // --- MÈTODES DEL MENÚ ---

    private static void mostrarMenu() {
        System.out.println("\n=== REFUGI VIDA I NATURA ===");
        System.out.println("1. Mostrar lArrayLista bàsica");
        System.out.println("2. Mostrar detall d'un animal (per ID)");
        System.out.println("3. Afegir animal");
        System.out.println("4. Adoptar animal");
        System.out.println("5. Sumar edat (+1)");
        System.out.println("6. Actualitzar dades específiques (Gat/Ocell)");
        System.out.println("7. Sessió de Teràpia (Gats)");
        System.out.println("8. Exhibició de Vol (Ocells)");
        System.out.println("9. Eixir");
    }

    private static void mostrarTots() {
        ArrayList<Animal> tots = refugi.getTotsElsAnimals();
        if (tots.isEmpty())
            System.out.println("No hi ha animals al refugi.");
        for (Animal a : tots) {
            System.out.println(a.informacioBasica());
        }
    }

    private static void mostrarDetallAnimal() {
        int id = llegirEnter("Introdueix l'ID de l'animal: ");
        Animal a = refugi.buscarAnimalPerId(id);
        if (a != null) {
            System.out.println(a.informacioDetallada());
        } else {
            System.out.println(" Animal no trobat.");
        }
    }

    private static void afegirNouAnimal() {
        System.out.println("Tipus: 1. Gos | 2. Gat | 3. Ocell");
        int tipus = llegirEnter("Selecció: ");

        System.out.print("Nom: ");
        String nom = scanner.nextLine();
        int edat = llegirEnter("Edat: ");
        boolean vacunat = llegirBoolea("Està vacunat? (s/n): ");

        switch (tipus) {
            case 1 -> { // Gos
                System.out.print("Raça: ");
                String raca = scanner.nextLine();
                refugi.afegirAnimal("Gos", new Gos(nom, edat, vacunat, raca));
            }
            case 2 -> { // Gat
                boolean conducta = llegirBoolea("Té problemes de conducta? (s/n): ");
                refugi.afegirAnimal("Gat", new Gat(nom, edat, vacunat, conducta));
            }
            case 3 -> { // Ocell
                System.out.print("Raça/Espècie: ");
                String racaO = scanner.nextLine();
                boolean salvatge = llegirBoolea("És salvatge? (s/n): ");
                boolean vola = llegirBoolea("Pot volar? (s/n): ");
                refugi.afegirAnimal("Ocell", new Ocell(nom, edat, vacunat, racaO, salvatge, vola));
            }
            default -> System.out.println("Tipus incorrecte.");
        }
    }

    private static void processarAdopcio() {
        System.out.println("De quina espècie vols adoptar? (Gos/Gat/Ocell)");
        String especie = scanner.nextLine(); // Respectem majúscules/minúscules segons com s'ha guardat al Map
        // Per robustesa, podriem normalitzar el text, però assumim input correcte segons enunciat

        ArrayList<Animal> lArrayLista = refugi.getAnimalsPerEspecie(especie);

        System.out.println("--- Candidats per a adopció (" + especie + ") ---");
        boolean hiHaCandidats = false;

        for (Animal a : lArrayLista) {
            // Comprovem si compleix els requisits abans de mostrar-lo
            if (a.esAptaPerAdopcio()) {
                System.out.println(a.informacioBasica());
                hiHaCandidats = true;
            }
        }

        if (!hiHaCandidats) {
            System.out.println("No hi ha animals d'aquesta espècie aptes per adoptar.");
            return;
        }

        int id = llegirEnter("Introdueix l'ID de l'animal a adoptar: ");
        Animal a = refugi.buscarAnimalPerId(id);

        if (a != null && a.getEspecie().equalsIgnoreCase(especie) && a.esAptaPerAdopcio()) {
            a.adoptar(); // Missatge de comiat
            refugi.eliminarAnimal(a); // Esborrar del registre
        } else {
            System.out.println(" No s'ha pogut adoptar (ID incorrecte o no apte).");
        }
    }

    private static void actualitzarEdat() {
        int id = llegirEnter("ID de l'animal: ");
        Animal a = refugi.buscarAnimalPerId(id);
        if (a != null)
            a.envellir();
        else
            System.out.println("Animal no trobat.");
    }

    private static void actualitzarEspecifics() {
        int id = llegirEnter("ID de l'animal: ");
        Animal a = refugi.buscarAnimalPerId(id);

        if (a instanceof Gat) {
            ((Gat) a).canviarConducta();
        } else if (a instanceof Ocell) {
            ((Ocell) a).canviarCapacitatVol();
        } else if (a instanceof Gos) {
            System.out.println("Els gossos no tenen atributs actualitzables en aquest menú.");
        } else {
            System.out.println("Animal no trobat.");
        }
    }

    private static void sesioTerapia() {
        System.out.println("--- GATS APTES PER A TERÀPIA ---");
        ArrayList<Animal> gats = refugi.getAnimalsPerEspecie("Gat");
        for (Animal anim : gats) {
            Gat g = (Gat) anim;
            if (!g.teProblemesConducta()) { // Filtre: sense problemes
                System.out.println(g.informacioBasica());
            }
        }

        int id = llegirEnter("Selecciona ID per iniciar sessió: ");
        Animal a = refugi.buscarAnimalPerId(id);
        if (a instanceof Gat) {
            ((Gat) a).ferTerapia();
        }
    }

    private static void realitzarExhibicio() {
        System.out.println("--- OCELLS PER A EXHIBICIÓ ---");
        ArrayList<Animal> ocells = refugi.getAnimalsPerEspecie("Ocell");
        for (Animal anim : ocells) {
            Ocell o = (Ocell) anim;
            if (o.isPotVolar() && !o.isEsSalvatge()) { // Filtre
                System.out.println(o.informacioBasica());
            }
        }

        int id = llegirEnter("Selecciona ID per volar: ");
        Animal a = refugi.buscarAnimalPerId(id);
        if (a instanceof Ocell) {
            ((Ocell) a).ferExhibicio();
        }
    }

    // --- Helpers per a lectura de dades ---

    private static int llegirEnter(String missatge) {
        int resultat = 0;
        boolean dadaCorrecta = false;

        while (dadaCorrecta == false) {
            System.out.print(missatge);

            if (scanner.hasNextInt()) {
                //  Si hi ha un enter esperant
                resultat = scanner.nextInt();
                dadaCorrecta = true;
            } else {
                // Si no és un enter
                System.out.println("Error: Això no és un número vàlid.");
                scanner.next(); // 4. Tirem el text incorrecte per a poder tornar a demanar
            }
            scanner.nextLine(); // Netejem buffer (el salt de linea)
        }

        return resultat;
    }

    private static boolean llegirBoolea(String missatge) {
        System.out.print(missatge);
        String s = scanner.nextLine().toLowerCase();
        return s.equals("s") || s.equals("si");
    }
}

```

:::
::::

### 🧠 Exercici 4

La cooperativa *Cosmolab*, dedicada a la investigació espacial, gestiona diversos projectes interns que estudien la viabilitat de colònies fora del planeta Terra. En l’actualitat, treballen amb diferents prototips d’unitats experimentals que poden simular condicions d’hàbitat en diferents entorns, i necessiten una aplicació que els permeta supervisar en tot moment l’estat d’aquestes unitats. Fins ara, cada equip de recerca portava un registre manual, però amb l’arribada de nous membres s’ha decidit centralitzar tota la gestió.

Tota unitat operativa disposa d’un identificador numèric únic que el distingeix de les altres, i se li assigna un nom. També tenen un temps d'ús (en anys) i l’estat general en què es troba, que pot ser actiu o avariat.

En l’actualitat, hi ha tres tipus de prototips que funcionen de forma estable i que, per tant, han de poder ser registrats i gestionats: les unitats de cultiu, les d’anàlisi atmosfèric i les de generació d’energia. Cadascuna d’elles té característiques pròpies. Les unitats de cultiu estan especialitzades en simulacions de producció vegetal i compten amb un sistema de gestió d’aigua, que pot estar actiu o no, i una capacitat màxima de plantes que poden allotjar, a més del nombre actual de plantes allotjades i de la potencia en watts que consumeix. Les d’anàlisi atmosfèric enregistren el percentatge mitjà d'oxigen i la concentració mitjana de partícules contaminants detectades, en ppm (partícules per milió). Les unitats energètiques generen una certa potència cadascuna (per fer-ho senzill, serà constant).

Les diferents unitats són instal·lades de forma conjunta en zones (zona A, zona B, etc.). D'aquesta forma, cada zona és independent de la resta

Sumat a tot açò, cal tindre en compte que:

**Característiques de les Unitats de Cultiu:**
  - Si el sistema de gestió d'aigua està actiu, el sistema de cultiu consumirà una potència de 100 watts més altres 10 watts per planta.
  - En cada unitat de cultiu, el nombre de plantes no pot superar el maxim establit, que serà de 30. El nombre inicial de plantes s'establirà inicialment en 0.

**Característiques de les Unitats Energètiques:**
  - La potència generada per cada unitat energètica serà aleatòria entre 0.5 kW i 1.5 kW (tindria més sentit incorporar una variabilitat en funció de l'hora, per tal de simular el cicle dia/nit, però ho deixem més senzill).

**Característiques de les Unitats Atmosfèriques:**
  - Consumiran una potència constant de 300 watts.
  - El percentatge mitjà d'oxigen detectat per la unitat d'anàlisi atmosfèric començarà amb un número inicial de 10%.
  - El valor inicial en ppm de les partícules contaminants serà de 0.

**Característiques de les Zones:**
  - Cada zona no podrà tindre més d'una unitat d'anàlisi atmosfèric.
  - Tindran la capacitat de realitzar processos d'anàlisi atmosferic on:
    - Per cada planta allotjada en les diferents unitats de cultiu de la zona afegirà un valor aleatori comprés entre 0,05% i 0,15% al percentatge mitjà d'oxigen.
    - El valor de ppm augmentarà a mesura que es vagen afegint unitats energètiques (a raó d'un valor aleatori entre 25 i 75 per cada unitat energètica).


El sistema proporcionarà a l'usuari formes de modificar la composició dels elements de cada zona, amb la possibilitat d'afegir zones, afegir i eliminar unitats, i de variar alguns paràmetres d'aquests. Només es podran fer aquestes modificacions a zones operatives, que són aquelles que tenen, almenys, una unitat de cada tipus i, a més, almenys una unitat de cultiu té el sistema de gestió d'aigua activat. Les opcions que el sistema oferirà a l'usuari es divideixen en els següents menús:

::: details Menú General

```plaintext
Benvingut a la Cooperativa Cosmolab: Que desitjes fer hui?
1) Habilitar una nova Zona.
2) Buscar Zona per a realitzar alguna acción.
0) Eixir.
```

- Possibilitat d'afegir una nova Zona demanant un nom a l'usuari.
- Possibilitat de buscar una Zona per a realitzar accions. La zona es buscarà per nom i oferirem a l'usuari la llista de zones existents perquè puga escriure el nom d'una d'elles fàcilment.


::: details Menú d'accions en les Zones 

```plaintext
Selecciona l'acció a fer en la zona: [NOM DE LA ZONA];
1) Afegir Unitat Operativa.
2) Modificar Unitat Operativa.
3) Eliminar Unitat Operativa.
4) Realitzar Analisi Atmosfèric.
5) Realitzar Analisi Energètic.
6) Reparar unitats avariades.
0) Tornar al menú anterior.
```

- Possibilitat d'afegir noves unitats operatives.
- Possibilitat de modificar unitats de cultiu en zones operatives:
  - Possibilitat d'augmentar i disminuir el nombre de plantes, dins del límit establit.
  - Possibilitat d'activar o desactivar el sistema de gestió d'aigua. Per a afegir plantes, el sistema ha d'estar actiu. Mentre hi haja plantes, no es podrà desactivar. Per a eliminar la unitat, caldrà primer deixar el nombre de plantes a 0.

::: details Menú d'accions per a modificar una Unitat de Cultiu

```plaintext
Selecciona l'acció a fer en la zona: [NOM DE LA ZONA];
Quina modificació vols fer?
1) Afegir plantes.
2) Eliminar plantes.
3) Apagar el sistema de gestió d'aigua.
4) Activar el sistema de gestió d'aigua.
0) Tornar.
```

- **Anàlisi atmosfèric**: es mostra informació sobre el percentatge d'oxigen en l'aire i sobre el nombre mitja de partícules contaminants. En cas de trobar valors fora des valors raonables per a la vida, informarà.
  - Els valors buscats d'oxigen mitjà a l'aire són entre 8% i 21%.
  - Els valors acceptables de partícules contaminants seran mai superiors a 100 ppm.
  - Com cada anàlisi agafa mostres d'aire diferents, sempre cap algun error en les dades. El percentatge d'oxigen pot variar en cada anàlisi de forma aleatoria en ±1% respecte del valor real, i les partícules contaminants poden variar en ±5 ppm.
- **Anàlisi energètic**: es mostra la informació de la potència disponible en el sistema i de la consumida, amb el detall desglossat per cada elements que en fa ús.
  
  ::: details Exemple d'eixida d'anàlisi energètic

  ```plaintext
  ANÀLISI ENERGÈTIC DEL SISTEMA

  Potència total disponible: 973 W
  Potència total consumida: 790 W

  Distribució del consum:

  Unitat de cultiu 1: 320 W
    -> Sistema de gestió d'aigua actiu: 100 W
    -> Potència consumida per planta (22): 220 W 

  Unitat de cultiu 2:  170 W
    -> Sistema de gestió d'aigua actiu: 100 W
    -> Potència consumida per planta (7): 70 W 

  Unitats d’anàlisi atmosfèrica: 300 W
  ```

  :::

- Característica Extra: Avaries (Reparar unitats avariades.)

  Tant les unitats energètiques com les d'anàlisi atmosfèric es poden avariar, però en cadascuna el mal funcionament tindrà una naturalesa diferent:

    - Les unitats energètiques poden, de sobte, oferir fins a un 20% menys de la potència que deurien. Aquest comportament inesperat pot ocórrer en qualsevol moment que l'usuari demane un anàlisi energètic, amb una probabilitat d'avaria del 5% més un 2% addicional per cada any d'ús que tinga. Si la potència oferida cau per baix de la consumida, es considera que es perd la zona de manera irrecuperable amb totes les seues unitats operatives. Per fer-ho senzill, només farem aquesta comprovació quan fem un anàlisi energètic, no cada vegada que canvie el consum energètic de la zona.
    - Les unitats d'anàlisi atmosfèric poden, de sobte, donar dades completament incorrectes si s'avarien, cosa que pot passar en una probabilitat del 10% més un altre 1% per cada any d'ús, i pot ocórrer cada vegada que l'usuari fa un anàlisi atmosfèric. Quan s'avarien donaràn valors negatius d'oxigen i ppm.
    - Ambdues situacions es poden solucionar. L'usuari sempre tindrà accés a l'opció que permet solucionar les avaries  en cadascun dels dos tipus d'unitats, però en cas de seleccionar aquesta opció sense que la unitat estiga avariada es mostrarà un missatge informant que ningun mal funcionament ha sigut detectat. En cas de sí haver, es solucionarà.


#### 📦 Codi Java
:::: tabs
=== Java

::: tabs
== UnitatOperativa

```java
package exercise4;

public abstract class UnitatOperativa {

    private String identificador;
    private String nom;
    private int anys;

    // Constructor Complet
    public UnitatOperativa(String id, String nom, int anys){
        this.identificador = id;
        this.nom = nom;
        this.anys = anys;

    }

    // Getters
    public String getId(){ return this.identificador; }
    public String getNom(){ return this.nom; }
    public int getAnys(){ return this.anys; }

    // Setters
    public void setId(String id){ this.identificador = id; }
    public void setNom(String nom){ this.nom = nom; }
    public void setAnys(int anys) { this.anys = anys; }
}

```

== UnitatCultiu

```java
package exercise4;

public class UnitatCultiu extends UnitatOperativa implements ConsumidorElectric {
    
    private boolean gestioAigua;
    private int capacitatMaximaPlantes;
    private int plantesActualmentAllotjades;
    private double potenciaConsumida;

    public UnitatCultiu(String id, String nom, int anys){
        super(id, nom, anys);
        
        gestioAigua = true;
        this.capacitatMaximaPlantes = 30; // En cada unitat de cultiu, el maxim establit de plantes serà de 30. 
        this.plantesActualmentAllotjades = 0; // El nombre inicial de plantes s'establirà inicialment en 0.
        this.potenciaConsumida = 100; // Si el sistema de gestió d'aigua està actiu, el sistema de cultiu consumirà una potència de 100 watts més altres 10 watts per planta.
    }

    // GETTERS 
    public boolean isGestioAiguaActiva(){ return this.gestioAigua; }
    public int getCapacitat(){ return this.capacitatMaximaPlantes; }
    public int getQuantitatPlantesActuals() { return this.plantesActualmentAllotjades; }
    public double getPotenciaConsumida() { return this.potenciaConsumida;}

    // SETTERS
    public void apagarGestioAigua() { 
        this.gestioAigua = false; 
        // Si ho apague deixa de consumir energia
        recalcularPotencia();
    }
    public void activarGestioAigua() { 
        if (this.gestioAigua)
            System.out.println("El sistema de gestió d'aigua ja està actiu");
        else {
            this.gestioAigua = true; 
            // Si ho encenc he de calcular la nova potencia
            recalcularPotencia();
            System.out.println("El sistema de gestió d'aigua ha sigut activat correctament");
        }
    }

    // Serveix per a afegir i eliminar plantes
    public boolean afegirPlantes(int plantes) {
        return this.setPlantesAllotjades(this.plantesActualmentAllotjades + plantes);
    }

    // El nombre de plantes no pot superar el maxim establert
    public boolean setPlantesAllotjades(int plantes) { 
        if (plantes > 30 || plantes < 0)
            return false;
        this.plantesActualmentAllotjades = plantes; 
        recalcularPotencia();
        return true;
    }
    
    // No hi ha un SETTER per a la potencia, ja que es deriva de les característiques de l'objecte
    // Cree un métode per a recalcular la potencia cada vegada que alguna cosa canvia
    public void recalcularPotencia() { 
        this.potenciaConsumida = gestioAigua ? (100 + 10 * plantesActualmentAllotjades) : 0;
    }

    // Imprimeix la informació de consum energètic
    public String imprimirConsumEnergetic(){
        if (gestioAigua) {
            String s = "Unitat de Cultiu "+this.getId()+": "+this.potenciaConsumida+" W\n";
            s += "  -> Sistema de gestió d'aigua actiu: 100 W\n";
            s += "  -> Potència consumida per planta ("+this.plantesActualmentAllotjades+"): "+(this.potenciaConsumida-100)+" W\n";
            return s;
        }
        return "";
    }
    
    // Imprimim tipus d'unitat i ID
    public String toString(){
        return "Unitat de Cultiu amb ID: "+this.getId();
    }
}
```

== UnitatGeneracioEnergia

```java
package exercise4;

import java.util.Random;

public class UnitatGeneracioEnergia extends UnitatOperativa implements Avariable{
    private Random r = new Random();
    private final int POTENCIA_GENERADA;
    private final int IMPACTE_AMBIENTAL;
    private EstatOperatiu estat;


    public UnitatGeneracioEnergia(String id, String nom, int anys){
        super(id,nom,anys);
        
        this.POTENCIA_GENERADA = r.nextInt(500,1500);
        this.IMPACTE_AMBIENTAL = r.nextInt(25,75);
        this.estat = EstatOperatiu.ACTIU;
    }

    // GETTERS
    public int getPotencia() { 
        if (estat == EstatOperatiu.AVARIAT)
            return POTENCIA_GENERADA * 80 / 100;
        return this.POTENCIA_GENERADA; 
    }
    public int getImpacte() { return this.IMPACTE_AMBIENTAL; }
    public boolean isActiva() { return this.estat == EstatOperatiu.ACTIU; }
    // NO HI HA SETTER PERQUE LA POTENCIA I L'IMPACTE SON CONSTANTS DEFINIDES EN LA CREACIÓ DE L'OBJECTE (final)
    
    public void avariar() { this.estat = EstatOperatiu.AVARIAT; }
    public void reparar() { this.estat = EstatOperatiu.ACTIU; }

    // Imprimir la información de potencia generada i impacte ambiental
    public String imprimirInformacioEnergetica(){
        String s = "Unitat de Generació d'Energia: \n";
        s += "  -> Potència Generada: "+POTENCIA_GENERADA;
        s += "  -> Impacte Ambiental: "+IMPACTE_AMBIENTAL;
        return s;
    }

    // Imprimim tipus d'unitat i ID
    public String toString(){
        return "Unitat Energètica amb ID: "+this.getId();
    }
}
```

== UnitatAnaslisiAtmosferic

```java
package exercise4;

public class UnitatAnalisiAtmosferic extends UnitatOperativa implements ConsumidorElectric, Avariable {
    private double percentageMitjaOxigen;
    private int concentracioPPM;
    private final double CONSUM_ENERGETIC;
    private EstatOperatiu estat;

    public UnitatAnalisiAtmosferic(String id, String nom, int anys){
        super(id,nom,anys);
        
        this.percentageMitjaOxigen = 10.0; // El percentatge mitjà d'oxigen detectat per la unitat d'anàlisi atmosfèric començarà amb un número inicial de 10%
        this.concentracioPPM = 0; // El valor inicial en ppm de les partícules contaminants serà de 0
        this.CONSUM_ENERGETIC = 300.0; // Cada unitat consumira una potència constant de 300 watts.
        this.estat = EstatOperatiu.ACTIU;
    }

    // GETTERS
    public double getPercentatgeOxigen() { return this.percentageMitjaOxigen; }
    public int getPPM() { return this.concentracioPPM; }
    public double getPotenciaConsumida() { return this.CONSUM_ENERGETIC; }
    public boolean isActiva() { return estat == EstatOperatiu.ACTIU; }
    
    // SETTERS
    public void setPercentatgeOxigen(double nouPercentatge) { this.percentageMitjaOxigen = nouPercentatge; }
    public void setPPM(int ppm) { this.concentracioPPM = ppm; } 
    public void incrementarConsumOxigen(double increment) { this.percentageMitjaOxigen += increment; }
    public void incrementarPPM(int increment) { this.concentracioPPM += increment; }

    // Imprimeix el tipus d'unitat i el seu ID
    public String toString(){
        return "Unitat d'Anàlisi Atmosfèric amb ID: "+this.getId();
    }

    // Imprimeix per pantalla la unitat i el consum energètic
    public String imprimirConsumEnergetic(){
        return "Unitat d'anàlisi atmosfèric : "+CONSUM_ENERGETIC+" W\n";
    }

    public void avariar() { this.estat = EstatOperatiu.AVARIAT; }
    public void reparar() { this.estat = EstatOperatiu.ACTIU; }
}
```

== EstatOperatiu

```java
package exercise4;

public enum EstatOperatiu {
    ACTIU, AVARIAT;    
}
```

== Avariable

```java
package exercise4;

public interface Avariable {
    public void avariar();
    public void reparar();
    public boolean isActiva();
}
```

== ConsumidorElectric

```java
package exercise4;

public interface ConsumidorElectric {
    public double getPotenciaConsumida();
    public String imprimirConsumEnergetic();
}
```

== Zona

```java
package exercise4;

import java.util.ArrayList;
import java.util.Random;

public class Zona {

    private String name;
    private ArrayList<UnitatOperativa> unitats = new ArrayList<>();
    private Random rand = new Random();
    private boolean operativa;

    public Zona(String name){
        this.name = name;
        operativa = false;        
    }

    // Getters + Setters
    public String getName(){ return this.name; }
    public boolean isOperativa(){ return this.operativa; }

    public void setName(String name) { this.name = name; }

    // toString
    public String toString(){
        String res = "Zona: " + name + "\n";
        for (UnitatOperativa uo : unitats)
            res+= " * "+uo.toString()+"\n";
        return res;
    }

    /**************************************************************************/
    /************* FUNCIONS PER A AFEGIR I MODIFICAR UNA ZONA *****************/
    /**************************************************************************/
    
    // Afegir Unitat Operativa a una zona
    public boolean addUnitat(UnitatOperativa uo) {
        if (uo instanceof UnitatAnalisiAtmosferic) { // Cada zona no podrà tindre més d'una unitat d'anàlisi atmosfèric
            if (containsUnitatAtmosferica())
                return false;
            else { 
                // Quan agregue una unitat atmosfèrica calcule la seua contaminació i 
                // consum en base a la resta d'unitats de la zona
                UnitatAnalisiAtmosferic uaa = (UnitatAnalisiAtmosferic) uo;
                double consumPlantes = calcularConsumOxigen();
                uaa.incrementarConsumOxigen(consumPlantes);

                int ppmUnitatsEnergetiques = calcularPPM();
                uaa.incrementarPPM(ppmUnitatsEnergetiques);
            }
        } else if (uo instanceof UnitatGeneracioEnergia) {  
            // Quan agregue una unitat de Generació d'energia modifique 
            // la contaminació de la unitat d'analisi atmosferic de la zona
            UnitatAnalisiAtmosferic uaa = getUnitatAnalisiAtmosferic(); 
            if (uaa != null){
                int contaminacio = rand.nextInt(25,75);
                uaa.incrementarPPM(contaminacio);
            }
        }
        this.unitats.add(uo);
        validarOperativitat(); // Mire si després d'afegir es UnitatOperativa ja tinc la zona activa
        return true;
    }

    // Retorna si ja hi ha una unitat atmosférica en la zona
    public boolean containsUnitatAtmosferica() {
        for (UnitatOperativa uo : unitats) 
            if (uo instanceof UnitatAnalisiAtmosferic)
                return true;
        return false;
    }

    // Funció interna per a posar una zona com a operativa si cumpleix les característiques necessaries
    private void validarOperativitat(){
        if (unitats.size() >= 3){
            boolean atmosferica = false;
            boolean energetica = false;
            boolean cultiu = false;
            boolean gestioAiguaActivat = false;
            for (UnitatOperativa uo : unitats) {
                if (uo instanceof UnitatAnalisiAtmosferic)
                    atmosferica = true;
                else if (uo instanceof UnitatGeneracioEnergia)
                    energetica = true;
                else if (uo instanceof UnitatCultiu){
                    cultiu = true;
                    UnitatCultiu uc = (UnitatCultiu) uo;
                    if (uc.isGestioAiguaActiva())
                        gestioAiguaActivat = true;
                }
            }
            if (atmosferica && energetica && cultiu && gestioAiguaActivat)
                this.operativa = true;
            else 
                this.operativa = false;
        }
    }

    // El percentatge mitjà d'oxigen de les unitats d'analisi atmosfèric variarà en funció del número 
    // de plantes total de les diverses unitats de cultiu  que puga haver en la zona. Cada planta 
    // afegirà un valor aleatori comprés entre 0,05% i 0,15% al percentatge mitjà d'oxigen.
    public double calcularConsumOxigen(){
        double total = 0.0;
        for (UnitatOperativa uo : unitats)
            if (uo instanceof UnitatCultiu) {
                int numPlantes = ((UnitatCultiu) uo).getQuantitatPlantesActuals();
                for (int i = 0; i < numPlantes; i++)
                    total += rand.nextDouble(0.05,0.15);
            }
        return total;
    }

    // Si inserte una unitat atmosfèrica quan ja hi ha altres unitats he de 
    // calcular l'impacte de les unitats energètiques en el valor de PPM
    public int calcularPPM(){
        int total = 0;
        for (UnitatOperativa uo : unitats)
            if (uo instanceof UnitatGeneracioEnergia) 
                total += ((UnitatGeneracioEnergia) uo).getImpacte();
            
        return total;
    }

    // Extraure la unitat d'analisi atmosferic per a actualitzarla al insertar noves unitats
    public UnitatAnalisiAtmosferic getUnitatAnalisiAtmosferic(){
        for (UnitatOperativa uo : unitats)
            if (uo instanceof UnitatAnalisiAtmosferic)
                return (UnitatAnalisiAtmosferic) uo;
        return null; // Torne null si no hi ha una Unitat d'Analisi Atmosferic
    }

    /****************************************************************/
    /************* FUNCIÓ PER A ELIMINAR UNA ZONA *****************/
    /****************************************************************/

    // Eliminar Unitat Operativa d'una zona
    public boolean removeUnitat(UnitatOperativa uo) {
        return this.unitats.remove(uo);
    }

    /*****************************************************************/
    /************* FUNCIONS PER A ANÀLISI ATMOSFÈRIC *****************/
    /*****************************************************************/

    // REALITZAR ANÀLISI ATMOSFÈRIC
    public void executarAnalisiAtmosferic() {
        
        UnitatAnalisiAtmosferic uaa = getUnitatAnalisiAtmosferic();

        // Decidir si la unitat s'avaria abans de fer l'anàlisi (també pot fer-se després de l'anàlisi)
        int probabilitatAveria = 10 + uaa.getAnys();
        if (rand.nextInt(0,100) <= probabilitatAveria)
            uaa.avariar();
        
        double oxigen;
        int ppm;

        if (uaa.isActiva()){
            oxigen = uaa.getPercentatgeOxigen() + rand.nextDouble(-1.0,1.0);
            ppm = uaa.getPPM() + rand.nextInt(-5,5);
        } else {
            // Donem valors negatius aleatoris per a denotar que està avariada
            oxigen = rand.nextDouble(-100.0,-1.0);
            ppm = rand.nextInt(-300,-1);
        }
        // Els valors buscats d'oxigen mitjà a l'aire són entre 8% i 21%.
        // Els valors acceptables de partícules contaminants seran mai superiors a 100 ppm.

        System.out.println("El valor d'oxigen es de " + oxigen + "%");
        System.out.println("El nombre de partícules contaminants per milió son " + ppm);

        if (oxigen < 8 || oxigen > 21.0 || ppm > 100) {
            System.out.print("PERILL: Les condicions no son aptes per a la vida degut a que ");
            if (oxigen > 21 || oxigen < 8) {
                if (oxigen > 21)
                    System.out.print("el valor d'oxigen supera el 21%");
                if (oxigen < 8)
                    System.out.print("el valor d'oxigen es inferior al 8%");
                if (ppm > 100)
                    System.out.println(" i ");
                else 
                    System.out.println();
            }
            if (ppm > 100) {
                System.out.println("la concentració de particules contaminants supera les 100 partícules per milió");
            }
        }
    }

    /****************************************************************/
    /************* FUNCIONS PER A ANÀLISI ENERGÈTIC *****************/
    /****************************************************************/

    public boolean executarAnalisiEnergetic(){
        System.out.println("ANÀLISI ENERGÈTIC DEL SISTEMA\n");
        double potenciaPositiva = 0;
        double potenciaNegativa = 0;

        String resultatConsum = "";

        for (UnitatOperativa uo : unitats){
            if (uo instanceof UnitatGeneracioEnergia) {
                UnitatGeneracioEnergia uge = (UnitatGeneracioEnergia) uo;
                // Possibilitat d'averiarse
                int probabilitatAveria = 5 + 2 * uge.getAnys();
                if (rand.nextInt(0,100) <= probabilitatAveria)
                    uge.avariar();
                potenciaPositiva += uge.getPotencia();
            } else {
                potenciaNegativa += ((ConsumidorElectric) uo).getPotenciaConsumida();
                resultatConsum += ((ConsumidorElectric) uo).imprimirConsumEnergetic();
            }
        }

        System.out.println("Potència total disponible: " + potenciaPositiva);
        System.out.println("Potència total consumida: " + potenciaNegativa);

        if (potenciaPositiva < potenciaNegativa) {
            System.out.println("Les unitats energètiques no han soportat la càrrega de la zona i aquesta s'ha perdut irrecuperablement");
            return false;
        } else {
            System.out.println("Distribució del consum: \n");
            System.out.println(resultatConsum);
            return true;
        }
    }

    /*********************************************************************/
    /************* FUNCIONS PER A LA REPARACIÓ D'UNITATS *****************/
    /*********************************************************************/

    public void llistarUnitats(){
        for (UnitatOperativa uo : unitats)
            System.out.println(" * "+uo.toString());
    }

    public void repararUnitatAvariada(String id) {
        UnitatOperativa uo = getUnitatOperativa(id);
        if (uo == null)
            System.out.println("La unitat operativa indicada no existeix");
        else if (!(uo instanceof Avariable))
            System.out.println("La unitat operativa seleccionada no es reparable");
        else if (((Avariable) uo).isActiva())
            System.out.println("No s'ha detectat cap mal funcionament en la Unitat Operativa "+id);
        else {
            ((Avariable) uo).reparar();
            System.out.println("La Unitat "+id+" ha sigut reparada amb èxit");
        }
    }

    // Extraure la unitat amb un id concret
    public UnitatOperativa getUnitatOperativa(String id) {
        for (UnitatOperativa uo : unitats)
            if (uo.getId().equals(id))
                return uo;
        return null;
    }
}
```

== CosmolabApp

```java
package exercise4;

import java.util.*;

public class CosmolabApp {
    private static List<Zona> zones = new ArrayList<>();
    private static Scanner teclat = new Scanner(System.in);

    public static void main(String args[]) {
        int opcio;
        do{
            mostrarMenuGeneral();
            opcio = teclat.nextInt();
            teclat.nextLine();
            switch(opcio){
                case 1:
                    crearZona();
                    System.out.println("\nLa zona ha sigut creada correctament\n");
                    break;
                case 2:
                    System.out.println("Indica el nom de la zona a modificar:\n Zones disponibles");
                    
                    for (Zona z : zones)
                        System.out.println(" * "+z.getName());
                    
                    String zona = teclat.nextLine();
                    Zona zonaSeleccionada = buscarZona(zona);
                    if (zonaSeleccionada == null)
                        System.out.println("La zona introduïda no existeix");
                    else {
                        int opcioZona;
                        do{
                            mostrarMenuZona(zonaSeleccionada);
                            opcioZona = teclat.nextInt();
                            teclat.nextLine();
                            gestionarAccioZona(zonaSeleccionada, opcioZona);
                        } while (opcioZona != 0);
                    }
                    break;
                case 0:
                    System.out.println("Que passes un bon dia");
                    break;
                default:
                    System.out.println("Selecciona una opció vàlida, per favor");
                    break;
            }
        }while(opcio != 0);
    }

    /**************************************************************/
    /**************************   MENUS  **************************/
    /**************************************************************/

    public static void mostrarMenuGeneral(){
        System.out.println("Benvingut a la Cooperativa Cosmolab: Que desitjes fer hui?");
        System.out.println("1) Habilitar una nova Zona.");
        System.out.println("2) Buscar Zona per a realitzar alguna acción.");
        System.out.println("0) Eixir.");
    }

    public static void mostrarMenuZona(Zona zona){
        System.out.println("Selecciona l'acció a fer en la zona: " + zona.getName());
        System.out.println("1) Afegir Unitat Operativa.");
        System.out.println("2) Modificar Unitat Operativa.");
        System.out.println("3) Eliminar Unitat Operativa.");
        System.out.println("4) Realitzar Analisi Atmosfèric.");
        System.out.println("5) Realitzar Analisi Energètic.");
        System.out.println("6) Reparar unitats avariades.");
        System.out.println("0) Tornar al menú anterior.");
    }

    public static void mostrarMenuModificacions(UnitatOperativa uo) {
        System.out.println("Quina modificació vols fer?");
        System.out.println("1) Afegir plantes.");
        System.out.println("2) Eliminar plantes.");
        System.out.println("3) Apagar el sistema de gestió d'aigua.");
        System.out.println("4) Activar el sistema de gestió d'aigua.");
        System.out.println("0) Tornar.");
    }

    /*********************************************************************/
    /******************** ACCIONS DE MENÚ PRINCIPAL **********************/
    /*********************************************************************/

    public static void crearZona(){
        System.out.println("Introdueix el nom de la zona");
        String nom = teclat.nextLine();
        Zona nova = new Zona(nom);
        zones.add(nova);
    }

    public static Zona buscarZona(String nom) {
        for (Zona z : zones)
            if (z.getName().equals(nom))
                return z;
        return null;
    }

    /*******************************************************************/
    /******************** ACCIONS DE MENÚ DE ZONA **********************/
    /*******************************************************************/

    public static void gestionarAccioZona(Zona z, int opcio){
        switch(opcio){
            case 1: // Afegir UO
                System.out.println("Quin tipus d'unitat operativa vols afegir?");
                System.out.println("1) Unitat de Cultiu.");
                System.out.println("2) Unitat Energètica.");
                System.out.println("3) Unitat Atmosfèrica.");
                System.out.println("0) Tornar.");
                int opcioAfegir = teclat.nextInt();
                teclat.nextLine();
                if (opcioAfegir != 0)
                    gestioAfegirUnitat(z,opcioAfegir);
                break;
            case 2: // Modificar UO
                if (!z.isOperativa()) 
                    System.out.println("La zona no complix els requisits per a ser operativa, així que no es poder realitzar modificacions");
                else {
                    System.out.println(z.toString()+"\n");
                    System.out.println("Introdueix l'identificador de la unitat de cultiu a modificar");
                    String unitatModificada = teclat.nextLine();
                    UnitatOperativa uoModificada = z.getUnitatOperativa(unitatModificada);
                    if (uoModificada instanceof UnitatCultiu){
                        mostrarMenuModificacions(uoModificada);
                        int opcioModificacio = teclat.nextInt();
                        teclat.nextLine();
                        gestionarModificacioCultiu((UnitatCultiu) uoModificada, opcioModificacio);
                    } else 
                        System.out.println("Nomes les unitats de cultiu poden ser modificades");
                }
                break;
            case 3: // Eliminar UO
                System.out.println(z.toString()+"\n");
                System.out.println("Introdueix l'identificador de la unitat de cultiu a eliminar");
                String eliminar = teclat.nextLine();
                UnitatOperativa uo = z.getUnitatOperativa(eliminar);
                if (uo == null) 
                    System.out.println("No hi ha cap unitat amb eixe identificador a la zona.");
                else 
                    if (uo instanceof UnitatCultiu && ((UnitatCultiu) uo).getQuantitatPlantesActuals() != 0)
                        System.out.println("No es pot eliminar una Unitat de Cultiu que tinga plantes.");
                    else 
                        z.removeUnitat(uo);
                break;
            case 4: // Analisi Atmosfèric
                z.executarAnalisiAtmosferic();
                break;
            case 5: // Analisi Energètic
                if (!z.executarAnalisiEnergetic())
                    zones.remove(z);
                break;
            case 6: // Reparació d'unitats
                System.out.println("Indica la unitat que vols reparar: ");
                z.llistarUnitats();
                System.out.print("Id unitat a reparar:");
                String id = teclat.nextLine();
                z.repararUnitatAvariada(id);
                break;
            case 0:
                System.out.println();
                break;
            default:
                System.out.println("Selecciona una opció vàlida, per favor");
                break;
        }
    }

    public static void gestionarModificacioCultiu(UnitatCultiu uc, int opcio) {
        switch(opcio){
            case 1: // Afegir plantes
                System.out.println("Introdueix la quantitat de plantes a afegir");
                int quantitatAfegir = teclat.nextInt();
                teclat.nextLine();
                if (!uc.afegirPlantes(quantitatAfegir))
                    System.out.println("La quantitat de plantes que hi haurà tras la modificació no es vàlida.\nModificació no acceptada");
                break;
            case 2: // Eliminar plantes
                System.out.println("Introdueix la quantitat de plantes a eliminar");
                int quantitatEliminar = teclat.nextInt();
                teclat.nextLine();
                if (!uc.afegirPlantes(-quantitatEliminar))
                    System.out.println("La quantitat de plantes que hi haurà tras la modificació no es vàlida.\nModificació no acceptada");
                break;
            case 3: // Apagar gestió d'aigua
                if (uc.getQuantitatPlantesActuals() > 0)
                    System.out.println("No es pot apagar la gestió d'aigua si encara hi queden plantes");
                else 
                    uc.apagarGestioAigua();
                break;
            case 4: // Activar gestió d'aigua
                uc.activarGestioAigua();
                break;
            default:
                break;
        }
    }
    
    public static void gestioAfegirUnitat(Zona z, int opcio) {
        System.out.println("Introdueix l'identificador");
        String id = teclat.nextLine();
        System.out.println("Introdueix el nom de la unitat");
        String nom = teclat.nextLine();
        System.out.println("Introdueix l'antiguitat (en anys) de la unitat");
        int anys = teclat.nextInt();
        teclat.nextLine();
        
        switch (opcio){
            case 1:
                UnitatCultiu uc = new UnitatCultiu(id,nom,anys);
                z.addUnitat(uc);
                break;
            case 2:
                UnitatGeneracioEnergia ue = new UnitatGeneracioEnergia(id, nom, anys);
                z.addUnitat(ue);
                break;
            case 3:
                UnitatAnalisiAtmosferic ua = new UnitatAnalisiAtmosferic(id, nom, anys);
                if (!z.addUnitat(ua))
                    System.out.println("La zona ja conté una unitat d'Analisi Atmosferic i no pot afegir-se cap més.");;
                break;
            default:
                break;
            
        }
    }
}
```

:::
::::

<!--
### 🧠 Exercici 5

#### 📦 Codi Java
:::: tabs
=== Java

::: tabs
== Classes

```java
```

:::
::::


### 🧠 Exercici 6

#### 📦 Codi Java
:::: tabs
=== Java

::: tabs
== Classes

```java
```

:::
::::


### 🧠 Exercici 7

#### 📦 Codi Java
:::: tabs
=== Java

::: tabs
== Classes

```java
```

:::
::::


### 🧠 Exercici 8

#### 📦 Codi Java
:::: tabs
=== Java

::: tabs
== Classes

```java
```

:::
::::


### 🧠 Exercici 9

#### 📦 Codi Java
:::: tabs
=== Java

::: tabs
== Classes

```java
```

:::
::::


### 🧠 Exercici 10

#### 📦 Codi Java
:::: tabs
=== Java

::: tabs
== Classes

```java
```

:::
::::

-->
