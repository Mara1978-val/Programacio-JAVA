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
  /** Título (pestaña del navegador) y siteTitle (navbar) en valenciano. */
  titulo: string
  siteTitle: string
  /** Los mismos en castellano. Si no se dan, se reutilizan los valencianos. */
  tituloEs?: string
  siteTitleEs?: string
  /**
   * Sidebar en valenciano, con enlaces relativos a la raíz del sitio
   * ('/8-solucions'). El de castellano se deriva prefijando '/es'.
   * Vacío si el sitio solo tiene una página.
   */
  sidebar?: any[]
  /** Igual que sidebar, pero con los textos en castellano. */
  sidebarEs?: any[]
  /** Ítems del navbar. */
  nav?: any[]
  /** Claves extra que se mezclan en themeConfig (las leen los componentes). */
  extraTheme?: Record<string, unknown>
}

/** Reapunta los enlaces de un sidebar al prefijo de la locale castellana. */
function conPrefijoEs(items: any[]): any[] {
  return items.map(i => ({
    ...i,
    ...(i.link  ? { link: `/es${i.link}` } : {}),
    ...(i.items ? { items: conPrefijoEs(i.items) } : {}),
  }))
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

  // Comunes a las dos locales: solo cambian los textos de la interfaz.
  const temaComun = {
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
  }

  const sidebarCa = op.sidebar ?? []
  const sidebarEs = op.sidebarEs ?? sidebarCa

  return defineConfig({
    base:   `${PROJECT.basePath}${ruta}/`,
    outDir: `../../docs/${ruta}`,
    title:  op.titulo,
    description: 'Material del professorat',
    head: headTags,
    // El valenciano se queda en la raíz para no invalidar las rutas privadas
    // ya compartidas; el castellano cuelga de /es/.
    locales: {
      root: {
        label: 'Valencià',
        lang:  'ca-ES',
        title: op.titulo,
        themeConfig: {
          ...temaComun,
          siteTitle: op.siteTitle,
          outline:   { label: 'En aquesta pàgina', level: [2, 3] },
          docFooter: { prev: 'Anterior', next: 'Següent' },
          nav: op.nav ?? [],
          sidebar: sidebarCa,
        } as any,
      },
      es: {
        label: 'Español',
        lang:  'es-ES',
        link:  '/es/',
        title: op.tituloEs ?? op.titulo,
        themeConfig: {
          ...temaComun,
          siteTitle: op.siteTitleEs ?? op.siteTitle,
          outline:   { label: 'En esta página', level: [2, 3] },
          docFooter: { prev: 'Anterior', next: 'Siguiente' },
          nav: op.nav ?? [],
          sidebar: conPrefijoEs(sidebarEs),
        } as any,
      },
    },
    markdown: {
      config(md) {
        md.use(tabsMarkdownPlugin)
        MARKDOWN_CONTAINERS.forEach(c => md.use(...(c as [any, string, any])))
      }
    },
    vite: VITE_CONFIG,
    // themeConfig vive dentro de cada locale (ver arriba): lo que se ponga
    // aquí lo pisaría el de la locale activa.
  })
}
