# Solucions UF10 - Fitxers

## Exercicis - Nivell bàsic

## 🧠 Exercici A1:  Mostrar informació de fitxers

Implementa un programa que demane a l'usuari introduir per teclat una ruta del sistema d'arxius (per exemple, `"C:/Windows"` o `"Documents"`) i mostre informació sobre aquesta ruta. El procés es repetirà una vegada i una altra fins que l'usuari introduïsca una ruta buida (tecla Intro). Haurà de manejar les possibles excepcions.

### Funció requerida: `mostraInfoRuta`

Necessitaràs crear la funció `mostraInfoRuta` que, donada una ruta, faça el següent:

- Si és un arxiu, mostrarà per pantalla el nom de l'arxiu.
- Si és un directori, mostrarà per pantalla la llista de directoris i arxius que conté (els seus noms).
- Haurà de mostrar primer els directoris i després els arxius.
- En qualsevol cas, afegirà davant del nom l'etiqueta `[D]` o `[A]` per a indicar si és un directori o un arxiu, respectivament.
- Si el path no existeix, llançarà una excepció.


#### 📦 Codi Java
:::: tabs
=== Java

::: tabs
== ExploradorRutes

```java
import java.io.File;
import java.io.FileNotFoundException;
import java.util.Scanner;

public class ExploradorRutes {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String rutaInput;

        System.out.println("=== Explorador de Rutes ===");
        boolean tornarADemanar = true;

        // El procés es repetirà fins que l'usuari introduïsca una ruta buida
        while (tornarADemanar) {
            System.out.print("\nIntrodueix una ruta (o prem Intro per eixir): ");
            rutaInput = scanner.nextLine();

            if (rutaInput.trim().isEmpty()) {
                System.out.println("Programa finalitzat.");
                tornarADemanar = false;
            } else {

                // Cal manejar les possibles excepcions
                try {
                    mostraInfoRuta(rutaInput);
                } catch (FileNotFoundException e) {
                    System.out.println("Error: " + e.getMessage());
                }
            }
        }
        scanner.close();
    }

    /**
     * Mostra informació sobre una ruta donada.
     * * @param ruta La ruta a analitzar en format de text.
     * @throws FileNotFoundException Si la ruta no existeix en el sistema.
     */
    public static void mostraInfoRuta(String ruta) throws FileNotFoundException {
        File f = new File(ruta); // La classe File representa una ruta dins del sistema d'arxius.

        // Si el path no existeix llançarà una excepció
        if (!f.exists()) {
            throw new FileNotFoundException("La ruta especificada no existeix ");
        }

        System.out.println("--> Analitzant: " + f.getAbsolutePath());

        // Si és un arxiu, mostrarà per pantalla el nom de l'arxiu
        if (f.isFile()) {
            System.out.println("[A] " + f.getName());
        } 
        // Si és un directori, mostrarà la llista de directoris i arxius
        else if (f.isDirectory()) {
            File[] llista = f.listFiles(); // Retorna un vector amb tots els elements

            if (llista == null) {
                System.out.println("No es pot llegir el contingut (manca de permisos o error I/O).");
                return;
            }

            // Haurà de mostrar primer els directoris
            for (File element : llista) {
                if (element.isDirectory()) { // Comprova si és una carpeta
                    System.out.println("[D] " + element.getName());
                }
            }

            // I després els arxius
            for (File element : llista) {
                if (element.isFile()) { // Comprova si és un fitxer
                    System.out.println("[A] " + element.getName());
                }
            }
        }
    }
}
```
:::
::::

## 🧠 Exercici A2 - Mostrar informació de fitxers (v2) 

Partint d'una còpia del programa anterior, modifica la funció `mostraInfoRuta`:

- En el cas d'un directori, mostrarà la llista de directoris i arxius en ordre alfabètic. És a dir, primer els directoris en ordre alfabètic i després els arxius en ordre alfabètic.
- Afig un segon argument booleà `info` que, quan siga `true`, mostrarà al costat de la informació de cada directori o arxiu la seua grandària en bytes i la data de l'última modificació.
- Quan `info` siga `false`, mostrarà la informació com en l'exercici anterior.



#### 📦 Codi Java
:::: tabs
=== Java

::: tabs
== ExploradorRutesAvancat

```java
import java.io.File;
import java.io.FileNotFoundException;
import java.util.Arrays;
import java.util.Date;
import java.util.Scanner;

public class ExploradorRutesAvancat {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String rutaInput;
        boolean tornarADemanar = true;

        System.out.println("=== Explorador de Rutes Avançat ===");

        while (tornarADemanar) {
            System.out.println("Introdueix una ruta (o prem Intro per eixir): ");
            rutaInput = scanner.nextLine();

            // Si la ruta està buida, canviem la condició d'eixida
            if (rutaInput.trim().isEmpty()) {
                System.out.println("Programa finalitzat.");
                tornarADemanar = false;
            } else {
                // Tota la resta només s'executa si l'usuari HA introduït una ruta vàlida
                System.out.print("Vols veure la informació detallada (S/N)? ");
                String resposta = scanner.nextLine();
                boolean mostrarInfo = resposta.trim().equalsIgnoreCase("S");

                try {
                    mostraInfoRuta(rutaInput, mostrarInfo);
                } catch (FileNotFoundException e) {
                    System.out.println("Error: " + e.getMessage());
                } 
            }
        }
        scanner.close();
    }

    /**
     * Mostra informació sobre una ruta donada, separant directoris i arxius en ordre alfabètic.
     * @param ruta La ruta a analitzar en format de text.
     * @param info Si és true, mostra grandària i data de modificació.
     * @throws FileNotFoundException Si la ruta no existeix.
     */
    public static void mostraInfoRuta(String ruta, boolean info) throws FileNotFoundException {
        File f = new File(ruta);

        if (!f.exists()) {
            throw new FileNotFoundException("La ruta especificada no existeix ");
        }

        System.out.println("\n--> Analitzant: " + f.getAbsolutePath());

        if (f.isFile()) {
            imprimeixDetalls(f, "[A]", info);
        } 
        else if (f.isDirectory()) {
            File[] llista = f.listFiles();

            if (llista == null) {
                System.out.println("No es pot llegir el contingut (manca de permisos).");
                return;
            }

            // Ordenem l'array alfabèticament ignorant majúscules i minúscules
            Arrays.sort(llista, (arxiu1, arxiu2) -> arxiu1.getName().compareToIgnoreCase(arxiu2.getName()));

            // Primer mostrem els directoris
            for (int i = 0; i < llista.length; i++) {
                File element = llista[i];
                if (element.isDirectory()) {
                    imprimeixDetalls(element, "[D]", info);
                }
            }

            // Després mostrem els arxius
            for (int i = 0; i < llista.length; i++) {
                File element = llista[i];
                if (element.isFile()) {
                    imprimeixDetalls(element, "[A]", info);
                }
            }
        }
    }

    /**
     * Mètode auxiliar per formatar i imprimir per pantalla les dades d'un element.
     */
    private static void imprimeixDetalls(File element, String etiqueta, boolean info) {
        if (info) {
            long midaBytes = element.length();
            Date dataModificacio = new Date(element.lastModified()); 
            
            System.out.println(etiqueta + " " + element.getName() + " | " + midaBytes + " bytes | Modificat: " + dataModificacio);
        } else {
            System.out.println(etiqueta + " " + element.getName());
        }
    }
}
```
:::
::::

## 🧠 Exercici A3 - Canviant de nom directoris i fitxers 

Implementa un programa que faça el següent:

- Canviar el nom de la carpeta `Documents` a `DOCS`, el de la carpeta `Fotografies` a `FOTOS` i el de la carpeta `Llibres` a `LECTURES`.
- Canviar el nom de tots els arxius de les carpetes `FOTOS` i `LECTURES` llevant-los l'extensió.
  - Per exemple, `astronauta.jpg` passarà a dir-se `astronauta`.


#### 📦 Codi Java
:::: tabs
=== Java

::: tabs
== ModificadorEstructura

```java
import java.io.File;

public class ModificadorEstructura {

    public static void main(String[] args) {
        
        System.out.println("=== Iniciant procés de modificació ===");

        // 1. CANVI DE NOMS DE LES CARPETES
        // Definim la ruta origen relativa a la carpeta de treball
        File docOriginal = new File("Documentos");
        File docNou = new File("DOCS");
        
        // Canviem el nom de la carpeta principal
        if (docOriginal.renameTo(docNou)) {
            System.out.println("S'ha renomenat 'Documentos' a 'DOCS'.");
        } else {
            System.out.println("Avís: No s'ha pogut renomenar 'Documentos' (potser ja es diu 'DOCS' o no existeix).");
        }
        
        // Ara les rutes d'origen de les subcarpetes han de començar per 'DOCS/'
        File fotosOriginal = new File("DOCS/Fotografias");
        File fotosNou = new File("DOCS/FOTOS");
        fotosOriginal.renameTo(fotosNou); //
        
        File llibresOriginal = new File("DOCS/Libros");
        File llibresNou = new File("DOCS/LECTURES");
        llibresOriginal.renameTo(llibresNou); //

        // 2. ELIMINAR LES EXTENSIONS DELS ARXIUS
        // Cridem a una funció auxiliar per fer neteja dels arxius que hi ha dins
        llevarExtensioArxius(fotosNou);
        llevarExtensioArxius(llibresNou);
        
        System.out.println("=== Procés finalitzat ===");
    }

    /**
     * Recorre un directori i lleva l'extensió de tots els arxius que conté.
     * @param directori Objecte File que representa la carpeta a processar.
     */
    public static void llevarExtensioArxius(File directori) {
        // Comprovem primer si la ruta indicada existeix i efectivament és una carpeta
        if (directori.exists() && directori.isDirectory()) {
            
            // listFiles() retorna un vector amb tots els elements de la carpeta
            File[] llista = directori.listFiles(); 
            
            if (llista != null) {
                for (int i = 0; i < llista.length; i++) {
                    File element = llista[i];
                    
                    // Ens assegurem que l'element és un fitxer i no una altra subcarpeta
                    if (element.isFile()) {
                        String nomSencer = element.getName(); // Obtenim el nom de l'arxiu
                        
                        // Busquem l'últim punt per separar el nom de l'extensió
                        int posPunt = nomSencer.lastIndexOf('.');
                        
                        // Si l'arxiu té una extensió (el punt no està a la posició 0 ni és inexistent)
                        if (posPunt > 0) {
                            // Extraiem només la part del nom
                            String nomSenseExtensio = nomSencer.substring(0, posPunt);
                            
                            // Construïm la nova ruta: la mateixa carpeta pare + el nou nom
                            File desti = new File(directori.getPath() + "/" + nomSenseExtensio);
                            
                            // Per moure l'element sense treure'l de la seua carpeta, li assignem el nou nom
                            if (element.renameTo(desti)) {
                                System.out.println("Renomenat: " + nomSencer + " -> " + nomSenseExtensio);
                            }
                        }
                    }
                }
            }
        }
    }
}
```
:::
::::


## 🧠 Exercici A4


#### 📦 Codi Java
:::: tabs
=== Java

::: tabs
== Codi

```java
/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package UF11_ExerciciA4;
import java.io.File;
/**
 * UF11 Exercici A4: Programa que crea les carpetes "Les meues Coses" i "Afabet"
 */
public class UF11_ExerciciA4 {
    
    public static void main(String[] args) {

        // Instanciem la clase File amb les rutes relatives de les carpetes a crear
        File misCosas = new File("Documentos/Mis Cosas");
        File alfabeto = new File("Documentos/Alfabeto");

        // Creem les carpetes        
        boolean resultat1 = misCosas.mkdir();
        System.out.println("S'ha creat la carpeta 'Documentos/Mis Cosas'? " + resultat1);
        boolean resultat2 = alfabeto.mkdir();
        System.out.println("¿S'ha creat la carpeta 'Documentos/Alfabeto'? " + resultat2);

        // Instanciem la clase File amb les rutes d'origen i desti relatives
        File fotOrigen = new File("Documentos/Fotografias");
        File fotDesti = new File("Documentos/Mis Cosas/Fotografias");

        File libOrigen = new File("Documentos/Libros");
        File libDesti = new File("Documentos/Mis Cosas/Libros");

        // Movemo les carpetes 'Fotografias' i 'Libros' dins de 'MisCosas'
        resultat1 = fotOrigen.renameTo(fotDesti);
        System.out.println("¿S'ha mogut la carpeta 'Documentos/Fotografias' a 'Documentos/Mis Cosas/Fotografias'? " + resultat1);
        resultat2 = libOrigen.renameTo(libDesti);
        System.out.println("¿Se ha mogut la carpeta 'Documentos/Libros' a 'Documentos/Mis Cosas/Libros'? " + resultat2);

        // Creem dins de la carpeta 'Alfabeto', una carpeta per cada lletra de l'alfabet (en majúscula)
        for (int i = 'A'; i <= 90; i++) {
            File novaCarpeta = new File(alfabeto.getParent() + "/" + alfabeto.getName() + "/" + (char) i);
            novaCarpeta.mkdir();
        }
    }
}

```
:::
::::

## 🧠 Exercici A5




#### 📦 Codi Java
:::: tabs
=== Java

::: tabs
== Codi

```java
/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package UF11_ExerciciA5;
import java.io.*;
/**
 * UF11 Exercici A5: Programa amb una funció boolean esborraTot(File f) que esborre f: Si no existeix
 * llança una excepció. Si és un arxiu l'esborra. Si és un directori, esborra primer els seus arxius i
 * després el propi directori (per a poder esborrar un directori ha d'estar buit). Retorna
 * ‘true’ si va poder esborrar el ‘File f’ (‘false’ si no ha sigut possible).
 */
public class UF11_ExerciciA5 {
    
    public static void main(String[] args) {
    
        // Instanciem la clase File amb les rutes relatives de les carpetes a esborrar
        File fotografias = new File("Documentos/Fotografias");
        File libros = new File("Documentos/Libros");
        File documentos = new File("Documentos");

        boolean res = false;

        try {
            // Esborrem la carpeta 'Fotografias' i tot el seu contingut
            res = esborraTot(fotografias);
            if (res) {
                System.out.println("La carpeta 'Fotografias' s'ha esborrat.");
            }

            // Esborrem la carpeta 'Libros' i tot el seu contingut
            res = esborraTot(libros);
            if (res) {
                System.out.println("La carpeta 'Libros' s'ha esborrat.");
            }

            // Esborrem la carpeta 'Documentos' i tot el seu contingut
            res = esborraTot(documentos);
            if (res) {
                System.out.println("La carpeta 'Documentos' s'ha esborrat.");
            }

        } catch (FileNotFoundException e) {
            System.out.println(e);
        }
    }

    // Funció que esborra els arxius i les carpetes d'una ruta
    public static boolean esborraTot(File ruta) throws FileNotFoundException {
        
        boolean esborrat=false;
        
        // Si no existeix la ruta mostra una excepció
        if (!ruta.exists()) {
            throw new FileNotFoundException("La ruta introduïda no existeix.");
        } else {
            // Si és un arxiu l'esborra
            if (ruta.isFile()) {
                esborrat=ruta.delete();
            } else {
                // Si és una carpeta primer esborra els seus arxius i després esborra la carpeta
                if (ruta.isDirectory()) {
                    for (File f1 : ruta.listFiles()) {
                        f1.delete();
                    }
                    esborrat=ruta.delete();
                }
            }
        }
        return esborrat;
    }
}

```
:::
::: tabs
== Challenge

```java
/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package UF11_ExerciciA5_2;
import java.io.*;
/**
 * UF11 Exercici A5: Programa amb una funció boolean esborraTot(File f) que esborre f: Si no existeix
 * llança una excepció. Si és un arxiu l'esborra. Si és un directori, esborra primer els seus arxius i
 * després el propi directori. Si conté subdirectoris repetirà aquesta funció en cadascun d'ells. Retorna
 * ‘true’ si va poder esborrar el ‘File f’ (‘false’ si no ha sigut possible).
 */
public class UF11_ExerciciA5_2 {
    
    public static void main(String[] args) {
    
        // Instanciem la clase File amb les rutes relatives de les carpetes a esborrar
        File documentos = new File("Documentos");

        boolean res = false;

        try {
            // Esborrem la carpeta 'Documentos' i tot el seu contingut
            res = esborraTot(documentos);
            if (res) {
                System.out.println("La carpeta 'Documentos' s'ha esborrat.");
            }

        } catch (FileNotFoundException e) {
            System.out.println(e);
        }
    }

    // Funció que esborra els arxius i les carpetes d'una ruta
    public static boolean esborraTot(File ruta) throws FileNotFoundException {
        
        boolean esborrat=false;
        
        // Si no existeix la ruta mostra una excepció
        if (!ruta.exists()) {
            throw new FileNotFoundException("La ruta introduïda no existeix.");
        } else {
            // Si és un arxiu l'esborra
            if (ruta.isFile()) {
                esborrat=ruta.delete();
            } else {
                // Si és una carpeta primer esborra els seus arxius i després esborra la carpeta
                if (ruta.isDirectory()) {
                    for (File f : ruta.listFiles()) {
                        // Si és un arxiu s'esborra
                        if (f.isFile()) {
                            f.delete();
                        } else {
                            // Si és una carpeta primer esborrem el contingut (recursivament) i després la carpeta.
                            if (f.isDirectory()) {
                                esborraTot(f);
                            }
                        }
                    }
                    esborrat=ruta.delete();
                }
            }
        }
        return esborrat;
    }
}

```
:::
::::

## 🧠 Cas Práctica -> MiniTerminal & Mini FileManager




#### 📦 Codi Java
:::: tabs
=== Java

::: tabs
== MiniFileManager

```java
/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package uf11_cas_practic;

import java.io.File;
import java.net.URI;
import java.util.Iterator;

/**
 *
 * @author s.rueorquin
 */
public class MiniFileManager {
    
    
    private static File dirActual = new File("");
    
    //També es pot fer servir
    //private static File dirActual = new File(System.getProperty("user.dir"));
    
    
    public static String getPWD(){
        return dirActual.getAbsolutePath();
    }
    
    public static boolean changeDir(String dir){
        File dirNou = new File(dir);
        boolean canviat = false;
        
        if(dirNou.isDirectory() && dirNou.exists()){
            dirActual = dirNou;
            canviat = true;
        }else
            System.out.println("No s'ha trobat la ruta indicada");
                    
        return canviat;
    }
    
    public static void makeDir(String dir){
        
        File dirNou = new File(dir);
        
        if (dirNou.mkdir()) {
            System.out.println("Directori creat: " + dirNou.getAbsolutePath());
        } else {
            System.out.println("Error al crear el directori: " + dirNou);
        }
    
    }
    
    public static void removeDir(File dir){
        
        File[] contingut = dir.listFiles();
        boolean eliminada = true;

        if(taSubDir(contingut))
            eliminada = false;
        else{
            for(File f : contingut){
                if(f.delete())
                   System.out.println(f.getName() + " esborrat");
                else{
                   System.out.println("Error al esborrar l'arxiu: " + f.getAbsolutePath());
                   eliminada = false;
                }
            }
        }
        
        if(eliminada && dir.delete()){
            System.out.println("La carpeta " + dir.getAbsolutePath() + " ha sigut eliminada");
        }else
            System.out.println("La carpeta " + dir.getAbsolutePath() + " no s'ha esborrat perque no s'ha pogut eliminar el contigut");

    }
    
    public static boolean taSubDir(File[] subdirs){
        boolean teSubdir = false;
        
        int i = 0;
        
        while(!teSubdir && i < subdirs.length){
            if(subdirs[i].isDirectory())
                teSubdir = true;
            i++;
        }
        
        return teSubdir;
    }
    
    public static boolean moveDir(File origen, File desti){
        boolean canviat = false;
        
        if(origen.exists()){
            origen.renameTo(desti);
            canviat = true;
            System.out.println("Canviat " + origen + " a " + desti);
        }else
            System.out.println("No s'ha pogut moure o canviar el nom de l'arxiu" + origen + " a " + desti);

        return canviat;
    }
    
    public static void listDir(boolean info){
        File[] arxius = dirActual.listFiles();
        
        for(File f : arxius){
            System.out.print(f.getName());
            
            if(info){
                System.out.println(" " + f.length() + " " + f.lastModified());
            }else
                System.out.println("");
        
        }
    }
    
    public static void help(){
        System.out.println("pwd - Mostra la ruta del directori actual");
        System.out.printf("\tExemple: > pdw\n\n");
        
        System.out.println("cd - Canvia el directori actual a la ruta especificada");
        System.out.printf("\tExemple: > cd /Documents/Fotos\n\n");
        
        System.out.println("ll - Mostra els noms del contingut del directori actual");
        System.out.printf("\tExemple: > ll\n\n");
        
        System.out.println("ls - Mostra els noms, el tamany i l'ultima modificació del contingut del directori actual");
        System.out.printf("\tExemple: > ls\n\n");
        
        System.out.println("mkdir - Crea un nou directori a la ruta especificada");
        System.out.printf("\tExemple: > mkdir ./Programacion\n\n");
        
        System.out.println("rm - Elimina el directori de la ruta especificada");
        System.out.printf("\tExemple: > rm Fotos\n\n");
        
        System.out.println("mv - Mou el primer element a la ruta indicada, si no hi ha ruta canvia el nom");
        System.out.printf("\tExemple: > mv ./Fotos users/jo/Fotos \n");
        System.out.printf("\tExemple: > mv ./Fotos/foto1.jpg users/jo/Fotos.foto2.jpg (canvia el nom)\n\n");
        
        System.out.println("exit - Finalitza el terminal\n");
    
    }
    
}

```
:::
::: tabs
== MiniTerminal

```java
/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Main.java to edit this template
 */
package uf11_cas_practic;

import java.io.File;
import java.io.IOException;
import java.util.Arrays;
import java.util.Scanner;
import java.util.logging.Level;
import java.util.logging.Logger;

/**
 *
 * @author s.rueorquin
 */
public class MiniTerminal {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {

        File file1, file2;
        boolean exit = false;
        
        Scanner scanner = new Scanner(System.in);
        
        String directoriActual = MiniFileManager.getPWD();
        
        do{
            
            System.out.print("user > ");
            
            //Mostra l'usuari del sistema
            //System.out.print(System.getProperty("user.name") + " > ");
            
            String[] command = scanner.nextLine().trim().split(" ");

            switch(command[0].toLowerCase()){

                case "pwd":
                    System.out.println(MiniFileManager.getPWD());
                    break;
                case "cd":
                    if(command.length > 1 && command[1] != null && !command[1].isBlank())
                        MiniFileManager.changeDir(command[1]);
                    break;
                case "ls":
                        MiniFileManager.listDir(false);
                    break;
                case "ll":
                        MiniFileManager.listDir(true);
                    break;
                case "mkdir":
                    if(command.length > 1 && command[1] != null && !command[1].isBlank())
                        MiniFileManager.makeDir(command[1].trim());
                    break;
                case "mv":
                    if(command.length > 2 && command[1] != null && !command[1].isBlank()){
                        file1 = new File(command[1].trim());
                        file2 = new File(command[2].trim());
                        MiniFileManager.moveDir(file1, file2);
                    }
                    break;
                case "rm":
                    if(command.length > 1 && command[1] != null && !command[1].isBlank()){
                        file1 = new File(command[1].trim());
                        MiniFileManager.removeDir(file1);
                    }
                    break;
                case "help":
                        MiniFileManager.help();
                    break;
                case "exit":
                        System.out.println("Finalitza el terminal");
                        exit = true;
                    break;
                default:
                    System.out.println("No es reconeix el command " + command + " Escriu 'help' per veure les opcions");
            }
        }while(!exit);

    }
    
}

```
:::
::::

## 🧠 Exercici B1




#### 📦 Codi Java
:::: tabs
=== Java

::: tabs
== Codi

```java
/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package UF11_ExerciciB1;
import java.io.*;
import java.util.*;
/**
 * UF11 Exercici B1: Programa que mostra per pantalla els valors màxims i mínims de l'arxiu ‘numeros.txt’
 */
public class UF11_ExerciciB1 {
    
        public static void main(String[] args) {
            
        // Declarem i inicialitzem les variables
        int maxim = Integer.MIN_VALUE;
        int minim = Integer.MAX_VALUE;
        int numero = 0;

        try {
            // Intentem obrir l'arxiu
            File f = new File("Documentos/numeros.txt");
            Scanner lector = new Scanner(f);

            // Mentres queden elements anirem llgint els enters 
            while (lector.hasNext()) {
                numero = lector.nextInt();

                // Comprobem si el número llegit es major que màxim
                if (numero > maxim) {
                    // Asignem el número al màxim
                    maxim = numero;
                }

                // Comprobem si el número llegit es menor que mínim
                if (numero < minim) {
                    // Asignem el número al mínim
                    minim = numero;
                }
            }

            // Tanquem el Scanner
            lector.close();

            // Mostrem per pantalla el valor màxim i mínim
            System.out.println("El valor màxim és " + maxim);
            System.out.println("El valor mínim és " + minim);

        } catch (FileNotFoundException e) {
            System.out.println("Error: L'arxiu no existeix");
        } catch (Exception e) {
            System.out.println("Error: " + e);
        }
    }
}

```
:::
::::

## 🧠 Exercici B2




#### 📦 Codi Java
:::: tabs
=== Java

::: tabs
== Codi

```java
/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package UF11_ExerciciB2;
import java.io.*;
import java.util.*;
/**
 * UF11 Exercici B2: Programa que mostra per pantalla la nota mitjana de cada alumne al costat del seu nom i cognom,
 * ordenat per nota mitjana de major a menor.
 */
public class UF11_ExerciciB2 {
    
        public static void main(String[] args) {
            
        try {
            // Intentem obrir l'arxiu
            File f = new File("Documentos/alumnos_notas.txt");
            Scanner lector = new Scanner(f);

            // ArrayList d'alumnes
            ArrayList<String> alumnes = new ArrayList<String>();

            // Comptador de número de línias
            int nLinia = 1;

            // Recorrem l'arxiu. Per a cada línia (alumne)
            while (lector.hasNextLine()) {
                // Trossegem la línia en paraules i agafem l'info de l'alumne
                String[] trossosLinia = (lector.nextLine()).split(" ");

                // Si la línea no tiene el formato correcto la saltamos
                if (trossosLinia.length < 2) {
                    System.err.println("Linia " + nLinia + " mal formatejada. L'ignorem.");
                    continue;
                }

                // Agafem l'info dels alumnes
                String nom = trossosLinia[0];
                String cognom = trossosLinia[1];

                // Calculem la seua nota mitjana
                int suma = 0;
                for (int j = 2; j < trossosLinia.length; j++) {
                    suma += Integer.valueOf(trossosLinia[j]);
                }
                double mitjana = (double) (suma) / (double) (trossosLinia.length - 2);

                // Creem una cadena amb nota mitjana, nom i cognom i l'afegim a l'ArrayList
                alumnes.add(String.format("%.2f %s", mitjana, nom + " " + cognom));

                // Actualitzem comptador de línias
                nLinia++;
            }

            // Ordenem la llista en ordre descendent
            Collections.sort(alumnes, Collections.reverseOrder());
            
            System.out.println("LLISTAT DE NOTES MITJANES DELS ALUMNES");
            System.out.println("--------------------------------------");
            
            // Mostra primer alumnes amb un 10 de mitjana (si n'hi ha)
            for (String a : alumnes) {
                if (a.split(" ")[0].equals("10.00"))
                    System.out.println(a);
            }
            
            // Mostrem la resta d'alumnes
            for (String a : alumnes) {
                if (!a.split(" ")[0].equals("10.00"))
                    System.out.println(a);
            }

        } catch (FileNotFoundException e) {
            System.out.println("Error: L'arxiu no existeix");
        } catch (NumberFormatException e) {
            System.out.println("Error: " + e);
        }
    }
    
}

```
:::
::::

## 🧠 Exercici B3




#### 📦 Codi Java
:::: tabs
=== Java

::: tabs
== Codi

```java
/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package UF11_ExerciciB3;
import java.io.*;
import java.util.*;
/**
 * UF11 Exercici B3: Programa que demana a l'usuari un nom d'arxiu A per a lectura i un altre nom d'arxiu 
 * per a escriptura. Llegirà el contingut de l'arxiu A (per exemple ‘usa_persones.txt’) i ho escriurà
 * ordenat alfabèticament en B (per exemple ‘usa_persones_sorted.txt’).
 */
public class UF11_ExerciciB3 {
    
    public static void main(String[] args) {
        try {
            
            String strOrigen;
            String strDesti;
            
            // Demanem noms de fitxers per llegir i escriure
            Scanner in = new Scanner(System.in);
            System.out.print("Arxiu a llegir: ");
            strOrigen = in.nextLine();
            System.out.print("Arxiu a escriure: ");
            strDesti = in.nextLine();
            
            // Creem els File
            File fileOrigen = new File(strOrigen);
            File fileDesti = new File(strDesti);
            
            // Comprovem si l'arxiu d'origen existeix
            if (!fileOrigen.exists()) {
                throw new FileNotFoundException();
            }
            
            // Objectes per a lectura i escriptura
            Scanner reader = new Scanner(fileOrigen);
            FileWriter writer = new FileWriter(fileDesti);
            
            // Llegim l'arxiu d'origen i ho emmagatzemem tot en un ArrayList
            ArrayList<String> nomPersones = new ArrayList();
            while (reader.hasNext()) {
                nomPersones.add(reader.nextLine());
            }
            
            // Ordenem l'ArrayList
            Collections.sort(nomPersones);
            
            // Recorrem l'ArrayList i anem escrivint l'arxiu de destinació
            for (String nom : nomPersones) {
                writer.write(nom + "\n");
            }
            
            // Tanquem el Scanner i el FileWriter
            reader.close();
            writer.close();

            System.out.println("L'arxiu " + fileDesti.getName() + " s'ha creat correctament.");

        } catch (FileNotFoundException e) {
            System.out.println("Error: L'arxiu no existeix.");
        } catch (Exception e) {
            System.out.println("Error: " + e);
        }
    }
    
}

```
:::
::::


## 🧠 Exercici B4




#### 📦 Codi Java
:::: tabs
=== Java

::: tabs
== Codi

```java
/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package UF11_ExerciciB4;
import java.io.*;
import java.util.*;
/**
 * UF11 Exercici B4: Programa que genera aleatòriament noms de persona (combinant noms i cognoms
 * de ‘usa_noms.txt’ i ‘usa_cognoms.txt’). Se li demanarà a l'usuari quants noms de persona desitja
 * generar i a quin arxiu afegir-los (per exemple ‘usa_persones.txt’)
 */
public class UF11_ExerciciB4 {
    
    public static void main(String[] args) {

        int numPersones;
        String ruta;

        Scanner entrada = new Scanner(System.in);

        try {

            System.out.print("Número de nom de persones a generar: ");
            numPersones = entrada.nextInt();
            entrada.nextLine();

            System.out.print("Ruta on vols guardar l'arxiu generat: ");
            ruta = entrada.nextLine();

            // Arxius de lectura
            File fileNoms = new File("Documentos/usa_nombres.txt");
            File fileCognoms = new File("Documentos/usa_apellidos.txt");

            // ArrayList con los datos de los ficheros de lectura         
            ArrayList llistaNoms = llegirDadesArxiu(fileNoms);
            ArrayList llistaCognoms = llegirDadesArxiu(fileCognoms);

            // FileWriter per a escriptura
            FileWriter writer = new FileWriter(new File(ruta));

            // Generem el nom i cognom aleatòriament i l'escrivim al fitxer
            for (int i = 0; i < numPersones; i++) {
                int indexNom = (int) (Math.random() * llistaNoms.size());
                int indexCognom = (int) (Math.random() * llistaCognoms.size());
                writer.write(llistaNoms.get(indexNom) + " " + llistaCognoms.get(indexCognom) + "\n");
            }

            // Tanquem FileWriter i donem missatge final
            writer.close();
            System.out.println("Arxiu generat correctament: " + ruta);

        } catch (FileNotFoundException e) {
            System.out.println("Error: L'arxiu no existeix.");
        } catch (IOException e) {
            System.out.println("Error: " + e);
        } catch (Exception e) {
            System.out.println("Error: " + e);
        }
    }

    // Torna un ArrayList amb les dades llegides del fitxer
    public static ArrayList llegirDadesArxiu(File f) throws FileNotFoundException {
        Scanner lector = new Scanner(f);
        ArrayList llista = new ArrayList();
        while (lector.hasNext()) {
            llista.add(lector.nextLine());
        }
        lector.close();
        return llista;
    }
    
}

```
:::
::::

## 🧠 Exercici B5




#### 📦 Codi Java
:::: tabs
=== Java

::: tabs
== Codiis

```java
/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package UF11_ExerciciB5;
import java.io.*;
import java.util.*;
/**
 * UF11 Exercici B5: Programa que crea la carpeta ‘Diccionari’ amb tants arxius com lletres de l'abecedari
 * (A.txt, B.txt... Z.txt). Introduirà en cada arxiu les paraules de ‘diccionari.txt’ que comencen per
 * aquesta lletra
 */
public class UF11_ExerciciB5 {
    
    public static void main(String[] args) {

        // Instanciem la classe File amb la ruta relativa
        File dirDiccionari = new File("Documentos/Diccionari");

        // Creem la carpeta 'Diccionari'        
        boolean resultat = dirDiccionari.mkdir();

        if (resultat) {
            try {
                // ArrayList on emmagatzemarem totes les paraules del fitxer diccionari.txt
                ArrayList<String> alDiccionari = new ArrayList();

                // Lectura de diccionario.txt
                File fileDiccionari = new File("Documentos/diccionario.txt");
                Scanner reader = new Scanner(fileDiccionari);

                // Recorrem l'arxiu i anem afegint les paraules a l'ArrayList
                while (reader.hasNext()) {
                    alDiccionari.add(reader.nextLine());
                }

                // Tanquem l'arxiu
                reader.close();

                // Creem dins de la carpeta 'Diccionari' tants fitxers com lletres de l'abecedari (A.txt, B.txt, C.txt,...)
                for (int i = 65; i <= 90; i++) {
                    // Escriptura
                    FileWriter writer = new FileWriter(new File(dirDiccionari.getParent() + "/" + dirDiccionari.getName() + "/" + (char) i + ".txt"));

                    // Recorrem les paraules de l'ArrayList
                    for (String palabra : alDiccionari) {
                        // Escrivim a cada arxiu les paraules que comencen pel nom del fitxer
                        if (palabra.toUpperCase().startsWith(Character.toString((char) i))) {
                            writer.write(palabra + "\n");
                        }
                    }

                    // Tanquem arxiu
                    writer.close();
                }
            } catch (FileNotFoundException e) {
                System.out.println("Error: L'arxiu no existeix");
            } catch (IOException e) {
                System.out.println("Error: " + e);
            } catch (Exception e) {
                System.out.println("Error: " + e);
            }
        } else {
            System.out.println("La carpeta " + dirDiccionari.getName() + " no s'ha pogut crear.");
        }
    }
    
}

```
:::
::::

## 🧠 Exercici B6




#### 📦 Codi Java
:::: tabs
=== Java

::: tabs
== Codi

```java
/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package UF11_ExerciciB6;
import java.io.*;
import java.util.*;

/**
 * UF11 Exercici B6: Programa que demana a l'usuari un número de qualsevol longitud, com per exemple
 * “1234”, i li diu a l'usuari si aquest número apareix en el primer milió de decimals del núm. pi (estan
 * en l'arxiu ‘pi-million.txt’). No està permés utilitzar cap llibreria ni classe ni mètode que realitze la
 * cerca. Has d'implementar l'algorisme de cerca tu mateix.
 */
public class UF11_ExerciciB6 {
    
    public static void main(String[] args) {

        Scanner entrada = new Scanner(System.in);
        
        try {
            // Demanem el numero enter a cercar
            System.out.print("Introdueix el número enter a cercar: ");
            String numeroCercar = entrada.nextLine();  
            
            // Intentem obrir el fitxer 'pi-million.txt'
            File fileNumeroPI = new File("Documentos/pi-million.txt");
            Scanner lector = new Scanner(fileNumeroPI);
            
            // Agafem tots els decimals del número PI del fitxer
            String decimalsPI = (lector.nextLine()).substring(2);
            lector.close();
            
            boolean trobat = false;
            int i=0;
            while (!trobat && i < decimalsPI.length() - numeroCercar.length()){
                // Comparem si 'numeroCercar' està al substring de 'decimalsPI'
                if(numeroCercar.equals(decimalsPI.substring(i, i+numeroCercar.length()))) {
                    trobat = true;
                }
                i++;
            }
            
            if(trobat) {
                System.out.println("El número " + numeroCercar + " s'ha trobat en la posició " + i );
            } else {
                System.out.println("El número " + numeroCercar + " no s'ha trobat" );
            }
            
        } catch (FileNotFoundException e){
            System.out.println("Error: L'arxiu no existeix");
        }catch (Exception e) {
            System.out.println("Error: " + e);
        } 
    }    
    
}

```
:::
::::

## 🧠 Exercici B7




#### 📦 Codi Java
:::: tabs
=== Java

::: tabs
== Codi

```java
/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package UF11_ExerciciB7;
import java.io.*;
import java.util.*;
/**
 * UF11 Exercici B7: Programa que llig un document de text i mostra per pantalla algunes dades
 * estadístiques: núm. de línies, núm. de paraules, núm. de caràcters i quines són les 10 paraules més
 * comunes (i quantes vegades apareixen). Prova el programa amb els arxius de la carpeta ‘Llibres’.
 */
public class UF11_ExerciciB7 {
    
    public static void main(String[] args) {

        System.out.println("ESTADÍSTIQUES DE LLIBRES");
        System.out.println("------------------------");
        System.out.println("");

        try {
            // Obtenim la llista d'arxius de la carpeta Libros
            File rutaLlibres = new File("Documentos/Libros");
            File[] llistaLlibres = rutaLlibres.listFiles();

            // Per a cada arxiu
            for (File llibre : llistaLlibres) {
                
                // Lector d'arxius
                Scanner lector = new Scanner(llibre);
                
                // Inicialitzem comptadors i Hashtable
                int numLin = 0, numPar = 0, numCar = 0;
                Hashtable<String, Integer> hashParaules = new Hashtable<String, Integer>();
                
                // Processem línies mentre quedi alguna cosa per llegir
                while (lector.hasNext()) {
                    // Línia
                    String linia = lector.nextLine();
                    numLin++;

                    // Paraules
                    String[] paraules = linia.split(" ");
                    numPar += paraules.length;

                    // Per a cada paraula actualitzem numCar i fiquem a la Hashtable
                    for (String paraula : paraules) {
                        char[] lletres = paraula.toCharArray();
                        numCar += lletres.length;

                        // Si ja existeix la paraula augmentem el seu valor, si no existeix la guardem
                        if (hashParaules.containsKey(paraula)) {
                            hashParaules.put(paraula, hashParaules.get(paraula) + 1);
                        } else {
                            hashParaules.put(paraula, 1);
                        }
                    }
                }
                
                // Mostrem estadístiques del llibre
                System.out.println("Llibre: " + llibre.getName());
                System.out.println("Línias totals: " + numLin);
                System.out.println("Número de paraules: " + numPar);
                System.out.println("Número de caràcters: " + numCar);
                System.out.println("Les 10 paraules més comunes sén: ");
                
                // Mostra les 10 paraules més comunes
                mostraParaulesMesComunes(hashParaules);
                
                System.out.println("");
            }

        } catch (FileNotFoundException e) {
            System.out.println("Error: L'arxiu no existeix");
        } catch (Exception e) {
            System.out.println("Error: " + e);
        }
    }

    // Mostra las 10 paraules más comunes
    public static void mostraParaulesMesComunes(Hashtable<String, Integer> t) {

        // Obtindrem una llista ordenada per n. de paraules
        ArrayList<Map.Entry<String, Integer>> l = new ArrayList(t.entrySet());
        
        Collections.sort(l, Collections.reverseOrder(new Comparator<Map.Entry<String, Integer>>() {
            public int compare(Map.Entry<String, Integer> o1, Map.Entry<String, Integer> o2) {
                return o1.getValue().compareTo(o2.getValue());
            }
        }));

        // Imprimeix les 10 paraules més comunes
        for (int i = 0; i < 10; i++) {
            System.out.println(l.get(i));
        }
    }
    
}

```
:::
::::