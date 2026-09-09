# Solucions UF9 - Excepcions

## Exercicis - Nivell bàsic

## 🧠 Exercici 1: El Repte de la Flota Intermodal - Validació de dades
L'empresa de transport **Trans-Java S.A.** vol assegurar que les dades introduïdes a la seua flota de màquines (camions, motos i cotxes) siguen totalment fiables abans de registrar cap actiu.

- **Excepció Pròpia:**  
  Crea una excepció anomenada `MatriculaInvalidaException` heretant de la classe `Exception`.

- **Validació en el Constructor:**  
  El constructor haurà de comprovar que la matrícula assignada a qualsevol actiu tinga un format vàlid (per exemple, exactament 7 caràcters).  
  Si el format no és correcte, s'haurà de llançar la `MatriculaInvalidaException`.

- **Gestió d'errors (`try-catch`):**  
  Al programa principal on es llista tota la flota de manera unificada, simula la creació d'actius dins de blocs `try-catch`.  
  Si algun vehicle llança l'error, s'ha de capturar i mostrar per pantalla, permetent que el programa continue amb la resta de la flota.

#### 📦 Codi Java
:::: tabs
=== Java

::: tabs
== Canvis

```java
// 1. Excepció Pròpia
class MatriculaInvalidaException extends Exception {
    public MatriculaInvalidaException(String missatge) {
        super(missatge);
    }
}

// 2. Modificació de la classe base Vehicle
abstract class Vehicle {
    protected final String matricula;
    protected final String marca;
    protected final String model;

    // Afegim throws al constructor
    protected Vehicle(String matricula, String marca, String model) throws MatriculaInvalidaException {
        if (matricula == null || matricula.length() != 7) {
            throw new MatriculaInvalidaException("La matrícula '" + matricula + "' no té un format vàlid (han de ser exactament 7 caràcters).");
        }
        this.matricula = matricula;
        this.marca = marca;
        this.model = model;
    }

    public abstract void mostrarInfo();
}

/* Nota: Totes les subclasses (Camio, Moto, Cotxe, CamioPerillos) han 
   d'afegir 'throws MatriculaInvalidaException' als seus constructors. */
class Camio extends Vehicle {
    protected final int pesMaxKg;
    public Camio(String matricula, String marca, String model) throws MatriculaInvalidaException {
        super(matricula, marca, model);
        this.pesMaxKg = Aleatoris.pesMaxKg();
    }
    // ... resta de codi idèntic
}

// 3. Modificació del programa principal

import java.util.ArrayList;

public class TransJavaApp {

    public static void main(String[] args) {

        ArrayList<Vehicle> flota = new ArrayList<>();
        try {
            flota.add(new Camio("1234ABC", "Volvo", "FH"));
            flota.add(new CamioPerillos("7777HZD", "MAN", "TGX"));
            flota.add(new Moto("5555-MOT", "Yamaha", "MT-07")); //invalid 8 caracters
            flota.add(new Cotxe("999CAR", "SEAT", "Leon"));//invalid 5 carcter

            for (Vehicle v : flota) {
                v.mostrarInfo(); // polimorfisme
                if (v instanceof MercaderiaPerillosa) {
                    System.out.println("  [ALERTA] Mercaderia perillosa");
                }
                System.out.println("----");
            }
        } catch (MatriculaInvalidaException e) {
            System.out.println("[ERROR DE REGISTRE] " + e.getMessage());
        }
    }
}
```
:::
::::
---
## 🧠 Exercici 2: Sistema de Control d'Actius "ByteMaster" - Seguretat en el Rendiment

El motor de gestió per a l'inventari de **ByteMaster** funciona de manera polimòrfica, però forçar les capacitats del hardware comporta riscos.

- **Excepció Pròpia:**  
  Defineix una nova excepció anomenada `SobreescalfamentException`.

- **Modificació de Contractes (`throws`):**  
  A la interfície d'Alt Rendiment, indica explícitament que l'habilitat de fer `overclock` pot llançar (`throws`) l'excepció `SobreescalfamentException`.

- **Lògica de llançament:**  
  A l'hora d'executar l’`overclock` en les CPU o GPU, si el consum elèctric del dispositiu supera un límit segur (com per exemple els 600W dels 700W màxims possibles), el mètode ha de llançar l'excepció indicant el perill.

- **Bloc `finally`:**  
  Al motor de processament polimòrfic, quan actives i comproves les habilitats, usa un bloc `finally` per a imprimir sempre l'estat d'auditoria d'eficiència energètica de cada component, independentment de si ocorre un error o no.

#### 📦 Codi Java
:::: tabs
=== Java

::: tabs
== Canvis

```java
/// 1. Excepció Pròpia
class SobreescalfamentException extends Exception {
    public SobreescalfamentException(String missatge) {
        super(missatge);
    }
}

// 2. Modificació del contracte
interface Overclockable {
    void ferOverclock() throws SobreescalfamentException;
}

// 3. Modificació en CPU i GPU (exemple amb GPU, aplicable igual a CPU)
class GPU extends ComponentProcessament implements Overclockable, IAAccelerable {
    // ... constructor i altres mètodes ...

    @Override
    public void ferOverclock() throws SobreescalfamentException {
        if (!permetOverclock) {
            System.out.println("  -> Overclock: bloquejat pel fabricant.");
            return;
        }
        if (getConsumW() > 600) {
            throw new SobreescalfamentException("ALERTA CRÍTICA: Risc de sobreescalfament. Consum actual de " + getConsumW() + "W.");
        }
        System.out.println("  -> Aplicant overclock a la GPU... OK");
    }
}

// 4. Modificació del programa principal (bloc try-catch-finally)
public class ByteMasterApp {
    public static void main(String[] args) {
        // ... (inicialització de l'inventari) ...

        for (Producte p : inventari) {
            p.informe();

            try {
                if (p instanceof Overclockable) {
                    ((Overclockable) p).ferOverclock();
                }
                // ... (altres habilitats) ...
            } catch (SobreescalfamentException e) {
                System.out.println("  [EXCEPCIÓ] " + e.getMessage());
            } finally {
                if (p instanceof ComponentProcessament) {
                    ComponentProcessament cp = (ComponentProcessament) p;
                    System.out.println("  [AUDITORIA ENERGÈTICA] Estat: " + (cp.esEficient() ? "Eficaç" : "No eficaç") + " (" + cp.getConsumW() + "W)");
                }
            }
            System.out.println("----");
        }
    }
}
```
:::
::::
---

## Exercicis - Nivell mitjà

## 🧠 Exercici 3: Refugi Vida i Natura - Operacions Segures
Com que el refugi d'animals disposa ara d'un menú interactiu, cal fer que l'aplicació siga totalment resistent a les errades humanes i respecte estrictament la normativa d'adopcions.

- **Excepció Pròpia:**  
  Implementa l'excepció `AdopcioDenegadaException`.

- **Validació Estricta:**  
  Al mètode que gestiona l'opció d'adoptar un animal, si el candidat no compleix els requisits (més de 10 anys, sense vacunar, o ocell salvatge), el mètode ha de llançar la `AdopcioDenegadaException` detallant el problema, en compte de mostrar només un avís.

- **Excepcions de Java:**  
  Quan es demanen les dades numèriques pel menú infinit, captura les excepcions del tipus `InputMismatchException` per evitar l'aturada abrupta del sistema si l'usuari introdueix lletres.  
  A més, vigila el llançament de `NullPointerException` si se sol·licita interactuar amb un codi d'animal inexistent a la teua estructura clau-valor.
#### 📦 Codi Java
:::: tabs
=== Java

::: tabs
== Canvis

```java
// 1. Excepció Pròpia
class AdopcioDenegadaException extends Exception {
    public AdopcioDenegadaException(String missatge) {
        super(missatge);
    }
}

// 2. Modificació del mètode de lectura per usar InputMismatchException
private static int llegirEnter(String missatge) {
    while (true) {
        try {
            System.out.print(missatge);
            int resultat = scanner.nextInt();
            scanner.nextLine(); // Netejem buffer
            return resultat;
        } catch (InputMismatchException e) {
            System.out.println("Error [InputMismatchException]: Has d'introduir un número sencer vàlid.");
            scanner.nextLine(); // Netegem la lletra/símbol incorrecte
        }
    }
}

// 3. Modificació del procés d'adopció i prevenció de NullPointer
private static void processarAdopcio() {
    System.out.println("De quina espècie vols adoptar? (Gos/Gat/Ocell)");
    String especie = scanner.nextLine(); 

    int id = llegirEnter("Introdueix l'ID de l'animal a adoptar: ");
    
    try {
        Animal a = refugi.buscarAnimalPerId(id);
        
        // Prevenció de NullPointerException
        if (a == null) {
            throw new NullPointerException("L'animal amb ID " + id + " no existeix a la base de dades.");
        }
        
        if (!a.getEspecie().equalsIgnoreCase(especie)) {
            throw new AdopcioDenegadaException("L'animal seleccionat no és un " + especie + ".");
        }

        // Validació Estricta
        if (!a.esAptaPerAdopcio()) {
            throw new AdopcioDenegadaException("L'animal '" + a.getNom() + "' no compleix els requisits d'adopció (edat, vacunes o raça salvatge).");
        }

        a.adoptar(); 
        refugi.eliminarAnimal(a); 

    } catch (AdopcioDenegadaException e) {
        System.out.println(" Operació Denegada: " + e.getMessage());
    } catch (NullPointerException e) {
        System.out.println(" Error de Cerca: " + e.getMessage());
    }
}
```
:::
::::
---

## Exercicis - Nivell avançat
<!--
## 🧠 Exercici 4: Cosmolab - Alarmes i Emergències Crítiques
Als prototips experimentals d'hàbitat de **Cosmolab**, qualsevol anomalia ha de ser tractada com una emergència i propagada adequadament.

- **Excepcions Pròpies (múltiples):**

  - Crea la classe `CapacitatExcedidaException` que es llançarà si a una Unitat de cultiu s'intenta afegir una nova planta quan ja s'ha assolit el seu màxim de 30.
  - Crea la classe `AlertaAtmosfericaException` per a les Unitats d'anàlisi atmosfèric en cas que es registre una caiguda dràstica del percentatge d'oxigen.

- **Propagació d'Excepcions ("hot potato"):**  
  L'arquitectura del codi ha de demostrar que els mètodes de les unitats no solucionen l'error, sinó que se'l passen de mètode a mètode recursivament (`throws`) fins a arribar al controlador de les zones.

- **Registre Continu:**  
  Si el programa central captura aquestes falles, haurà d'emetre una alerta d'avaria per a eixa zona, però haurà de poder seguir executant i supervisant la resta d'unitats de la base.

  #### 📦 Codi Java
:::: tabs
=== Java

::: tabs
== Canvis

```java

```
:::
::::
---
-->
