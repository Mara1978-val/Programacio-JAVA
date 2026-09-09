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

```text
src/
├── index.md                    # Portada en español
├── ca/
│   ├── index.md                # Portada en valenciano
│   └── uf1/                    # ── Contenido real (valenciano) ──
│       ├── index.md            #    Portada de la unidad
│       ├── contenidos/         #    Teoría y contenidos adicionales
│       ├── ejercicios/         #    Enunciados
│       └── soluciones-<sufijo>/ #   Soluciones (fuera del build público)
├── uf1/                        # ── Español (avisos de traducción) ──
│   ├── index.md
│   ├── contenidos/
│   ├── ejercicios/
│   └── soluciones-<sufijo>/
├── profesorado/                # Índice de soluciones (fuera del build público)
├── ca/profesorado/             #    y su versión en valenciano
├── …                           # uf2 … uf12, en ambos idiomas
├── public/img/
│   ├── uf1/ … uf12/            # Imágenes separadas por unidad
│   └── logo*.png               # Marca: módulo, centro, GVA, autoría
└── .vitepress/
    ├── config.mts              # Configuración VitePress (no suele tocarse)
    └── config/
        ├── project.ts          # basePath, idiomas, copyright, licencia
        ├── colors.ts           # Paleta
        ├── logos.ts            # Logos y alturas
        └── units.ts            # 👤 Unidades, sidebars y navbar acumulativo
```

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

## Soluciones y material del profesorado

Las soluciones **no se publican en el sitio del alumnado**. No están ocultas: no se construyen.

```bash
npm run dev             # sitio del alumnado (sin soluciones)
npm run build           # ídem — es lo que ejecuta GitHub Actions

npm run dev:profesorado    # con soluciones y /profesorado/
npm run build:profesorado  # ídem, build completo
```

`config.mts` aplica `srcExclude: ['**/soluciones-*/**', '**/profesorado/**']` salvo que se
construya con `SOLUCIONES=1`, y `units.ts` añade el grupo `✅ Solucions` al sidebar bajo la
misma condición. El índice para el profesorado está en `src/profesorado/soluciones2627.md`
(y su versión valenciana), con el enlace a cada solución.

### Por qué no basta con ocultar la ruta

VitePress inyecta `__VP_HASH_MAP__` —el mapa de **todas** las rutas del sitio— en el HTML de
cada página, y además escribe `hashmap.json` en la raíz del build. Cualquier página construida
es localizable con «ver código fuente» en la portada, por muy aleatorio que sea el nombre de su
carpeta y aunque no la enlace nadie. Antes de este cambio, la portada exponía las 24 rutas de
soluciones. Por eso la protección es `srcExclude`: sin páginas, no hay rutas que filtrar.

Cada unidad usa además una carpeta `soluciones-<16 caracteres aleatorios>`, distinta en cada
unidad, como capa adicional por si el build del profesorado llegara a servirse sin control de
acceso delante. Es defensa en profundidad, no la protección principal.

### Si quieres las soluciones accesibles online

Lo robusto es autenticar, no ocultar: despliega el build del profesorado en un hostname aparte
protegido con Cloudflare Access, el mismo patrón que usa `introduccion-laravel`
(`functions/_middleware.js` cierra los dominios `*.pages.dev` para que el contenido solo salga
por el dominio propio, donde Access valida la identidad antes de servir el asset).

Comprobación rápida de que el build público no filtra nada:

```bash
npm run build && grep -ril "soluciones-" docs/ | wc -l   # debe dar 0
```

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
2. Crea su aviso de traducción en `src/<uf>/contenidos/` con el mismo nombre.
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
