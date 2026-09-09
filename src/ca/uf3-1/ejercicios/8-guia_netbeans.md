# 1. Introducció

***NetBeans*** és un **entorn de desenvolupament integrat (IDE - "Integrated Development Environment")** lliure, desenvolupat principalment per al llenguatge de programació Java. Existeix a més un nombre important de mòduls per a estendre'l. 

És important destacar que és un **projecte de codi obert** de gran èxit, amb una gran base d'usuaris, una comunitat en constant creixement, i amb prop de 100 socis a tot el món. 

La plataforma NetBeans, a més, permet que les aplicacions siguen desenvolupades a partir d'un conjunt de components de programari anomenat mòduls. Un **mòdul** és un arxiu Java que conté classes de java escrites per a interactuar amb les APIs de NetBeans (API - "Interfície de Programació d'Aplicacions", https://www.xataka.com/basics/api-que-sirve) i un arxiu especial (manifest file) que l'identifica com a mòdul. Les aplicacions construïdes a partir de mòduls poden ser esteses agregant-li nous mòduls. Pel fet que els mòduls poden ser desenvolupats independentment, les aplicacions basades en la plataforma NetBeans poden ser esteses fàcilment per altres desenvolupadors de programari. 

NetBeans IDE suporta el desenvolupament de tots els tipus d'aplicació Java (J2SE, web, EJB i aplicacions mòbils). Entre les seues **característiques** es troba un **sistema de projectes basat en Ant, control de versions i refactoring**.

## 2. Instal·lació

Per a aquest mòdul és necessari tindre instal·lada la JDK (Java Development Toolkit) i l'entorn de desenvolupament NetBeans. És suficient amb tindre, en tots dos casos, almenys la versió 8. Qualsevol altra versió posterior també servirà.

Si ja ho tens instal·lat d'altres anys o per estar cursant el mòdul d'Entorns de Desenvolupament, pots saltar-te aquest apartat i anar directament a l'apartat 3.

## 2.1. Descàrrega de JDK i NetBeans IDE

Si no tens JDK ni NetBeans t'aconsellem que seguisques el següent enllaç de Oracle en el qual podràs descarregar un instal·lador que et permet instal·lar l'última versió de tots dos fàcilment:

JDK: https://www.oracle.com/java/technologies/downloads/

NetBeans: https://NetBeans.apache.org/front/main/download/

Una vegada en la pàgina haurem d'acceptar la llicència i triar la descarga del sistema operatiu que estiguem utilitzant.

## 2.2 Instal·lació de JDK i NetBeans IDE

Una vegada descarregat el paquet, la instal·lació és molt senzilla, simplement hem de seguir els passos de l'instal·lador. Instal·lant primer el JDK i després el NetBeans.

Revisa quina versió de JDK necessitaràs per a fer funcionar la versió de NetBeans que t'instal·les en l'apartat "Deployment Platforms" de la finestra de descarrega del NetBeans.

## 3. Creació de projectes

## 3.1 Conceptes bàsics

Un **projecte** és un conjunt d'arxius font en java que conté informació associada a aqueix conjunt d'arxius, com és el classpath, arxius de llibreria, estructura de directoris, etc. Tota aquesta informació resideix en una carpeta que normalment es diu igual que el nom del projecte. En aquesta carpeta afig un fitxer .xml que és el que s'encarrega de fixar els passos per a la compilació, depuració, execució i empaquetat d'aquest. Aquest mecanisme es coneix com Ant Project (http://ant.apache.org).

Quan creem un projecte, el IDE genera de manera automàtica un script Ant per a compilar el projecte, o bé utilitzar un script de Ant que tinguem predefinit. Si accedim a **File -> New Project**, veiem que per defecte el IDE conté un conjunt de plantilles que podem utilitzar en funció del projecte que anem a crear.

![NetBeans - Nou Projecte](/img/uf3-1/NetBeans_new_project.jpg)

Projectes estàndard (El IDE genera un script Ant per a compilar):

- ***Java Application***. Plantilla per a crear un esquelet d'un projecte J2SE amb una classe principal.
- **Java Class Library**. Plantilla per a crear un esquelet a Java sense classe principal.
- **Java Project with Existing Sources**. Plantilla per a crear un projecte J2SE basat en un conjunt de fitxers java existents.
- **Java Free-Form Project**. Plantilla per a crear un projecte important, una aplicació Java existent i la seua script de construcció en un projecte de IDE.

## 3.2 Creació d'un projecte

Com hem comentat, per a crear un projecte **File -> New Project (Ctrl. + Mayús + N)**, a continuació apareixerà l'assistent per a la creació del projecte.

Per al nostre exemple triarem de la categoria general el projecte de **Java Application** (aplicació java J2SE estàndard).

Una vegada seleccionada la plantilla fem clic en Next i emplenem el nom del projecte, el nom que li donem al projecte servirà com a nom de paquet i crearà una carpeta amb aqueix mateix nom.

Per al nostre exemple posarem com a nom **Ejemplo1**. Guardarem el projecte en una carpeta del nostre sistema, seleccionant aquesta carpeta en la segona caixa de text.

![NetBeans - Nova Aplicació Java](/img/uf3-1/NetBeans_new_java_application.jpg)

Una vegada hem creat el projecte, en la part esquerra podem veure tres pestanyes: la del projecte (Projects), la dels arxius (Files) i la de Serveis (Services).

La pestanya de projectes és el punt principal d'entrada als fitxers fonts del projecte. Mostra una vista lògica de l'estructura del projecte quant a paquets i fitxers que el componen. Mitjançant el botó de la dreta del ratolí i tenint seleccionat el nom del projecte (en el nostre cas Ejemplo1), podem accedir al menú contextual per a modificar les opcions de compilació, debugger i execució del projecte.

![NetBeans - Pestanya Projectes](/img/uf3-1/NetBeans_projects.jpg)

La pestanya de fitxers mostra la vista de fitxers basada en una estructura de directoris, incloent fitxers i carpetes que no es mostren en la finestra de projectes. Des d'ací podem editar, modificar tant fitxers fonts del projecte com scripts de compilació (Ant). Podem accedir al projecte compilat i paquetitzat en fitxers JAR, WAR, etc.

![NetBeans - Pestanya Arxius](/img/uf3-1/NetBeans_files.jpg)

En la pestanya de serveis trobem els diferents serveis dels quals podem fer ús des de la nostra aplicació, com la connexió a bases de dades o a un servidor web.

![NetBeans - Pestanya Serveis](/img/uf3-1/NetBeans_services.jpg)

## 3.3 Creació de fitxers

Quan creem un projecte es crea automàticament un fitxer, en aquest cas Ejemplo1.java. Si volguérem crear un nou tindriem que punxar amb el botó dret sobre el nom del projecte.

En el nostre cas accedim al projecte **Ejemplo1** i amb el botó de la dreta accedim al menú New. Depenent de la mena de plantilla seleccionat ens apareixerà un assistent que ens indicarà els passos necessaris per a acabar la creació de la plantilla, seleccionem **Java Class**…

![NetBeans - Nova Classe Java (1)](/img/uf3-1/NetBeans_new_javaClass_1.jpg)

Emplenem el nom de la classe i el nom del package **ejemplo1**.

![NetBeans - Nova Classe Java (2)](/img/uf3-1/NetBeans_new_javaClass_2.jpg)

Així tindrem el nostre nou fitxer.

![NetBeans - Nou arxiu](/img/uf3-1/NetBeans_new_file.jpg)

## 4. Compilació i execució d'aplicacions

## 4.1 Compilació

Per a fer una compilació amb el IDE és bastant simple. El primer és seleccionar el paquet, projecte o arxiu que vulguem compilar.

Per a compilar un projecte, paquet o arxiu, ens situem en la finestra de projectes i triem una de les següents opcions de la barra d'eines:

- En el menú principal, fem clic en **Run → Build Project (F11)**, per a compilar el projecte.
- En el menú principal, fem clic en **Run → Clean and Build Project (Shift + F11)**, per a netejar i compilar el projecte.

![NetBeans - Compilar Projecte](/img/uf3-1/NetBeans_build_project.jpg)

- En la finestra de projectes botó de la dreta sobre el nom del projecte **Build Project**, per a compilar el projecte.
- En la finestra de projectes botó de la dreta sobre el nom del projecte **Clean and Build Project**, per a eliminar els arxius objecte i compilar el projecte.
- En la finestra de projectes botó de la dreta sobre el nom del projecte **Clean**, per a eliminar els arxius objecte del projecte.

![NetBeans - Compilar Projecte](/img/uf3-1/NetBeans_CleanAndBuild.jpg)

També es poden utilitzar els botons de la barra d'eines:
![NetBeans - Compilar Projecte - Barra d'Eines](/img/uf3-1/NetBeans_CleanAndBuild_taskBar.jpg)

Seguint el nostre exemple provem de compilar el projecte principal Ejemplo1. L'eixida seria la següent:

![NetBeans - Eixida](/img/uf3-1/NetBeans_Output.jpg)

Qualsevol error que hi haja en compilació apareix en la finestra d'eixida Output (Ctrl. + 4). La finestra d'eixida és una finestra multi-tabulada que mostra tots els missatges que hi haja hagut en la compilació. El missatge d'error apareix subratllat en blau i és un enllaç a la línia de codi que ha causat aquest error.

## 4.2. Execució

Per a executar una aplicació podem:

- Fer clic en **Run → Run Main Project (F6)**
![NetBeans - Execusió](/img/uf3-1/NetBeans_run.jpg)

- Fer clic en les iconas de la barra d'eines:
![NetBeans - Execusió - Barra d'Eines](/img/uf3-1/NetBeans_run_taskBar.jpg)
- Fer clic amb el botó dret sobre el seu node del projecte en la finestra dels projectes i elegir Run Project:
![NetBeans - Execusió Projecte](/img/uf3-1/NetBeans_runProject.jpg)

Si modifiquem el nostre fitxer java i inserim una línia per a mostrar per pantalla el missatge "El meu primer programa".
![NetBeans - Primer Programa](/img/uf3-1/NetBeans_primer_programa.jpg)

Compilem i executem, l'eixida seria la següent:
![NetBeans - Eixeda Primer Programa](/img/uf3-1/NetBeans_eixida_primer_programa.jpg)