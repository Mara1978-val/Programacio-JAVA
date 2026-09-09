# 2. Arquitectura: MVC i Separació per Capes

Per a no veure la interfície com una simple "pantalla", és important entendre que una aplicació sol estar dividida en parts lògiques per organitzar el codi de manera eficient.

## El Patró MVC (Model-Vista-Controlador)

El patró MVC és la base per entendre aquesta separació fonamental:
![mvc](/img/uf12/interficies3.png)

* **La Vista:** És la part visual. S'encarrega de mostrar la informació a la persona usuària i de recollir les seues accions (clics, text introduït, etc.).
* **El Controlador:** Actua com a cervell o coordinador. Rep les accions de l'usuari des de la vista, interpreta què s'ha demanat i activa la lògica necessària del model.
* **El Model:** Representa les dades i la lògica del domini (les regles de negoci). Per exemple, en una app de biblioteca, el model gestiona llibres, préstecs i usuaris.

(Tot i que hui en dia s'utilitzen variants més complexes, l'MVC continua sent l'exemple perfecte per explicar l'organització d'una aplicació).

---

## Front-end i Back-end

En el desenvolupament modern, especialment en entorns web, l'arquitectura evoluciona cap a una separació clara en dues grans capes:

![fe-be](/img/uf12/interficies4.png)
### Front-end
És la part que veu i utilitza la persona usuària (la "Vista" portada al límit).
* Inclou la presentació visual, la navegació, els components de pantalla i part de la lògica d’interacció.
* Es construeix habitualment amb HTML, CSS i JavaScript, acompanyats de frameworks moderns (React, Angular, Vue).
* Permet tindre perfils professionals especialitzats en UI/UX.

### Back-end
És la part interna del sistema que no veu l'usuari.
* Gestiona la lògica de negoci, la persistència (bases de dades), la seguretat i l’autenticació.
* Processa dades i exposa serveis o APIs (Interfícies de Programació d'Aplicacions).
* S'utilitzen llenguatges com Java (Spring Boot), C#, Python, PHP o Node.js.

**Avantatge clau:** Permet reutilitzar la mateixa lògica per a diferents clients (una web, una app mòbil, etc.) sense reescriure el codi intern.

