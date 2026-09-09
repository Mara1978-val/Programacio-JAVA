# Solucions UF04. Estructures repetitives 

##### nivell bàsic
# 🧠 Exercici 1

## 📋 Enunciat
> a) Escriu un programa que, donat un nombre N introduït per teclat, mostre per pantalla tots els nombres de l'1 fins a N.
b) Modifica'l perquè només mostre els nombres parells.
c) Modifica'l perquè no mostre ni el 16 ni els múltiples de 3.

---

## 📦 Codi Java

```java
import java.util.Scanner;

public class App {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Introdueix un nombre N: ");
        int N = scanner.nextInt();

        for (int i = 1; i <= N; i++) {
            System.out.println(i);
        }
    }
}

```
# 🧠 Exercici 2

## 📋 Enunciat
> a) Crea un programa que vaja demanant números fins que es llija un 0.
> b) Afig una variable que comptabilitze quants números s'han llegit.
> c) Mostra quants d'eixos han sigut positius.
> d) Mostra la mitjana de tots els números llegits (sense comptar el 0 final).

---

## 🛠️ Solució proposada
* Inicialitzar les variables: Comptador, suma, positius.
* Llegir números en un bucle fins que es llija un 0.
* Actualitzar les variables segons el valor llegit.
* Mostrar els resultats al final del programa.

---

## 📦 Codi Java

```java
import java.util.Scanner;

public class App {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int numero;
        int comptador = 0;
        int positius = 0;
        int suma = 0;

        System.out.println("Introdueix números (0 per a acabar):");

        do {
            numero = scanner.nextInt();
            if (numero != 0) {
                comptador++;
                suma += numero;
                if (numero > 0) {
                    positius++;
                }
            }
        } while (numero != 0);

        System.out.println("Total de números llegits: " + comptador);
        System.out.println("Números positius: " + positius);

        if (comptador > 0) {
            double mitjana = (double) suma / comptador;
            System.out.println("Mitjana dels números llegits: " + mitjana);
        } else {
            System.out.println("No s'han llegit números per calcular la mitjana.");
        }

        scanner.close();
    }
}

```
# 🧠 Exercici 3

## 📋 Enunciat
> a) Escriu un programa que calcule i mostre el factorial d'un número N, introduït per teclat.
b) Permet que es torne a demanar el valor de N fins que siga un número positiu.
c) Afig una funcionalitat que mostre la seqüència de multiplicacions que es fan.

---

## 🛠️ Solució proposada
* Lectura de dades amb Scanner per capturar l’entrada de l’usuari.
* Validació amb un bucle do-while que es repeteix fins que l’usuari introdueix un número positiu.
* Càlcul del factorial amb un bucle for, acumulant el resultat.
* Impressió de la seqüència dins del mateix bucle, mostrant cada pas de la multiplicació.

---

## 📦 Codi Java

```java
import java.util.Scanner;

public class App {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int n;

        // b) Demanar N fins que siga positiu
        do {
            System.out.print("Introdueix un número enter positiu: ");
            n = scanner.nextInt();
            if (n < 0) {
                System.out.println("El número ha de ser positiu. Torna-ho a intentar.");
            }
        } while (n < 0);

        // a) Calcular el factorial
        long factorial = 1;
        System.out.print(n + "! = ");

        // c) Mostrar la seqüència de multiplicacions
        for (int i = 1; i <= n; i++) {
            factorial *= i;
            System.out.print(i);
            if (i < n) {
                System.out.print(" * ");
            } else {
                System.out.print(" = ");
            }
        }

        System.out.println(factorial);
        scanner.close();
    }
}

```


##### nivell intermig

# 🧠 Exercici 4

## 📋 Enunciat
> Un grup d'amics ha fet un torneig i vol enregistrar les puntuacions.
>
>a) El programa demana el nom i puntuació de 4 jugadors i mostra qui ha aconseguit la puntuació més alta.
b) Mostra la mitjana de les puntuacions.
c) Si hi ha alguna puntuació inferior a 5, mostra "Cal millorar" per a eixos jugadors.

---

## 🛠️ Solució proposada

Pas 1: Crear variables per guardar el nom i la puntuació de cada jugador.
Pas 2: Utilitzar Scanner per demanar les dades.
Pas 3: Comparar les puntuacions amb condicions if per trobar la més alta.
Pas 4: Calcular la mitjana amb una operació aritmètica.
Pas 5: Comprovar si alguna puntuació és inferior a 5 i mostrar el missatge corresponent.

---

## 📦 Codi Java

```java
import java.util.Scanner;
public class App {
 public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // Dades dels 4 jugadors
        System.out.print("Nom del jugador 1: ");
        String nom1 = scanner.nextLine();
        System.out.print("Puntuació de " + nom1 + ": ");
        int puntuacio1 = scanner.nextInt();
        scanner.nextLine();

        System.out.print("Nom del jugador 2: ");
        String nom2 = scanner.nextLine();
        System.out.print("Puntuació de " + nom2 + ": ");
        int puntuacio2 = scanner.nextInt();
        scanner.nextLine();

        System.out.print("Nom del jugador 3: ");
        String nom3 = scanner.nextLine();
        System.out.print("Puntuació de " + nom3 + ": ");
        int puntuacio3 = scanner.nextInt();
        scanner.nextLine();

        System.out.print("Nom del jugador 4: ");
        String nom4 = scanner.nextLine();
        System.out.print("Puntuació de " + nom4 + ": ");
        int puntuacio4 = scanner.nextInt();
        scanner.nextLine();

        // Trobar la puntuació més alta
        String millorJugador = nom1;
        int millorPuntuacio = puntuacio1;

        if (puntuacio2 > millorPuntuacio) {
            millorJugador = nom2;
            millorPuntuacio = puntuacio2;
        }
        if (puntuacio3 > millorPuntuacio) {
            millorJugador = nom3;
            millorPuntuacio = puntuacio3;
        }
        if (puntuacio4 > millorPuntuacio) {
            millorJugador = nom4;
            millorPuntuacio = puntuacio4;
        }
        System.out.println();
        System.out.println("La puntuació més alta és de " + millorJugador + " amb " + millorPuntuacio + " punts.");

        // Calcular la mitjana
        double mitjana = (puntuacio1 + puntuacio2 + puntuacio3 + puntuacio4) / 4.0;
        System.out.println("La mitjana de les puntuacions és: " + mitjana);

        // Mostrar "Cal millorar" si puntuació < 5
        System.out.println();
        System.out.println("Jugadors que han de millorar:");
        boolean algunHaDeMillorar = false;

        if (puntuacio1 < 5) {
            System.out.println(nom1 + " - " + puntuacio1 + " punts. Cal millorar.");
            algunHaDeMillorar = true;
        }
        if (puntuacio2 < 5) {
            System.out.println(nom2 + " - " + puntuacio2 + " punts. Cal millorar.");
            algunHaDeMillorar = true;
        }
        if (puntuacio3 < 5) {
            System.out.println(nom3 + " - " + puntuacio3 + " punts. Cal millorar.");
            algunHaDeMillorar = true;
        }
        if (puntuacio4 < 5) {
            System.out.println(nom4 + " - " + puntuacio4 + " punts. Cal millorar.");
            algunHaDeMillorar = true;
        }

        if (!algunHaDeMillorar) {
            System.out.println("Cap jugador té puntuació inferior a 5.");
        }

        scanner.close();
    }    
}
```
# 🧠 Exercici 5

## 📋 Enunciat
> En un centre d'atenció telefònica volen saber quants clients han valorat negativament el servei.
>
>a) Escriu un programa que llig per teclat 10 valoracions numèriques (−5 a +5) i indique si hi ha hagut algun negatiu.
b) Modifica'l perquè també compte i mostre quants són positius, quants negatius i quants neutres (valoració de 0).
c) Afig un missatge en cas que tots siguen positius: "Excel·lent!"
d) Si algun és −5, afegir "Revisió urgent necessària".

---

## 🛠️ Solució proposada
    Llegir 10 valoracions introduïdes per l’usuari.
    Detectar si hi ha alguna valoració negativa.
    Comptar quantes valoracions són:

    Positives (> 0)
    Negatives (< 0)
    Neutres (= 0)


    Mostrar missatges especials:

    Si totes són positives: mostrar "Excel·lent!"
    Si algun valor és −5: mostrar "Revisió urgent necessària"

---

## 📦 Codi Java

```java
import java.util.Scanner;

public class App {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int valoracio;
        int positius = 0;
        int negatius = 0;
        int neutres = 0;
        boolean hiHaNegativa = false;
        boolean revisioUrgent = false;

        System.out.println("Introdueix 10 valoracions entre -5 i +5:");

        for (int i = 1; i <= 10; i++) {
            System.out.print("Valoració " + i + ": ");
            valoracio = scanner.nextInt();

            if (valoracio < 0) {
                hiHaNegativa = true;
                negatius++;
            } else if (valoracio > 0) {
                positius++;
            } else {
                neutres++;
            }

            if (valoracio == -5) {
                revisioUrgent = true;
            }
        }

        // a) Mostrar si hi ha valoracions negatives
        if (hiHaNegativa) {
            System.out.println("Hi ha valoracions negatives.");
        } else {
            System.out.println("No hi ha valoracions negatives.");
        }

        // b) Comptar i mostrar positius, negatius i neutres
        System.out.println("Positius: " + positius);
        System.out.println("Negatius: " + negatius);
        System.out.println("Neutres: " + neutres);

        // c) Missatge si tots són positius
        if (positius == 10) {
            System.out.println("Excel·lent!");
        }

        // d) Missatge si algun és -5
        if (revisioUrgent) {
            System.out.println("Revisió urgent necessària.");
        }

    }
}
```
# 🧠 Exercici 6

## 📋 Enunciat
> Volem controlar les despeses mensuals d'una casa.
>
>a) El programa ha de demanar tres despeses (llum, aigua i menjar) i mostrar el total mensual.
b) S'amplia el programa per a demanar també una quarta despesa opcional (altres), i mostrar-la només si és major que 0.
c) S'amplia el programa per mostrar un resum amb percentatges de cada despesa sobre el total.

---

## 📦 Codi Java

```java
import java.util.Scanner;

public class App {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // Demanar les despeses
        System.out.println("Introdueix la despesa de llum:");
        double llum = scanner.nextDouble();

        System.out.println("Introdueix la despesa d'aigua:");
        double aigua = scanner.nextDouble();

        System.out.println("Introdueix la despesa de menjar:");
        double menjar = scanner.nextDouble();

        System.out.println("Introdueix altres despeses (opcional):");
        double altres = scanner.nextDouble();

        // Calcular total
        double total = llum + aigua + menjar + altres;

        // Mostrar total
        System.out.println();
        System.out.println("--- Resum de despeses mensuals ---");
        System.out.println("Total mensual: " + total + " €");

        // Mostrar "altres" només si és major que 0
        if (altres > 0) {
            System.out.println("Altres despeses: " + altres + " €");
        }

        // Mostrar percentatges
        System.out.println();
        System.out.println("--- Percentatges de cada despesa ---");
        System.out.println("Llum: " + (llum * 100 / total) + "%");
        System.out.println("Aigua: " + (aigua * 100 / total) + "%");
        System.out.println("Menjar: " + (menjar * 100 / total) + "%");
        if (altres > 0) {
            System.out.println("Altres: " + (altres * 100 / total) + "%");
        }

        scanner.close();
    }
}

```
##### nivell avançat
# 🧠 Exercici 7

## 📋 Enunciat
> En una biblioteca universitària volen digitalitzar el sistema de control de préstecs. Cada llibre té un codi, un títol i una data de devolució prevista. El programa ha de gestionar la llista de préstecs oberts i calcular possibles recàrrecs per retràs.
>
>a) Demana a l'usuari el codi i el títol d'un llibre, i la data de devolució prevista (dia, mes, any). Mostra-ho tot per pantalla.
b) Afig la data d'avui i calcula si el llibre està endarrerit (data avui > data devolució). Mostra per pantalla tant si està endarrerit com si no.
>
>Considera que un mes té 30 dies, i un any té 365 dies.
Comprova en ordre: any, mes, dia.
c) Si hi ha retràs, calcula el nombre de dies de retard i mostra un recàrrec de 0,50 € per dia.
d) Permet introduir diversos préstecs fins que l'usuari escriga "fi", i acumula el total de recàrrecs.
e) Al final, mostra un resum: nombre de llibres prestat­s, llibres endarrerits i recàrrecs totals.

---

## 🛠️ Solució proposada
* Inicialitzar variables per comptar préstecs, endarreriments i recàrrecs.
* Utilitzar un bucle while per demanar dades fins que l’usuari escriga "fi".
* Comparar dates amb una lògica senzilla (any → mes → dia).
* Calcular dies de retard convertint la data a dies totals (usant 30 dies per mes i 365 per any).
* Mostrar resultats amb System.out.println i concatenació de cadenes.

> NOTA:
Per a comparar un String amb la cadena "fi", usa la següent instrucció:
cadena.equals("fi") o cadena.equalsIgnoreCase si volem que no conprove majuscules i minuscules.
Aquesta expressió retorna true si el valor de cadena és igual a "fi", i false en cas contrari. No és correcte usar la doble igualtat == per motius que es voran més endavant.
---

## 📦 Codi Java

```java
import java.util.Scanner;

public class BibliotecaPrestecs {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int totalPrestecs = 0;
        int llibresEndarrerits = 0;
        double totalRecarrecs = 0.0;

        // Data actual
        int avuiDia = 20;
        int avuiMes = 10;
        int avuiAny = 2025;

        while (true) {
            System.out.println("Introdueix el codi del llibre (o 'fi' per acabar):");
            String codi = sc.nextLine();
            if (codi.equalsIgnoreCase("fi")) {
                break;
            }

            System.out.println("Introdueix el títol del llibre:");
            String titol = sc.nextLine();

            System.out.println("Introdueix el dia de devolució prevista:");
            int dia = sc.nextInt();
            System.out.println("Introdueix el mes de devolució prevista:");
            int mes = sc.nextInt();
            System.out.println("Introdueix l'any de devolució prevista:");
            int any = sc.nextInt();
            sc.nextLine(); // Neteja el buffer

            System.out.println();
            System.out.println("--- Informació del préstec ---");
            System.out.println("Codi: " + codi);
            System.out.println("Títol: " + titol);
            System.out.println("Data de devolució prevista: " + dia + "/" + mes + "/" + any);

            boolean endarrerit = false;
            int diesRetard = 0;

            if (avuiAny > any || (avuiAny == any && avuiMes > mes) ||
                    (avuiAny == any && avuiMes == mes && avuiDia > dia)) {
                endarrerit = true;

                int diesPrevistos = any * 365 + mes * 30 + dia;
                int diesAvui = avuiAny * 365 + avuiMes * 30 + avuiDia;
                diesRetard = diesAvui - diesPrevistos;
                double recarrec = diesRetard * 0.50;

                llibresEndarrerits++;
                totalRecarrecs += recarrec;

                System.out.println("Està endarrerit! Dies de retard: " + diesRetard);
                System.out.println("Recàrrec: " + recarrec + " €");
            } else {
                System.out.println("No està endarrerit.");
            }

            totalPrestecs++;
            System.out.println("------------------------------\n");
        }

        System.out.println();
        System.out.println("=== Resum Final ===");
        System.out.println("Nombre de llibres prestats: " + totalPrestecs);
        System.out.println("Llibres endarrerits: " + llibresEndarrerits);
        System.out.println("Recàrrecs totals: " + totalRecarrecs + " €");
    }
}
```



## 📦 Codi Java (Alternativa en LocalDate i ChronoUnit)

```java
import java.util.Scanner;
import java.time.LocalDate;
import java.time.temporal.ChronoUnit;

public class BibliotecaPrestecs {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int totalPrestecs = 0;
        int llibresEndarrerits = 0;
        double totalRecarrecs = 0.0;

        // Data actual del sistema
        LocalDate avui = LocalDate.now();

        while (true) {
            System.out.println("Introdueix el codi del llibre (o 'fi' per acabar):");
            String codi = sc.nextLine();
            if (codi.equalsIgnoreCase("fi")) {
                break;
            }

            System.out.println("Introdueix el títol del llibre:");
            String titol = sc.nextLine();

            System.out.println("Introdueix el dia de devolució prevista:");
            int dia = sc.nextInt();
            System.out.println("Introdueix el mes de devolució prevista:");
            int mes = sc.nextInt();
            System.out.println("Introdueix l'any de devolució prevista:");
            int any = sc.nextInt();
            sc.nextLine(); // Neteja el buffer

            LocalDate devolucioPrevista = LocalDate.of(any, mes, dia);

            System.out.println();
            System.out.println("--- Informació del préstec ---");
            System.out.println("Codi: " + codi);
            System.out.println("Títol: " + titol);
            System.out.println("Data de devolució prevista: " + devolucioPrevista);
            System.out.println("Data actual: " + avui);

            if (avui.isAfter(devolucioPrevista)) {
                long diesRetard = ChronoUnit.DAYS.between(devolucioPrevista, avui);
                double recarrec = diesRetard * 0.50;

                llibresEndarrerits++;
                totalRecarrecs += recarrec;

                System.out.println("Està endarrerit! Dies de retard: " + diesRetard);
                System.out.println("Recàrrec: " + recarrec + " €");
            } else {
                System.out.println("No està endarrerit.");
            }

            totalPrestecs++;
            System.out.println("------------------------------\n");
        }

        System.out.println();
        System.out.println("=== Resum Final ===");
        System.out.println("Nombre de llibres prestats: " + totalPrestecs);
        System.out.println("Llibres endarrerits: " + llibresEndarrerits);
        System.out.println("Recàrrecs totals: " + totalRecarrecs + " €");
    }
}

```
# 🧠 Exercici 8

## 📋 Enunciat
> Un departament acadèmic vol un programa que calcule la nota final d'un alumne tenint en compte exàmens, pràctiques i treballs. Cada tipus té un pes diferent: exàmens 50 %, pràctiques 30 % i treballs 20 %. A més, si algun dels tres components està per baix de 4, l'alumne suspendrà automàticament.
>
>a) Demana les tres notes (0–10) i calcula la nota ponderada simple.
b) Afig la comprovació: si alguna nota < 4, mostra "Suspens automàtic".
c) Si no hi ha suspens automàtic, mostra "Aprovat" o "Excel·lent" si la nota final ≥ 9.
d) Permet repetir el càlcul per a diversos alumnes fins que l'usuari introduïsca "fi".
e) Al final, mostra quants alumnes han aprovat, han suspés per nota baixa i quants han obtingut Excel·lent.

---

## 🛠️ Solució proposada
* Lectura amb Scanner per demanar dades a l’usuari.
* Condicions if per detectar suspens automàtic i classificar la nota.
* Càlcul aritmètic amb pesos:
nota final=0.5⋅exàmens+0.3⋅pràctiques+0.2⋅treballs
* Bucle while per repetir fins que l’usuari escriga "fi".
* Variables acumuladores per comptar aprovats, suspesos i excel·lents.

---

## 📦 Codi Java

```java
import java.util.Scanner;

public class App {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int aprovats = 0;
        int suspesos = 0;
        int excellents = 0;

        while (true) {
            System.out.print("Nom de l'alumne (o 'fi' per acabar): ");
            String nom = scanner.nextLine();

            if (nom.equalsIgnoreCase("fi")) {
                break;
            }

            System.out.print("Nota exàmens: ");
            double examens = scanner.nextDouble();

            System.out.print("Nota pràctiques: ");
            double practiques = scanner.nextDouble();

            System.out.print("Nota treballs: ");
            double treballs = scanner.nextDouble();
           

            if (examens < 4 || practiques < 4 || treballs < 4) {
                System.out.println("Suspens automàtic");
                suspesos++;
            } else {
                double notaFinal = examens * 0.5 + practiques * 0.3 + treballs * 0.2;
                System.out.println("Nota final: " + notaFinal);

                if (notaFinal >= 9) {
                    System.out.println("Excel·lent");
                    excellents++;
                } else {
                    System.out.println("Aprovat");
                    aprovats++;
                }
            }

            System.out.println("------------------");
        }

        System.out.println("Resum:");
        System.out.println("Aprovats: " + aprovats);
        System.out.println("Suspesos: " + suspesos);
        System.out.println("Excel·lents: " + excellents);
    }
}
```

# 🧠 Exercici 9

## 📋 Enunciat
> Una empresa de serveis vol automatitzar la facturació mensual en funció de l'ús i aplicar trams de tarifes i un IVA específic. El cost per unitat varia segons consums:
>
>Fins a 100 unitats: 0,10 €
De 101 a 500: 0,08 €
Més de 500: 0,05 €
A més, s'aplica un IVA del 21 %.
>
>a) Demana el consum mensual (unitats) i calcula el cost base sense IVA.
b) Aplica l'IVA i mostra el total amb IVA inclòs.
c) Afig un descompte del 5 % si el consum supera les 1000 unitats (sobre el total amb IVA).
d) Permet facturar per a diversos clients fins que l'usuari introduïsca "fi", i acumula el total facturat.
e) Mostra un resum: nombre de factures, ingressos bruts, total d'IVA i total de descomptes aplicats.

---

## 🛠️ Solució proposada
* Identificar les variables necessàries: unitats, cost base, IVA, descompte, totals acumulats.
* Implementar la lògica de tarifes amb condicions escalonades.
* Aplicar l’IVA com a percentatge del cost base.
* Afegir el descompte si escau.
* Utilitzar un bucle while per repetir el procés fins que l’usuari escriga "fi".
* Mostrar la factura per cada client.
* Acumular els valors per al resum final.
Mostrar el resum amb les dades totals.

---

## 📦 Codi Java

```java
import java.util.Scanner;

public class FacturacioServeis {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int nombreFactures = 0;
        double totalIngressosBruts = 0;
        double totalIVA = 0;
        double totalDescomptes = 0;

        while (true) {
            System.out.print("Introdueix el nom del client (o 'fi' per acabar): ");
            String client = scanner.nextLine();
            if (client.equalsIgnoreCase("fi")) break;

            System.out.print("Introdueix el consum mensual (unitats): ");
            int unitats = Integer.parseInt(scanner.nextLine());

            double costBase = calcularCostBase(unitats);
            double iva = costBase * 0.21;
            double totalAmbIVA = costBase + iva;

            double descompte = 0;
            if (unitats > 1000) {
                descompte = totalAmbIVA * 0.05;
                totalAmbIVA -= descompte;
            }

            // Factura amb concatenació
            System.out.println("Client: " + client);
            System.out.println("Cost base: " + costBase + " €");
            System.out.println("IVA (21%): " + iva + " €");
            System.out.println("Descompte: " + descompte + " €");
            System.out.println("Total a pagar: " + totalAmbIVA + " €");
            System.out.println();

            nombreFactures++;
            totalIngressosBruts += costBase;
            totalIVA += iva;
            totalDescomptes += descompte;
        }

        // Resum final amb concatenació
        System.out.println("----- RESUM FINAL -----");
        System.out.println("Nombre de factures: " + nombreFactures);
        System.out.println("Ingressos bruts: " + totalIngressosBruts + " €");
        System.out.println("Total IVA: " + totalIVA + " €");
        System.out.println("Total descomptes aplicats: " + totalDescomptes + " €");
    }

    public static double calcularCostBase(int unitats) {
        double cost = 0;
        if (unitats <= 100) {
            cost = unitats * 0.10;
        } else if (unitats <= 500) {
            cost = 100 * 0.10 + (unitats - 100) * 0.08;
        } else {
            cost = 100 * 0.10 + 400 * 0.08 + (unitats - 500) * 0.05;
        }
        return cost;
    }
}

```
# 🧠 Exercici 10

## 📋 Enunciat
> Una botiga de mobles en línia necessita un programa per processar comandes i controlar l'inventari. Tenen un catàleg de productes amb codi (1, 2 o 3), nom, preu i estoc disponible. Quan l'usuari fa una comanda, cal restar unitats i calcular el total.
>
>a) Carrega un inventari inicial de tres productes (taules, cadires i armaris) amb estoc inicial de 100 cadascun, i mostra'n la llista.
b) Permet fer una comanda: l'usuari introdueix codi de producte i quantitat; si no hi ha estoc suficient, mostra "Estoc insuficient". Si el codi no correspon a ningun producte, mostra "Codi incorrecte".
c) Permet a l'usuari fer tantes comandes com vulga, fins que el codi introduït siga 0. En cada comanda es descompten les unitats corresponents de l'inventari.
d) Si, en fer una comanda, algun producte no té suficient unitats a l'inventari, mostrarà un missatge per pantalla.
e) Després de la comanda, mostra quins productes han quedat amb estoc 0.
f) Al final escriu un informe del valor total venut i productes esgotats.

---

## 🛠️ Solució proposada
* Inicialitzar les variables per a cada producte (codi, nom, preu, estoc).
* Mostrar l’inventari inicial amb System.out.println.
* Entrar en un bucle que demane el codi i la quantitat.
* Comprovar si el codi és vàlid i si hi ha prou estoc.
* Actualitzar l’estoc i el total venut si la comanda és vàlida.
* Mostrar missatges d’error si cal.
* Al final del programa, mostrar els productes esgotats i el total venut.

---

## 📦 Codi Java

```java
import java.util.Scanner;

public class App {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // Inventari inicial
        int estocTaula = 100;
        int estocCadira = 100;
        int estocArmari = 100;

        double preuTaula = 150.0;
        double preuCadira = 50.0;
        double preuArmari = 300.0;

        double totalVendes = 0;

        System.out.println("Inventari inicial:");
        System.out.println("1 - Taula | Preu: " + preuTaula + "€ | Estoc: " + estocTaula);
        System.out.println("2 - Cadira | Preu: " + preuCadira + "€ | Estoc: " + estocCadira);
        System.out.println("3 - Armari | Preu: " + preuArmari + "€ | Estoc: " + estocArmari);

        while (true) {
            System.out.println();
            System.out.print("Introdueix codi de producte (0 per acabar): ");
            int codi = scanner.nextInt();
            if (codi == 0) break;

            System.out.print("Quantitat: ");
            int quantitat = scanner.nextInt();

            if (codi == 1) {
                if (quantitat > estocTaula) {
                    System.out.println("Estoc insuficient.");
                } else {
                    estocTaula -= quantitat;
                    double total = preuTaula * quantitat;
                    totalVendes += total;
                    System.out.println("Comanda acceptada. Total: " + total + "€");
                }
            } else if (codi == 2) {
                if (quantitat > estocCadira) {
                    System.out.println("Estoc insuficient.");
                } else {
                    estocCadira -= quantitat;
                    double total = preuCadira * quantitat;
                    totalVendes += total;
                    System.out.println("Comanda acceptada. Total: " + total + "€");
                }
            } else if (codi == 3) {
                if (quantitat > estocArmari) {
                    System.out.println("Estoc insuficient.");
                } else {
                    estocArmari -= quantitat;
                    double total = preuArmari * quantitat;
                    totalVendes += total;
                    System.out.println("Comanda acceptada. Total: " + total + "€");
                }
            } else {
                System.out.println("Codi incorrecte.");
            }
        }

        System.out.println();
        System.out.println("Productes amb estoc 0:");
        boolean capEsgotat = true;
        if (estocTaula == 0) {
            System.out.println("- Taula");
            capEsgotat = false;
        }
        if (estocCadira == 0) {
            System.out.println("- Cadira");
            capEsgotat = false;
        }
        if (estocArmari == 0) {
            System.out.println("- Armari");
            capEsgotat = false;
        }
        if (capEsgotat) {
            System.out.println("Cap producte està esgotat.");
        }

        System.out.println();
        System.out.println("Valor total venut: " + totalVendes + "€");
        System.out.println("Productes esgotats:");
        if (estocTaula == 0) System.out.println("- Taula");
        if (estocCadira == 0) System.out.println("- Cadira");
        if (estocArmari == 0) System.out.println("- Armari");

        scanner.close();
    }
}
```

