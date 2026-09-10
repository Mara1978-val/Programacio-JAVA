---
layout: doc
sidebar: true
outline: [2, 3]
---

# UF07. Programació Orientada a Objectes I

<!--@include: @/_partials/info-modul.md-->

::: info Síntesi de la unitat
Aquesta unitat està dissenyada per introduir-vos als conceptes fonamentals de la programació orientada a objectes. Aprendreu què són les classes i els objectes, com definir-los i utilitzar-los, així com la manera de crear i gestionar atributs i mètodes bàsics per organitzar el codi de forma estructurada i modular.
:::

## 📋 Objectius del Curs {.animate-title}

::: tip Objectius cuberts i relació amb RA

Aquesta unitat didàctica té com a objectiu principal introduir l'alumne en els conceptes fonamentals de la **programació orientada a objectes (POO)**.

- Objectiu 7.1: Comprendre els fonaments de la POO, distingint entre **classes** i **objectes**.
- Objectiu 7.2: Definir classes, incloent-hi la sintaxi, la seva estructura i els seus components bàsics.
- Objectiu 7.3: Definir **propietats** i **mètodes** per a una classe, i comprendre els diferents tipus d'accés o **visibilitat** (`public`, `private`, etc.).
- Objectiu 7.4: Utilitzar **constructors** per a inicialitzar els objectes d'una classe.
- Objectiu 7.5: Instanciar **objectes** a partir de classes pròpies i predefinides, i utilitzar els seus mètodes i propietats.
- Objectiu 7.6: Crear i utilitzar **mètodes estàtics**, i entendre la seva diferència amb els mètodes d'instància.
- Objectiu 7.7: Emprar la paraula clau **`this`** per a fer referència a l'objecte actual dins d'una classe.
- Objectiu 7.8: Crear **arrays d'objectes** per a gestionar col·leccions de dades complexes.
- Objectiu 7.9: Conèixer i utilitzar classes i llibreries d'objectes existents.

---

| Criteri d'Avaluació | Objectius Didàctics |
| :--- | :--- |
| **RA02.a**: S'han identificat els fonaments de la programació orientada a objectes. | **Objectiu 7.1** |
| **RA02.b**: S'han escrit programes simples. | **Objectiu 7.5** |
| **RA02.c**: S'han instanciat objectes a partir de classes predefinides. | **Objectiu 7.5** |
| **RA02.d**: S'han utilitzat mètodes i propietats dels objectes. | **Objectiu 7.5** |
| **RA02.e**: S'han escrit crides a mètodes estàtics. | **Objectiu 7.6** |
| **RA02.f**: S'han utilitzat paràmetres en la crida a mètodes. | **Objectiu 7.3, Objectiu 7.5** |
| **RA02.g**: S'han incorporat i utilitzat llibreries d'objectes. | **Objectiu 7.9** |
| **RA02.h**: S'han utilitzat constructors. | **Objectiu 7.4** |
| **RA02.i**: S'ha utilitzat l'entorn integrat de desenvolupament en la creació i compilació de programes simples. | *Aquest criteri s'aborda principalment en el Tema 3.1, però es consolida en aquesta unitat a l'hora de desenvolupar programes amb classes.* |
| **RA04.a**: S'ha reconegut la sintaxi, estructura i components típics d'una classe. | **Objectiu 7.2** |
| **RA04.b**: S'han definit classes. | **Objectiu 7.2** |
| **RA04.c**: S'han definit propietats i mètodes. | **Objectiu 7.3** |
| **RA04.d**: S'han creat constructors. | **Objectiu 7.4** |
| **RA04.e**: S'han desenvolupat programes que instancien i utilitzen objectes de les classes creades anteriorment. | **Objectiu 7.5** |
| **RA04.h**: S'han creat i utilitzat mètodes estàtics. | **Objectiu 7.6** |
| **RA04.i**: S'han creat i utilitzat conjunts i llibreries de classes. | **Objectiu 7.9** |

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
