# Solucions UF7 - Programació Orientada a Objectes I

## Exercicis - Nivell bàsic

### 🧠 Exercici 1

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

#### 📦 Codi Java
:::: tabs
=== Java

::: tabs
== Punt

```java
import java.util.Random;

public class Punt {

    // Atributs constants de classe
    public static final int MIN = -100;
    public static final int MAX = 100;

    private int x;
    private int y;

    // e) Constructor
    public Punt(int x, int y) {
        setX(x);
        setY(y);
    }

    // h) Getters i Setters
    public int getX() {
        return x;
    }

    public void setX(int x) {
        //if (x >= MIN && x <= MAX)
        this.x = x;
    }

    public int getY() {
        return y;
    }

    public void setY(int y) {
        //if (y >= MIN && y <= MAX)
        this.y = y;
    }

    public void imprimir() {
        // Coordenades:
        System.out.println("(" + x + "," + y + ")");
    }

    public void setCoordenades(int x, int y) {
        setX(x);
        setY(y);
    }

    public void desplacar(int dx, int dy) {
        setX(this.x + dx);
        setY(this.y + dy);
    }

    public double distancia(Punt altrePunt) {
        return Math.sqrt(Math.pow(altrePunt.x - this.x, 2) + Math.pow(altrePunt.y - this.y, 2));
    }

    // Mètode estàtic per generar punt aleatori
    public static Punt generaPuntAleatori() {
        Random r = new Random();
        // Fem MAX + 1 perquè el mètode nextInt és "exclusiu" amb el límit superior.
        // Això vol dir que agafa tots els números des del MIN fins al número ANTERIOR al límit.
        // Si posem (MIN, 100), el màxim número que sortiria seria 99. 
        // En posar (MIN, 101), ens assegurem que el 100 també puga eixir.
        int rx = r.nextInt(MIN, MAX + 1);
        int ry = r.nextInt(MIN, MAX + 1);
        return new Punt(rx, ry);
    }
}

```

== Rectangle
```java
public class Rectangle {
    private Punt p1; // Esquerra inferior
    private Punt p2; // Dreta superior

    // Constructor
    public Rectangle(Punt p1, Punt p2) {
        // Assegurem que p1 siga menor que p2 per facilitar càlculs
        this.p1 = p1;
        this.p2 = p2;
    }

    // Getters i Setters
    public Punt getP1() {
        return p1;
    }

    public void setP1(Punt p1) {
        this.p1 = p1;
    }

    public Punt getP2() {
        return p2;
    }

    public void setP2(Punt p2) {
        this.p2 = p2;
    }

    // Funcionalitats
    public void imprimir() {
        Punt pInferiorDret = new Punt(p2.getX(), p1.getY());
        Punt pSuperiorEsquerre = new Punt(p1.getX(), p2.getY());
        System.out.println("Vèrtexs del rectangle:");
        System.out.print("Inferior Esquerre (p1): ");
        p1.imprimir();
        System.out.print("Inferior Dreta: ");
        pInferiorDret.imprimir();
        System.out.print("Superior Dreta (p2): ");
        p2.imprimir();
        System.out.print("Superior Esquerre: ");
        pSuperiorEsquerre.imprimir();
    }

    public int getPerimetre() {
        int ample = Math.abs(p2.getX() - p1.getX());
        int alt = Math.abs(p2.getY() - p1.getY());
        return 2 * (ample + alt);
    }

    public int getArea() {
        int ample = Math.abs(p2.getX() - p1.getX());
        int alt = Math.abs(p2.getY() - p1.getY());
        return ample * alt;
    }
}

```
== Triangle
```java
public class Triangle {
    private Punt p1, p2, p3;

    public Triangle(Punt p1, Punt p2, Punt p3) {
        this.p1 = p1;
        this.p2 = p2;
        this.p3 = p3;
    }

    public double getPerimetre() {
        return p1.distancia(p2) + p2.distancia(p3) + p3.distancia(p1);
    }

    public double getArea() {
        // Fórmula d'Heró
        double s = getPerimetre() / 2;
        double a = p1.distancia(p2);
        double b = p2.distancia(p3);
        double c = p3.distancia(p1);
        return Math.sqrt(s * (s - a) * (s - b) * (s - c));
    }
}

```
:::
::::

### 🧠 Exercici 2: Sistema de Reserves de Laboratori

Este exercici consisteix a crear un sistema per a gestionar les reserves dels ordinadors d'un laboratori d'informàtica aplicant estructures de dades i restriccions.

---

#### 💡 Pistes conceptuals per a l'alumne
* **Composició:** Recorda que una `Reserva` no guarda només el número de l'ordinador, sinó que conté un objecte de tipus `Ordinador` sencer com a atribut.
* **Estructures:** Pensa en el `HashMap` com un tauler d'anuncis on cada franja horària (Clau) té penjada una llista de papers (Valor: llista de reserves).

---

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

#### 📦 Codi Java
:::: tabs
=== Java

::: tabs
== App

```java
import java.util.ArrayList;
import java.util.HashMap;

public class App {

    // l, m) Constants de restricció
    private static final int MAX_RESERVES_PER_HORA = 5;
    private static final int MAX_RESERVES_PER_ALUMNE = 3;

    // h) Estructures de dades
    private static ArrayList<Ordinador> inventari = new ArrayList<>();
    private static HashMap<String, ArrayList<Reserva>> mapaReserves = new HashMap<>();

    public static void main(String[] args) {

        Ordinador ordinador1 = new Ordinador(111, "model a", 4);
        Ordinador ordinador2 = new Ordinador(222, "model b", 8);
        Ordinador ordinador3 = new Ordinador(333, "model c", 16);

        inventari.add(ordinador1);
        inventari.add(ordinador2);
        inventari.add(ordinador3);

        // Proves de reserva
        realitzarReserva("Blanca", 111, 10); // Correcta
        realitzarReserva("Blanca", 222, 11); // Correcta
        realitzarReserva("Marcos", 111, 10); // Error: Ordinador ja reservat
        realitzarReserva("Blanca", 333, 12); // Correcta
        realitzarReserva("Blanca", 111, 14); // Error: Límit alumne superat (3)

        // j) Consultar reserves per hora
        consultarReservesPerHora("10:00-11:00");

        // k) Consultar reserves d'un alumne
        System.out.println("Reserves de Blanca: " + comptarReservesAlumne("Blanca"));

    }

    // i) Lògica de Reserves
    public static void realitzarReserva(String alumne, int idPc, int horaInici) {
        String franja = horaInici + ":00-" + (horaInici + 1) + ":00";
        Ordinador pc = buscarOrdinador(idPc);
        boolean errorTrobat = false;

        // 1. Validació: Existeix l'ordinador?
        if (pc == null) {
            System.out.println("Error: L'ID " + idPc + " no existeix.");
            errorTrobat = true;
        }
        // 2. Validació: Límit per alumne
        else if (comptarReservesAlumne(alumne) >= MAX_RESERVES_PER_ALUMNE) {
            System.out
                    .println("Error: " + alumne + " ha arribat al límit de " + MAX_RESERVES_PER_ALUMNE + " reserves.");
            errorTrobat = true;
        }

        if (!errorTrobat) {
            // Inicialització de la franja
            ArrayList<Reserva> llistaHora = mapaReserves.get(franja);
            if (llistaHora == null) {
                // Si no existeix, la creem i la posem al mapa
                llistaHora = new ArrayList<>();
                mapaReserves.put(franja, llistaHora);
            }

            // 3. Validació: Límit de reserves per hora
            if (llistaHora.size() >= MAX_RESERVES_PER_HORA) {
                System.out.println("Error: La franja " + franja + " està plena.");
            } else {
                // 4. Validació: Ordinador ja reservat?
                boolean ocupat = false;
                for (Reserva r : llistaHora) {
                    if (r.getOrdinador().getId() == idPc) {
                        ocupat = true;
                    }
                }

                if (ocupat) {
                    System.out.println("Error: L'ordinador " + idPc + " ja està ocupat a les " + franja);
                } else {
                    // Si tot és correcte, crear i afegir
                    Reserva nova = new Reserva(alumne, franja, pc);
                    llistaHora.add(nova);
                    System.out.println("Reserva confirmada: " + alumne + " a les " + franja);
                }
            }
        }
    }

    // Mètodes auxiliars de cerca
    private static Ordinador buscarOrdinador(int id) {
        for (Ordinador o : inventari) {
            if (o.getId() == id)
                return o;
        }
        return null;
    }

    public static int comptarReservesAlumne(String alumne) {
        int total = 0;
        for (ArrayList<Reserva> llista : mapaReserves.values()) {
            for (Reserva r : llista) {
                if (r.getNomAlumne().equalsIgnoreCase(alumne))
                    total++;
            }
        }
        return total;
    }

    public static void consultarReservesPerHora(String franja) {
        System.out.println("\n--- Reserves per a " + franja + " ---");
        if (mapaReserves.containsKey(franja)) {
            for (Reserva r : mapaReserves.get(franja)) {
                r.mostrarReserva();
            }
        } else {
            System.out.println("No hi ha reserves.");
        }
    }
}

```

== Ordinador

```java
public class Ordinador {
    private int id;
    private String model;
    private int ram; //GB

    // e) Constructor
    public Ordinador(int id, String model, int ram) {
        this.id = id;
        this.model = model;
        this.ram = ram;
    }

    // g) Getters i Setters
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getModel() {
        return model;
    }

    public void setModel(String model) {
        this.model = model;
    }

    public int getRam() {
        return ram;
    }

    public void setRam(int ram) {
        this.ram = ram;
    }

    public void imprimir() {
        System.out.println("ID: " + id + " | Model: " + model + " | RAM: " + ram + "GB");
    }
}

```

== Reserva

```java
public class Reserva {
    private String nomAlumne;
    private String franjaHoraria;
    private Ordinador ordinador;

    // e) Constructor
    public Reserva(String nomAlumne, String franjaHoraria, Ordinador ordinador) {
        this.nomAlumne = nomAlumne;
        this.franjaHoraria = franjaHoraria;
        this.ordinador = ordinador;
    }

    // g) Getters i Setters
    public String getNomAlumne() {
        return nomAlumne;
    }

    public String getFranjaHoraria() {
        return franjaHoraria;
    }

    public Ordinador getOrdinador() {
        return ordinador;
    }

    // f) Mètode d'impressió
    public void mostrarReserva() {
        System.out.print("Alumne: " + nomAlumne + " | Hora: " + franjaHoraria + " | ");
        ordinador.imprimir();
    }
}

```
:::
::::

## Exercicis - Nivell mitjà
### 🧠 Exercici 3
### Exercici 3: Gestor de Cançons i Àlbums Musicals

L'objectiu d'aquest exercici és crear una aplicació que permeta organitzar peces musicals i agrupar-les en àlbums, aplicant validacions de dades i mètodes de consulta.

---
### 💡 Pistes i Conceptes Clau

- **Validació amb bucles**: Per a la duració, necessitaràs un bucle (com `do-while`) que no deixe avançar fins que el valor siga vàlid.
- **Gestió de llistes**: Com que un àlbum no té un límit fix de cançons, la millor estructura per a emmagatzemar-les és una llista dinàmica (com `ArrayList`).



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



#### Fase 2: La classe Àlbum

**d) Estructura**  
Crea la classe **Àlbum** amb un nom.  
Al principi, l'àlbum estarà buit.

**e) Afegir cançons**  
Implementa una funcionalitat perquè l'usuari puga introduir cançons una a una mitjançant el teclat i afegir-les a l'àlbum **sense limitació de quantitat**.



#### Fase 3: Visualització i Consultes

**f) Mostrar informació**  
Crea mètodes per a visualitzar de manera detallada i ben presentada la informació de:
- Una cançó concreta.
- Un àlbum sencer (totes les seues cançons).

**g) Filtre de llarga durada**  
Implementa un sistema per localitzar i mostrar totes les cançons d'un àlbum que duren **més de 5 minuts (300 segons)**.


#### Fase 4: Funcionalitats de Comparació i Estadístiques

**h) Comparador**  
Crea una funció per a comparar dues cançons i determinar quina d'elles és més llarga.

**i) Durada total**  
Implementa un mètode que calcule i retorne la suma de la duració de totes les cançons d'un àlbum.

**j) Extrems**  
Crea mètodes per a identificar:
- La cançó més curta de l'àlbum.
- La cançó més extensa de l'àlbum.

#### Fase 5: Recomanació Sorpresa

**k) Selecció aleatòria**  
Afig una funcionalitat que seleccione a l'atzar una cançó de l'àlbum i en mostre la informació com una recomanació per a l'usuari.

#### Fase 6: Escenari de Proves (Main)

**l) Verificació**  
Crea una classe principal on s'executen totes les funcionalitats anteriors.  
Prova a introduir dades incorrectes per verificar les validacions i comprova que els càlculs i les cerques funcionen segons els objectius plantejats.

---
#### 📦 Codi Java
:::: tabs
=== Java

::: tabs
== App

```java

/*Gestor Musical */

import java.util.Scanner;

public class App {
    public static Scanner sc = new Scanner(System.in);

    public static void main(String[] args) {

        System.out.println("--- BENVINGUT AL GESTOR D'ÀLBUMS ---");
        System.out.print("Nom de l'àlbum: ");
        String nomAlbum = sc.nextLine();
        Album album = new Album(nomAlbum);
        afegirCanconsAlAlbumTeclat(album);
        // Resultats
        album.mostrarAlbum();
        album.filtrarLlargaDurada();
        album.mostrarExtrems();
        album.recomanacioAleatoria();

        sc.close();
    }

    public static void afegirCanconsAlAlbumTeclat(Album album) {

        System.out.print("Vols afegir una cançó? (s/n): ");
        String continuar = sc.nextLine();

        while (continuar.equalsIgnoreCase("s")) {

            System.out.print("\nArtista: ");
            String artista = sc.nextLine();

            System.out.print("Títol: ");
            String titol = sc.nextLine();

            Canco c = new Canco(artista);
            c.setTitol(titol);

            boolean duracioCorrecta = false;
            int duracio = 0;
            while (!duracioCorrecta) {
                System.out.print("Duració (segons): ");
                duracio = sc.nextInt();
                sc.nextLine(); // neteja buffer

                duracioCorrecta = c.setDuracio(duracio);
            }

            album.afegirCanco(c);

            System.out.print("Vols afegir una altra cançó? (s/n): ");
            continuar = sc.nextLine();
        }

    }
}


```

== Cançó

```java
public class Canco {
    private String titol;
    private String artista;
    private int duracio; // en segons

    public Canco(String artista) {
        this.artista = artista;
        this.titol = "";
        this.duracio = 0;
    }

    public boolean setDuracio(int duracio) {
        if (duracio >= 10 && duracio <= 600) {
            this.duracio = duracio;
            return true;
        } else {
            System.out.println("Error: La durada ha de ser entre 10 i 600.");
            return false;
        }
    }

    public int getDuracio() {
        return duracio;
    }

    public void setTitol(String titol) {
        if (titol.length() > 50) {
            this.titol = titol.substring(0, 50);
            System.out.println("S'ha reduït el titol.");
        } else {
            this.titol = titol;
        }
    }

    // Getters
    public String getTitol() {
        return titol;
    }

    public void mostrarInfo() {
        int minuts = duracio / 60;
        int segons = duracio % 60;
        System.out.println("- " + titol + " (" + artista + ") [" + minuts + ":" + segons + "]");
    }

    // Fase 4: Comparació
    public static Canco quinaEsMesLlarga(Canco c1, Canco c2) {
        return (c1.getDuracio() >= c2.getDuracio()) ? c1 : c2;
    }

}

```

== Album

```java
import java.util.ArrayList;
import java.util.Random;

public class Album {
    private String nom;
    private ArrayList<Canco> llistaCancons;

    public Album(String nom) {
        this.nom = nom;
        this.llistaCancons = new ArrayList<>();
    }

    public void afegirCanco(Canco c) {
        llistaCancons.add(c);
    }

    public void mostrarAlbum() {
        System.out.println("\n--- ÀLBUM: " + nom + " ---");
        for (Canco c : llistaCancons) {
            c.mostrarInfo();
        }
    }

    // Fase 3: Filtre > 300s
    public void filtrarLlargaDurada() {
        System.out.println("\nCançons de més de 5 minuts:");
        for (Canco c : llistaCancons) {
            if (c.getDuracio() > 300)
                c.mostrarInfo();
        }
    }

    // Fase 4: Estadístiques
    public int getDuradaTotal() {
        int total = 0;
        for (Canco c : llistaCancons)
            total += c.getDuracio();
        return total;
    }

    public void mostrarExtrems() {

        if (llistaCancons.size() > 0) {

            Canco curta = llistaCancons.get(0);
            Canco llarga = llistaCancons.get(0);

            // Comencem des de l'índex 1 perquè el 0 ja l'hem assignat
            for (int i = 1; i < llistaCancons.size(); i++) {
                Canco c = llistaCancons.get(i);

                if (c.getDuracio() < curta.getDuracio()) {
                    curta = c;
                }
                if (c.getDuracio() > llarga.getDuracio()) {
                    llarga = c;
                }
            }

            System.out.print("Més curta: ");
            curta.mostrarInfo();
            System.out.print("Més llarga: ");
            llarga.mostrarInfo();
        } else {
            System.out.println("La llista està buida.");
        }
    }

    // Fase 5: Aleatòria
    public void recomanacioAleatoria() {
        if (llistaCancons.size() > 0) {
            Random r = new Random();
            int index = r.nextInt(llistaCancons.size());
            System.out.print("\nRecomanació d'avui: ");
            llistaCancons.get(index).mostrarInfo();
        } else {
            System.out.println("La llista està buida.");
        }
    }
}

```
:::
::::

## Exercicis - Nivell avançat

### 🧠 Exercici 4: Sistema de Gestió Nutricional i Receptari

L'objectiu és dissenyar un sistema per a un servei de càtering que permeta gestionar ingredients, calcular costos i calories de receptes, i oferir suggeriments basats en pressupost i nutrició.

#### 💡 Pistes conceptuals per a l'alumne

- **Relació d'ingredients**: Una recepta no és només una llista d'ingredients; cada ingredient té una quantitat associada. Pots utilitzar un `Map<Ingredient, Integer>` per relacionar l'objecte ingredient amb la seua quantitat en la recepta.
- **Ordenació**: Per a mostrar les receptes alfabèticament, recorda que pots utilitzar `Collections.sort()` o un `TreeMap`.

---

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


#### 📦 Codi Java
:::: tabs
=== Java

::: tabs
== App

```java

/*Gestor */

import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;
import java.util.Random;
import java.util.Scanner;

public class App {

    public static Scanner sc = new Scanner(System.in);

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        ArrayList<Ingredient> ingredients = new ArrayList<>();
        ArrayList<Recepta> receptes = new ArrayList<>();

        int opcio;

        do {
            mostrarMenu();
            opcio = sc.nextInt();
            sc.nextLine();

            if (opcio == 1) {
                // Afegir ingredient
                Ingredient ing = crearIngredient();
                ingredients.add(ing);
                System.out.println("Ingredient afegit.");

            } else if (opcio == 2) {
                // Llistar ingredients
                mostrarIngredients(ingredients);

            } else if (opcio == 3) {
                // Cercar ingredient
                System.out.print("Nom de l'ingredient a cercar: ");
                String nom = sc.nextLine();
                buscarIngredientPerNom(nom, ingredients);

            } else if (opcio == 4) {
                // Afegir recepta (1 recepta)
                if (ingredients.size() == 0) {
                    System.out.println("Primer has de crear almenys un ingredient.");
                } else {
                    Recepta r = crearUnaRecepta(ingredients);
                    receptes.add(r);
                    System.out.println("Recepta afegida.");
                }

            } else if (opcio == 5) {
                // Llistar receptes (ordre alfabètic)
                mostrarReceptesOrdenades(receptes);

            } else if (opcio == 6) {
                // Filtre econòmic < 3€
                mostrarReceptesEconomiques(receptes, opcio);

            } else if (opcio == 7) {
                // Recomanació aleatòria
                recomanarReceptaAleatoria(receptes);

            } else if (opcio == 8) {
                // Mostrar estadístiques
                mostrarEstadistiques(receptes);

            } else if (opcio == 0) {
                System.out.println("Eixint del programa...");

            } else {
                System.out.println("Opció no vàlida.");
            }

        } while (opcio != 0);
    }

    public static Ingredient crearIngredient() {
        System.out.print("Nom del Ingredient: ");
        String nom = sc.nextLine();

        System.out.print("Kcal: ");
        int kcal = sc.nextInt();

        System.out.print("Preu (€): ");
        double preu = sc.nextDouble();
        sc.nextLine();

        Ingredient ing = new Ingredient(nom, kcal, preu);
        return ing;
    }

    public static Recepta crearUnaRecepta(ArrayList<Ingredient> ingredients) {

        System.out.print("\nNom de la recepta: ");
        String nomRec = sc.nextLine();

        Recepta r = new Recepta(nomRec);

        char opIng;
        do {
            System.out.print("Vols afegir un ingredient a la recepta? (s/n): ");
            opIng = sc.nextLine().toLowerCase().charAt(0);

            if (opIng == 's') {

                // Mostrar ingredients disponibles
                for (int i = 0; i < ingredients.size(); i++) {
                    System.out.println(i + " - " + ingredients.get(i).getNom());
                }

                System.out.print("Tria ingredient (posició): ");
                int pos = sc.nextInt();

                System.out.print("Quantitat: ");
                int quantitat = sc.nextInt();
                sc.nextLine();

                r.afegirIngredient(ingredients.get(pos), quantitat);
            }

        } while (opIng == 's');

        return r;
    }

    public static void mostrarIngredients(ArrayList<Ingredient> ingredients) {
        if (ingredients.size() == 0) {
            System.out.println("No hi ha ingredients.");
        } else {
            System.out.println("\n--- INGREDIENTS ---");
            for (Ingredient ing : ingredients) {
                ing.mostrarInfo();
            }
        }
    }

    // ---------- FASE 3.e ----------
    public static void buscarIngredientPerNom(String nomBuscat, ArrayList<Ingredient> ingredients) {
        boolean trobat = false;

        for (Ingredient ing : ingredients) {
            if (ing.getNom().equalsIgnoreCase(nomBuscat)) {
                ing.mostrarInfo();
                trobat = true;
            }
        }

        if (!trobat) {
            System.out.println("No s'ha trobat l'ingredient: " + nomBuscat);
        }
    }

    public static void mostrarReceptesOrdenades(ArrayList<Recepta> receptes) {

        List<Recepta> copia = new ArrayList<>(receptes);

        Collections.sort(copia, new Comparator<Recepta>() {
            public int compare(Recepta r1, Recepta r2) {
                return r1.getNom().compareToIgnoreCase(r2.getNom());
            }
        });

        System.out.println("\n--- RECEPTES ORDENADES ALFABÈTICAMENT ---");
        for (Recepta r : copia) {
            System.out.println("- " + r.getNom());
        }
    }

    public static void mostrarReceptesEconomiques(ArrayList<Recepta> receptes, int limit) {

        boolean hiHa = false;

        System.out.println("\n--- RECEPTES AMB COST INFERIOR A " + limit + " € ---");

        for (Recepta r : receptes) {
            if (r.calcularCostTotal() < limit) {
                r.mostrarDetalls();
                hiHa = true;
            }
        }

        if (!hiHa) {
            System.out.println("No hi ha cap recepta amb un cost inferior a " + limit + " €");
        }
    }

    // Fase 5: Estadístiques globals
    public static void mostrarEstadistiques(ArrayList<Recepta> receptes) {

        if (receptes.size() == 0) {
            System.out.println("No hi ha receptes per a calcular estadístiques.");
        } else {

            double sumaCost = 0;
            int sumaKcal = 0;
            Recepta mesLleugera = receptes.get(0);

            for (Recepta r : receptes) {
                sumaCost += r.calcularCostTotal();
                sumaKcal += r.calcularTotalKcal();

                if (r.calcularTotalKcal() < mesLleugera.calcularTotalKcal()) {
                    mesLleugera = r;
                }
            }

            System.out.println("\n--- ESTADÍSTIQUES GLOBALS ---");
            System.out.println("Mitjana Preu: " + (sumaCost / receptes.size()) + "€");
            System.out.println("Recepta més lleugera: " + mesLleugera.getNom());
        }
    }

    public static void recomanarReceptaAleatoria(ArrayList<Recepta> receptes) {

        if (receptes.size() == 0) {
            System.out.println("No hi ha receptes disponibles per a recomanar.");
        } else {
            Random rnd = new Random();
            int pos = rnd.nextInt(receptes.size()); // 0 .. size-1
            Recepta triada = receptes.get(pos);

            System.out.println("\n--- SUGGERIMENT DE MENÚ (ALEATORI) ---");
            triada.mostrarDetalls(); // ja mostra ingredients, quantitats, totals kcal i preu
        }
    }

    // ---------------- MENÚ ----------------

    public static void mostrarMenu() {
        System.out.println("\n===== MENÚ =====");
        System.out.println("1) Afegir ingredient");
        System.out.println("2) Llistar ingredients");
        System.out.println("3) Cercar ingredient per nom");
        System.out.println("4) Crear recepta");
        System.out.println("5) Llistar receptes (alfabètic)");
        System.out.println("6) Filtre econòmic (< 3€)");
        System.out.println("7) Recomanació aleatòria");
        System.out.println("8) Estadístiques globals");
        System.out.println("0) Eixir");
        System.out.print("Tria una opció: ");
    }

}

```

== Ingredient

```java
public class Ingredient {
    private String nom;
    private int kcal;
    private double preu;

    public Ingredient(String nom, int kcal, double preu) {
        this.nom = nom;
        setKcal(kcal); // Usem el setter per a validar des del principi
        setPreu(preu);
    }

    // Getters i Setters amb validació (Fase 1.b)
    public String getNom() {
        return nom;
    }

    public boolean setKcal(int kcal) {
        // Validació: entre 1 i 1000 kcal
        if (kcal >= 1 && kcal <= 1000) {
            this.kcal = kcal;
            return true;
        } else {
            return false;
        }
    }

    public boolean setPreu(double preu) {
        // Validació: entre 0.01 i 100
        if (preu >= 0.01 && preu <= 100) {
            this.preu = preu;
            return true;
        } else {
            return false;
        }
    }

    public int getKcal() {
        return kcal;
    }

    public double getPreu() {
        return preu;
    }

    public void mostrarInfo() {
        System.out.println("Ingredient: " + nom + " | " + kcal + " kcal | " + preu + "€");
    }
}

```

== Recepta

```java
import java.util.HashMap;

public class Recepta {
    private String nom;
    private HashMap<Ingredient, Integer> ingredients; // Ingredient i quantitat

    public Recepta(String nom) {
        this.nom = nom;
        this.ingredients = new HashMap<>();
    }

    public String getNom() {
        return nom;
    }

    public void afegirIngredient(Ingredient ing, int quantitat) {
        ingredients.put(ing, quantitat);
    }

    // Fase 4.g: Càlculs
    public int calcularTotalKcal() {
        int total = 0;
        for (HashMap.Entry<Ingredient, Integer> entrada : ingredients.entrySet()) {
            total += entrada.getKey().getKcal() * entrada.getValue();
        }
        return total;
    }

    public double calcularCostTotal() {
        double total = 0;
        for (HashMap.Entry<Ingredient, Integer> entrada : ingredients.entrySet()) {
            total += entrada.getKey().getPreu() * entrada.getValue();
        }
        return total;
    }

    public void mostrarDetalls() {
        System.out.println("\n--- RECEPTA: " + nom + " ---");
        for (HashMap.Entry<Ingredient, Integer> entrada : ingredients.entrySet()) {
            System.out.println("- " + entrada.getKey().getNom() + ": " + entrada.getValue() + " unitats.");
        }
        System.out.println("TOTAL: " + calcularTotalKcal() + " kcal | Preu: " + calcularCostTotal() + "€");
    }
}

```
:::
::::


### 🧠 Exercici 5: Gestió Hospitalària d’Ingressos

Un hospital vol digitalitzar el control dels **ingressos de pacients**, organitzant-los per **unitats mèdiques** (UCI, Pediatria, Traumatologia, etc.) i assegurant que **no se supera el nombre total de llits disponibles**.

El sistema ha de gestionar la jerarquia:

Hospital  
 ├── Unitats  
 │    └── Pacients (codi + dies d’ingrés)  
 └── Llits disponibles (límit) 


#### 💡 Pistes i Conceptes Clau

- **Generació de codis**: El codi del pacient ha de ser automàticament generat amb el format:
  - 1 lletra majúscula + 3 números (exemple: `P042`)

- **Jerarquia d’objectes**:
  - Un `Hospital` conté diverses `Unitats`
  - Cada `Unitat` gestiona un conjunt de `Pacients`

- **Control de capacitat**:
  - Cada pacient ocupa **1 llit**
  - El nombre total de pacients ingressats **no pot superar** el límit de llits de l’hospital

---

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


#### 📦 Codi Java
:::: tabs
=== Java

::: tabs
== App

```java

/*Gestor Hospital */
import java.util.Scanner;

public class App {

    public static Scanner sc = new Scanner(System.in);

    public static void main(String[] args) {
        // Demo scenario
        Hospital h = new Hospital("Hospital Sant Joan", "València", 5);

        Unitat uci = new Unitat("UCI");
        Unitat pediatria = new Unitat("Pediatria");
        Unitat traumatologia = new Unitat("Traumatologia");

        h.afegirUnitat(uci);
        h.afegirUnitat(pediatria);
        h.afegirUnitat(traumatologia);

        Pacient p1 = new Pacient("Anna");
        p1.setDiesIngres(10);
        h.ingressar(p1, "UCI");

        Pacient p2 = new Pacient("Joan");
        p2.setDiesIngres(5);
        h.ingressar(p2, "Pediatria");

        Pacient p3 = new Pacient("María");
        p3.setDiesIngres(45); // ingrés llarg
        h.ingressar(p3, "Traumatologia");

        Pacient p4 = new Pacient("Pere");
        p4.setDiesIngres(60); // ingrés llarg
        h.ingressar(p4, "Traumatologia");

        Pacient p5 = new Pacient("Laia");
        p5.setDiesIngres(2);
        h.ingressar(p5, "Pediatria");

        // Intentem ingressar quan no hi ha llits
        Pacient p6 = new Pacient("Oriol");
        p6.setDiesIngres(3);
        boolean ingressat = h.ingressar(p6, "UCI");
        if (!ingressat)
            System.out.println("No s'ha pogut ingressar " + p6.getNom() + " per falta de llits.");

        // Transferència
        h.transferir(p1.getCodi(), "UCI", "Traumatologia");

        // Alta
        h.donarAlta(p2.getCodi());

        // Consultes i informes
        System.out.println("\n-- Informació pacient (p3) --");
        h.mostrarInfoPacient(p3.getCodi());

        System.out.println("\n-- Estat unitat Traumatologia --");
        h.mostrarEstatUnitat("Traumatologia");

        System.out.println("\n-- Pacients amb ingressos llargs (>30 dies) --");
        h.listarIngressosLlargs();

        System.out.println("\n-- Comparació entre p3 i p4 --");
        h.compararPacients(p3.getCodi(), p4.getCodi());

        System.out.println("\n-- Extrems a Traumatologia --");
        h.mostrarExtremsUnitat("Traumatologia");

        System.out.println("\n-- Pacient aleatori a Traumatologia --");
        Pacient alea = h.pacientAleatoriUnitat("Traumatologia");
        if (alea != null)
            System.out.println("Pacient seleccionat: " + alea.getNom());

        System.out.println("\nTotal pacients a l'hospital: " + h.totalPacientsHospital());

        // Nota: per a interacció real, utilitzar sc i un bucle amb menús.
    }
}

```

== Pacient

```java
public class Pacient {
    private String codi;
    private String nom;
    private int diesIngres;

    // Constructor senzill
    public Pacient(String nom) {
        this.nom = nom;
        this.codi = "P-" + (int) (Math.random() * 1000); // Codi aleatori senzill
    }

    // Aquest mètode és el que el Gestor usarà per a validar
    public boolean setDiesIngres(int dies) {
        if (dies >= 1 && dies <= 365) {
            this.diesIngres = dies;
            return true; // Tot correcte
        } else {
            System.out.println("Error: Els dies han d'estar entre 1 i 365.");
            return false; // Torna a preguntar!
        }
    }

    public int getDiesIngres() {
        return diesIngres;
    }

    public String getCodi() {
        return codi;
    }

    public String getNom() {
        return nom;
    }
}



```

== Unitat

```java
import java.util.ArrayList;

public class Unitat {
    private String nom;
    private ArrayList<Pacient> llistaPacients;

    public Unitat(String nom) {
        this.nom = nom;
        this.llistaPacients = new ArrayList<>();
    }

    public String getNom() {
        return nom;
    }

    public ArrayList<Pacient> getLlista() {
        return llistaPacients;
    }

    public void afegir(Pacient p) {
        llistaPacients.add(p);
    }

    public void eliminar(String codi) {
        for (int i = 0; i < llistaPacients.size(); i++) {
            if (llistaPacients.get(i).getCodi().equals(codi)) {
                llistaPacients.remove(i);
                break;
            }
        }
    }
}
```

== Hospital

```java
import java.util.ArrayList;
import java.util.Random;

public class Hospital {
    private String nom;
    private String localitzacio;
    private final int llitsMax;
    private ArrayList<Unitat> llistaUnitats;

    public Hospital(String nom, String localitzacio, int llitsMax) {
        this.nom = nom;
        this.localitzacio = localitzacio;
        this.llitsMax = llitsMax;
        this.llistaUnitats = new ArrayList<>();
    }

    public int getLlitsMax() {
        return llitsMax;
    }

    public void afegirUnitat(Unitat u) {
        llistaUnitats.add(u);
    }

    // Fase 2.d: Eliminar una unitat només si està buida
    public boolean eliminarUnitat(String nomUnitat) {
        Unitat unitatTrobat = null;
        int indexTrobat = -1;

        // 1. Busquem la unitat i guardem la seua posició (índex)
        for (int i = 0; i < llistaUnitats.size() && unitatTrobat == null; i++) {
            if (llistaUnitats.get(i).getNom().equalsIgnoreCase(nomUnitat)) {
                unitatTrobat = llistaUnitats.get(i);
                indexTrobat = i;
            }
        }

        // 2. Si l'hem trobat, comprovem si té pacients
        if (unitatTrobat != null) {
            if (unitatTrobat.getLlista().isEmpty()) {
                // Està buida: la podem eliminar
                llistaUnitats.remove(indexTrobat);
                System.out.println("Unitat '" + nomUnitat + "' eliminada correctament.");
                return true;
            } else {
                // Té pacients: no la podem eliminar
                System.out.println("Error: No es pot eliminar la unitat '" + nomUnitat + "' perquè té "
                        + unitatTrobat.getLlista().size() + " pacients ingressats.");
                return false;
            }
        }

        System.out.println("Error: La unitat '" + nomUnitat + "' no existeix.");
        return false;
    }

    public int getOcupacioActual() {
        int total = 0;
        for (Unitat u : llistaUnitats) {
            total += u.getLlista().size();
        }
        return total;
    }

    // Validació de capacitat (Fase 3.f)
    public boolean hiHaLlitDisponible() {
        if (getOcupacioActual() < llitsMax) {
            return true;
        } else {
            System.out.println("HOSPITAL PLE: No queden llits disponibles.");
            return false;
        }
    }

    public boolean ingressar(Pacient p, String nomUnitat) {
        if (getOcupacioActual() < llitsMax) {
            for (Unitat u : llistaUnitats) {
                if (u.getNom().equalsIgnoreCase(nomUnitat)) {
                    u.afegir(p);
                    System.out.println("Ingrés confirmat a " + nomUnitat);
                    return true; //Ha ingressat!
                }
            }
            // Si arribem ací és perquè hem recorregut totes les unitats i cap coincidia
            System.out.println("Error: La unitat '" + nomUnitat + "' no existeix.");
            return false; // L'ingrés ha fallat
        } else {
            System.out.println("Error:No hi ha llits disponibles");
            return false; // L'ingrés ha fallat
        }
    }

    public boolean transferir(String codi, String origen, String desti) {
        Unitat uOrigen = null;
        Unitat uDesti = null;

        // 1. Busquem les dues unitats
        for (Unitat u : llistaUnitats) {
            if (u.getNom().equalsIgnoreCase(origen))
                uOrigen = u;
            if (u.getNom().equalsIgnoreCase(desti))
                uDesti = u;
        }

        // 2. Validem que les unitats existeixen
        if (uOrigen == null || uDesti == null) {
            System.out.println("Error: Una de les unitats no existeix.");
            return false;
        }

        // 3. Busquem el pacient en la unitat d'origen
        Pacient pTrobat = null;
        for (int i = 0; i < uOrigen.getLlista().size() && pTrobat == null; i++) {
            Pacient p = uOrigen.getLlista().get(i);
            if (p.getCodi().equalsIgnoreCase(codi)) {
                pTrobat = p;
            }
        }

        // 4. Si el trobem, fem el canvi
        if (pTrobat != null) {
            uOrigen.eliminar(codi);
            uDesti.afegir(pTrobat);
            System.out.println("Pacient " + pTrobat.getNom() + " mogut correctament.");
            return true;
        } else {
            System.out.println("Error: El pacient amb codi " + codi + " no està en " + origen);
            return false;
        }
    }

    public boolean donarAlta(String codi) {
        Pacient pTrobat = null;
        Unitat unitatOnEstava = null;

        // 1. Busquem el pacient recorrent totes les unitats
        for (int i = 0; i < llistaUnitats.size() && pTrobat == null; i++) {
            Unitat u = llistaUnitats.get(i);

            // Dins de cada unitat, busquem el pacient
            for (int j = 0; j < u.getLlista().size() && pTrobat == null; j++) {
                Pacient p = u.getLlista().get(j);
                if (p.getCodi().equalsIgnoreCase(codi)) {
                    pTrobat = p;
                    unitatOnEstava = u;
                }
            }
        }

        // 2. Si l'hem trobat, l'eliminem de la unitat corresponent
        if (pTrobat != null) {
            unitatOnEstava.eliminar(codi);
            System.out.println(
                    "Alta tramitada: El pacient " + pTrobat.getNom() + " ha eixit de " + unitatOnEstava.getNom());
            return true;
        } else {
            System.out.println("Error: No s'ha trobat cap pacient amb el codi " + codi);
            return false;
        }

    }

    // Fase 5.i: Buscar pacient per codi
    public Pacient buscarPacient(String codi) {
        for (Unitat u : llistaUnitats) {
            for (Pacient p : u.getLlista()) {
                if (p.getCodi().equalsIgnoreCase(codi)) {
                    return p;
                }
            }
        }
        return null;
    }

    public String getUnitatDePacient(String codi) {
        for (Unitat u : llistaUnitats) {
            for (Pacient p : u.getLlista()) {
                if (p.getCodi().equalsIgnoreCase(codi)) {
                    return u.getNom();
                }
            }
        }
        return null;
    }

    public void mostrarInfoPacient(String codi) {
        Pacient p = buscarPacient(codi);
        String unitat = getUnitatDePacient(codi);
        if (p != null && unitat != null) {
            System.out.println("Pacient: " + p.getNom());
            System.out.println("Codi: " + p.getCodi());
            System.out.println("Dies ingressat: " + p.getDiesIngres());
            System.out.println("Unitat: " + unitat);
        } else {
            System.out.println("No s'ha trobat cap pacient amb codi " + codi);
        }
    }

    // Fase 5.j: Mostrar estat d'una unitat
    public void mostrarEstatUnitat(String nomUnitat) {
        Unitat unitatTrobat = null;
        for (Unitat u : llistaUnitats) {
            if (u.getNom().equalsIgnoreCase(nomUnitat)) {
                unitatTrobat = u;
            }
        }
        if (unitatTrobat == null) {
            System.out.println("Unitat '" + nomUnitat + "' no existeix.");
        } else {
            System.out.println("Estat de la unitat '" + unitatTrobat.getNom() + "':");
            for (Pacient p : unitatTrobat.getLlista()) {
                System.out.println(" - " + p.getNom() + " (" + p.getCodi() + ") - Dies: " + p.getDiesIngres());
            }
            System.out.println("Total llits ocupats en unitat: " + unitatTrobat.getLlista().size());
        }
    }

    // Fase 5.k: Pacients amb més de 30 dies
    public void listarIngressosLlargs() {
        System.out.println("Pacients amb més de 30 dies d'ingrés:");
        for (Unitat u : llistaUnitats) {
            for (Pacient p : u.getLlista()) {
                if (p.getDiesIngres() > 30) {
                    System.out.println(" - " + p.getNom() + " (" + p.getCodi() + ") - " + p.getDiesIngres()
                            + " dies - Unitat: " + u.getNom());
                }
            }
        }
    }

    // Fase 6.l: Comparar dos pacients per dies
    public void compararPacients(String codi1, String codi2) {
        Pacient p1 = buscarPacient(codi1);
        Pacient p2 = buscarPacient(codi2);
        if (p1 == null || p2 == null) {
            System.out.println("Un o dos pacients no existeixen.");
        } else {
            if (p1.getDiesIngres() > p2.getDiesIngres()) {
                System.out.println(p1.getNom() + " porta més dies ingressat (" + p1.getDiesIngres() + ") que "
                        + p2.getNom() + " (" + p2.getDiesIngres() + ").");
            } else if (p1.getDiesIngres() < p2.getDiesIngres()) {
                System.out.println(p2.getNom() + " porta més dies ingressat (" + p2.getDiesIngres() + ") que "
                        + p1.getNom() + " (" + p1.getDiesIngres() + ").");
            } else {
                System.out.println("Els dos pacients porten els mateixos dies: " + p1.getDiesIngres());
            }
        }
    }

    // Fase 6.m: totals
    public int totalPacientsUnitat(String nomUnitat) {
        for (Unitat u : llistaUnitats) {
            if (u.getNom().equalsIgnoreCase(nomUnitat))
                return u.getLlista().size();
        }
        return 0;
    }

    public int totalPacientsHospital() {
        return getOcupacioActual();
    }

    // Fase 6.n: extrems dins d'una unitat
    public Pacient pacientMesDiesUnitat(String nomUnitat) {
        Unitat uTrobat = null;
        for (Unitat u : llistaUnitats)
            if (u.getNom().equalsIgnoreCase(nomUnitat))
                uTrobat = u;
        if (uTrobat == null || uTrobat.getLlista().isEmpty())
            return null;
        Pacient millor = uTrobat.getLlista().get(0);
        for (Pacient p : uTrobat.getLlista())
            if (p.getDiesIngres() > millor.getDiesIngres())
                millor = p;
        return millor;
    }

    public Pacient pacientMenysDiesUnitat(String nomUnitat) {
        Unitat uTrobat = null;
        for (Unitat u : llistaUnitats)
            if (u.getNom().equalsIgnoreCase(nomUnitat))
                uTrobat = u;
        if (uTrobat == null || uTrobat.getLlista().isEmpty())
            return null;
        Pacient millor = uTrobat.getLlista().get(0);
        for (Pacient p : uTrobat.getLlista())
            if (p.getDiesIngres() < millor.getDiesIngres())
                millor = p;
        return millor;
    }

    public void mostrarExtremsUnitat(String nomUnitat) {
        Pacient max = pacientMesDiesUnitat(nomUnitat);
        Pacient min = pacientMenysDiesUnitat(nomUnitat);
        if (max == null || min == null) {
            System.out.println("Unitat buida o no existeix: " + nomUnitat);
        } else {
            System.out.println("A la unitat " + nomUnitat + ":");
            System.out.println(" - Més dies: " + max.getNom() + " (" + max.getCodi() + ") - " + max.getDiesIngres());
            System.out.println(" - Menys dies: " + min.getNom() + " (" + min.getCodi() + ") - " + min.getDiesIngres());
        }
    }

    // Fase 7.o: controlar aleatori d'un pacient d'una unitat
    public Pacient pacientAleatoriUnitat(String nomUnitat) {
        Unitat uTrobat = null;
        for (Unitat u : llistaUnitats)
            if (u.getNom().equalsIgnoreCase(nomUnitat))
                uTrobat = u;
        if (uTrobat == null || uTrobat.getLlista().isEmpty())
            return null;
        Random rnd = new Random();
        int idx = rnd.nextInt(uTrobat.getLlista().size());
        return uTrobat.getLlista().get(idx);
    }
}
```

:::
::::

### 🧠 Exercici 6: Mòdul de Seguretat per al Sistema de Trànsit Urbà

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


>L'ús de l'**Enum** és obligatori per a evitar que el >sistema accepte estats invàlids (com "Blau" o números >arbitraris). Això garanteix la robustesa del >programari davant errors humans de programació.



#### 📦 Codi Java
:::: tabs
=== Java

::: tabs
== Semafor

```java
public class Semafor {

    public enum ColorSemafor {
    VERD, GROC, ROIG
}
    // Estat Intern
    private ColorSemafor estatActual;

    // Protocol d'Inici: Per defecte en ROIG
    public Semafor() {
        this.estatActual = ColorSemafor.ROIG;
    }

    // Mòdul de Canvi
    public void canviarEstat(ColorSemafor nouColor) {
        this.estatActual = nouColor;
    }

    // Interfície d'Usuari
    public void instruccioConductor() {
        switch (this.estatActual) {
            case VERD:
                System.out.println("Pots passar.");
                break;
            case GROC:
                System.out.println("Atenció! Frena si pots.");
                break;
            case ROIG:
                System.out.println("Parar.");
                break;
            default:
                // Encara que amb Enum és difícil arribar ací, és bona pràctica
                System.out.println("Error de sistema.");
                break;
        }
    }
}
```
:::

::: tabs
== Control Transit

```java
public class ControlTransit {
    public static void main(String[] args) {
        // 1. Instanciar el semàfor
        Semafor miSemafor = new Semafor();

        // 2. Verificar estat inicial (hauria de ser ROIG -> "Parar")
        System.out.print("Estat inicial: ");
        miSemafor.instruccioConductor();

        // 3. Canviar a VERD i mostrar instrucció
        System.out.print("Canvi a VERD: ");
        miSemafor.canviarEstat(ColorSemafor.VERD);
        miSemafor.instruccioConductor();

        // 4. Canviar a GROC i mostrar instrucció
        System.out.print("Canvi a GROC: ");
        miSemafor.canviarEstat(ColorSemafor.GROC);
        miSemafor.instruccioConductor();
    }
}
```

:::
::::
