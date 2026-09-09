# 3. Objectes

## 3.1. Instanciació d'un objecte

Quan creem una classe definim un nou tipus de dades que pot utilitzar-se per a instanciar (crear) objectes d'eixa classe. La instanciació es fa de la següent manera:

- En primer lloc, cal declarar una variable del tipus de la classe.
- En segon lloc, es necessitarà una còpia de l'objecte i assignar-la a aqueixa variable.

Per exemple, suposant que ja hem creat la classe Poal:

::: tabs
== Java

En Java, la declaració i la instanciació es poden fer per separat.

La instància es crea utilitzant l'operador `new`, que assigna dinàmicament (és a dir, durant temps d'execució) memòria a un objecte i retorna una referència. Aquesta referència s'emmagatzema en una variable.

```java
Poal p1; // Crea una variable referència anomenada p1 de tipus Poal 
p1 = new Poal(); // Crea un objecte Poal i l'assigna a p1
```

També pot fer-se tot en una sola línia de codi:

```java
Poal p1 = new Poal();
```

:::

## 3.2. Assignació de variables de referència a objectes

Les variables de referència a objectes permeten accedir a l'objecte al qual apunten, però no contenen l'objecte en si, sinó una referència (una mena d'enllaç o adreça) a aquest. Això fa que el comportament d'una assignació entre variables d'objectes no siga una còpia independent, sinó una còpia de la referència.

Per exemple, considera el següent fragment:

::: tabs
== Java

```java
Poal p1 = new Poal(); 
Poal p2 = p1;
```

:::

Podríem pensar que a p2 se li assigna una còpia independent de l'objecte referenciat per p1, però no és així. El que realment ocorre és que la referència emmagatzemada en p1 es copia en p2, de manera que ambdues variables apunten al mateix objecte en memòria.

Per tant, qualsevol canvi realitzat sobre l'objecte a través de p2 afectarà també l'accés a través de p1, ja que és exactament el mateix objecte.

## 3.3 Relacions entre classes

Com hem vist fins ara, es poden ocultar i encapsular diferents atributs i funcions del nostre programa dins les classes, estos seran cridats i tractats des de el programa principal, però estes classes queden aïllades entre sí. Imaginem que tenim una classe Assignatura i un altra Professors, és lògic pensar que cada Assignatura estarà impartida per un o més professors, però si no les relacionem entre sí, mai hi tindrem forma de saber qui imparteix què.

Ara veurem com es poden relacionar les classes entre sí, i a més a més, veurem que segons el tipus de dependència entre les classes, les relacions poden ser de distints tipus.

L'associació és el **procés d'agrupament d'un o diversos objectes i valors dins d'una classe**. Aquesta associació pot ser de dos tipus principals:

- **Agregació**: S'utilitza quan una classe "té" diferents objectes d'una altra classe independent. En aquest cas, els objectes agregats poden existir de manera independent a la classe que els conté.

- **Composició**: Com el nom indica, una classe està composta per altres objectes que li donen sentit. Si la classe principal desapareix, els objectes que la componen també perden la seva raó de ser, ja que depenen completament d'ella per a la seva existència.

La composició crea una relació **'té'** o **'està compost per'**.

Un compte bancari té un titular i un o més autoritzats (tots són persones amb DNI, nom, adreça, telèfon, etc.). A més del saldo, el compte està compost per una sèrie de moviments (cada moviment té associats un tipus, una data, una quantitat, un concepte, un origen o una destinació, etc.). La diferència és que, si el compte desapareix, les persones poden continuar sent clients del banc, tenir altres comptes o passar a formar part del personal del banc. En canvi, els moviments només tenen sentit per a eixe compte concret, de manera que, si el compte desapareix, aquests moviments perden el seu valor.

::: tabs
== Java

```java
public class CompteBancari {
  Persona titular;
  double saldo;
  Moviment moviments[];
  Persona autoritzats[];
  ...
}
public class Persona {
  String dni, nom, adreça, telèfon;
  ...
}
public class Moviment {
  int tipus;
  Date data;
  double quantitat;
  String concepte, origen, destinació;
  ...
}
```

:::

## 3.4. Recol·lector de fem

En molts llenguatges de programació moderns amb gestió de memòria automàtica (com Java, C#, Python, JavaScript, etc.), existeix un procés intern encarregat d'identificar i alliberar els objectes o estructures que ja no s'estan utilitzant. A aquest procés se li sol cridar recol·lecció de fem (o *garbage collection*).

- Automatització: El desenvolupador no ha d'alliberar manualment la memòria de cada objecte; el sistema ho fa per ell.
- Funcionament en segon pla: Habitualment el recol·lector actua en un fil (thread) de baixa prioritat, de manera que no interfereix amb el flux principal del programa.
- Caràcter impredictible: Tot i que el recol·lector s'activa quan detecta que hi ha objectes inactius o sense referències, el moment exacte de la seva execució no es pot preveure amb precisió.
- Criteri d'activació: Cada entorn o màquina virtual decideix quan és el moment més adient per executar la recol·lecció. Això pot basar-se en factors com la quantitat de memòria lliure restant, l'edat dels objectes o períodes de temps predefinits.

En resum, el recol·lector d'elements no utilitzats permet que el programador es concentre en la lògica, mentre que el sistema s'ocupa de gestionar la memòria ocupada pels objectes que ja no són necessaris.
