# 7. Eixida i entrada estàndard

## 7.1. Eixida estàndard

La majoria de llenguatges de programació proporcionen mecanismes per a mostrar informació per pantalla. Els conceptes bàsics són:

- Imprimir text per pantalla
- Imprimir text per pantalla i introduir un salt de línia
- Mostrar missatges d'error

Els llenguatges solen distingir entre l'eixida estàndard (per a informació normal) i l'eixida d'error (per a missatges d'error o avisos).

Per exemple:

::: tabs
== Java

```java
public static void main(String[] args){

   System.out.print("HOLA "); 
   System.out.println("mon");
   System.err.println("Missatge d'error");
}
```

Eixida:
```
HOLA mon  
Missatge d'error
```

:::

També poden imprimir-se variables de qualsevol tipus, així com combinacions de text i variables concatenades amb l'operador +:

::: tabs
== Java

```java
public static void main(String[] args){
   String nombre = "Pepito";
   int edad = 25;
   System.out.println(nombre);
   System.out.println(edad);
   System.out.println(nombre + " tiene " + edad + " años");
}
```

Eixida:
```
Pepito
25
Pepito tiene 25 años
```

:::

## 7.2. Entrada estàndard

L'entrada estàndard (llegir informació del teclat, escrita per l'usuari) és una funcionalitat present en tots els llenguatges de programació, encara que la implementació pot variar segons el llenguatge.

Els conceptes generals per a la lectura de dades són:

- Llegir cadenes de text
- Llegir nombres enters
- Llegir nombres decimals
- Llegir caràcters individuals

Normalment cal inicialitzar un objecte o estructura que permeta llegir de l'entrada estàndard:

::: tabs
== Java

```java
Scanner reader = new Scanner(System.in);
```

:::

Una vegada inicialitzat, podem utilitzar-lo per llegir diferents tipus de dades:

::: tabs
== Java

```java
String texto = reader.nextLine();
```

:::

Els mètodes disponibles per llegir diferents tipus de dades solen incloure:

- Llegir cadenes de text completes
- Llegir nombres enters de diferents mides
- Llegir nombres decimals de diferent precisió
- Llegir paraules individuals (fins a un espai)

::: tabs
== Java

Per a poder utilitzar la classe Scanner és necessari importar-la:

```java
import java.util.Scanner;
```

:::

**Exemple:** llegim una cadena de text i la mostrem per pantalla:

::: tabs
== Java

```java
import java.util.Scanner;

public class EjemploScanner{

   public static void main(String[] args){
     String nom;
     Scanner entrada = new Scanner (System.in);
     System.out.println ("Introdueix el teu nom: ");
     nom = entrada.nextLine();
     System.out.println ("Hola " + nom);
   }
}
```

Eixida:
```
Introdueix el teu nom: Pepito
Hola Pepito
```

:::

**Exemple:** llegim un valor decimal:

El programa demana a l'usuari que introduïsca el radi d'un cercle, després calcula la seua àrea i circumferència, finalment el mostra per pantalla.

::: tabs
== Java

```java
import java.util.Scanner;

public class EjemploScanner{

   public static void main(String[] args){
     double radio, area, circumferencia;
     Scanner entrada = new Scanner (System.in);
     System.out.println ("Introdueix el radi: ");
     radio = entrada.nextDouble();
     area = Math.PI * Math.pow(radio, 2);
     circumferencia = 2 * Math.PI * radio;
     System.out.println ("L'àrea és " + area);
     System.out.println ("La circumferència és " + circumferencia);
   }
}
```

Eixida:
```
Introdueix el radi: 2,9
L'àrea és 26.42079421669016
La circumferència és: 18.2212373908208
```

:::

::: info Important
Per comprendre millor com funcionen les entrades i eixides en els diferents llenguatges, és recomanable consultar les funcionalitats específiques de cada llenguatge. Cada llenguatge té les seues pròpies biblioteques i mètodes per gestionar l'entrada i eixida de dades.
👉 **Consulta l'apartat "[Funcionalitats dels llenguatges de programació](/ca/uf3-2/contenidos/11-funcionalitats)"** per a coneixer alguns tipus de funcionalitats i per a reforçar els tipus d'operacions d'entrada de dades.
:::