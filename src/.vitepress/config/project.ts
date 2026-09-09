// ============================================================================
// CONFIGURACIÓN DEL PROYECTO — Identidad y metadatos
// ============================================================================
// 👤 Edita este archivo para configurar URL base, idioma, redes sociales
//    y copyright del sitio.
// ============================================================================

import type { DefaultTheme } from 'vitepress'

export const PROJECT = {

  // --------------------------------------------------------------------------
  // URL BASE
  // --------------------------------------------------------------------------
  // La ruta base del sitio. Debe coincidir con el subdirectorio de despliegue.
  //
  // Ejemplos:
  //   '/mi-curso/'          → https://usuario.github.io/mi-curso/
  //   '/2025-26-Laravel/'   → https://usuario.github.io/2025-26-Laravel/
  //   '/'                   → dominio raíz (https://midominio.com/)
  //
  // ⚠️ Siempre con barras al inicio Y al final.
  basePath: '/programacion/',

  // --------------------------------------------------------------------------
  // IDIOMA
  // --------------------------------------------------------------------------
  lang: 'es-ES',

  // --------------------------------------------------------------------------
  // DESCRIPCIÓN DEL SITIO
  // --------------------------------------------------------------------------
  // Aparece en los metadatos SEO y como subtítulo en buscadores.
  description: 'Programación (PRO) — CFGS Desarrollo de Aplicaciones Multiplataforma / Web. Temario completo de las 14 unidades formativas.',

  // --------------------------------------------------------------------------
  // IDENTIDAD DEL SITIO EN VALENCIANO
  // --------------------------------------------------------------------------
  // El módulo es bilingüe: la raíz (/) se sirve en español y /ca/ en valenciano.
  // Estos textos alimentan el locale `ca` de config.mts (pestaña del navegador,
  // título del sidebar y metadatos SEO de las páginas en valenciano).
  ca: {
    fullTitle:   'Programació — CFGS DAM / DAW',
    siteTitle:   'Programació',
    description: "Programació (PRO) — CFGS Desenvolupament d'Aplicacions Multiplataforma / Web. Temari complet de les 14 unitats formatives.",
  },

  // --------------------------------------------------------------------------
  // COPYRIGHT (pie de página)
  // --------------------------------------------------------------------------
  copyright: 'Copyright © 2026 — CEEDCV',
  
  // --------------------------------------------------------------------------
  // LICENCIA (pie de página)
  // --------------------------------------------------------------------------
  // Texto y enlace de la licencia mostrada en el footer junto al copyright.
  //   - text:  etiqueta visible (p. ej. 'CC BY-NC-SA 4.0' o 'Todos los derechos reservados')
  //   - url:   enlace a la licencia (deja '' para no enlazar, p. ej. en "todos los derechos")
  //   - icon:  ruta a un icono opcional en src/public (deja '' para no mostrar icono)
  license: {
    text: 'CC BY-NC-SA 4.0',
    url: 'https://creativecommons.org/licenses/by-nc-sa/4.0/deed.es',
    icon: '/img/logo-cc.png',
  },

  // --------------------------------------------------------------------------
  // MARCA DE AGUA DE IMPRESIÓN
  // --------------------------------------------------------------------------
  // Logo que se estampa como marca de agua SOLO al imprimir / "Guardar como PDF"
  // (invisible en el navegador). Por defecto, el logo del sitio.
  //   - logo:    ruta del logo en src/public
  //   - opacity: opacidad de la marca (0–1)
  printWatermark: {
    logo: '/img/logo.png',
    opacity: 0.10,
  },

  // --------------------------------------------------------------------------
  // ENLACES SOCIALES
  // --------------------------------------------------------------------------
  // Aparecen como iconos en la esquina superior derecha del navbar.
  //
  // Iconos disponibles: 'github', 'twitter', 'gitlab', 'discord', 'youtube', etc.
  // Deja el array vacío [] si no quieres mostrar ningún enlace social.
  socialLinks: [
    { icon: 'github', link: 'https://github.com/GGEdu' },
  ] as DefaultTheme.SocialLink[],

  // --------------------------------------------------------------------------
  // DIRECTORIO DE SALIDA DEL BUILD
  // --------------------------------------------------------------------------
  // Relativo a la carpeta src/. No suele necesitar cambios.
  outDir: '../docs',

  // --------------------------------------------------------------------------
  // MODO DE EXPORTACIÓN A PDF
  // --------------------------------------------------------------------------
  // 'image': El PDF se genera client-side rasterizando la página (visualización exacta, texto no seleccionable).
  // 'text': Se abre el diálogo de impresión del navegador para exportar con texto seleccionable.
  pdfExportMode: 'image' as 'image' | 'text',

}
