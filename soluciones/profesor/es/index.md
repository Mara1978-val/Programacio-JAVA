---
layout: doc
title: "Índice del profesorado 26/27"
outline: false
---

<script setup>
import { useData } from 'vitepress'
const { theme } = useData()
const indice = theme.value.indiceProfesorado
</script>

# 🗝️ Índice del profesorado 26/27 {.page-title}

Punto de entrada al curso: desde aquí se llega al temario del alumnado en los
dos idiomas y a las soluciones de cada unidad.

::: danger Esta dirección es solo para el profesorado
Cada unidad tiene su **propia dirección privada** para las soluciones,
independiente de las demás. Esta página es la única que las conoce todas.

- Para compartir una solución con el alumnado, dale **el enlace de esa unidad**.
  Quien lo reciba no puede llegar ni a las otras soluciones ni a esta página:
  cada unidad es un sitio separado y su código fuente no menciona ninguna otra
  dirección.
- **No compartas nunca esta dirección.**
- Para rotar la ruta de una unidad, cambia su código en
  `soluciones/_shared/rutas.ts` y vuelve a desplegar.

Los enlaces al temario sí son públicos: son las mismas páginas que ve el alumnado.
:::

::: tip Por qué se abren en una pestaña nueva
Cada unidad es un sitio VitePress independiente. El router de VitePress
intercepta los enlaces del mismo dominio e intenta resolverlos con el mapa de
rutas del sitio actual —que no conoce ni el temario ni las otras unidades—, así
que sin `target="_blank"` el clic acabaría en un 404. **No quites el atributo.**
:::

## Unidades

<table class="indice-profesorado">
  <thead>
    <tr>
      <th>UF</th>
      <th>Temario · castellano</th>
      <th>Temari · valencià</th>
      <th>Soluciones</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="u in indice" :key="u.clave">
      <td class="uf"><strong>{{ u.icono }} {{ u.unidad }}</strong></td>
      <td><a :href="u.es.url" target="_blank" rel="noopener">{{ u.es.text }} ↗</a></td>
      <td><a :href="u.ca.url" target="_blank" rel="noopener">{{ u.ca.text }} ↗</a></td>
      <td>
        <template v-if="u.soluciones.length">
          <span v-for="(s, i) in u.soluciones" :key="s.url">
            <span v-if="i > 0"> · </span><a :href="s.url" target="_blank" rel="noopener">🔑 {{ s.es }} ↗</a>
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
/* El tema justifica el texto del contenido; en columnas estrechas deja huecos. */
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
