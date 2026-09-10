// ============================================================================
// FÁBRICA DE CONFIGURACIÓN DE LOS SITIOS DE SOLUCIONES
// ============================================================================
// Cada unidad con soluciones es un sitio VitePress propio, pero todos comparten
// esta configuración: así no pueden divergir entre ellos ni respecto al temario
// (contenedores Markdown, variables CSS y config de Vite salen de
// src/.vitepress/config/shared.ts, la misma que usa el sitio del alumnado).
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
import { RUTAS } from './rutas'

// Los assets (logos, imágenes del temario) se sirven desde el sitio principal:
// son rutas ya completas, no relativas al base de estos sitios, así que ninguno
// duplica archivos.
const assets = PROJECT.basePath

export interface OpcionesSitio {
  /** Clave en RUTAS: el código de la unidad, o 'profesor' para el índice. */
  clave: string
  /** Título de la pestaña del navegador y del sidebar. */
  titulo: string
  siteTitle: string
  /** Sidebar del sitio; vacío si solo tiene una página. */
  sidebar?: any[]
  /** Ítems del navbar. */
  nav?: any[]
  /** Claves extra que se mezclan en themeConfig (las leen los componentes). */
  extraTheme?: Record<string, unknown>
}

export function crearSitioSoluciones(op: OpcionesSitio) {
  const ruta = RUTAS[op.clave]
  if (!ruta) throw new Error(`No hay ruta privada definida para '${op.clave}' en _shared/rutas.ts`)

  const headTags: HeadConfig[] = [
    ['link', { rel: 'icon', href: `${assets}img/logo.png` }],
    // Estas páginas no deben acabar en ningún índice de búsqueda.
    ['meta', { name: 'robots', content: 'noindex, nofollow, noarchive' }],
    ['style', {}, buildCssVars()],
    ['style', {}, buildExerciseImageVars(assets)],
  ]
  if (COLORS.typography.fontImportUrl) {
    headTags.push(['link', { rel: 'stylesheet', href: COLORS.typography.fontImportUrl }])
  }

  return defineConfig({
    base:   `${PROJECT.basePath}${ruta}/`,
    outDir: `../../docs/${ruta}`,
    lang:   'ca-ES',
    title:  op.titulo,
    description: 'Material del professorat',
    head: headTags,
    markdown: {
      config(md) {
        md.use(tabsMarkdownPlugin)
        MARKDOWN_CONTAINERS.forEach(c => md.use(...(c as [any, string, any])))
      }
    },
    vite: VITE_CONFIG,
    themeConfig: {
      siteTitle: op.siteTitle,
      outline: { label: 'En aquesta pàgina', level: [2, 3] },
      docFooter: { prev: 'Anterior', next: 'Següent' },
      nav: op.nav ?? [],
      sidebar: op.sidebar ?? [],
      logoBranding: {
        mode:       LOGOS.mode,
        darkSuffix: LOGOS.darkSuffix,
        logos: {
          gva:    { src: `${assets}img/logo-gva.png`,    height: LOGOS.heights.gva    },
          centro: { src: `${assets}img/logo-centro.png`, height: LOGOS.heights.centro },
          footer: { src: `${assets}img/logo-centro.png`,  height: LOGOS.heights.footer },
        },
      },
      copyright: PROJECT.copyright,
      license: { text: PROJECT.license.text, url: PROJECT.license.url, icon: '' },
      // PrintWatermark.vue aplica withBase() al logo, así que la ruta ha de ser
      // relativa a ESTE sitio: de ahí la copia en public/img/ de cada uno.
      printWatermark: { logo: '/img/logo.png', opacity: 0.10 },
      ...(op.extraTheme ?? {}),
    } as any,
  })
}
