import { defineConfig } from 'vitepress'
import type { HeadConfig } from 'vitepress'
import { tabsMarkdownPlugin } from 'vitepress-plugin-tabs'

// ── Importar desde config/ ─────────────────────────────────────────────────
// 👤 Edita los archivos de config/ para personalizar el sitio.
// Este archivo (config.mts) no necesita modificarse habitualmente.
import { PROJECT } from './config/project'
import { COLORS }  from './config/colors'
import { LOGOS, getDarkLogoPath } from './config/logos'
import { UNITS, getAllUnitsArray, unitNavbars } from './config/units'
import { getSidebarForUnit } from './unitHelpers'


// ── Helpers compartidos con el sitio de soluciones ─────────────────────────
// Contenedores Markdown y variables CSS viven en config/shared.mts para que
// ambos sitios (src/ y soluciones/) usen exactamente los mismos.
import {
  buildCssVars,
  buildExerciseImageVars,
  MARKDOWN_CONTAINERS,
} from './config/shared'
// ── Construir configuración ─────────────────────────────────────────────────
const basePath     = PROJECT.basePath
const nonRootUnits = getAllUnitsArray().filter(u => u.id !== 'root')
// Unidad de referencia para título/siteTitle: la única unidad si hay una sola,
// o la entrada root si hay varias (en cursos multi-módulo).
const primaryUnit  = nonRootUnits.length === 1 ? nonRootUnits[0] : UNITS.root

// Logo del navbar (VitePress antepone basePath, por eso usamos ruta sin base)
const navbarLogoSrc = '/img/logo.png'
const navbarLogo = LOGOS.mode === 'separate'
  ? { light: navbarLogoSrc, dark: getDarkLogoPath(navbarLogoSrc, LOGOS.darkSuffix) }
  : navbarLogoSrc

// logoBranding: leído por los componentes Vue (SidebarLogos.vue, FooterLogo.vue)
// via:  useData().theme.value.logoBranding
const logoBranding = {
  mode:       LOGOS.mode,
  darkSuffix: LOGOS.darkSuffix,
  logos: {
    autor:  { src: `${basePath}img/logo-autor.png`,  height: LOGOS.heights.autor  },
    gva:    { src: `${basePath}img/logo-gva.png`,    height: LOGOS.heights.gva    },
    centro: { src: `${basePath}img/logo-centro.png`, height: LOGOS.heights.centro },
    footer: { src: `${basePath}img/logo-autor.png`,  height: LOGOS.heights.footer },
  },
}

// ── Navbar por idioma ─────────────────────────────────────────────────────────
// El navbar fijo es deliberadamente mínimo (solo Inicio). El desplegable con las
// unidades lo pinta DynamicNav.vue según la URL actual: muestra la unidad en la
// que estás y todas las anteriores (ver `unitNavbars` en config/units.ts).
const navbarEs = UNITS.root.navbar
const navbarCa = [{ text: '🏠 Inici', link: '/ca/' }]

// ── Sidebar multi-prefijo ─────────────────────────────────────────────────────
// VitePress sirve el sidebar de cada unidad según el prefijo de URL:
//   /programacion/        → sin sidebar (raíz, página de inicio)
//   /programacion/uf1/    → sidebar de UF1 en español
//   /programacion/ca/uf1/ → sidebar de UF1 en valenciano
const sidebar: Record<string, any> = {}
nonRootUnits.forEach(u => {
  sidebar[`/${u.code}/`] = getSidebarForUnit(u.sidebar, u.code)
})

// Tags del <head>
const headTags: HeadConfig[] = [
  ['link', { rel: 'icon', href: `${basePath}img/logo.png` }],
  ['style', {}, buildCssVars()],
  ['style', {}, buildExerciseImageVars(basePath)],
]
if (COLORS.typography.fontImportUrl) {
  headTags.push(['link', { rel: 'stylesheet', href: COLORS.typography.fontImportUrl }])
}

// ── Exportar configuración VitePress ───────────────────────────────────────
export default defineConfig({
  base:   basePath,
  outDir: PROJECT.outDir,
  vite: {
    build: {
      // El proyecto incluye bundles grandes (Mermaid/slides); elevamos el umbral
      // para evitar ruido en CI sin alterar el resultado de compilación.
      chunkSizeWarningLimit: 2000,
      rollupOptions: {
        // 'dompurify' NO puede ir aquí: Mermaid lo importa en tiempo de ejecución.
        // Al externalizarlo, el chunk de Mermaid conserva un `import "dompurify"`
        // que el navegador no sabe resolver; el import() dinámico de Mermaid falla,
        // el catch de theme/index.ts lo silencia y los diagramas se quedan como
        // bloques de código. html2canvas y canvg sí son opcionales de jspdf.
        external: ['html2canvas', 'canvg'],
      },
    },
  },
  markdown: {
    config(md) {
      md.use(tabsMarkdownPlugin)
      MARKDOWN_CONTAINERS.forEach(c => md.use(...(c as [any, string, any])))
    }
  },
  head: headTags,
  locales: {
    root: {
      label: 'Español',
      lang: PROJECT.lang,
      link: '/',
      title: primaryUnit.fullTitle,
      description: PROJECT.description,
      themeConfig: {
        siteTitle: primaryUnit.siteTitle,
        outline: { label: 'En esta página', level: [2, 3] },
        docFooter: { prev: 'Anterior', next: 'Siguiente' },
        nav: navbarEs,
      }
    },
    ca: {
      label: 'Valencià',
      lang: 'ca-ES',
      link: '/ca/',
      title: PROJECT.ca.fullTitle,
      description: PROJECT.ca.description,
      themeConfig: {
        siteTitle: PROJECT.ca.siteTitle,
        outline: { label: 'En aquesta pàgina', level: [2, 3] },
        docFooter: { prev: 'Anterior', next: 'Següent' },
        nav: navbarCa,
      }
    },
  },
  themeConfig: {
    logo: navbarLogo,
    socialLinks: PROJECT.socialLinks,
    logoBranding,
    unitNavbars,
    sidebar: sidebar,
    footer: { copyright: PROJECT.copyright },
    license: PROJECT.license,
    printWatermark: PROJECT.printWatermark
  } as any
})

// buildLogoFooter() eliminada: los logos se inyectan via SidebarLogos.vue (sidebar-nav-after)
// y FooterLogo.vue (layout-bottom) con soporte reactivo light/dark.
