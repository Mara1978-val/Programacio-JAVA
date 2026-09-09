# 📝 Exercicis: Interfícies i Arquitectura Java

Aquest qüestionari està dissenyat per a repassar els conceptes clau de la unitat seguint els criteris d'avaluació oficials.

---

### 1. Possibilitats d'Entrada/Eixida i Llibreries
**RA: S'han reconegut les possibilitats d'entrada/eixida del llenguatge i les llibreries associades.**

Quina llibreria de Java permet una separació neta entre el disseny visual (format XML) i la lògica de programació (codi Java)?

::: details 👁️ Veure solució
**Resposta correcta:** **JavaFX (mitjançant fitxers FXML).**

**Explicació:** A diferència de Swing, on la interfície es programa directament en codi Java, JavaFX permet definir la jerarquia de components en un fitxer `.fxml`, facilitant el manteniment i el treball en equip entre dissenyadors i programadors.
:::

---

### 2. Creació d'Interfícies Gràfiques Simples
**RA: S'han utilitzat les ferramentes de l'entorn de desenvolupament per a crear interfícies gràfiques d'usuari simples.**

Dins de la jerarquia de components de Java, com anomenem els elements que s'encarreguen d'organitzar la posició de la resta (com `VBox`, `HBox` o `GridPane`)?

::: details 👁️ Veure solució
**Resposta correcta:** **Components de Contenidor o Layout Managers.**

**Explicació:** Aquests components no mostren informació per si mateixos, sinó que defineixen les regles de disposició (en línia, en graella, en columnes) per a la resta de components de la interfície.
:::

---

### 3. Programació de Controladors d'Esdeveniments
**RA: S'han programat controladors d'esdeveniments.**

Quin mecanisme utilitza Java per a "escoltar" quan un usuari interacciona amb un component d'acció (per exemple, fent clic en un botó)?

::: details 👁️ Veure solució
**Resposta correcta:** **Event Listeners (Escoltadors d'esdeveniments).**

**Explicació:** El controlador implementa una interfície o mètode que s'executa automàticament quan es detecta l'esdeveniment (clic, polsar tecla, etc.). En Java modern, això se sol gestionar mitjançant **expressions Lambda**.
:::

---

### 4. Arquitectura i Flux de Dades (MVC)
**RA: S'han escrit programes que utilitzen interfícies gràfiques per a l'entrada i eixida d'informació.**

En el patró MVC aplicat a Java, quina és la responsabilitat de la capa "Model"?

::: details 👁️ Veure solució
**Resposta correcta:** **Gestionar les dades i la lògica de negoci.**

**Explicació:** El Model representa l'estat de l'aplicació (per exemple, una classe `Client` o una llista de `Productes`) i les operacions que es poden fer amb elles, independentment de com es mostren en pantalla.
:::



---

### 5. Panorama Modern: APIs i Serveis
**RA: S'han reconegut les possibilitats d'entrada/eixida en entorns web.**

Quan utilitzem Spring Boot per a exposar dades que seran consumides per una interfície Web moderna, quin tipus d'arquitectura estem utilitzant?

::: details 👁️ Veure solució
**Resposta correcta:** **API REST.**

**Explicació:** Java (Back-end) actua com a proveïdor de dades (normalment en format JSON), permetent que qualsevol Front-end (React, Vue o una App Mòbil) puga mostrar la informació sense dependre de la tecnologia del servidor.
:::