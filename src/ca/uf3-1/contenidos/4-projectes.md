# 4. Gestió de Projectes

## 4.1. Concepte de Projecte

Un **projecte** és un conjunt organitzat de fitxers font, recursos, configuracions i metadades que defineixen una aplicació o llibreria. Els projectes proporcionen:

- **Organització estructurada** dels fitxers i recursos
- **Configuració de compilació** i construcció
- **Gestió de dependències** externes
- **Configuració de depuració** i execució
- **Metadades del projecte** com versió, autor, descripció

## 4.2. Tipus de Projectes

Els IDEs solen oferir diferents tipus de plantilles de projecte:

- **Aplicacions d'escriptori**: Programes amb interfície gràfica
- **Aplicacions de consola**: Programes que s'executen en terminal
- **Aplicacions web**: Projectes per a desenvolupament web
- **Llibreries**: Components reutilitzables per a altres projectes
- **Aplicacions mòbils**: Projectes específics per a plataformes mòbils

## 4.3. Creació d'un Nou Projecte

El procés típic per a crear un projecte inclou:

1. **Seleccionar el tipus** de projecte adequat
2. **Configurar el nom** i ubicació del projecte
3. **Especificar paràmetres** específics (versió del llenguatge, framework, etc.)
4. **Generar l'estructura** inicial de fitxers i carpetes
5. **Configurar les propietats** del projecte

::: tabs
== Java
```
// Exemple d'estructura típica d'un projecte:
MeuProjecte/
├── src/
│   └── main/
│       └── java/
│           └── com/
│               └── exemple/
│                   └── App.java
├── lib/
├── resources/
├── build/
└── README.md
```
:::

## 4.4. Sistemes de Construcció

Els IDEs integren diferents sistemes de construcció per a automatitzar el procés de compilació:

**Sistemes natius**: Utilitzen les eines de compilació pròpies del llenguatge.

**Sistemes de construcció generals**: Com Make, que permeten definir regles personalitzades.

**Sistemes específics per llenguatge**: Com Maven o Gradle per a projectes Java, NPM per a JavaScript.

## 4.5. Configuració de Compilació

La configuració típica inclou:

- **Directoris de codi font** i recursos
- **Rutes de llibreries** externes i dependències
- **Opcions del compilador** (optimització, avisos, etc.)
- **Directoris de sortida** per als fitxers compilats
- **Scripts de construcció** personalitzats

## 4.6. Procés de Compilació

Els IDEs ofereixen diferents opcions de compilació:

**Compilació automàtica**: El codi es compila automàticament quan es guarden els canvis.

**Compilació manual**: L'usuari inicia explícitament el procés de compilació.

**Compilació selectiva**: Només es recompilen els fitxers modificats.

**Construcció completa**: Es neteja i recompila tot el projecte des de zero.

::: tabs
== Java

Exemple de comandes típics de compilació:
- Compilar el projecte: javac -d build src/*.java
- Executar l'aplicació: java -cp build NomDeLaClasse
- Crear un arxiu JAR: jar cf aplicacio.jar -C build.

:::

## 4.7. Configuració d'Execució

Els IDEs permeten configurar diferents perfils d'execució:

- **Arguments de la línia d'ordres** per a l'aplicació
- **Variables d'entorn** necessàries
- **Directori de treball** per a l'execució
- **Configuració de memòria** i altres paràmetres JVM
- **Perfils diferents** per a desenvolupament, proves i producció

## 4.8. Execució de Programes

Les opcions d'execució típiques inclouen:

**Execució normal**: Llança l'aplicació de manera estàndard.

**Execució amb arguments**: Permet especificar paràmetres específics per a aquesta execució.

**Execució en mode de depuració**: Inicia l'aplicació preparada per a la depuració.

**Execució de proves**: Llança suites de proves automatitzades.

## 4.9. Gestió de la Consola de Sortida

Els IDEs proporcionen una consola integrada que mostra:

- **Sortida estàndard** del programa
- **Missatges d'error** i excepcions
- **Registres de compilació** i construcció
- **Entrada d'usuari** quan l'aplicació la requereix
- **Enllaços clicables** als errors per a navegació ràpida
