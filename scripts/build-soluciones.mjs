#!/usr/bin/env node
/**
 * Construye los sitios de soluciones: uno por unidad, más el índice del
 * profesorado. Cada uno se publica en su propia ruta privada dentro de docs/
 * (ver soluciones/_shared/rutas.ts).
 *
 * Son sitios VitePress independientes a propósito: VitePress inyecta el mapa de
 * todas las rutas de un sitio en cada una de sus páginas, así que compartir la
 * solución de una unidad solo puede dejar de revelar las demás si viven en
 * sitios separados.
 *
 *   node scripts/build-soluciones.mjs
 */
import { execFileSync } from 'node:child_process'
import { readdirSync, statSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const raiz = join(dirname(fileURLToPath(import.meta.url)), '..')
const base = join(raiz, 'soluciones')

// Todo directorio de soluciones/ con .vitepress/ es un sitio. '_shared' queda
// fuera: es código compartido, no un sitio.
const sitios = readdirSync(base)
  .filter(n => !n.startsWith('_'))
  .filter(n => statSync(join(base, n)).isDirectory())
  .filter(n => { try { return statSync(join(base, n, '.vitepress')).isDirectory() } catch { return false } })
  .sort()

if (sitios.length === 0) {
  console.error('No se encontró ningún sitio de soluciones en soluciones/')
  process.exit(1)
}

console.log(`Construyendo ${sitios.length} sitios de soluciones…`)
for (const [i, sitio] of sitios.entries()) {
  process.stdout.write(`  [${String(i + 1).padStart(2)}/${sitios.length}] ${sitio.padEnd(10)} `)
  const t = Date.now()
  try {
    execFileSync('npx', ['vitepress', 'build', join('soluciones', sitio)], {
      cwd: raiz, stdio: ['ignore', 'pipe', 'pipe'],
    })
  } catch (err) {
    console.log('✗')
    console.error(err.stdout?.toString() ?? '', err.stderr?.toString() ?? '')
    process.exit(1)
  }
  console.log(`✓ ${((Date.now() - t) / 1000).toFixed(1)}s`)
}
console.log('Sitios de soluciones construidos.')
