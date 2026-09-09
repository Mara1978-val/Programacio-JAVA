# Solucions UF5- Funcions

#### Exercicis - Nivell bàsic

## 🧠 Exercici 1

a) Escriu una funció que retorne la suma dels valors d'un vector d'enters.  
### 📦 Codi Java

```java
public static int suma(int[] v) {
    int s = 0;
    for(int x : v){
        s += x;
    }
    return s;
}

```
b) Escriu una funció que retorne la mitjana dels valors d'un vector d'enters.  
### 📦 Codi Java

```java
public static double mitjana(int[] v) {
    return (double)suma(v) / v.length;
}

```

c) Escriu una funció que retorne el valor màxim d'un vector d'enters.  
### 📦 Codi Java

```java
public static int maxim(int[] v) {
    int max = v[0];
    for(int x : v){
        if(x > max){
            max = x;
        }
    }
    return max;
}

```
d) Escriu un programa que cree un vector amb N valors enters (generats de forma aleatòria) i mostre la suma, la mitjana i el màxim.

### 📦 Codi Java

```java
import java.util.Arrays;
import java.util.Random;
import java.util.Scanner;

public class App {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("Introdueix N: ");
        int N = sc.nextInt();

        int[] vec = new int[N];
        Random r = new Random();

        for (int i = 0; i < N; i++) {
            vec[i] = r.nextInt(101); // 0..100
        }

        System.out.println("Vector generat:");
        System.out.println(Arrays.toString(vec));

        System.out.println("Suma = " + suma(vec));
        System.out.println("Mitjana = " + mitjana(vec));
        System.out.println("Màxim = " + maxim(vec));
    }

    public static int suma(int[] v) {
        int s = 0;
        for (int x : v)
            s += x;
        return s;
    }

    public static double mitjana(int[] v) {
        return suma(v) / v.length;
    }

    public static int maxim(int[] v) {
        int max = v[0];
        for (int x : v) {
            if (x > max) {
                max = x;
            }
        }
        return max;
    }
}
```


## 🧠 Exercici 2

a) Escriu una funció que retorne quantes vocals conté una cadena de text.  

### 📦 Codi Java

```java
    public static int comptaVocals(String s) {
        int count = 0;
        s = s.toLowerCase();
        for (char c : s.toCharArray()) {
            if ("aeiou".indexOf(c) != -1) {
                count++;
            }
        }
        return count;
    }
```

b) Escriu una funció que retorne quants espais conté una cadena de text.  

### 📦 Codi Java

```java
    public static int comptaEspais(String s) {
        int count = 0;
        for (char c : s.toCharArray()) {
            if (c == ' ') {
                count++;
            }
        }
        return count;
    }
```

c) Escriu una funció que retorne quantes consonants conté una cadena de text.  

### 📦 Codi Java

```java
    public static int comptaConsonants(String s) {
        int count = 0;
        s = s.toLowerCase();
        for (char c : s.toCharArray()) {
            if (Character.isLetter(c) && "aeiou".indexOf(c) == -1) {
                count++;
            }
        }
        return count;
    }
```

d) Escriu un programa que llig una frase per teclat i mostre el nombre de vocals, el nombre d'espais i el nombre consonants.

### 📦 Codi Java

```java
import java.util.Scanner;

public class App {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("Introdueix una frase: ");
        String frase = sc.nextLine();

        System.out.println("Vocals: " + comptaVocals(frase));
        System.out.println("Espais: " + comptaEspais(frase));
        System.out.println("Consonants: " + comptaConsonants(frase));

    }

    public static int comptaVocals(String s) {
        int count = 0;
        s = s.toLowerCase();
        for (char c : s.toCharArray()) {
            if ("aeiou".indexOf(c) != -1) {
                count++;
            }
        }
        return count;
    }

    public static int comptaEspais(String s) {
        int count = 0;Update 9-exercicis.
        for (char c : s.toCharArray()) {
            if (c == ' ') {
                count++;
            }
        }
        return count;
    }

    public static int comptaConsonants(String s) {
        int count = 0;
        s = s.toLowerCase();
        for (char c : s.toCharArray()) {
            if (Character.isLetter(c) && "aeiou".indexOf(c) == -1) {
                count++;
            }
        }
        return count;
    }

}

```

## 🧠 Exercici 3

a) Escriu una funció que rebrà una cadena i retornarà la contrària (inversa).  

### 📦 Codi Java

```java
    public static String inversa(String s) {
        String rev = "";
        for (int i = s.length() - 1; i >= 0; i--) {
            rev += s.charAt(i);
        }
        return rev;
    }
```
b) Escriu una funció que rebrà dos cadenes i retornarà true o false en funció de si són iguals o no.  

### 📦 Codi Java

```java

    public static boolean iguals(String a, String b) {
        return a.equals(b);
    }
```
c) Escriu un programa que demana per teclat una paraula i mostre si és palíndrom usant les funcions anteriors.

### 📦 Codi Java

```java
import java.util.Scanner;

public class App {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("Introdueix una paraula: ");
        String p = sc.nextLine();

        String rev = inversa(p);

        if (iguals(p, rev))
            System.out.println("És palíndrom");
        else
            System.out.println("No és palíndrom");
    }

    public static String inversa(String s) {
        String rev = "";
        for (int i = s.length() - 1; i >= 0; i--) {
            rev += s.charAt(i);
        }
        return rev;
    }

    public static boolean iguals(String a, String b) {
        return a.equals(b);
    }

}

```


#### Exercicis - Nivell mitjà

## 🧠 Exercici 4

a) Escriu una funció que mostre un menú amb les opcions: sumar, restar, multiplicar, dividir i acabar el programa.  
b) Escriu una funcució que retorne la suma de dos nombres rebuts per paràmetres.  
c) Escriu una funció que retorne la resta de dos nombres rebuts per paràmetres.  
d) Escriu una funció que retorne la multiplicació de dos nombres rebuts per paràmetres.  
e) Escriu una funció que retorne la divisió de dos nombres rebuts per paràmetres (tenint en compte la divisió per zero).  
f) Escriu un programa que demane dos nombres, mostre el menú i permeta triar una opció. Ho farà fins que l'usuari seleccione l'opció d'eixir del programa.


### 📦 Codi Java

```java
import java.util.Scanner;

public class App {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("Introdueix el primer número: ");
        double a = sc.nextDouble();

        System.out.print("Introdueix el segon número: ");
        double b = sc.nextDouble();

        int opcio;

        do {
            menu();
            opcio = sc.nextInt();

            switch (opcio) {
                case 1:
                    System.out.println("Resultat = " + suma(a, b));
                    break;
                case 2:
                    System.out.println("Resultat = " + resta(a, b));
                    break;
                case 3:
                    System.out.println("Resultat = " + multiplicar(a, b));
                    break;
                case 4:
                    System.out.println("Resultat = " + dividir(a, b));
                    break;
                case 5:
                    System.out.println("Adéu!");
                    break;
                default:
                    System.out.println("Opció incorrecta.");
            }

            System.out.println();

        } while (opcio != 5);

    }

    public static void menu() {
        System.out.println("------ MENÚ ------");
        System.out.println("1. Sumar");
        System.out.println("2. Restar");
        System.out.println("3. Multiplicar");
        System.out.println("4. Dividir");
        System.out.println("5. Acabar");
        System.out.print("Tria una opció: ");
    }

    public static double suma(double a, double b) {
        return a + b;
    }

    public static double resta(double a, double b) {
        return a - b;
    }

    public static double multiplicar(double a, double b) {
        return a * b;
    }

    public static double dividir(double a, double b) {
        if (b == 0) {
            System.out.println("Error: no es pot dividir per zero.");
            return 0;
        }
        return a / b;
    }

}

```

## 🧠 Exercici 5

Dissenya un sistema que permeta afegir un estudiant, marcar la seva assistència i mostrar l'estat d'assistència de tots els estudiants. Quan l'usuari vulga afegir un estudiant, el programa demanarà el nom i l'incorporarà a la llista de persones matriculades només si no hi és ja, assignant-li automàticament l'estat de no assistit; si el nom ja existeix, no fa cap canvi. Quan l'usuari tria marcar assistència, el sistema demana el nom de l'estudiant i, si el troba a la llista, canvia el seu estat al de assistit, i si no existeix, informa que no es pot marcar l'assistència d'un estudiant desconegut. Quan l'usuari demana veure els assistents, el programa mostrarà tots els noms i si han assistit o no. Finalment, l'usuari podrà finalitzar quan vulga l'execució del programa.

### 🛠️ Solució proposada

#### a) Afegir estudiant
- Crear una estructura `HashMap<String, Boolean>` anomenada `estudiants`.
- Demanar a l’usuari el nom amb `Scanner`.
- Convertir el nom a minúscules per evitar duplicats.
- Comprovar si ja existeix la clau amb `estudiants.containsKey(nom)`.
  - Si **ja existeix**, mostrar missatge d’avís i no modificar res.
  - Si **no existeix**, afegir-la al mapa amb el valor `false` (no assistit).

---

#### b) Marcar assistència
- Demanar a l’usuari el nom amb `Scanner`.
- Convertir el nom a minúscules.
- Comprovar si la clau existeix en `estudiants`:
  - Si **existeix** → canviar el valor a `true` amb `estudiants.put(nom,true)`.
  - Si **no existeix** → mostrar missatge indicant que no es pot marcar l’assistència.

---

#### c) Mostrar estat d’assistència
- Recorre totes les claus del `HashMap` amb `for(String nom : estudiants.keySet())`
- Per a cada estudiant:
  - Obtenir el valor amb `estudiants.get(nom)`
  - Mostrar:
    - el nom
    - i el text `"ASSISTIT"` o `"NO ASSISTIT"` segons el valor booleà.

---

#### d) Menú principal
- Crear un bucle `do … while`
- Mostrar el menú d’opcions:
  1. Afegir estudiant  
  2. Marcar assistència  
  3. Mostrar estat  
  4. Eixir  
- Llegir l’opció amb `Scanner`
- Executar l’acció corresponent amb un `switch`
- Repetir fins que l’usuari trie l’opció **4**


### 📦 Codi Java

```java
import java.util.HashMap;
import java.util.Scanner;

public class App {
    public static Scanner sc = new Scanner(System.in);

    public static void main(String[] args) {

        HashMap<String, Boolean> estudiants = new HashMap<>();

        int op;

        do {
            menu();
            op = Integer.parseInt(sc.nextLine());

            switch (op) {

                case 1:
                    afegirEstudiant(estudiants);
                    break;
                case 2:
                    marcarAssistencia(estudiants);
                    break;
                case 3:
                    mostrarEstats(estudiants);
                    break;
                case 4:
                    System.out.println("Adéu!");
                    break;
                default:
                    System.out.println("Opció incorrecta!");
            }

            System.out.println();

        } while (op != 4);
    }

    public static void menu() {
        System.out.println("----- MENÚ -----");
        System.out.println("1. Afegir estudiant");
        System.out.println("2. Marcar assistència");
        System.out.println("3. Mostrar estat d'assistència");
        System.out.println("4. Eixir");
        System.out.print("Opció: ");
    }

    public static void afegirEstudiant(HashMap<String, Boolean> mapa) {
        System.out.print("Nom de l'estudiant: ");
        String nom = sc.nextLine();

        if (mapa.containsKey(nom.toLowerCase())) {
            System.out.println("ERROR: L'estudiant ja existeix.");
        } else {
            mapa.put(nom.toLowerCase(), false); // false = no assistit
            System.out.println("Estudiant afegit com a NO ASSISTIT.");
        }
    }

    public static void marcarAssistencia(HashMap<String, Boolean> mapa) {
        System.out.print("Nom de l'estudiant per marcar assistència: ");
        String nom = sc.nextLine().toLowerCase();

        if (mapa.containsKey(nom)) {
            mapa.put(nom, true);
            System.out.println("Assistència marcada!");
        } else {
            System.out.println("ERROR: estudiant NO trobat.");
        }
    }

    public static void mostrarEstats(HashMap<String, Boolean> mapa) {
        if (mapa.isEmpty()) {
            System.out.println("No hi ha estudiants registrats.");
            return;
        }

        System.out.println("----- LLISTA -----");
        for (String nom : mapa.keySet()) {
            boolean estat = mapa.get(nom);
            System.out.println(nom + " -> " + (estat ? "ASSISTIT" : "NO ASSISTIT"));
        }
    }
}

```

## 🧠 Exercici 6

Un sistema de gestió acadèmica permet registrar alumnes amb el seu nom i les notes de les cinc assignatures. A partir d'aquest registre, qualsevol vegada que l'usuari ho sol·licite, el programa mostrarà el llistat d'alumnes amb mitjana de notes superior a 9. També ofereix la possibilitat de determinar quin alumne presenta la variabilitat de notes més gran, és a dir, amb major diferència entre la seva nota més alta i la més baixa.

### 🛠️ Solució proposada

#### a) Registrar alumnes
- Crear un `HashMap<String, double[]>` per guardar:
  - clau → nom de l’alumne
  - valor → vector amb les cinc notes
- Quan l’usuari seleccione l’opció de registrar:
  - Demanar el nom
  - Crear un vector `double[5]`
  - Demanar les 5 notes
  - Guardar-ho al mapa amb `mapa.put(nom, notes)`

---

#### b) Mostrar alumnes amb mitjana superior a 9
- Recorre totes les entrades del mapa amb `for (Entry<String,double[]> ...)`
- Calcula la suma de les notes i després la mitjana (*suma / 5*)
- Si la mitjana és > 9, mostrar el nom i la mitjana
- Si cap alumne compleix la condició, mostrar missatge indicant-ho

---

#### c) Determinar alumne amb major variabilitat
- Recorre totes les entrades del mapa
- Per a cada alumne:
  - Busca la seua nota mínima
  - Busca la seua nota màxima
  - Calcula `max - min`
- Guardar el nom de l’alumne amb la diferència més gran
- Mostrar-lo com a resultat final

---

#### d) Menú principal
- Mostrar les opcions:
  1. Registrar alumne  
  2. Mostrar alumnes amb mitjana > 9  
  3. Alumne amb major variabilitat  
  4. Eixir
- Llegir l’opció amb `Scanner`
- Executar el mètode corresponent amb `switch`
- Repetir fins que l’opció siga **4**



### 📦 Codi Java

```java
import java.util.HashMap;
import java.util.Scanner;

public class App {

    public static void main(String[] args) {
         Scanner sc = new Scanner(System.in);

        HashMap<String, double[]> alumnes = new HashMap<>();

        int op;

        do{
            menu();
            op = Integer.parseInt(sc.nextLine());

            switch(op){

                case 1: registrar(alumnes, sc); break;

                case 2: mostraraMitjana(alumnes); break;

                case 3: alumneMaxVariabilitat(alumnes); break;

                case 4: System.out.println("Adéu!"); break;

                default: System.out.println("Opció incorrecta.");
            }

        }while(op != 4);
    }

    }

    public static void menu() {
        System.out.println("\n--- MENÚ ---");
        System.out.println("1. Registrar alumne");
        System.out.println("2. Mostrar alumnes amb mitjana > 9");
        System.out.println("3. Mostrar alumne amb major variabilitat");
        System.out.println("4. Eixir");
        System.out.print("Opció: ");
    }

    public static void registrar(HashMap<String, double[]> mapa, Scanner sc) {
        System.out.print("Nom alumne: ");
        String nom = sc.nextLine().toLowerCase();

        double[] notes = new double[5];

        for (int i = 0; i < 5; i++) {
            System.out.print("Nota " + (i + 1) + ": ");
            notes[i] = sc.nextDouble();
        }
        sc.nextLine();

        mapa.put(nom, notes);

        System.out.println("Alumne registrat correctament.");
    }

    public static void mostraraMitjana(HashMap<String, double[]> mapa) {

        boolean trobat = false;
        for (HashMap.Entry<String, double[]> registre : mapa.entrySet()) {
            String nom = registre.getKey();
            double[] notes = registre.getValue();

            double suma = 0;

            for (double x : notes)
                suma += x;

            double mitjana = suma / 5;

            if (mitjana > 9) {
                System.out.println(nom + " -> " + mitjana);
                trobat = true;
            }
        }

        if (!trobat)
            System.out.println("No hi ha alumnes amb mitjana > 9.");
    }

    public static void alumneMaxVariabilitat(HashMap<String, double[]> mapa) {

        String millor = "";
        double maxDif = -1;

        for (HashMap.Entry<String, double[]> registre : mapa.entrySet()) {
            String nom = registre.getKey();
            double[] notes = registre.getValue();

            double min = 10;
            double max = 0;

            for (double x : notes) {
                if (x < min)
                    min = x;
                if (x > max)
                    max = x;
            }

            double dif = max - min;

            if (dif > maxDif) {
                maxDif = dif;
                millor = nom;
            }
        }

        System.out.println("Major variabilitat: " + millor + " (" + maxDif + ")");
    }
}

```

#### Exercicis - Recursivitat

## 🧠🧠 Exercici R1
 Una empresa d'anàlisi de dades vol saber quàntes vegades es repeteix un codi específic dins d’un informe numèric. Per a això, desitja implementar una funció que recórrega una llista de codis i compte quantes vegades apareix un valor concret.

Dissenya una funció recursiva anomenada contarCodi que reba:

- un array d’enters,

- un índex inicial,

- i un valor a buscar,

i retorne quantes vegades apareix eixe valor en l’array.
### 🛠️ Solució proposada


#### Cas base
- Si `index` arriba al final de l’array (`index == array.length`):
  - S’ha acabat de mirar tots els elements.
  - Retornar **0** perquè no hi ha més coincidències possibles.

---

#### Cas recursiu
Per a cada posició:

- Si `array[index] == objectiu`:
  - Suma **1** perquè hem trobat una coincidència.
  - Fa una crida recursiva a `contarCodi(array, index + 1, objectiu)` per continuar buscant.

- Si no coincideix:
  - Fa la crida recursiva sense sumar res.


### 📦 Codi Java

```java
public class App {
    public static void main(String[] args) {
        int[] dades = { 3, 1, 3, 4, 3 };

        System.out.println(contarCodi(dades, 0, 3)); // → 3
    }

    public static int contarCodi(int[] array, int index, int objectiu) {
        // Cas base: si arribem al final de l'array
        if (index == array.length) {
            return 0;
        }

        // Cas recursiu

        if (array[index] == objectiu)
            return 1 + contarCodi(array, index + 1, objectiu);
        else
            return contarCodi(array, index + 1, objectiu);

    }
}

```

## 🧠🧠 Exercici R2

Una universitat està dissenyant un xicotet sistema per a detectar si un treball ha sigut generat amb Intel·ligència Artificial.

El sistema funciona així: s’introdueix el text de l’alumne dividit en paraules en un array, i s’elegeix una paraula “trampa” inclosa intencionadament en l’enunciat. Si el text conté més de 5 vegades eixa paraula trampa, el treball es considera sospitós d’haver sigut generat amb IA.

Per a començar, l’equip necessita implementar una funció recursiva que compte quantes vegades apareix eixa paraula en el text.

Dissenya una funció recursiva anomenada contarParaula, que reba:

- un array de String amb totes les paraules del text,

- un índex inicial,

- i una paraula a buscar,

i retorne quantes vegades apareix eixa paraula en l’array.


### 🛠️ Solució proposada

#### Conversió del text en paraules
- El mètode `contarParaula(String text, String paraula)`:
  - Utilitza `text.split(" ")` per separar el text en un array de paraules.
  - Crida al mètode recursiu passant l’array i començant des de l’índex `0`.

---

#### Cas base
- Si `index == array.length`:
  - S’han analitzat totes les paraules.
  - Retorna **0**, perquè ja no hi ha més coincidències possibles.

---

#### Cas recursiu
Per a cada posició de l’array:

- Si `array[index].equals(paraula)`:
  - Suma **1** perquè s'ha trobat una coincidència.
  - Continua la recursió amb `index + 1`.

- Si no coincideix:
  - Simplement continua la recursió sense sumar.


### 📦 Codi Java

```java
public class App {

    public static void main(String[] args) {
        
        int numRepeticions = contarParaula(
                "este es un text trampa molt trampa perque trampa conté trampa varies trampa voltes", "trampa");
        if (numRepeticions >= 5)
            System.out.println("Text generat amb IA");
        else System.out.println("Text propi");     
    }

	public static int contarParaula(String text, String paraula){
		String[] paraules = text.split(" ");
		return contarParaula(paraules,0,paraula);
	}

	public static int contarParaula(String[] array, int index, String paraula){

		if (index == array.length)
			return 0;

		if (array[index].equals(paraula))
			return 1 + contarParaula(array, index + 1, paraula);
		else
			return contarParaula(array, index + 1, paraula);

	}

}
```

## 🧠🧠 Exercici R3

Una empresa de ciberseguretat està desenvolupant una eina per a emmascarar missatges abans d’emmagatzemar-los en una base de dades. Com a part del sistema, necessiten invertir el text original per a dificultar la seua lectura directa.

Implementa una funció recursiva que reba una cadena de text i retorne la mateixa cadena, però invertida.

### 🛠️ Solució proposada


#### Cas base
- Si la longitud del text és `<= 1`:
  - No es pot invertir més.
  - Es retorna el mateix text.

---

#### Cas recursiu
Per a invertir la cadena:

1. Obtenir **l’últim caràcter**

2. Obtenir **la resta del text** sense l’últim caràcter

3. Construir el resultat com:
- L’últim caràcter + el text invertit de la resta.



### 📦 Codi Java

```java
public class App {

    public static void main(String[] args) {

        String missatge = "codi_confidencial";

        String invertit = invertirMissatge(missatge);

        System.out.println("Entrada:   " + missatge);
        System.out.println("Eixida:    " + invertit);
    }

    // Retorna el text invertit per a un emmagatzematge ofuscat
    public static String invertirMissatge(String text) {

        // Base de la recursió
        if (text.length() <= 1) {
            return text;
        }

        // Últim caràcter
        char c = text.charAt(text.length() - 1);

        // Resta
        String resta = text.substring(0, text.length() - 1);

        // Últim + recursió
        return c + invertirMissatge(resta);
    }
}
```

## 🧠🧠 Exercici R4
En una empresa de seguretat informàtica s’està estudiant la qualitat de les contrasenyes utilitzades pels treballadors. Per a això, es necessita desenvolupar una sèrie de funcions que analitzen diferents aspectes d’una contrasenya.

Un dels primers requisits és crear una funció capaç d’analitzar, mitjançant recursivitat, quants caràcters especials conté una contrasenya.

Considerarem caràcter especial qualsevol caràcter que NO siga:

- una lletra minúscula,

- una lletra majúscula

- o un dígit numèric.

És a dir, es comptaran com a caràcters especials, per exemple: ! , . ; : ? + - _ @ # $ % & / ( ) [ ] { } * etc.
La funció haurà de:

- rebre la contrasenya (un String),

- analitzar cada caràcter,

- i retornar el nombre total de caràcters especials que conté.

### 🛠️ Solució proposada


#### Cas base
- Si la cadena `s` és buida (`s.equals("")`):
  - No hi ha cap caràcter a analitzar.
  - Retorna **false**.

---

#### Cas recursiu
Per a cada crida:

1. S’agafa el **primer caràcter** de la cadena
2. Si el caràcter **no és lletra** i **no és dígit**:
   - És un caràcter especial → retorna **true**.
3. Si és un caràcter normal:
   - Continua analitzant la resta de la cadena:



### 📦 Codi Java

```java
public class App {
    public static void main(String[] args) {
        System.out.println(
                conteEspecials("Hola,2024")
                        ? "Conté caracters especials"
                        : "No conté caracters especials");
        System.out.println(
                conteEspecials("Hola2024")
                        ? "Conté caracters especials"
                        : "No conté caracters especials");

    }

    private static boolean conteEspecials(String s) {

        if (s.equals(""))
            return false;
        char c = s.charAt(0);
        if (!Character.isLetter(c) && !Character.isDigit(c))
            return true;

        return conteEspecials(s.substring(1));
    }
}
```
