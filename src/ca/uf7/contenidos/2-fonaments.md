# 2. Fonaments d'una classe

Una **classe** descriu un conjunt d'objectes que comparteixen una informació semblant (atributs) i un comportament comú (mètodes).

Les definicions comunes com el nom de la classe, els noms dels atributs i els mètodes es declaren una única vegada dins la classe, independentment de quants objectes d'eixa classe es creen.

**Una classe es pot entendre com un motle a partir del qual es poden construir objectes.**

Abans d'utilitzar un objecte, s'ha de definir la classe a la qual pertany. Aquesta definició inclou generalment:

- Atributs: Són les variables associades als objectes. Segons el llenguatge de programació, poden tenir diferents nivells d'accés (com ara públics, privats o protegits).
- Mètodes: Són les accions que poden realitzar els objectes. També poden estar subjectes a diferents nivells d'accés.

La sintaxi d'una classe és la següent:

::: tabs
== Java

```java
[accés] class nomDeClase {
    [accés] [static] tipus atribut1;
    [accés] [static] tipus atribut2;
    //…més atributs...

    [accés] [static] tipus métode1(llistaDeParàmetres) {
        //...codi del mètode...
    }
    [accés] [static] tipus mètode2(llistaDeParàmetres) {
        //...codi del mètode… 
    }
    //… més mètodes...
}
```

:::

Vegem un exemple:

La classe Persona conté dos atributs (variables) per a emmagatzemar dades sobre una persona (nom i edat) a més de diversos mètodes (funcions) que fan coses amb aquestes dades.

::: tabs
== Java

Fitxer *Persona.java*:

```java
public class Persona {
    String nom; int edat;

    // Estableix el nom de la persona
    void setNom(String n) {
        nom = n;
    }

    // Estableix l'edat de la persona 
    void setEdat(int e) {
        edat = e;
    }

    // Retorna el nom de la persona
    String getNom() {
        return nom;
    }

    // Retorna l'edat de la persona 
    int getEdat() {
        return edat;
    }

    // Mostra el seu nom per pantalla 
    void imprimeixNom() {
        System.out.println(nom);
    }

    // Retorna true si és major d'edat, false en cas contrari boolean
    boolean esMajorEdat() {
        return (edat >= 18)
    }
}
```

:::

Una classe definida per a representar un tipus d'entitat (en l'exemple, *Persona*) ens permetrà crear tants objectes d'eixe tipus com necessitem, cadascun amb les seues dades pròpies (en l'exemple, *nom* i *edat*). Els mètodes ens permetran consultar o modificar la informació de cada objecte. Això s'explica en més detall en el següent apartat.

També és important entendre que, en molts llenguatges orientats a objectes, cada classe pot definir-se en un arxiu separat amb el mateix nom que la classe, i posteriorment es poden utilitzar aquestes classes des d'altres parts del programa. Generalment, un altre arxiu contindrà el programa principal, on s'executa el codi principal i es poden crear objectes d'eixes classes o usar els seus mètodes i atributs.

Els atributs i mètodes d'una classe es coneixen com els membres de la classe.

**Els atributs** (és a dir, les variables associades als objectes) **s'anomenen també variables d'instància**, perquè cada objecte de la classe té la seua pròpia còpia d'aquestes variables. Això vol dir que les dades de cada objecte són independents de les dels altres.

Alguns llenguatges també permeten declarar membres com a estàtics (amb paraules com `static`). En aquest cas, l'atribut o mètode no està associat a una instància concreta, sinó a la classe en general, i es pot utilitzar sense haver creat cap objecte. Aquests membres s'anomenen atributs de classe i mètodes de classe.
