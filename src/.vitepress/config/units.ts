// ============================================================================
// CONFIGURACIÓN DE UNIDADES — Navegación y Contenidos
// ============================================================================
//
// 👤 EDITA ESTE ARCHIVO para definir las unidades formativas del módulo
//    y su navegación (navbar dinámico y sidebar).
//
// ESTRUCTURA DE ESTE CURSO
//   El módulo es bilingüe. Cada unidad formativa aparece DOS veces:
//     - Español   → code 'ufN'      → archivos en src/ufN/          (avisos de traducción)
//     - Valencià  → code 'ca/ufN'   → archivos en src/ca/ufN/       (contenido completo)
//   VitePress sirve el sidebar según el prefijo de URL, así que ambos conviven
//   sin colisionar. El selector de idioma del navbar lo genera VitePress a
//   partir de `locales` en config.mts.
//
// CONCEPTOS CLAVE:
//   Unidad (unit) — Un bloque de contenido con su propia navegación.
//   Navbar        — Menú horizontal en la barra superior.
//   Sidebar       — Panel de navegación lateral izquierdo.
//   code          — Prefijo de URL de los archivos de esta unidad.
//
// FLUJO RÁPIDO PARA AÑADIR UNA PÁGINA:
//   1. Crea el .md en src/ca/<uf>/contenidos/ (y su aviso en src/<uf>/contenidos/)
//   2. Añade el link al sidebar de la unidad, aquí abajo
//
// ============================================================================

import { DefaultTheme } from 'vitepress'
import type { NavGroup } from '../shared/navigation'

// ── Soluciones ───────────────────────────────────────────────────────────────
// No aparecen aquí a propósito. Son un sitio VitePress aparte (soluciones/),
// construido en una ruta privada de docs/. Este sitio no las conoce, así que su
// mapa de rutas no puede filtrarlas. Ver README, "Soluciones del profesorado".

// ============================================================================
// 1. NAVBAR BASE
// ============================================================================
// El navbar visible es mínimo: Inicio + el desplegable dinámico de unidades
// que pinta DynamicNav.vue leyendo `unitNavbars` (ver sección 3).

const navbarEs: DefaultTheme.NavItem[] = [
  { text: '🏠 Inicio', link: '/' },
]

const navbarCa: DefaultTheme.NavItem[] = [
  { text: '🏠 Inici', link: '/ca/' },
]

// ============================================================================
// 2. SIDEBARS POR UNIDAD
// ============================================================================
// Los links son relativos a la unidad: el prefijo /<code>/ lo añade
// automáticamente getSidebarForUnit() en config.mts.

// ── UF1 - Fonaments de Programació ──
const sidebarUF1_ES: DefaultTheme.SidebarItem[] = [
  {
    text: '📄 Contenidos',
    collapsed: false,
    items: [
      { text: '1. Introducción', link: '/contenidos/1-introduccio' },
      { text: '2. Cómo funcionan los ordenadores', link: '/contenidos/2-funcionament-ordinadors' },
      { text: '3. Pensamiento computacional', link: '/contenidos/3-pensament-computacional' },
      { text: '4. Ciclo de vida', link: '/contenidos/4-cicle-vida' },
      { text: '5. Elementos de un programa', link: '/contenidos/5-elements' },
      { text: '💡 Ejemplos', link: '/contenidos/6-exemples' },
    ]
  },
  {
    text: '✏️ Ejercicios',
    collapsed: false,
    items: [
      { text: 'Ejercicios', link: '/ejercicios/7-exercicis' },
    ]
  },
]

const sidebarUF1_CA: DefaultTheme.SidebarItem[] = [
  {
    text: '📄 Continguts',
    collapsed: false,
    items: [
      { text: '1. Introducció', link: '/contenidos/1-introduccio' },
      { text: '2. Com funcionen els ordinadors', link: '/contenidos/2-funcionament-ordinadors' },
      { text: '3. Pensament computacional', link: '/contenidos/3-pensament-computacional' },
      { text: '4. Cicle de vida', link: '/contenidos/4-cicle-vida' },
      { text: '5. Elements d\'un programa', link: '/contenidos/5-elements' },
      { text: '💡 Exemples', link: '/contenidos/6-exemples' },
    ]
  },
  {
    text: '✏️ Exercicis',
    collapsed: false,
    items: [
      { text: 'Exercicis', link: '/ejercicios/7-exercicis' },
    ]
  },
]

// ── UF2 - Representació d'Algoritmes ──
const sidebarUF2_ES: DefaultTheme.SidebarItem[] = [
  {
    text: '📄 Contenidos',
    collapsed: false,
    items: [
      { text: '1. Introducción', link: '/contenidos/1-introduccio' },
      { text: '2. Tipos de representación de algoritmos', link: '/contenidos/2-representacio' },
      { text: '3. Instrucciones básicas', link: '/contenidos/3-instruccions' },
      { text: '4. Estructuras de control', link: '/contenidos/4-estructures' },
      { text: '5. Casos de estudio y patrones comunes', link: '/contenidos/5-casos-estudi' },
      { text: '6. Herramientas digitales para diagramas de flujo', link: '/contenidos/6-eines-digitals' },
      { text: '💡 Ejemplos', link: '/contenidos/8-exemples' },
    ]
  },
  {
    text: '✏️ Ejercicios',
    collapsed: false,
    items: [
      { text: 'Enunciados', link: '/ejercicios/7-enunciats' },
    ]
  },
]

const sidebarUF2_CA: DefaultTheme.SidebarItem[] = [
  {
    text: '📄 Continguts',
    collapsed: false,
    items: [
      { text: '1. Introducció', link: '/contenidos/1-introduccio' },
      { text: '2. Tipus de representació d\'algoritmes', link: '/contenidos/2-representacio' },
      { text: '3. Instruccions bàsiques', link: '/contenidos/3-instruccions' },
      { text: '4. Estructures de control', link: '/contenidos/4-estructures' },
      { text: '5. Casos d\'estudi i patrons comuns', link: '/contenidos/5-casos-estudi' },
      { text: '6. Eines digitals per a diagrames de flux', link: '/contenidos/6-eines-digitals' },
      { text: '💡 Exemples', link: '/contenidos/8-exemples' },
    ]
  },
  {
    text: '✏️ Exercicis',
    collapsed: false,
    items: [
      { text: 'Enunciats', link: '/ejercicios/7-enunciats' },
    ]
  },
]

// ── UF3.1 - Introducció a la Programació I ──
const sidebarUF3_1_ES: DefaultTheme.SidebarItem[] = [
  {
    text: '📄 Contenidos',
    collapsed: false,
    items: [
      { text: '1. Introducción', link: '/contenidos/1-introduccio' },
      { text: '2. Tipos de IDE', link: '/contenidos/2-tipus_ides' },
      { text: '3. Extensiones', link: '/contenidos/3-extensions' },
      { text: '4. Proyectos', link: '/contenidos/4-projectes' },
      { text: '5. Depuración', link: '/contenidos/5-depuracio' },
      { text: '6. Control de versiones', link: '/contenidos/6-control_versions' },
    ]
  },
  {
    text: '✏️ Ejercicios',
    collapsed: false,
    items: [
      { text: 'Opción 1: Guía de configuración de VSC', link: '/ejercicios/7-guia_vsc' },
      { text: 'Opción 2: Guía de configuración de NetBeans', link: '/ejercicios/8-guia_netbeans' },
    ]
  },
]

const sidebarUF3_1_CA: DefaultTheme.SidebarItem[] = [
  {
    text: '📄 Continguts',
    collapsed: false,
    items: [
      { text: '1. Introducció', link: '/contenidos/1-introduccio' },
      { text: '2. Tipus d\'IDE', link: '/contenidos/2-tipus_ides' },
      { text: '3. Extensions', link: '/contenidos/3-extensions' },
      { text: '4. Projectes', link: '/contenidos/4-projectes' },
      { text: '5. Depuració', link: '/contenidos/5-depuracio' },
      { text: '6. Control de versions', link: '/contenidos/6-control_versions' },
    ]
  },
  {
    text: '✏️ Exercicis',
    collapsed: false,
    items: [
      { text: 'Opció 1: Guia de configuració de VSC', link: '/ejercicios/7-guia_vsc' },
      { text: 'Opció 2: Guia de configuració de NetBeans', link: '/ejercicios/8-guia_netbeans' },
    ]
  },
]

// ── UF3.2 - Introducció a la Programació II ──
const sidebarUF3_2_ES: DefaultTheme.SidebarItem[] = [
  {
    text: '📄 Contenidos',
    collapsed: false,
    items: [
      { text: '1. Introducción', link: '/contenidos/1-introduccio' },
      { text: '2. Elementos básicos', link: '/contenidos/2-elements' },
      { text: '3. Tipos de datos', link: '/contenidos/3-dades' },
      { text: '4. Declaración de variables', link: '/contenidos/4-variables' },
      { text: '5. Operadores', link: '/contenidos/5-operadors' },
      { text: '6. Literales', link: '/contenidos/6-literals' },
      { text: '7. Salida y entrada estándar', link: '/contenidos/7-ioestandard' },
      { text: '8. Estructuras alternativas', link: '/contenidos/8-estructures' },
      { text: '💡 Ejemplos', link: '/contenidos/9-exemples' },
    ]
  },
  {
    text: '📚 Contenidos adicionales',
    collapsed: false,
    items: [
      { text: 'Las clases Math, String y Scanner', link: '/contenidos/11-add_intro' },
      { text: 'Funcionalidades de los lenguajes', link: '/contenidos/11-funcionalitats' },
      { text: 'Organización en paquetes', link: '/contenidos/12-paquets' },
      { text: 'Operador condicional', link: '/contenidos/13-operador_cond' },
    ]
  },
  {
    text: '✏️ Ejercicios',
    collapsed: false,
    items: [
      { text: 'Ejercicios', link: '/ejercicios/10-exercicis' },
    ]
  },
]

const sidebarUF3_2_CA: DefaultTheme.SidebarItem[] = [
  {
    text: '📄 Continguts',
    collapsed: false,
    items: [
      { text: '1. Introducció', link: '/contenidos/1-introduccio' },
      { text: '2. Elements bàsics', link: '/contenidos/2-elements' },
      { text: '3. Tipus de dades', link: '/contenidos/3-dades' },
      { text: '4. Declaració de variables', link: '/contenidos/4-variables' },
      { text: '5. Operadors', link: '/contenidos/5-operadors' },
      { text: '6. Literals', link: '/contenidos/6-literals' },
      { text: '7. Eixida i entrada estàndard', link: '/contenidos/7-ioestandard' },
      { text: '8. Estructures alternatives', link: '/contenidos/8-estructures' },
      { text: '💡 Exemples', link: '/contenidos/9-exemples' },
    ]
  },
  {
    text: '📚 Continguts addicionals',
    collapsed: false,
    items: [
      { text: 'Les classes Math, String i Scanner', link: '/contenidos/11-add_intro' },
      { text: 'Funcionalitats dels llenguatges', link: '/contenidos/11-funcionalitats' },
      { text: 'Organització en paquets', link: '/contenidos/12-paquets' },
      { text: 'Operador condicional', link: '/contenidos/13-operador_cond' },
    ]
  },
  {
    text: '✏️ Exercicis',
    collapsed: false,
    items: [
      { text: 'Exercicis', link: '/ejercicios/10-exercicis' },
    ]
  },
]

// ── UF4 - Estructures repetitives ──
const sidebarUF4_ES: DefaultTheme.SidebarItem[] = [
  {
    text: '📄 Contenidos',
    collapsed: false,
    items: [
      { text: '1. Introducción', link: '/contenidos/1-introduccio' },
      { text: '2. Bucle for', link: '/contenidos/2-for' },
      { text: '3. Bucle while', link: '/contenidos/3-while' },
      { text: '4. Bucle do-while', link: '/contenidos/4-do-while' },
      { text: '💡 Ejemplos', link: '/contenidos/5-exemples' },
    ]
  },
  {
    text: '📚 Contenidos adicionales',
    collapsed: false,
    items: [
      { text: 'Método Math.random()', link: '/contenidos/7-add_random' },
    ]
  },
  {
    text: '✏️ Ejercicios',
    collapsed: false,
    items: [
      { text: 'Ejercicios', link: '/ejercicios/6-exercicis' },
      { text: 'Tarea adicional', link: '/ejercicios/9-tasca-adicional' },
    ]
  },
]

const sidebarUF4_CA: DefaultTheme.SidebarItem[] = [
  {
    text: '📄 Continguts',
    collapsed: false,
    items: [
      { text: '1. Introducció', link: '/contenidos/1-introduccio' },
      { text: '2. Bucle for', link: '/contenidos/2-for' },
      { text: '3. Bucle while', link: '/contenidos/3-while' },
      { text: '4. Bucle do-while', link: '/contenidos/4-do-while' },
      { text: '💡 Exemples', link: '/contenidos/5-exemples' },
    ]
  },
  {
    text: '📚 Continguts addicionals',
    collapsed: false,
    items: [
      { text: 'Mètode Math.random()', link: '/contenidos/7-add_random' },
    ]
  },
  {
    text: '✏️ Exercicis',
    collapsed: false,
    items: [
      { text: 'Exercicis', link: '/ejercicios/6-exercicis' },
      { text: 'Tasca addicional', link: '/ejercicios/9-tasca-adicional' },
    ]
  },
]

// ── UF5.1 - Estructures de Dades Dinàmiques I ──
const sidebarUF5_1_ES: DefaultTheme.SidebarItem[] = [
  {
    text: '📄 Contenidos',
    collapsed: false,
    items: [
      { text: '1. Introducción', link: '/contenidos/1-introduccio' },
      { text: '2. Propiedades', link: '/contenidos/2-propietats' },
      { text: '3. Vectores (arrays unidimensionales)', link: '/contenidos/3-vectors' },
      { text: '4. Matrices (arrays multidimensionales)', link: '/contenidos/4-matrius' },
      { text: '5. Búsqueda con vectores', link: '/contenidos/5-cercar' },
      { text: '6. Ordenación de vectores', link: '/contenidos/6-ordenar' },
      { text: '7. ArrayList', link: '/contenidos/7-arraylist' },
      { text: '💡 Ejemplos', link: '/contenidos/8-exemples' },
    ]
  },
  {
    text: '📚 Contenidos adicionales',
    collapsed: false,
    items: [
      { text: 'La clase Arrays', link: '/contenidos/10-classe_arrays' },
      { text: 'La clase String', link: '/contenidos/11-classe_string' },
      { text: 'For en formato foreach', link: '/contenidos/12-add_foreach' },
    ]
  },
  {
    text: '✏️ Ejercicios',
    collapsed: false,
    items: [
      { text: 'Ejercicios', link: '/ejercicios/9-exercicis' },
    ]
  },
]

const sidebarUF5_1_CA: DefaultTheme.SidebarItem[] = [
  {
    text: '📄 Continguts',
    collapsed: false,
    items: [
      { text: '1. Introducció', link: '/contenidos/1-introduccio' },
      { text: '2. Propietats', link: '/contenidos/2-propietats' },
      { text: '3. Vectors (arrays unidimensionals)', link: '/contenidos/3-vectors' },
      { text: '4. Matrius (arrays multidimensionals)', link: '/contenidos/4-matrius' },
      { text: '5. Cercar amb vectors', link: '/contenidos/5-cercar' },
      { text: '6. Ordenació de vectors', link: '/contenidos/6-ordenar' },
      { text: '7. ArrayList', link: '/contenidos/7-arraylist' },
      { text: '💡 Exemples', link: '/contenidos/8-exemples' },
    ]
  },
  {
    text: '📚 Continguts addicionals',
    collapsed: false,
    items: [
      { text: 'La classe Arrays', link: '/contenidos/10-classe_arrays' },
      { text: 'La classe String', link: '/contenidos/11-classe_string' },
      { text: 'For en format foreach', link: '/contenidos/12-add_foreach' },
    ]
  },
  {
    text: '✏️ Exercicis',
    collapsed: false,
    items: [
      { text: 'Exercicis', link: '/ejercicios/9-exercicis' },
    ]
  },
]

// ── UF5.2 - Estructures de Dades Dinàmiques II ──
const sidebarUF5_2_ES: DefaultTheme.SidebarItem[] = [
  {
    text: '📄 Contenidos',
    collapsed: false,
    items: [
      { text: '1. Tablas hash', link: '/contenidos/1-hashmap' },
      { text: '2. Colas', link: '/contenidos/2-queue' },
      { text: '3. Pilas', link: '/contenidos/3-stack' },
    ]
  },
  {
    text: '✏️ Ejercicios',
    collapsed: false,
    items: [
      { text: 'Ejercicios', link: '/ejercicios/4-exercicis' },
    ]
  },
]

const sidebarUF5_2_CA: DefaultTheme.SidebarItem[] = [
  {
    text: '📄 Continguts',
    collapsed: false,
    items: [
      { text: '1. Taules hash', link: '/contenidos/1-hashmap' },
      { text: '2. Cues', link: '/contenidos/2-queue' },
      { text: '3. Piles', link: '/contenidos/3-stack' },
    ]
  },
  {
    text: '✏️ Exercicis',
    collapsed: false,
    items: [
      { text: 'Exercicis', link: '/ejercicios/4-exercicis' },
    ]
  },
]

// ── UF6 - Funcions ──
const sidebarUF6_ES: DefaultTheme.SidebarItem[] = [
  {
    text: '📄 Contenidos',
    collapsed: false,
    items: [
      { text: '1. Introducción', link: '/contenidos/1-introduccio' },
      { text: '2. Declaración de una función', link: '/contenidos/2-declaracio' },
      { text: '3. Llamar a una función', link: '/contenidos/3-crida' },
      { text: '4. Ámbito de las variables', link: '/contenidos/4-ambit' },
      { text: '5. Parámetros', link: '/contenidos/5-parametres' },
      { text: '6. Devolución de un valor', link: '/contenidos/6-devolucio' },
      { text: '7. Recursividad', link: '/contenidos/7-recursivitat' },
      { text: '💡 Ejemplos', link: '/contenidos/8-exemples' },
    ]
  },
  {
    text: '📚 Contenidos adicionales',
    collapsed: false,
    items: [
      { text: 'Convertir letra a número', link: '/contenidos/10-add_lletranumero' },
    ]
  },
  {
    text: '✏️ Ejercicios',
    collapsed: false,
    items: [
      { text: 'Ejercicios', link: '/ejercicios/9-exercicis' },
    ]
  },
]

const sidebarUF6_CA: DefaultTheme.SidebarItem[] = [
  {
    text: '📄 Continguts',
    collapsed: false,
    items: [
      { text: '1. Introducció', link: '/contenidos/1-introduccio' },
      { text: '2. Declaració d\'una funció', link: '/contenidos/2-declaracio' },
      { text: '3. Cridar una funció', link: '/contenidos/3-crida' },
      { text: '4. Àmbit de les variables', link: '/contenidos/4-ambit' },
      { text: '5. Paràmetres', link: '/contenidos/5-parametres' },
      { text: '6. Devolució d\'un valor', link: '/contenidos/6-devolucio' },
      { text: '7. Recursivitat', link: '/contenidos/7-recursivitat' },
      { text: '💡 Exemples', link: '/contenidos/8-exemples' },
    ]
  },
  {
    text: '📚 Continguts addicionals',
    collapsed: false,
    items: [
      { text: 'Convertir lletra a número', link: '/contenidos/10-add_lletranumero' },
    ]
  },
  {
    text: '✏️ Exercicis',
    collapsed: false,
    items: [
      { text: 'Exercicis', link: '/ejercicios/9-exercicis' },
    ]
  },
]

// ── UF7 - Programació Orientada a Objectes I ──
const sidebarUF7_ES: DefaultTheme.SidebarItem[] = [
  {
    text: '📄 Contenidos',
    collapsed: false,
    items: [
      { text: '1. Introducción', link: '/contenidos/1-introduccio' },
      { text: '2. Fundamentos de una clase', link: '/contenidos/2-fonaments' },
      { text: '3. Objetos', link: '/contenidos/3-objectes' },
      { text: '4. Visibilidad de los miembros de una clase', link: '/contenidos/4-visibilitat' },
      { text: '5. Métodos', link: '/contenidos/5-metodes' },
      { text: '6. Constructores', link: '/contenidos/6-constructors' },
      { text: '7. Constantes', link: '/contenidos/7-constants' },
      { text: '8. Arrays de objetos', link: '/contenidos/8-arrays_objectes' },
      { text: '💡 Ejemplos', link: '/contenidos/9-exemples' },
    ]
  },
  {
    text: '📚 Contenidos adicionales',
    collapsed: false,
    items: [
      { text: 'Tipo enumerado', link: '/contenidos/11-add_enum' },
      { text: 'Método toString', link: '/contenidos/12-add_tostring' },
      { text: 'Ejemplo conjunto', link: '/contenidos/13-exemple' },
      { text: 'Referencia this', link: '/contenidos/14-add_this' },
    ]
  },
  {
    text: '✏️ Ejercicios',
    collapsed: false,
    items: [
      { text: 'Ejercicios', link: '/ejercicios/10-exercicis' },
    ]
  },
]

const sidebarUF7_CA: DefaultTheme.SidebarItem[] = [
  {
    text: '📄 Continguts',
    collapsed: false,
    items: [
      { text: '1. Introducció', link: '/contenidos/1-introduccio' },
      { text: '2. Fonaments d\'una classe', link: '/contenidos/2-fonaments' },
      { text: '3. Objectes', link: '/contenidos/3-objectes' },
      { text: '4. Visibilitat dels membres d\'una classe', link: '/contenidos/4-visibilitat' },
      { text: '5. Mètodes', link: '/contenidos/5-metodes' },
      { text: '6. Constructors', link: '/contenidos/6-constructors' },
      { text: '7. Constants', link: '/contenidos/7-constants' },
      { text: '8. Arrays d\'objectes', link: '/contenidos/8-arrays_objectes' },
      { text: '💡 Exemples', link: '/contenidos/9-exemples' },
    ]
  },
  {
    text: '📚 Continguts addicionals',
    collapsed: false,
    items: [
      { text: 'Tipus enumerat', link: '/contenidos/11-add_enum' },
      { text: 'Mètode toString', link: '/contenidos/12-add_tostring' },
      { text: 'Exemple conjunt', link: '/contenidos/13-exemple' },
      { text: 'Referència this', link: '/contenidos/14-add_this' },
    ]
  },
  {
    text: '✏️ Exercicis',
    collapsed: false,
    items: [
      { text: 'Exercicis', link: '/ejercicios/10-exercicis' },
    ]
  },
]

// ── UF8 - Programació Orientada a Objectes II ──
const sidebarUF8_ES: DefaultTheme.SidebarItem[] = [
  {
    text: '📄 Contenidos',
    collapsed: false,
    items: [
      { text: '1. Introducción', link: '/contenidos/1-introduccio' },
      { text: '2. Herencia', link: '/contenidos/2-herencia' },
      { text: '3. Polimorfismo', link: '/contenidos/3-polimorfisme' },
      { text: '4. Clases abstractas', link: '/contenidos/4-abstract' },
      { text: '5. Interfaces', link: '/contenidos/5-interficies' },
      { text: '💡 Ejemplos', link: '/contenidos/6-exemples' },
    ]
  },
  {
    text: '📚 Contenidos adicionales',
    collapsed: false,
    items: [
      { text: 'Operador instanceof', link: '/contenidos/8-add_instanceof' },
    ]
  },
  {
    text: '✏️ Ejercicios',
    collapsed: false,
    items: [
      { text: 'Ejercicios', link: '/ejercicios/7-exercicis' },
    ]
  },
]

const sidebarUF8_CA: DefaultTheme.SidebarItem[] = [
  {
    text: '📄 Continguts',
    collapsed: false,
    items: [
      { text: '1. Introducció', link: '/contenidos/1-introduccio' },
      { text: '2. Herència', link: '/contenidos/2-herencia' },
      { text: '3. Polimorfisme', link: '/contenidos/3-polimorfisme' },
      { text: '4. Classes abstractes', link: '/contenidos/4-abstract' },
      { text: '5. Interfícies', link: '/contenidos/5-interficies' },
      { text: '💡 Exemples', link: '/contenidos/6-exemples' },
    ]
  },
  {
    text: '📚 Continguts addicionals',
    collapsed: false,
    items: [
      { text: 'Operador instanceof', link: '/contenidos/8-add_instanceof' },
    ]
  },
  {
    text: '✏️ Exercicis',
    collapsed: false,
    items: [
      { text: 'Exercicis', link: '/ejercicios/7-exercicis' },
    ]
  },
]

// ── UF9 - Excepcions ──
const sidebarUF9_ES: DefaultTheme.SidebarItem[] = [
  {
    text: '📄 Contenidos',
    collapsed: false,
    items: [
      { text: '1. Introducción', link: '/contenidos/1-introduccio' },
      { text: '2. Lanzar excepciones (throw)', link: '/contenidos/2-llançar' },
      { text: '3. Manejar excepciones', link: '/contenidos/3-manejar' },
      { text: '4. Jerarquía y tipos de excepciones', link: '/contenidos/4-tipus' },
      { text: '5. Definir excepciones propias', link: '/contenidos/5-propies' },
      { text: '💡 Ejemplos', link: '/contenidos/6-exemples' },
    ]
  },
  {
    text: '✏️ Ejercicios',
    collapsed: false,
    items: [
      { text: 'Ejercicios', link: '/ejercicios/7-exercicis' },
    ]
  },
]

const sidebarUF9_CA: DefaultTheme.SidebarItem[] = [
  {
    text: '📄 Continguts',
    collapsed: false,
    items: [
      { text: '1. Introducció', link: '/contenidos/1-introduccio' },
      { text: '2. Llançar excepcions (throw)', link: '/contenidos/2-llançar' },
      { text: '3. Manejar excepcions', link: '/contenidos/3-manejar' },
      { text: '4. Jerarquia i tipus d\'excepcions', link: '/contenidos/4-tipus' },
      { text: '5. Definir excepcions pròpies', link: '/contenidos/5-propies' },
      { text: '💡 Exemples', link: '/contenidos/6-exemples' },
    ]
  },
  {
    text: '✏️ Exercicis',
    collapsed: false,
    items: [
      { text: 'Exercicis', link: '/ejercicios/7-exercicis' },
    ]
  },
]

// ── UF10 - Persistència de dades I: Fitxers ──
const sidebarUF10_ES: DefaultTheme.SidebarItem[] = [
  {
    text: '📄 Contenidos',
    collapsed: false,
    items: [
      { text: '1. Introducción', link: '/contenidos/1-introduccio' },
      { text: '2. Gestión de ficheros', link: '/contenidos/2-gestio' },
      { text: '3. Lectura y escritura de ficheros', link: '/contenidos/3-iofitxers' },
      { text: '💡 Ejemplos', link: '/contenidos/4-exemples' },
    ]
  },
  {
    text: '✏️ Ejercicios',
    collapsed: false,
    items: [
      { text: 'Ejercicios', link: '/ejercicios/5-exercicis' },
    ]
  },
]

const sidebarUF10_CA: DefaultTheme.SidebarItem[] = [
  {
    text: '📄 Continguts',
    collapsed: false,
    items: [
      { text: '1. Introducció', link: '/contenidos/1-introduccio' },
      { text: '2. Gestió de fitxers', link: '/contenidos/2-gestio' },
      { text: '3. Lectura i escriptura de fitxers', link: '/contenidos/3-iofitxers' },
      { text: '💡 Exemples', link: '/contenidos/4-exemples' },
    ]
  },
  {
    text: '✏️ Exercicis',
    collapsed: false,
    items: [
      { text: 'Exercicis', link: '/ejercicios/5-exercicis' },
    ]
  },
]

// ── UF11 - Persistència de dades II: Bases de dades ──
const sidebarUF11_ES: DefaultTheme.SidebarItem[] = [
  {
    text: '📄 Contenidos',
    collapsed: false,
    items: [
      { text: '1. Introducción', link: '/contenidos/1-introduccio' },
      { text: '2. Repaso del lenguaje SQL', link: '/contenidos/2-sql' },
      { text: '3. Configuración del entorno', link: '/contenidos/3-configuracio-del-entorn' },
      { text: '4. Conexión a la base de datos', link: '/contenidos/3-conexio-bbdd' },
      { text: '5. Consultas', link: '/contenidos/3-consultes' },
      { text: '6. Modificación', link: '/contenidos/4-modificacio' },
      { text: '7. Inserción', link: '/contenidos/5-insercio' },
      { text: '8. Borrado', link: '/contenidos/6-esborrat' },
      { text: '💡 Ejemplos', link: '/contenidos/7-exemples' },
    ]
  },
  {
    text: '📚 Contenidos adicionales',
    collapsed: false,
    items: [
      { text: 'JDBC', link: '/contenidos/9-jdbc' },
      { text: 'Acceso a bases de datos desde NetBeans', link: '/contenidos/10-acces_netbeans' },
      { text: 'Acceso a bases de datos mediante código Java', link: '/contenidos/11-acces_java' },
      { text: 'Navegabilidad y concurrencia', link: '/contenidos/12-navegabilitat' },
    ]
  },
  {
    text: '✏️ Ejercicios',
    collapsed: false,
    items: [
      { text: 'Ejercicios', link: '/ejercicios/8-exercicis' },
    ]
  },
]

const sidebarUF11_CA: DefaultTheme.SidebarItem[] = [
  {
    text: '📄 Continguts',
    collapsed: false,
    items: [
      { text: '1. Introducció', link: '/contenidos/1-introduccio' },
      { text: '2. Repàs del llenguatge SQL', link: '/contenidos/2-sql' },
      { text: '3. Configuració de l\'entorn', link: '/contenidos/3-configuracio-del-entorn' },
      { text: '4. Connexió a la base de dades', link: '/contenidos/3-conexio-bbdd' },
      { text: '5. Consultes', link: '/contenidos/3-consultes' },
      { text: '6. Modificació', link: '/contenidos/4-modificacio' },
      { text: '7. Inserció', link: '/contenidos/5-insercio' },
      { text: '8. Esborrat', link: '/contenidos/6-esborrat' },
      { text: '💡 Exemples', link: '/contenidos/7-exemples' },
    ]
  },
  {
    text: '📚 Continguts addicionals',
    collapsed: false,
    items: [
      { text: 'JDBC', link: '/contenidos/9-jdbc' },
      { text: 'Accés a bases de dades des de NetBeans', link: '/contenidos/10-acces_netbeans' },
      { text: 'Accés a bases de dades mitjançant codi Java', link: '/contenidos/11-acces_java' },
      { text: 'Navegabilitat i concurrència', link: '/contenidos/12-navegabilitat' },
    ]
  },
  {
    text: '✏️ Exercicis',
    collapsed: false,
    items: [
      { text: 'Exercicis', link: '/ejercicios/8-exercicis' },
    ]
  },
]

// ── UF12 - Interfícies gràfiques ──
const sidebarUF12_ES: DefaultTheme.SidebarItem[] = [
  {
    text: '📄 Contenidos',
    collapsed: false,
    items: [
      { text: '1. Introducción', link: '/contenidos/1-introduccio' },
      { text: '2. Arquitectura', link: '/contenidos/2-arquitectura' },
      { text: '3. Componentes', link: '/contenidos/3-components' },
      { text: '4. Ecosistema y mercado', link: '/contenidos/4-ecosistema-i-mercat' },
      { text: '5. Interfaces y Java', link: '/contenidos/5-interfaces-i-java' },
    ]
  },
  {
    text: '📚 Contenidos adicionales',
    collapsed: false,
    items: [
      { text: 'Presentación: programación gráfica', link: '/contenidos/gui' },
    ]
  },
  {
    text: '✏️ Ejercicios',
    collapsed: false,
    items: [
      { text: 'Ejercicios', link: '/ejercicios/7-exercicis' },
    ]
  },
]

const sidebarUF12_CA: DefaultTheme.SidebarItem[] = [
  {
    text: '📄 Continguts',
    collapsed: false,
    items: [
      { text: '1. Introducció', link: '/contenidos/1-introduccio' },
      { text: '2. Arquitectura', link: '/contenidos/2-arquitectura' },
      { text: '3. Components', link: '/contenidos/3-components' },
      { text: '4. Ecosistema i mercat', link: '/contenidos/4-ecosistema-i-mercat' },
      { text: '5. Interfícies i Java', link: '/contenidos/5-interfaces-i-java' },
    ]
  },
  {
    text: '📚 Continguts addicionals',
    collapsed: false,
    items: [
      { text: 'Presentació: programació gràfica', link: '/contenidos/gui' },
    ]
  },
  {
    text: '✏️ Exercicis',
    collapsed: false,
    items: [
      { text: 'Exercicis', link: '/ejercicios/7-exercicis' },
    ]
  },
]

// ============================================================================
// 3. REGISTRO DE UNIDADES
// ============================================================================
// Propiedades de cada unidad:
//   id        — Identificador único (coincide con la clave del objeto)
//   code      — Prefijo de URL ('uf1' en español, 'ca/uf1' en valenciano)
//   title     — Nombre corto (migas de pan y referencias internas)
//   fullTitle — Nombre completo (pestaña del navegador)
//   siteTitle — Nombre en el sidebar (admite </br>)
//   icon      — Emoji decorativo de la unidad
//   navbar    — Ítems del menú superior de esta unidad
//   sidebar   — Ítems del panel lateral de esta unidad

export interface UnitConfig {
  id: string
  code: string
  title: string
  fullTitle: string
  siteTitle: string
  icon: string
  navbar: DefaultTheme.NavItem[]
  sidebar: DefaultTheme.SidebarItem[]
}

export const UNITS: Record<string, UnitConfig> = {

  // Página de inicio — sin navegación de unidad.
  root: {
    id: 'root',
    code: 'root',
    title: 'Programación',
    fullTitle: 'Programación — CFGS DAM / DAW',
    siteTitle: 'Programación',
    icon: '💻',
    navbar: navbarEs,
    sidebar: []
  },

  UF1: {
    id: 'uf1',
    code: 'uf1',
    title: 'UF1 - Fundamentos de Programación',
    fullTitle: 'UF1 - Fundamentos de Programación',
    siteTitle: 'Fundamentos de </br>Programación',
    icon: '📘',
    navbar: navbarEs,
    sidebar: sidebarUF1_ES
  },

  UF1_CA: {
    id: 'ca/uf1',
    code: 'ca/uf1',
    title: 'UF1 - Fonaments de Programació',
    fullTitle: 'UF1 - Fonaments de Programació',
    siteTitle: 'Fonaments de </br>Programació',
    icon: '📘',
    navbar: navbarCa,
    sidebar: sidebarUF1_CA
  },

  UF2: {
    id: 'uf2',
    code: 'uf2',
    title: 'UF2 - Representación de Algoritmos',
    fullTitle: 'UF2 - Representación de Algoritmos',
    siteTitle: 'Representación de </br>Algoritmos',
    icon: '📗',
    navbar: navbarEs,
    sidebar: sidebarUF2_ES
  },

  UF2_CA: {
    id: 'ca/uf2',
    code: 'ca/uf2',
    title: 'UF2 - Representació d\'Algoritmes',
    fullTitle: 'UF2 - Representació d\'Algoritmes',
    siteTitle: 'Representació </br>d\'Algoritmes',
    icon: '📗',
    navbar: navbarCa,
    sidebar: sidebarUF2_CA
  },

  UF3_1: {
    id: 'uf3-1',
    code: 'uf3-1',
    title: 'UF3.1 - Introducción a la Programación I',
    fullTitle: 'UF3.1 - Introducción a la Programación I',
    siteTitle: 'Introducción a la </br>Programación I',
    icon: '📙',
    navbar: navbarEs,
    sidebar: sidebarUF3_1_ES
  },

  UF3_1_CA: {
    id: 'ca/uf3-1',
    code: 'ca/uf3-1',
    title: 'UF3.1 - Introducció a la Programació I',
    fullTitle: 'UF3.1 - Introducció a la Programació I',
    siteTitle: 'Introducció a la </br>Programació I',
    icon: '📙',
    navbar: navbarCa,
    sidebar: sidebarUF3_1_CA
  },

  UF3_2: {
    id: 'uf3-2',
    code: 'uf3-2',
    title: 'UF3.2 - Introducción a la Programación II',
    fullTitle: 'UF3.2 - Introducción a la Programación II',
    siteTitle: 'Introducción a la </br>Programación II',
    icon: '📙',
    navbar: navbarEs,
    sidebar: sidebarUF3_2_ES
  },

  UF3_2_CA: {
    id: 'ca/uf3-2',
    code: 'ca/uf3-2',
    title: 'UF3.2 - Introducció a la Programació II',
    fullTitle: 'UF3.2 - Introducció a la Programació II',
    siteTitle: 'Introducció a la </br>Programació II',
    icon: '📙',
    navbar: navbarCa,
    sidebar: sidebarUF3_2_CA
  },

  UF4: {
    id: 'uf4',
    code: 'uf4',
    title: 'UF4 - Estructuras repetitivas',
    fullTitle: 'UF4 - Estructuras repetitivas',
    siteTitle: 'Estructuras </br>repetitivas',
    icon: '📕',
    navbar: navbarEs,
    sidebar: sidebarUF4_ES
  },

  UF4_CA: {
    id: 'ca/uf4',
    code: 'ca/uf4',
    title: 'UF4 - Estructures repetitives',
    fullTitle: 'UF4 - Estructures repetitives',
    siteTitle: 'Estructures </br>repetitives',
    icon: '📕',
    navbar: navbarCa,
    sidebar: sidebarUF4_CA
  },

  UF5_1: {
    id: 'uf5-1',
    code: 'uf5-1',
    title: 'UF5.1 - Estructuras de Datos Dinámicas I',
    fullTitle: 'UF5.1 - Estructuras de Datos Dinámicas I',
    siteTitle: 'Estructuras de </br>Datos Dinámicas I',
    icon: '📒',
    navbar: navbarEs,
    sidebar: sidebarUF5_1_ES
  },

  UF5_1_CA: {
    id: 'ca/uf5-1',
    code: 'ca/uf5-1',
    title: 'UF5.1 - Estructures de Dades Dinàmiques I',
    fullTitle: 'UF5.1 - Estructures de Dades Dinàmiques I',
    siteTitle: 'Estructures de </br>Dades Dinàmiques I',
    icon: '📒',
    navbar: navbarCa,
    sidebar: sidebarUF5_1_CA
  },

  UF5_2: {
    id: 'uf5-2',
    code: 'uf5-2',
    title: 'UF5.2 - Estructuras de Datos Dinámicas II',
    fullTitle: 'UF5.2 - Estructuras de Datos Dinámicas II',
    siteTitle: 'Estructuras de </br>Datos Dinámicas II',
    icon: '📒',
    navbar: navbarEs,
    sidebar: sidebarUF5_2_ES
  },

  UF5_2_CA: {
    id: 'ca/uf5-2',
    code: 'ca/uf5-2',
    title: 'UF5.2 - Estructures de Dades Dinàmiques II',
    fullTitle: 'UF5.2 - Estructures de Dades Dinàmiques II',
    siteTitle: 'Estructures de </br>Dades Dinàmiques II',
    icon: '📒',
    navbar: navbarCa,
    sidebar: sidebarUF5_2_CA
  },

  UF6: {
    id: 'uf6',
    code: 'uf6',
    title: 'UF6 - Funciones',
    fullTitle: 'UF6 - Funciones',
    siteTitle: 'Funciones',
    icon: '📔',
    navbar: navbarEs,
    sidebar: sidebarUF6_ES
  },

  UF6_CA: {
    id: 'ca/uf6',
    code: 'ca/uf6',
    title: 'UF6 - Funcions',
    fullTitle: 'UF6 - Funcions',
    siteTitle: 'Funcions',
    icon: '📔',
    navbar: navbarCa,
    sidebar: sidebarUF6_CA
  },

  UF7: {
    id: 'uf7',
    code: 'uf7',
    title: 'UF7 - Programación Orientada a Objetos I',
    fullTitle: 'UF7 - Programación Orientada a Objetos I',
    siteTitle: 'Programación </br>Orientada a Objetos I',
    icon: '📓',
    navbar: navbarEs,
    sidebar: sidebarUF7_ES
  },

  UF7_CA: {
    id: 'ca/uf7',
    code: 'ca/uf7',
    title: 'UF7 - Programació Orientada a Objectes I',
    fullTitle: 'UF7 - Programació Orientada a Objectes I',
    siteTitle: 'Programació </br>Orientada a Objectes I',
    icon: '📓',
    navbar: navbarCa,
    sidebar: sidebarUF7_CA
  },

  UF8: {
    id: 'uf8',
    code: 'uf8',
    title: 'UF8 - Programación Orientada a Objetos II',
    fullTitle: 'UF8 - Programación Orientada a Objetos II',
    siteTitle: 'Programación </br>Orientada a Objetos II',
    icon: '📓',
    navbar: navbarEs,
    sidebar: sidebarUF8_ES
  },

  UF8_CA: {
    id: 'ca/uf8',
    code: 'ca/uf8',
    title: 'UF8 - Programació Orientada a Objectes II',
    fullTitle: 'UF8 - Programació Orientada a Objectes II',
    siteTitle: 'Programació </br>Orientada a Objectes II',
    icon: '📓',
    navbar: navbarCa,
    sidebar: sidebarUF8_CA
  },

  UF9: {
    id: 'uf9',
    code: 'uf9',
    title: 'UF9 - Excepciones',
    fullTitle: 'UF9 - Excepciones',
    siteTitle: 'Excepciones',
    icon: '📛',
    navbar: navbarEs,
    sidebar: sidebarUF9_ES
  },

  UF9_CA: {
    id: 'ca/uf9',
    code: 'ca/uf9',
    title: 'UF9 - Excepcions',
    fullTitle: 'UF9 - Excepcions',
    siteTitle: 'Excepcions',
    icon: '📛',
    navbar: navbarCa,
    sidebar: sidebarUF9_CA
  },

  UF10: {
    id: 'uf10',
    code: 'uf10',
    title: 'UF10 - Persistencia de datos I: Ficheros',
    fullTitle: 'UF10 - Persistencia de datos I: Ficheros',
    siteTitle: 'Persistencia I: </br>Ficheros',
    icon: '🗂️',
    navbar: navbarEs,
    sidebar: sidebarUF10_ES
  },

  UF10_CA: {
    id: 'ca/uf10',
    code: 'ca/uf10',
    title: 'UF10 - Persistència de dades I: Fitxers',
    fullTitle: 'UF10 - Persistència de dades I: Fitxers',
    siteTitle: 'Persistència I: </br>Fitxers',
    icon: '🗂️',
    navbar: navbarCa,
    sidebar: sidebarUF10_CA
  },

  UF11: {
    id: 'uf11',
    code: 'uf11',
    title: 'UF11 - Persistencia de datos II: Bases de datos',
    fullTitle: 'UF11 - Persistencia de datos II: Bases de datos',
    siteTitle: 'Persistencia II: </br>Bases de datos',
    icon: '🗄️',
    navbar: navbarEs,
    sidebar: sidebarUF11_ES
  },

  UF11_CA: {
    id: 'ca/uf11',
    code: 'ca/uf11',
    title: 'UF11 - Persistència de dades II: Bases de dades',
    fullTitle: 'UF11 - Persistència de dades II: Bases de dades',
    siteTitle: 'Persistència II: </br>Bases de dades',
    icon: '🗄️',
    navbar: navbarCa,
    sidebar: sidebarUF11_CA
  },

  UF12: {
    id: 'uf12',
    code: 'uf12',
    title: 'UF12 - Interfaces gráficas',
    fullTitle: 'UF12 - Interfaces gráficas',
    siteTitle: 'Interfaces </br>gráficas',
    icon: '🖼️',
    navbar: navbarEs,
    sidebar: sidebarUF12_ES
  },

  UF12_CA: {
    id: 'ca/uf12',
    code: 'ca/uf12',
    title: 'UF12 - Interfícies gràfiques',
    fullTitle: 'UF12 - Interfícies gràfiques',
    siteTitle: 'Interfícies </br>gràfiques',
    icon: '🖼️',
    navbar: navbarCa,
    sidebar: sidebarUF12_CA
  },

}

// ============================================================================
// FUNCIONES DE ACCESO — No modificar
// ============================================================================

export function getAllUnitsArray(): UnitConfig[] {
  return Object.values(UNITS)
}

export function getUnitByCode(code: string): UnitConfig | undefined {
  return UNITS[code]
}

// ============================================================================
// 4. NAVBAR DINÁMICO POR UNIDAD (acumulativo)
// ============================================================================
// DynamicNav.vue lee este mapa y, según la URL actual, muestra la unidad en la
// que estás y TODAS las anteriores. Así el alumno nunca ve unidades que aún no
// se han impartido, pero siempre puede volver a las ya vistas.

export const unitNavbars: Record<string, NavGroup[]> = {

  // --- Español ---
  'uf1': [
    {
      text: '📚 Unidades',
      items: [
        { text: 'UF1 - Fundamentos de Programación', link: '/uf1/' },
      ],
    },
  ],
  'uf2': [
    {
      text: '📚 Unidades',
      items: [
        { text: 'UF1 - Fundamentos de Programación', link: '/uf1/' },
        { text: 'UF2 - Representación de Algoritmos', link: '/uf2/' },
      ],
    },
  ],
  'uf3-1': [
    {
      text: '📚 Unidades',
      items: [
        { text: 'UF1 - Fundamentos de Programación', link: '/uf1/' },
        { text: 'UF2 - Representación de Algoritmos', link: '/uf2/' },
        { text: 'UF3.1 - Introducción a la Programación I', link: '/uf3-1/' },
      ],
    },
  ],
  'uf3-2': [
    {
      text: '📚 Unidades',
      items: [
        { text: 'UF1 - Fundamentos de Programación', link: '/uf1/' },
        { text: 'UF2 - Representación de Algoritmos', link: '/uf2/' },
        { text: 'UF3.1 - Introducción a la Programación I', link: '/uf3-1/' },
        { text: 'UF3.2 - Introducción a la Programación II', link: '/uf3-2/' },
      ],
    },
  ],
  'uf4': [
    {
      text: '📚 Unidades',
      items: [
        { text: 'UF1 - Fundamentos de Programación', link: '/uf1/' },
        { text: 'UF2 - Representación de Algoritmos', link: '/uf2/' },
        { text: 'UF3.1 - Introducción a la Programación I', link: '/uf3-1/' },
        { text: 'UF3.2 - Introducción a la Programación II', link: '/uf3-2/' },
        { text: 'UF4 - Estructuras repetitivas', link: '/uf4/' },
      ],
    },
  ],
  'uf5-1': [
    {
      text: '📚 Unidades',
      items: [
        { text: 'UF1 - Fundamentos de Programación', link: '/uf1/' },
        { text: 'UF2 - Representación de Algoritmos', link: '/uf2/' },
        { text: 'UF3.1 - Introducción a la Programación I', link: '/uf3-1/' },
        { text: 'UF3.2 - Introducción a la Programación II', link: '/uf3-2/' },
        { text: 'UF4 - Estructuras repetitivas', link: '/uf4/' },
        { text: 'UF5.1 - Estructuras de Datos Dinámicas I', link: '/uf5-1/' },
      ],
    },
  ],
  'uf5-2': [
    {
      text: '📚 Unidades',
      items: [
        { text: 'UF1 - Fundamentos de Programación', link: '/uf1/' },
        { text: 'UF2 - Representación de Algoritmos', link: '/uf2/' },
        { text: 'UF3.1 - Introducción a la Programación I', link: '/uf3-1/' },
        { text: 'UF3.2 - Introducción a la Programación II', link: '/uf3-2/' },
        { text: 'UF4 - Estructuras repetitivas', link: '/uf4/' },
        { text: 'UF5.1 - Estructuras de Datos Dinámicas I', link: '/uf5-1/' },
        { text: 'UF5.2 - Estructuras de Datos Dinámicas II', link: '/uf5-2/' },
      ],
    },
  ],
  'uf6': [
    {
      text: '📚 Unidades',
      items: [
        { text: 'UF1 - Fundamentos de Programación', link: '/uf1/' },
        { text: 'UF2 - Representación de Algoritmos', link: '/uf2/' },
        { text: 'UF3.1 - Introducción a la Programación I', link: '/uf3-1/' },
        { text: 'UF3.2 - Introducción a la Programación II', link: '/uf3-2/' },
        { text: 'UF4 - Estructuras repetitivas', link: '/uf4/' },
        { text: 'UF5.1 - Estructuras de Datos Dinámicas I', link: '/uf5-1/' },
        { text: 'UF5.2 - Estructuras de Datos Dinámicas II', link: '/uf5-2/' },
        { text: 'UF6 - Funciones', link: '/uf6/' },
      ],
    },
  ],
  'uf7': [
    {
      text: '📚 Unidades',
      items: [
        { text: 'UF1 - Fundamentos de Programación', link: '/uf1/' },
        { text: 'UF2 - Representación de Algoritmos', link: '/uf2/' },
        { text: 'UF3.1 - Introducción a la Programación I', link: '/uf3-1/' },
        { text: 'UF3.2 - Introducción a la Programación II', link: '/uf3-2/' },
        { text: 'UF4 - Estructuras repetitivas', link: '/uf4/' },
        { text: 'UF5.1 - Estructuras de Datos Dinámicas I', link: '/uf5-1/' },
        { text: 'UF5.2 - Estructuras de Datos Dinámicas II', link: '/uf5-2/' },
        { text: 'UF6 - Funciones', link: '/uf6/' },
        { text: 'UF7 - Programación Orientada a Objetos I', link: '/uf7/' },
      ],
    },
  ],
  'uf8': [
    {
      text: '📚 Unidades',
      items: [
        { text: 'UF1 - Fundamentos de Programación', link: '/uf1/' },
        { text: 'UF2 - Representación de Algoritmos', link: '/uf2/' },
        { text: 'UF3.1 - Introducción a la Programación I', link: '/uf3-1/' },
        { text: 'UF3.2 - Introducción a la Programación II', link: '/uf3-2/' },
        { text: 'UF4 - Estructuras repetitivas', link: '/uf4/' },
        { text: 'UF5.1 - Estructuras de Datos Dinámicas I', link: '/uf5-1/' },
        { text: 'UF5.2 - Estructuras de Datos Dinámicas II', link: '/uf5-2/' },
        { text: 'UF6 - Funciones', link: '/uf6/' },
        { text: 'UF7 - Programación Orientada a Objetos I', link: '/uf7/' },
        { text: 'UF8 - Programación Orientada a Objetos II', link: '/uf8/' },
      ],
    },
  ],
  'uf9': [
    {
      text: '📚 Unidades',
      items: [
        { text: 'UF1 - Fundamentos de Programación', link: '/uf1/' },
        { text: 'UF2 - Representación de Algoritmos', link: '/uf2/' },
        { text: 'UF3.1 - Introducción a la Programación I', link: '/uf3-1/' },
        { text: 'UF3.2 - Introducción a la Programación II', link: '/uf3-2/' },
        { text: 'UF4 - Estructuras repetitivas', link: '/uf4/' },
        { text: 'UF5.1 - Estructuras de Datos Dinámicas I', link: '/uf5-1/' },
        { text: 'UF5.2 - Estructuras de Datos Dinámicas II', link: '/uf5-2/' },
        { text: 'UF6 - Funciones', link: '/uf6/' },
        { text: 'UF7 - Programación Orientada a Objetos I', link: '/uf7/' },
        { text: 'UF8 - Programación Orientada a Objetos II', link: '/uf8/' },
        { text: 'UF9 - Excepciones', link: '/uf9/' },
      ],
    },
  ],
  'uf10': [
    {
      text: '📚 Unidades',
      items: [
        { text: 'UF1 - Fundamentos de Programación', link: '/uf1/' },
        { text: 'UF2 - Representación de Algoritmos', link: '/uf2/' },
        { text: 'UF3.1 - Introducción a la Programación I', link: '/uf3-1/' },
        { text: 'UF3.2 - Introducción a la Programación II', link: '/uf3-2/' },
        { text: 'UF4 - Estructuras repetitivas', link: '/uf4/' },
        { text: 'UF5.1 - Estructuras de Datos Dinámicas I', link: '/uf5-1/' },
        { text: 'UF5.2 - Estructuras de Datos Dinámicas II', link: '/uf5-2/' },
        { text: 'UF6 - Funciones', link: '/uf6/' },
        { text: 'UF7 - Programación Orientada a Objetos I', link: '/uf7/' },
        { text: 'UF8 - Programación Orientada a Objetos II', link: '/uf8/' },
        { text: 'UF9 - Excepciones', link: '/uf9/' },
        { text: 'UF10 - Persistencia de datos I: Ficheros', link: '/uf10/' },
      ],
    },
  ],
  'uf11': [
    {
      text: '📚 Unidades',
      items: [
        { text: 'UF1 - Fundamentos de Programación', link: '/uf1/' },
        { text: 'UF2 - Representación de Algoritmos', link: '/uf2/' },
        { text: 'UF3.1 - Introducción a la Programación I', link: '/uf3-1/' },
        { text: 'UF3.2 - Introducción a la Programación II', link: '/uf3-2/' },
        { text: 'UF4 - Estructuras repetitivas', link: '/uf4/' },
        { text: 'UF5.1 - Estructuras de Datos Dinámicas I', link: '/uf5-1/' },
        { text: 'UF5.2 - Estructuras de Datos Dinámicas II', link: '/uf5-2/' },
        { text: 'UF6 - Funciones', link: '/uf6/' },
        { text: 'UF7 - Programación Orientada a Objetos I', link: '/uf7/' },
        { text: 'UF8 - Programación Orientada a Objetos II', link: '/uf8/' },
        { text: 'UF9 - Excepciones', link: '/uf9/' },
        { text: 'UF10 - Persistencia de datos I: Ficheros', link: '/uf10/' },
        { text: 'UF11 - Persistencia de datos II: Bases de datos', link: '/uf11/' },
      ],
    },
  ],
  'uf12': [
    {
      text: '📚 Unidades',
      items: [
        { text: 'UF1 - Fundamentos de Programación', link: '/uf1/' },
        { text: 'UF2 - Representación de Algoritmos', link: '/uf2/' },
        { text: 'UF3.1 - Introducción a la Programación I', link: '/uf3-1/' },
        { text: 'UF3.2 - Introducción a la Programación II', link: '/uf3-2/' },
        { text: 'UF4 - Estructuras repetitivas', link: '/uf4/' },
        { text: 'UF5.1 - Estructuras de Datos Dinámicas I', link: '/uf5-1/' },
        { text: 'UF5.2 - Estructuras de Datos Dinámicas II', link: '/uf5-2/' },
        { text: 'UF6 - Funciones', link: '/uf6/' },
        { text: 'UF7 - Programación Orientada a Objetos I', link: '/uf7/' },
        { text: 'UF8 - Programación Orientada a Objetos II', link: '/uf8/' },
        { text: 'UF9 - Excepciones', link: '/uf9/' },
        { text: 'UF10 - Persistencia de datos I: Ficheros', link: '/uf10/' },
        { text: 'UF11 - Persistencia de datos II: Bases de datos', link: '/uf11/' },
        { text: 'UF12 - Interfaces gráficas', link: '/uf12/' },
      ],
    },
  ],

  // --- Valencià ---
  'ca/uf1': [
    {
      text: '📚 Unitats',
      items: [
        { text: 'UF1 - Fonaments de Programació', link: '/ca/uf1/' },
      ],
    },
  ],
  'ca/uf2': [
    {
      text: '📚 Unitats',
      items: [
        { text: 'UF1 - Fonaments de Programació', link: '/ca/uf1/' },
        { text: 'UF2 - Representació d\'Algoritmes', link: '/ca/uf2/' },
      ],
    },
  ],
  'ca/uf3-1': [
    {
      text: '📚 Unitats',
      items: [
        { text: 'UF1 - Fonaments de Programació', link: '/ca/uf1/' },
        { text: 'UF2 - Representació d\'Algoritmes', link: '/ca/uf2/' },
        { text: 'UF3.1 - Introducció a la Programació I', link: '/ca/uf3-1/' },
      ],
    },
  ],
  'ca/uf3-2': [
    {
      text: '📚 Unitats',
      items: [
        { text: 'UF1 - Fonaments de Programació', link: '/ca/uf1/' },
        { text: 'UF2 - Representació d\'Algoritmes', link: '/ca/uf2/' },
        { text: 'UF3.1 - Introducció a la Programació I', link: '/ca/uf3-1/' },
        { text: 'UF3.2 - Introducció a la Programació II', link: '/ca/uf3-2/' },
      ],
    },
  ],
  'ca/uf4': [
    {
      text: '📚 Unitats',
      items: [
        { text: 'UF1 - Fonaments de Programació', link: '/ca/uf1/' },
        { text: 'UF2 - Representació d\'Algoritmes', link: '/ca/uf2/' },
        { text: 'UF3.1 - Introducció a la Programació I', link: '/ca/uf3-1/' },
        { text: 'UF3.2 - Introducció a la Programació II', link: '/ca/uf3-2/' },
        { text: 'UF4 - Estructures repetitives', link: '/ca/uf4/' },
      ],
    },
  ],
  'ca/uf5-1': [
    {
      text: '📚 Unitats',
      items: [
        { text: 'UF1 - Fonaments de Programació', link: '/ca/uf1/' },
        { text: 'UF2 - Representació d\'Algoritmes', link: '/ca/uf2/' },
        { text: 'UF3.1 - Introducció a la Programació I', link: '/ca/uf3-1/' },
        { text: 'UF3.2 - Introducció a la Programació II', link: '/ca/uf3-2/' },
        { text: 'UF4 - Estructures repetitives', link: '/ca/uf4/' },
        { text: 'UF5.1 - Estructures de Dades Dinàmiques I', link: '/ca/uf5-1/' },
      ],
    },
  ],
  'ca/uf5-2': [
    {
      text: '📚 Unitats',
      items: [
        { text: 'UF1 - Fonaments de Programació', link: '/ca/uf1/' },
        { text: 'UF2 - Representació d\'Algoritmes', link: '/ca/uf2/' },
        { text: 'UF3.1 - Introducció a la Programació I', link: '/ca/uf3-1/' },
        { text: 'UF3.2 - Introducció a la Programació II', link: '/ca/uf3-2/' },
        { text: 'UF4 - Estructures repetitives', link: '/ca/uf4/' },
        { text: 'UF5.1 - Estructures de Dades Dinàmiques I', link: '/ca/uf5-1/' },
        { text: 'UF5.2 - Estructures de Dades Dinàmiques II', link: '/ca/uf5-2/' },
      ],
    },
  ],
  'ca/uf6': [
    {
      text: '📚 Unitats',
      items: [
        { text: 'UF1 - Fonaments de Programació', link: '/ca/uf1/' },
        { text: 'UF2 - Representació d\'Algoritmes', link: '/ca/uf2/' },
        { text: 'UF3.1 - Introducció a la Programació I', link: '/ca/uf3-1/' },
        { text: 'UF3.2 - Introducció a la Programació II', link: '/ca/uf3-2/' },
        { text: 'UF4 - Estructures repetitives', link: '/ca/uf4/' },
        { text: 'UF5.1 - Estructures de Dades Dinàmiques I', link: '/ca/uf5-1/' },
        { text: 'UF5.2 - Estructures de Dades Dinàmiques II', link: '/ca/uf5-2/' },
        { text: 'UF6 - Funcions', link: '/ca/uf6/' },
      ],
    },
  ],
  'ca/uf7': [
    {
      text: '📚 Unitats',
      items: [
        { text: 'UF1 - Fonaments de Programació', link: '/ca/uf1/' },
        { text: 'UF2 - Representació d\'Algoritmes', link: '/ca/uf2/' },
        { text: 'UF3.1 - Introducció a la Programació I', link: '/ca/uf3-1/' },
        { text: 'UF3.2 - Introducció a la Programació II', link: '/ca/uf3-2/' },
        { text: 'UF4 - Estructures repetitives', link: '/ca/uf4/' },
        { text: 'UF5.1 - Estructures de Dades Dinàmiques I', link: '/ca/uf5-1/' },
        { text: 'UF5.2 - Estructures de Dades Dinàmiques II', link: '/ca/uf5-2/' },
        { text: 'UF6 - Funcions', link: '/ca/uf6/' },
        { text: 'UF7 - Programació Orientada a Objectes I', link: '/ca/uf7/' },
      ],
    },
  ],
  'ca/uf8': [
    {
      text: '📚 Unitats',
      items: [
        { text: 'UF1 - Fonaments de Programació', link: '/ca/uf1/' },
        { text: 'UF2 - Representació d\'Algoritmes', link: '/ca/uf2/' },
        { text: 'UF3.1 - Introducció a la Programació I', link: '/ca/uf3-1/' },
        { text: 'UF3.2 - Introducció a la Programació II', link: '/ca/uf3-2/' },
        { text: 'UF4 - Estructures repetitives', link: '/ca/uf4/' },
        { text: 'UF5.1 - Estructures de Dades Dinàmiques I', link: '/ca/uf5-1/' },
        { text: 'UF5.2 - Estructures de Dades Dinàmiques II', link: '/ca/uf5-2/' },
        { text: 'UF6 - Funcions', link: '/ca/uf6/' },
        { text: 'UF7 - Programació Orientada a Objectes I', link: '/ca/uf7/' },
        { text: 'UF8 - Programació Orientada a Objectes II', link: '/ca/uf8/' },
      ],
    },
  ],
  'ca/uf9': [
    {
      text: '📚 Unitats',
      items: [
        { text: 'UF1 - Fonaments de Programació', link: '/ca/uf1/' },
        { text: 'UF2 - Representació d\'Algoritmes', link: '/ca/uf2/' },
        { text: 'UF3.1 - Introducció a la Programació I', link: '/ca/uf3-1/' },
        { text: 'UF3.2 - Introducció a la Programació II', link: '/ca/uf3-2/' },
        { text: 'UF4 - Estructures repetitives', link: '/ca/uf4/' },
        { text: 'UF5.1 - Estructures de Dades Dinàmiques I', link: '/ca/uf5-1/' },
        { text: 'UF5.2 - Estructures de Dades Dinàmiques II', link: '/ca/uf5-2/' },
        { text: 'UF6 - Funcions', link: '/ca/uf6/' },
        { text: 'UF7 - Programació Orientada a Objectes I', link: '/ca/uf7/' },
        { text: 'UF8 - Programació Orientada a Objectes II', link: '/ca/uf8/' },
        { text: 'UF9 - Excepcions', link: '/ca/uf9/' },
      ],
    },
  ],
  'ca/uf10': [
    {
      text: '📚 Unitats',
      items: [
        { text: 'UF1 - Fonaments de Programació', link: '/ca/uf1/' },
        { text: 'UF2 - Representació d\'Algoritmes', link: '/ca/uf2/' },
        { text: 'UF3.1 - Introducció a la Programació I', link: '/ca/uf3-1/' },
        { text: 'UF3.2 - Introducció a la Programació II', link: '/ca/uf3-2/' },
        { text: 'UF4 - Estructures repetitives', link: '/ca/uf4/' },
        { text: 'UF5.1 - Estructures de Dades Dinàmiques I', link: '/ca/uf5-1/' },
        { text: 'UF5.2 - Estructures de Dades Dinàmiques II', link: '/ca/uf5-2/' },
        { text: 'UF6 - Funcions', link: '/ca/uf6/' },
        { text: 'UF7 - Programació Orientada a Objectes I', link: '/ca/uf7/' },
        { text: 'UF8 - Programació Orientada a Objectes II', link: '/ca/uf8/' },
        { text: 'UF9 - Excepcions', link: '/ca/uf9/' },
        { text: 'UF10 - Persistència de dades I: Fitxers', link: '/ca/uf10/' },
      ],
    },
  ],
  'ca/uf11': [
    {
      text: '📚 Unitats',
      items: [
        { text: 'UF1 - Fonaments de Programació', link: '/ca/uf1/' },
        { text: 'UF2 - Representació d\'Algoritmes', link: '/ca/uf2/' },
        { text: 'UF3.1 - Introducció a la Programació I', link: '/ca/uf3-1/' },
        { text: 'UF3.2 - Introducció a la Programació II', link: '/ca/uf3-2/' },
        { text: 'UF4 - Estructures repetitives', link: '/ca/uf4/' },
        { text: 'UF5.1 - Estructures de Dades Dinàmiques I', link: '/ca/uf5-1/' },
        { text: 'UF5.2 - Estructures de Dades Dinàmiques II', link: '/ca/uf5-2/' },
        { text: 'UF6 - Funcions', link: '/ca/uf6/' },
        { text: 'UF7 - Programació Orientada a Objectes I', link: '/ca/uf7/' },
        { text: 'UF8 - Programació Orientada a Objectes II', link: '/ca/uf8/' },
        { text: 'UF9 - Excepcions', link: '/ca/uf9/' },
        { text: 'UF10 - Persistència de dades I: Fitxers', link: '/ca/uf10/' },
        { text: 'UF11 - Persistència de dades II: Bases de dades', link: '/ca/uf11/' },
      ],
    },
  ],
  'ca/uf12': [
    {
      text: '📚 Unitats',
      items: [
        { text: 'UF1 - Fonaments de Programació', link: '/ca/uf1/' },
        { text: 'UF2 - Representació d\'Algoritmes', link: '/ca/uf2/' },
        { text: 'UF3.1 - Introducció a la Programació I', link: '/ca/uf3-1/' },
        { text: 'UF3.2 - Introducció a la Programació II', link: '/ca/uf3-2/' },
        { text: 'UF4 - Estructures repetitives', link: '/ca/uf4/' },
        { text: 'UF5.1 - Estructures de Dades Dinàmiques I', link: '/ca/uf5-1/' },
        { text: 'UF5.2 - Estructures de Dades Dinàmiques II', link: '/ca/uf5-2/' },
        { text: 'UF6 - Funcions', link: '/ca/uf6/' },
        { text: 'UF7 - Programació Orientada a Objectes I', link: '/ca/uf7/' },
        { text: 'UF8 - Programació Orientada a Objectes II', link: '/ca/uf8/' },
        { text: 'UF9 - Excepcions', link: '/ca/uf9/' },
        { text: 'UF10 - Persistència de dades I: Fitxers', link: '/ca/uf10/' },
        { text: 'UF11 - Persistència de dades II: Bases de dades', link: '/ca/uf11/' },
        { text: 'UF12 - Interfícies gràfiques', link: '/ca/uf12/' },
      ],
    },
  ],
}
