<!--
---

marp: true
html: true
theme: ceedcv_pres_uf11
paginate: true
header: uf11. Programació Gràfica
footer: CFGS Desenvolupament d'Aplicacions Web / Multimèdia

---

<!-- _class: lead -->
<!-- _header: <br> -->
<!-- _footer: <br> -->
<!-- _paginate: skip -->

<!--

# UF11. Programació Gràfica

## Programació (PRO) <br>CFGS DAW / DAM<br> Curs 2024 / 2025

**Guillermo Garrido Portes**  
**David Tur Sanmateu**


---

# ÍNDEX

1. Introducció
2. Arquitectura de l'entorn
3. Configuració
4. Creació d'un projecte
5. Scene builder

-->

---

## 1. Introducció

Una interfície gràfica d'usuari (GUI, per les seues sigles en anglés) és un conjunt d'elements visuals i controls que permeten als usuaris interactuar amb un programari o
sistema informàtic de manera intuïtiva i visual.

La GUI proporciona una capa d'abstracció sobre els comandaments i operacions complexes del sistema subjacent, permetent als usuaris interactuar amb el programari de manera més accessible i senzilla.

Els elements de la GUI poden incloure **finestres, botons, menús, barres d'eines, quadres de diàleg i altres elements interactius** que permeten als usuaris interactuar amb el programari de manera visual i directa.

En general, la GUI pot tindre un impacte significatiu en l'eficàcia i l'eficiència de la
interacció humà-computadora.

---

## 2. Arquitectura de l'entorn

| Eina                         | Descripció |
|------------------------------|------------|
| ![Scene builder](/img/uf12/Scene_builder.jpg) | Permet dissenyar, mitjançant una interfície gràfica, les estructures de la interfície d'usuari de les aplicacions desenvolupades amb JavaFX. Genera arxius FXML amb el codi descriptiu de la interfície gràfica. [Descarregar](https://gluonhq.com/products/scene-builder/) |
| ![Net Beans](/img/uf12/Net_Beans.jpg) | Entorn de desenvolupament integrat (IDE) lliure que es pot configurar per a integrar les llibreries de JavaFX i interconnectar-lo amb Scene Builder. [Descarregar](https://netbeans.apache.org/front/main/download/nb25/) |
| ![JavaFX](/img/uf12/JavaFX.jpg) | Biblioteca Java per a crear i desplegar aplicacions amb interfícies gràfiques (GUI). Es pot construir amb codi Java o arxius FXML. [Descarregar](https://gluonhq.com/products/javafx/) |
| ![Java JDK FX](/img/uf12/Java_JDK_FX.jpg) | Versió del JDK preparada per a JavaFX. [Descarregar](https://www.azul.com/downloads/?package=jdk-fx#zulu) |

---

## 3. Configuració

### 3.1. Verificacions i instal·lacions

- Per a comprovar la versió de **NetBeans** instal·lada, anirem al menú **`Help` → `About`**. Si no tenim una versió recent (actualment la 25), caldria reinstal·lar-la.

- Per a instal·lar **Scene Builder**:
  1. Accedir a la [web oficial](https://gluonhq.com/products/scene-builder/).
  2. Descarregar l'instal·lador corresponent al sistema operatiu.
  3. Executar l'instal·lador per a completar la instal·lació.

---

### 3.1. Verificacions i instal·lacions

- Per a instal·lar **JavaFX**
  1. Anar a la [web](https://gluonhq.com/products/javafx/).
  2. Descarregar l'arxiu `.zip` de JavaFX.
  3. Descomprimir l'arxiu en la carpeta on tenim Java.

- Per a instal·lar **Java JDK FX**
  1. Anar a la [web](https://www.azul.com/downloads/?package=jdk-fx#zulu).
  2. Buscar l'última versió **(Java 23)**, i descarrega el **Java Package JDK FX** adequat per al teu sistema operatiu i arquitectura.
  3. Descomprimix-lo en la carpeta on tenim Java.
     • Windows: `C:\Arxius de programa\Java\`
     • Linux: `usr/lib/jvm`
  4. Opcionalment, canviar-li el nom a `jdk-23-javafx` per a facilitar la identificació.

---

### 3.2. Instal·lar el plugin JavaFX

Anirem a activar i configurar el plugin de JavaFX.

- Ens dirigim a `Tools` → `Options` → `Java` → `JavaFX`.
- Seguirem els passos que ens va indicant.

<div style="border: 6px solid rgb(240, 102, 61); max-width: 50%; margin: 0 auto; text-align: center;">
    <img :src="$withBase('/img/uf12/tools_javafx.jpg')" style="max-width: 100%; height: auto;" alt="Esquema d'herència">
</div>

---

### 3.3. Connectar Scene Builder

Quan polsem [Finish] el sistema ens mostrarà un avis indicant-nos que ha detectat i connectat Scene Builder.

D'aquesta manera NetBeans detectarà on està l'executable i farà ús d'aquest en el moment de la edició.

<div style="border: 6px solid rgb(240, 102, 61); max-width: 70%; margin: 0 auto; text-align: center;">
    <img :src="$withBase('/img/uf12/tools_javafx2.jpg')" style="max-width: 100%; height: auto;" alt="Esquema d'herència">
</div>

---

### 3.4. Incloure la llibreria de JavaFX

El primer que haurem de fer és incloure la llibreria de JavaFX en les llibreries que utilitza NetBeans.

- Ens dirigim a `Tools` → `Libraries` → `New Library`
- Li donem nom Library Name: "JavaFX", acceptem i polsem `Add JAR/Folder`

<div style="display: flex; justify-content: center; gap: 20px;">

  <div style="border: 6px solid rgb(240, 102, 61); max-width: 13%; text-align: center;">
    <img :src="$withBase('/img/uf12/Tools_Libraries.jpg')" style="max-width: 100%; height: auto;" alt="Imatge 1">
  </div>

  <div style="border: 6px solid rgb(240, 102, 61); max-width: 30%; text-align: center;">
    <img :src="$withBase('/img/uf12/nom_javaFX.jpg')" style="max-width: 100%; height: auto;" alt="Imatge 2">
  </div>

</div>

---

### 3.4. Incloure la llibreria de JavaFX

- Busquem la carpeta de JavaFX que hem descomprimit
- Accedirem a la subcarpeta *lib*
- Seleccionem els arxius (són tots .jar) i polsem `Add JAR/Folder`.
- Polsem `OK`

<div style="display: flex; justify-content: center; gap: 20px;">

  <div style="border: 6px solid rgb(240, 102, 61); max-width: 33%; text-align: center;">
    <img :src="$withBase('/img/uf12/ruta_lib.jpg')" style="max-width: 100%; height: auto;" alt="Imatge 1">
  </div>

  <div style="border: 6px solid rgb(240, 102, 61); max-width: 30%; text-align: center;">
    <img :src="$withBase('/img/uf12/llibreries_importades.jpg')" style="max-width: 100%; height: auto;" alt="Imatge 2">
  </div>

</div>

---

### 3.5. Crear la plataforma

 Per raons de simplicitat, anem a optar per la categoria de projectes ***Java with Ant***. Açò ens portarà a haver de configurar una Plataforma per a desenvolupar projectes de JavaFX.

- Ens dirigirem a `Tools` → `Java Platform`
- Polsarem `AddPlatform`. En la següent pantalla no modificarem cap opció.
- Finalment triarem la carpeta que hem descarregat *jdk-23.02-javafx*.

<div style="display: flex; justify-content: center; gap: 20px;">

  <div style="border: 6px solid rgb(240, 102, 61); max-width: 33%; text-align: center;">
    <img :src="$withBase('/img/uf12/java_platform_manager.jpg')" style="max-width: 100%; height: auto;" alt="Imatge 1">
  </div>

  <div style="border: 6px solid rgb(240, 102, 61); max-height: 70%; text-align: center;">
    <img :src="$withBase('/img/uf12/add_platform.jpg')" style="width: auto; height: 100%;" alt="Imatge 2">
  </div>

  <div style="border: 6px solid rgb(240, 102, 61); max-width: 30%; text-align: center;">
    <img :src="$withBase('/img/uf12/seleccionar_javafx_platform.jpg')" style="max-width: 100%; height: auto;" alt="Imatge 3">
  </div>

</div>

---

### 3.5. Crear la plataforma

- Seleccionarem un nom significatiu per a la plataforma i finalitzarem la creació.

<div style="display: flex; justify-content: center; gap: 20px;">

  <div style="border: 6px solid rgb(240, 102, 61); max-width: 50%; text-align: center;">
    <img :src="$withBase('/img/uf12/nom_javafx_platform.jpg')" style="max-width: 100%; height: auto;" alt="Imatge 3">
  </div>

</div>

---

<div style="margin-top: 80px;"> <!-- Aquest div fa que tot quede més baix -->
</div>

## 4. Creació d'un projecte

### 4.1. Configuració

- Per a crear un nou projecte farem com sempre: `File` → `New Project`
- A continuació, configurarem el tipus de projecte.
  - Seleccionarem la Categoria *Java with Ant* i dins d'aquesta JavaFX.
  - En **Projects** triarem *JavaFX FXML Application* i polsarem `Next`.
  - Anomenem el projecte i seleccionem la plataforma que hem creat.

<div style="display: flex; justify-content: center; gap: 100px;">

  <div style="border: 6px solid rgb(240, 102, 61); max-height: 60%; text-align: center;">
    <img :src="$withBase('/img/uf12/nou_projecte.jpg')" style="width: auto; height: 100%;" alt="Imatge 3">
  </div>

  <div style="border: 6px solid rgb(240, 102, 61); max-height: 60%; text-align: center;">
    <img :src="$withBase('/img/uf12/nou_projecte_nom.jpg')" style="width: auto; height: 100%;" alt="Imatge 3">
  </div>

</div>

---

### 4.1. Configuració

- Una vegada tenim el projecte creat hem d'afegir la llibreria que hem creat de JavaFX.
  - Ens situarem en la carpeta Libraries i polsarem botó dret.
  - Seleccionarem l'opció `Add Library`.
  - Cercarem la llibreria JavaFX i polsarem `Add Library`. Veurem com s'ha incorporat el conjunt de llibreries.

Podem fer una prova executant la classe principal.

---

### 4.1. Configuració

<div style="margin-top: 80px;"> <!-- Aquest div fa que tot quede més baix -->
</div>

<div style="display: flex; justify-content: center; gap: 20px;">

  <div style="border: 6px solid rgb(240, 102, 61); max-height: 50%; text-align: center;">
    <img :src="$withBase('/img/uf12/add_library.jpg')" style="width: auto; height: 100%;" alt="Imatge 3">
  </div>

  <div style="border: 6px solid rgb(240, 102, 61); max-height: 90%; text-align: center;">
    <img :src="$withBase('/img/uf12/add_javaFX.jpg')" style="width: auto; height: 100%;" alt="Imatge 3">
  </div>

  <div style="border: 6px solid rgb(240, 102, 61); max-height: 90%; text-align: center;">
    <img :src="$withBase('/img/uf12/run_file.jpg')" style="width: auto; height: 100%;" alt="Imatge 3">
  </div>

  <div style="border: 6px solid rgb(240, 102, 61); max-height: 50%; text-align: center;">
    <img :src="$withBase('/img/uf12/run.jpg')" style="width: auto; height: 100%;" alt="Imatge 3">
  </div>

</div>

---

### 4.2. Estructura

El nostre projecte està dividit en tres parts.

**VISTA (FXMLDocument.fxml)**
Es tracta d'un arxiu en format fxml. Si polsem botó dret i Editar verem el contingut. Si fem doble clic s'obrirà la visualització en Scene Builder on podrem dibuixar la part gràfica
amb contenidors i objectes gràfics.

**CONTROLADOR(FXMLDocumentController.java)**
Al controlador, utilitzant les classes de JavaFX, programarem els mecanismes mitjançant els quals interactuarem tant amb la vista com amb el programa. Aquesta classe l'haurem d'identificar a Scene Builder. Crearem els mètodes que gestionen els esdeveniments.

**PROGRAMA(programa.java)**
On desenvoluparem la nostra lògica.
Utilitzarem els mètodes GET i SET dels objectes gràfics.

---

## 5. Scene Builder

### 5.1. Entorn

Si obrim l'arxiu *FXMLDocument.fxml* (doble clic) se'ns obrirà Scene Builder on podrem, d'una manera gràfica, fer canvis sobre la interfície.

<div style="display: flex; justify-content: center; gap: 0px;">
  <div style="border: 6px solid rgb(240, 102, 61); max-height: 100%; width: 55%; text-align: center;">
    <img :src="$withBase('/img/uf12/Scene_builder_editor.jpg')" style="width: 100%; height: 100%;" alt="Imatge 3">
  </div>
</div>

---

### 5.2. Secció Library

<div style="display: flex; gap: 50px">

<div style="flex: 1; padding: 10px; text-align: justify;">

  En el panell dret de Scene Builder es pot trobar aquesta secció que engloba diversos apartats com: 
  Contenidors, Controls, Menú, etc. És a dir, els elements gràfics que es poden afegir a la interfície gràfica.

  Dins de tots aquests apartats cal destacar <strong>Contenidors (Layouts)</strong>, on es troben els diferents tipus de 
  contenidors que permeten organitzar els elements que es vulguen afegir al disseny, i <strong>Controls</strong>, que conté 
  els elements més comuns de la majoria de les interfícies gràfiques.

</div>

<div style="flex: 0.6; padding:10px; ">

<div style="border: 6px solid rgb(240, 102, 61); width: 80%; text-align: center;">
    <img :src="$withBase('/img/uf12/panel_elements.jpg')" style="max-width: 100%; height: auto;" alt="Panell d'elements">
  </div>

</div>
</div>

---

### 5.2. Secció Library

<div style="display: flex; gap: 50px">

<div style="flex: 0.8; padding: 10px; text-align: justify;">

  **Per a afegir un element al disseny, tan sols has d'arrossegar-lo** cap al lloc desitjat, tenint en compte que els elements com els controls sempre han de col·locar-se dins d'un element de tipus contenidor.

  Per defecte es crea un contenidor general de tipus **AnchorPane**, que són els que permeten col·locar elements de manera bastant lliure, ancorant els elements respecte a la posició d'uns altres.


</div>

<div style="flex: 0.8; padding:10px;">

  <div style="margin-top: 70px;"> <!-- Aquest div fa que tot quede més baix -->
  </div>

<div style="border: 6px solid rgb(240, 102, 61); width: 95%; text-align: center;">
    <img :src="$withBase('/img/uf12/Scene_builder_editor_afegir_element.jpg')" style="max-width: 100%; height: auto;" alt="Panell d'elements">
  </div>

</div>
</div>

---

### 5.3. Secció Documents

<div style="display: flex; gap: 50px">

<div style="flex: 0.9; padding: 10px; text-align: justify;">

  Aquesta secció només inclou els apartats **Hierarchy** (jerarquia) i **Controller**.

  En l'apartat **Hierarchy** pots veure de manera detallada quins elements estan continguts dins d'uns altres, i pot resultar de bastant utilitat quan desitges reorganitzar els elements dins dels diferents contenidors que tingues en el disseny.

  En aquest exemple dins del contenidor principal (AnchorPane) s'ha col·locat un contenidor vertical (VBox) dins del qual hi ha 2 contenidors horitzontals (HBox) amb alguns controls.

</div>

<div style="flex: 0.6; padding:10px;">

<div style="margin-top: 90px;"> <!-- Aquest div fa que tot quede més baix -->
</div>

<div style="border: 6px solid rgb(240, 102, 61); width: 95%; text-align: center;">
    <img :src="$withBase('/img/uf12/hierarchy.jpg')" style="max-width: 100%; height: auto;" alt="Panell d'elements">
  </div>

</div>
</div>

---

### 5.3. Secció Documents

<div style="display: flex; gap: 50px">

<div style="flex: 1; padding: 10px; text-align: justify;">

  En l'apartat Controller pots veure i modificar el nom de la classe que farà les funcions de controladora d'aquest arxiu FXML.

  També mostra els identificadors que s'han assignat als elements del disseny que el tinguen.

  S'ha de tindre en compte que si canvies el nom de la classe controladora des de NetBeans o la mous a un altre paquet de fonts, hauràs de canviar les noves dades en aquest apartat.

</div>

<div style="flex: 0.6; padding:10px;">

<div style="margin-top: 0px;"> <!-- Aquest div fa que tot quede més baix -->
</div>

<div style="border: 6px solid rgb(240, 102, 61); width: 76%; text-align: center;">
    <img :src="$withBase('/img/uf12/Controller.jpg')" style="max-width: 100%; height: auto;" alt="Panell d'elements">
  </div>

</div>
</div>

---

### 5.4. Zona de Disseny

<div style="display: flex; gap: 50px">

<div style="flex: 1; padding: 10px; text-align: justify;">

  En la part central es troba la zona de disseny on es poden anar col·locant els diferents elements de la llibreria.
  
  Si es selecciona un determinat element es pot modificar la seua grandària estirant amb el ratolí des dels indicadors blaus de les cantonades o laterals.

  Obrint el menú contextual podràs trobar diverses accions que podràs realitzar sobre aqueix element.
  
</div>

<div style="flex: 0.7; padding:10px;">

<div style="margin-top: 0px;"> <!-- Aquest div fa que tot quede més baix -->
</div>

<div style="border: 6px solid rgb(240, 102, 61); width: 80%; text-align: center;">
  <img :src="$withBase('/img/uf12/zona_disseny.jpg')" style="max-width: 100%; height: auto;" alt="Panell d'elements">
</div>

</div>
</div>

---

### 5.5. Zona inspector

<div style="display: flex; gap: 50px">

<div style="flex: 1; padding: 10px; text-align: justify;">

El inspector conté els apartats **Properties**, **Layout**, i **Code**.

En l'apartat **Properties** podràs consultar i modificar els valors assignats a les propietats que ofereix l'element que es trobe seleccionat. Segons el tipus d'element que siga, es mostraran diferents propietats.

Ací es podrà canviar, per exemple, el text d'un element, el seu color, tipus de font, alineacions, o assignar-li un estil CSS a JavaFX.
  
</div>

<div style="flex: 0.7; padding:10px;">

<div style="margin-top: 0px;"> <!-- Aquest div fa que tot quede més baix -->
</div>

<div style="border: 6px solid rgb(240, 102, 61); width: 80%; text-align: center;">
  <img :src="$withBase('/img/uf12/inspectorproperties.jpg')" style="max-width: 100%; height: auto;" alt="Panell d'elements">
</div>

</div>
</div>

---

### 5.5. Zona inspector

<div style="display: flex; gap: 50px">

<div style="flex: 1; padding: 10px; text-align: justify;">

L'apartat Layout permet consultar i modificar els aspectes relacionats amb la distribució de l'element en pantalla. És a dir, ací podràs assignar marges, grandàries, escales, etc.

En l'apartat Anchor Pane Constraints és podran definir els marges respecte al pare on es troba l'element.

</div>

<div style="flex: 0.7; padding:10px;">

<div style="margin-top: 0px;"> <!-- Aquest div fa que tot quede més baix -->
</div>

<div style="border: 6px solid rgb(240, 102, 61); width: 80%; text-align: center;">
  <img :src="$withBase('/img/uf12/isnpector_layout.jpg')" style="max-width: 100%; height: auto;" alt="Panell d'elements">
</div>

</div>
</div>

---

### 5.5. Zona inspector

<div style="display: flex; gap: 50px">

<div style="flex: 0.9; padding: 10px; text-align: justify;">

L'apartat **Code** permet configurar una part del codi. Es poden codificar els events de teclat, ratolí, touch (per a pantalles tàctils), etc. que després es gestionaran des de l'arxiu Controller.

</div>

<div style="flex: 0.5; padding:10px;">

<div style="margin-top: 0px;"> <!-- Aquest div fa que tot quede més baix -->
</div>

<div style="border: 6px solid rgb(240, 102, 61); width: 80%; text-align: center;">
  <img :src="$withBase('/img/uf12/inspector_code.jpg')" style="max-width: 100%; height: auto;" alt="Panell d'elements">
</div>

</div>
</div>

---

### 5.6. Make Controller

<div style="display: flex; gap: 50px">

<div style="flex: 0.9; padding: 10px; text-align: justify;">

Després de qualsevol canvi que es realitze en l'apartat Code, i després de guardar els canvis de l'arxiu en Scene Builder, s'ha d'actualitzar la informació en la classe controladora de NetBeans.

Per a fer-ho s'hi ha d'utilitzar l'opció **`Make Controller`** del menú contextual de l'arxiu FXML en NetBeans.

És a dir, si s'indica un nom d'un mètode per a una acció, per exemple, quan l'usuari moga el ratolí dins del botó, s'ha de seleccionar Make Controller perquè es declare aquest mètode en el controlador.

</div>

<div style="flex: 0.5; padding:10px;">

<div style="margin-top: 60px;"> <!-- Aquest div fa que tot quede més baix -->
</div>

<div style="border: 6px solid rgb(240, 102, 61); width: 90%; text-align: center;">
  <img :src="$withBase('/img/uf12/make_controller.jpg')" style="max-width: 100%; height: auto;" alt="Panell d'elements">
</div>
<div style="margin-top: 20px;"> <!-- Aquest div fa que tot quede més baix -->
</div>
<div style="border: 6px solid rgb(240, 102, 61); width: 90%; text-align: center;">
  <img :src="$withBase('/img/uf12/make_controller2.jpg')" style="max-width: 100%; height: auto;" alt="Panell d'elements">
</div>

</div>
</div>

---

### 5.6. Make Controller

Cal recordar prémer la tecla Intro després d'escriure el nom de l'identificador o d'un mètode perquè es tinga en compte aquest nom en guardar el document FXML des de Scene Builder.

<div style="display: flex; justify-content: center; gap: 0px;">
  <div style="border: 6px solid rgb(240, 102, 61); width: 45%; text-align: center;">
    <img :src="$withBase('/img/uf12/make_controller_codi.jpg')" style="max-width: 100%; height: auto;" alt="Panell d'elements">
  </div>
</div>

---

<!-- _class: final -->
<!-- _header: <br> -->
<!-- _footer: <br> -->
<!-- _paginate: skip -->
