
# 6. Exemples
## Amplicació videojoc
A continuació trobaràs una ampliació del sistema de videojoc utilitzant en el tema anterior. En aquest exemple, el programa principal `Joc` gestionarà tant les excepcions estàndard de Java com una excepció personalitzada per a situacions específiques del joc.

> Referència: [Exemples UT8: videojoc](https://ggpro-java.github.io/UF8-Lri7M8sjq0xxs9rFSJME/ca/6-exemples.html)

## 6.1 Gestió d'errors en el Videojoc

En un entorn real, no podem permetre que el joc es tanque si un usuari introdueix malament un número o si un personatge intenta accedir a una posició inexistent de l'equip. Utilitzarem blocs `try-catch-finally` per a fer el codi més robust.



### 6.1. Definició de l'Excepció Pròpia

Primer, creem una excepció específica per a quan un personatge es queda sense vida. Com s’explica en la documentació, ha d’heretar de la classe `Exception`.



::: tabs
== Java
```java
// Excepció personalitzada per a la lògica del joc
public class PersonatgeDerrotatException extends Exception {
    public PersonatgeDerrotatException(String nom) {
        super("El personatge " + nom + " ha caigut en combat i no pot actuar!");
    }
}
```
:::
### 6.2. Actualització de la Interficie `Atacant`

És fonamental indicar en la interfície que el mètode `atacar()` pot llançar una excepció. Així, qualsevol classe que la implemente estarà obligada a gestionar-ho o propagar-ho.


::: tabs
== Java
```java
public interface Atacant {
    // Indiquem que pot llançar l'excepció personalitzada
    void atacar() throws PersonatgeDerrotatException;
}

```
:::

### 6.3. Classes concretes i validació

La classe `Guerrer` implementa la interfície i realitza la comprovació. Si la vida és `0` o inferior, llancem l'excepció.


::: tabs
== Java
```java
public class Guerrer extends Personatge implements Atacant {
    public Guerrer(String nom) {
        super(nom, 100, 30, 5);
    }

    @Override
    public void atacar() throws PersonatgeDerrotatException {
        if (this.vida <= 0) {
            // Llançament manual de l'excepció
            throw new PersonatgeDerrotatException(this.nom + " no pot atacar perquè està derrotat!");
        }
        System.out.println(this.nom + " clava l'espasa!");
    }

    @Override
    public void pujarNivell() {
        this.vida += 20;
        this.atacFisic += 10;
    }
}
```
:::
### 6.4. El programa principal: Control d'excepcions

En el mètode `main`, gestionarem les excepcions més habituals: `ArithmeticException`, `InputMismatchException`, `IndexOutOfBoundsException` i la nostra `PersonatgeDerrotatException`.



::: tabs
== Java

```java

import java.util.ArrayList;
import java.util.Scanner;
import java.util.InputMismatchException;

public class JocExemple {
    public static void main(String[] args) {
        ArrayList<Personatge> equip = new ArrayList<>();
        equip.add(new Guerrer("Thor"));
        
        Scanner in = new Scanner(System.in);
        
        try {
            // 1. Error de format: Introduir lletres en lloc de números
            System.out.print("Introdueix l'índex del personatge: ");
            int pos = in.nextInt(); 

            // 2. Error d'índex: Accedir a una posició que no existeix
            Personatge p = equip.get(pos); 

            // 3. Error de lògica pròpia: El personatge està mort
            p.rebreDany(200); 
            if (p instanceof Atacant) {
                ((Atacant) p).atacar();
            }

            // 4. Error aritmètic: Divisió per zero
            System.out.print("Divideix el botí entre quants jugadors? ");
            int jugadors = in.nextInt();
            int botí = 100 / jugadors;
            System.out.println("Cada un rep: " + botí);

        } catch (InputMismatchException e) {
            System.err.println("Error: Has d'introduir un número sencer.");
        } catch (IndexOutOfBoundsException e) {
            System.err.println("Error: El personatge no existeix a l'equip.");
        } catch (ArithmeticException e) {
            System.err.println("Error: No es pot dividir el botí per zero.");
        } catch (PersonatgeDerrotatException e) {
            System.err.println("Error del joc: " + e.getMessage());
        } catch (Exception e) {
            // Captura qualsevol altra excepció no prevista
            System.err.println("Error inesperat: " + e.toString());
        } finally {
            // S'executa sempre, ocórrega o no una excepció
            System.out.println("Sessió de joc finalitzada.");
        }
    }
}
```
:::