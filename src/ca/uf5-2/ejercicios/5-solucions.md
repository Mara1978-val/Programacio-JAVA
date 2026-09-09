# Solucions UF05. Estructures de Dades Dinàmiques II


<!--<div style="
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

</div>-->


##### Exercicis - Estructures associatives 

# 🧠 Exercici H1

## 📋 Enunciat H1

a) Demana una frase per teclat i emmagatzema cada paraula en un vector.  
b) Guarda cada paraula en una estructura associativa, on la clau siga la paraula i el valor siga el recompte.  
c) Mostra les paraules i el nombre de repeticions.  
d) Mostra quina paraula és la que més es repeteix.  

## 🛠️ Solució proposada

a) Demanar una frase i separar les paraules

- Llegir la frase amb Scanner.nextLine().
- Convertir-la en un vector amb split(" ") per separar per espais.

b) Guardar en una estructura associativa (HashMap)

- Crear un HashMap<String, Integer>.
- Inicialment, guardar cada paraula com a clau i el seu nombre de caràcters com a valor.

c) Mostrar les paraules i el número de repeticions

- Substituir tots els valors per 0 amb replaceAll.
- Recórrer el vector i incrementar el comptador per cada aparició.
- Mostrar el HashMap amb les repeticions.

d) Mostrar la paraula que més es repeteix

- Recórrer el HashMap per trobar la clau amb el valor més alt.
- Mostrar-la amb el nombre de vegades que apareix.


## 📦 Codi Java

```java
public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        // a) Demanar una frase i separar les paraules
        System.out.print("Introdueix una frase: ");
        String frase = sc.nextLine();

        // Convertim la frase en un vector de paraules
        String[] paraules = frase.split(" "); // separa per espais

        // b) Guardar en una estructura associativa (HashMap)
        //on la clau siga la paraula i el valor siga el recompte.
        HashMap<String, Integer> comptador = new HashMap<>();
        for (int i = 0; i < paraules.length; i++) {
            comptador.put(paraules[i], paraules[i].length());
        }
        System.out.println(comptador);

        // c) Mostrar les paraules i el número de repeticions
        System.out.println("\nRecompte de paraules:");
        comptador.replaceAll((clau, valor) -> 0);
        for (String paraula : paraules) {
            int ocurrencies=comptador.get(paraula);
            comptador.put(paraula, ++ ocurrencies) ;
        }
        System.out.println(comptador);

        // d) Mostrar la paraula que més es repeteix

        int max = 0;
        String mesFreq = "";
        for (Map.Entry<String, Integer> entradaComptador : comptador.entrySet()) {
            String paraula = entradaComptador.getKey();
            int repeticions = entradaComptador.getValue();
            if (repeticions > max) {
                max = repeticions;
                mesFreq = paraula;
            }
        }
        //Què passa si hi ha diverses que es repeteixen el mateix número de vegades?
         

        System.out.println("\nLa paraula que més es repeteix és: '" + mesFreq + "' (" + max + " vegades)");

        sc.close();
    }
```

# 🧠 Exercici H5

## 📋 Enunciat H5
En una plataforma de valoració s'ha preparat un test de 10 preguntes. Cada pregunta pot rebre una puntuació de 1 a 5 estrelles per part dels usuaris. Volem un programa que acumule els resultats en una estructura clau-valor niada, i que ens permeta calcular estadístiques per a cada pregunta i en conjunt.

La estructura serà:

  -  Clau exterior: número de pregunta (1…10)
  -  Valor exterior: una altra estructura clau-valor on
       - Clau interior: puntuació (1…5)
       - Valor interior: recompte d'usuaris que han donat eixa puntuació

a) Declara i inicialitza l'estructura amb valors enters aleatoris.

b) Permet a l'usuari demanar un número de pregunta, i mostrar un histograma de les puntuacions per a eixa pregunta.

c) Fes que, a més de l'histograma, calcule la puntuació mitjana de la pregunta. P

## 🛠️ Solució proposada


 a) Inicialitzar amb valors aleatoris
- Crear una estructura `Map<Integer, Map<Integer, Integer>>` anomenada `resultats`.
- Per a cada **pregunta** (de 1 a 10):
  - Crear un mapa per a les **puntuacions** (de 1 a 5).
  - Assignar a cada puntuació un **recompte aleatori** entre 0 i 5 amb `rand.nextInt(6)`.
- Afegir el mapa de puntuacions al mapa principal `resultats`.

---

 b) Demanar número de pregunta
- Utilitzar `Scanner` per demanar a l’usuari un número entre **1 i 10**.
- Obtenir el mapa de puntuacions corresponent amb `resultats.get(numPregunta)`.

---

 c) Mostrar histograma
- Recórrer les puntuacions (de 1 a 5).
- Per a cada puntuació:
  - Obtenir el recompte amb `puntuacionsPregunta.get(puntuacio)`.
  - Imprimir la puntuació seguida de tants `*` com indica el recompte.

 d) Calcular mitjana
- Inicialitzar `suma = 0` i `totalRespostes = 0`.
- Recórrer les puntuacions:
- Multiplicar la puntuació pel número de respostes i acumular en `suma`.
- Afegir el número de respostes a `totalRespostes`.
- Si `totalRespostes > 0`, calcular: `mitjana = suma / totalRespostes`




## 📦 Codi Java

```java
public static void main(String[] args) {
        Random rand = new Random();
        Scanner sc = new Scanner(System.in);

        // Estructura: pregunta → (puntuació → recompte)
        Map<Integer, Map<Integer, Integer>> resultats = new HashMap<>();

        // a) Inicialitzar amb valors aleatoris
        for (int pregunta = 1; pregunta <= 10; pregunta++) {
            Map<Integer, Integer> puntuacions = new HashMap<>();
            for (int puntuacio = 1; puntuacio <= 5; puntuacio++) {
                // Generem un recompte d'usuaris aleatori entre 0 i 5
                puntuacions.put(puntuacio, rand.nextInt(6));
            }
            resultats.put(pregunta, puntuacions);
        }

        // b) Demanar número de pregunta
        System.out.print("Introdueix el número de pregunta (1-10): ");
        int numPregunta = sc.nextInt();

        Map<Integer, Integer> puntuacionsPregunta = resultats.get(numPregunta);

        // Mostrar histograma
        System.out.println("\nPregunta " + numPregunta + ":");
        for (int puntuacio = 1; puntuacio <= 5; puntuacio++) {
            int recompte = puntuacionsPregunta.get(puntuacio);
            System.out.print(puntuacio + ": ");
            for (int i = 0; i < recompte; i++) {
                System.out.print("*");
            }
            System.out.println();
        }

        // c) Calcular mitjana
        double suma = 0;
        double totalRespostes = 0;

        for (int puntuacio = 1; puntuacio <= 5; puntuacio++) {
            int nRespostes = puntuacionsPregunta.get(puntuacio);
            suma += puntuacio * nRespostes;
            totalRespostes += nRespostes;
        }

        double mitjana = (totalRespostes > 0) ? (suma / totalRespostes) : 0;
        System.out.println("Mitjana = " + String.format("%.2f", mitjana));
    }
```

# 🧠 Exercici Q1

## 📋 Enunciat Q1

a) Demana una sèrie de noms per teclat i guarda’ls en una cua.

b) Mostra per pantalla la cua sencera.

c) Simula l’atenció d’una fila de clients traent-los un per un de la cua (amb poll).

d) Mostra un missatge cada vegada que atens un client i quan la cua està buida.

## 🛠️ Solució proposada
 a) Demanar noms per teclat fins que l'usuari escriga `"fi"`

-   Crear un **objecte `Scanner`** per llegir des del teclat.
-   Crear una **cua (`Queue<String>`)** utilitzant `LinkedList`.
-   Mostrar un missatge per demanar noms.
-   Llegir noms en un **bucle `do...while`** fins que l'usuari escriga
    `"fi"`.
-   Cada nom introduït (que no siga `"fi"`) s'afegeix a la cua amb
    `cua.add(nom)`.

------------------------------------------------------------------------

 b) Mostrar per pantalla la cua sencera

-   Si la cua està buida (`cua.isEmpty()`), mostrar el missatge:
    `"La cua està  buida."`
-   En cas contrari, imprimir el contingut de la cua:
    `"Cua actual: " + cua`

------------------------------------------------------------------------

 c) Simular l'atenció de la fila

-   Mostrar el missatge:
    `"Comença l'atenció als clients..."`
-   Utilitzar un bucle `while` que s'executa mentre la cua **no estiga
    buida**.
-   En cada iteració:
    -   Extreure el primer element amb `poll()`.
    -   Mostrar: `"Atent el client: " + client`

------------------------------------------------------------------------

 d) Mostrar missatge final quan la cua està  buida

-   Quan acabe el bucle, mostrar:
    `"No queden mes clients. La cua està  buida."`


## 📦 Codi Java

```java
public static void main(String[] args) {
        
        Scanner sc = new Scanner(System.in);
        Queue<String> cua = new LinkedList<>();

        // a) Demanar noms per teclat fins que l’usuari escrigui "fi"
        String nom;
        System.out.println("Introdueix noms (escriu 'fi' per acabar):");

        do {
            System.out.print("Nom: ");
            nom = sc.nextLine();
            if (!nom.equalsIgnoreCase("fi")) {
                cua.add(nom);
            }
        } while (!nom.equalsIgnoreCase("fi"));  // repeteix fins que s’escriu "fi"

        // b) Mostrar per pantalla la cua sencera
        if (cua.isEmpty()) {
            System.out.println("La cua està buida.");
        } else {
            System.out.println("Cua actual: " + cua);
        }

        // c) Simular l’atenció de la fila traient-los un per un amb poll()
        System.out.println("\nComença l’atenció als clients...");
        while (!cua.isEmpty()) {
            String client = cua.poll();
            System.out.println("Atent el client: " + client);
        }

        // d) Mostrar missatge quan la cua està buida
        System.out.println("No queden més clients. La cua està buida.");

        sc.close();
    }
```

# 🧠 Exercici Q5

## 📋 Enunciat Q5

Es vol simular una cua d’autobusos en una estació.

**a)** Cada autobús s’identifica pel seu número de línia.  
**b)** Els autobusos arriben i s’afegeixen a la cua.  
**c)** Cada vegada que un autobús ix, es lleva de la cua.  
**d)** Mostra la situació actual de la cua després de cada eixida.  
**e)** Afig una opció per a veure quin és el pròxim autobús que eixirà (`peek`).  

## 🛠️ Solució proposada
a) Identificar cada autobús pel seu número de línia
- Cada autobús es representa simplement pel seu número de línia (String o int).
- Quan l’usuari introdueix un nou autobús, es llig pel teclat.
- Aquest número de línia serà l’element que guardarem en la cua.

b) Afegir els autobusos a una cua (Queue)
- S’utilitza una estructura de tipus `Queue<String>`, implementada amb `LinkedList`.
- Quan arriba un autobús, s’afegeix al final de la cua amb `add()`.


c) Eliminar l’autobús que ix de la cua
- Quan un autobús ix, s’utilitza `poll()`, que:
  - elimina i retorna el primer element de la cua,
  - o torna `null` si la cua està buida.
- Després d’eliminar-lo, es mostra l’estat actual de la cua per saber quins autobusos queden en espera.

d) Mostrar la situació actual de la cua després de cada eixida
- Després d’una eixida, es mostra la cua completa directament imprimint l’objecte `Queue`.
  - Exemple:
    ```java
    System.out.println("Situació actual de la cua: " + cua);
    ```
- Això permet visualitzar els autobusos pendents i l’ordre d’eixida.

e) Consultar quin serà el pròxim autobús que eixirà
- Per saber quin autobús eixirà sense eliminar-lo, s’utilitza `peek()`.
- `peek()` retorna el primer element de la cua sense modificar-la.
- Si la cua és buida, retorna `null`.
- És útil per informar a l’usuari del pròxim autobús que eixirà.


## 📦 Codi Java

```java
public static void main(String[] args) {
        Queue<String> cua = new LinkedList<>();
        Scanner sc = new Scanner(System.in);
        int opcio;

        do {
            System.out.println("\n--- MENÚ AUTOBUSOS ---");
            System.out.println("1. Arriba un autobús");
            System.out.println("2. Ix un autobús");
            System.out.println("3. Mostrar pròxim autobús");
            System.out.println("4. Mostrar cua completa");
            System.out.println("0. Eixir");
            System.out.print("Opció: ");
            opcio = sc.nextInt();
            sc.nextLine(); // netejar buffer

            switch (opcio) {
                case 1:
                    System.out.print("Número de línia de l'autobús: ");
                    String linia = sc.nextLine();
                    cua.add(linia);
                    System.out.println("Autobús " + linia + " afegit a la cua.");
                    break;

                case 2:
                    if (cua.isEmpty()) {
                        System.out.println("No hi ha autobusos a la cua.");
                    } else {
                        String eixit = cua.poll(); // elimina el primer
                        System.out.println("Ha eixit l'autobús: " + eixit);
                        System.out.println("Situació actual de la cua: " + cua);
                    }
                    break;

                case 3:
                    if (cua.isEmpty()) {
                        System.out.println("No hi ha autobusos a la cua.");
                    } else {
                        System.out.println("El pròxim autobús serà: " + cua.peek());
                    }
                    break;

                case 4:
                    System.out.println("Cua actual: " + cua);
                    break;

                case 0:
                    System.out.println("Eixint del programa...");
                    break;

                default:
                    System.out.println("Opció no vàlida.");
            }
        } while (opcio != 0);

        sc.close();

    }
```

# 🧠 Exercici S1

## 📋 Enunciat S1
**a)** Demana una frase per teclat i guarda cada paraula en una pila.  
**b)** Mostra la frase en ordre invers traient les paraules una a una amb `pop`.  
**c)** Mostra la frase original i la invertida.  


## 🛠️ Solució proposada
 a) Demanar una frase i guardar cada paraula en una pila
- Primer es demana una frase completa per teclat.
- La frase es separa en paraules fent `split(" ")`.
- Cada paraula es guarda en la pila utilitzant l’operació `push()`.
- Això provoca que la primera paraula quede al fons i l’última quede al cim de la pila.

 b) Mostrar la frase en ordre invers traient les paraules una a una amb `pop()`
- Per invertir l’ordre, s’extrau cada paraula amb `pop()`, que retorna sempre l’element del cim.
- Com que la pila és una estructura LIFO (Last In, First Out), la frase apareix invertida.
- Les paraules s’afegeixen a una nova cadena que forma la frase invertida.

 c) Mostrar la frase original i la frase invertida
- Finalment, es mostra la frase original tal com l’ha introduïda l’usuari.
- També es mostra la frase invertida generada a partir de les extraccions de la pila.



## 📦 Codi Java

```java
public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        Stack<String> pila = new Stack<>();

        // a) Demanar una frase i guardar cada paraula en una pila
        System.out.print("Introdueix una frase: ");
        String frase = sc.nextLine();

        String[] paraules = frase.split(" ");

        for (String p : paraules) {
            pila.push(p); // guardar en la pila
        }

        // b) Mostrar la frase en ordre invers traient amb pop()
         String fraseInvertida = "";

        while (!pila.isEmpty()) {
            fraseInvertida += pila.pop() + " ";
        }

        // c) Mostrar frase original i invertida
        System.out.println("Frase original: " + frase);
        System.out.println("Frase invertida: " + fraseInvertida);

        sc.close();
    }
```

# 🧠 Exercici S5

## 📋 Enunciat S5

Es vol simular una pila d’objectes en un magatzem.

**a)** Cada objecte té un nom i un pes.  
**b)** Els objectes s’apilen amb `push`.  
**c)** Quan es descarrega el magatzem, s’extrau amb `pop`.  
**d)** Mostra el nom i el pes de cada objecte mentre es descarrega.  
**e)** Calcula el pes total de tots els objectes descarregats. 


## 🛠️ Solució proposada
 a) Ús de dues piles per a guardar la informació
- Es creen dues estructures `Stack`:  
  - Una per als **noms** dels objectes.  
  - Una altra per als **pesos**.  
- Cada posició de les piles correspon al mateix objecte.

 b) Carregar objectes en el magatzem
- Quan l’usuari tria l’opció *Carregar objecte*, es demana:
  - El nom de l’objecte.
  - El pes en kg.
- Les dades es guarden amb `push()` en cadascuna de les piles.

 c) Descarregar objectes del magatzem
- Quan es tria *Descarregar objecte*, s’utilitza `pop()` en les dues piles.
- S’extrau sempre l’últim objecte que s’ha carregat (LIFO).
- Es mostra per pantalla el nom i el pes de l’objecte descarregat.

 d) Control del pes total descarregat
- Cada vegada que un objecte es descarrega, el seu pes s’acumula en una variable `pesTotal`.
- L’opció *Mostrar pes total* mostra la quantitat total descarregada fins al moment.

 e) Menú per automatitzar les operacions
- El programa utilitza un menú repetitiu amb les opcions:
  1. Carregar objecte  
  2. Descarregar objecte  
  3. Mostrar pes total descarregat  
  0. Eixir  
- L’usuari pot repetir les operacions tantes vegades com vulga fins seleccionar *0*.

## 📦 Codi Java

```java
public static void main(String[] args) {
          Scanner sc = new Scanner(System.in);

        Stack<String> noms = new Stack<>();
        Stack<Double> pesos = new Stack<>();

        double pesTotal = 0;   // acumulador del pes descarregat
        int opcio;

        do {
            System.out.println("\n--- MENÚ MAGATZEM ---");
            System.out.println("1. Carregar objecte");
            System.out.println("2. Descarregar objecte");
            System.out.println("3. Mostrar pes total descarregat");
            System.out.println("0. Eixir");
            System.out.print("Opció: ");
            opcio = sc.nextInt();
            sc.nextLine();

            switch (opcio) {

                case 1: // Carregar
                    System.out.print("Nom de l'objecte: ");
                    String nom = sc.nextLine();

                    System.out.print("Pes (kg): ");
                    double pes = sc.nextDouble();
                    sc.nextLine();

                    noms.push(nom);
                    pesos.push(pes);

                    System.out.println("Objecte carregat correctament.");
                    break;

                case 2: // Descarregar
                    if (noms.isEmpty()) {
                        System.out.println("No queden objectes al magatzem.");
                    } else {
                        String nomDesc = noms.pop();
                        double pesDesc = pesos.pop();

                        System.out.println("S'ha descarregat: " + nomDesc + " - " + pesDesc + " kg");

                        pesTotal += pesDesc;
                    }
                    break;

                case 3: // Pes total
                    System.out.println("Pes total descarregat fins ara: " + pesTotal + " kg");
                    break;

                case 0:
                    System.out.println("Eixint del programa...");
                    break;

                default:
                    System.out.println("Opció no vàlida.");
            }

        } while (opcio != 0);

    }
```