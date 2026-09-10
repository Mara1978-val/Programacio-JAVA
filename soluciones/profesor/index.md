---
layout: doc
title: "Índex del professorat 26/27"
outline: false
---

<script setup>
import { useData } from 'vitepress'
const { theme } = useData()
const indice = theme.value.indiceProfesorado
</script>

# 🗝️ Índex del professorat 26/27 {.page-title}

Punt d'entrada al curs: des d'ací s'arriba al temari de l'alumnat en els dos
idiomes i a les solucions de cada unitat.

::: danger Aquesta adreça és només per al professorat
Cada unitat té la seua **pròpia adreça privada** per a les solucions,
independent de les altres. Aquesta pàgina és l'única que les coneix totes.

- Per a compartir una solució amb l'alumnat, dona-li **l'enllaç d'eixa unitat**.
  Qui el reba no pot arribar ni a les altres solucions ni a aquesta pàgina: cada
  unitat és un lloc separat i el seu codi font no menciona cap altra adreça.
- **No compartisques mai aquesta adreça.**
- Per a rotar la ruta d'una unitat, canvia el seu codi en
  `soluciones/_shared/rutas.ts` i torna a desplegar.

Els enllaços al temari sí que són públics: són les mateixes pàgines que veu l'alumnat.
:::

::: tip Per què s'obrin en una pestanya nova
Cada unitat és un lloc VitePress independent. El router de VitePress intercepta
els enllaços del mateix domini i intenta resoldre'ls amb el mapa de rutes del
lloc actual —que no coneix ni el temari ni les altres unitats—, així que sense
`target="_blank"` el clic acabaria en un 404. **No lleves l'atribut.**
:::

## Unitats

<table class="indice-profesorado">
  <thead>
    <tr>
      <th>UF</th>
      <th>Temari · valencià</th>
      <th>Temario · castellano</th>
      <th>Solucions</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="u in indice" :key="u.clave">
      <td class="uf"><strong>{{ u.icono }} {{ u.unidad }}</strong></td>
      <td><a :href="u.ca.url" target="_blank" rel="noopener">{{ u.ca.text }} ↗</a></td>
      <td><a :href="u.es.url" target="_blank" rel="noopener">{{ u.es.text }} ↗</a></td>
      <td>
        <template v-if="u.soluciones.length">
          <span v-for="(s, i) in u.soluciones" :key="s.url">
            <span v-if="i > 0"> · </span><a :href="s.url" target="_blank" rel="noopener">🔑 {{ s.ca }} ↗</a>
          </span>
        </template>
        <span v-else class="sin-solucions">—</span>
      </td>
    </tr>
  </tbody>
</table>

<style scoped>
.indice-profesorado {
  display: table;
  width: 100%;
}
/* El tema justifica el text del contingut; en columnes estretes deixa buits. */
.indice-profesorado th,
.indice-profesorado td {
  text-align: left;
  vertical-align: top;
}
.indice-profesorado .uf {
  white-space: nowrap;
  width: 1%;
}
.indice-profesorado .sin-solucions {
  color: var(--vp-c-text-3);
}
</style>
