// ============================================================================
// ÍNDICE DE SOLUCIONES
// ============================================================================
// Alimenta la portada del sitio del profesorado. Las URLs se construyen a
// partir de RUTAS, así que rotar la ruta de una unidad en rutas.ts actualiza
// el índice solo: no hay direcciones escritas a mano en ningún .md.
// ============================================================================

import { RUTAS } from './rutas'

export interface PaginaSolucio { text: string; slug: string }
export interface UnitatSolucions {
  clave: string
  unidad: string
  titulo: string
  pagines: PaginaSolucio[]
}

export const INDICE: UnitatSolucions[] = [
  {
    clave:  'uf2',
    unidad: 'UF2',
    titulo: 'Representació d\'Algoritmes',
    pagines: [{ text: 'Solucions', slug: 'Solucions' }],
  },
  {
    clave:  'uf3-2',
    unidad: 'UF3.2',
    titulo: 'Introducció a la Programació II',
    pagines: [{ text: 'Solucions', slug: '14-solucions' }],
  },
  {
    clave:  'uf4',
    unidad: 'UF4',
    titulo: 'Estructures repetitives',
    pagines: [{ text: 'Solucions', slug: '8-solucions' }, { text: 'Solució de la tasca addicional', slug: '9-tasca-adicional-solucio' }],
  },
  {
    clave:  'uf5-1',
    unidad: 'UF5.1',
    titulo: 'Estructures de Dades Dinàmiques I',
    pagines: [{ text: 'Solucions', slug: '13-solucions' }],
  },
  {
    clave:  'uf5-2',
    unidad: 'UF5.2',
    titulo: 'Estructures de Dades Dinàmiques II',
    pagines: [{ text: 'Solucions', slug: '5-solucions' }],
  },
  {
    clave:  'uf6',
    unidad: 'UF6',
    titulo: 'Funcions',
    pagines: [{ text: 'Solucions', slug: '11-solucions' }],
  },
  {
    clave:  'uf7',
    unidad: 'UF7',
    titulo: 'Programació Orientada a Objectes I',
    pagines: [{ text: 'Solucions', slug: '15-solucions' }],
  },
  {
    clave:  'uf8',
    unidad: 'UF8',
    titulo: 'Programació Orientada a Objectes II',
    pagines: [{ text: 'Solucions', slug: '9-solucions' }],
  },
  {
    clave:  'uf9',
    unidad: 'UF9',
    titulo: 'Excepcions',
    pagines: [{ text: 'Solucions', slug: '8-solucions' }],
  },
  {
    clave:  'uf10',
    unidad: 'UF10',
    titulo: 'Persistència de dades I: Fitxers',
    pagines: [{ text: 'Solucions', slug: '6-solucions' }],
  },
  {
    clave:  'uf11',
    unidad: 'UF11',
    titulo: 'Persistència de dades II: Bases de dades',
    pagines: [{ text: 'Solucions', slug: '13-solucions' }],
  },
]

/** El índice con la URL absoluta ya resuelta de cada página. */
export function indiceConEnlaces(basePath: string) {
  return INDICE.map(u => ({
    ...u,
    pagines: u.pagines.map(p => ({
      ...p,
      url: `${basePath}${RUTAS[u.clave]}/${p.slug}`,
    })),
  }))
}
