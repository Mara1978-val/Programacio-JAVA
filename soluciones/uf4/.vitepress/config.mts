// Sitio de soluciones de UF4 - Estructures repetitives.
// Su ruta privada está en ../../_shared/rutas.ts; la configuración, en ../../_shared/config.ts.
import { crearSitioSoluciones } from '../../_shared/config'

export default crearSitioSoluciones({
  clave:     'uf4',
  titulo:    'Solucions · UF4 - Estructures repetitives',
  siteTitle: 'Solucions</br>UF4',
  sidebar: [
    {
      text: '✅ Solucions',
      collapsed: false,
      items: [
        { text: 'Solucions', link: '/8-solucions' },
        { text: 'Solució de la tasca addicional', link: '/9-tasca-adicional-solucio' },
      ],
    },
  ],
})
