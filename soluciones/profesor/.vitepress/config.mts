// Índice del profesorado: la única página que conoce las rutas de todas las
// unidades. No la compartas con el alumnado — para eso está la ruta de cada
// unidad por separado.
import { crearSitioSoluciones } from '../../_shared/config'
import { indiceConEnlaces } from '../../_shared/indice'
import { PROJECT } from '../../../src/.vitepress/config/project'

export default crearSitioSoluciones({
  clave:     'profesor',
  titulo:    'Solucions 26/27 · Professorat',
  siteTitle: 'Solucions</br>26/27',
  // La portada lo lee con useData(): así las URLs salen siempre de rutas.ts.
  extraTheme: { indiceSolucions: indiceConEnlaces(PROJECT.basePath) },
})
