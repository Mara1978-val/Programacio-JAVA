// Índice del profesorado: la única página que conoce las rutas privadas de
// todas las unidades, y el punto de entrada al temario en los dos idiomas.
// No la compartas con el alumnado — para eso está la ruta de cada unidad
// por separado.
import { crearSitioSoluciones } from '../../_shared/config'
import { indiceProfesorado } from '../../_shared/indice'
import { PROJECT } from '../../../src/.vitepress/config/project'

export default crearSitioSoluciones({
  clave:       'profesor',
  titulo:      'Índex del professorat 26/27',
  siteTitle:   'Índex del</br>professorat',
  tituloEs:    'Índice del profesorado 26/27',
  siteTitleEs: 'Índice del</br>profesorado',
  // La portada lo lee con useData(): así las URLs salen siempre de rutas.ts
  // y los títulos de units.ts. Cada idioma toma su rótulo de la misma fila.
  extraTheme: { indiceProfesorado: indiceProfesorado(PROJECT.basePath) },
})
