# 💻 Programación (PRO) — CFGS DAM / DAW

Temario completo del módulo de **Programación**, unificado en un único sitio VitePress a partir de los 14 repositorios de unidad formativa (`UF1` … `UF12`) de la organización `GGPRO-JAVA`.

Construido sobre la plantilla [EduPress](https://github.com/GGEdu/EduPress).

---

## Qué contiene

| | |
|---|---|
| **Unidades formativas** | 14 (UF1, UF2, UF3.1, UF3.2, UF4, UF5.1, UF5.2, UF6, UF7, UF8, UF9, UF10, UF11, UF12) |
| **Páginas de contenido** | 152 en valenciano + 152 avisos de traducción en español |
| **Imágenes** | 220, separadas por unidad en `src/public/img/<uf>/` |
| **Idiomas** | Español (`/`) y Valencià (`/ca/`) |

El contenido docente completo está en **valenciano**, tal como se impartió. La versión en español está en preparación: cada página tiene su equivalente con el aviso de traducción y un enlace directo a la página en valenciano.

---

## Estructura

**El idioma es siempre el primer nivel de carpeta**, tanto en el temario como en
las soluciones. Las URLs no lo reflejan del todo: en cada sitio uno de los dos
idiomas es la *locale raíz* y se publica sin prefijo. Esa correspondencia la hace
una regla `rewrites` en la configuración, así que puedes reorganizar carpetas sin
tocar URLs (y al revés).

| | Carpeta | URL |
|---|---|---|
| Temario, castellano (raíz) | `src/es/uf1/` | `/uf1/` |
| Temario, valencià | `src/ca/uf1/` | `/ca/uf1/` |
| Soluciones, valencià (raíz) | `soluciones/uf7/ca/` | `/<ruta privada>/` |
| Soluciones, castellano | `soluciones/uf7/es/` | `/<ruta privada>/es/` |

```text
src/                            # ── Sitio público (alumnado) ──
├── ca/                         # Valencià — el contenido real
│   ├── index.md                #   Portada
│   └── uf1/ … uf12/
│       ├── index.md            #   Portada de la unidad
│       ├── contenidos/         #   Teoría y contenidos adicionales
│       └── ejercicios/         #   Enunciados
├── es/                         # Español — avisos de traducción, misma forma
│   ├── index.md
│   └── uf1/ … uf12/
├── _partials/                  # Fragmentos <!--@include:-->, no son páginas
│   ├── info-modul.md           #   Ficha del módulo (valencià)
│   └── info-modulo.md          #   Ficha del módulo (castellano)
├── public/img/
│   ├── uf1/ … uf12/            # Imágenes separadas por unidad
│   └── logo*.png               # Marca: módulo, centro, GVA
└── .vitepress/
    ├── config.mts              # Configuración VitePress (no suele tocarse)
    └── config/
        ├── shared.ts           # Contenedores y variables CSS (compartido)
        ├── project.ts          # basePath, idiomas, copyright, licencia
        ├── colors.ts           # Paleta
        ├── logos.ts            # Logos y alturas
        └── units.ts            # 👤 Unidades, sidebars y navbar acumulativo

soluciones/                     # ── Un sitio independiente por unidad ──
├── _shared/
│   ├── rutas.ts                # 🔑 Las rutas privadas (una por unidad)
│   ├── config.ts               # Fábrica de config común a todos
│   └── indice.ts               # Índice que alimenta la portada del profesorado
├── profesor/                   # Índice con TODAS las rutas — no compartir
│   ├── .vitepress/
│   ├── ca/index.md
│   └── es/index.md
├── uf7/                        # Sitio propio de las soluciones de UF7
│   ├── .vitepress/
│   ├── ca/{index.md, 15-solucions.md}
│   ├── es/{index.md, 15-solucions.md}    # Puentes al material en valencià
│   └── public/img/logo.png               # Marca de agua al imprimir
└── uf2/ uf3-2/ uf4/ …          # Una carpeta por unidad con soluciones
```

> **Por qué `soluciones/` está fuera de `src/`.** VitePress inyecta el mapa de
> todas las rutas de un sitio en el HTML de cada una de sus páginas. Si las
> soluciones vivieran bajo `src/`, lo único que las mantendría fuera del sitio
> público sería la lista `srcExclude` — una línea de configuración cuyo fallo
> sería silencioso. Al estar fuera, la separación es física.

### Códigos de unidad

Cada unidad formativa aparece **dos veces** en `units.ts`, una por idioma:

| Unidad | Español | Valencià |
|---|---|---|
| UF1 | `uf1` → `/uf1/` | `ca/uf1` → `/ca/uf1/` |
| UF3.1 | `uf3-1` → `/uf3-1/` | `ca/uf3-1` → `/ca/uf3-1/` |

VitePress sirve el sidebar según el prefijo de la URL, así que ambos idiomas conviven sin colisionar.

---

## Navegación

- **Navbar acumulativo** — el desplegable **📚 Unidades / Unitats** muestra la unidad en la que estás y **todas las anteriores**. Lo pinta `DynamicNav.vue` leyendo `unitNavbars` de `config/units.ts` según la URL actual: el alumno no ve unidades que aún no se han impartido, pero siempre puede volver a las ya vistas.
- **Sidebar por unidad** — contenidos, contenidos adicionales y ejercicios. El grupo de soluciones solo aparece en el build del profesorado (ver más abajo).
- **Selector de idioma** — lo genera VitePress a partir de `locales` en `config.mts`; mantiene la página en la que estás al cambiar de idioma.

---

## Soluciones del profesorado

Cada unidad con soluciones se publica como un **sitio VitePress independiente**, bajo su propia
ruta privada de longitud variable (14–22 caracteres aleatorios), definida en
`soluciones/_shared/rutas.ts`:

```
/programacion/                    → temario, para el alumnado
/programacion/<ruta de uf7>/      → solo las soluciones de UF7
/programacion/<ruta de profesor>/ → índice con todas — no compartir
```

```bash
npm run build              # temario + los 12 sitios de soluciones
npm run build:soluciones   # solo los sitios de soluciones
npm run dev:soluciones     # índice del profesorado en local
```

### Compartir la solución de una unidad

Da al alumnado **el enlace de esa unidad**. Quien lo reciba no puede llegar ni a las soluciones
de otras unidades ni al índice del profesorado: son sitios distintos y el código fuente de uno
no menciona ninguna dirección de los demás. Comprobado en cada build.

### Por qué un sitio por unidad y no una carpeta oculta

VitePress inyecta el mapa de **todas** las rutas de un sitio (`__VP_HASH_MAP__`) en el HTML de
cada una de sus páginas, y lo escribe además en `hashmap.json`. Dentro de un mismo sitio no hay
forma de esconder una página de otra: da igual lo aleatorio que sea el nombre de su carpeta,
porque el mapa lista la ruta entera. Con todas las soluciones en un único sitio, dar el enlace
de UF7 enseñaba las otras once en «ver código fuente».

Al ser sitios separados, el mapa de cada uno contiene solo sus propias páginas:

| Sitio | Entradas en su mapa |
|---|---|
| Temario | 283 — ninguna de soluciones |
| Soluciones de UF7 | 2 — su portada y su solución |
| Índice del profesorado | 1 |

### Reglas de uso

- **La ruta de `profesor` no se comparte nunca**: es la única que conoce todas las demás.
- **No enlaces ninguna ruta privada** desde el temario ni desde el aula virtual.
- **Para rotar una**: cambia su código en `soluciones/_shared/rutas.ts` y vuelve a desplegar.
  La ruta antigua desaparece porque `docs/` se regenera entero, y el índice del profesorado se
  actualiza solo (lee de `rutas.ts`, no hay direcciones escritas a mano en ningún `.md`).
- Esto es ocultación, no autenticación: quien tenga una dirección entra. Para control real de
  acceso, protege esas rutas con Cloudflare Access (el patrón de `introduccion-laravel`).

Los ficheros fuente viven en `soluciones/`, **fuera de `src/`**, así que no pueden colarse en el
sitio del alumnado. Todas las páginas privadas llevan `noindex, nofollow, noarchive`.

---

## Desarrollo

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # genera docs/
npm run preview    # sirve docs/ en http://localhost:4173
```

Con Docker, sin Node en la máquina:

```bash
docker compose up vitepress
```

---

## Añadir una página

1. Crea el `.md` en `src/ca/<uf>/contenidos/` (o `ejercicios/`, o `soluciones/`).
2. Crea su aviso de traducción en `src/es/<uf>/contenidos/` con el mismo nombre.
3. Añade ambos enlaces al sidebar de la unidad en `src/.vitepress/config/units.ts`.

Las imágenes van en `src/public/img/<uf>/` y se referencian como `![alt](/img/<uf>/archivo.png)`.

> **Nota sobre HTML crudo:** en las etiquetas `<img>` escritas en HTML dentro del Markdown, VitePress **no** antepone el `base` del sitio.
> Usa `<img :src="$withBase('/img/<uf>/archivo.png')">` — el helper `$withBase` está registrado como propiedad global en `theme/index.ts`.

---

## Despliegue

GitHub Actions (`.github/workflows/deploy.yml`) construye el sitio y lo publica en GitHub Pages en cada push a `main`. El `basePath` está fijado a `/programacion/` en `src/.vitepress/config/project.ts`; cámbialo si el repositorio se renombra o se publica en un dominio propio.

---

## Créditos

**Autores del contenido:** Guillermo Garrido Portes · David Tur Sanmateu
**Centro:** CEEDCV — Centre Específic d'Educació a Distància de la Comunitat Valenciana
**Licencia:** [CC BY-NC-ND 4.0](https://creativecommons.org/licenses/by-nc-nd/4.0/deed.es)
