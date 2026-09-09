# UF3.2 Solucions
A continuació es resolen els exercicis plantejats en la unitat.
## Exercici 1
* Escriu un programa que imprimisca l'àrea d'un quadrat de costat 5.
* Modifica'l perquè el costat del quadrat s'introduïsca per teclat i es mostre l'àrea corresponent.
* Afig-hi el càlcul i la mostra del perímetre del mateix quadrat.



``` java 
    public static void main(String[] args) {
        Scanner entrada = new Scanner(System.in);
        System.out.print("Introdueix el costat del quadrat: ");
        int costat = entrada.nextInt();
        int area = costat * costat;
        int perimetre = 4 * costat;
        System.out.println("L'àrea del quadrat és: " + area);
        System.out.println("El perímetre del quadrat és: " + perimetre);
    }
```

## Exercici 2
* Escriu un programa que llig dos numeros i només mostre la seua suma.
* Ampli­a'l perquè també mostre la resta dels dos numeros.
* Afig el producte i la divisió, mostrant cada resultat amb un missatge clar.
* Afig que, en cas de dividir per zero, no farà l'operació i mostrarà un missatge indicant de l'error.
``` java 

    public static void main(String[] args) throws Exception {
        Scanner entrada = new Scanner(System.in);
        System.out.print("Introdueix el primer nombre: ");
        int a = entrada.nextInt();
        System.out.print("Introdueix el segon nombre: ");
        int b = entrada.nextInt();
        int suma = a + b;
        int resta = a - b;
        int producte = a * b;
        System.out.println("La suma és: " + suma);
        System.out.println("La resta és: " + resta);
        System.out.println("El producte és: " + producte);
        if (b != 0) {
            double divisio = (double) a / b;
            System.out.println("La divisió és: " + divisio);
        } else {
            System.out.println("Error: no es pot dividir per zero.");
        }
    }
```

## Exercici 3
* Escriu un programa que demane l'edat per teclat i, si l'usuari és major d'edat (≥18), mostre "Eres major d'edat".
* Modifica'l perquè, en cas contrari, mostre "Eres menor d'edat".
* Afig una comprovació addicional: si l'edat introduïda és negativa, que mostre "Error: edat invàlida".
``` java 
public static void main(String[] args) {

    public static void main(String[] args) throws Exception {
        Scanner entrada = new Scanner(System.in);
        System.out.print("Introdueix la teua edat: ");
        int edat = entrada.nextInt();

        if (edat < 0) {
            System.out.println("Error: edat invàlida.");
        } else if (edat >= 18) {
            System.out.println("Eres major d'edat.");
        } else {
            System.out.println("Eres menor d'edat.");
        }
    }

}
```

## Exercici 4
En el departament de secretaria t'han demanat un programa per convertir notes numèriques en valoracions alfabètiques.

* El programa llig una nota (0–10) i escriu la corresponent valoració:

    0–2: Molt deficient
    3–4: Insuficient
    5–6: Bé
    7–8: Notable
    9–10: Excel·lent

* Si la nota està fora de l'interval 0–10, ha de mostrar "Error: nota invàlida".

* Afig una felicitació addicional: si la qualificació és exactament 10, també mostrarà "Felicitats! Tens matrícula d'honor!".
``` java 
public static void main(String[] args) {
    public static void main(String[] args) throws Exception {
        Scanner entrada = new Scanner(System.in);
        System.out.print("Introdueix la nota (0-10): ");
        int nota = entrada.nextInt();
        if (nota < 0 || nota > 10) {
            System.out.println("Error: nota invàlida.");
        } else {
            if (nota <= 2) {
                System.out.println("Valoració: Molt deficient");
            } else if (nota <= 4) {
                System.out.println("Valoració: Insuficient");
            } else if (nota <= 6) {
                System.out.println("Valoració: Bé");
            } else if (nota <= 8) {
                System.out.println("Valoració: Notable");
            } else {
                System.out.println("Valoració: Excel·lent");
                if (nota == 10) {
                    System.out.println("Felicitats! Tens matrícula d'honor!");
                }
            }
        }
    }   
}
```

## Exercici 5
* Escriu un programa que llig les hores treballades i la tarifa per hora, i calcule el salari brut (sense hores extres).

* Amplia-lo perquè les hores que passen de 35 es paguen a 1,5 × tarifa.

* Afig el càlcul d'impostos segons trams:

    Primeros 500 €: 0 %
    Següents 400 €: 25 %
    Resta: 45 %


* Finalment, imprimeix nom, salari brut, total d'impostos i salari net, amb missatges clars.
``` java 
public static void main(String[] args) {
        Scanner entrada = new Scanner(System.in);

        System.out.print("Introdueix les hores treballades: ");
        double hores = entrada.nextDouble();
        System.out.print("Introdueix la tarifa per hora: ");
        double tarifa = entrada.nextDouble();
        double salariBrut;
        if (hores <= 35) {
            salariBrut = hores * tarifa;
        } else {
            salariBrut = 35 * tarifa + (hores - 35) * tarifa * 1.5;
        }
        double impostos = 0;
        if (salariBrut <= 500)
            impostos = 0;
        else {
            if (salariBrut <= 900) {
                impostos = (salariBrut - 500) * 0.25;
            } else {
                //els primers 400 el 25% la resta sbrut -500-400 per 45%
                impostos = (400 * 0.25) + ((salariBrut - 900) * 0.45);
            }
        }
        System.out.println("El teu salari es: " + (salariBrut - impostos));
    }
}
```

## Exercici 6
Una botiga ven banderes personalitzades de la màxima qualitat i ens ha demanat fer un configurador que calcule el preu segons alt i ample. El preu base d'una bandera és d'un cèntim d'euro el centímetre quadrat. Si la volem amb un escut brodat, el preu s'incrementa en 2,50 € independentment de l'escut. Les despeses d'enviament són 3,25€. L'IVA ja està inclòs a totes les tarifes.

>Exemple:
>
>Introduïu l'alçada de la bandera en cm: 20
>Ara introduïu l'amplada: 35  
>Vol escut brodat? (s/n): n  
>Gràcies. Aquí teniu el desglossament de la vostra compra.  
>Bandera de 700 cm2: 7,00 €  
>Sense escut: 0,00 €  
>Despeses d'enviament: 3,25 €  
>Total: 10,25 €
``` java 
public static void main(String[] args) {
        Scanner entrada = new Scanner(System.in);
        System.out.print("Alçada de la bandera (cm): ");
        int alcada = entrada.nextInt();
        System.out.print("Amplada de la bandera (cm): ");
        int amplada = entrada.nextInt();
       
        System.out.print("Vol escut brodat? (s/n): ");
        String escut = entrada.next();

        int area = alcada * amplada;
        double preuBandera = area * 0.01;
        //el equalsIgnoreCase es per a que done igualq eu posen majuscula o minuscula en s/n S/N
        double preuEscut = escut.equalsIgnoreCase("s") ? 2.50 : 0.00;
        double enviament = 3.25;
        double total = preuBandera + preuEscut + enviament;

        System.out.println("Bandera de " + area + " cm2: " + String.format("%.2f", preuBandera) + " €");
        System.out.println((preuEscut > 0 ? "Amb escut: " : "Sense escut: ") + String.format("%.2f", preuEscut) + " €");
        System.out.println("Despeses d'enviament: " + enviament + " €");
        System.out.println("Total: " + String.format("%.2f", total) + " €");    
}
```

## Exercici 7
Una pastisseria ens ha demanat fer un programa que faça pressupostos de pastissos. El programa preguntarà primer de quin sabor vol l'usuari el pastís: poma, maduixa o xocolata. El pastís de poma val 18 euros i el de maduixa 16. En cas de seleccionar el pastís de xocolata, el programa ha de preguntar a més si la xocolata és negra o blanca; la primera opció val 14 euros i la segona 15. Finalment, es pregunta si s'hi afegeix nata i si es personalitza amb un nom; la nata suma 2,50 i l'escriptura del nom 2,75.

>Exemple:
>
>Trieu un sabor (poma, maduixa o xocolata): xocolata
>
>Quin tipus de xocolata voleu? (negre o blanc): negre
>
>Vol nata? (si o no): si
>
>Voleu posar-hi un nom? (si o no): no
>
>Total: 20,50 €

``` java 
public static void main(String[] args) {
        Scanner entrada = new Scanner(System.in);
        System.out.print("Trieu un sabor (poma, maduixa o xocolata): ");
        String sabor = entrada.nextLine();
        double preuPastis = 0;

        if (sabor.equalsIgnoreCase("poma"))
            preuPastis = 18;
        else if (sabor.equalsIgnoreCase("maduixa"))
            preuPastis = 16;
        else if (sabor.equalsIgnoreCase("xocolata")) {
            System.out.print("Quin tipus de xocolata voleu? (negre o blanc): ");
            String tipus = entrada.nextLine();
            if (tipus.equalsIgnoreCase("negre"))
                preuPastis = 14;
            else if (tipus.equalsIgnoreCase("blanc"))
                preuPastis = 15;
        }

        System.out.print("Vol nata? (si o no): ");
        String nata = entrada.nextLine();
        double preuNata = nata.equalsIgnoreCase("si") ? 2.50 : 0;

        System.out.print("Voleu posar-hi un nom? (si o no): ");
        String nom = entrada.nextLine();
        double preuNom = nom.equalsIgnoreCase("si") ? 2.75 : 0;

        double totalPastis = preuPastis + preuNata + preuNom;
        System.out.println("Total: " + String.format("%.2f", totalPastis) + " €");
}
```

## Exercici 8
Implementa el joc pedra, paper y tisora. Primer, l'usuari 1 introdueix la seua jugada y després l'usuari 2.

> Exemple 1:
>
>Torn del jugador 1 (introdueix pedra, paper o tisora): paper
>
>Torn del jugador 2 (introdueix pedra, paper o tisora): paper
>
>Empat

>Exemple 2:
>
>Torn del jugador 1 (introdueix pedra, paper o tisora): paper
>
>Torn del jugador 2 (introdueix pedra, paper o tisora): tisora
>
>Guanya el jugador 2

>Exemple 3:
>
>Torn del jugador 1 (introdueix pedra, paper o tisora): pedra
>
>Torn del jugador 2 (introdueix pedra, paper o tisora): tisora
>
>Guanya el jugador 1

``` java 
public static void main(String[] args) {
    public static void main(String[] args) throws Exception {
        Scanner entrada = new Scanner(System.in);

        System.out.print("Jugador 1 (pedra, paper o tisora): ");
        String j1 = entrada.nextLine();
        System.out.print("Jugador 2 (pedra, paper o tisora): ");
        String j2 = entrada.nextLine();

        if (j1.equals(j2))
            System.out.println("Empat");
        else if ((j1.equals("pedra") && j2.equals("tisora")) ||
                (j1.equals("paper") && j2.equals("pedra")) ||
                (j1.equals("tisora") && j2.equals("paper"))) {
            System.out.println("Guanya el jugador 1");
        } else {
            System.out.println("Guanya el jugador 2");
        }
    }
}
```

## Exercici 9
Una empresa de missatgeria vol automatitzar el càlcul del preu d'enviaments de paquets segons el pes i la destinació. El programa demanarà primer el pes del paquet en kg.

    Si el pes és inferior a 1 kg, el preu base és de 3 €.
    Si el pes està entre 1 i 5 kg (inclosos), el preu base és de 5 €.
    Si el pes supera els 5 kg, el preu base és de 10 €.

Després, es pregunta si el destí és nacional o internacional:

    En cas d'enviament internacional, s'aplica un suplement de 7,50 €.
    Si l'enviament és nacional, no hi ha cap suplement.

Finalment, es mostra el desglossament del preu total.

>Exemple:
>
>Introdueix el pes del paquet (en kg): 2.5  
>
>És un enviament internacional? (s/n): s  
>
>Preu base per 2.5 kg: 5,00 €  
>
>Suplement per enviament internacional: 7,50 €  
>
>Total: 12,50 €

``` java 
public static void main(String[] args) {
        Scanner entrada = new Scanner(System.in);

        System.out.print("Introdueix el pes del paquet (kg): ");
        double pes = entrada.nextDouble();

        System.out.print("És un enviament internacional? (s/n): ");
        String internacional = entrada.next();

        double preuBase;
        if (pes < 1)
            preuBase = 3;
        else if (pes <= 5)
            preuBase = 5;
        else
            preuBase = 10;

        double suplement = internacional.equalsIgnoreCase("s") ? 7.50 : 0;
        double totalEnviament = preuBase + suplement;

        System.out.println("Preu base per " + pes + " kg: " + preuBase + " €");
        if (suplement > 0)
            System.out.println("Suplement per enviament internacional: " + suplement + " €");
        System.out.println("Total: " + totalEnviament + " €"); 
}
```

## Exercici 10
Una cafeteria et demana que programes un sistema per fer tiquets de comanda per esmorzars. Cada client pot triar una beguda (cafè, te o xocolata) i una pasta (croissant, ensaïmada o magdalena).

Preus de les begudes:

    Cafè: 1,20 €
    Te: 1,00 €
    Xocolata: 1,50 €

Preus de les pastes:

    Croissant: 1,10 €
    Ensaïmada: 1,40 €
    Magdalena: 0,90 €

El programa també pregunta si es vol per emportar o per consumir al local.

Si és per emportar, s'aplica un recàrrec de 0,25 € pel got i el recipient.

>Exemple:
>
>Tria una beguda (cafè, te o xocolata): xocolata  
>
>Tria una pasta (croissant, ensaïmada o magdalena): ensaïmada  
>
>Vols per emportar? (s/n): s  
>
>Beguda (xocolata): 1,50 €  
>
>Pasta (ensaïmada): 1,40 €  
>
>Recàrrec per emportar: 0,25 €  
>
>Total: 3,15 €

``` java 
public static void main(String[] args) {
        Scanner entrada = new Scanner(System.in);
        System.out.print("Tria una beguda (cafè, te o xocolata): ");
        String beguda = entrada.nextLine();
        System.out.print("Tria una pasta (croissant, ensaïmada o magdalena): ");
        String pasta = entrada.nextLine();
        System.out.print("És per emportar? (si o no): ");
        String emportar = entrada.nextLine();

        double preuBeguda = 0.0;
        if (beguda.equals("cafè")) {
            preuBeguda = 1.20;
        } else if (beguda.equals("te")) {
            preuBeguda = 1.00;
        } else {
            preuBeguda = 1.50;
        }
        //format curt
        //double preuBeguda = beguda.equals("cafè") ? 1.20 : beguda.equals("te") ? 1.00 : 1.50;

        double preuPasta = 0.0;
        if (pasta.equals("croissant")) {
            preuPasta = 1.10;
        } else if (pasta.equals("ensaïmada")) {
            preuPasta = 1.40;
        } else {
            preuPasta = 0.90;
        }
        //format curt
        //double preuPasta = pasta.equals("croissant") ? 1.10 : pasta.equals("ensaïmada") ? 1.40 : 0.90;

        double recarrec = 0.0;
        if (emportar.equalsIgnoreCase("si")) {
            recarrec = 0.25;
        } else {
            recarrec = 0;
        }
        //format curt
        //double recarrec = emportar.equalsIgnoreCase("si") ? 0.25 : 0;

        double totalEsmorzar = preuBeguda + preuPasta + recarrec;

        System.out.println("Total esmorzar: " + String.format("%.2f", totalEsmorzar) + " €");
}
```


