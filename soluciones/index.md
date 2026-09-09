---
layout: doc
title: Solucions 26/27
outline: [2, 3]
---

# 🔑 Solucions 26/27 {.page-title}

::: danger Material del professorat — no compartir aquesta adreça
Aquestes pàgines viuen en una ruta privada dins del lloc del temari. El lloc de
l'alumnat **no les enllaça ni les coneix**: no apareixen en el seu menú, ni en el
seu mapa de rutes, ni en `hashmap.json`. L'única cosa que les separa d'un alumne
és aquesta adreça.

No l'enllaces des de cap pàgina del curs ni la pengeu en l'aula virtual. Per a
rotar-la, canvia `RUTA_PRIVADA` en `soluciones/.vitepress/config/ruta.ts` i torna
a desplegar.
:::

<p><a href="/programacion/">← Tornar al temari</a></p>

## Índex de solucions

| Unitat | Títol | Solució |
| :---: | :--- | :--- |
| **UF2** | Representació d'Algoritmes | [Solucions](/uf2/Solucions) |
| **UF3.2** | Introducció a la Programació II | [Solucions](/uf3-2/14-solucions) |
| **UF4** | Estructures repetitives | [Solucions](/uf4/8-solucions) |
| **UF4** | Estructures repetitives | [Solució de la tasca addicional](/uf4/9-tasca-adicional-solucio) |
| **UF5.1** | Estructures de Dades Dinàmiques I | [Solucions](/uf5-1/13-solucions) |
| **UF5.2** | Estructures de Dades Dinàmiques II | [Solucions](/uf5-2/5-solucions) |
| **UF6** | Funcions | [Solucions](/uf6/11-solucions) |
| **UF7** | Programació Orientada a Objectes I | [Solucions](/uf7/15-solucions) |
| **UF8** | Programació Orientada a Objectes II | [Solucions](/uf8/9-solucions) |
| **UF9** | Excepcions | [Solucions](/uf9/8-solucions) |
| **UF10** | Persistència de dades I: Fitxers | [Solucions](/uf10/6-solucions) |
| **UF11** | Persistència de dades II: Bases de dades | [Solucions](/uf11/13-solucions) |

## Unitats sense solucions

UF1, UF3.1, UF12 no portaven fitxer de solucions en el seu repositori d'origen.

## Com es construïx

Aquest és un **segon lloc VitePress** del mateix projecte, amb el mateix tema:
els continguts es veuen igual que en el temari (pestanyes, diagrames, mode fosc).

```bash
npm run dev:soluciones     # servidor local
npm run build              # construïx el temari i, després, aquestes solucions
```

Els fitxers font estan en `soluciones/<uf>/`, **fora de `src/`**, de manera que
no poden colar-se en el lloc de l'alumnat ni per error.
