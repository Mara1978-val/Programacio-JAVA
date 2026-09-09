# 4. Cicle de Vida d'un Programa

La creació d'un programa de programari segueix un procés estructurat que generalment es dividix en cinc fases principals: **definició**, **disseny**, **desenvolupament**, **implementació** i **manteniment**.

## 4.1. Fase de Definició o Anàlisi

La fase de definició és com planificar un viatge abans d'emprendre'l. En esta etapa, es tracta d'entendre exactament què es vol aconseguir amb el programa.

### Activitats Principals

- **Definició del Problema**: Es comença per definir quin tipus d'**informació va a manejar** el programa, quines tasques o **funcions ha de poder realitzar**, i com va a interactuar amb altres parts del sistema o amb els usuaris.

- **Recopilació de Requisits**: Identificació de qualsevol **condició o restricció** que puga influir en el desenvolupament del programa. A més, es detallen les "**interfícies**", que són els punts de connexió del programa amb altres sistemes o components.

- **Documentació**: Establiment dels **criteris de validació**, que són les formes en què comprovarem si el programa funciona com s'espera. Al final d'esta fase, es documenta tot de manera detallada, incloent la situació inicial, els resultats esperats i la situació final desitjada.

> ***Exemple: Aplicació per a planificar un viatge***
>
>- **La informació que el sistema ha d'utilitzar**: Dades com la ciutat d'origen, la ciutat de destinació, les dates de viatge, els punts d'interés a visitar, el pressupost disponible, entre altres.
>- **Les funcions que ha de realitzar**: Permetre buscar vols i allotjaments, recomanar itineraris d'acord amb els interessos de l'usuari, calcular costos aproximats del viatge, oferir opcions de transport local, etc.
>- **Les condicions o restriccions existents**: Considerar restriccions de pressupost, disponibilitat de dates, restriccions de viatge degut a pandèmies o situacions d'emergència, requisits de visat, etc.
>- **Les interfícies del sistema**: Connexió amb serveis de tercers com aerolínies, hotels i plataformes de mapes per a mostrar rutes i ubicacions.
>- **Criteris de validació**: Comprovar que l'aplicació pot generar itineraris que respecten les preferències i restriccions de l'usuari, assegurar que les dades de vols i hotels s'actualitzen correctament, i verificar que les recomanacions siguen rellevants.

## 4.2. Fase de Disseny

La fase de disseny és on es planifica com es construirà el programari. Es dissenya l'arquitectura del sistema i es detallen els components i les seues interaccions.

### Activitats Principals

- **Disseny d'Alt Nivell**: Creació de l'arquitectura del sistema, definint els principals components i com interactuen entre si. Açò inclou decisions sobre patrons de disseny, com arquitectura en capes, microserveis, etc.

- **Disseny Detallat**: Especificació detallada de les estructures de dades, algoritmes i la implementació dels components del programari. Ací es defineixen els mètodes específics que cada component utilitzarà per a complir amb els requisits funcionals i no funcionals.

- **Representació d'algoritmes**: Permet visualitzar els passos necessaris per a resoldre un problema, identificar possibles errors o millores. Aquesta representació pot realitzar-se de diverses maneres, com diagrames de flux, pseudocodi, taules de decisió i diagrames Nassi–Shneiderman, cadascun oferint una perspectiva diferent.

- **Disseny d'Interfície**: Disseny de la interfície d'usuari (UI) i la interacció amb el sistema (UX). En esta etapa es poden utilitzar ferramentes com **mockups**, **wireframes** i **prototips** interactius per a planificar i provar les interfícies d'usuari abans de la implementació real.

> ***Exemple: Aplicació per a planejar un viatge***
>
> 1. **Estructures de dades**: Es defineixen taules o estructures per a gestionar dades de ciutats, vols, allotjaments i activitats.
> 2. **Funcions del programa**: Es planifiquen funcions com la cerca de vols, el càlcul del cost total del viatge, i recomanacions d'activitats basades en les preferències de l'usuari.
> 3. **Disseny descendent**: Es descompon el problema principal en subproblemes més simples, que després es resolen individualment. Per exemple, en lloc de dissenyar una única funció per a la "cerca de vols", es divideix en subfuncions com "buscar vols disponibles", "filtrar per preu", "ordenar per hora de sortida", etc.

## 4.3. Fase de Desenvolupament

La fase de desenvolupament és on es converteix el disseny en un programari funcional a través de la codificació, proves i documentació.

### 4.3.1 Codificació

Aquí és on els desenvolupadors comencen a escriure el codi del programari basant-se en el disseny detallat.

- **Escriptura del Codi**: Implementació del programari en un llenguatge de programació apropiat com **Python**, **Java**, **JavaScript**, etc.

- **Documentació del Codi**: Incloure comentaris i documentació per facilitar la comprensió i manteniment del codi. Aquesta documentació inclou comentaris inline, documentació de mètodes, i guies d'estil de codi.

- **Normes de Codificació**: Ús d'estructures clares, convencions de nomenclatura descriptives, i comentaris útils per assegurar un codi mantenible. A més, es segueixen pràctiques com **principis SOLID**, **DRY** (Don't Repeat Yourself), i **KISS** (Keep It Simple, Stupid).

> ***Exemple: Aplicació per planificar un viatge***
>
> - **Implementació de funcions**: Es escriuen funcions per realitzar cerques de vols, calcular el cost total del viatge, i recomanar activitats basades en les preferències de l'usuari.
> - **Maneig de dades**: Es estructuren les dades en taules adequades, utilitzant bases de dades com **MySQL**, **PostgreSQL**, o **MongoDB** depenent de les necessitats.
> - **Eines de desenvolupament**: Ús de **Git** per control de versions, i **Jenkins** o **GitHub Actions** per integració contínua.

### 4.3.2 Proves

Les proves són fonamentals per garantir que el programari funcioni correctament i compleixi amb els requisits especificats.

- **Proves Unitàries**: Verificació de components individuals del programari per assegurar que funcionen correctament. Aquestes proves solen automatitzar-se usant eines com **JUnit** (per a Java), **pytest** (per a Python), o **Jest** (per a JavaScript).

- **Proves d'Integració**: Avaluació de la interacció entre components per garantir que el sistema complet funcioni correctament. S'utilitzen marcs de prova d'integració com **Selenium** per proves d'interface o **Postman** per proves d'API.

- **Proves del Sistema**: Avaluació del programari en el seu conjunt per assegurar que compleix amb els requisits i especificacions. Es realitzen proves d'estrès, rendiment, i càrrega.

- **Proves d'Aceptació**: Validació del programari amb els usuaris finals per confirmar que satisfà les seves necessitats i expectatives. Aquí es poden realitzar proves de **usabilitat** i **experiència d'usuari**.

> ***Exemple: Aplicació per planificar un viatge***
>
> - **Proves unitàries**: Es proven individualment funcions com la cerca de vols i la generació d'itineraris.
> - **Proves d'integració**: Es verifica que les funcions de cerca de vols i allotjament funcionen correctament juntes i s'integren amb l'API de tercers.
> - **Proves del sistema**: Es simula un gran nombre d'usuaris buscant vols i allotjaments simultàniament per avaluar el rendiment sota càrrega.
> - **Proves d'acceptació**: Es realitza una sessió de prova amb usuaris reals que planifiquen un viatge utilitzant l'aplicació per assegurar-se que compleix amb les seves expectatives.

## 4.4. Fase d'Implementació

La fase d'implementació se centra a fer que el programari estigui disponible per al seu ús pels usuaris finals.

### Activitats Principals

- **Desplegament**: Instal·lació del programari en l'entorn de producció. Això pot implicar la configuració de servidors, serveis en el núvol com **AWS**, **Azure**, o **Google Cloud**, i la instal·lació de bases de dades i altres components del sistema.

- **Formació d'Usuaris**: Capacitar els usuaris finals sobre l'ús del programari. Això pot incloure tutorials interactius, webinars, o sessions de formació in situ.

- **Documentació d'Usuari**: Creació de manuals i guies per als usuaris finals, que expliquen com utilitzar les diferents funcions del programari. Es poden usar eines com **MadCap Flare** o **Adobe RoboHelp** per crear aquesta documentació.

> ***Exemple: Aplicació per planificar un viatge***
>
> - **Desplegament**: El programari es desplega en servidors accessibles per als usuaris, utilitzant eines com **Docker** per a la contenització i **Kubernetes** per a l'orquestració de contenidors.
> - **Formació d'Usuaris**: S'organitzen webinars per ensenyar als usuaris com planificar viatges utilitzant l'aplicació.
> - **Documentació d'Usuari**: Es creen manuals i vídeos que expliquen com utilitzar les funcions principals, com la cerca de vols i la creació d'itineraris.

## 4.5. Fase de Manteniment

La fase de manteniment assegura que el programari continuï funcionant correctament i s'adapti a nous requisits o canvis en l'entorn operatiu.

### 4.5.1 Activitats Principals

- **Correcció d'Errors**: Identificació i solució de problemes que surten després de la implementació. Els errors es gestionen utilitzant sistemes de gestió d'incidències com **JIRA** o **Bugzilla**.

- **Actualització i Millores**: Addició de noves característiques i millores en el programari. Això pot incloure la implementació de noves funcions sol·licitades pels usuaris o millores de rendiment.

- **Adaptació a Nous Requisits**: Modificació del programari per satisfer canvis en els requisits de l'usuari o en l'entorn, com noves normatives legals o canvis tecnològics.

### 4.5.2 Procés de Manteniment

El procés de manteniment generalment segueix un cicle iteratiu que inclou:

- **Avaluació de Problemes**: Identificació i avaluació de problemes reportats pels usuaris o detectats a través de monitoratge. Aquesta avaluació ajuda a determinar la prioritat i l'impacte dels problemes en el funcionament del programari.

- **Implementació de Solucions**: Desenvolupar i aplicar les solucions necessàries per corregir problemes i realitzar millores. Això pot involucrar canvis en el codi, actualització de documentació, i modificació de configuracions del sistema.

- **Proves Posteriors als Canvis**: Després d'aplicar les correccions i millores, és fonamental realitzar proves per assegurar-se que les modificacions no han introduït nous errors i que el programari segueix funcionant correctament. Les proves poden incloure proves unitàries, d'integració i del sistema.

- **Documentació i Comunicació**: Mantenir una documentació actualitzada dels canvis realitzats i comunicar aquests canvis als usuaris i altres interessats és essencial per al bon manteniment del programari.

> ***Exemple: Aplicació per planificar un viatge***
>
> - **Correcció d'Errors**: Es corregeixen errors detectats pels usuaris o identificats mitjançant proves continuades, com problemes amb la connexió a serveis de tercers o errors en la generació d'itineraris.
> - **Actualització i Millores**: S'afegeixen noves funcions, com suggeriments personalitzats basats en l'historial de viatges de l'usuari, o millores en la velocitat de la cerca de vols.
> - **Adaptació a Nous Requisits**: S'adapta l'aplicació a nous requeriments, com canvis en polítiques de viatge degut a situacions globals o la integració amb noves APIs de serveis de viatges.

::: tip Conceptes clau per recordar
- La **fase de definició** estableix els requisits i l'abast del projecte.
- La **fase de disseny** planifica l'arquitectura i els components del programari.
- La **fase de desenvolupament** implica la codificació, proves i documentació del programari.
- La **fase d'implementació** fa que el programari estiga disponible per als usuaris finals.
- La **fase de manteniment** assegura que el programari continue funcionant correctament i s'adapte a nous requisits.
- El **cicle de vida del programari** és un procés iteratiu que pot repetir-se per a millorar contínuament el producte.
:::