# 4. Interfícies

Una **interfície** és una declaració d’**atributs i mètodes sense implementació**.  
Si una classe és una plantilla per a crear objectes, una **interfície és una plantilla per a crear classes**.

S’utilitzen per a definir un **contracte** que tota classe que la implemente ha de complir.

> **IMPORTANT**  
> Una interfície declara **què pot fer un objecte**, però **no com ho fa**.

---

## 4.1 Característiques clau

- **No es poden instanciar**  
  No es pot fer `new Interficie()`.

- **Herència múltiple**  
  Una classe pot implementar **diverses interfícies**, a diferència de l’herència de classes, que és única.

- **Contracte obligatori**  
  Si una classe implementa una interfície, **ha d’implementar tots els seus mètodes**  
  (o declarar-se també com a classe abstracta).

- **Constants**  
  Els atributs definits en una interfície són automàticament  
  `public static final`.

---

## 4.2 Sistema de pagaments

Imagina que estem desenvolupant una **tenda online**.  
Podem pagar de moltes maneres diferents, però **totes han de disposar d’un mètode per a processar el pagament**.


:::: tabs
=== Java

::: tabs
== Pagament

```java
public interface MetodePagament {
    // Totes les classes que implementen això han de tindre aquest mètode
    void processarPagament(double importPagament);
}
```

== Targeta

```java
public class Targeta implements MetodePagament {
    @Override
    public void processarPagament(double importPagament) {
        System.out.println("Connectant amb el banc... Pagament de " + importPagament + "€ realitzat amb targeta.");
    }
}
```

== Paypal

```java
public class PayPal implements MetodePagament {
    @Override
    public void processarPagament(double importPagament) {
        System.out.println("Redirigint a la web de PayPal... Pagament de " + importPagament + "€ realitzat.");
    }
}
```
== Tenda

```java
public class Tenda {
    public static void main(String[] args) {
        // Podem utilitzar la interfície com a tipus de referència
        MetodePagament pagament;

        // L'usuari tria PayPal
        pagament = new PayPal();
        pagament.processarPagament(45.99);

        // L'usuari canvia a Targeta
        pagament = new Targeta();
        pagament.processarPagament(20.00);
    }
}
```


:::
::::

4.3 Interfícies buides

A vegades, una interfície no té mètodes. S'utilitza com una etiqueta per a indicar al compilador o a altres parts del programa que un objecte té una propietat especial.

Exemple: Control de Seguretat Volem marcar quins objectes del nostre sistema són "perillosos" i no poden passar per un escàner.

### `instanceof` — resum ràpid

>L’operador **`instanceof`** s’utilitza per a comprovar si un objecte **pertany a una classe** o **implementa una interfície** determinada.
>
>- Retorna **`true`** o **`false`**
>- Es comprova el **tipus real de l’objecte** en temps d’execució
>- S’utilitza sovint amb:
>  - **polimorfisme**
>  - **interfícies**
>  - **interfícies buides**


La interfície **`Perillos`** serveix per a **marcar** quines classes representen objectes perillosos.  
No defineix cap comportament; permet **identificar-los en temps d’execució** mitjançant `instanceof`.



:::: tabs
=== Java

::: tabs
== Perillos

```java

public interface Perillos {
}
```
== Ganivet 

```java
public class Ganivet implements Perillos {
}

```

== Ganivet 

```java
if (objecte instanceof Perillos) {
    System.out.println("Accés denegat: objecte perillós");
}

```

:::

::::

## 4.3 Resum comparatiu: classes abstractes i interficies

### Taula resum: classe abstracta vs interfície vs interfície buida

| Característica | Classe abstracta | Interfície | Interfície buida |
|--------------|------------------|------------|------------------------------|
| Es pot instanciar | ❌ No | ❌ No | ❌ No |
| Pot tindre mètodes | ✅ Sí | ❌ (per defecte) | ❌ No |
| Pot tindre mètodes abstractes | ✅ Sí | ✅ Sí | ❌ No |
| Pot tindre mètodes amb codi | ✅ Sí | ❌ | ❌ |
| Pot tindre atributs | ✅ Sí | ❌ | ❌ |
| Atributs implícits | — | `public static final` | `public static final` |
| Herència múltiple | ❌ No | ✅ Sí | ✅ Sí |
| Comparteix comportament | ✅ Sí | ❌ | ❌ |
| * Defineix un contracte | ⚠️ Parcial | ✅ Sí | ❌ |
| Marca una propietat | ❌ No | ❌ No | ✅ Sí |
| Ús típic | Base comuna amb codi | Definir què ha de fer una classe | Indicar una característica especial |
| Relació amb `instanceof` | Ocasional | Habitual | **Molt habitual** |


\* **Contracte**: definir quins mètodes ha de tindre una classe i quina funcionalitat ha d’oferir,
sense especificar com s’implementa.
