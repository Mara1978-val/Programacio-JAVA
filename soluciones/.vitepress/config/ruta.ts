// ============================================================================
// RUTA PRIVADA DE LAS SOLUCIONES
// ============================================================================
// El sitio de soluciones se publica dentro del sitio principal, bajo esta ruta:
//   https://<dominio>{PROJECT.basePath}TJQffY21G8rpuOCtLRYE/
//
// Es lo único que separa a un alumno de las soluciones, así que:
//   · NO la enlaces desde ninguna página del temario ni desde el aula virtual.
//   · Compártela solo con el profesorado, y por un canal privado.
//   · Para rotarla: cambia esta constante y vuelve a desplegar. La ruta antigua
//     desaparece en el siguiente build (docs/ se regenera entero).
//
// Por qué una ruta y no un nombre de carpeta dentro del sitio del alumnado:
// VitePress inyecta el mapa de TODAS las rutas de un sitio en el HTML de cada
// una de sus páginas. Al ser un sitio VitePress independiente, su mapa solo
// contiene sus propias páginas; el sitio del alumnado no sabe que existe.
// ============================================================================

export const RUTA_PRIVADA = 'TJQffY21G8rpuOCtLRYE'
