---
layout: doc
title: "Solucions 26/27"
outline: false
---

<script setup>
import { useData } from 'vitepress'
const { theme } = useData()
const indice = theme.value.indiceSolucions
</script>

# 🔑 Solucions 26/27 {.page-title}

::: danger Aquesta adreça és només per al professorat
Cada unitat té la seua **pròpia adreça privada**, independent de les altres.
Aquesta pàgina és l'única que les coneix totes.

- Per a compartir una solució amb l'alumnat, dona-li **l'enllaç d'eixa unitat**.
  Qui el reba no pot arribar ni a les altres solucions ni a aquesta pàgina: cada
  unitat és un lloc separat i el seu codi font no menciona cap altra adreça.
- **No compartisques mai aquesta adreça.**
- Per a rotar la ruta d'una unitat, canvia el seu codi en
  `soluciones/_shared/rutas.ts` i torna a desplegar.
:::

::: tip Per què s'obrin en una pestanya nova
Cada unitat és un lloc VitePress independent. El router de VitePress intercepta
els enllaços del mateix domini i intenta resoldre'ls amb el mapa de rutes del
lloc actual —que no coneix les altres unitats—, així que sense `target="_blank"`
el clic acabaria en un 404. **No lleves l'atribut.**
:::

## Índex

<table>
  <thead>
    <tr><th>Unitat</th><th>Títol</th><th>Solucions</th></tr>
  </thead>
  <tbody>
    <tr v-for="u in indice" :key="u.clave">
      <td><strong>{{ u.unidad }}</strong></td>
      <td>{{ u.titulo }}</td>
      <td>
        <span v-for="(p, i) in u.pagines" :key="p.slug">
          <span v-if="i > 0"> · </span><a :href="p.url" target="_blank" rel="noopener">{{ p.text }} ↗</a>
        </span>
      </td>
    </tr>
  </tbody>
</table>
