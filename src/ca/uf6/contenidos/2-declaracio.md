# 2. Declaració d'una funció

**Declarar una funció simplement significa crear-la perquè després puga ser anomenada (utilitzada) des d'un altre lloc del codi del nostre programa.**

Una funció s'estructura en **capçalera** i **cos**.

La capçalera és la línia que defineix la signatura de la funció. Normalment conté:

- **Modificadors** (si el llenguatge els utilitza): En alguns llenguatges com Java poden aparéixer paraules com `public`, `private`, `static`, etc. El seu ús pot variar segons el context i el llenguatge.
- **Tipus de retorn**: Indica el tipus de dada que la funció retornarà quan finalitze la seua execució. Pot ser `int`, `double`, `boolean`, `string`, o qualsevol altre tipus definit pel llenguatge. Si no retorna cap valor, s'indica amb paraules com `void`, `None` o equivalents.
- **Nom de la funció**: És un identificador únic que es farà servir per a cridar la funció.
- **Llista de paràmetres**: Opcionalment, s'hi poden definir dades d'entrada que la funció rebrà per a operar amb elles. Es declara entre parèntesis, separant els paràmetres per comes, indicant-ne el nom i, si cal, el tipus.

El cos de la funció és un bloc de codi que es troba entre claus (`{}`) o indentacions, segons el llenguatge. Conté les instruccions que s'executaran cada vegada que la funció siga cridada.

::: tabs
== Java

```java
[Modificador_de_funció] Tipus_retornat nom_de_funció (llista_de_paràmetres)
{
  ...
}
```

:::

Exemples de funcions:

::: tabs
== Java

```java
public static void imprimeixHolaMon() { 
  System.out.println("Hola món");
}
```

:::

Aquest és un exemple molt senzill d'una funció anomenada 'imprimeixHolaMon', que no té paràmetres d'entrada (no hi ha res entre els parèntesis) i no retorna cap valor (indicat per void). Quan la diguem l'única cosa que farà serà escriure per pantalla el missatge "Hola món".

::: tabs
== Java

```java
public static void imprimeixHolaNom(String nom) { 
  System.out.println("Hola " + nom);
}
```

:::

Aquesta funció es diu 'imprimeixHolaNom', té com a paràmetre d'entrada una cadena anomenada 'nom' i no retorna res. Quan la cridem ens imprimirà per pantalla el text "Hola" seguit del nom que li passarem com a paràmetre.

::: tabs
== Java

```java
public static int doble(int a) { 
  int resultat = a * 2; 
  return resultat;
}
```

:::

Aquesta funció es diu 'doble', té com a paràmetre d'entrada una dada entera anomenada 'a' i retorna una dada també entera. Quan la cridem calcularà el doble de 'a' i el retornarà.

::: tabs
== Java

```java
public static int multiplica(int a, int b) { 
int resultat = a * b;
return resultat;
}
```

:::

Aquesta funció es diu 'multiplica', té dos paràmetres d'entrada enters anomenats 'a' i 'b' i retorna una dada també entera. Quan la cridem calcularà a*b i ho retornarà.

::: tabs
== Java

```java
public static double maxim(double valor1, double valor2) { 
  double max;
  if (valor1 > valor2)
    max = valor1;
  else
    max = valor2;
  return max;
}
```

:::

Aquesta funció es diu 'maxim, té dos paràmetres d'entrada reals anomenats 'valor1' i 'valor2' i retorna una dada tam bé real. Quan la cridem calcularà el màxim entre 'valor1' i 'valor2' i ho retornarà.

::: tabs
== Java

```java
public static int sumaVector(int v[]) { 
  int suma = 0;
  for (int i = 0; i < v.length; i++) 
    suma += v[i];
  return suma;
}
```

:::

Aquesta funció es diu 'sumaVector', té com a paràmetre d'entrada un vector d'enters anomenat 'v' i retorna una dada entera. Quan la cridem recorrerà el vector 'v', calcularà la suma de tots els seus elements i retornarà el resultat.

És important saber que **les funcions es declaren fora de la funció principal**, però dins del bloc o àmbit corresponent (com una classe, mòdul o fitxer, segons el llenguatge).

::: tabs
== Java

```java
public class programadeprova {

    public static void imprimeixHolaMon() {
        System.out.println("Hola món");
    }

    public static int doble(int a) {
        int resultat = a * 2;
        return resultat;
    }

    public static int multiplica(int a, int b) {
        int resultat = a * b;
        return resultat;
    }

    public static void main(String[] args) {
        // Un programa sempre comença executant-se per la funció main.
        // Ací va el codi principal del nostre programa.
    }
}
```

En aquest programa tenim 4 funcions: imprimeixHolaMon, doble, multiplica i main. Sí, el 'main' on sempre has programant fins ara és, en efecte, una funció, però una mica especial: 'main' es la funció principal, el punt d'inici d'un programa.

És obligatori que tot programa Java tinga una funció main. Si et fixes, és una funció que rep com a paràmetre un String[] (vector de String) i no retorna res (encara que podria retornar un int). El per què d'això ho veurem més endavant.

Les 3 funcions que hem declarat a dalt del main per elles mateixes no fan res, simplement estan ací esperant que siguen anomenades (utilitzades), normalment des del propi main.

:::
