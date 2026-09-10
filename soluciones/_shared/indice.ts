// ============================================================================
// ÍNDICE DEL PROFESORADO
// ============================================================================
// Alimenta la portada del sitio del profesorado, desde la que se llega tanto al
// temario del alumnado (en los dos idiomas) como a las soluciones.
//
// De dónde sale cada cosa:
//   · Los títulos, de UNITS (src/.vitepress/config/units.ts). No se reescriben
//     aquí, así que renombrar una unidad en el temario actualiza este índice.
//   · Las URLs de las soluciones, de RUTAS (./rutas.ts). Rotar la ruta de una
//     unidad allí basta: no hay direcciones escritas a mano en ningún .md.
//
// Para dar de alta las soluciones de una unidad nueva, añádela a RUTAS, crea su
// sitio en soluciones/<clave>/ y apúntala en SOLUCIONES, aquí abajo.
// ============================================================================

import { UNITS } from '../../src/.vitepress/config/units'
import { RUTAS } from './rutas'

export interface PaginaSolucion {
  text: string
  slug: string
}

/**
 * Orden en que se listan las unidades: el mismo que sigue el temario.
 * La clave es el `code` de la versión en castellano; la valenciana es 'ca/<clave>'.
 */
const ORDEN = [
  'uf1', 'uf2', 'uf3-1', 'uf3-2', 'uf4', 'uf5-1', 'uf5-2',
  'uf6', 'uf7', 'uf8', 'uf9', 'uf10', 'uf11', 'uf12',
]

/**
 * Páginas de soluciones publicadas de cada unidad. Las unidades que no
 * aparecen aquí salen en el índice con su temario pero sin soluciones.
 * El slug es el nombre del .md dentro de soluciones/<clave>/.
 */
const SOLUCIONES: Record<string, PaginaSolucion[]> = {
  'uf2':   [{ text: 'Soluciones', slug: 'Solucions' }],
  'uf3-2': [{ text: 'Soluciones', slug: '14-solucions' }],
  'uf4':   [
    { text: 'Soluciones', slug: '8-solucions' },
    { text: 'Solución de la tarea adicional', slug: '9-tasca-adicional-solucio' },
  ],
  'uf5-1': [{ text: 'Soluciones', slug: '13-solucions' }],
  'uf5-2': [{ text: 'Soluciones', slug: '5-solucions' }],
  'uf6':   [{ text: 'Soluciones', slug: '11-solucions' }],
  'uf7':   [{ text: 'Soluciones', slug: '15-solucions' }],
  'uf8':   [{ text: 'Soluciones', slug: '9-solucions' }],
  'uf9':   [{ text: 'Soluciones', slug: '8-solucions' }],
  'uf10':  [{ text: 'Soluciones', slug: '6-solucions' }],
  'uf11':  [{ text: 'Soluciones', slug: '13-solucions' }],
}

/** Los títulos de units.ts vienen como 'UF5.1 - Estructuras de Datos Dinámicas I'. */
function partirTitulo(title: string): { etiqueta: string; nombre: string } {
  const i = title.indexOf(' - ')
  if (i === -1) return { etiqueta: title, nombre: title }
  return { etiqueta: title.slice(0, i), nombre: title.slice(i + 3) }
}

const porCode = new Map(Object.values(UNITS).map(u => [u.code, u]))

export interface EnlaceIndice { text: string; url: string }
export interface FilaIndice {
  clave: string
  /** 'UF5.1', para la primera columna. */
  unidad: string
  icono: string
  /** Título y URL del temario en cada idioma. */
  es: EnlaceIndice
  ca: EnlaceIndice
  /** Vacío si la unidad todavía no tiene soluciones publicadas. */
  soluciones: EnlaceIndice[]
}

/**
 * El índice con todas las URLs ya resueltas.
 * @param basePath base del despliegue, con las barras incluidas ('/programacion/').
 */
export function indiceProfesorado(basePath: string): FilaIndice[] {
  return ORDEN.map(clave => {
    const unidadEs = porCode.get(clave)
    const unidadCa = porCode.get(`ca/${clave}`)
    if (!unidadEs || !unidadCa) {
      throw new Error(`La unidad '${clave}' del índice del profesorado no está en UNITS (units.ts)`)
    }

    const es = partirTitulo(unidadEs.title)
    const ca = partirTitulo(unidadCa.title)
    const ruta = RUTAS[clave]
    const paginas = SOLUCIONES[clave] ?? []

    if (paginas.length && !ruta) {
      throw new Error(`La unidad '${clave}' tiene soluciones pero ninguna ruta privada en rutas.ts`)
    }

    return {
      clave,
      unidad: es.etiqueta,
      icono: unidadEs.icon,
      es: { text: es.nombre, url: `${basePath}${clave}/` },
      ca: { text: ca.nombre, url: `${basePath}ca/${clave}/` },
      soluciones: paginas.map(p => ({
        text: p.text,
        url: `${basePath}${ruta}/${p.slug}`,
      })),
    }
  })
}
