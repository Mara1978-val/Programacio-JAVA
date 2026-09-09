---
layout: doc
sidebar: true
outline: [2, 3]
---

# UF08. Programació Orientada a Objectes II

::: tip Informació del curs
**Autors:** Guillermo Garrido Portes / David Tur Sanmateu

**Any:** 2025

**Centre:** CEEDCV - Centre Específic d'Educació a Distància de la Comunitat Valenciana

![Logo CC](/img/logo-cc.png){logo}

:::

::: info Síntesi de la unitat
Aquesta unitat està dissenyada per aprofundir en els conceptes avançats de la programació orientada a objectes. Aprendreu les característiques de l’herència per reutilitzar i especialitzar codi, el polimorfisme per permetre que diferents classes responguen a un mateix missatge, l’abstracció per definir estructures generals que oculten detalls interns, i les interfícies per establir contractes comuns entre classes diverses. Aquests conceptes us ajudaran a desenvolupar programari més flexible i escalable.
:::

## 📋 Objectius del Curs {.animate-title}

::: tip Objectius cuberts i relació amb RA

Aquesta unitat didàctica té com a objectiu aprofundir en els pilars de la programació orientada a objectes (POO) per a la creació de jerarquies de classes robustes i reutilitzables.

Objectiu 8.1: Comprendre els conceptes d'**herència**, **superclasse** i **subclasse**, i la seva utilitat per a reutilitzar codi.
Objectiu 8.2: Dissenyar i implementar **jerarquies de classes**, aplicant l'herència per a crear relacions de tipus "és un" (per exemple, un `Cotxe` **és un** `Vehicle`).
Objectiu 8.3: Utilitzar els modificadors d'accés (com `final` i `abstract`) per a controlar l'herència de classes i mètodes.
Objectiu 8.4: Entendre com funcionen els **constructors** en les jerarquies d'herència i com cridar el constructor de la superclasse.
Objectiu 8.5: Implementar el concepte de **polimorfisme** mitjançant la sobrescriptura de mètodes (`@Override`) de la superclasse.
Objectiu 8.6: Identificar les característiques i els escenaris d'ús de les **classes abstractes** i les **interfícies**.
Objectiu 8.7: Emprar l'operador **`instanceof`** per a comprovar el tipus d'un objecte en temps d'execució.
Objectiu 8.8: Comentar i documentar el codi de les classes i les seves jerarquies per a millorar-ne la llegibilitat i el manteniment.
Objectiu 8.9: Crear classes i mètodes genèrics per a millorar la reutilització del codi i la seva flexibilitat.

---

| Criteri d'Avaluació | Objectius Didàctics |
| :--- | :--- |
| **RA04.i**: S'han creat i utilitzat conjunts i llibreries de classes. | *Aquest criteri es va veure en el tema anterior, però es reforça aquí amb la creació de jerarquies de classes i biblioteques pròpies.* |
| **RA06.f**: S'han creat classes i mètodes genèrics. | **Objectiu 8.9** |
| **RA07.a**: S'han identificat els conceptes d'herència, superclasse i subclasse. | **Objectiu 8.1** |
| **RA07.b**: S'han utilitzat modificadors per a bloquejar i forçar l'herència de classes i mètodes. | **Objectiu 8.3** |
| **RA07.c**: S'ha reconegut la incidència dels constructors en l'herència. | **Objectiu 8.4** |
| **RA07.d**: S'han creat classes heretades que sobreescriuen la implementació de mètodes de la superclasse. | **Objectiu 8.5** |
| **RA07.e**: S'han dissenyat i aplicat jerarquies de classes. | **Objectiu 8.2** |
| **RA07.f**: S'han provat i depurat les jerarquies de classes. | **Objectiu 8.2** |
| **RA07.g**: S'han realitzat programes que implementen i utilitzen jerarquies de classes. | **Objectiu 8.2, Objectiu 8.5** |
| **RA07.h**: S'ha comentat i documentat el codi. | **Objectiu 8.8** |
| **RA07.i**: S'han identificat i avaluat els escenaris d'ús d'interfícies. | **Objectiu 8.6** |
| **RA07.j**: S'han identificat i avaluat els escenaris d'utilització de l'herència i la composició. | **Objectiu 8.1** |

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
