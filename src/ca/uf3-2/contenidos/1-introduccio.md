# 1. Introducció

Els llenguatges de programació moderns són eines de propòsit **general, concurrent i orientats a objectes** que han sigut dissenyats específicament per a tindre tan poques dependències d'implementació com fora possible. El seu objectiu és permetre que els desenvolupadors d'aplicacions escriguen el programa una vegada i l'executen en qualsevol dispositiu, la qual cosa vol dir que **el codi pot escriure's una sola vegada i ser executat en qualsevol mena de dispositius (PC, mòbil, etc.)**.

Algunes de les característiques més importants dels llenguatges de programació orientats a objectes són:

- **Senzillesa**: Són llenguatges senzills d'aprendre.
- **Orientació a Objectes**: En estos llenguatges, a excepció dels tipus fonamentals de variables, tot és un objecte.
- **Capacitat Distribuïda**: Estan molt orientats al treball en xarxa, suportant protocols com TCP/IP, UDP, HTTP i FTP.
- **Robustesa**: Els compiladors detecten molts errors que altres compiladors només detectarien en temps d'execució o fins i tot mai.
- **Seguretat**: Especialment important en el desenvolupament d'aplicacions web i miniaplicacions.
- **Portabilitat**: No hi ha aspectes dependents de la implementació, totes les implementacions segueixen els mateixos estàndards.
- **Neutralitat d'Arquitectura**: El codi generat pel compilador és independent de l'arquitectura i pot executar-se en diferents entorns.
- **Rendiment**: Actualment la velocitat de processament és comparable a la d'altres llenguatges orientats a objectes.
- **Multifil**: Suporten de manera nativa els fils d'execució (threads), sense necessitat de l'ús de llibreries específiques.

## 1.1. Primer exemple

L'aplicació més xicoteta possible és la que simplement imprimeix un missatge en la pantalla. Tradicionalment, el missatge sol ser "Hola Mon!". Això és justament el que fa el següent fragment de codi:

::: tabs
== Java
```java
public class HolaMon{
    public static void main(String[] args){
        System.out.println("Hola món!");
    }
}
```
:::

Cal veure detalladament l'aplicació anterior, línia a línia. Aqueixes línies de codi contenen els components mínims per a imprimir *Hola Món!* en la pantalla. És un exemple molt simple, que no instància objectes de cap altra classe.

::: tabs
== Java
```java
public class HolaMon
```
:::

Aquesta línia declara la classe principal. El nom de la classe especificat en el fitxer font s'utilitza per a crear un fitxer compilat en el directori en el qual es compila l'aplicació.

::: tabs
== Java
```java
public static void main(String[] args)
```
:::

Aquesta línia especifica el mètode principal que l'intèrpret busca per a executar en primer lloc. Els llenguatges de programació utilitzen una paraula clau per a especificar la primera funció a executar. En aquest exemple tan simple no es passen arguments.

- **public** significa que el mètode principal pot ser cridat per qualsevol, incloent l'intèrpret.
- **static** és una paraula clau que li diu al compilador que el mètode es refereix a la pròpia classe i no a cap instància de la classe.
- **void** indica que el mètode principal no retorna res.
- **args[]** és la declaració d'un array de cadenes de text. Aquests són els arguments que es poden passar des de la línia de comandos.

::: tabs
== Java
```java
System.out.println("Hola Món!");
```
:::

Aquesta és la funcionalitat de l'aplicació. Aquesta línia mostra l'ús d'un nom de classe i mètode per a mostrar informació en la pantalla. S'utilitza un mètode que agafa una cadena com a argument i l'escriu en el flux d'eixida estàndard; en aquest cas, la finestra on es llança l'aplicació.

::: tip **IMPORTANT!**

Totes les instruccions (creació de variables, crides a mètodes, assignacions) s'han de finalitzar amb un **punt i coma**.

:::