# Solucions UF05. Estructures de Dades Dinàmiques I


<div style="
  border-left: 4px solid #ffcccb;
  background-color: #fff0f5;
  padding: 12px 16px;
  border-radius: 6px;
  margin: 1em 0;
  color: #b03060;">
  ⚠️ <strong>Atenció:</strong> Després d’un nextInt(), el Scanner no consumeix el salt de línia (\n) que queda quan prems Enter.
Això fa que el següent nextLine() llegisca directament una línia buida.


🧠 Solució:
Després de cada nextInt() has d’afegir una línia per "buidar" el Scanner:

</div>


##### Exercicis - Vectors

# 🧠 Exercici v1

## 📋 Enunciat V1
a) Declara i inicialitza un vector de 8 enters. Mostra el contingut del vector per pantalla.  
b) Mostra quants valors són positius i quants negatius.  
c) Mostra la suma i la mitjana dels valors del vector.  
d) Indica quin és el valor màxim i en quina posició es troba.

## 🛠️ Solució proposada

1. Es crea un vector d’enters amb 8 valors (positius, negatius i zero).  
2. Es compten quants nombres són **positius** i quants són **negatius**.  
   (El 0 no es compta com cap dels dos.)  
3. Es calcula la **suma** de tots els elements i la seua **mitjana**.  
4. Es busca el **màxim valor** del vector i també la **posició** on està.

### Resultat esperat
Mostra per pantalla:
- El nombre de positius i negatius.  
- La suma i la mitjana.  
- El valor més gran i la seua posició dins del vector.

## 📦 Codi Java

```java
   public static void main(String[] args) {
         // a) Declara i inicialitza un vector de 8 enters
        int[] v = { 3, -1, 7, 0, -5, 9, 2, -8 };

        // b) Positius vs negatius. El 0 es neutre, ni positiu ni negatiu
        int pos = 0, neg = 0;

        for (int i = 0; i < v.length; i++) {
            if (v[i] > 0)
                pos++;
            else if (v[i] < 0)
                neg++;

        }
        System.out.println("Positius: " + pos + " | Negatius: " + neg);

        // c) Suma i mitjana
        int suma = 0;
        for (int i = 0; i < v.length; i++) {
            suma += v[i];
         }
            
        double mitjana = (double) suma / v.length;
        System.out.println("Suma: " + suma + " | Mitjana: " + mitjana);

        // d) Màxim i posició
        int max = v[0], posMax = 0;
        for (int i = 1; i < v.length; i++) {
            if (v[i] > max) {
                max = v[i];
                posMax = i;
            }
        }
        System.out.println("Màxim: " + max + " a la posició " + posMax);
    }

```


# 🧠 Exercici V2

## 📋 Enunciat V2
a) Declara i ompli un vector amb N paraules, on N és un número introduït per teclat i les paraules són cadenes també introduïdes per teclat.
b) Mostra aquelles paraules que comencen per vocal.
c) Mostra quina és la paraula més llarga, i indica el tamany.

## 🛠️ Solució proposada

### Explicació pas a pas
1. L’usuari indica **quantes paraules** vol escriure.  
2. El programa llig eixes paraules una per una i les guarda en un vector.  
3. Mostra **quines paraules comencen per una vocal** (a, e, i, o, u).  
4. Busca la **paraula més llarga** i mostra quants caràcters té.

### Resultat esperat
- Llista de paraules que comencen amb vocal.  
- La paraula més llarga i la seua longitud.


## 📦 Codi Java

```java
    public static void main(String[] args) throws Exception {

        Scanner sc = new Scanner(System.in);
        System.out.print("Introdueix número de paraules: ");
        int numParaules = sc.nextInt();

        String[] paraules = new String[numParaules];
        //com hem llegit int en scanner i ara volem llegir strings netegem el buffer
        sc.nextLine();
        for (int i = 0; i < numParaules; i++) {

            System.out.print("Paraula " + (i + 1) + ": ");
            paraules[i] = sc.nextLine();

        }

        // b) Paraules que comencen per vocal
        System.out.println("Paraules que comencen per vocal:");

        for (int i = 0; i < numParaules; i++) {
            // Agafem la primera lletra de la paraula
            String paraula = paraules[i];
            char primera = paraula.charAt(0); // primera lletra

            // Passem la lletra a minúscula si era majúscula
            if (primera == 'A')
                primera = 'a';
            if (primera == 'E')
                primera = 'e';
            if (primera == 'I')
                primera = 'i';
            if (primera == 'O')
                primera = 'o';
            if (primera == 'U')
                primera = 'u';

            // Comprovem si és una vocal
            if (primera == 'a' || primera == 'e' || primera == 'i' || primera == 'o' || primera == 'u') {
                System.out.println(paraula + " comença per vocal");
            }
        }

        // c) Paraula més llarga i tamany
        String max = paraules[0];
        for (int i = 0; i < numParaules; i++) {
            if (paraules[i].length() > max.length()) {
                max = paraules[i];
            }

        }

        System.out.println("La paraula més llarga és " + max + " i té " + max.length() + " caràcters.");

    }
```

# 🧠 Exercici V3

## 📋 Enunciat V3
a) Introdueix en un vector 10 paraules donades per l'usuari. Mostra-les.
b) Indica si hi ha paraules repetides. Mostra-les.

## 🛠️ Solució proposada

### Explicació pas a pas
1. L’usuari introdueix **10 paraules**, que es guarden en un vector.  
2. Es mostra el vector complet amb totes les paraules.  
3. El programa busca si hi ha **paraules repetides**, ignorant majúscules i minúscules.  
4. Es fa servir un **altre vector addicional** per guardar les paraules que ja s’han trobat repetides, i així no mostrar-les dues vegades.  
5. Si no n’hi ha cap, mostra un missatge dient-ho.

### Resultat esperat
Mostra:
- La llista de paraules repetides (una sola vegada cadascuna).  
- O bé un missatge indicant que no n’hi ha.


## 📦 Codi Java

```java
    public static void main(String[] args) throws Exception {
        Scanner sc = new Scanner(System.in);
        String[] vectorParaules = new String[10];

        for (int i = 0; i < vectorParaules.length; i++) {
            System.out.print("Paraula " + (i + 1) + ": ");
            vectorParaules[i] = sc.nextLine();
        }

        //La classe Arrays te un métode toString per a mostrar el array
        System.out.println("Totes les paraules: " + Arrays.toString(vectorParaules));
        /* Es equivalent a
            System.out.println("\nTotes les paraules:");
                for (int i = 0; i < vectorParaules.length; i++) {
                    System.out.println("- " + vectorParaules[i]);
            }
         */

        // Comprovem si alguna paraula està repetida
        boolean hiHaRepetides = false;
        String[] repetides = new String[vectorParaules.length]; // array per guardar les repetides
         int numRepetides = 0;
         

        System.out.println("Paraules repetides:");

        for (int i = 0; i < vectorParaules.length; i++) {
            for (int j = i + 1; j < vectorParaules.length; j++) {

                if (vectorParaules[i].equalsIgnoreCase(vectorParaules[j])) {
                    
                    // comprovem si ja està a l'array de repetides
                    boolean jaEsta = false;
                    for (int k = 0; k < numRepetides; k++) {
                        if (repetides[k].equalsIgnoreCase(vectorParaules[i])) {
                            jaEsta = true;
                            break;
                        }
                    }

                    // si no està, l'afegim i la mostrem
                    if (!jaEsta) {
                        repetides[numRepetides] = vectorParaules[i];
                        numRepetides++;
                        System.out.println("- " + vectorParaules[i]);
                        hiHaRepetides = true;
                    }
                }
            }
        }

        if (!hiHaRepetides) {
            System.out.println("No hi ha paraules repetides.");
        }
     }
```

# 🧠 Exercici V4

## 📋 Enunciat V4
S'està analitzant un qüestionari amb 10 preguntes, cadascuna amb 4 possibles solucions (1, 2, 3 o 4), realitzat per diversos estudiants.

a) Declara un vector on s'emmagatzemen les respostes correctes del test. Usa números enters aleatoris entre 1 i 4.
b) Emmagatzema les respostes d'un estudiant en un altre vector. Resposta 0 es considerarà com no contestada.
c) Mostra quantes preguntes ha contestat correctament, quantes ha contestat incorrectament, i quantes no ha contestat.
d) Calcula i mostra la nota obtinguda. Si la nota ix negativa, serà 0. Usa la següent equació:

>nota = (n_correctes - 0.33 * n_incorrectes) / n_total.

## 🛠️ Solució proposada

### Explicació pas a pas
1. Es generen **respostes correctes aleatòries** per a 10 preguntes.  
2. L’alumne introdueix les seues **respostes** (valors de 0 a 4, on 0 és “no contestada”).  
3. El programa compta:
   - Quantes són **correctes**.  
   - Quantes **incorrectes**.  
   - Quantes **no contestades**.  
4. Calcula la **nota final** segons la fórmula:

   ```
   nota = (correctes - 0.33 × incorrectes) / total de preguntes
   ```

   Si la nota és negativa, es posa a 0.  
5. Mostra els resultats per pantalla.

### Resultat esperat
- Nombre de respostes correctes, incorrectes i no contestades.  
- Nota final calculada.


## 📦 Codi Java

``` java

        //declarem una constant per a les preguntes
        final int NUM_PREGUNTES = 10;
        Random rnd = new Random();

        // a) Respostes
        int[] solucions = new int[NUM_PREGUNTES];
        for (int i = 0; i < NUM_PREGUNTES; i++)
            solucions[i] =rnd.nextInt(5); //5 perq resposta 0 es no contestada

        // b) Respostes d'un estudiant (0 = no contestada)
        int[] respostesAlumne = new int[NUM_PREGUNTES];
        Scanner sc = new Scanner(System.in);
        System.out.println("Introdueix respostes (0-4):");
        for (int i = 0; i < NUM_PREGUNTES; i++) {
            System.out.print("P" + (i + 1) + ": ");
            respostesAlumne[i] = sc.nextInt();
        }

        // c) Comptatge
        int corr = 0, inc = 0, noCont = 0;
        for (int i = 0; i < NUM_PREGUNTES; i++) {
            if (respostesAlumne[i] == 0)
                noCont++;
            else if (respostesAlumne[i] == solucions[i])
                corr++;
            else
                inc++;
        }

        System.out.println("Correctes: " + corr + " | Incorrectes: " + inc + " | No contestades: " + noCont);

        // d) Nota
        double nota = (corr - 0.33 * inc) / NUM_PREGUNTES;
        if (nota < 0)
            nota = 0;
        System.out.println("Nota: " + String.format("%.2f", nota));
 ```

### Exercici V5

## 📋 Enunciat V5
Un sistema ha de controlar un conjunt d'usuaris que s'autentiquen amb nom i contrasenya. Només cal emmagatzemar i comprovar aquestes dades, sense xifrar.

a) Declara i inicialitza dos vectors paral·lels amb 5 noms d'usuari i les seues contrasenyes. Genera les contrasenyes com a un conjunt aleatori d'enters.
b) Permet iniciar sessió: demana nom i contrasenya, i valida si coincideixen. Mostra un missatge informant del resultat.
c) Mentre la sessió no s'inicie correctament, el programa demanarà usuari i contrasenya constantment, fins que s'introduïsca "fi" com a nom.
d) Si has iniciat correctament la sessió, mostra un menú amb dos opcions: una per a tancar sessió i una altra que permet canviar la contrasenya actual.

## 🛠️ Solució proposada


### Explicació pas a pas
1. Es creen dos vectors paral·lels:  
   - Un amb **noms d’usuaris**.  
   - I un altre amb **contrasenyes numèriques** de quatre enters.  
2. El programa demana **usuari i contrasenya** dins d’un bucle:
   - Si coincideixen, mostra *“Sessió iniciada!”*.  
   - Si no, permet tornar-ho a provar.  
   - Si l’usuari escriu “fi”, el programa acaba.  
3. Quan la sessió està iniciada, apareix un **menú amb dos opcions**:
   1. Canviar la contrasenya.  
   2. Tancar la sessió.  
4. Si es tria “1”, es demana una nova contrasenya i s’actualitza.  
   Si es tria “2”, la sessió es tanca i el programa finalitza.

### Resultat esperat
- El programa permet iniciar sessió, canviar la contrasenya o eixir de manera segura.  


## 📦 Codi Java

```java
    public static void main(String[] args) {

        // a) Vectors paral·lels
        String[] usuaris = { "anna", "borja", "carla", "david", "eric" };
        int[] contrasenyes = { 1234, 9955, 9634, 2244, 9832 };

        Scanner sc = new Scanner(System.in);
        boolean sessioIniciada = false;
        int idUsuari = -1;

        boolean eixir = false; // per saber si s'ha escrit "fi"
        while (!sessioIniciada && !eixir) {
            System.out.print("Usuari (o fi per eixir): ");
            String usuari = sc.nextLine();

            if (usuari.equalsIgnoreCase("fi")) {
                System.out.println("Programa finalitzat.");
                eixir = true; // marquem que volem eixir
            }
            if (!eixir) {
                System.out.print("Contrasenya: ");
                int pass = sc.nextInt();
                sc.nextLine(); // buidar després de nextInt()

                // Validació
                idUsuari = -1;
                for (int i = 0; i < usuaris.length; i++) {
                    if (usuaris[i].equals(usuari) && contrasenyes[i] == pass) {
                        idUsuari = i;
                    }
                }

                if (idUsuari != -1) {
                    sessioIniciada = true;
                    System.out.println("Sessió iniciada!");
                } else {
                    System.out.println("Credencials incorrectes. Torna-ho a intentar.");
                }
            }

        }
        // d) Menú després d'iniciar sessió
        while (sessioIniciada) {
            System.out.println();
            System.out.println("--- Menú ---");
            System.out.println("1) Canviar contrasenya");
            System.out.println("2) Tancar sessió");
            System.out.print("Opció: ");
            int op = sc.nextInt();
            sc.nextLine(); // buidar després de nextInt()

            switch (op) {
                case 1:
                    System.out.print("Introdueix nova contrasenya 4 números: ");
                    int nova = sc.nextInt();
                    sc.nextLine(); // buidar després de nextInt()
                    contrasenyes[idUsuari] = nova;
                    System.out.println("Contrasenya actualitzada.");
                    break;
                case 2:
                    sessioIniciada = false;
                    System.out.println("Sessió tancada. Adéu!");
                    break;
                default:
                    System.out.println("Opció no vàlida.");
            }
        }
    }
```

##### Exercicis - String

# 🧠 Exercici S1

## 📋 Enunciat S1

Una aplicació web vol validar contrasenyes segons certes normes abans de registrar-les. Un valor numèric indicarà la fiabilitat de la contrasenya:

- Valor de 0 indica contrasenya molt segura.
- Per cada comprovació que no supere, augmentarà en 1.

a) Demana a l'usuari una contrasenya. Indica si la longitud és superior o inferior a 8 caràcters.  
b) Indica si conté, almenys, una majúscula.  
c) Indica si conté, almenys, un dígit.  
d) Indica el nivell de seguretat, mostrant el missatge "Molt segura!", "Segura" o "Molt insegura. Canvia-la!" segons les comprovacions superades.

**NOTA:**  
Una forma de comprovar si un caràcter és una lletra majúscula és amb la següent instrucció:  
`Character.isUpperCase(cadena.charAt(i))`  
De forma equivalent, es pot comprovar que un caràcter és un número amb:  
`Character.isDigit(cadena.charAt(i))`

## 🛠️ Solució proposada

Comprovem la contrasenya pas a pas i incrementem un comptador d'errors. Finalment, mostrem el nivell de seguretat segons el valor del comptador.

## 📦 Codi Java

```java
public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);
        System.out.print("Introdueix una contrasenya: ");
        String password = sc.nextLine();

        int nivell = 0;

        if (password.length() < 8) {
            System.out.println("La contrasenya té menys de 8 caràcters.");
            nivell++;
        } else {
            System.out.println("La contrasenya té 8 caràcters o més.");
        }

        boolean majuscula = false;
        boolean digit = false;

        for (int i = 0; i < password.length(); i++) {
            if (Character.isUpperCase(password.charAt(i))) {
                majuscula = true;
            }
            if (Character.isDigit(password.charAt(i))) {
                digit = true;
            }
        }

        if (!majuscula) {
            System.out.println("No conté cap lletra majúscula.");
            nivell++;
        } else {
            System.out.println("Conté almenys una lletra majúscula.");
        }

        if (!digit) {
            System.out.println("No conté cap dígit.");
            nivell++;
        } else {
            System.out.println("Conté almenys un dígit.");
        }

        if (nivell == 0) {
            System.out.println("Molt segura!");
        } else if (nivell == 1) {
            System.out.println("Segura");
        } else {
            System.out.println("Molt insegura. Canvia-la!");
        }

        sc.close();
    }
```

# 🧠 Exercici S2

## 📋 Enunciat S2

En una carpeta hi ha diversos noms de fitxer. Cal analitzar-los per identificar els seus tipus i validar els noms.


**a)** Desa 8 noms de fitxer (amb extensió) en un vector de `String`. Mostra'ls.

**b)** Mostra aquells que no tenen extensió.

**c)** Mostra aquells noms que acaben en `.txt`.

**d)** Mostra quins noms contenen espais.

**e)** Canvia tots els noms perquè estiguen en minúscules.

**f)** Mostra només els noms dels fitxers sense l'extensió.


## 🛠️ Solució proposada
> 💡 En aquest exercici utilitzem el bucle `foreach` per recórrer els vectors, però es podria fer igualment amb un bucle `for` clàssic amb índex si es vol més control sobre les posicions.
> 
> 💡 S'utilitzen mètodes com `.contains()`, `.endsWith()`, `.toLowerCase()` i `.substring()` per fer les comprovacions i transformacions.

## 📦 Codi Java

```java
public static void main(String[] args){

    String[] fitxers = {
        "document.txt", "foto.jpg", "arxiu", "notes.txt",
        "presentació.ppt", "resum.docx", "fitxer sense extensió", "exemple.TXT"
    };

    System.out.println("TOTS ELS FITXERS");
    System.out.println("────────────────────────────");
    for (String f : fitxers) {
        System.out.println("• " + f);
    }

    System.out.println("\nFITXERS SENSE EXTENSIÓ");
    System.out.println("────────────────────────────");
    for (String f : fitxers) {
        if (!f.contains(".")) {
            System.out.println("• " + f);
        }
    }

    System.out.println("\nFITXERS .TXT");
    System.out.println("────────────────────────────");
    for (String f : fitxers) {
        if (f.toLowerCase().endsWith(".txt")) {
            System.out.println("• " + f);
        }
    }

    System.out.println("\nFITXERS AMB ESPAIS");
    System.out.println("────────────────────────────");
    for (String f : fitxers) {
        if (f.contains(" ")) {
            System.out.println("• " + f);
        }
    }

    System.out.println("\nFITXERS EN MINÚSCULES");
    System.out.println("────────────────────────────");
    for (String f : fitxers) {
        System.out.println("• " + f.toLowerCase());
    }

    System.out.println("\nNOMS SENSE EXTENSIÓ");
    System.out.println("────────────────────────────");
    for (String f : fitxers) {
        int punt = f.lastIndexOf(".");
        if (punt != -1) {
            System.out.println("• " + f.substring(0, punt));
        } else {
            System.out.println("• " + f);
        }
    }
}
```

# 🧠 Exercici S3

## 📋 Enunciat S3

Es volen fer una sèrie de comprovacions en una frase. Realitza-les i mostra el resultat.

a) Introdueix una frase i desa-la.  
b) Indica si comença per majúscula i acaba per punt. Si no és el cas, modifica la cadena.  
c) Mostra la longitud de la frase i quantes paraules conté.  
d) Substitueix totes les aparicions de la paraula "Java" per "Python".  
e) Mostra la frase final.

## 🛠️ Solució proposada

S'utilitzen mètodes com `.charAt()`, `.endsWith()`, `.length()`, `.split()` i `.replace()` per fer les comprovacions i modificacions.

## 📦 Codi Java

```java
import java.util.Scanner;

     public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);
        System.out.print("Introdueix una frase que continga una o varies ocurrències de la paraula Java: ");
        String frase = sc.nextLine();

        // b) Comprovar majúscula inicial i punt final
        if (!Character.isUpperCase(frase.charAt(0))) {
            frase = Character.toUpperCase(frase.charAt(0)) + frase.substring(1);
        }

        if (!frase.endsWith(".")) {
            frase += ".";
        }

        // c) Longitud i nombre de paraules
        int longitud = frase.length();
        int paraules = frase.split(" ").length;

        // d) Substituir "Java" per "Python"
        frase = frase.replace("Java", "Python");

        // e) Mostrar resultats
        System.out.println("Frase final: " + frase);
        System.out.println("Longitud: " + longitud);
        System.out.println("Número de paraules: " + paraules);

        sc.close();

    }
```
# 🧠 Exercici S4

## 📋 Enunciat S4

Una aplicació ha rebut una llista de correus electrònics que cal validar i analitzar.



**a)** Desa 5 correus en un vector de `String`. Mostra'ls.

**b)** Mostra quins contenen el símbol `@` i acaben en `.com` o `.es`.

**c)** Mostra el domini de cada correu (utilitzant `substring` i `indexOf`).


## 🛠️ Solució proposada

**a)** Utilitza un bucle for-each per imprimir cada correu.

**b)** Per filtrar els correus vàlids pots usar: ots usar `contains("@")` i `endsWith(".com") || endsWith(".es")`.

**c)** Si el correu no conté @, mostra un missatge indicant que no té un domini vàlid.

## 📦 Codi Java

```java
  public static void main(String[] args) {

        String[] correus = {
            "usuari1@gmail.com", "exemple@empresa.es", "correu@domini.org",
            "invalidacorreo.com", "prova@xarxa.net"
        };

        System.out.println("Tots els correus:");
        System.out.println("────────────────────────────");
        for (String c : correus) {
            System.out.println("• " + c);
        }

        System.out.println("\nCorreus vàlids (.com o .es):");
        System.out.println("────────────────────────────");
        for (String c : correus) {
            if (c.contains("@") && (c.endsWith(".com") || c.endsWith(".es"))) {
                System.out.println("• " + c);
            }
        }

        System.out.println("\nDominis dels correus:");
        System.out.println("────────────────────────────");
        for (String c : correus) {
            int pos = c.indexOf("@");
            if (pos != -1 && pos < c.length() - 1) {
                System.out.println("• " + c.substring(pos + 1));
            } else {
                System.out.println("• " + "No té domini vàlid: " + c);
            }

        }
    }
```

# 🧠 Exercici S5

## 📋 Enunciat S5

## 🛠️ Solució proposada

Organitza el codi en blocs o funcions que s'encarreguen de cada validació:

- Comprovació de la primera lletra
- Comprovació de la longitud
- Comprovació d'espais
- Comprovació de caràcters alfanumèrics

Per al sugeriment:

1. **Eliminar caràcters no alfanumèrics**
   - Recorre cada caràcter del nom original.
   - Conserva només les lletres (`a-z`, `A-Z`) i els números (`0-9`).

2. **Afegir una lletra al principi si cal**
   - Si el primer caràcter resultant **no és una lletra**, afegeix una lletra (`u`, per exemple) al principi.

3. **Ajustar la longitud**
   - Si el nom resultant té **menys de 5 caràcters**, afegeix caràcters (com `x`) fins arribar a 5.
   - Si té **més de 12 caràcters**, retalla'l fins a 12.

## 📦 Codi Java

```java
 public static void main(String[] args)  {
        String[] usuaris = { "123maria", "joan_perez", "ana", "usuari correcte", "marta!" };

        for (String usuari : usuaris) {
            System.out.println("Usuari: " + usuari);

            boolean valid = true;

            // Comprovar si comença amb lletra
            if (!Character.isLetter(usuari.charAt(0))) {
                valid = false;
                System.out.println(" • No comença amb lletra.");
            }

            // Comprovar longitud
            if (usuari.length() < 5 || usuari.length() > 12) {
                valid = false;
                System.out.println(" • Longitud incorrecta.");
            }

            // Comprovar espais
            if (usuari.contains(" ")) {
                valid = false;
                System.out.println(" • Conté espais.");
            }

            boolean trobat = false;
            for (int i = 0; i < usuari.length(); i++) {
                char lletra = usuari.charAt(i);

                // Comprovar si la lletra no és una lletra o un número
                if (!(lletra >= 'a' && lletra <= 'z') ||
                        (lletra >= 'A' && lletra <= 'Z') ||
                        (lletra >= '0' && lletra <= '9')) {
                    if (!trobat) {

                        valid = false;
                        System.out.println(" • Conté caràcters no alfanumèrics.");
                        trobat = true;// Ja he trobat un error, no cal repetir
                    }

                }

            }
            trobat = false;
            if (valid) {
                System.out.println(" -> Vàlid");
            } else {

                // Sugeriment
                String sugeriment = "";

                //si es diferent a lletra o número no l'afegisc
                for (int i = 0; i < usuari.length(); i++) {
                    char lletra = usuari.charAt(i);
                    if ((lletra >= 'a' && lletra <= 'z') ||
                            (lletra >= 'A' && lletra <= 'Z') ||
                            (lletra >= '0' && lletra <= '9')) {
                        sugeriment += lletra;
                    }
                }

                if (!Character.isLetter(sugeriment.charAt(0))) {
                    sugeriment = "u" + sugeriment;
                }
                if (sugeriment.length() < 5) {
                    while (sugeriment.length() < 5)
                        sugeriment += "x";
                } else if (sugeriment.length() > 12) {
                    sugeriment = sugeriment.substring(0, 12);
                }
                System.out.println(" -> Sugeriment: " + sugeriment);
            }

            System.out.println();
        }

    }
```

# 🧠 Exercici L1

## 📋 Enunciat L1

a) Demana valors enters a l'usuari fins que escriga un valor negatiu. Guarda'ls en una llista.  
b) Mostra la llista completa.  
c) Mostra quants valors hi ha i la suma total.  
d) Mostra només els valors parells.  
e) Mostra només els valors imparells.  
f) Permet a l'usuari demanar una posició (es demanarà fins que trie una correcta) i elimina el valor del llistat en eixa posició.


## 🛠️ Solució proposada

 a) Demanar valors fins que siga negatiu
- Crear un bucle `do-while` que demane a l’usuari un número enter.
- Si el número és **major o igual a 0**, afegir-lo a la llista.
- El bucle acaba quan l’usuari introdueix un número **negatiu**.

 b) Mostrar la llista completa
- Utilitzar `System.out.println("Llista completa: " + llista);`
- Això mostra tots els valors guardats en la llista.

c) Nombre de valors i suma
- Calcular la **suma** recorrent la llista amb un bucle `for`.
- Mostrar:
  - El nombre de valors amb `llista.size()`.
  - La suma total amb la variable acumulada.

 d) Mostrar només els valors parells
- Recórrer la llista amb un bucle `for`.
- Comprovar si `v % 2 == 0`.
- Si és cert, imprimir el valor.

 e) Mostrar només els valors imparells
- Recórrer la llista amb un bucle `for`.
- Comprovar si `v % 2 != 0`.
- Si és cert, imprimir el valor.

 f) Eliminar un valor per posició
- Demanar a l’usuari una posició dins del rang `0` fins `llista.size()-1`.
- Repetir la petició fins que siga vàlida (`do-while`).
- Utilitzar `llista.remove(pos)` per eliminar el valor.
- Mostrar la llista després de 
## 📦 Codi Java

```java
public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        List<Integer> llista = new ArrayList<>();

        // a) Demanar valors fins negatiu
        int valor;
        do {
            System.out.print("Introdueix un enter (negatiu per acabar): ");
            valor = sc.nextInt();
            if (valor >= 0)
                llista.add(valor);
        } while (valor >= 0);

        // b) Mostrar llista completa
        System.out.println("Llista completa: " + llista);

        // c) Nombre de valors i suma
        int suma = 0;
        for (int v : llista)
            suma += v;
        System.out.println("Nombre de valors: " + llista.size());
        System.out.println("Suma total: " + suma);

        // d) Valors parells
        System.out.print("Valors parells: ");
        for (int v : llista)
            if (v % 2 == 0)
                System.out.print(v + " ");
        System.out.println();

        // e) Valors imparells
        System.out.print("Valors imparells: ");
        for (int v : llista)
            if (v % 2 != 0)
                System.out.print(v + " ");
        System.out.println();

        // f) Eliminar per posició
        int pos;
        do {
            System.out.print("Introdueix una posició a eliminar (0-" + (llista.size() - 1) + "): ");
            pos = sc.nextInt();
        } while (pos < 0 || pos >= llista.size());
        llista.remove(pos);
        System.out.println("Llista després d'eliminar: " + llista);
    }
```
# 🧠 Exercici L2

## 📋 Enunciat L2

a) Crea una llista amb noms d'alumnes. L'usuari va afegint noms fins que escriu "fi".  
b) Mostra el nombre d'alumnes i els seus noms en l'ordre original.  
c) Mostra els noms ordenats alfabèticament.  
d) Permet buscar un nom i indicar si està en la llista.  
e) Modifica el programa per a mostrar un menú amb les següents opcions:

    - Mostrar els alumnes ordenats alfabèticament.
    - Buscar un alumne i, si existeix, indicar la posició.
    - Afegir un alumne (si no es troba ja al llistat).
    - Eliminar un alumne (si existeix).


## 🛠️ Solució proposada

 a) Afegir noms fins "fi"
- Es crea una llista buida `alumnes`.
- Amb un bucle `do-while` es demana a l’usuari que introduïsca noms.
- Si el nom no és `"fi"`, s’afegeix a la llista.
- El bucle acaba quan l’usuari escriu `"fi"`.

 b) Nombre i ordre original
- Es mostra el nombre total d’alumnes amb `alumnes.size()`.
- Es mostra la llista completa en l’ordre en què s’han introduït.

 c) Ordenats alfabèticament
- Es crea una còpia de la llista amb `new ArrayList<>(alumnes)`.
- Es fa servir `Collections.sort()` per ordenar els noms.
- Es mostra la llista ordenada.

 d) Buscar un nom
- Es demana a l’usuari un nom a buscar.
- Amb `alumnes.contains(buscar)` es comprova si està en la llista.
- Es mostra un missatge indicant si el nom existeix o no.

 e) Menú amb opcions
- Es mostra un menú amb les opcions:
  1. Mostrar alumnes ordenats.
  2. Buscar alumne i indicar la posició.
  3. Afegir alumne (si no existeix).
  4. Eliminar alumne (si existeix).
  0. Eixir.
- Amb un bucle `do-while` es repeteix fins que l’usuari trie l’opció `0`.
- Cada opció es gestiona amb un `switch`:
  - **Opció 1:** Ordena i mostra la llista.
  - **Opció 2:** Busca un alumne i mostra la posició si existeix.
  - **Opció 3:** Afig un alumne si no està ja en la llista.
  - **Opció 4:** Elimina un alumne si existeix.
  - **Opció 0:** Finalitza el 
## 📦 Codi Java

```java
 public static void main(String[] args) 
        Scanner sc = new Scanner(System.in);
        List<String> alumnes = new ArrayList<>();

        // a) Afegir noms fins "fi"
        String nom;
        do {
            System.out.print("Introdueix nom d'alumne (fi per acabar): ");
            nom = sc.nextLine();
            if (!nom.equalsIgnoreCase("fi"))
                alumnes.add(nom);
        } while (!nom.equalsIgnoreCase("fi"));

        // b) Nombre i ordre original
        System.out.println("Nombre d'alumnes: " + alumnes.size());
        System.out.println("Alumnes: " + alumnes);

        // c) Ordenats alfabèticament
        List<String> ordenats = new ArrayList<>(alumnes);
        Collections.sort(ordenats);
        System.out.println("Ordenats: " + ordenats);

        // d) Buscar un nom
        System.out.print("Nom a buscar: ");
        String buscar = sc.nextLine();
        if (alumnes.contains(buscar))
            System.out.println(buscar + " està en la llista.");
        else
            System.out.println(buscar + " no està en la llista.");

        // e) Menú
        int opcio;
        do {
            System.out.println("\n--- MENÚ ---");
            System.out.println("1. Mostrar ordenats");
            System.out.println("2. Buscar alumne");
            System.out.println("3. Afegir alumne");
            System.out.println("4. Eliminar alumne");
            System.out.println("0. Eixir");
            System.out.print("Opció: ");
            opcio = sc.nextInt();
            sc.nextLine();

            switch (opcio) {
                case 1:
                    Collections.sort(alumnes);
                    System.out.println(alumnes);
                    break;
                case 2:
                    System.out.print("Nom a buscar: ");
                    buscar = sc.nextLine();
                    int pos = alumnes.indexOf(buscar);
                    if (pos >= 0)
                        System.out.println(buscar + " està en posició " + pos);
                    else
                        System.out.println("No trobat.");
                    break;
                case 3:
                    System.out.print("Nom a afegir: ");
                    nom = sc.nextLine();
                    if (!alumnes.contains(nom))
                        alumnes.add(nom);
                    else
                        System.out.println("Ja existeix.");
                    break;
                case 4:
                    System.out.print("Nom a eliminar: ");
                    nom = sc.nextLine();
                    if (alumnes.remove(nom))
                        System.out.println("Eliminat.");
                    else
                        System.out.println("No trobat.");
                    break;
            }
        } while (opcio != 0);
    }

```
# 🧠 Exercici L3

## 📋 Enunciat L3

a) Emmagatzema 30 valors en una llista (números aleatoris entre 15 i 20, per exemple). Mostra el llistat dels dies junt amb la seua temperatura.  
b) Mostra la mitjana mensual, i també els dies amb temperatura superior a la mitjana.  
c) Mostra la longitud de la seqüència més llarga de dies seguits amb temperatures superiors a 30 °C.


## 🛠️ Solució proposada

 a) Generar 30 valors
- Es crea una llista `temps` buida.
- Amb un bucle `for` es generen 30 nombres aleatoris entre **15 i 20** (`15 + rnd.nextInt(6)`).
- Cada valor representa la temperatura màxima d’un dia.
- Es mostra per pantalla cada dia amb la seua temperatura.

 b) Calcular la mitjana i mostrar dies superiors
- Es calcula la **suma** de totes les temperatures amb un bucle `for-each`.
- La **mitjana** es calcula com `suma / temps.size()`.
- Es mostra la mitjana mensual.
- Es recorre la llista i es mostren els dies (posicions) en què la temperatura és **superior a la mitjana**.

 c) Seqüència més llarga de dies >30 °C
- Es defineixen dos comptadors:  
  - `actual` → longitud de la seqüència actual.  
  - `maxSeq` → longitud màxima trobada.
- Es recorre la llista:
  - Si la temperatura és **major que 30**, s’incrementa `actual` i s’actualitza `maxSeq`.
  - Si no, es reinicia `actual` a 0.
- Al final es mostra la seqüència més llarga de dies consecutius amb temperatura superior a 
- 
## 📦 Codi Java

```java
public static void main(String[] args) {
        Random rnd = new Random();
        List<Integer> temps = new ArrayList<>();

        // a) Generar 30 valors
        for (int i = 0; i < 30; i++) {
            temps.add(15 + rnd.nextInt(6)); // entre 15 i 20
        }
        for (int i = 0; i < temps.size(); i++) {
            System.out.println("Dia " + (i + 1) + ": " + temps.get(i) + "°C");
        }

        // b) Mitjana i dies superiors
        double mitjana = 0;
        int suma = 0;

        for (int t : temps) {
            suma += t;
        }
        mitjana =suma / temps.size();
        System.out.println("Mitjana mensual: " + mitjana);

        System.out.print("Dies amb temperatura superior: ");
        for (int i = 0; i < temps.size(); i++) {
            if (temps.get(i) > mitjana)
                System.out.print((i + 1) + " ");
        }
        System.out.println();

        // c) Seqüència més llarga >30
        int maxSeq = 0, actual = 0;
        for (int t : temps) {
            if (t > 30) {
                actual++;
                maxSeq = Math.max(maxSeq, actual);
            } else {
                actual = 0;
            }
        }
        System.out.println("Seqüència més llarga de dies >30°C: " + maxSeq);
    }

```
# 🧠 Exercici L4

## 📋 Enunciat L4

S'ha recollit el temps (en segons) que cada usuari ha tardat en respondre una enquesta. Es volen detectar patrons i casos sospitosos.

a) Genera un llistat de temps per a cada usuari amb números aleatoris entre 1 i 100. Mostra els temps i la mitjana.  
b) Mostra quins usuaris (indicant les posicions) han respost en menys de 10 segons (possibles bots). Per exemple:

```
Els usuaris que han respost en menys de 10 segons són: 3, 6, 15, 27,
```
c) Mostra el percentatge d'usuaris que han tardat entre 20 i 60 segons.

## 🛠️ Solució proposada

 a) Generar temps de resposta
- Es defineix una constant `NUM_USUARIS = 30`.
- Es crea una llista `temps` per guardar els valors.
- Amb un bucle `for` es generen 30 números aleatoris entre **1 i 100** (`rand.nextInt(100) + 1`).
- Cada valor representa el temps (en segons) que un usuari ha tardat en respondre.
- Es calcula la **suma total** dels temps.

 b) Calcular la mitjana
- La mitjana es calcula com `suma / NUM_USUARIS`.
- Es mostra la mitjana amb format arrodonit (`String.format("%.0f", mitjana)`).

 c) Mostrar temps per usuari
- Es recorre la llista `temps` amb un bucle.
- Es mostra per pantalla cada usuari amb el seu temps corresponent.

 d) Detectar respostes sospitoses (<10 segons)
- Es recorre la llista.
- Si el temps és **menor que 10**, es mostra la posició de l’usuari.
- Això permet identificar possibles **bots** o respostes massa ràpides.

 e) Comptar usuaris amb temps entre 20 i 60 segons
- Es crea un comptador inicialitzat a 0.
- Es recorre la llista i s’incrementa el comptador si el temps està dins del rang `[20, 60]`.
- Es calcula el **percentatge** respecte al total d’usuaris:  
  `percentatge = comptador * 100 / NUM_USUARIS`.
- Es mostra el percentatge amb format arrodonit.

## 📦 Codi Java

```java

public static void main(String[] args) {

        final int NUM_USUARIS = 30; // Constant

        List<Integer> temps = new ArrayList<>();
        Random rand = new Random();

        int suma = 0;
        for (int i = 0; i < NUM_USUARIS; i++) {
            int t = rand.nextInt(100) + 1; // entre 1 i 100
            temps.add(t);
            suma += t;
        }

        double mitjana = suma / NUM_USUARIS;

        System.out.println("Temps per usuari:");
        for (int i = 0; i < temps.size(); i++) {
            System.out.println("Usuari " + (i + 1) + ": " + temps.get(i) + " segons");
        }
        System.out.println();
        System.out.println("Mitjana de temps: " + String.format("%.0f", mitjana) + " segons");

        System.out.print("\nEls usuaris que han respost en menys de 10 segons són: ");
        for (int i = 0; i < temps.size(); i++) {
            if (temps.get(i) < 10) {
                System.out.print((i + 1) + ", ");
            }
        }

        System.out.println();

        //creem un comptador per saber quants han tardat entre 20 y 60 segons

        int comptador = 0;
        for (int t : temps) {
            if (t >= 20 && t <= 60) {
                comptador++;
            }
        }

        double percentatge = comptador * 100 / NUM_USUARIS;
        System.out.println("Percentatge d'usuaris entre 20 i 60 segons: " + String.format("%.0f", percentatge) + " % ");
        System.out.println();

    }
```
# 🧠 Exercici L5

## 📋 Enunciat L5

S'està celebrant un torneig d'escacs i es registren els resultats de les partides entre participants. Cada resultat indica el nom del guanyador i del perdedor.

a) Introdueix en un llistat els resultats de les partides. Cada posició del llistat indica una partida, i ha d'haver dos valors (guanyador, perdedor). Usa un vector per a emmagatzemar els dos valors en cada posició del llistat.  
b) Mostra la llista de jugadors únics que han participat (sense repetir).  
c) Mostra el nombre total de victòries per a cada jugador.


## 🛠️ Solució proposada

 a) Resultats de les partides
- Es crea una llista `partides` on cada element és un vector de dos posicions:
  - [0] → guanyador
  - [1] → perdedor
- Exemple: `{"Anna", "Joan"}` significa que **Anna** ha guanyat a **Joan**.

 b) Jugadors únics
- Es recorre cada partida i cada jugador.
- Si el jugador no està ja en la llista `jugadorsUnics`, s’afegeix.
- Al final es mostra la llista de tots els participants sense repeticions.

 c) Nombre de victòries per jugador
- Es creen dues llistes paral·leles:
  - `noms` → guarda els noms dels guanyadors.
  - `victòries` → guarda el nombre de victòries corresponent.
- Per cada partida:
  - Es mira el guanyador.
  - Si ja està en `noms`, s’incrementa el seu comptador en `victòries`.
  - Si no està, s’afegeix amb valor inicial 1.
- Finalment, es mostra per cada jugador únic el nombre de victòries (si no té cap, es mostra 0).

## 📦 Codi Java

```java

public static void main(String[] args) {

        // a) Resultats de les partides
        List<String[]> partides = new ArrayList<>();
        partides.add(new String[] { "Anna", "Joan" });
        partides.add(new String[] { "Joan", "Maria" });
        partides.add(new String[] { "Anna", "Maria" });
        partides.add(new String[] { "Maria", "Pau" });
        partides.add(new String[] { "Pau", "Joan" });

        // b) Jugadors únics

        List<String> jugadorsUnics = new ArrayList<>();
        for (String[] partida : partides) {
            for (String jugador : partida) {
                if (!jugadorsUnics.contains(jugador)) {
                    jugadorsUnics.add(jugador);
                }
            }
        }
        System.out.print("• Jugadors: ");
        System.out.println(jugadorsUnics);


        // c) Nombre de victòries per jugador
        List<String> noms = new ArrayList<>();
        List<Integer> victòries = new ArrayList<>();

        for (String[] partida : partides) {
            String guanyador = partida[0];
            if (noms.contains(guanyador)) {
                int index = noms.indexOf(guanyador);
                victòries.set(index, victòries.get(index) + 1);
            } else {
                noms.add(guanyador);
                victòries.add(1);
            }
        }

        System.out.println("\nVictòries per jugador:");
        for (String jugador : jugadorsUnics) {
            int index = noms.indexOf(jugador);
            int numVictories = (index != -1) ? victòries.get(index) : 0;
            System.out.println(jugador + ": " + numVictories);
        }

    }

```
