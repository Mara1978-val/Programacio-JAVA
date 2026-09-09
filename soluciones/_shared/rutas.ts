// ============================================================================
// RUTAS PRIVADAS DE LAS SOLUCIONES
// ============================================================================
// Cada unidad se publica como un sitio independiente bajo su propia ruta, con
// un código aleatorio de longitud distinta (14–22 caracteres):
//
//   /<basePath>/<ruta de uf7>/15-solucions     ← solo las soluciones de UF7
//   /<basePath>/<ruta de profesor>/            ← índice con todas
//
// POR QUÉ UN SITIO POR UNIDAD
// VitePress inyecta el mapa de TODAS las rutas de un sitio en el HTML de cada
// una de sus páginas. Si las 12 soluciones vivieran en un mismo sitio, dar el
// enlace de una a un alumno le enseñaría las otras once en «ver código fuente».
// Al ser sitios separados, el mapa de cada uno contiene solo sus propias
// páginas: compartir la de UF7 no revela ni las demás ni el índice.
//
// USO
//   · Comparte con el alumnado la ruta de UNA unidad, nunca la de 'profesor'.
//   · Para rotar una: cambia su código aquí y vuelve a desplegar. La ruta
//     antigua desaparece, porque docs/ se regenera entero en cada build.
//   · No enlaces ninguna de estas rutas desde el temario.
// ============================================================================

export const RUTAS: Record<string, string> = {
  'uf2': 'BZDrSyzlCLQzil',
  'uf3-2': 'nsG1nJBLNNToqxQS',
  'uf4': 'ETmJXvBcQWlqZ0yB05vQ1',
  'uf5-1': 'zt5O0ulapRFSHt',
  'uf5-2': 'Tcp51U1PLAb0SuTLKr',
  'uf6': 'NJiEF5AuEqFtjsa',
  'uf7': 'tuGFxTnj9kFssvv',
  'uf8': 'eRoN1yAo254X6ocTF',
  'uf9': 'Dr9q5f5MuebozcT3D',
  'uf10': 'kAcB1FwWPIDcN3ME6',
  'uf11': '13sAkwpzWY7oyq9OtI6',
  'profesor': 'x9mzOyywsUHILK',
}
