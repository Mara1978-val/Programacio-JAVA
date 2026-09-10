---
layout: doc
sidebar: true
outline: [2, 3]
---

# UF11. Accés a bases de dades

<!--@include: @/_partials/info-modul.md-->

::: info Síntesi de la unitat
Aquesta unitat està dissenyada per introduir-vos als conceptes bàsics d’accés a bases de dades des d’un programa. Aprendreu com connectar-vos a una base de dades, executar consultes per obtenir, inserir, modificar i eliminar dades, i gestionar la comunicació amb el sistema gestor de bases de dades de manera segura i eficient. També veureu les operacions bàsiques amb SQL i com manejar possibles errors durant l’accés a les dades.
:::

## 📋 Objectius del Curs {.animate-title}

::: tip Objectius cuberts i relació amb RA

Aquesta unitat didàctica té com a objectiu principal connectar el món de la programació amb el de la gestió de dades. L'alumnat aprendrà a interactuar amb bases de dades per emmagatzemar, recuperar i manipular informació de manera persistent.

- Objectiu 11.1: Repassar i consolidar els coneixements del llenguatge **SQL**, incloent-hi les sentències de consulta, modificació, inserció i esborrat.
- Objectiu 11.2: Identificar les característiques i mètodes d'accés a **sistemes gestors de bases de dades relacionals**.
- Objectiu 11.3: Programar la **connexió** entre un programa Java i una base de dades, utilitzant **JDBC**.
- Objectiu 11.4: Escriure codi per **emmagatzemar, recuperar, modificar i esborrar informació** de bases de dades.
- Objectiu 11.5: Desenvolupar aplicacions que mostrin i gestionin la informació continguda en una base de dades.
- Objectiu 11.6: Comprendre la **navegabilitat** i la **concurrència** en l'accés a bases de dades per a gestionar múltiples peticions de manera segura i eficient.

---

| Criteri d'Avaluació | Objectius Didàctics |
| :--- | :--- |
| **RA09.a**: S'han identificat les característiques i mètodes d'accés a sistemes gestors de bases de dades relacionals. | **Objectiu 11.2** |
| **RA09.b**: S'han programat connexions amb bases de dades. | **Objectiu 11.3** |
| **RA09.c**: S'ha escrit un codi per a emmagatzemar informació en bases de dades. | **Objectiu 11.4** |
| **RA09.d**: S'han creat programes per a recuperar i mostrar informació emmagatzemada en bases de dades. | **Objectiu 11.4, Objectiu 11.5** |
| **RA09.e**: S'han efectuat esborrats i modificacions sobre la informació emmagatzemada. | **Objectiu 11.4** |
| **RA09.f**: S'han creat aplicacions que mostren la informació emmagatzemada en bases de dades. | **Objectiu 11.5** |
| **RA09.g**: S'han creat aplicacions per a gestionar la informació present en bases de dades. | **Objectiu 11.5** |

:::

## ⚙ Metodologia {.animate-title}

::: tip Aprenentatge Actiu
Aquest curs segueix una metodologia d'aprenentatge actiu, combinant teoria i pràctica:

- 🎯 **Objectius clars** per a cada unitat
- 💡 **Exemples pràctics** i casos d'ús reals
- 🔄 **Exercicis interactius** per reforçar l'aprenentatge
- 📈 **Avaluació contínua** del progrés
:::

## 🔗 Recursos addicionals {.animate-title}

- [**API Java**](https://docs.oracle.com/javase/8/docs/api/)  
- [**Manual oficial de Java (Oracle)**](https://docs.oracle.com/javase/tutorial/)  
- [**Compilador Java Online**](https://pythontutor.com/java.html#mode=edit)  
Compilador i debugger visual pas a pas, amb suport per a Java, Python, C i C++;
- [**pildorasinformaticas (YouTube)**](https://www.youtube.com/playlist?list=PLU8oAlHdN5BktAXdEVCLUYzvDyqRQJ2lk)  
Canal molt conegut en espanyol amb tutorials clars sobre Java i programació orientada a objectes.
- [**w3schools Java Tutorial**](https://www.w3schools.com/java/)  
Guia interactiva i senzilla per començar amb Java des del navegador.
