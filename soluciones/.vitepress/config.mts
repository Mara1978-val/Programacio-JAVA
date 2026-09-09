// ============================================================================
// CONFIGURACIÓN DEL SITIO DE SOLUCIONES (profesorado)
// ============================================================================
// Segundo sitio VitePress del proyecto. Se construye en docs/<RUTA_PRIVADA>/,
// dentro del sitio del alumnado pero sin ninguna conexión con él: ni enlaces,
// ni sidebar compartido, ni entradas en su mapa de rutas.
//
//   npm run dev:soluciones     · servidor local
//   npm run build:soluciones   · build (npm run build ya lo encadena)
// ============================================================================

import { defineConfig } from 'vitepress'
import type { HeadConfig } from 'vitepress'
import { tabsMarkdownPlugin } from 'vitepress-plugin-tabs'

import { PROJECT } from '../../src/.vitepress/config/project'
import { COLORS }  from '../../src/.vitepress/config/colors'
import { LOGOS }   from '../../src/.vitepress/config/logos'
import {
  buildCssVars,
  buildExerciseImageVars,
  MARKDOWN_CONTAINERS,
  VITE_CONFIG,
} from '../../src/.vitepress/config/shared'
import { RUTA_PRIVADA } from './config/ruta'

const basePath = `${PROJECT.basePath}${RUTA_PRIVADA}/`

// Los assets (logos, imágenes) se sirven desde el sitio principal: son rutas ya
// completas, no relativas al base de este sitio, así que no se duplica nada.
const assets = PROJECT.basePath

const logoBranding = {
  mode:       LOGOS.mode,
  darkSuffix: LOGOS.darkSuffix,
  logos: {
    autor:  { src: `${assets}img/logo-autor.png`,  height: LOGOS.heights.autor  },
    gva:    { src: `${assets}img/logo-gva.png`,    height: LOGOS.heights.gva    },
    centro: { src: `${assets}img/logo-centro.png`, height: LOGOS.heights.centro },
    footer: { src: `${assets}img/logo-autor.png`,  height: LOGOS.heights.footer },
  },
}

const headTags: HeadConfig[] = [
  ['link', { rel: 'icon', href: `${assets}img/logo.png` }],
  // Las páginas privadas no deben acabar en ningún índice de búsqueda.
  ['meta', { name: 'robots', content: 'noindex, nofollow, noarchive' }],
  ['style', {}, buildCssVars()],
  ['style', {}, buildExerciseImageVars(assets)],
]
if (COLORS.typography.fontImportUrl) {
  headTags.push(['link', { rel: 'stylesheet', href: COLORS.typography.fontImportUrl }])
}

const sidebar = [
  {
    text: '📗 UF2 - Representació d\'Algoritmes',
    collapsed: false,
    items: [
      { text: 'Solucions', link: '/uf2/Solucions' },
    ]
  },
  {
    text: '📙 UF3.2 - Introducció a la Programació II',
    collapsed: false,
    items: [
      { text: 'Solucions', link: '/uf3-2/14-solucions' },
    ]
  },
  {
    text: '📕 UF4 - Estructures repetitives',
    collapsed: false,
    items: [
      { text: 'Solucions', link: '/uf4/8-solucions' },
      { text: 'Solució de la tasca addicional', link: '/uf4/9-tasca-adicional-solucio' },
    ]
  },
  {
    text: '📒 UF5.1 - Estructures de Dades Dinàmiques I',
    collapsed: false,
    items: [
      { text: 'Solucions', link: '/uf5-1/13-solucions' },
    ]
  },
  {
    text: '📒 UF5.2 - Estructures de Dades Dinàmiques II',
    collapsed: false,
    items: [
      { text: 'Solucions', link: '/uf5-2/5-solucions' },
    ]
  },
  {
    text: '📔 UF6 - Funcions',
    collapsed: false,
    items: [
      { text: 'Solucions', link: '/uf6/11-solucions' },
    ]
  },
  {
    text: '📓 UF7 - Programació Orientada a Objectes I',
    collapsed: false,
    items: [
      { text: 'Solucions', link: '/uf7/15-solucions' },
    ]
  },
  {
    text: '📓 UF8 - Programació Orientada a Objectes II',
    collapsed: false,
    items: [
      { text: 'Solucions', link: '/uf8/9-solucions' },
    ]
  },
  {
    text: '📛 UF9 - Excepcions',
    collapsed: false,
    items: [
      { text: 'Solucions', link: '/uf9/8-solucions' },
    ]
  },
  {
    text: '🗂️ UF10 - Persistència de dades I: Fitxers',
    collapsed: false,
    items: [
      { text: 'Solucions', link: '/uf10/6-solucions' },
    ]
  },
  {
    text: '🗄️ UF11 - Persistència de dades II: Bases de dades',
    collapsed: false,
    items: [
      { text: 'Solucions', link: '/uf11/13-solucions' },
    ]
  },
]

export default defineConfig({
  base:   basePath,
  outDir: `../docs/${RUTA_PRIVADA}`,
  lang:   'ca-ES',
  title:  'Solucions 26/27',
  description: 'Solucions dels exercicis — material del professorat',
  head: headTags,
  markdown: {
    config(md) {
      md.use(tabsMarkdownPlugin)
      MARKDOWN_CONTAINERS.forEach(c => md.use(...(c as [any, string, any])))
    }
  },
  vite: VITE_CONFIG,
  themeConfig: {
    siteTitle: 'Solucions</br>26/27',
    outline: { label: 'En aquesta pàgina', level: [2, 3] },
    docFooter: { prev: 'Anterior', next: 'Següent' },
    // Sin enlace al temario aquí: VitePress aplica el base de ESTE sitio a los
    // links del navbar, y el temario cuelga del base del sitio principal. El
    // enlace de vuelta está en la portada, escrito en HTML crudo (que VitePress
    // deja intacto).
    nav: [
      { text: '🔑 Índex de solucions', link: '/' },
    ],
    sidebar,
    logoBranding,
    copyright: PROJECT.copyright,
    license: { text: PROJECT.license.text, url: PROJECT.license.url, icon: '' },
    // PrintWatermark.vue aplica withBase() al logo, así que aquí la ruta debe ser
    // relativa a ESTE sitio (no al principal): de ahí la copia en public/img/.
    printWatermark: { logo: '/img/logo.png', opacity: 0.10 },
  } as any,
})
