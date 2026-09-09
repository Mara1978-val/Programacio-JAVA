# 1. Introducció

***Visual Studio Code*** és un **editor de codi font** lliure i multiplataforma desenvolupat per Microsoft. Encara que inicialment es va dissenyar com un editor lleuger, amb l'ús d'extensions es pot convertir en un **entorn de desenvolupament integrat (IDE)** molt potent per a Java.

És important destacar que VSCode és **gratuït i de codi obert**, amb una **comunitat molt activa** que desenvolupa constantment noves extensions. La seua **flexibilitat i personalització** el converteixen en una excel·lent opció per al desenvolupament Java.

VSCode utilitza un **sistema d'extensions** que permet afegir funcionalitats específiques per a cada llenguatge de programació. Per a Java, existeixen extensions oficials que proporcionen **compilació automàtica, depuració, refactoring, IntelliSense i integració amb sistemes de control de versions**.

Entre les seues **característiques principals** trobem: **suport multi-llenguatge, terminal integrat, control de versions Git incorporat, sistema de tasques personalitzable i una interfície d'usuari moderna i intuïtiva**.

## 2. Instal·lació i Configuració

Per a desenvolupar aplicacions Java en VSCode necessitareu tindre instal·lada la JDK (Java Development Kit) i Visual Studio Code amb les extensions adequades.

### 2.1. Descàrrega de JDK i Visual Studio Code

**Descàrrega de JDK:**
Si no tens JDK instal·lada, pots descarregar-la des del lloc oficial d'Oracle o utilitzar OpenJDK:

- Oracle JDK: https://www.oracle.com/java/technologies/downloads/
- OpenJDK: https://openjdk.org/

**Descàrrega de Visual Studio Code:**
Pots descarregar VSCode des del seu lloc oficial:

- Visual Studio Code: https://code.visualstudio.com/

### 2.2. Instal·lació de JDK i VSCode

**Instal·lació de JDK:**
Executa l'instal·lador descarregat i segueix les instruccions. Assegura't que la variable d'entorn JAVA_HOME estiga correctament configurada.

**Instal·lació de VSCode:**
L'instal·lació de VSCode és molt senzilla. Simplement executa l'instal·lador descarregat i segueix els passos indicats.

### 2.3. Configuració d'Extensions per a Java

Una vegada instal·lat VSCode, necessitareu instal·lar les extensions necessàries per a treballar amb Java:

**Extension Pack for Java** (Recomanada):
Aquesta extensió inclou tot el necessari per al desenvolupament Java:
- Language Support for Java by Red Hat
- Debugger for Java
- Test Runner for Java
- Maven for Java
- Project Manager for Java
- Visual Studio IntelliCode

Per a instal·lar-la:
1. Obri VSCode
2. Prem Ctrl+Shift+X per obrir el panell d'extensions
3. Busca "Extension Pack for Java"
4. Fes clic en "Install"

<!--![VSCode - Extensions Java](/img/uf3-1/vscode_java_extensions.jpg)
-->
## 3. Configuració de l'Entorn Java

### 3.1. Verificació de la Configuració Java

Després d'instal·lar les extensions, VSCode detectarà automàticament la instal·lació de Java. Pots verificar la configuració:

1. Prem Ctrl+Shift+P per obrir la paleta d'ordres
2. Escriu "Java: Show Runtime" i selecciona l'opció
3. Apareixerà una finestra mostrant les versions de Java detectades

### 3.2. Configuració Manual (si és necessari)

Si VSCode no detecta automàticament Java, pots configurar manualment:

1. Ves a File → Preferences → Settings (Ctrl+,)
2. Busca "java.home"
3. Afig la ruta a la teua instal·lació de JDK

## 4. Creació de Projectes Java

### 4.1. Creació d'un Projecte Nou

Per a crear un nou projecte Java en VSCode:

1. Obri VSCode
2. Prem Ctrl+Shift+P per obrir la paleta d'ordres
3. Escriu "Java: Create Java Project"
4. Selecciona el tipus de projecte:
   - **No build tools**: Projecte Java simple
   - **Maven**: Projecte amb Maven
   - **Gradle**: Projecte amb Gradle

<!--[VSCode - Crear Projecte Java](/img/uf3-1/vscode_create_project.jpg)
-->
### 4.2. Estructura del Projecte

Quan crees un projecte Java simple, VSCode genera l'estructura següent:

```
MeuProjecte/
├── .vscode/
│   └── settings.json
├── lib/
├── src/
│   └── App.java
└── README.md
```

La carpeta `src` conté els fitxers font Java, mentre que `lib` s'utilitza per a llibreries externes.

### 4.3. Creació de Classes Java

Per a crear una nova classe Java:

1. Fes clic dret sobre la carpeta `src`
2. Selecciona "New File"
3. Escriu el nom de la classe amb extensió `.java`
4. VSCode generarà automàticament l'estructura bàsica de la classe

Alternativament, pots utilitzar:
- Ctrl+Shift+P → "Java: Create Java Class"

## 5. Compilació i Execució

### 5.1. Compilació Automàtica

VSCode compila automàticament els fitxers Java quan els guardes. Els fitxers compilats (.class) s'emmagatzemen en una carpeta temporal que gestiona l'extensió.

Per a forçar una recompilació:
1. Prem Ctrl+Shift+P
2. Escriu "Java: Reload Projects"

### 5.2. Execució d'Aplicacions

Per a executar una aplicació Java:

**Opció 1: Utilitzar el botó Run**
- Obre el fitxer Java amb el mètode main
- Fes clic en "Run" que apareix sobre el mètode main

**Opció 2: Utilitzar la paleta d'ordres**
- Prem Ctrl+Shift+P
- Escriu "Java: Run Java"

**Opció 3: Utilitzar el terminal integrat**
- Obri el terminal amb Ctrl+`
- Navega fins a la carpeta del projecte
- Executa: `java -cp src NomDeLaClasse`

<!--![VSCode - Executar Java](/img/uf3-1/vscode_run_java.jpg)
-->
### 5.3. Gestió de Tasques

VSCode permet configurar tasques personalitzades per a la compilació i execució:

1. Prem Ctrl+Shift+P
2. Escriu "Tasks: Configure Task"
3. Selecciona "Create tasks.json from template"
4. Tria "Others"

Exemple de fitxer `tasks.json`:

```json
{
    "version": "2.0.0",
    "tasks": [
        {
            "label": "compile",
            "type": "shell",
            "command": "javac",
            "args": ["-d", "bin", "src/*.java"],
            "group": "build"
        },
        {
            "label": "run",
            "type": "shell",
            "command": "java",
            "args": ["-cp", "bin", "App"],
            "group": "test"
        }
    ]
}
```

## 6. Depuració (Debugging)

### 6.1. Configuració del Debugger

VSCode inclou un potent debugger per a Java. Per a configurar-lo:

1. Obre el fitxer Java que vols depurar
2. Prem F5 o ves a Run → Start Debugging
3. Selecciona "Java" com a entorn de depuració

### 6.2. Punts de Ruptura (Breakpoints)

Per a establir punts de ruptura:
- Fes clic a l'esquerra del número de línia on vols parar l'execució
- Apareixerà un punt roig indicant el breakpoint

### 6.3. Controls de Depuració

Una vegada iniciada la depuració, tindràs accés als següents controls:

- **Continue** (F5): Continua l'execució fins al següent breakpoint
- **Step Over** (F10): Executa la línia actual sense entrar en les funcions
- **Step Into** (F11): Entra dins de les funcions cridades
- **Step Out** (Shift+F11): Surt de la funció actual
- **Restart** (Ctrl+Shift+F5): Reinicia la sessió de depuració
- **Stop** (Shift+F5): Atura la depuració

<!--![VSCode - Depuració](/img/uf3-1/vscode_debugging.jpg)
-->
### 6.4. Visualització de Variables

Durant la depuració pots:
- Veure les variables locals en el panell "Variables"
- Afegir expressions de vigilància en el panell "Watch"
- Inspeccionar la pila de crides en el panell "Call Stack"

## 7. Funcionalitats Avançades

### 7.1. IntelliSense i Autocompletat

VSCode ofereix:
- **Autocompletat intel·ligent** mentre escrius
- **Suggeriments de mètodes** i propietats
- **Documentació emergent** per a classes i mètodes
- **Detecció d'errors** en temps real

### 7.2. Refactoring

Pots refactoritzar el codi fàcilment:
- **Rename Symbol** (F2): Canvia el nom d'una variable o mètode
- **Extract Method**: Extreu codi a un mètode separat
- **Organize Imports**: Organitza i neteja les importacions

### 7.3. Integració amb Git

VSCode té integració nativa amb Git:
- Visualitza canvis en els fitxers
- Gestiona commits des de la interfície
- Compara versions del codi
- Gestiona branques

### 7.4. Extensions Útils Addicionals

- **Bracket Pair Colorizer**: Coloreja els parèntesis coincidents
- **GitLens**: Millora la funcionalitat Git
- **Java Code Generators**: Genera codi automàticament
- **SonarLint**: Detecta errors i problemes de qualitat del codi

## 8. Exemple Pràctic

Creem un exemple senzill per a provar totes les funcionalitats:

1. Crea un nou projecte Java anomenat "PrimerProjecte"
2. Crea una classe `Calculadora.java` dins de `src`
3. Afig el següent codi:

```java
public class Calculadora {
    public static void main(String[] args) {
        System.out.println("Calculadora Simple");
        
        int a = 10;
        int b = 5;
        
        int suma = sumar(a, b);
        int resta = restar(a, b);
        
        System.out.println(a + " + " + b + " = " + suma);
        System.out.println(a + " - " + b + " = " + resta);
    }
    
    public static int sumar(int x, int y) {
        return x + y;
    }
    
    public static int restar(int x, int y) {
        return x - y;
    }
}
```

4. Estableix un breakpoint en la línia `int suma = sumar(a, b);`
5. Executa amb F5 per a començar la depuració
6. Observa com s'atura en el breakpoint i pots inspeccionar les variables

Aquest exemple et permetrà provar la compilació, execució i depuració en VSCode.

## 9. Consells i Millors Pràctiques

### 9.1. Organització del Codi

- Utilitza paquets per a organitzar les classes relacionades
- Segueix les convencions de nomenclatura de Java
- Mantén els fitxers ordenats i ben documentats

### 9.2. Configuració Personalitzada

- Configura les teues preferències en `settings.json`
- Utilitza fitxers de configuració per a cada projecte
- Personalitza els accessos directes de teclat

### 9.3. Rendiment

- Desactiva extensions que no utilitzes
- Configura adequadament la memòria JVM si treballs amb projectes grans
- Utilitza l'exclusió de carpetes per a millorar el rendiment

VSCode és una eina molt potent per al desenvolupament Java que, amb la configuració adequada, pot competir amb IDEs més pesats oferint una experiència de desenvolupament fluida i eficient.