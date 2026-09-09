# 1. Diccionaris o Mapes (HashMap)

Un **diccionari** o **mapa** és una estructura de dades que permet emmagatzemar informació en **parelles clau-valor**.  
A diferència d’una llista, on els elements tenen una posició numèrica (índex), ací cada valor s’identifica amb una **clau única**.

En Java, aquesta estructura es coneix com a **HashMap**, però en altres llenguatges rep noms com:
- **Dictionary** (C#, Python)
- **Map** (C++, Kotlin, JavaScript)
- **Associative array** (PHP)

## Concepte general
- Cada element està format per una **clau** i un **valor**.  
- Les claus no poden repetir-se.  
- Els valors poden ser de qualsevol tipus (text, número, objecte, etc.).  
- Les operacions de cerca per clau són molt ràpides.

## Operacions bàsiques (aplicables a qualsevol llenguatge)

| Operació | Descripció | 
|-----------|-------------|
| **put / set / insert** | Afig una nova parella clau-valor |
| **get / access** | Retorna el valor associat a una clau  |
| **remove / delete** | Elimina una parella clau-valor | 
| **containsKey / in** | Comprova si existeix una clau | 
| **keySet / keys** | Retorna totes les claus |
| **values** | Retorna tots els valors | 

---

Per exemple, podem crear un HashMap per a emmagatzemar el nom i edat d'una persona:

::: tabs
== Java

```java
HashMap<String, Integer> persona = new HashMap<>();
```

:::

Ací declarem un mapa que tindrà cadenes (String) com a claus i enters (Integer) com a valors.

Per a afegir dades al HashMap fem servir el mètode `put`:

::: tabs
== Java

```java
persona.put("Josep", 30); 
persona.put("Maria", 25);
```

:::

Ara hem afegit les dades de Josep (30 anys) i Maria (25 anys) al mapa, fent servir els seus noms com a clau.

Obtenim un valor donada la seua clau:

::: tabs
== Java

```java
int edatMaria = persona.get("Maria"); //edatMaria = 25
```

:::

Vorem que és molt ràpid i fàcil accedir als valors a partir de la clau.

Per recorrer el mapa es pot fer en un **bucle foreach** que itera dirèctament sobre les **entrades** del mapa.

::: tabs
== Java

- Cada entrada (Entry) conté una clau i el valor associat.
- Això s’aconsegueix amb el mètode entrySet(), que retorna un conjunt (Set) d’objectes Map.Entry.
Cada Map.Entry representa una parella clau-valor dins del mapa.

```java
for (Map.Entry<Clau, Valor> entrada : mapa.entrySet()) {
    // Accedim a la clau i al valor
    Clau clau = entrada.getKey();
    Valor valor = entrada.getValue();

    // Fem alguna acció amb ells
    System.out.println(clau + " -> " + valor);
}


```
:::

El exemple complet podria ser el següent:  


## Exemples

::: tabs
== Java

```java
// Importem la llibreria per a poder utilitzar HashMap
import java.util.HashMap;
// Importem la llibreria per a poder utilitzar HashMap
import java.util.HashMap;
import java.util.Map;

public class ExempleHashMap {
  public static void main(String[] args) {

    // Creem un HashMap amb claus String i valors Integer
    HashMap<String, Integer> persona = new HashMap<>();

    // Afegim parelles clau-valor
    persona.put("Josep", 30);
    persona.put("Maria", 25);

    // Accedim a un valor mitjançant la seua clau
    int edatMaria = persona.get("Maria");
    System.out.println("Edat de Maria: " + edatMaria);

    // 🔹 Recorregut amb entrySet()
    for (Map.Entry<String, Integer> entrada : persona.entrySet()) {
      String clau = entrada.getKey();
      int valor = entrada.getValue();
      System.out.println(clau + " - " + valor);
    }

    // Eliminem un element
    persona.remove("Josep");

    // Comprovem si una clau existeix
    System.out.println("Conté Maria? " + persona.containsKey("Maria"));
  }
}


```

