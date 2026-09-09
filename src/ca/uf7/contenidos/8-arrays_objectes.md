# 8. ArrayList d'objectes

En moltes ocasions, no sabem quants objectes necessitarem emmagatzemar durant l'execució d'un programa. Mentre que els arrays convencionals tenen una mida fixa que cal definir en el moment de la seua creació, Java proporciona la classe `ArrayList` (dins del paquet `java.util`), que permet gestionar col·leccions d'objectes de forma dinàmica.

## 8.1. Característiques de l'ArrayList

* **Mida dinàmica**: La col·lecció creix o s'encull automàticament a mesura que s'afegeixen o s'eliminen elements.
* **Tipus genèric**: Es pot especificar quin tipus d'objecte contindrà l'ArrayList utilitzant la sintaxi `<Tipus>`, assegurant que tots els elements siguen d'eixa classe o derivats.
* **Accés per índex**: Igual que els arrays, els elements estan ordenats i es pot accedir a ells mitjançant un índex (el primer element és el 0).

## 8.2. Operacions comunes

Per a utilitzar un `ArrayList` d'objectes d'una classe pròpia (per exemple, la classe `Persona`), seguirem aquesta sintaxi:

::: tabs
== Java

```java
import java.util.ArrayList; // Cal importar la classe

public class GestioPersones {
    public static void main(String[] args) {
        // 1. Declaració i instanciació
        ArrayList<Persona> llista = new ArrayList<>();

        // 2. Afegir objectes (instanciació directa)
        llista.add(new Persona("Joan", 20));
        llista.add(new Persona("Anna", 25));

        // 3. Obtenir el nombre d'elements
        int total = llista.size(); 

        // 4. Accedir a un element concret (per índex)
        Persona p = llista.get(0); 
        System.out.println("La primera persona és: " + p.getNom());

        // 5. Recórrer la llista amb un bucle for-each
        for (Persona per : llista) {
            per.imprimeixNom(); // Crida al mètode de la classe
        }

        // 6. Eliminar un element
        llista.remove(0); // Elimina el primer element i reajusta la llista
    }
}