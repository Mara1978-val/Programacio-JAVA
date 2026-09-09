# Desenvolupament d'Interfícies amb Java (Enfocament Tècnic)

El desenvolupament d'interfícies en Java ha evolucionat des de solucions locals d'escriptori cap a arquitectures distribuïdes i orientades a la web.

## 1. Evolució de la Tecnologia Java
* **Passat (Swing/AWT):** Manteniment de sistemes "legacy". Va establir les bases de la programació per esdeveniments.
* **Present d'Escriptori (JavaFX):** Separació de disseny (FXML) i lògica (Java).
* **Present Corporatiu (Spring Boot):** Java com a motor de dades (Back-end) per a interfícies web.

## 2. Arquitectura i Organització: L'enfocament Java
En Java, l'organització del codi és la clau per a l'escalabilitat:
* **Implementació del Patró MVC:** * **Model:** Classes Java (POJOs) i entitats que representen la base de dades.
    * **Vista:** Arxius FXML en JavaFX o plantilles HTML (Thymeleaf) en aplicacions web.
    * **Controlador:** Classes Java amb l'anotació `@Controller` o que implementen `Initializable` per gestionar la interacció.
* **Injecció de Dependències:** L'ús de frameworks com Spring permet que les capes estiguen desconnectades, facilitant el manteniment i les proves unitàries.



## 3. Components i Disseny: La Jerarquia d'Objectes
En Java, tot component és un objecte que hereta d'una classe base:
* **Jerarquia de Classes:** Tots els elements (botons, etiquetes) formen part d'una jerarquia (ex: `Node` en JavaFX o `JComponent` en Swing).
* **Gestió d'Esdeveniments (Listeners):** Java utilitza el model de delegació d'esdeveniments. Programem interfícies com `ActionListener` o utilitzem expressions Lambda per definir què passa quan es clica un botó.
* **Contenidors i Layouts:** Java no utilitza coordenades fixes (normalment), sinó "Layout Managers" (`BorderPane`, `GridPane`, `VBox`) que organitzen els components de manera automàtica i responsiva segons la mida de la finestra.



## 4. El Valor al Mercat Laboral
* Un perfil Java complet entén la connexió entre la interfície i els serveis de dades, garantint un sistema escalable i robust.